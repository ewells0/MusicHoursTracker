let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let totalEl = document.getElementById("total-el")
let count = 0
let total = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr

    total += count
    totalEl.textContent = "Total Hours: " + total;
    
    countEl.textContent = 0
    count = 0

    console.log(count)
}


//online debugging: mdm ... (for ex. innerText alternative mdm)

