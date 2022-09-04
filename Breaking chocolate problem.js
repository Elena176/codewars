/*Breaking chocolate problem*/

/*
https://www.codewars.com/kata/534ea96ebb17181947000ada/train/javascript*/

function breakChocolate(n,m) {
    return  res = (n*m) > 0 && (n*m) !== 1 ? (n*m)-1 : 0;
}

breakChocolate(5, 5);