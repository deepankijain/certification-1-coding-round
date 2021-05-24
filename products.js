$(document).ready(function () {
  let count
  $.get(
    'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products',
    (data) => {
      data.forEach((product) => addSingleRow(product))
      count = data.length
      $('#count').html(`Count: ${count}`)
    },
  )
  $('input[name=products-expired]').change((e) => {
    let rows = $('.expired')
    let expiredProducts = rows.length
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
      count -= expiredProducts
    } else {
      count += expiredProducts
    }
    $('#count').html(`Count: ${count}`)
  })
  $('input[name=products-low-stock]').change((e) => {
    let rows = $('.low-stock')
    let lowStockProducts = rows.length
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
      count -= lowStockProducts
    } else {
      count += lowStockProducts
    }
    $('#count').html(`Count: ${count}`)
  })
})

const addSingleRow = (product) => {
  const today = new Date()
  const expiryDay = new Date(product.expiryDate)
  const dateInPast = (firstDate, secondDate) => {
    if (firstDate.setHours(0, 0, 0, 0) <= secondDate.setHours(0, 0, 0, 0)) {
      return true
    }
    return false
  }
  let isExpired = dateInPast(expiryDay, today)
  let isLowStock = product.stock < 100 ? true : false
  let tableRow = document.getElementById('products-table').insertRow()
  if (isExpired && isLowStock) {
    tableRow.className = 'table-row expired low-stock'
  } else if (isExpired) {
    tableRow.className = 'table-row expired'
  } else if (isLowStock) {
    tableRow.className = 'table-row low-stock'
  } else {
    tableRow.className = 'table-row'
  }
  let id = tableRow.insertCell()
  id.className = 'secondary-text'
  id.innerHTML = product.id
  let medicineName = tableRow.insertCell()
  medicineName.className = 'primary-text'
  medicineName.innerHTML = product.medicineName
  let medicineBrand = tableRow.insertCell()
  medicineBrand.className = 'secondary-text'
  medicineBrand.innerHTML = product.medicineBrand
  let expiryDate = tableRow.insertCell()
  expiryDate.className = 'primary-text'
  expiryDate.innerHTML = product.expiryDate
  let unitPrice = tableRow.insertCell()
  unitPrice.className = 'secondary-text'
  unitPrice.innerHTML = `$${product.unitPrice}`

  let stock = tableRow.insertCell()
  stock.className = 'secondary-text'
  stock.innerHTML = product.stock
}
