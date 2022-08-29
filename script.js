
window.addEventListener("load", function() {
    var x = document.body.getElementsByClassName('grade');
    console.log(x)
    len = x.length
    for (var i =0; i<=len;  i++)
    {
        console.log("ttest")
        x[i].style.color= '#f00'; //#ff000042
    }
    });