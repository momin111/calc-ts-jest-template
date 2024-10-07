import {BaseBalticUser} from "./base-baltic-user";

export class UserEstonia extends BaseBalticUser{
    mobileIDAuthorization: undefined | boolean

    constructor(name: string, sureName: string, age: number, personalCode: number, phone: string, address: string) {
        super(name, sureName, age, personalCode, phone, address);
        this.mobileIDAuthorization = undefined;
    }
}