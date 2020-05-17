var sd=[1,2,3,4,5];
var a=0,b=0,ans=0;

for(i=0;i<sd.length;i++){
    a+=sd[i];
}
a=a/sd.length;

for(j=0;j<sd.length;j++){
    b=sd[j];
    ans+=Math.pow(a-b,2);
}
ans=Math.sqrt(ans/sd.length);
console.log(ans);