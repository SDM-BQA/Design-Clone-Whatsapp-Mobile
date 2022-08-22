const mainTabs = document.querySelectorAll("[data-tab-target]")

const searchIcon = document.querySelector("#search-icon")

const searchBar = document.querySelector(".search-bar")

const logoDiv = document.querySelector(".logo-search-div")

const backIcon = document.querySelector("#back-icon")

const menuIcon = document.querySelector("#menu-ico")

const hiddenMenu = document.querySelector("#hidden-menu")

const mainContent = document.querySelector(".main-content")

const sNavbar = document.querySelector(".sticky-navbar-div")

const tabsContent = document.querySelectorAll("[data-tab-content]")

const chatSection = document.querySelector("#chat")

const statusSection = document.querySelector("#status")

const callsSection = document.querySelector("#call")


const names = ["MANISH", "PRAVEEN", "ADITYA", "ROHTASH", "TEWATIA", "PRAVEEN", "NEHA", "MONIKA", "akshay", "priya", "Rohit", "Tapas", "Sujay", "Sahaj", "Raju", "Sujay", "Jhonto", "Avi", "Rakesh", "Abinash"]

// CHAT SECTION DIV CREATION

function crateMsgDivs() {
    for (let i = 0; i < 20; i++) {
        let randNo = Math.floor(Math.random() * 1000)
        const newDivEl = document.createElement("div")
        newDivEl.innerHTML =
            `
            <div class="msg-div">
    <div class="contact-img">
    <img src="https://picsum.photos/200/300?random=${randNo}" alt="hello" class="c-img">
    </div>
    <div class="contact-name-msg-div">
    <div class="contact-name-time">
    <span class="c-name">${names[i].toLowerCase()}</span><span class="c-time">${Math.floor(Math.random() * (24 - 10)) + 10}:${Math.floor(Math.random() * (24 - 10)) + 10}</span>
    </div>
    <div class="contact-msg">
        <i class="fa-solid fa-check"></i>
        Hello
        </div>
    </div>
</div>
`
        chatSection.append(newDivEl)
    }

}

// STATUS SECTION DIV CREATION

function crateStatusDivs() {
    for (let i = 0; i < 15; i++) {
        let randNo = Math.floor(Math.random() * 1000)
        const newStatusEl = document.createElement("div")
        newStatusEl.innerHTML =
            `
    <div class="msg-div">
    <div class="contact-img c unactive-status">
    <img src="https://picsum.photos/200/300?random=${randNo}" alt="hello" class="c-img">
    </div>
    <div class="contact-name-msg-div">
    <div class="contact-name-time">
    <span class="c-name">${names[i].toLowerCase()}</span>
    </div>
    <div class="contact-msg">
    <span class = "c-time">Today, </span>
    <span class="c-time">${Math.floor(Math.random() * (24 - 10)) + 10}:${Math.floor(Math.random() * (24 - 10)) + 10}</span>
    </div>
    </div>
    </div>
    `
        const contactImgActive = document.querySelectorAll(".c")
        contactImgActive.forEach(cImgA => {
            if (i <= 4) {
                cImgA.classList.add("active-status")
            }
        })
        if (i === 4) {
            newParaEl = document.createElement("p")
            newParaEl.classList.add("update-head")
            newParaEl.textContent = "Viwed Updates"
            statusSection.append(newParaEl)
        }
        statusSection.append(newStatusEl)
    }
}

// CALLS SECTION DIV CREATION

function crateCallDivs() {
    const icon_call_video = ['fa-phone', 'fa-video']
    const icon_clr = ['#059e2b', '#e42525']
    for (let i = 0; i < 15; i++) {

        let newIconRandNo = Math.floor(Math.random() * 2)

        let randNo = Math.floor(Math.random() * 1000)
        const newCallEl = document.createElement("div")
        newCallEl.innerHTML =
            `
        <div class="msg-div">
        <div class="contact-img">
        <img src="https://picsum.photos/200/300?random=${randNo}" alt="hello" class="c-img">
        </div>
        <div class="contact-name-msg-div">
        <div class="contact-name-time">
            <span class="c-name">${names[i].toLowerCase()}</span>
        </div>
        <div class="contact-msg">
                    <i class="fa fa-thin fa-arrow-left" style="color:${icon_clr[newIconRandNo]};"></i>
                    ${Math.floor(Math.random() * (31 - 1)) + 1} August, ${Math.floor(Math.random() * (24 - 10)) + 10}:${Math.floor(Math.random() * (24 - 10)) + 10}
        </div>
        </div>
        <div class="call-logo">
        <i class="fa-solid ${icon_call_video[newIconRandNo]}" style="color: rgb(5, 158, 43);"></i>
        </div>
        </div>
    `
        callsSection.append(newCallEl)
    }
}

// CREATION OF STATUS IMGS

function createStatusImg() {

    const newStatusImg = document.createElement("div")
    newStatusImg.classList.add("status-img")

    // const statusOwnerName = 

    newStatusImg.innerHTML = `
    <div class="head-section">
    <hr class="status-pro-back">
      <hr class="status-pro-front">
      <div class="status-head-sec">
      <i class="fa fa-thin fa-arrow-left" id="back-status-ico" style="color: #fff;"></i>
      
      <div class="status-info">
      <div class="contact-img">
      <img src="https://picsum.photos/500/400" alt="hello" class="c-img">
      </div>
      <div class="contact-name-msg-div">
      <div class="contact-name-time">
      <span class="c-name">New</span>
      </div>
      <div class="contact-msg">
      <span class = "c-time">Today, </span>
      <span class="c-time">${Math.floor(Math.random() * (24 - 10)) + 10}:${Math.floor(Math.random() * (24 - 10)) + 10}</span>
          </div>
          </div>
        </div>
  
        <i class="fa fa-light fa-ellipsis-vertical" style="color: #fff;"></i>
        </div>
        </div>
        
        <div class="main-status-img">
        <img src="/img/status img.avif" alt="">
        </div>
    `

    statusSection.append(newStatusImg)

}


crateMsgDivs()
crateStatusDivs()
crateCallDivs()
createStatusImg()


//  MAIN TAB TRAVEL
mainTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)

        mainTabs.forEach(tab => {
            tab.classList.remove("active")
        })
        tabsContent.forEach(tabCon => {
            tabCon.classList.remove('active-tab')
        })
        target.classList.add('active-tab')
        tab.classList.add("active")
    })
})

// NAV BAR SEARCH ICON
searchIcon.addEventListener('click', () => {
    searchBar.classList.add("dis-flex")
    logoDiv.classList.add("dis-none")
    document.querySelector("#input-box").focus()
    sNavbar.classList.add('dis-none')
})


// NAV ICON BACK BUTTON
backIcon.addEventListener('click', () => {
    searchBar.classList.remove("dis-flex")
    logoDiv.classList.remove("dis-none")
    sNavbar.classList.remove('dis-none')
})


menuIcon.addEventListener('click', () => {
    hiddenMenu.classList.remove('active-menu')
})

mainContent.addEventListener('click', () => {
    if (!hiddenMenu.classList.contains('active-menu')) {
        hiddenMenu.classList.add('active-menu')
    }
    // if (sNavbar.classList.contains('dis-none')) {
    //     logoDiv.classList.remove("dis-none")
    //     sNavbar.classList.remove('dis-none')
    //     searchBar.classList.add("dis-none")
    // }
})

const msgDiv = document.querySelectorAll("#status .msg-div")

let timeOut

msgDiv.forEach(msg => {
    msg.addEventListener('click', (e) => {
        const newImg = e.currentTarget.children[0].children[0].src

        const owner_name = e.currentTarget.children[1].children[0].textContent

        const owner_time = e.currentTarget.children[1].children[1].children[1].textContent


        const statusImg = document.querySelector('.status-img')

        statusImg.children[1].children[0].classList.add("status-img-dis")

        statusImg.children[1].children[0].src = newImg

        statusImg.children[0].children[2].children[1].children[1].children[0].children[0].textContent = owner_name
        statusImg.classList.add("status-img-active")

        statusImg.children[0].children[2].children[1].children[0].children[0].src = `https://picsum.photos/500/400?random=${Math.floor(Math.random() * 1000)}`

        statusImg.children[0].children[2].children[1].children[1].children[1].children[1].textContent = owner_time

        timeOut = setTimeout(() => {
            // statusProgressBarUpdate()
            statusImg.classList.remove("status-img-active")
        }, 5000)
    })
})

document.querySelector("#back-status-ico").addEventListener('click', () => {
    const statusImg = document.querySelector('.status-img')
    statusImg.classList.remove("status-img-active")
    clearTimeout(timeOut)
})



let idx = 0
function statusProgressBarUpdate() {
    const statusBar = document.querySelector(".status-pro-front")
    idx++;
    if (idx <= 5) {
        statusBar.style.width = `${i * 20}"%"`
    }
    // setTimeout(statusProgressBarUpdate, 1000)
}

