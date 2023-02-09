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

    set courseName(value) {
        this._courseName = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get validity() {
        return this._validity;
    }

    set validity(value) {
        this._validity = value;
    }

    get trainerName() {
        return this._trainerName;
    }

    set trainerName(value) {
        this._trainerName = value;
    }

    get phoneNumber() {
        return this._phoneNumber;
    }

    set phoneNumber(value) {
        this._phoneNumber = value;
    }

    showDetails() {
        return `Thank you for showing interest in ${this.courseName} - Current Price is ${this.price} and validity of course is till ${this.validity}. If you have any query then reach out to ${this.trainerName} mobile - ${this.phoneNumber}`;
    }
}

let NameOfTheCourse = new Course("JavaScript","200","31-Dec-2024","Chinna","9090909090");

console.log(NameOfTheCourse.showDetails());

NameOfTheCourse.courseName = "Advanced JavaScript";
NameOfTheCourse.price = "400";
NameOfTheCourse.validity = "31st December 2025";
NameOfTheCourse.trainerName = "Mukesh";
NameOfTheCourse.phoneNumber = "1232343456";
console.log("-------------------------------------------------");
console.log(NameOfTheCourse.showDetails());
