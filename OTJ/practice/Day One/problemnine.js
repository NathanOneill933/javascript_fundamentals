let str = "I like programming!";

const cutstring = () => {
    let strtwo = str.substring(0 , 18) + str.slice(19)
    console.log(strtwo);
}

cutstring();