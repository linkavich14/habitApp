import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'; 
import { User } from "../models/user";
import firebase from "firebase";
import 'rxjs/Rx';
import { map } from "rxjs/operators";
import { ApplicationService } from "./application-service";

@Injectable()
export class UsersService {
    
    constructor(public http: HttpClient, 
                public applicationService: ApplicationService) {}

    manageUser(user:User, token: string) { 
        return this.http.put('https://habitgoalapp.firebaseio.com/' + this.applicationService.userId + '/user.json?auth=' + token , user);       
    }

    updateUser(user:User) {

    }

    deleteUser(id: number) {

    }

    getUser(token: string) {
        return this.http.get('https://habitgoalapp.firebaseio.com/' + this.applicationService.userId + '/user.json?auth=' + token)
        .pipe(
            map(data => {
                return JSON.stringify(data);
                })
        );  
    }
    
}