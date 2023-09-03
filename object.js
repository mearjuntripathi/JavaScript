// function update_value(name, age){
//     return {
//         name: name,
//         age: age
//     }
// }

// console.log(update_value("Arjun", 21));
// let user = update_value("Rahul",21);

// console.log(user.name);

// //copying
// let clone = {};

// for(let key in user)
//     clone[key] = user[key];

// clone.name = "Arjun";

// console.log(clone);
// console.log(user)

// // merging

// let permission1 = {canView : true};
// let permission2 = {canEdit : true};

// Object.assign(user, permission1, permission2);
// console.log(user);


let student = {};

console.log(student.name ? student.name.firstName : undefined);

console.log(student?.name?.firstName);


