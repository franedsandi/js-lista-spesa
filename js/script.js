/* Step by step
1. make an array with the grosseries list
2. use a cicle while to print each element of the groseries list in output until the list end*/
const spesa = [
  'pane', 'latte', 'zucchero', 'biscotti', 'prosciutto', 'formaggio', 'pasta', 'sugo', 'aqcua'
];
let i = 0;

while (i < spesa.length){
  prodotti = spesa[i];
  document.getElementById('output').innerHTML +=`<li> ${prodotti} </li>`;
  console.log(spesa[i]);
  i++;
}