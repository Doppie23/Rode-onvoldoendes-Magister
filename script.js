$(function () {
    setTimeout(() => { 
        
    var x = document.body.getElementsByClassName("grade");
    console.log(x);
    len = x.length;
    console.log(len);
    let i = 0;
    for (i; i<=len; i++)
    {
        console.log(i);
        var cijfer = x[i].getAttribute('title');
        console.log(cijfer);
        let output = parseFloat(cijfer.replace(/,/g, ''), 2);
        console.log(output);
        if (output <= 55 && cijfer !== "") {
            console.log("onvoldeonde");
            x[i].classList.add("onvoldoende")
        }        
        else if (cijfer === ""){
            console.log("empty");
        }
        else{
            console.log("voldeonde");
        }
    } 


}, 2000);

});