import firebase from "firebase/compat";
const REF = '/';
function persistModel(model){
    let loadingFromFirebase = false;// boolean flag, used in a JS closure
    
    model.addObserver(function(){
        firebase.database().ref(REF).set(
            model.testValue
        );
    });
    //firebase.database().ref('/').set();
    firebase.database().ref(REF).on("value", function (data) {
        loadingFromFirebase = true;
		console.log("Retrieving data...");
		if (data.val()) {
			console.log(data.val().testValue);
		}
		loadingFromFirebase = false;
	});
}
export default persistModel;