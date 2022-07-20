class stud{
    constructor(name , id , age, semester){
         this.name = name;
         this.std_id = id;
         this.std_age = age;
         this.sem = semester;
    }
    showdetails(){
        console.log(`
        name: ${this.name}
        std_id: ${this.id}
        std_age: ${this.age}
        sem: ${this.semester}
         `)}
}
let std = new stud("ubaid", 345 , 20 , "first");
console.log(stud);