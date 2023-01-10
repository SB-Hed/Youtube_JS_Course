/* import sumNumber from './moduleOne.mjs'

const result = sumNumber(10, 7)

console.log(result)
 */

/* =========================================================================================================================================== */
//Імпорт декількох елементів: імена змінних мають співпадати з іменами тих змінних які знаходяться у файлі moduleOne.mjs
//Приклад 1:
/* import {
    one,
    two
} from './moduleOne.mjs'

console.log(one)        //1
console.log(two)        //two
 */

//Але якщо потрібно, ми можемо переіменувати змінні так як нам потрібно. Це робиться наступним чином з допомогою "as Нове Ім'я Змінної":
/* import {
    one as oneRenamed,
    two
} from './moduleOne.mjs'

console.log(oneRenamed)        //1
console.log(two)        //two
 */


//Приклад 2:
import {sum, mult} from './moduleOne.mjs'

console.log(sum(10, 2))
console.log(mult(10, 2))