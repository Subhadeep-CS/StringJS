var s="String";

s.toUpperCase();

//we apply toUpperCase() but the value of s is not change beacuse of string immutability.

console.log(s);

//but if we assign it then it will change.

s=s.toLowerCase();

console.log(s);