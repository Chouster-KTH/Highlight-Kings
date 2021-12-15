import firebase from "firebase/compat";
const REF = 'highlightkings';
function persistModel(model){
    let loadingFromFirebase = false;// boolean flag, used in a JS closure
    
    model.addObserver(function(){
        if (loadingFromFirebase) {
			return;
		}
        console.log(model.testValue)
        firebase.database().ref(REF).set({
            testValue2 : model.testValue,
            testValue3 : 5,
            upVoted : model.upVoted
        }
        );
    });
    //firebase.database().ref('/').set();
    firebase.database().ref(REF).on("value", function (data) {
        loadingFromFirebase = true;
		console.log("Retrieving data...");
		if (data.val()) {
			model.upVoted = data.val().upVoted;
		}
		loadingFromFirebase = false;
	});
}
export default persistModel;