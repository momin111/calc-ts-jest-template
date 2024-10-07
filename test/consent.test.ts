import {User} from "../src/user";
import {Processor} from "../src/processor";

describe('Test for consent', () =>{
    let user:User
    let processor: Processor
    beforeEach(() => {
        user = new User("Jack", "Donald",17, "+3723343535", "Tallinn")
        processor = new Processor()
    })
    test("Initially have undefined consent", () => {
        expect(user.consentGiven).toBeUndefined()
    })
    test("Processor can give consent to user", () => {
        processor.giveConsent(user)
        expect(user.consentGiven).toBe(true)
    })


    test("Verify fail consent when it is not given", () => {
        expect(processor.checkConsent(user)).toBe(false)
    })
})