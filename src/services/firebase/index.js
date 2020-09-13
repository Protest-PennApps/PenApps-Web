const firebase = require('firebase/app');
require('firebase/storage')

const serviceAccount = require('./secret.json');

firebase.initializeApp(serviceAccount);

const storage = firebase.storage();

export default storage
