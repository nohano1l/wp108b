const shop = {
    name: '豪臻丞美食館',
    address: '510彰化縣員林市光明南街146號',
    tel: '04-8358727',
    items: {'水餃': 40, '香菇肉羹麵': 40, '梅干扣肉飯': 50, '陽春麵': 25},
    addons: {'無': 0, '加辣': 10, '蛋': 10, '海帶': 10, '豆干': 10 },
    orderCount: 0,
  }
  
  shop.html = `
  <div>
    <button class="big" onclick="POS.start()">新增訂單</button><br/><br/>
  </div>
  `
  
  shop.start = function () {
    shop.init()
    shop.name = localStorage.getItem('shop.name') || shop.name
    shop.address = localStorage.getItem('shop.address') || shop.address
    shop.tel = localStorage.getItem('shop.tel') || shop.tel
    SN.id('menuShopName').innerHTML = shop.name
    const itemsJson = localStorage.getItem('shop.items')
    const addonsJson = localStorage.getItem('shop.addons')
    if (itemsJson != null) shop.items = JSON.parse(itemsJson)
    if (addonsJson != null) shop.addons = JSON.parse(addonsJson)
    SN.show(shop.html)
  }
  
  shop.init = function () {
    shop.orderCount = localStorage.getItem('POS.Order.count')
    if (shop.orderCount == null) {
      shop.orderCount = 0
      localStorage.setItem('POS.Order.count', shop.orderCount)
    }
  }
  
  shop.incCount = function () {
    // let orderCount = parseInt(localStorage.getItem('POS.Order.count')) + 1
    localStorage.setItem('POS.Order.count', ++ shop.orderCount)
  }
  
  shop.saveOrder = function (Order) {
    localStorage.setItem('POS.Order.' + shop.orderCount, JSON.stringify(Order))
  }
  
  shop.getOrder = function (i) {
    let orderJson = localStorage.getItem('POS.Order.'+i)
    if (orderJson == null) return null
    return JSON.parse(orderJson)
  }