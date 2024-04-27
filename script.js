// document.querySelector("#item").addEventListener("keypress", addItem)
// document.querySelector("#quantity").addEventListener("keypress", addItem)
document.querySelector("#category").addEventListener("change", addItem)


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
        document.querySelector(`#${category}`).innerHTML += `<li class='list-group-item'>${item} ${quantity}</li>`
    }
    console.log(item, quantity, category)

    return item, quantity, category
}
