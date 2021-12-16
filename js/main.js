let elForm = document.querySelector('.form');
let elInputFName = document.querySelector('.input-fname');
let elInputLName = document.querySelector('.input-lname');
let elInputEmail = document.querySelector('.input-email');
let elInputPass = document.querySelector('.input-pass');
let elInputPassCheck = document.querySelector('.input-pass-check');
let elSubmitBtn = document.querySelector('.submit-btn');
let elInputs = document.querySelectorAll('.input');
for(let item of elInputs){
  item.addEventListener('blur',()=>{
    checkInp();
  })
  elSubmitBtn.addEventListener('click',(e)=>{
    if(checkInp() == false){
      e.preventDefault();
      checkInp();
    }
  })
  function checkInp(){
    let itemLabel = item.parentElement.querySelector('.label');
    if(item.value.length == 0){
      itemLabel.textContent = "Please fill this area";
      itemLabel.classList.remove("alert");
      itemLabel.classList.add("alert");
      return false;
    }
    else if(item.value.length >= 5){
      itemLabel.textContent = "";
      itemLabel.classList.remove("alert");
      return true;}
    if(item.classList.contains('input-pass')){
      if(elInputPassCheck.value == elInputPass.value){
        itemLabel.textContent = "";
        itemLabel.classList.remove("alert");
        return true;
      }else if(elInputPassCheck.value !== elInputPass.value || elInputPassCheck.value !== "" || elInputPass.value !== ""){
        itemLabel.textContent = "Please fill this area";
        itemLabel.classList.remove("alert");
        itemLabel.classList.add("alert");
        return false;
      }
    }
  }
}