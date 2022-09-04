/*
Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.
    Note that spaces should be ignored in this case.*/
/*https://www.codewars.com/kata/5966eeb31b229e44eb00007a*/

function vaporcode(string) {
    return string.replace(/ /g,'').toUpperCase().split('').join('  ');
}
vaporcode("Lets go to the movies") ;
