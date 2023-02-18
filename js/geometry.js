const tableContainer = document.getElementById("table-container");
let count = 0 ;
document.getElementById("nav-btn").addEventListener("click",function(){
     //get console.log(1);
      window.location.href="question.html";

})


function getCardName(parentNode) {
      let Name = parentNode.childNodes[1].innerText ;
      return Name;

}

function getCardInputvalue(parentNode,index1,index2) {
      let InputValue = parentNode.childNodes[index1].childNodes[index2].value;
      return InputValue;


}
// tr created by function 

document.getElementById("triangle-btn").addEventListener("click",function(e){
      let parentNode = e.target.parentNode.parentNode;
     
      let Name =getCardName(parentNode);
      
      let firstInput =parseFloat(getCardInputvalue(parentNode,5,1));
      let secondInput = parseFloat(getCardInputvalue(parentNode,5,3));
      let total = (0.5 * firstInput * secondInput).toFixed(2) ;
      if(isNaN(firstInput) || isNaN(secondInput) || firstInput <= 0 || secondInput <= 0 ){
            alert("please enter the positive number");
            return ;
      }
      else{

            count+=1;

   const tr=document.createElement("tr");
   //createTr(tr,count, Name,firstInput,secondInput,total);
 
      console.log(tr);

      tableContainer.appendChild(tr);
      }
})
































//  document.getElementById("background").addEventListener("mous",function(){
     
         
//     setBackgroundColor();
          
          
//  })
//  const getRandomNumber = (maxNum) => {
//       return Math.floor(Math.random() * maxNum);
//     };
//  const getRandomColor = () => {
//       const h = getRandomNumber(360);
//       const s = getRandomNumber(100);
//       const l = getRandomNumber(100);
//       return `hsl(${h}deg, ${s}%, ${l}%)`;
//     };
   
//     setInterval(() => {
//       setBackgroundColor();
//     }, 1500);
    
//     const setBackgroundColor = () => {
//       const randomColor = getRandomColor();
//       background.style.backgroundColor = randomColor;
//       background.style.color = randomColor;
//     };