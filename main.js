// class Student {
//     constructor (firstName,cRoom,iD){
//         this.firstName = firstName ;
//         this.cRoom = cRoom;
//         this.iD = iD;

//     }
// }
// const theStudent = new Student ("Abayneh" , "c12" , "23232323")
// const myStudent = new Student ("or" , "c14" , "4453453")
// console.log(theStudent,myStudent);

// class User {
//     constructor (firstName ,lastName , age , email) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age; 
//         this.email = email;
//     }
// }

// const firstUser = new User("abay" , "asaye" , "26" , "abay_43@gmail.com");
// const secondUser= new User("or" , "gedamo" , "23" , "or_333@gmail.com");
// const thirdUser= new User("batel" , "haiylo" , "24" ,"batel_232@gmail.com");
// let userArray = [firstUser,secondUser, thirdUser]
//  userArray.forEach(item=>{
//     for(let key in item){
// document.body.innerHTML += `<h1>${key}:${item[key]}</h1>`
//     }
    
//  })

//  function saveDetiles() {
//     const newUser = new User (
//     first_input.value,
//     last_input.value,
//     age_input.value,
//     email_input.value
//     );
//     console.log(newUser)

//     let newTable = document.createElement("table")
//     document.body.appendChild(newTable)
//     let tHead = document.createElement("thead")
//     document.body.appendChild(tHead)
//     let tBody = document.createElement("tbody")
//     document.body.appendChild(tBody)
//     let tableR = document.createElement("tr")
//     document.body.appendChild(tableR)
// for (key in newUser){
//     let tableH = document.createElement("th")
//     tableH.innerText += key + " ";
//     tHead.appendChild(tableH)
//     tableR.innerHTML += `<td>${newUser[key]}</td>` + " ";
// }

//  }

// class Dogs {
//     constructor (dogName , type , dathBirth){
//         this.dogName = dogName;
//         this.type = type;
//         this.dathBirth= dathBirth;
//     }
// }
 
// const dogsFirst = new Dogs("moli" , "bordercoli" , "23,12,2012");
// const dogssecond = new Dogs("sky" , "boodog" , "11,10,2016");
// const dogsthird = new Dogs("nebso" , "pitbol" , "28,11,2015");
// const dogsForth = new Dogs("shahaf" , "pincher" , "30,8,2013");
// const dogsFive = new Dogs("don" , "labrdor" , "14,9,2014");
// const dogsArray = [
//     dogsFirst,
//     dogssecond,
//     dogsthird,
//     dogsForth,
//     dogsFive
// ]
// dogsArray.forEach(item => {
//     console.log(item)
   
// })


// class Teacher {
//     constructor(firstName , lastName , cRoom , email){

//         this.firstName= firstName;
//         this.lastName= lastName;
//         this.cRoom= cRoom;
//         this.email= email;
//     }
// }

// let teachArray = [];
// function theFuncSave () {
//     let teacherOne = new Teacher(
//         first_input.value,
//         second_input.value,
//          therd_input.value, 
//          four_input.value
//         );
//     if (teachArray.length < 4) {
//         teachArray.push(teacherOne)
//    console.log(teachArray)



//     teachArray.forEach(item => {
        
//         let newTable = document.createElement("table")
//             document.body.appendChild(newTable)
//             let tHead = document.createElement("thead")
//             document.body.appendChild(tHead)
//             let tBody = document.createElement("tbody")
//             document.body.appendChild(tBody)
//             let tableR = document.createElement("tr")
//             document.body.appendChild(tableR)
         
//         for (let key in item) {
//                 let tableH = document.createElement("th")
//                     tableH.innerText +=key+ " ";
//                      tHead.appendChild(tableH)
//                     tableR.innerHTML += `<td>${item[key]}</td>` + " ";
           
//         }
//     }); 
// }       

// }

class Course {
    constructor (courseName , isTheacher , gradesList , stuList){
        this.courseName = courseName;
        this.isTheacher = isTheacher;
        this.gradesList = gradesList;
        this.stuList = stuList;
}

}
let mygraduList ;
let myStuArray;
const courseArray = []
const newCourse = new Course ("mali" ,
            true ,
            mygraduList = ["99", "100" , "98" , "95" ,"96"] ,
            myStuArray = ["daniel" , "ori" , "matan" , "stav" ,"amit"]
);

for (const key in newCourse) {
    document.body.innerHTML += `<h3>${key}:${newCourse[key]} </h3>`+ " ";
    mygraduList.sort((a,b)=> b-a)
    myStuArray.sort()
    if(Array.isArray(newCourse[key])){
        document.body.innerHTML +=`<ul>${key}</ul>`;
        newCourse[key].forEach(item => {
            document.body.innerHTML +=`<ul><li>${item}</li></ul>`;
            
        });
        
    }
    
}
// document.body.innerHTML +=`<ul>${newCourse[key][key]}</ul>`;

// mygraduList.forEach(item => {
//     document.body.innerHTML+= `<ul><li>${item}</li></ul>`;
// });
// myStuArray.forEach(item => {
//     document.body.innerHTML+= `<ul><li>${item}</li></ul>`;
// });
courseArray.push(newCourse)
console.log(courseArray)

// mygraduList = ["<ul><li>90</li><li>100</li><li>100</li><li>98</li><li>99</li><li>95</li></ul>"] ,
// myStuArray = ["<ul><li>danies</li><li>moshe</li><li>avi</li><li>shay</li><li>omer</li><li>natanel</li></ul>"]