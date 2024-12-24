let btn = document.getElementById("addBtn");
btn.addEventListener("click",addFood);
function addFood(e){
    let currBtn = e.currentTarget;
    console.log(currBtn);
    let currInput = currBtn.previousElementSibling;
    console.log(currInput.value);
    let currFoodName = currInput.value
    console.log(currFoodName);

    let newElem =document.createElement("li");
    newElem.className ="list-group-item d-flex justify-content-between mt-2";
    newElem.innerHTML=`
                         <h2 class="flex-grow-1">${currFoodName}</h2>
                        <button class="btn btn-success">Read</button>
                        <button class="btn btn-danger mx-2"onclick="removeFood(this)">Delete</button>
    `
    let parentList = document.getElementById("parentList");
    parentList.appendChild(newElem)

    console.log(newElem);
    
}
function removeFood (newElem){
    newElem.parentElement.remove()
}

