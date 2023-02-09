class Courses{
    constructor(CourseName,Price,Validity,TrainerName,PhoneNumber){
        this.CourseName=CourseName
        this.Price=Price
        this.Validity=Validity
        this.TrainerName=TrainerName
        this.PhoneNumber=PhoneNumber
    }
    showDetails(CourseName,Price,Validity,TrainerName,PhoneNumber){
        console.log(`Thank you for showing interest in ${CourseName} - Current Price is  ${Price} and validity of course is till ${Validity} If you have any query then reach out to ${TrainerName} mobile - ${PhoneNumber}`)
    }
}
let javascript=new Courses()
javascript.showDetails("JavaScript","200","31-Dec-2024","Chinna","9090909090")
console.log("----------------------------------------------------------------------------------------------------")
let Cypress=new Courses()
Cypress.showDetails("Cypress","300","31-Dec-2025","Mukesh","9909090909")
console.log("----------------------------------------------------------------------------------------------------")
let ds=new Courses()
ds.showDetails("DS","500","31-Dec-2026","Krish","9090909099")