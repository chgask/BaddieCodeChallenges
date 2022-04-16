// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

//Parameters: 
//Return the number of liters drink rounded to the smallest value.  You are given the hours. 
//Return: 
//Number of the liters drink rounded to smallest integers
//Examples: 
//if we are given 2hr should return 1
//if we are given 6hr should return 3 
//if we are given 8hr should return 4
//Pseudocode 
//Make a function where I want to divide time by 2 and round to whole number using math 

function liters(time){
  return Math.floor(time/2)
}
