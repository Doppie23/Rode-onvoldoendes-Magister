waitForElm('.last-grade').then((elm) => {
    var x = document.body.getElementsByClassName("cijfer");
    console.log(x)
    x[0].classList.add("spoiler");
}),



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