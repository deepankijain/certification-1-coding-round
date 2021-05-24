$(document).ready(function () {
  let isLoggedIn =
    localStorage.getItem('loggedInStatus') === null ? false : true
  if (isLoggedIn) {
    location.pathname = '/orders.html'
  } else {
    location.pathname = '/login.html'
  }
})
