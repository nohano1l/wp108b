const setting = {}

setting.html = `
<table>
  <thead><tr><th>欄位</th><th>內容</th></tr></thead>
  <tbody>
    <tr><td>商店名稱</td><td><input id="shopName" type="text" value=""/></td></tr>
    <tr><td>地址</td><td><input id="shopAddress" type="text" value=""/></td></tr>
    <tr><td>電話</td><td><input id="shopTel" type="text" value=""/></td></tr>
    <tr><td>產品清單</td><td><textarea id="items"></textarea></td></tr>
    <tr><td>附加選項</td><td><textarea id="addons"></textarea></td></tr>
  </tbody>
</table>
<br/>
<button onclick="setting.save()">儲存設定</button>
<button onclick="shop.start()">回主選單</button>
`

setting.start = function () {
  SN.show(setting.html)
  SN.id('shopName').value = shop.name
  SN.id('shopAddress').value = shop.address
  SN.id('shopTel').value = shop.tel
  SN.id('items').value = JSON.stringify(shop.items, null, 2)
  SN.id('addons').value = JSON.stringify(shop.addons, null, 2)
}

setting.save = function () {
  try {
    shop.name = SN.id('shopName').value
    shop.address = SN.id('shopAddress').value
    shop.tel = SN.id('shopTel').value
    shop.items = JSON.parse(SN.id('items').value)
    shop.addons = JSON.parse(SN.id('addons').value)
  } catch (error) {
    alert('儲存失敗，請檢查格式是否有錯！\n', error)
    return
  }
  localStorage.setItem('shop.name', shop.name)
  localStorage.setItem('shop.address', shop.address)
  localStorage.setItem('shop.tel', shop.tel)
  localStorage.setItem('shop.items', SN.id('items').value)
  localStorage.setItem('shop.addons', SN.id('addons').value)
  SN.id('menuShopName').innerHTML = shop.name
  alert('儲存成功！')
}