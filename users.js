$(document).ready(function () {
  $.get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users', (res) => {
    res.forEach((user) => displayUser(user))
  })
  $('#filter-search').submit((e) => {
    e.preventDefault()
    let inputValue = $('#search-bar').val().toLowerCase()
    if (inputValue.length < 2) {
      alert('Please enter at least 2 characters')
    } else {
      $.get(
        `https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users?fullName=${inputValue}`,
        (res) => {
          let rows = $('.table-row')
          for (const row of rows) {
            row.remove()
          }
          res.forEach((user) => displayUser(user))
        },
      )
    }
  })
  $('#btn-reset').click((e) => {
    e.preventDefault()
    $('#search-bar').val('')
    $.get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users', (res) => {
      let rows = $('.table-row')
      for (const row of rows) {
        row.remove()
      }
      res.forEach((user) => displayUser(user))
    })
  })
})

const displayUser = (user) => {
  let tableRow = document.getElementById('users-table').insertRow()
  tableRow.className = 'table-row'
  let id = tableRow.insertCell()
  id.className = 'secondary-text'
  id.innerHTML = user.id
  let profilePic = tableRow.insertCell()
  profilePic.className = 'primary-text'
  profilePic.innerHTML = `<img src=${user.profilePic} alt="Profile Pic">`
  let fullName = tableRow.insertCell()
  fullName.className = 'secondary-text'
  fullName.innerHTML = user.fullName
  let dob = tableRow.insertCell()
  dob.className = 'primary-text'
  dob.innerHTML = user.dob
  let gender = tableRow.insertCell()
  gender.className = 'secondary-text'
  gender.innerHTML = user.gender

  let currentLocation = tableRow.insertCell()
  currentLocation.className = 'secondary-text'
  currentLocation.innerHTML = `${user.currentCity}, ${user.currentCountry}`
}
