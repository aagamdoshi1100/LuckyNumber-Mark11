var birthDay = document.querySelector("#birthday-date");
var LuckyNo = document.querySelector("#Lucky-Number");
var checkButton = document.querySelector("#check");
var sum=0;
var ParaG=document.querySelector("#para");

checkButton.addEventListener("click", function GetDateByUser(){
  ///  console.log(birthDay.value);
    var DOB = birthDay.value;
    var DOB = DOB.replaceAll("-","");

  //  console.log(DOB);

    for(i=0; i<DOB.length; i++){

        var StringToNumber =parseInt(DOB.charAt(i));
      //  console.log(StringToNumber);
        sum += StringToNumber;
        ParaG.innerText = sum;

    }
        Checker(sum,LuckyNo.value);
});

function Checker(a,b){
    if (a%b === 0){
         ParaG.innerText = "Your birth date is lucky";

    }else{
        ParaG.innerText = "Your birth date is not lucky";
    }
}