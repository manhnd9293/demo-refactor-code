class Employee {
    constructor(generalInformation, privateInformation) {
        this.generalInformation = generalInformation;
        this.privateInformation = privateInformation;
    }

}

class GeneralInformation {
    constructor(name, position, contractType) {
        this.name = name;
        this.position = position;
        this.contractType = contractType;

    }
}

class PrivateInformation {
    constructor(idNumber, gender, homeTown, address, telephoneNumber) {
        this.idNumber = idNumber;
        this.gender = gender;
        this.homeTown  = homeTown;
        this.address = address;
        this.telephone = telephoneNumber;
    }
}

const generalInformation = new GeneralInformation();
const privateInformation = new PrivateInformation();

const employee = new Employee(generalInformation, privateInformation);

