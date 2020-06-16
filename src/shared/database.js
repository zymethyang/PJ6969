//import firebase from './firebase';
import { apiGet, apiPost, apiPut, apiDelete } from './API';

/*
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
*/

export function pushDatabase({ ref, data }) {
  return new Promise((resolve, reject) => {
    apiPost({ endpoint: ref, body: data })
      .then(
        (result) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        }
      )
  });
}

export function putDatabase({ ref, data }) {
  return new Promise((resolve, reject) => {
    apiPut({ endpoint: ref, body: data })
      .then(
        (result) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        }
      )
  });
}

export function getDatabase({ ref }) {
  return new Promise((resolve, reject) => {
    apiGet({ endpoint: ref })
      .then(
        (result) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        }
      )
  });
}

export function deleteDatabase({ ref }) {
  return new Promise((resolve, reject) => {
    apiDelete({ endpoint: ref })
      .then(
        (result) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        }
      )
  });
}