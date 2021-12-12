import HighlightSource from "./apiSource/highlightSource";
import MatchSource from "./apiSource/matchSource";
class FootballModel{
    constructor(highlights = [], upVoted = [], popular = [], observers = [], currentComp = null){
        this.highlights = highlights;
        this.upVoted = upVoted;
        this.popular = popular;
        this.currentComp = currentComp;
        this.observers = observers;
        this.addHighlights();
    }
    addHighlights(){
        HighlightSource.getHighlight().then(data => {this.highlights = data;});
    }

    selectCompetition(compID){
        this.currentComp = compID;
        this.notifyObservers();
    }

    addObserver(callback){
        let result = this.observers;
        result = [...result,callback];
        this.observers = result;
        return this.observers;
      }
  
      removeObserver(callback){
        let result = this.observers;
        result = result.filter(observer => observer != callback);
        this.observers = result;
      }
      notifyObservers(){
        if(!(this.observers === undefined || this.observers.length == 0))
        this.observers.forEach(cb =>{
          try{
          cb()
          }
          catch(e){
          console.error(e)
          }
      });
      }



    addUpVote(id){}
    removeUpVote(id){}
    addDownVote(id){}
    removeDownVote(id){}
    addToPopular(id){}
    removeFromPopular(id){}

}
export default FootballModel;