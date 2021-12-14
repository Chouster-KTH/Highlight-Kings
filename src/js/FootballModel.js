
class FootballModel {
  constructor(highlights = [], upVoted = [], popular = [], observers = [], currentComp = null, allMatches = null, user = null/* user? */) {
    this.highlights = highlights;
    this.upVoted = upVoted;
    this.popular = popular;
    this.currentComp = currentComp;
    this.allMatches = allMatches;
    this.observers = observers;
    this.currentUser = null;
    this.users = [];
    //this.currentUserUpvoteCount = 0;
  }

  selectCompetition(comp) {
    this.currentComp = comp;
  }

  setMatches(matches) {
    this.allMatches = matches;
  }

  findMatches(teamName) {
    console.log(teamName);
    let matches = this.allMatches.matches.filter(mtch => mtch.homeTeam.name === teamName || mtch.awayTeam.name === teamName);
    console.log(matches);
    return matches;
  }

  addObserver(callback) {
    let result = this.observers;
    result = [...result, callback];
    this.observers = result;
    return this.observers;
  }

  removeObserver(callback) {
    let result = this.observers;
    result = result.filter(observer => observer != callback);
    this.observers = result;
  }
  notifyObservers() {
    if (!(this.observers === undefined || this.observers.length == 0))
      this.observers.forEach(cb => {
        try {
          cb()
        }
        catch (e) {
          console.error(e)
        }
      });
  }



  addUpVote(props) {

    //Check that the user is not signed out when voting
    if (this.currentUser === null || this.currentUser === 0) {
      alert("You must sign in to upvote");
      return this.upvoted;
    }

    //Check that the user does not upvote each game more than once
    if (this.gameHasBeenUpvotedByUser(props)) {
      alert("You can only upvote each game once!");
      return this.upvotedGames;
    }

    this.upvoteInformationUpdateForCurrentUser(props);

    let item = this.upVoted.find(item => item.title === props.title);

    if (item === undefined) {
      props.upVotes = 1;
      this.upVoted = [...this.upVoted, props];
    }
    else {
      let index = this.upVoted.indexOf(item);
      this.upVoted[index].upVotes++;
      this.sortUpVote();
    }

    return this.upVoted;
  }

  sortUpVote() {
    let length = this.upVoted.length;
    let currentNum;
    let current;

    for (let i = length - 1; i >= 0; i--) {
      currentNum = this.upVoted[i].upVotes;
      current = this.upVoted[i];
      console.log(currentNum);
      let j = i;
      while ((j < length - 1) && (this.upVoted[j + 1].upVotes > currentNum)) {
        this.upVoted[j] = this.upVoted[j + 1];
        j++;
      }
      this.upVoted[j] = current;
    }
  }

  removeUpVote(id) { }
  addDownVote(id) { }
  removeDownVote(id) { }
  addToPopular(id) { }
  removeFromPopular(id) { }









  deleteUpvote(props) {

    console.log("User wants to delete an upvote: " + props.title);

  }



  //Register a new user
  addUser(email, password) {
    console.log("User wants to sign up: email = " + email + ", password = " + password);
    if (this.getUserIndex(email) > 0) {
      return "User " + email + " is already registered";
    }

    if (!this.emailIsValid(email)) {
      return "Invalid email address";
    }

    if (!this.passwordIsLongEnough(password)) {
      return "Password must be at least 8 characters"
    }

    let newUser = {};
    newUser.email = email;
    newUser.password = password;
    newUser.upvoteCount = 0;
    newUser.upvotedGames = []; //Save upvoted games for each user
    this.users.push(newUser);
    this.logInUser(email, password);
    return "";
  }


  logInUser(email, password) {
    console.log("User wants to sign in: email = " + email + ", password = " + password);

    let index = this.getUserIndex(email);
    if (index > 0) {
      if (this.passwordIsCorrect(email, password)) {
        this.currentUser = index;
        this.notifyObservers();
        return "";
      }
      else {
        return "Log in failed"; //if password is incorrect
      }
    }

    else {

      return "No such user"; //if user does not exist
    }
  }

  logOutUser() {
    this.currentUser = null;
    this.notifyObservers();
  }

  //Check if the username (email) has been registered
  //Return a unique index
  getUserIndex(email) {
    let index = null;
    let count = 0;

    this.users.forEach(element => {
      count++;

      if (email === element.email) {

        index = count;
      }
    })
    return index;
  }

  //Validate password
  passwordIsCorrect(email, password) {
    let b = false;

    this.users.forEach(element => {

      if (email === element.email) {
        if (password === element.password) {
          b = true;
        }
      }
    })
    return b;

  }


  //Validate that the username is an email address
  emailIsValid(email) {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(regexEmail)) {
      return true;
    } else {
      return false;
    }
  }

  //Validate that the requested password is at least 8 characters
  passwordIsLongEnough(password) {
    return password.length >= 8;
  }

  //Save information about a user's upvoted games
  //Count total number of upvotes for a user
  upvoteInformationUpdateForCurrentUser(props) {
    let newGame = {};
    newGame.title = props.title;
    newGame.date = props.date;
    newGame.url = props.matchviewUrl;
    this.users[this.currentUser - 1].upvotedGames.unshift(newGame);
    this.users[this.currentUser - 1].upvoteCount++;
    //console.log("User has upvoted " + this.users[this.currentUser - 1].upvoteCount + " times"); 
    return true;
  }

  //Return true if the game has previously been upvoted by the user
  gameHasBeenUpvotedByUser(props) {
    let hasBeenUpvoted = false;
    this.users[this.currentUser - 1].upvotedGames.forEach(element => {
      if (element.title === props.title)
        hasBeenUpvoted = true;
    })
    return hasBeenUpvoted;
  }


}

export default FootballModel;



/*
{title: 'Stuttgart - Bayern Munich', competition: 'GERMANY: Bundesliga', matchviewUrl: 'https://www.scorebat.com/embed/matchview/1058851/', competitionUrl: 'https://www.scorebat.com/embed/competition/germany-bundesliga/', thumbnail: 'https://www.scorebat.com/og/m/og1058851.jpeg', …}
competition: "GERMANY: Bundesliga"
competitionUrl: "https://www.scorebat.com/embed/competition/germany-bundesliga/"
date: "2021-12-14T17:30:00+0000"
matchviewUrl: "https://www.scorebat.com/embed/matchview/1058851/"
thumbnail: "https://www.scorebat.com/og/m/og1058851.jpeg"
title: "Stuttgart - Bayern Munich"
videos: [{…}]

*/