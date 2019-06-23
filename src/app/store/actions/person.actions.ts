import { Action } from '@ngrx/store';
import { Person } from '../../shared/model/person.model';
import { Page } from '../../shared/model/page.model';

export enum EPersonActions {
    GetPerson = '[Person] Get Person',
    GetPersonSuccess = '[Person] Get Person Success',
    FindPersons = '[Person] Find Persons',
    FindPersonsSuccess = '[Person] Find Persons Success',
    FindPersonsFailure = '[Person] Find Persons Failure',
    SavePerson = '[Person] Save Person',
    SavePersonSuccess = '[Person] Save Person Success',
    SavePersonFailure = '[Person] Save Person Failure',
    RemovePerson = '[Person] Remove Person',
    RemovePersonSuccess = '[Person] Remove Person Success',
    RemovePersonFailure = '[Person] Remove Person Failure'
}

export class SavePerson implements Action {
    public readonly type = EPersonActions.SavePerson;
    constructor(public payload: Person) {}
}

export class SavePersonSuccess implements Action {
    public readonly type = EPersonActions.SavePersonSuccess;
    constructor(public payload: Person) {}
}

export class SavePersonFailure implements Action {
    public readonly type = EPersonActions.SavePersonFailure;
    constructor(public payload: any) {}
}

export class RemovePerson implements Action {
    public readonly type = EPersonActions.RemovePerson;
    constructor(public payload: Person) {}
}

export class RemovePersonSuccess implements Action {
    public readonly type = EPersonActions.RemovePersonSuccess;
    constructor(public payload: Person) {}
}

export class RemovePersonFailure implements Action {
    public readonly type = EPersonActions.RemovePersonFailure;
    constructor(public payload: any) {}
}

export class FindPersons implements Action {
    public readonly type = EPersonActions.FindPersons;
    constructor(public payload: Page) {}
}

export class FindPersonsSuccess implements Action {
    public readonly type = EPersonActions.FindPersonsSuccess;
    constructor(public payload: Person[]) {}
}

export class FindPersonsFailure implements Action {
    public readonly type = EPersonActions.FindPersonsFailure;
    constructor(public payload: any) {}
}

export type PersonActions = FindPersons | FindPersonsSuccess | FindPersonsFailure | 
SavePerson | SavePersonSuccess | SavePersonFailure |
RemovePerson | RemovePersonSuccess | RemovePersonFailure;