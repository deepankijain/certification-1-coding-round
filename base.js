$(document).ready(function () {
  const protectedPages = ['/orders.html', '/products.html', '/users.html']
  let isLoggedIn =
    localStorage.getItem('loggedInStatus') === null ? false : true
  console.log(location.pathname)
  if (protectedPages.includes(location.pathname)) {
    if (isLoggedIn === false) {
      alert('Please login first!')
      location.replace('/login.html')
    }
  }
  $('#logout').click((e) => {
    e.preventDefault()
    alert('Logging Off')
    localStorage.removeItem('loggedInStatus')
    location.assign('/login.html')
  })
})
