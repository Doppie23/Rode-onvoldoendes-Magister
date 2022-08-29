
window.addEventListener("load", function() {
    var x = document.body.getElementsByClassName('grade');
    console.log(x)
    for (var i =0,len = x.length; i<len;i++)
    {
        x[i].style['color']= 'red';
    }
    });