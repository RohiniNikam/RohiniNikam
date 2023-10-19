function f(n){
    if(n==0|| n==1)
    return 1;
else
return n*f(n-1);
}
let n=5;
console.log("factorial of "+ n +" is:" +f(n));