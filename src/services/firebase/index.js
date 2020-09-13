import * as firebase from "firebase/app";
import 'firebase/storage';
import serviceAccount from './secret.json'


firebase.initializeApp(serviceAccount);

const storage = firebase.storage();

export default storage
