var arry=[];
var a=45,x=2;
while(a>1){
    if(a%x==0){
        arry.push(x);
        a=a/x;
        continue;
    }
    x++;
}
console.log(arry);