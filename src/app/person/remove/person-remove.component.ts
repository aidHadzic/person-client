import { Component } from '@angular/core';
import { Person } from '../../shared/model/person.model';
import { Store } from '@ngrx/store';
import { RemovePerson } from '../../store/actions/person.actions';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-person-remove',
  templateUrl: './person-remove.component.html'
})
export class PersonRemoveComponent {

    constructor(private activeModal: NgbActiveModal, private store: Store<{ persons: Person[] }>) {}

    person: Person;

    removePerson() {
        this.store.dispatch(new RemovePerson(this.person));
        this.activeModal.dismiss();
    }

}
