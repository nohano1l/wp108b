const SN = {}

SN.id = function(path) {
  return document.getElementById(path)
}

SN.one = function(path) {
  return document.querySelector(path)
}

SN.showPanel = function(name) {
  document.querySelectorAll('.panel').forEach((node)=>node.style.display='none')
  SN.id(name).style.display = 'block'
}

SN.show = function (html) {
  SN.id('main').innerHTML = html
}

SN.openNav = function () {
  SN.id('mySidenav').style.width = '250px'
}

SN.closeNav = function () {
  SN.id('mySidenav').style.width = '0'
}