function rFactorial(num){
    if(typeof num == 'double'){
        Math.floor(num);
    }
    if( num == 1){
        return 1;
    }
    return num * rFactorial(num -1);
}