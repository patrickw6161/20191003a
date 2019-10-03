let a: string[] = ['a', 'b', 'c', 'd'];
let b: string = ('bb ff dd tt');
let c: string = ('0123456789');
let d: string = ('abcdehghijklmnop');
let e: string = '123';
a.push('e');// 直接加入陣列
console.log('index 答案' + d.indexOf('d')); //找文字在第幾個
console.log('split 答案' + b.split(' ')); //把文字辯陣列
console.log('charAt 答案' + c.charAt(5)); //從順序找出文字是哪個
console.log('陣列 答案' + a[2]); //陣列
console.log('重複 答案' + '#'.repeat(100));//重複文字
console.log(+e + 345); //變數前面加'+'變成數字
console.log(a);
console.log(a.length);//顯示數量

let f = 5000000

if (f >= 50000) {
    console.log('乾爹')
} else {
    console.log('窮')
}

//20191003 string pratice