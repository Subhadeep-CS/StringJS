let s = "Radar";
let rev = "";
for (let i = s.length - 1; i >= 0; i--) {
  rev = rev + s[i];
}
console.log(rev);
if (rev.toLowerCase() === s.toLowerCase()) {
  console.log("Palindrom");
} else {
  console.log("Not palindrome");
}
