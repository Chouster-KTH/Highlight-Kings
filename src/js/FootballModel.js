import HighlightSource from "./apiSource/highlightSource";
class FootballModel{
    constructor(highlights = [], upVoted = [], popular = []){
        this.highlights = highlights;
        this.upVoted = upVoted;
        this.popular = popular;
        this.addHighlights();
        this.user = null;
    }
    addHighlights(){
        HighlightSource.getHighlight().then(data => {this.highlights = data; console.log(data);});
        console.log(this.highlights);
    }

    addUpVote(id){}
    removeUpVote(id){}
    addDownVote(id){}
    removeDownVote(id){}
    addToPopular(id){}
    removeFromPopular(id){}
    addUser(email, password){console.log("New user registered: email = " + email + " password: " + password)}
    logInUser(email, password){console.log("User signed in: email = " + email + " password: " + password)}

}
export default FootballModel;