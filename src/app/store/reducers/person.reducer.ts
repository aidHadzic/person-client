import { PersonActions, EPersonActions } from '../actions/person.actions';

const initialPersons = [];

export function personReducers(state = initialPersons, action: PersonActions) {
  switch (action.type) {
    case EPersonActions.FindPersonsSuccess: {
      return action.payload;
    }

    default:
      return state;
  }
}