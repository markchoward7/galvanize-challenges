document.addEventListener('DOMContentLoaded', function () {
    let items = document.getElementsByClassName("badge")
    for (const item of items) {
      let value = Number(item.innerText)
      if (value < 5) {
        item.classList.add("badge-danger")
      }
      if (value < 10) {
        item.classList.add("badge-secondary")
      } else {
        item.classList.add("badge-danger")
      }
    }
  })
  
