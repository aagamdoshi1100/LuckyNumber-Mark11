var birthDay = document.querySelector("#birthday-date");
var LuckyNo = document.querySelector("#Lucky-Number");
var LuckyNoValidkar = document.querySelector("#validkar");
var checkButton = document.querySelector("#check");
var sum=0;
var ParaG=document.querySelector("#para");

checkButton.addEventListener("click", NegativeValueHandler);


function GetDateByUser(){
  ///  console.log(birthDay.value);
    var DOB = birthDay.value;
    var DOB = DOB.replaceAll("-","");

    console.log(typeof(DOB));

    for(i=0; i<DOB.length; i++){

        var StringToNumber =parseInt(DOB.charAt(i));
        console.log(StringToNumber);
        sum += StringToNumber;
        console.log(sum);
       // ParaG.innerText = sum;

    }
        Checker(sum,LuckyNo.value);
}

function Checker(a,b){
    if (a%b === 0){
        ParaG.style.color="Green";
        ParaG.style.display = "flex";
         ParaG.innerText = "Your birth date is lucky";

    }else{
      ParaG.style.color="Red";
      ParaG.style.display = "flex";
        ParaG.innerText = "Your birth date is not lucky";
    }
}


function NegativeValueHandler(){

  if(LuckyNo.value<=0){
    LuckyNoValidkar.style.color="Red";
    LuckyNoValidkar.style.display = "block";
    ParaG.style.display = "none";
    LuckyNoValidkar.innerText = "Please enter valid Lucky number. Value must be positive";
  }else{
    
    LuckyNoValidkar.style.display = "none";
    GetDateByUser();
  }

}