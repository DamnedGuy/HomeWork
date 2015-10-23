var a;

function onclickabc(){
    //var abc = document.getElementById('bttn');

    localStorage.setItem ('a', 1);
    change();
    /*abc.style.color ='#FFFFFF';
     abc.style.background ='#337ab7';*/

}
if (localStorage.getItem('a')){
    change();
}

function change(){
    var abc = document.getElementById('bttn');
    abc.style.color ='#FFFFFF';
    abc.style.background ='#337ab7';
}

function revert(){
    var abc = document.getElementById('bttn');
    abc.style.color ='#FFFFFF';
    abc.style.background ='#FFFFFF';
}
