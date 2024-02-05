// var arr = [1,2,-3,4,-56,6,-7]

// arr.forEach(function(val,index){
//     if(val>0){
//         arr.splice(index,1)
//     }
// })
// console.log(arr);


// 2nd tarika 
// var arr = [1,,2,3,-56,-58,-67,-8,-9,4,5,6,7]

// var count = 0;

// for (var index = 0; index < arr.length; index++) {
//    if (arr[index]<0) {
//     count++
//    }
    
// }
// for(var j=1; j<6; j++){
//     for (var index = 0; index < arr.length; index++) {
//         if(arr[index]<0){
//           arr.splice(index,1);
//           break;
//         }
          
//       }
// }

// 3 tarika ye array object pe he


var arr2 = [
    {name:"murtaza",age:"13",gender:"Male"},
    {name:"murtasim",age:"14",gender:"Male"},
    {name:"murtasima",age:"24",gender:"Female"},
    {name:"mursa",age:"16",gender:"Male"},
    {name:"murza",age:"3",gender:"Male"},
    {name:"murta",age:"2",gender:"Male"},
    {name:"mur",age:"5",gender:"Male"}

]
var kb = arr2.filter(function(val){
    return val.age>12
})
console.log(arr2);




