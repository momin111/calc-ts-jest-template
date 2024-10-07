import {UserEstonia} from "../src/user-estonia";
import {KycVerification} from "./kyc-vevification";
import {UserLatvia} from "../src/user-latvia";

describe('Estonia: Test for kyc verification for Estonian citizens', () =>{
    let user:UserEstonia
    let kyc: KycVerification
    beforeEach(() => {
        user = new UserEstonia("Momin", "Reja", 36, 23456783, "+372597488", "tallinn")
        kyc = new KycVerification()
    })
    test("Estonia: verify mobile is authorization is undefined", () => {
        expect(user.mobileIDAuthorization).toBeUndefined()
    })

    test("Estonia: pass kyc authorization if age is greater than or equals to 16 years old", () => {
        kyc.activateMobileIDForEstonia(user)
        expect(user.mobileIDAuthorization).toBe(true)
    })
    test("Estonia: Verify that attempting to activate Mobile ID for a user younger than 16 throws an error", () => {
        user.age = 14
        expect(() => {
            kyc.activateMobileIDForEstonia(user);
        }).toThrow('User is too young')
    })

})

describe('Latvia: Test for kyc verification for Latvian citizens', () =>{
    let user:UserLatvia
    let kyc: KycVerification
    beforeEach(() => {
        user = new UserLatvia("Eric", "Jhonson", 18, 23456783, "+372597488", "Riga")
        kyc = new KycVerification()
    })
    test("Latvia: verify mobile is authorization is undefined", () => {
        expect(user.activateEParakstsForLatvia).toBeUndefined()
    })

    test("Latvia: pass kyc authorization if age is greater than or equals to 18 years old", () => {
        kyc.activateEParakstsForLatvia(user)
        expect(user.activateEParakstsForLatvia).toBe(true)
    })
    test("Latvia: Verify that attempting to activate EParaksts for a user younger than 18 throws an error", () => {
        user.age = 14
        expect(() => {
            kyc.activateEParakstsForLatvia(user);
        }).toThrow('User is very young')
    })
})