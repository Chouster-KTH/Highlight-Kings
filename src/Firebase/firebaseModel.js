import firebase from "firebase/compat";
const REF = 'highlightkings';
function persistModel(model){
    let loadingFromFirebase = false;// boolean flag, used in a JS closure
    
    model.addObserver(function(){
        if (loadingFromFirebase) {
			return;
		}
        firebase.database().ref(REF).set({
            upVoted : model.upVoted,
            users: model.users
        }
        );
    });
    //firebase.database().ref('/').set();
    firebase.database().ref(REF).on("value", function (data) {
        loadingFromFirebase = true;
		if (data.val()) {
			model.upVoted = data.val().upVoted || [];
            model.users = data.val().users || [];
		}
		loadingFromFirebase = false;
	});
}
export default persistModel;