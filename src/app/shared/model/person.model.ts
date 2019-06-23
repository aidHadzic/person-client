export interface Person {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
}

export class Person implements Person {

    constructor(id: string, firstName: string, lastName: string, email: string, phone: string, city: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.city = city;
    }

    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
}
