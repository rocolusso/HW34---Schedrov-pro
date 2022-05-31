'use strict';
/*
Написать функцию createTable(), которая выводит таблицу 10 × 10, заполненную числами от 1 до 100.

P.S. Подумайте о том как лучше обновлять DOM структуру, от этого зависит производительность скрипта.
 */
void function (){
    const createTable = () => {
        const table = document.createElement('table');
            for (let i = 1; i <= 10; i++ ) {
                const tr = document.createElement('tr');
                    if (i === 1){
                        for (let k = 1; k <= 10; k++) {
                            const td = document.createElement('td');
                            td.innerHTML = `${k}`;
                            tr.append(td);
                        }
                    } else {
                        for (let k = (i - 1) + '1' ; k <= i * 10 ; k++) {
                            const td = document.createElement('td');
                            td.innerHTML = `${k}`;
                            tr.append(td);
                        }
                    }
                table.append(tr);
            }
        document.body.prepend(table);
    }
    createTable();
}();


//// 2й вариант решения короче , но тогда 1й элемент = 01

// void function (){
//     const createTable = () => {
//         const table = document.createElement('table');
//         for (let i = 1; i <= 10; i++ ) {
//             const tr = document.createElement('tr');
//             for (let k = (i - 1) + '1' ; k <= i * 10 ; k++) {
//                 const td = document.createElement('td');
//                 td.innerHTML = `${k}`;
//                 tr.append(td);
//             }
//             table.append(tr);
//         }
//         document.body.prepend(table);
//     }
//     createTable();
// }();
