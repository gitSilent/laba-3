// №2
// В переменных name, surname написаны имя и фамилия человека. При этом в строках
// беспорядок с большими и маленькими буквами, и нужно привести строки в порядок. Для
// этого первые буквы имени и фамилии приведите к верхнему регистру, а оставшиеся
// буквы — к нижнему. Запишите результат в новые переменные и выведите их значения с
// помощью console.log. С помощью тернарных операторов и console.log выведите
// сообщение «Имя было преобразовано» или «Имя осталось без изменений» для имени и
// фамилии в зависимости от того, были ли исходные строки равны преобразованным.

let name, surname, new_name, new_surname;

name = "Vasya";
surname = "petROv";

new_name = name[0].toUpperCase()+(name.toLowerCase()).slice(1);
console.log(new_name);
new_surname = surname[0].toUpperCase()+(surname.toLowerCase()).slice(1);
console.log(new_surname);

// просто if/else
//_______
// if (name != new_name){
//     console.log("Имя",name,"было преобразовано в",new_name);
// }
// else{console.log("Имя осталось без изменений");}

// if (surname != new_surname){
//     console.log("Фамилия",surname,"была преобразована в",new_surname);
// }
// else{console.log("Фамилия осталась без изменений");}
//_______

let result_name = name != new_name ? `Имя ${name} было преобразовано в ${new_name}` : // тернарный оператор
"Имя осталось без изменений";
let result_surname = surname != new_surname ? `Фамилия ${surname} была преобразована в ${new_surname}`:
"Фамилия осталась без изменений";

console.log(result_name);
console.log(result_surname);