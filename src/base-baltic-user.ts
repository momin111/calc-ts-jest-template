export class BaseBalticUser {
    name: string
    sureName: string
    age: number
    personalCode: number
    phone: string
    address: string

    constructor(name: string, sureName: string, age: number, personalCode: number, phone: string, address: string) {
        this.name = name;
        this.sureName = sureName;
        this.age = age;
        this.personalCode = personalCode;
        this.phone = phone;
        this.address = address;
    }
}