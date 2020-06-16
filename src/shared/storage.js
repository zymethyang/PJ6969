import firebase from './firebase';

export function pushStorage({ ref, file }) {
  const storageRef = firebase.storage().ref(ref + file.name);
  const task = storageRef.put(file);
  return new Promise((resolve, reject) => {
    task.on('state_changed', function progress(snapshot) {
      const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(percentage);
    }, function error(err) {
      reject(err);
    }, function complete() {
      task.snapshot.ref.getDownloadURL().then(function (downloadURL) {
        resolve(downloadURL);
      })
    })
  })
}
