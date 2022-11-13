//MENU
const btnOpen = document.querySelector(".btnOpen")
const btnClose = document.querySelector(".btnClose")
const navMenu = document.querySelector(".navMenu")
const containerMenu = document.querySelector(".containerMenu")
const btnImgClose = document.querySelector(".btnImgClose")
const hero = document.querySelector(".hero")
const liMenu = document.querySelectorAll(".liMenu")

btnOpen.addEventListener("click", () =>{
    btnOpen.style="display:none;"
    btnClose.style="display:block;"
    navMenu.style="display:block;"
    containerMenu.style="align-items:flex-start"
    btnImgClose.style="width:23px;"
    hero.style="padding-top: 180px;"
})

btnClose.addEventListener("click", () =>{
    btnOpen.style="display:block;"
    btnClose.style="display:none;"
    navMenu.style="display:none;"
    containerMenu.style="align-items:center;"
    hero.style="padding-top:140px;"
})

for (let i = 0; i < liMenu.length; i++) {
liMenu[i].addEventListener("click", () => {
    btnOpen.style="display:block;"
    btnClose.style="display:none;"
    navMenu.style="display:none;"
    containerMenu.style="align-items:center;"
    hero.style="padding-top:140px;"
})}


//---------------------------------------------//

const btnFighter = document.querySelector(".btnFighter")
const btnAssassin = document.querySelector(".btnAssassin")
const btnMage = document.querySelector(".btnMage")
const btnMarksman = document.querySelector(".btnMarksman")
const btnSupport = document.querySelector(".btnSupport")
const btnTank = document.querySelector(".btnTank")

const fighter = document.querySelector(".fighter")
const assassin = document.querySelector(".assassin")
const mage = document.querySelector(".mage")
const marksman = document.querySelector(".marksman")
const support = document.querySelector(".support")
const tank = document.querySelector(".tank")

btnFighter.addEventListener("click", () => {
    fighter.style = "display:block;"
    assassin.style = "display:none;"
    mage.style = "display:none;"
    marksman.style = "display:none;"
    support.style = "display:none;"
    tank.style = "display:none;"
})

btnAssassin.addEventListener("click", () => {
    fighter.style = "display:none;"
    assassin.style = "display:block;"
    mage.style = "display:none;"
    marksman.style = "display:none;"
    support.style = "display:none;"
    tank.style = "display:none;"
})

btnMage.addEventListener("click", () => {
    fighter.style = "display:none;"
    assassin.style = "display:none;"
    mage.style = "display:block;"
    marksman.style = "display:none;"
    support.style = "display:none;"
    tank.style = "display:none;"
})

btnMarksman.addEventListener("click", () => {
    fighter.style = "display:none;"
    assassin.style = "display:none;"
    mage.style = "display:none;"
    marksman.style = "display:block;"
    support.style = "display:none;"
    tank.style = "display:none;"
})

btnSupport.addEventListener("click", () => {
    fighter.style = "display:none;"
    assassin.style = "display:none;"
    mage.style = "display:none;"
    marksman.style = "display:none;"
    support.style = "display:block;"
    tank.style = "display:none;"
})

btnTank.addEventListener("click", () => {
    fighter.style = "display:none;"
    assassin.style = "display:none;"
    mage.style = "display:none;"
    marksman.style = "display:none;"
    support.style = "display:none;"
    tank.style = "display:block;"
})

// CARD COMBATTENTI

fetch("https://unpkg.com/lol-champions@10.23.1/champions.json")
.then((res) => res.json())
.then((res) => res.filter((res) => res.tags[0] === "Fighter" || res.tags[1] === "Fighter").map((res) => {
    createCardFighter(res);
}))
.catch((e) => console.log("Errore sulle cards Combattenti -> " + e))
.finally(console.log("Cards Combattenti generate correttamente"));

const divFighter = document.createElement("div")
divFighter.className = "divFighter";

fighter.append(divFighter)

const createCardFighter = (res) => { 
    const cardEl = document.createElement("div"); 
    cardEl.className = "cardFighter";
    
    const titleEl = document.createElement("span"); 
    titleEl.textContent = res.name; 
    const imgEl = document.createElement("img"); 
    imgEl.setAttribute("src", res.icon);
    imgEl.setAttribute("alt", res.name);  
    
    cardEl.append(titleEl, imgEl);
    divFighter.appendChild(cardEl);
};

// CARD ASSASSINI

fetch("https://unpkg.com/lol-champions@10.23.1/champions.json")
.then((res) => res.json())
.then((res) => res.filter((res) => res.tags[0] === "Assassin" || res.tags[1] === "Assassin").map((res) => {
    createCardAssassin(res);
}))
.catch((e) => console.log("Errore sulle cards Assassini -> " + e))
.finally(console.log("Cards Assassini generate correttamente"));

const divAssassin = document.createElement("div")
divAssassin.className = "divAssassin";

assassin.append(divAssassin)

const createCardAssassin = (res) => { 
    const cardEl = document.createElement("div"); 
    cardEl.className = "cardAssassin";
    
    const titleEl = document.createElement("span"); 
    titleEl.textContent = res.name; 
    const imgEl = document.createElement("img"); 
    imgEl.setAttribute("src", res.icon); 
    
    cardEl.append(titleEl, imgEl);
    divAssassin.appendChild(cardEl);
};

// CARD MAGHI

fetch("https://unpkg.com/lol-champions@10.23.1/champions.json")
.then((res) => res.json())
.then((res) => res.filter((res) => res.tags[0] === "Mage" || res.tags[1] === "Mage").map((res) => {
    createCardMage(res);
}))
.catch((e) => console.log("Errore sulle cards Mage -> " + e))
.finally(console.log("Cards Mage generate correttamente"));

const divMage = document.createElement("div")
divMage.className = "divMage";

mage.append(divMage)

const createCardMage = (res) => { 
    const cardEl = document.createElement("div"); 
    cardEl.className = "cardMage";
    
    const titleEl = document.createElement("span"); 
    titleEl.textContent = res.name; 
    const imgEl = document.createElement("img"); 
    imgEl.setAttribute("src", res.icon); 
    
    cardEl.append(titleEl, imgEl);
    divMage.appendChild(cardEl);
};

// CARD TIRATORI

fetch("https://unpkg.com/lol-champions@10.23.1/champions.json")
.then((res) => res.json())
.then((res) => res.filter((res) => res.tags[0] === "Marksman" || res.tags[1] === "Marksman").map((res) => {
    createCardMarksman(res);
}))
.catch((e) => console.log("Errore sulle cards Tiratori -> " + e))
.finally(console.log("Cards Tiratori generate correttamente"));

const divMarksman = document.createElement("div")
divMarksman.className = "divMarksman";

marksman.append(divMarksman)

const createCardMarksman = (res) => { 
    const cardEl = document.createElement("div"); 
    cardEl.className = "cardMarksman";
    
    const titleEl = document.createElement("span"); 
    titleEl.textContent = res.name; 
    const imgEl = document.createElement("img"); 
    imgEl.setAttribute("src", res.icon); 
    
    cardEl.append(titleEl, imgEl);
    divMarksman.appendChild(cardEl);
};

// CARD SUPPORT

fetch("https://unpkg.com/lol-champions@10.23.1/champions.json")
.then((res) => res.json())
.then((res) => res.filter((res) => res.tags[0] === "Support" || res.tags[1] === "Support").map((res) => {
    createCardSupport(res);
}))
.catch((e) => console.log("Errore sulle cards Support -> " + e))
.finally(console.log("Cards Support generate correttamente"));

const divSupport = document.createElement("div")
divSupport.className = "divSupport";

support.append(divSupport)

const createCardSupport = (res) => { 
    const cardEl = document.createElement("div"); 
    cardEl.className = "cardSupport";
    
    const titleEl = document.createElement("span"); 
    titleEl.textContent = res.name; 
    const imgEl = document.createElement("img"); 
    imgEl.setAttribute("src", res.icon); 
    
    cardEl.append(titleEl, imgEl);
    divSupport.appendChild(cardEl);
};

// CARD TANK

fetch("https://unpkg.com/lol-champions@10.23.1/champions.json")
.then((res) => res.json())
.then((res) => res.filter((res) => res.tags[0] === "Tank" || res.tags[1] === "Tank").map((res) => {
    createCardTank(res);
}))
.catch((e) => console.log("Errore sulle cards Tank -> " + e))
.finally(console.log("Cards Tank generate correttamente"));

const divTank = document.createElement("div")
divTank.className = "divTank";

tank.append(divTank)

const createCardTank = (res) => { 
    const cardEl = document.createElement("div"); 
    cardEl.className = "cardTank";
    
    const titleEl = document.createElement("span"); 
    titleEl.textContent = res.name; 
    const imgEl = document.createElement("img"); 
    imgEl.setAttribute("src", res.icon); 
    
    cardEl.append(titleEl, imgEl);
    divTank.appendChild(cardEl);
};