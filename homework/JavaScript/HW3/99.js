for(i=1;i<10;i++){
    var a=[];
    for(j=1;j<10;j++){
        a.push(j+'*'+i+'='+j*i+'\t');
    }
    var line = "";
    for (var z=0; z<a.length; z++) {
          line = line + a[z] + " ";
      }
      console.log(line);
}