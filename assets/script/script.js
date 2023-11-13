// theme-switcher-for-large-screens
const dropdownlist = document.querySelector("#dropdown-wrapper")
      const links = document.querySelectorAll(".dropdown-list a")
      const span = document.querySelector("span")

      dropdownlist.addEventListener("click", function () {
        this.classList.toggle("is-active")
      })

      links.forEach((element) => {
        element.addEventListener("click", function (evt) {
          span.innerHTML = evt.currentTarget.textContent
        })
 })

//  ================= mobile-theme-switcher
 const dropdown = document.querySelector("#dropdown-wrapper-mob")
 const mob_links = document.querySelectorAll(".dropdown-list a")
 const mob_span = document.querySelector("span")

 dropdown.addEventListener("click", function () {
   this.classList.toggle("is-active")
 })

 mob_links.forEach((element) => {
   element.addEventListener("click", function (evt) {
    mob_span.innerHTML = evt.currentTarget.textContent
   })
})

// configuration section toggle
function toggle() {
    var x = document.getElementById("configuration")
    var receiverBg = document.getElementById("receiverBg")
    if (x.style.display === "none") {
      x.style.display = "block"
      receiverBg.style.height = "100%"
    } else {
      x.style.display = "none"
      receiverBg.style.height = "100vh"
    }
  }

   // ============ mobile-hamburger-function
   function menuToggle() {
    var x = document.getElementById("mobile-menu")
    x.style.width = "100%"
  }
  function menuClose() {
    var x = document.getElementById("mobile-menu")
    x.style.width = "0%"
  }

//   =============== radio-frequency-lines

var toAdd = document.createDocumentFragment()
      for (var i = 0; i < 140; i++) {
        var newDiv = document.createElement("div")
        newDiv.id = "r" + i
        if (i % 20 == 0) {
          newDiv.className = "h-10 dark light w_2 bg-gray"
          newDiv.innerHTML = `<span class="text-black text-xs relative top-10 right-3">3.50MHz</span>`
        } else {
          newDiv.className = "h-5 w_2 light bg-gray"
        }
        toAdd.appendChild(newDiv)
      }

      document.getElementById("radio").appendChild(toAdd)  
