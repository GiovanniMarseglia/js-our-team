const persone = [
    {
        nome: "Wayne",
        cognome: "Barnett",
        professione: "Founder & CEO",
        immagine: "wayne-barnett-founder-ceo.jpg",
    },
    {
        nome: "Angela",
        cognome: "Caroll",
        professione: "Chief Editor",
        immagine: "angela-caroll-chief-editor.jpg",
    },
    {
        nome: "Walter",
        cognome: "Gordon",
        professione: "Office Manager",
        immagine: "walter-gordon-office-manager.jpg",
    },
    {
        nome: "Angela",
        cognome: "Lopez",
        professione: "Social Media Manager",
        immagine: "angela-lopez-social-media-manager.jpg",
    },
    {
        nome: "Scott",
        cognome: "Estrada",
        professione: "Developer",
        immagine: "scott-estrada-developer.jpg",
    },
    {
        nome: "Barbara",
        cognome: "Ramos",
        professione: "Graphic Designer",
        immagine: "barbara-ramos-graphic-designer.jpg",
    }
]



for(let i=0;i<6;i++){
    const divHTML= document.createElement("div")
    const infoHTML= document.createElement("div")
    const figureHTML= document.createElement("figure")
    document.getElementsByTagName("main")[0].append(divHTML)
    divHTML.classList.add("primo")
    divHTML.append(infoHTML)
    infoHTML.classList.add("secondo")
    infoHTML.innerHTML +=`nome: ${persone[i].nome} <br> cognome: ${persone[i].cognome}<br> professione: ${persone[i].professione}`
    divHTML.append(figureHTML)
    const img = document.createElement("img")
    figureHTML.append(img)
    img.setAttribute("src", `./img/${persone[i].immagine}`)
    console.log(persone[i].nome,persone[i].cognome,persone[i].professione,persone[i].immagine)
    
}
