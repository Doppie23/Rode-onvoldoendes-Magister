waitForElm('.overdue').then((elm) => {
    console.log('Element is ready');
    console.log(elm.textContent);

    var x = document.body.getElementsByClassName("overdue");
    len = x.length;
    console.log(len)
    let i = 0;
    for (i; i<=len; i++){
        console.log(x[i])
        x[i].remove();
    }
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


// dataAvailable=true