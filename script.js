const timelineForAlan = document.getElementById("timelineList")
const alanTimeline = [ 
    {   
        "year": 1912,
        "description": "Born on June 23 in Maida Vale, London, England."
    }, {
        "year": 1931,
        "description": "He started studying as an undergraduate at King's College, Cambridge."
    }, {
        "year": 1934,
        "description": "He graduated from King's College and was awarded first-class honors in mathematics."
    }, {
        "year": 1954,
        "description": "He passed away on June 7 in Wilmslow, Chesire, England."
    }, {
        "year": 1952,
        "description": "He was prosecuted for homosexual acts. Instead of prison, he accepted hormone treatment commonly referred to as chemical castration."
    }, {
        "year": 1938,
        "description": "He obtained his Ph.D. at Princeton from the Department of Mathematics."
    }, {
        "year": 2009,
        "description": "British Prime Minister Gordon Brown made an official public apology for the way Alan was treated."
    }, {
        "year": 2013,
        "description": "Queen Elizabeth II granted a posthumous (award after death) pardon."
    }, {
        "year": 1938,
        "description": "Alan worked for the Government Code and Cypher School and found a technique to break the German cipher. This was essential to defeating the Germans during World War II."
    }, {
        "year": 1942,
        "description": "Alan found a way to decrypt the German ciphers."
    }
]    

function showAlan() {
    const whoIsAlan = document.getElementById("whoIsAlan")
    const alanButton = document.getElementById("alanButton")
    whoIsAlan.style.visibility = "visible"
    alanButton.remove()
}


function showContribution() {
    const whatContribution = document.getElementById("whatContribution")
    const contribution = document.getElementById("contributionButton")
    whatContribution.style.visibility = "visible"
    contribution.remove()
}

function renderTimeline() {
    for (i = 0; i < alanTimeline.length; i++) {
        const newYear = document.createElement("span")
        newYear.style.fontWeight = "bold"
        const newDescription = document.createElement("span")
        newDescription.style.margin = "20px"
        timelineList.appendChild(newYear)
        timelineList.appendChild(newDescription)
        newYear.innerHTML = alanTimeline[i].year + " "
        newDescription.innerHTML = alanTimeline[i].description + "<br>"
    }
}

alanTimeline.sort((itemOne, itemTwo) => itemOne.year - itemTwo.year)
renderTimeline()