import app from 'firebase/compat/app';
const firebaseConfig = {
    apiKey: "AIzaSyDVtpnoUGoVYTebaMPbD7N21XXqL5ibsTM",
    authDomain: "highlightkings-1d6b6.firebaseapp.com",
    databaseURL: "https://highlightkings-1d6b6-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "highlightkings-1d6b6",
    storageBucket: "highlightkings-1d6b6.appspot.com",
    messagingSenderId: "182355394077",
    appId: "1:182355394077:web:d18296256369e1047f90f4"
}
class Firebase{
    constructor(){
        app.initializeApp(firebaseConfig);
    }
}
export default Firebase;