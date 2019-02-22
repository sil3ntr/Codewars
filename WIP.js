/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/


function XO(str) {
    var str = str.toLowerCase().split('');
    console.log(str);
    var i = 0;
    while ( i < str.length) {
      var oCount = 0;
      var xCount = 0;
      
        if ( str[i] === 'x' ){
           var xTotal = xCount++;
          }else if ( str[i] === 'o' ){
              var oTotal = oCount++;
          }else {
                console.log(str[i]); 
          }
      console.log(oTotal,xTotal);
      i++;
    }
    if (oTotal === xTotal) {return true;}else {return false;}
    console.log(str);
}