const report = {}

report.html = `
  <div id="report" class="panel">
    <table>
      <thead><tr><th>代號</th><th>金額</th><th>日期</th><th>時間</th></tr></thead>
      <tbody id="reportBody"></tbody>
    </table>
    <br/>
    <div class="center">
      <label>本日總收入：</label>
      <label id="dayTotal"></label>
      <br/><br/>
      <button onclick="shop.start()">回主選單</button>
    </div>
  </div>
  <div id="detail" class="panel" style="display:none">
    <table>
      <thead><tr><th>商品</th><th>單價</th><th>數量</th></tr></thead>
      <tbody id="detailBody"></tbody>
    </table>
    <br/>
    <div>
      <label>總價:</label><label id="totalPrice"></label>
      <br/><br/>
      <button onclick="SN.showPanel('report')">回到報表</button>
    </div>
  </div>
`

report.start = function () {
  SN.show(report.html)
  report.showReport()
}

report.showReport = function () {
  SN.id('reportBody').innerHTML = report.orderListHtml()
  SN.id('dayTotal').innerHTML = report.dayTotal + ''
}

report.showDetail = function (i) {
  SN.showPanel('detail')
  let order = shop.getOrder(i)
  SN.id('detailBody').innerHTML = report.orderDetailHtml(order)
  SN.id('totalPrice').innerHTML = order.totalPrice
}

report.orderListHtml = function () {
  list = []
  let dayTotal = 0
  for (let i=1; i <= shop.orderCount; i++) {
    let order = shop.getOrder(i)
    dayTotal += order.totalPrice
    list.push(report.orderRowHtml(i, order))
  }
  report.dayTotal = dayTotal
  return list.join('\n')
}

report.orderRowHtml = function (i, order) {
  let time = new Date(order.time)
  return '<tr><td><a href="#" onclick="report.showDetail('+i+')">0' + i + '</a></td><td class="number">' + order.totalPrice + '</td><td>' + time.dateToString(time) + '</td><td>' + time.timeToString(time) + '</td></tr>'
}

report.orderDetailHtml = function (order) {
  let detail = []
  let records = order.records
  for (let i=0; i<records.length; i++) {
    let r = records[i]
    detail.push('<tr><td>' + r.name + '</td><td>' + r.price + '</td><td>' + r.quantity + '</td></tr>')
  }
  return detail.join('\n')
}