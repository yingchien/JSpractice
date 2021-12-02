var checkC = document.getElementById("checkC");
var checkF = document.getElementById("checkF");
var temC = document.getElementById("transferC");
var temF = document.getElementById("transferF");


function tem(a, temperature){
    if(temperature==="C"){
        return (a*(9/5))+32;
    }else if(temperature==="F"){
        return (5/9)*(a-32);
    }
}


const handleKeydown =(e,temperature,idName)=>{
    console.log(e);
    if(e.keyCode===13){
        const value = e.target.value;
        const renderEle = document.getElementById(idName)
        renderEle.value = tem(value,temperature)
    }
}

temC.addEventListener('keydown',(e)=>{handleKeydown(e,'C','transferF')})
temF.addEventListener('keydown',(e)=>{handleKeydown(e,'F','transferC')})

