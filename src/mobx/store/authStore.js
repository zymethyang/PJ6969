import { observable, action } from 'mobx';
import firebase from '../../shared/firebase';

export class AuthStore {
  @observable
  userInfo = {
    displayName: null,
    email: null,
    emailVerified: null,
    photoURL: null,
    isAnonymous: null,
    uid: 'loading',
    providerData: null,
  };

  @action
  signUp({ email, password }) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        alert("Đăng ký thành công!");
      })
      .catch(function (error) {
        const errorMessage = error.message;
        alert(JSON.stringify(errorMessage));
      });
  }

  @action
  signIn({ email, password }) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userInfo) => {
        console.log(userInfo);
      })
      .catch(function (error) {
        const errorMessage = error.message;
        alert(JSON.stringify(errorMessage));
      });
  }


  @action
  signOut() {
    firebase.auth().signOut()
      .then(() => {
        alert("Đăng xuất thành công!");
      })
      .catch(function (error) {
        alert(JSON.stringify(error));
      });
  }

  @action
  fetchUserInfo() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.userInfo = {
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          photoURL: user.photoURL,
          isAnonymous: user.isAnonymous,
          uid: user.uid,
          providerData: user.providerData,
        }
      } else {
        this.userInfo = {
          displayName: null,
          email: null,
          emailVerified: null,
          photoURL: null,
          isAnonymous: null,
          uid: null,
          providerData: null,
        }
      }
    });
  }
}