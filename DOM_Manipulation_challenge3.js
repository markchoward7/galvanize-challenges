document.addEventListener('DOMContentLoaded', function() {
    document.getElementsByClassName("remove-me")[0].remove()

    let link = document.getElementsByTagName("a")[0]
    link.classList.add("galvanize-link")
    link.attributes.href = "http:galvanize.com"
    
    let newHeader = document.createElement("h1")
    newHeader.innerText = "some text"
    document.body.insertBefore(newHeader, document.body.children[0])
  })
