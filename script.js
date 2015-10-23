
var a;

function onclickabc(){
    //var abc = document.getElementById('bttn');
    
    localStorage.setItem ('a', 1);
    change();
    /*abc.style.color ='#FFFFFF';
     abc.style.background ='#337ab7';*/

}

function change(){
    var abc = document.getElementById('bttn');
    if (a = 1) {
    abc.style.color ='#FFFFFF';
    abc.style.background ='#337ab7';
} else {
    abc.style.color='#FFFFFF';
    abc.style.background ='#FFFFFF';
}

if (localStorage.getItem('a')) {
    change();
}
