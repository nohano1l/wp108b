function neg(n){
    var b=[];
    for(i=0;i<n.length;i++){
        b[i]=[];
        for(j=0;j<n.length;j++){
            b[i][j]=-n[i][j];
        }
    }
    return b;
}
var a=[[1,2],[3,4]];

console.log(neg(a));