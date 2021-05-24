$(document).ready(function () {
  let count
  $.get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders', (res) => {
    res.forEach((data) => addSingleRow(data))
    count = res.length
    $('#count').html(`Count: ${count}`)
  })
  $('input[name=orders-new]').change((e) => {
    let rows = $('.New')
    let newRows = rows.length
    let isChecked = true
    for (const row of rows) {
      if (e.currentTarget.checked === false) {
        isChecked = false
        row.classList.add('hide')
      } else {
        row.classList.remove('hide')
        isChecked = true
      }
    }
    if (!isChecked) {
      count -= newRows
    } else {
      count += newRows
    }
    $('#count').html(`Count: ${count}`)
  })
  $('input[name=orders-packed]').change((e) => {
    let rows = $('.Packed')
    let packedRows = rows.length
    let isChecked = true
    for (const row of rows) {
      if (e.currentTarget.checked === false) {
        row.classList.add('hide')
        isChecked = false
      } else {
        row.classList.remove('hide')
        isChecked = true
      }
    }
    if (!isChecked) {
      count -= packedRows
    } else {
      count += packedRows
    }
    $('#count').html(`Count: ${count}`)
  })
  $('input[name=orders-transit]').change((e) => {
    let rows = $('.InTransit')
    let transitRows = rows.length
    let isChecked = true
    for (const row of rows) {
      if (e.currentTarget.checked === false) {
        row.classList.add('hide')
        isChecked = false
      } else {
        row.classList.remove('hide')
        isChecked = true
      }
    }
    if (!isChecked) {
      count -= transitRows
    } else {
      count += transitRows
    }
    $('#count').html(`Count: ${count}`)
  })
  $('input[name=orders-delivered]').change((e) => {
    let rows = $('.Delivered')
    let deliveredRows = rows.length
    let isChecked = true
    for (const row of rows) {
      if (e.currentTarget.checked === false) {
        row.classList.add('hide')
        isChecked = false
      } else {
        row.classList.remove('hide')
        isChecked = true
      }
    }
    if (!isChecked) {
      count -= deliveredRows
    } else {
      count += deliveredRows
    }
    $('#count').html(`Count: ${count}`)
  })
})

const addSingleRow = (order) => {
  let tableRow = document.getElementById('orders-table').insertRow()
  tableRow.className = `table-row ${order.orderStatus}`
  let id = tableRow.insertCell()
  id.className = 'secondary-text'
  id.innerHTML = order.id
  let customerName = tableRow.insertCell()
  customerName.className = 'primary-text'
  customerName.innerHTML = order.customerName
  let date = tableRow.insertCell()
  date.className = 'primary-text'
  date.innerHTML = `${order.orderDate}
  <br/>
  <span class="secondary-text">${order.orderTime}</span>`
  let amount = tableRow.insertCell()
  amount.className = 'secondary-text'
  amount.innerHTML = `$${order.amount}`
  let orderStatus = tableRow.insertCell()
  orderStatus.className = 'primary-text'
  orderStatus.innerHTML = order.orderStatus
}
