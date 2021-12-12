
class FootballModel{
    constructor(highlights = [], upVoted = [], popular = [], observers = [], currentComp = null, user = null){
        this.highlights = highlights;
        this.upVoted = upVoted;
        this.popular = popular;
        this.currentComp = currentComp;
        this.observers = observers;
        this.user = user;
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



    addUpVote(prop){
      this.upVoted = [...this.upVoted, prop];
      console.log(this.upVoted);
      return this.upVoted;
    }
    removeUpVote(id){}
    addDownVote(id){}
    removeDownVote(id){}
    addToPopular(id){}
    removeFromPopular(id){}

    addUser(email, password){console.log("New user registered: email = " + email + " password: " + password)}
    logInUser(email, password){console.log("User signed in: email = " + email + " password: " + password)}

}
export default FootballModel;