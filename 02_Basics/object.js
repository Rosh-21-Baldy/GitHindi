// literal way
// const Sym = Symbol("key1")

// const person ={
//     name :"jonWick",
//     [Sym]:"key1",
//     age :38,
//     gmail:"to@gmail.com",
//     loggedIn:true,
//     lastloggedIn:["sunday","friday"]
// }
// simple way to change or access the value
// person.gmail ="chori@gmail.com"
// cannot change the value of Object of using freeze method
// Object.freeze(person); 
// person.name ="wick";
// person.gmail ="djhshd@gmail";
// console.table(person);
// console.log(typeof(Sym));

///////////////////////////////
// here we are using constructor type which is Singleton not literal way

// const Instagram = Object(); 

// const obj ={                   
    
// };   

//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  
//  above both the method of object decleration are same.

// console.log(obj)
// console.log(Instagram)

// const items = new Object();
// items.name ="roshan";
// items.age =34;
// items .mens =89479;
// console.log(items);

/////////////////////////////////
// object under object and so on (nested structured)
// const person ={
//     phoneNumber:1234,
//     personName:{
//         personfirstName:"ron",
//         personlastName:"singh"
        
//      }

// }
//  console.log(person);

// const human ={
//     id:"aadharcard@gmail.com",
//     face:{
//     leg:"two",
//     hand:"two",
//     voice:{
//     canSpeak:"yes",
//     cantSpeak:"no",
//     gesture:{
//         perform:"yes",
//         cannotperform:"no"
//     }
//     }
//     }
    
//     }
//     console.log(human.id.face)

// const ob_1 ={
//     1:"hi",
//     2:"hlo",
//     3:"bye"
// }

// const ob_2 ={
//     21:"no",
//     22:"yes",
//     23:"never"
// }
// spread operator is best to add two variables easily.
//  const ob_3 ={...ob_1,...ob_2}
//  console.log(ob_3);

// just for reference jab database se value aaye then wo array of object ke form me aayegi .

// const user =[

//      {
//        id:"gdsj", 
//     }

//     {
//         name:"herababu",
//         age :22,
//     }

// ]
// console.log(Object.keys(ob_2))

// const course ={
//     coursename:"javascript",
//     courseTeacher:"hacker",
//     price:100
// }
// // course.price
// // console.log(course.price)
// const {courseTeacher:teacher} = course
// // const {price} = course
// console.log(teacher);

// const student ={
// name:"ron",
// roll_No :123,
// Class:"cse"

// }
// this is the best way 
// const{Class} =student
// const{roll_No:number} =student

// console.log(Class);
// console.log(number); 
//  here we call roll_No is as number which is possible to  call the roll_no. 


//  we call API with xml or JSON ,but xml is older one that's why we use JSON here.

// in JSON the key and value is in " " form always be remember

// {
// "name" :"ron",
// "age" :21,
// "gmail" :"djhgjg@gmail"

// }

// API can also be in array Form 
// [


//     {},
//     {},

// ]



 



