waitForElm('.last-grade').then((elm) => {
    // localStorage.setItem('laatste-cijfer', '6,5')
    
    var x = document.body.getElementsByClassName("cijfer");
    var cijfer = x[0].textContent;
    console.log(cijfer)
    
    var oudecijfer = localStorage.getItem('laatste-cijfer')
    console.log(oudecijfer)

    if (oudecijfer !== cijfer){
        alert('NIEUW CIJFER')
        var x = document.body.getElementsByClassName("cijfer");
        console.log(x)
        var cijfer = x[0].textContent;
        localStorage.setItem('laatste-cijfer', cijfer)
        console.log("cijferaanps" + cijfer)
        x[0].classList.add("spoiler");
        
        var x = document.body.getElementsByClassName("omschrijving");
        console.log(x)
        x[0].classList.add("spoiler");
    
        var x = document.body.getElementsByClassName("last-grade");
        console.log(x)
        x[0].classList.add("spoilerbg"); 
    }

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