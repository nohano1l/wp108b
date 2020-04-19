function isPrime(n) {
    for (var i=2; i<n; i++) {
      if (n%i == 0)
        return false;
    }
    return true;
  }
  a=3,b=7,count=0;
  for (var p=a; p<=b; p++) {
    if (isPrime(p))
      count++;
  }
  console.log("countPrime("+a+","+b+")=>"+count);