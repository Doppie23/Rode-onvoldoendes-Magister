MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {
    const target = mutations[0].target
    if (target.matches('.loading-overlay')){
        // console.log("klaar");
        if(window.location.hash === '#/elo/opdrachten'){

        var y = document.getElementsByTagName("tbody");
        y[0].setAttribute('id', 'tbodyID');

        var table = document.getElementById('tbodyID');
        var x = table.getElementsByTagName('tr');

        chrome.storage.sync.get(['Checked'], function(checked){
        const checkstatus = checked.Checked;
        // console.log(x)
        if(checkstatus === true){
            var i = 0
            for(var i=x.length - 1; i >= 0; i--){
                // console.log(x[i].classList.contains('overdue'));
                if(x[i].classList.contains('overdue') == true){
                    // console.log('rem' + x[i])
                    x[i].remove()
                    // x[i].style.visibility = 'hidden';
                }
                else{
                    continue
                }
            }
            // console.log("aan")
        }
        else{
            // console.log("uit")
        }
        });
        }
    };
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