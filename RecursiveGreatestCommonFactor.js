function rGreatestCommonFactor(a,b){
    if( a % b === 0){
        return a;
    }
    if(a > b){
        return rGreatestCommonFactor(a%b, b);
    }
    else{
        return rGreatestCommonFactor(a, b%a);
    }
}