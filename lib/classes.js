module.exports = classes

class Employee {
    constructor(name, id, email){
        this.name = name
        this.id = id
        this.email = email
    }
    getName(){

    }
    getId(){

    }
    getEmail(){

    }
    getRole(){
        return Employee
    }
}

class Manager {
    constructor(name, id, email, officeNumber){
        this.name = name
        this.id = id
        this.email = email
        this.officeNumber = officeNumber
    }
    getName(){

    }
    getId(){

    }
    getEmail(){

    }
    getRole(){
        return Manager
    }
}

class Engineer {
    constructor(name, id, email, github){
        this.name = name
        this.id = id
        this.email = email
        this.github = github
    }
    getName(){

    }
    getId(){

    }
    getEmail(){

    }
    getGithub(){

    }
    getRole(){
        return Engineer
    }
}

class Intern {
    constructor(name, id, email, school){
        this.name = name
        this.id = id
        this.email = email
        this.school = school
    }
    getName(){

    }
    getId(){

    }
    getEmail(){

    }
    getSchool(){
        
    }
    getRole(){
        return Intern
    }
}