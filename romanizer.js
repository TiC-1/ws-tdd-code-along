var translator = [
  {arabic: 10, roman: 'X'},
  {arabic: 9, roman: 'IX'},
  {arabic: 5, roman: 'V'},
  {arabic: 4, roman: 'IV'},
  {arabic: 1, roman: 'I'},
];

function romanizer(number) {

  var roman = '';

translator.forEach(function(translate){
  while (number >= translate.arabic){
    roman += translate.roman;
    number -= translate.arabic;
  }
});

//   while (number >0){
//
//
//   if (number >= 10)  {
//         roman += 'X';
//         number -= 10;
//     }
//
//   else  if (number >= 9)  {
//       roman += 'IX';
//       number -= 9;
//   }
//   else if (number >= 5)  {
//     roman += 'V';
//     number -= 5;
//   }else if (number >= 4){
//     roman += 'IV';
//     number -= 4;
//   }else if (number >= 1){
//     roman += 'I';
//     number -= 1;
//   }
// }
return roman;

}

module.exports = romanizer;
