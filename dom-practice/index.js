document.getElementById("create-btn").onclick = function(){
    const my_div = document.getElementById("super-div");

    const newProd = document.createElement("div");

    const prodName = document.getElementById("new-prod-name").value; 
    const prodPrice = document.getElementById("new-prod-price").value; 

    newProd.innerHTML = `
        <span>${prodName}</span>
        <span>${prodPrice}</span>
    `

    my_div.appendChild(newProd);
}


