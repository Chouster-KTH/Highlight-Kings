
class FootballModel {
  constructor(highlights = [], upVoted = [], popular = [], observers = [], currentComp = null, user = null) {
    this.highlights = highlights;
    this.upVoted = upVoted;
    this.popular = popular;
    this.currentComp = currentComp;
    this.observers = observers;
    this.currentUser = null;
    this.users = [];
  }

  selectCompetition(compID) {
    this.currentComp = compID;
    this.notifyObservers();
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



  addUpVote(prop) {
    this.upVoted = [...this.upVoted, prop];
    console.log(this.upVoted);
    return this.upVoted;
  }
  removeUpVote(id) { }
  addDownVote(id) { }
  removeDownVote(id) { }
  addToPopular(id) { }
  removeFromPopular(id) { }













  //Register a new user
  addUser(email, password) {
    console.log("User wants to sign up: email = " + email + ", password = " + password);
    if (this.userExists(email)) {
      return "User " + email + " is already registered";
    }

    if (!this.emailIsValid(email)) {
      return "Invalid email address";
    }

    if (!this.passwordIsLongEnough(password)) {
      return "Password must be least 8 characters"
    }

    let newUser = {};
    newUser.email = email;
    newUser.password = password;
    this.users.push(newUser);
    this.logInUser(email, password);
    return "";
  }


  logInUser(email, password) {
    console.log("User signed in: email = " + email + ", password = " + password);

    if (this.userExists(email)) {
      if (this.passwordIsCorrect(email, password)) {
        this.currentUser = email;
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

  //Check if the username (email) has been registered
  userExists(email) {
    let b = false;

    this.users.forEach(element => {

      if (email === element.email) {

        b = true;
      }
    })
    return b;
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

}

export default FootballModel;