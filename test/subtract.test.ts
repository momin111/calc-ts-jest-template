import {subtraction} from "../src/calculator";

test("Subtract: from bigger integers to smaller integer", ()=>{
    expect(subtraction(9, 7)).toBe(5)
    }
)

test("Subtract: from smaller integers to bigger integer", ()=>{
        expect(subtraction(9, 17)).toBe(-8)
    }
)

test("Subtract: from positive integers to negative integer", ()=>{
        expect(subtraction(9, -7)).toBe(16)
    }
)