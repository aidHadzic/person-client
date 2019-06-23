import { Page } from "../../shared/model/page.model";
import { Person } from "../../shared/model/person.model";

export const initialPerson: Person = {
    id: null,
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    phone: ''
};

export const initialPage: Page = {
    size: 0,
    page: 0,
    sort: ''
};
