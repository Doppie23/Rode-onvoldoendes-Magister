
window.addEventListener("load", function() {
    var x = document.body.getElementsByClassName('grade');
    console.log(x)
    len = x.length
    for (var i=0; i<=len; i++)
    {
        console.log(x[i])
        x[i].classList.add("cijfer")
    }
    });