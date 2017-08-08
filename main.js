
'use strict'

function avengers() {
  this.checkSetup();

  //Accessing DOM elements

  this.whatever = document.getElementBtId('send');
  this.whatever = document.getElementBtId('send');

  //save message on form submit
  this.whatever.addeventListener('submit', this.saveMessage.bind(this));
}

avengers.prototype.initFirebase() = function() {
  this.auth = firebase.auth();
  this.database = firebase.database();
  this.storage = firebase.storage();

  //Initiates firebase auth and listen to auth state change
  this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
};

avengers.prototype.checkSetup = function(){
  if(!window.firebase || !(firebase.app instanceof Function || !firebase.app().option) {
    window.alert('You are now avengers to land in the earth. Please fill up this for and' +
    'make sure you go to avengers lab for further instruction and sure you are running' +
    'firebase serve in the `local host machine.`');
  }
}


window.onload = function() {
  window.avengers = new avengers();
}
