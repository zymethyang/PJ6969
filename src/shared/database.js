import firebase from './firebase';

export function pushDatabase({ ref, data }) {
  return firebase.database().ref(ref).push(data);
}

export function getDatabase({ ref }) {
  return firebase.database().ref(ref);
}