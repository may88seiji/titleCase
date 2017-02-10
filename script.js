//1
function titleCase(str) {
  var t = str.split(' ');
  var a =[];
  for(var i= 0; i < t.length;i++){
  a.push(t[i].charAt(0).toUpperCase() + t[i].substring(1).toLowerCase());
  } 
    return a.join(" "); 
}
titleCase("i'm a little tea pot");
//2
function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function(val){
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

titleCase("I'm a little tea pot");
//3
function titleCase(str) {
  return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}
