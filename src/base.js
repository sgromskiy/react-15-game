import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB48jJ895KpyfnjqgHVDbrBEttaUi8znNg",
    authDomain: "puzzle-15-game.firebaseapp.com",
    databaseURL: "https://puzzle-15-game.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;