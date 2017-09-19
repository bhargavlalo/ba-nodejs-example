/* 
 * Non-blocking example
 */
console.log('Rajkot');
setTimeout(function(){ console.log('Paris'); }, 3000);
console.log('London');
setTimeout(function(){ console.log('Mumbai'); }, 2000);
setTimeout(function(){ console.log('Delhi'); }, 1000);
console.log('Miami');
