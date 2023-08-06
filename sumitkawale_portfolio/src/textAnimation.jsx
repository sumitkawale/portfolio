import "./textAnimation.css"

function bounce(e) {
    let target = e.target;
    
    if (!target.classList.contains("animate")) {
        target.classList.add("animate");
        setTimeout((element) => {
            element.classList.remove("animate");
        }, 860, target);
    }
}

function setTextAnimation() {
    const elements = document.querySelectorAll(".animateText") //getting all element where animation going to be applied
    elements.forEach(element => { // iterating through elements one by one
        const letters = element.innerHTML.split("") // getting text from element
        element.innerHTML = "" // making empty
        let word = document.createElement("div") // each letters till space going to make a word
        letters.map((l, i) => { // iterating through each letters
            let span = document.createElement("span") // adding letter in span
            span.className = "animateLetter" // class
            span.addEventListener("mouseover", bounce)
            span.innerHTML = l === " " ? "&nbsp" : l // setting space to end of the word
            word.appendChild(span) // appending letters to word
            if (l === " ") { // checking.. if we get space then before space letters are word
                element.appendChild(word) // appending word to parent
                word = document.createElement("div") /// creating next word
            }
            if (i === letters.length - 1) { // at the end... we get no space. so last letters should be appended to word
                element.appendChild(word)
            }
            return "";
        })
    });
}

export { setTextAnimation, bounce }