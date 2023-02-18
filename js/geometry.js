const tableContainer = document.getElementById("table-container");
let count = 0;

//create link to the answer file
document.getElementById("nav-btn").addEventListener("click", function () {

      window.location.href = "question.html";

})


function getCardName(parentNode) {
      let Name = parentNode.childNodes[1].innerText;
      return Name;

}


// get input value function 
function getCardInputvalue(parentNode, index1, index2) {
      let InputValue = parentNode.childNodes[index1].childNodes[index2].value;
      return InputValue;


}
function setCardInputvalue(parentNode, index1, index2) {
      parentNode.childNodes[index1].childNodes[index2].value = "";
}
// tr created by function 
function createTr(tr, count, Name, firstInput, secondInput, total) {
      tr.innerHTML = `
      ${count}. ${Name} ${total} cm<sup>2</sup>  <button class="btn btn-primary">convert to m <sup>2</sup></button> 
       `
      return tr;

}




// trianlge addeventLisiener
document.getElementById("triangle-btn").addEventListener("click", function (e) {
      let parentNode = e.target.parentNode.parentNode;

      let Name = getCardName(parentNode);

      let firstInput = parseFloat(getCardInputvalue(parentNode, 5, 1));
      let secondInput = parseFloat(getCardInputvalue(parentNode, 5, 3));
      let total = (0.5 * firstInput * secondInput).toFixed(2);
      if (isNaN(firstInput) || isNaN(secondInput) || firstInput <= 0 || secondInput <= 0) {
            alert("please enter the positive number");
            return;
      }
      else {

            count += 1;

            const h2 = document.createElement("h2");
            createTr(h2, count, Name, firstInput, secondInput, total);

            h2.classList.add("flex");
            h2.classList.add("gap-2");
            h2.classList.add("m-2");
            h2.classList.add("items-center");

            tableContainer.appendChild(h2);

            setCardInputvalue(parentNode, 5, 1)
            setCardInputvalue(parentNode, 5, 3)
      }
})

// rectangle addeventLitener 
document.getElementById("rectanlge-btn").addEventListener("click", function (e) {
      let parentNode = e.target.parentNode.parentNode;

      let Name = getCardName(parentNode);


      let firstInput = parseFloat(getCardInputvalue(parentNode, 5, 1));
      let secondInput = parseFloat(getCardInputvalue(parentNode, 5, 3));
      let total = (firstInput * secondInput).toFixed(2);
      if (isNaN(firstInput) || isNaN(secondInput) || firstInput <= 0 || secondInput <= 0) {
            alert("please enter the positive number");
            return;
      }
      else {

            count += 1;

            const h2 = document.createElement("h2");
            createTr(h2, count, Name, firstInput, secondInput, total);

            h2.classList.add("flex");
            h2.classList.add("gap-2");
            h2.classList.add("m-2");
            h2.classList.add("items-center");

            tableContainer.appendChild(h2);
            setCardInputvalue(parentNode, 5, 1)
            setCardInputvalue(parentNode, 5, 3)
      }
})



// parallelogram addeventLitener 




document.getElementById("parallelogram-btn").addEventListener("click", function (e) {
      let parentNode = e.target.parentNode.parentNode;

      let Name = getCardName(parentNode);

      let firstInput = parseFloat(getCardInputvalue(parentNode, 5, 1));
      let secondInput = parseFloat(getCardInputvalue(parentNode, 5, 3));
      let total = (firstInput * secondInput).toFixed(2);
      if (isNaN(firstInput) || isNaN(secondInput) || firstInput <= 0 || secondInput <= 0) {
            alert("please enter the positive number");
            return;
      }
      else {

            count += 1;

            const h2 = document.createElement("h2");
            createTr(h2, count, Name, firstInput, secondInput, total);

            h2.classList.add("flex");
            h2.classList.add("gap-2");
            h2.classList.add("m-2");
            h2.classList.add("items-center");

            tableContainer.appendChild(h2);
            setCardInputvalue(parentNode, 5, 1)
            setCardInputvalue(parentNode, 5, 3)
      }
})








// Rhombus addeventLitener 






document.getElementById("rhombus-btn").addEventListener("click", function (e) {
      let parentNode = e.target.parentNode.parentNode;

      let Name = getCardName(parentNode);


      let firstInput = parseFloat(getCardInputvalue(parentNode, 5, 1));
      let secondInput = parseFloat(getCardInputvalue(parentNode, 5, 3));
      let total = (0.5 * firstInput * secondInput).toFixed(2);
      if (isNaN(firstInput) || isNaN(secondInput) || firstInput <= 0 || secondInput <= 0) {
            alert("please enter the positive number");
            return;
      }
      else {

            count += 1;

            const h2 = document.createElement("h2");
            createTr(h2, count, Name, firstInput, secondInput, total);

            h2.classList.add("flex");
            h2.classList.add("gap-2");
            h2.classList.add("m-2");
            h2.classList.add("items-center");

            tableContainer.appendChild(h2);
            setCardInputvalue(parentNode, 5, 1)
            setCardInputvalue(parentNode, 5, 3)
      }
})










//Pantagon addeventLitener 






document.getElementById("pentagon-btn").addEventListener("click", function (e) {
      let parentNode = e.target.parentNode.parentNode;

      let Name = getCardName(parentNode);


      let firstInput = parseFloat(getCardInputvalue(parentNode, 5, 1));
      let secondInput = parseFloat(getCardInputvalue(parentNode, 5, 3));
      let total = (0.5 * firstInput * secondInput).toFixed(2);
      if (isNaN(firstInput) || isNaN(secondInput) || firstInput <= 0 || secondInput <= 0) {
            alert("please enter the positive number");
            return;
      }
      else {

            count += 1;

            const h2 = document.createElement("h2");
            createTr(h2, count, Name, firstInput, secondInput, total);

            h2.classList.add("flex");
            h2.classList.add("gap-2");
            h2.classList.add("m-2");
            h2.classList.add("items-center");

            tableContainer.appendChild(h2);
            setCardInputvalue(parentNode, 5, 1)
            setCardInputvalue(parentNode, 5, 3)
      }
})



//Ellipse addeventLitener 






document.getElementById("ellipse-btn").addEventListener("click", function (e) {
      let parentNode = e.target.parentNode.parentNode;

      let Name = getCardName(parentNode);


      let firstInput = parseFloat(getCardInputvalue(parentNode, 5, 1));
      let secondInput = parseFloat(getCardInputvalue(parentNode, 5, 3));
      let total = (3.14 * firstInput * secondInput).toFixed(2);
      if (isNaN(firstInput) || isNaN(secondInput) || firstInput <= 0 || secondInput <= 0) {
            alert("please enter the positive number");
            return;
      }
      else {

            count += 1;

            const tr = document.createElement("h2");

            createTr(tr, count, Name, firstInput, secondInput, total);


            const h2 = document.createElement("h2");
            createTr(h2, count, Name, firstInput, secondInput, total);
            
            h2.classList.add("flex");
            h2.classList.add("gap-2");
            h2.classList.add("m-2");
            h2.classList.add("items-center");

            tableContainer.appendChild(h2);
            setCardInputvalue(parentNode, 5, 1)
            setCardInputvalue(parentNode, 5, 3)
      }
})
document.que

randomColor = function (e) {
      e.style.background = "#" + (Math.random() * 0xFFFFFF << 0).toString(16);
}


