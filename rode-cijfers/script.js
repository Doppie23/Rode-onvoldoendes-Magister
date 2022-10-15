window.onload = function() {
    onvoldoendes();
  };

function onvoldoendes(){
    waitForElm('.grade').then((elm) => {
            
        var x = document.body.getElementsByClassName("grade");
        // console.log(x);
        len = x.length;
        // console.log(len);
        let i = 0;
        for (i; i<=len; i++)
        {
            // console.log(i);
            var cijfer = x[i].getAttribute('title');
            // console.log("cijfer"+cijfer);
            let output = parseFloat(cijfer.replace(/,/g, '.'), 2);
            // console.log("comma weg"+output);
            // console.log("class"+x[i].className)
            if (output < 5.5 && cijfer !== "" && output != 0) {
                // console.log("onvoldeonde");
                x[i].classList.add("onvoldoende");
            }        
            else if (cijfer === ""){
                // console.log("empty");
            }
            else{
                // console.log("voldeonde");
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

//laatste cijfers page
MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {
    const target = mutations[0].target
    if (target.matches('.loading-overlay')){
        console.log('klaar')
        if(window.location.hash === '#/cijfers'){
            var arr = document.body.getElementsByTagName('tr')
            for (let i = 1; i < arr.length; i++) {
                var row = arr[i].getElementsByTagName('td')
                var cijfer = row[3].textContent
                var output = parseFloat(cijfer.replace(/,/g, '.'), 2);
                if (output < 5.5){
                    row[3].style.color = "red"
                }
                
            }
        }
    };
});

observer.observe(document, {
  subtree: true,
  attributes: true
});

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {
    // console.log(mutations, observer)
    // console.log(mutations.length);
    if (mutations.length > 100){
        // console.log("pagina switch");
        onvoldoendes();
    }
});

observer.observe(document, {
  subtree: true,
  attributes: true
});