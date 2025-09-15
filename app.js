//Time Tracking Dashboard//App.js


const dailyBtn = document.querySelector(".dailyBtn")
dailyBtn.addEventListener("click",renderDaily)

const card = document.querySelectorAll(".card")

async function renderDaily() {

    try {
       const response = await fetch ("data.json")
    const dataFlow = await response.json()

   card.forEach((oneCard, index) => {
        const titleEl = oneCard.querySelector(".card-title")
    const currentEl = oneCard.querySelector(".card-current")
    const prevEl = oneCard.querySelector(".card-previous")

    const item = dataFlow[index]

    
    titleEl.textContent = item.title
   currentEl.textContent = item.timeframes.daily.current + "hrs"
prevEl.textContent = "Last Week - " + item.timeframes.daily.previous + "hrs"




   }) 
    } catch (error) {
        console.error(error)
    }
    
}

const weeklyBtn = document.querySelector(".weeklyBtn")
weeklyBtn.addEventListener("click",renderWeekly)

async function renderWeekly() {

    try {
       const response = await fetch("data.json")
     const dataFlow = await response.json()

card.forEach((oneCard, index) => {
      const titleEl = oneCard.querySelector(".card-title")
    const currentEl = oneCard.querySelector(".card-current")
    const prevEl = oneCard.querySelector(".card-previous")

    const item = dataFlow[index]

     titleEl.textContent = item.title
    currentEl.textContent = item.timeframes.weekly.current + "hrs"
    prevEl.textContent = "Last Week - " + item.timeframes.weekly.previous + "hrs"

})
 
    } catch (error) {
        console.error(error)
    }
    
}


const monthlyBtn = document.querySelector(".monthlyBtn")

monthlyBtn.addEventListener("click",renderMonthly)

async function renderMonthly() {
    try {
       const response = await fetch("data.json")
    const dataFlow = await response.json()
    card.forEach((oneCard,index) => {

       const titleEl = oneCard.querySelector(".card-title")
    const currentEl = oneCard.querySelector(".card-current")
    const prevEl = oneCard.querySelector(".card-previous")

    const item = dataFlow[index]

     titleEl.textContent = item.title
    currentEl.textContent = item.timeframes.monthly.current + "hrs"
    prevEl.textContent = "Last Week - " + item.timeframes.monthly.previous + "hrs" 


    }) 
    } catch (error) {
       console.error(error)
    }
}

//Gsap Animation//


gsap.fromTo(
  ".card, .profileCard", {

    opacity: 0,
   
  },{

    opacity:1,

    y:50,

    repeat:2,

    duration:1,

    yoyo:true,
    delay:0.5,

  stagger : {

    amount:1,

    from:"random",

  },

  ease : "power1.out", 

});