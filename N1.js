// №1
// В переменную password запишите строку с любым произвольным паролем. Проверьте
// надёжность пароля. Пароль является надёжным, когда в нём есть хотя бы четыре символа,
// а также есть хотя бы один из символов "-"", "_". Выведите в консоль сообщения «Пароль
// надёжный» или «Пароль недостаточно надёжный».

let password;

password = "123456789_";

if (password.length >= 4){
    if (password.includes("-") || password.includes("_")){
        console.log("Пароль надежный");
    }
    else{
        console.log("Пароль недостаточно надежный");
    }
}
else{
    console.log("Пароль недостаточно надежный");
}

//______________________________________________________
