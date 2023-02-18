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
// tr created by function 
function createTr(tr, count, Name, firstInput, secondInput, total) {
      tr.innerHTML = `
      <td>${count} .</td>
                                       <td>${Name}</td>
                                       <td>${total} cm<sup>2</sup></td>
                                       <td><button class="btn btn-primary">Convert to m<sup>2</sup></button></td>
      
      
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

            const tr = document.createElement("tr");
            createTr(tr, count, Name, firstInput, secondInput, total);

            tr.classList.add("mb-4");
            tableContainer.appendChild(tr);
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

            const tr = document.createElement("tr");
            createTr(tr, count, Name, firstInput, secondInput, total);
            
            tr.classList.add("mb-4");
            tableContainer.appendChild(tr);
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

            const tr = document.createElement("tr");
            createTr(tr, count, Name, firstInput, secondInput, total);
            tr.classList.add("mb-4");
           
            tableContainer.appendChild(tr);
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

            const tr = document.createElement("tr");
            createTr(tr, count, Name, firstInput, secondInput, total);
            tr.classList.add("mb-4");
            

            tableContainer.appendChild(tr);
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

            const tr = document.createElement("tr");
            createTr(tr, count, Name, firstInput, secondInput, total);
            tr.classList.add("mb-4");
           

            tableContainer.appendChild(tr);
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

            const tr = document.createElement("tr");

            createTr(tr, count, Name, firstInput, secondInput, total);

            
            tr.classList.add("mb-2");
            tr.classList.add("overflow-scroll");

            tableContainer.appendChild(tr);
      }
})
document.que

randomColor = function (e) {
      e.style.background = "#" + (Math.random() * 0xFFFFFF << 0).toString(16);
}


