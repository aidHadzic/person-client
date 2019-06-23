import { Component } from '@angular/core';
import { Person } from '../../shared/model/person.model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SavePerson } from '../../store/actions/person.actions';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-person-save',
  templateUrl: './person-save.component.html',
  styleUrls: ['../person.component.css']
})
export class PersonSaveComponent {

  savePersonForm: FormGroup;
  person: Person;

  constructor(private activeModal: NgbActiveModal, private formBuilder: FormBuilder, private store: Store<{ persons: Person[] }>) {
    this.createForm();
  }

  createForm() {
    this.savePersonForm = this.formBuilder.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });
  }

  ngOnChanges() {
    this.savePersonForm.reset();
  }

  onSubmit() {
    this.store.dispatch(new SavePerson(this.person));
    this.ngOnChanges();
    this.activeModal.dismiss();
  }

}