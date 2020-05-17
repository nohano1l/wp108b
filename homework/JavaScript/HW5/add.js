var a=[[1,2],[3,4]],b=[[1,1],[1,1]];
var arry=[];
for(i=0;i<a.length;i++){
    arry[i]=[];
    for(j=0;j<a.length;j++){
        arry[i][j]=a[i][j]+b[i][j];
    }
}
console.log(arry);