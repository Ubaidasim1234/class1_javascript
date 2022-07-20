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
let s1 = new stud("ubaid", 345 , 20 , "first");
console.log(s1);

class std extends stud{
    constructor(name , id , age, semester,fees){
        super(name , id , age, semester)
        this.fees = fees;
    }
    showdetails(){
        console.log(`
        name: ${this.name}
        id: ${this.std_id}
        age: ${this.std_age}
        sem: ${this.sem}
        Fees: ${this.fees}
         `)}

    }
    let std1 = new std("ubaid", 345 , 20 , "first",555);
    // console.log(std)
    std1.showdetails();

