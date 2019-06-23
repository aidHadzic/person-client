import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { PersonService } from '../../person/person.service';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { Person } from '../../shared/model/person.model';
import { NotificationService } from '../../shared/notification/notification.service';
import { 
    FindPersons, 
    FindPersonsSuccess, 
    FindPersonsFailure, 
    EPersonActions, 
    SavePerson, 
    SavePersonSuccess, 
    RemovePerson, 
    RemovePersonSuccess, 
    SavePersonFailure, 
    RemovePersonFailure
} from '../actions/person.actions';
import { TranslateService } from '@ngx-translate/core';


@Injectable()
export class PersonEffects {

    constructor(
        private personService: PersonService, 
        private actions$: Actions, 
        private notificationService: NotificationService,
        private translateService: TranslateService) { }

    @Effect()
    savePerson$ = this.actions$.pipe(ofType<SavePerson>(EPersonActions.SavePerson),
        switchMap((person: SavePerson) => this.personService.savePerson(person.payload)
            .pipe(
                map((response: Person) => {
                    this.notificationService.showSuccessNotification('Success', this.translateService.instant('person.action.saveSuccess', {firstName: response.firstName, lastName: response.lastName}), true, 5000);
                    this.personService.emitPersonListChange(true);
                    return new SavePersonSuccess(response);
                }),
                catchError((error) => {
                    this.notificationService.showInfoNotification('Info', this.translateService.instant('person.action.saveError'), true, 5000);
                    return of(new SavePersonFailure(error));
                })
            )));

    @Effect()
    findPersons$ = this.actions$.pipe(ofType<FindPersons>(EPersonActions.FindPersons),
        switchMap((fp: FindPersons) => this.personService.getPersons(fp.payload)
            .pipe(
                map((response: Person[]) => {
                    return new FindPersonsSuccess(response);
                }),
                catchError(error => {
                    this.notificationService.showInfoNotification('Info', this.translateService.instant('person.action.fetchError'), true, 5000);
                    return of(new FindPersonsFailure(error));
                }))
        ));

    @Effect()
    removePerson$ = this.actions$.pipe(ofType<RemovePerson>(EPersonActions.RemovePerson),
        switchMap((personRemove: RemovePerson) => this.personService.removePerson(personRemove.payload)
            .pipe(
                map((res: Person) => {
                    this.notificationService.showSuccessNotification('Success', this.translateService.instant('person.action.removeSuccess', {firstName: res.firstName, lastName: res.lastName}), true, 5000);
                    this.personService.emitPersonListChange(true);
                    return new RemovePersonSuccess(res);
                }
                ),
                catchError(error => {
                    this.notificationService.showInfoNotification('Info', this.translateService.instant('person.action.removeError'), true, 5000);
                    return of(new RemovePersonFailure(error));
                })
            )
        ));

}
