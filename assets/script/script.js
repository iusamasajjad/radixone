//   =============== radio-frequency-lines

var toAdd = document.createDocumentFragment()
      for (var i = 0; i < 140; i++) {
        var newDiv = document.createElement("div")
        newDiv.id = "r" + i
        if (i % 20 == 0) {
          newDiv.className = "h-10 dark w_2 bg-gray"
          newDiv.innerHTML = `<span class="text-white frequency-span text-xs relative top-10 right-3">3.50MHz</span>`
        } else {
          newDiv.className = "h-5 w_2 dark bg-gray"
        }
        toAdd.appendChild(newDiv)
      }

document.getElementById("radio").appendChild(toAdd) 
// by default icon color of ranger
var style = document.querySelector('.slider').style;
            style.setProperty('--background', '#008080');
            var slider1 = document.querySelector('.slider-1').style;
            slider1.setProperty('--background', '#008080');
            var slider2 = document.querySelector('.slider-2').style;
            slider2.setProperty('--background', '#008080');
            var slider3 = document.querySelector('.slider-3').style;
            slider3.setProperty('--background', '#008080'); 
            var dropdown1 = document.querySelector('.dropdown-wrapper').style;
            dropdown1.setProperty('--color', '#fff');
            var dropdown2 = document.querySelector('.dropdown-wrapper2').style;
            dropdown2.setProperty('--color2', '#fff');
// ids for all theme changing
let bodyColor = document.getElementById("body-color")
let bg = document.getElementById("receiverBg")
let btnBg = document.getElementsByClassName("btn-bg")
let btnBg2 = document.getElementsByClassName("btn-bg2")
let tags = document.getElementsByClassName("tags")
let radioBg = document.getElementById("radio-bg")
let ulColor = document.getElementsByClassName("ul-color")
let svgFill = document.getElementsByClassName("svg-fill")
let logoLocation = document.getElementById("location")
let frequencyLine = document.getElementsByClassName("dark")
let frequencySpan = document.getElementsByClassName("frequency-span")
let mhz = document.getElementById("mhz")
let logoWhite = document.getElementById("logo-white")
let logoWhiteMob = document.getElementById("logo-whiteMob")
let logoGreen = document.getElementById("logo-green")
let logoGreenMob = document.getElementById("logo-greenMob")
let menuBlack = document.getElementById("menu-black")
let menuWhite = document.getElementById("menu-white")

// theme-switcher-for-large-screens
const dropdownlist = document.getElementsByClassName("dropdown-wrapper")
      const links = document.querySelectorAll(".dropdown-list a")
      const span = document.querySelectorAll("span")

      for(var i = 0; i<dropdownlist.length;i++){
        dropdownlist[i].addEventListener("click", function () {
          this.classList.toggle("is-active")
        })
      }

      links.forEach((element) => {
        element.addEventListener("click", function (evt) {
          for(var i = 0;i<span.length;i++){
            span[i].innerHTML = evt.currentTarget.textContent
          }
          console.log(evt.currentTarget.textContent)
          if(evt.currentTarget.textContent == "Neutral"){

            // logo theme
            logoWhite.style.display ="block"
            logoGreen.style.display= "none"
            logoWhiteMob.style.display ="block"
            logoGreenMob.style.display= "none"
            menuBlack.style.display ="none"
            menuWhite.style.display= "block"
            // =================== background color of body
            bodyColor.classList.remove("dark-theme")
            bodyColor.classList.remove("bg-white")
            bodyColor.classList.add("natural-theme")

            // logo with location paragraph
            logoLocation.classList.remove("text-white")
            logoLocation.classList.add("text-black")
            // =================== navbar links color
            for (var i = 0; i < ulColor.length; i++) {
              ulColor[i].classList.remove('text-black');
            }
            for (var i = 0; i < ulColor.length; i++) {
              ulColor[i].classList.add('text-white');
            }
            // =================== ul-btn-background
            for (var i = 0; i < btnBg.length; i++) {
              btnBg[i].classList.remove('bg-white');
            }
            for (var i = 0; i < btnBg.length; i++) {
              btnBg[i].classList.add('bg-black');
            }
            for(var i = 0;i<btnBg2.length;i++){
              btnBg2[i].classList.remove("bg-white")
              btnBg2[i].classList.add("bg-black")
              btnBg2[i].classList.remove("text-black")
              btnBg2[i].classList.add("text-white")
            }

            // =================== svg fill colors
            for (var i = 0; i < svgFill.length; i++) {
              svgFill[i].classList.remove('fill-black');
            }
            for (var i = 0; i < svgFill.length; i++) {
              svgFill[i].classList.add('fill-white');
            }
            // =================== frequency lines background color
            radioBg.classList.add("frequency-bg")
            radioBg.classList.remove("border")
            for (var i = 0; i < frequencySpan.length; i++) {
              frequencySpan[i].classList.remove('text-black');
              frequencySpan[i].classList.add('text-white');
            }
            // =================== background image of radio
            bg.classList.remove("light-background")
            bg.classList.add("natural-background")
            
            // =================== configuration tags 
            for (var i = 0; i < tags.length; i++) {
              tags[i].classList.add('natural-blur-bg');
              tags[i].classList.remove('text-black');
              tags[i].classList.add('text-white');
            }
             // ================== configuration ranger icon color
             var style = document.querySelector('.slider').style;
             style.setProperty('--background', '#fff');
             var slider1 = document.querySelector('.slider-1').style;
             slider1.setProperty('--background', '#fff');
             var slider2 = document.querySelector('.slider-2').style;
             slider2.setProperty('--background', '#fff');
             var slider3 = document.querySelector('.slider-3').style;
             slider3.setProperty('--background', '#fff');
             mhz.classList.remove("text-black")
             mhz.classList.add("text-white")

             var dropdown = document.querySelector('.dropdown-wrapper').style;
            dropdown.setProperty('--color', '#fff');
            var dropdown2 = document.querySelector('.dropdown-wrapper2').style;
            dropdown2.setProperty('--color2', '#fff');
          }

          // ===================== check for light-theme ===============================
          if(evt.currentTarget.textContent == "light"){
            // logo theme
            logoWhite.style.display ="none"
            logoGreen.style.display= "block"
            logoWhiteMob.style.display ="none"
            logoGreenMob.style.display= "block"
            menuBlack.style.display ="block"
            menuWhite.style.display= "none"

            // =================== body color changer
            bodyColor.classList.remove("dark-theme")
            bodyColor.classList.add("bg-white")

            // logo with location paragraph
            logoLocation.classList.remove("text-white")
            logoLocation.classList.add("text-black")

            // =================== navbar links color
            for (var i = 0; i < ulColor.length; i++) {
              ulColor[i].classList.add('text-black');
            }
            for (var i = 0; i < ulColor.length; i++) {
              ulColor[i].classList.remove('text-black');
            }
            // =================== ul-btn-background
            for (var i = 0; i < btnBg.length; i++) {
              btnBg[i].classList.remove('bg-black');
            }
            for (var i = 0; i < btnBg.length; i++) {
              // btnBg[i].classList.add('bg-white');
            }
            for(var i = 0;i<btnBg2.length;i++){
              btnBg2[i].classList.remove("bg-black")
              btnBg2[i].classList.add("bg-white")
              btnBg2[i].classList.remove("text-white")
              btnBg2[i].classList.add("text-black")
            }

            // =================== frequency lines background color
            radioBg.classList.remove("frequency-bg")
            radioBg.classList.add("border")
            for (var i = 0; i < frequencyLine.length; i++) {
              frequencyLine[i].classList.add('dark');
            }
            for (var i = 0; i < frequencySpan.length; i++) {
              frequencySpan[i].classList.remove('text-white');
              frequencySpan[i].classList.add('text-black');
            }
            // =============== background image of radio
            bg.classList.remove("natural-background")
            bg.classList.add("light-background")

            // =============== navbar links color
            for (var i = 0; i < ulColor.length; i++) {
              ulColor[i].classList.remove('text-white');
            }
            for (var i = 0; i < ulColor.length; i++) {
              ulColor[i].classList.add('text-black');
            }
            // ============== svg fill colors
            for (var i = 0; i < svgFill.length; i++) {
              svgFill[i].classList.remove('fill-white');
              svgFill[i].classList.add('fill-black');
            }

            // ================= configuration section 
            mhz.classList.remove("text-white")
            mhz.classList.add("text-black")
            for (var i = 0; i < tags.length; i++) {
              tags[i].classList.remove('text-white');
              tags[i].classList.add('text-black');
            }
            // ================== configuration ranger icon color
            var style = document.querySelector('.slider').style;
            style.setProperty('--background', '#fff');
            var slider1 = document.querySelector('.slider-1').style;
            slider1.setProperty('--background', '#fff');
            var slider2 = document.querySelector('.slider-2').style;
            slider2.setProperty('--background', '#fff');
            var slider3 = document.querySelector('.slider-3').style;
            slider3.setProperty('--background', '#fff');
            var dropdown = document.querySelector('.dropdown-wrapper').style;
            dropdown.setProperty('--color', '#000');
            var dropdown2 = document.querySelector('.dropdown-wrapper2').style;
            dropdown2.setProperty('--color2', '#000');
          }

          
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


