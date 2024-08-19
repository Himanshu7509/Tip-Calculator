let BillAmount = document.getElementById("billAmount");
let TipAmount = document.getElementById("tipAmount");
let TotalAmount = document.getElementById("totalAmount");
let Message = document.getElementById("msg");

function checkAmount(){
  let bill = parseInt(BillAmount.value);
  let tip = parseInt(TipAmount.value);
  let total = bill + tip;
  TotalAmount.value = total;
  if(BillAmount.value === "" || TipAmount.value === ""){
    Message.textContent = "Please enter the number";
  }
  else{
    total;
    Message.textContent = "";
  }
  
}