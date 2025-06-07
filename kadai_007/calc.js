let num;
num = Math.floor(Math.random()*30)

if (num % 3 == 0 && num % 5 !== 0) {
    console.log('変数numは3の倍数です');
}

else if(num % 3 !== 0 && num % 5 == 0) {
    console.log('変数numは5の倍数です');
}

else if(num % 3 == 0 && num % 5 == 0) {
    console.log('変数numは3と5の倍数です');
    }

else {
    console.log('変数numは'+num+'です');
}
