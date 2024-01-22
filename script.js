var data=document.getElementById('form')

function display(x){
  data.value += x;
}

function clr(){
    data.value="";
}

function calculate(){
    try{
        data.value=eval(data.value);
    }
    catch(err){
        alert("invalid input")
    }
}

function del(){
    data.value=data.value.slice(0,-1);
}
