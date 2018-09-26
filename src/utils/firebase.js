import { configs } from '../../config/firebase.config.js';
import { updateState } from './state';
const { fetch } = window;
let firebase = null;
let firestore = null;
let storage = null;
const settings = {
  /* your settings... */
  timestampsInSnapshots: true
};

const getFirebase = async () => {
  const { firebase } = await import('./firebase-loader.js');
  for (let i in configs) {
    if (i === 'main') {
      firebase.initializeApp(configs[i]);
    }
  }
  const firestore = firebase.firestore();
  firestore.settings(settings);

  const storage = firebase.storage();
  return { firebase, firestore, storage };
};

const readDatabaseOnce = async (dbName, query) => {
  const { path, filters } = query;
  if (firebase) {
    let ref = firebase.database().ref(path);
    for (let i in filters) {
      if (i === 'orderBy') {
        switch (filters[i]) {
          case '$key':
            ref = ref.orderByKey();
            break;
          case '$value':
            ref = ref.orderByValue();
            break;
          default:
            ref = ref.orderByChild(filters[i]);
        }
      } else {
        ref = ref[i](filters[i]);
      }
    }
    const snapshot = await ref.once('value');
    return snapshot.val();
  } else {
    const config = configs[dbName];
    let queryParams = [];
    for (let i in filters) {
      queryParams.push(`${i}="${encodeURI(filters[i])}"`);
    }
    const data = await fetch(`${config.databaseURL}/${path}.json?${queryParams.join('&')}`).then(result => result.json());
    return data;
  }
};

const readStorageURL = async (path) => {
  if (storage) {
    const ref = storage.ref(path);
    const url = await ref.getDownloadURL();
    return url;
  }
};

getFirebase().then(result => {
  firebase = result.firebase;
  firestore = result.firestore;
  storage = result.storage;
  updateState('firebase-ready', true);
});

export { readDatabaseOnce, firebase, firestore, storage, readStorageURL };
