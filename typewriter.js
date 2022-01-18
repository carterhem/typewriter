const sentence = 'hello there from lighthouse labs';


const typeWriter = function(string) {
  let timeCounterSum = 0;
  for (const char of string) {
    //created varialbe to house the increasing number of ms in it
    //starting at zero, for every loop i need to add 50ms to the counter
    setTimeout(() => {
      process.stdout.write(char);
    }, timeCounterSum) 
    timeCounterSum += 50;
  //timecounter needs to be += 50ms adding each time
  }
//  console.log("\n") 
 //if i put console log here it adds newline BEFORE the sentence

}

typeWriter(sentence + "\n");
//calling the function with sentence as input and adding newline after it seems to work

module.exports = typeWriter;

//original built function - ignore
// for (const char of sentence) {
//   //created varialbe to house the increasing number of ms in it
//   //starting at zero, for every loop i need to add 50ms to the counter
//   setTimeout(() => {
//     process.stdout.write(char);
//   }, timeCounterSum) 
//   timeCounterSum += 50;
// //timecounter needs to be += 50ms adding each time
// //how to add newline to this? needs to be done after all characters are written to standout so likely outside the loop
// }
// '\n';