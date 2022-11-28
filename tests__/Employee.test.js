





•	name
•	id
•	email
•	getName()
•	getId()
•	getEmail()
•	getRole() // Returns 'Employee'


// -----------------Function Definitions--------------------
// Author: Immanuel Williams PhD 
// Date Created: 11/28/2022
// Date Modified: 11/28/2022
// Name: Employee (CLASS)
// Purpose: defines an employee
// Input: NA
// Output: NA
// Notes: NA
// -----------------Function Definitions--------------------
class Employee {
constructor(name, id, email){

    this.name = name; 
    this.id = id; 
    this.email = email;

}
// -----------------Function Definitions--------------------
// Author: Immanuel Williams PhD 
// Date Created: 11/28/2022
// Date Modified: 11/28/2022
// Name: getName
// Purpose: gets name from user
// Input: NA
// Output: NA
// Notes: It should be stored into localStorage
// -----------------Function Definitions--------------------
getName(){

}

// -----------------Function Definitions--------------------
// Author: Immanuel Williams PhD 
// Date Created: 11/28/2022
// Date Modified: 11/28/2022
// Name: getId
// Purpose: gets id from user
// Input: NA
// Output: NA
// Notes: It should be stored into localStorage
// -----------------Function Definitions--------------------
getId(){

}
// -----------------Function Definitions--------------------
// Author: Immanuel Williams PhD 
// Date Created: 11/28/2022
// Date Modified: 11/28/2022
// Name: getEmail
// Purpose: gets email from user
// Input: NA
// Output: NA
// Notes: It should be stored into localStorage
// -----------------Function Definitions--------------------
getEmail(){

}
// -----------------Function Definitions--------------------
// Author: Immanuel Williams PhD 
// Date Created: 11/28/2022
// Date Modified: 11/28/2022
// Name: getRole
// Purpose: gets role from user
// Input: NA
// Output: NA
// Notes: It should be stored into localStorage
// -----------------Function Definitions--------------------
getRole(){

    return 'Employee'
}
}

module.exports = Employee;