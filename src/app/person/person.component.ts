import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Person } from '../shared/model/person.model';
import { Store, select } from '@ngrx/store';
import { FindPersons } from '../store/actions/person.actions';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PersonRemoveComponent } from './remove/person-remove.component';
import { PersonSaveComponent } from './save/person-save.component';
import { PersonService } from './person.service';
import * as PAGINATION_CONSTANTS from '../shared/constants/pagination.constants';
import { initialPerson } from '../store/states/states';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit, OnDestroy {

  result: Observable<Person[]>;
  pageNumber: number;
  sort: string;
  totalNumberOfRecords: number;
  perPage: number;

  perPageOptions = [10, 20, 50, 100];

  personListChangeSubscription: Subscription;
  totalNumberOfRecordsSubscription: Subscription;

  constructor(private store: Store<{persons: Person[]}>, private modalService: NgbModal, private personService: PersonService) { 
    this.pageNumber = 1;
    this.sort = 'firstName,ASC';
    this.perPage = PAGINATION_CONSTANTS.RESULTS_PER_PAGE;
    
    this.result = this.store.pipe(select('persons'));
  }

  ngOnInit() {
    this.initSubscriptions();
    this.getPersons();
  } 

  ngOnDestroy() {
    this.personListChangeSubscription.unsubscribe();
  }

  initSubscriptions() {
    this.personListChangeSubscription = this.personService.currentPersonListChange.subscribe((change: boolean) => {
      if (change) {
        this.getPersons();
      }
    });

    this.totalNumberOfRecordsSubscription = this.personService.currentTotalNumberOfRecords.subscribe((num: string) => {
      this.totalNumberOfRecords = +num;
    })
  }

  openRemovePersonModal(person: Person) {
    const modalRef = this.modalService.open(PersonRemoveComponent);
    modalRef.componentInstance.person = person;
  }

  openSavePersonModal(person?: Person) {
    const modalRef = this.modalService.open(PersonSaveComponent);
    modalRef.componentInstance.person = person ? {...person} : {...initialPerson};
  }

  getPersons() {
    this.store.dispatch(new FindPersons({page: this.pageNumber - 1, size: this.perPage, sort: this.sort}))
  }

  pageChange(page: number) {
    this.pageNumber = page;
    this.getPersons();
  }
}
