let user = {
    name : "arjun"
};

let id = Symbol("id");
user[id] = 1;
console.log(user);
