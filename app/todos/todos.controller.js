var app = angular.module('todo');
app.controller('todosController', function() {
  this.todos = [
    "walk the dog",
    "yoga get involved",
    "workout for real",
    "draw dinosaur"
  ];
  this.sayHello = function() {
    console.log("Hello World!");
  };
  this.formIsVisible = false;
  this.toggleForm = function(){
    console.log("toggleform");
    if(this.formIsVisible){
      this.formIsVisible = false;
    } else {
      this.formIsVisible = true;
    }
  };
});
