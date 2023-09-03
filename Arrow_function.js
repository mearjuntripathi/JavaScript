let ask = (age, yes, no) => {
    if(age > 18)
        yes();
    else no();
}

ask(
    20,
    () => {console.log("Allowed")},
    () => console.log("Not Allowed")
);