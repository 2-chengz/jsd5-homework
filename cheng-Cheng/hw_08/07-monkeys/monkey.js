/*
  Create a `Monkey` constructor that has the following attributes:
  * name - (a string)
  * species - (a string)
  * foodsEaten - (an array)

  And the following methods:
  * eat(food) - adds the food (a string) to the list of foods eaten
  * introduce() - introduces self, with name, species, and what it's eaten.

  ## Goal

  Make sure to use the Monkey prototype so that you're not creating multiple copies of the functions for your monkeys

  ## Bonus

  When logging the foods eaten, make the sentence grammatical, including commas and "and" when appropriate.
*/

function Monkey(name, species){
  this.name = name;
  this.species = species;
  this.foodsEaten = [];
}

Monkey.prototype.eat = function(food){
  this.foodsEaten.push(food);
}

Monkey.prototype.introduce = function(){
  var foodAmount = this.foodsEaten.length;
  var foodText = [];
  for(i=0; i<foodAmount-1; i++){
      foodText.push(" "+this.foodsEaten[i])
  };
  foodText.push(" and "+this.foodsEaten[foodAmount-1]+"!");

  console.log("Hi, my name is "+this.name+"!");
  console.log("I am a "+this.species+".");
  console.log("I have eaten"+foodText.toString());
}
