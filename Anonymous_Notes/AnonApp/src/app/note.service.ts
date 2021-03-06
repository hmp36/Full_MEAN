import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'Rxjs';


@Injectable()
export class NoteService {
    noteObserver = new BehaviorSubject([]);
    constructor(private _http: Http) { }

    all(callback) {
        console.log("note service: all")
        this._http.get('/notes').subscribe(
            (data) => {
                callback(data);
            },
            (err) => {
                console.log(err);
            }
        );
    };
    // create(data){
    //     this._http.post('/notes', data)
    // }

    create(data, callback) {
        console.log("jukytkynryryjrtyjtryjetjete");
        
        this._http.post('/notes', data).subscribe(
            (res) => {
                console.log("data")
                callback(data);
            },
            (err) => {
                console.log(err);
            }
        );
    }

    deleteNote(id: string) {
        console.log("in service" + id);
        return this._http.delete('/note/' + id).subscribe(
            (result: any) => this.getAll()
            
        );
    };

    getAll() {
        this._http.get('/all').subscribe(
        (response: any) => {
            this.noteObserver.next(response);
        },
        (errorResponse) => console.log(errorResponse)
        
    );
};        
}