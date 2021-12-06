import HighlightSource from "./apiSource/highlightSource";
class FootballModel{
    constructor(highlights = [], upVoted = [], popular = []){
        this.highlights = highlights;
        this.upVoted = upVoted;
        this.popular = popular;
        this.addHighlights();
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

}
export default FootballModel;