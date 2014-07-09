//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  var Person = function(name, age){
  	this.name = name;
  	this.age = age;
  };


//Now create three instances of Person with data you make up

  var p1 = new Person('p 1', 11);
  var p2 = new Person('p 2', 12);
  var p3 = new Person('p 3', 13);



//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

Person.prototype.sayName = function(){
	alert(this.name);
};