function dis(val){
    document.getElementById('mycalc').value += val;
}

function clr() {
    document.getElementById('mycalc').value = "";
}

function solve(){
    var x  = document.getElementById('mycalc').value ;
    var y = eval(x);
    document.getElementById('mycalc').value = y ;
}