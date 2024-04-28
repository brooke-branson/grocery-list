// document.querySelector("#item").addEventListener("keypress", addItem)
// document.querySelector("#quantity").addEventListener("keypress", addItem)
document.querySelector("#category").addEventListener("input", addItem)

let listSelector = document.querySelectorAll("li");

listSelector.forEach(function(elem) {
    elem.addEventListener("click", removeItem)
    }
)

function addItem(e){

    /*
    Listens for the final click on the category box, then adds the items and quantity
    to the desired list category.
    */
    let item = document.querySelector("#item").value
    let quantity = document.querySelector("#quantity").value
    let category = document.querySelector("#category").value

    let addToList = null

    if (item == ""){
        alert("Item missing, please add an item name")
        addToList = false
    }

    if (quantity == ""){
        alert("Missing quantity, add an amount.")
        addToList = false
    }

    if (item && quantity){

        document.querySelector(`#${category}`).previousElementSibling.removeAttribute("hidden")
        document.querySelector(`#${category}`).innerHTML += `<li class='list-group-item'>${item} ${quantity}</li>`
        document.querySelector(`#${category}`).lastElementChild.addEventListener('click', removeItem)
        
    }
    console.log(item, quantity, category)

    return item, quantity, category
}

function removeItem(e){
    prompt("This has happened")
    e.target.setAttribute("hidden", true)
    }