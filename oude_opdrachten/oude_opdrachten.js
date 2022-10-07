MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {
    // console.log(mutations);
    // console.log(mutations.length);
    // console.log(mutations[0].target);
    const target = mutations[0].target
    if (target.matches('.loading-overlay')){
        console.log("klaar");

        var y = document.getElementsByTagName("tbody");
        // console.log(y);
        y[0].setAttribute('id', 'tbodyID');




        var table = document.getElementById('tbodyID');
        const x = table.getElementsByTagName('tr')
        
        console.log(x);
        console.log(x[0]);

        var i = 0
        for(var i=x.length - 1; i >= 0; i--){
            var naam = x[i].className
            console.log(naam)
            console.log(x[i].classList.contains('overdue'));
            if(x[i].classList.contains('overdue') === true){
                console.log('rem' + x[i])
                x[i].remove()
            }
            else{
                continue
            }
        }

    }
});

observer.observe(document, {
  subtree: true,
  attributes: true
});

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