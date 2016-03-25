var aqiData = {}
var cityInput = document.getElementById('city-input')
var valueInput = document.getElementById('value-input')

function addAqiData() {
  var city = cityInput.value.trim()
  var value = valueInput.value.trim()
  aqiData[city] = value
  console.log(aqiData)
}

function renderAqiList() {
  var table = '<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>'
  for (var city in aqiData) {
    table += '<tr><td>'+city+'</td><td>'+aqiData[city]+'</td><td><button data-city="'+city+'">删除</button></td></tr>'
  }
  document.getElementById('table').innerHTML = city ? table : ''
}

function addBtnHandle() {
  addAqiData()
  renderAqiList()
}

function delBtnHandle(city) {
  delete aqiData[city]
  renderAqiList()
}

function init() {
  document.getElementById('add-btn').addEventListener('click', addBtnHandle)
  document.getElementById('table').addEventListener('click', function(e){
    if (e.target.nodeName.toLowerCase() === 'button') {
      delBtnHandle(e.target.dataset.city)
    }
  })
}

init()
