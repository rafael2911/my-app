import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo';

const API = 'http://localhost:8080/logs';

@Injectable({ providedIn: 'root' })
export class PhotoService{

    constructor(private http: HttpClient){}

    listFromUser(userName: string){
      return this.http
        .get<Photo[]>(API);
    }

}