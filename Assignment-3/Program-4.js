class Course {
    constructor(courseName, price, validity, trainerName, phoneNumber) {
        this._courseName = courseName;
        this._price = price;
        this._validity = validity;
        this._trainerName = trainerName;
        this._phoneNumber = phoneNumber;
    }

    get courseName() {
        return this._courseName;
    }

    get price() {
        return this._price;
    }

    get validity() {
        return this._validity;
    }

    get trainerName() {
        return this._trainerName;
    }

    get phoneNumber() {
        return this._phoneNumber;
    }

    showDetails() {
        return `Thank you for showing interest in ${this.courseName} - Current Price is ${this.price} and validity of course is till ${this.validity}. If you have any query then reach out to ${this.trainerName} mobile - ${this.phoneNumber}`;
    }
}

export let javascript = new Course("JavaScript","200","31-Dec-2024","Chinna","9090909090");
export let Cypress = new Course("Cypress","300","31-Dec-2025","Mukesh","9909090909");
export let ds = new Course("DS","500","31-Dec-2026","Krish","9090909099");

console.log(javascript.showDetails());
console.log("-----------------------------------------------------------------------------------------------")
console.log(Cypress.showDetails());
console.log("-----------------------------------------------------------------------------------------------")
console.log(ds.showDetails());
