import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { sign } from 'crypto';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);

  //Autenticacion:

  //Acceder:
  signIn(user: User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }



}
