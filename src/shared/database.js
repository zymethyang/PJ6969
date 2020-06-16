import firebase from './firebase';

export function pushDatabase({ ref, data }) {
  return firebase.database().ref(ref).push(data);
}

export function putDatabase({ ref, data }) {
  return firebase.database().ref(ref).set(data);
}

export function getDatabase({ ref }) {
  return firebase.database().ref(ref);
}

export function deleteDatabase({ ref }) {
  return firebase.database().ref(ref).remove();
}