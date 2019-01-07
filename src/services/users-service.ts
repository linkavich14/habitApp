import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'; 
import { User } from "../models/user";
import firebase from "firebase";
import 'rxjs/Rx';
import { map } from "rxjs/operators";

@Injectable()
export class UsersService {
    userId = firebase.auth().currentUser.uid;
    constructor(public http: HttpClient) {}

    manageUser(user:User, token: string) { 
        return this.http.put('https://habitgoalapp.firebaseio.com/' + this.userId + '/users.json?auth=' + token , user);       
    }

    updateUser(user:User) {

    }

    deleteUser(id: number) {

    }

    getUser(token: string) {
        return this.http.get('https://habitgoalapp.firebaseio.com/' + this.userId + '/users.json?auth=' + token)
        .pipe(
            map(data => {
                return JSON.stringify(data);
                })
        );  
    }
    
}