// document.querySelector("#item").addEventListener("keypress", addItem)
// document.querySelector("#quantity").addEventListener("keypress", addItem)
document.querySelector("#submitButton").addEventListener("click", addItem)
document.querySelector("#undoButton").addEventListener("click", undoRemove)
let listSelector = document.querySelectorAll("li");

listSelector.forEach(function(elem) {
    elem.addEventListener("click", removeItem)
    }
)

let previousHidden = null
localStorage.setItem("totalHidden", 1)

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
    /*
    Simply hides the item that was clicked.
    */

    hiddenTotal = Number(localStorage.getItem("totalHidden"))
    e.target.setAttribute("class",`list-group-item lastHidden${localStorage.getItem("totalHidden")}`)

    e.target.setAttribute("hidden", true)

    localStorage.setItem("totalHidden", hiddenTotal += 1)



    console.log(previousHidden)
    }

    function undoRemove(){

        hiddenTotal = Number(localStorage.getItem("totalHidden")) - 1

        if (hiddenTotal >= 1){
            document.querySelector(`.lastHidden${hiddenTotal}`).removeAttribute('hidden')
            hiddenTotal = Number(localStorage.getItem("totalHidden"))
        }

    }