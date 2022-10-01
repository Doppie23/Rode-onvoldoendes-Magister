function spoiler(){    
    waitForElm('.last-grade').then((elm) => {
        // localStorage.setItem('laatste-cijfer', '6,5')
        
        
        var x = document.body.getElementsByClassName("cijfer");
        console.log(x)
        x[0].classList.add("spoiler");
        
        // var x = document.body.getElementsByClassName("omschrijving");
        // console.log(x)
        // x[0].classList.add("spoiler");

        var x = document.body.getElementsByClassName("last-grade");
        console.log(x)
        x[0].classList.add("spoilerbg"); 
        
    });
};

window.onload = function() {
    spoiler();
  };

window.onhashchange = function() {
    spoiler();
};

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