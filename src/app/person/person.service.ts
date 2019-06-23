import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { Person } from "../shared/model/person.model";
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PersonService {

    private baseUrl: string = 'http://localhost:8080/api/person';
    private personListChange = new BehaviorSubject(false);
    private totalNumberOfRecordsChange = new BehaviorSubject('0');
    currentPersonListChange = this.personListChange.asObservable();
    currentTotalNumberOfRecords = this.totalNumberOfRecordsChange.asObservable();

    constructor(private httpClient: HttpClient) {}

    emitPersonListChange(change: boolean) {
        this.personListChange.next(change);
    }

    emitTotalNumberOfRecordsChange(num: string) {
        this.totalNumberOfRecordsChange.next(num);
    }

    public savePerson(person: Person): Observable<Person> {
        return this.httpClient.put<Person>(this.baseUrl, person);
    }

    public getPersons(query: any): Observable<Person[]> {
        return this.httpClient.get<HttpResponse<Object>>(this.baseUrl, {params: query, observe: 'response'}).pipe(
            map((response: HttpResponse<any>) => {
                    this.emitTotalNumberOfRecordsChange(response.headers.get('X-Total-Count'));
                    return response.body;
                }
            ));
    }

    public removePerson(person: Person): Observable<Person> {
        return this.httpClient.delete<Person>(this.baseUrl + `/${person.id}`);
    }
}