const menu = {}

menu.html = `
<table id="t01">
  <tr>
    <th>Food</th>
    <th>Soup</th> 
    <th>Side dish</th>
  </tr>
  <tr>
    <td>水餃$40</td>
    <td>香菇肉羹$35</td>
    <td>燙青菜$25</td>
  </tr>
  <tr>
    <td>魷魚羹麵$40</td>
    <td>貢丸湯$20</td>
    <td>豆干$10</td>
  </tr>
  <tr>
    <td>梅干扣肉飯$50</td>
    <td>綜合湯$25</td>
    <td>海帶$10</td>
  </tr>
</table>
<div>
<button class="big" onclick="POS.start()">新增訂單</button><br/><br/>
</div>
  `

  menu.start = function () {
    SN.show(menu.html)
  }