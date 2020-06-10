// after the page finishes loading run this block of code
document.addEventListener('DOMContentLoaded', function () {
  // grab the element with the id of myForm and stick it in the form variable
  var form = document.getElementById('myForm')
  // add a listener for when the form is submitted
  form.addEventListener('submit', function (e) {
  	// ensure the form wasn't left blank
  	e.preventDefault()

  	var name = document.getElementById('name')
    var text = name.value
	
  	// reset name field to blank
  	name.value = ''
    // set the focus to the name field, allowing typing into it without having to reselect it
    name.focus()

    // grab an alert if one exists
    var prev = document.querySelector('.alert')
    if (prev) {
  	  // if it does, remove it
    	prev.remove()
    }

    var alert = document.createElement('div')
    alert.className = 'alert alert-info'
    alert.textContent = 'Thank you for your submission, ' + text + '!'

    var row = document.querySelector('form')
    // put the newly created alert onto the page as a child of form
    row.append(alert)
  })
})
