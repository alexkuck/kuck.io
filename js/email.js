var scrambled = ['@','.','m','s','c','k','o','a','u','g','l','i'];                             
var order = [7, 3, 5, 8, 4, 5, 0, 9, 2, 7, 11, 10, 1, 4, 6, 2];
var email = new Array();
for(var i=0; i<order.length; i++){ email[i] = scrambled[order[i]]; }
for(var i=0; i<email.length; i++){ document.write(email[i]); }
