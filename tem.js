var checkC = document.getElementById("checkC");
var checkF = document.getElementById("checkF");
var temC = document.getElementById("transferC").value;
var temF = document.getElementById("transferF").value;

//-----------攝氏轉華氏（失敗）------------//
//-----------只會console單一數字------------//
// const total = () => {
//    var c = temC*1.8+32;
//    document.getElementById('transferF').innerHTML = c;
//    console.log(c);
// }
// checkC.addEventListener("click", total);



//-----------華氏轉攝氏（失敗）------------//
//-----------只會console單一數字------------//
// function tranF(a){
//     a = temF;
//     var b = (a - 32) * 1.8;
//     console.log(b+"C");
//     temC.innerText = b;
//  }
// checkF.addEventListener("click", tranF);



//----------------可運行------------------//
// function tranF(a){
//     var b = (a - 32) * 1.8;
//     console.log(b+"C");
//  }


//----------可運行(但用變數就失敗？）-------------//
function transF(){
    a = (document.getElementById('transferF').value);
    document.getElementById('transferC').value = (5/9)*(a-32);
}
checkF.addEventListener("click", transF);

function transC(){
    a = (document.getElementById('transferC').value);
    document.getElementById('transferF').value = (a*(9/5))+32;
}
checkC.addEventListener("click", transC);