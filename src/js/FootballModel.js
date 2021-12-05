import HighlightSource from "./apiSource/highlightSource";
class FootballModel{
    constructor(){
        this.highlights = [];
        this.testValue = 5;
        this.upVoted = [];
        this.popular = [];
        this.addHighlights();
    }
    addHighlights(hlights){
        //this.highlights.push(data);
        //this.highlights = null;
        //this.highlights = [...this.highlights,"Hello"];
        HighlightSource.getHighlight().then(data => {this.highlights = data; console.log(data);});
        console.log(this.highlights);
    }
    getHighlights(){
        return this.highlights;
    }

    addUpVote(id){}
    removeUpVote(id){}
    addDownVote(id){}
    removeDownVote(id){}
    addToPopular(id){}
    removeFromPopular(id){}

}
export default FootballModel;