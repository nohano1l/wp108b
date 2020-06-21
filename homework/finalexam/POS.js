const POS = {
    order: {
      totalPrice: 0,
      records: [],
      submitted: false
    }
  }
  
  const Order = POS.order
  
  POS.html = `
  <table id="orderTable">
  <thead>
    <tr>
      <td>
        <select id="items" onchange="POS.calcPrice()"></select>
        <select id="addons" onchange="POS.calcPrice()"></select>
      </td>
      <td><input id="price" type="number" value="0"></td>
      <td>
        <input id="quantity" type="number" value="1">
        <button onclick="POS.addItem()">新增</button>
      </td>
    </tr>
    <tr><th>商品</th><th>單價</th><th>數量</th></tr>
  </thead>
  <tbody id="orderTableBody">
    <tr><td>&nbsp;</td><td></td><td></td></tr>
  </tbody>
  </table>
  <br/>
  <div>
    <label>總價:</label>
    <input id="totalPrice" type="number" value="0">
    <button id="submit" onclick="POS.submit()">送出訂單</button>
    <button id="abort" onclick="POS.abort()">放棄訂單</button>
    <br/><br/>
    <button id="goShop" onclick="POS.goShop()">回主選單</button>
    <button id="newOrder" onclick="POS.start()" disabled="disabled">新增下一筆</button>
    <br/><br/>
  </div>
  </div>
  `
  
  POS.goShop = function () {
    if (!Order.submitted) {
      if (confirm('您的訂單尚未送出，請問是否要放棄該訂單？')) {
        shop.start()
        return
      } else {
        return
      }
    }
    shop.start()
  }
  
  POS.abort = function () {
    if (confirm('確定要放棄本訂單？')) {
        POS.start()
    }
  }
  
  POS.start = function () {
    SN.show(POS.html)
    SN.id('items').innerHTML = POS.optionList(shop.items)
    SN.id('addons').innerHTML = POS.optionList(shop.addons)
    POS.resetOrder(Order)
    POS.calcPrice()
  }
  
  POS.resetOrder = function (Order) {
    Order.totalPrice = 0
    Order.records = []
    Order.submitted = false
  }
  
  POS.submit = function () {
    if (Order.records.length === 0) {
      alert('您的訂單是空的，無法送出！')
      return
    }
    shop.incCount()
    Order.time = Date.now()
    Order.submitted = true
    shop.saveOrder(Order)
    SN.id('submit').disabled = 'disabled'
    SN.id('submit').innerHTML = '已送出'
    SN.id('abort').disabled = 'disabled'
    SN.id('newOrder').disabled = ''
  }
  
  POS.optionList = function (list) {
    let r = []
    for (let name in list) {
      let price = list[name]
      r.push('<option value="'+name+':'+price+'">'+name+':'+price+'</option>')
    }
    return r.join('\n')
  }
  
  POS.list = function () {
    let records = Order.records
    let list = []
    for (let i=0; i<records.length; i++) {
      list.push(`<tr><td>${records[i].name}</td><td class="number">${records[i].price}</td><td class="number">${records[i].quantity}</td></tr>`)
    }
    return list.join('\n')
  }
  
  POS.calcPrice = function () {
    let [item, itemPrice] = SN.id('items').value.split(':')
    let [addon, addonPrice] = SN.id('addons').value.split(':')
    let price = parseInt(itemPrice) + parseInt(addonPrice)
    SN.id('price').value = price
    return {item, addon, price}
  }
  
  POS.addItem = function () {
    let {item, addon, price} = POS.calcPrice()
    let quantity = parseInt(SN.id('quantity').value)
    let record = {name: item+'('+addon+')', price: price, quantity: quantity}
    Order.records.push(record)
    SN.id('orderTableBody').innerHTML = POS.list()
    Order.totalPrice += price * quantity
    SN.id('totalPrice').value = Order.totalPrice
  }