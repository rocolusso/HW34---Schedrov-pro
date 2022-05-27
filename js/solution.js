'use strict';

/*
Написать функцию createTable(), которая выводит таблицу 10 × 10, заполненную числами от 1 до 100.

P.S. Подумайте о том как лучше обновлять DOM структуру, от этого зависит производительность скрипта.
 */

const numGenerator = (numStart = 1,numEnd = 100  ) => {   // масссив чисел 1-100

    const nums = [];
    const getNumsArray = () => {

        for (let i = numStart; i <= numEnd ;i++ ){
            nums.push(i);
        }
        return nums;
    }
    return getNumsArray();
}

const tdGenerator = () => {

    const tdItems = [];

    const getTdItems = () => {
        for (let k of numGenerator()) {
            tdItems.push(`<td>${k}</td>`);
        }
        return tdItems;
    }

    return getTdItems();

}
const tdItemsData = tdGenerator(); //  масссив тегов <td>1</td>...<td>100</td>




const table = document.createElement('table');   ///Создание тега <table>
table.id ='matrix';
const addTable = document.body.prepend(table);            ///Вставка <table>



for (let k = 1; k <= 10; k++ ){                            // отрисовка строк <tr>
    const tr = document.createElement('tr');
    table.prepend(tr);
}



const getTable = document.getElementById('matrix');

getTable.setAttribute('style','' +
    'background:purple;' +
    'color:white;' +
    'border: 5px solid aqua' )

document.body.setAttribute('style','display:flex;' +
    'justify-content:center' +
    '')


const getTrItemsList = document.getElementsByTagName('tr');     ///Отрисовка <tr> ......

getTrItemsList[0].innerHTML = `${tdItemsData.slice(0,10)}`
getTrItemsList[1].innerHTML = `${tdItemsData.slice(10,20)}`
getTrItemsList[2].innerHTML = `${tdItemsData.slice(20,30)}`
getTrItemsList[3].innerHTML = `${tdItemsData.slice(30,40)}`
getTrItemsList[4].innerHTML = `${tdItemsData.slice(40,50)}`
getTrItemsList[5].innerHTML = `${tdItemsData.slice(50,60)}`
getTrItemsList[6].innerHTML = `${tdItemsData.slice(60,70)}`
getTrItemsList[7].innerHTML = `${tdItemsData.slice(70,80)}`
getTrItemsList[8].innerHTML = `${tdItemsData.slice(80,90)}`
getTrItemsList[9].innerHTML = `${tdItemsData.slice(90,100)}`


const getTd = document.getElementsByTagName('td');

for (let i = 0; i <= 100; i++ ){
    getTd[i].setAttribute('style','width:40px;' +
        'height:30px;' +
        'text-align:center;')
}


