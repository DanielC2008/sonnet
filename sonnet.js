var getSonnet = document.getElementById("sonnet").innerHTML;

var findOrphans = getSonnet.indexOf("orphans");
console.log(findOrphans);

console.log(getSonnet.length);

var newSonnet = getSonnet.replace("winter", "yuletide");

var newSonnet = getSonnet.replace(/the/g, "a large");
document.write("<p>" + newSonnet);
