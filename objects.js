var person = {
    firstName : "Shea",
    lastName : "Maynard",
    email : "weirdalgurl@yahoo.com",
    phone : "606.339.5820",
    birthday : "June 4, 1987",
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
        
    };

function printDetails (p){
    console.log (p.firstName);
    console.log (p.lastName);
    console.log (p.email);
    console.log (p.phone);
    console.log (p.birthday);
    console.log (p.fullName());
}

printDetails (person);

console.log(person.fullName());