$(document).ready(function () {
  $('#login-form').submit(function (e) {
    e.preventDefault()
    const username = $('#username').val()
    const password = $('#password').val()
    if (username === password) {
      alert('Login Successful!')
      location.assign('/orders.html')
      localStorage.setItem('loggedInStatus', 'true')
    } else {
      alert('Please enter valid credentials.')
    }
  })
})
