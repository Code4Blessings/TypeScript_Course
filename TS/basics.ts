let userName: string;
let userAge: number;

userName = "Robin";
// userAge = 51;

function add(a: number, b = 5) {
  return a + b;
}  

add(62);
//add('10');
//add(10, '6');
