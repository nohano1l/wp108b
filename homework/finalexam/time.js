const time = {}

time.dateToString = function (date) {
  return date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate()
}

time.timeToString = function (date) {
  return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
}