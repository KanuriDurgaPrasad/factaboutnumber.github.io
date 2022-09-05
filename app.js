let userInput = document.getElementById("userInput");
let fact = document.getElementById("fact");
let spinner = document.getElementById("spinner");

function updateVal(factVal) {
    fact.textContent = factVal;
}

function requestFact(event) {
    if (event.key === "Enter") {
        spinner.classList.toggle("d-none");
        if (userInput.value === "") {
            alert("enter a number");
        } else {
            let userVal = userInput.value;
            let url = "https://apis.ccbp.in/numbers-fact?number=" + userVal;
            console.log(url);

            let options = {
                method: "GET"
            };

            fetch(url, options)
                .then(function(response) {
                    return response.json();
                })
                .then(function(jsonData) {
                    spinner.classList.toggle("d-none");
                    let {
                        fact
                    } = jsonData;
                    updateVal(fact);
                });
        }
    }
}

userInput.addEventListener("keydown", requestFact);