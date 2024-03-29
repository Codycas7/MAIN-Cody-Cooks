const acctNum = 0;
class Acct {
    constructor (uName, email, pWord) {
        this.uName = uName;
        this.email = email;
        this.pWord = pWord;
    }
}
let accts = [];

function createAccount () {
    const uName = document.getElementById("uName");
    const email = document.getElementById("createEmail");
    const pWord = document.getElementById("createPassword");

    if (uName.value.length == 0 || email.value.length == 0 || pWord.value.length == 0) {
        document.getElementById("createAcctBlankError").style.visibility="visible";
        document.getElementById("createAcctPasswordError").style.visibility="hidden";
    }
    else if (pWord.value.length < 8) {
        document.getElementById("createAcctPasswordError").style.visibility="visible";
        document.getElementById("createAcctBlankError").style.visibility="hidden";
    }
    else {
        document.getElementById("createAcctPasswordError").style.visibility="hidden";
        accts.push(new Acct (uName.value, email.value, pWord.value));
        console.log(accts);
    }
}

function switchPage () {
    
}