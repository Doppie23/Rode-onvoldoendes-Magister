window.onload = function() {
    onvoldoendes();
  };


function onvoldoendes(){
    waitForElm('.grade').then((elm) => {
            
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


    });
}



function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {
    // fired when a mutation occurs
    // console.log(mutations, observer);
    // ...
    console.log(mutations.length);
    if (mutations.length > 750){
        console.log("pagina switch");
        onvoldoendes();
    }
});

// define what element should be observed by the observer
// and what types of mutations trigger the callback
observer.observe(document, {
  subtree: true,
  attributes: true
  //...
});