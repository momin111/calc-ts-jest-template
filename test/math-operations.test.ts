import { MathOperations } from '../src/math-operations'

describe('MathOperations Class testing', () => {
  let mathOps: MathOperations

  test('should add two numbers correctly', () => {
    mathOps = new MathOperations()
    expect(mathOps.add(2, 3)).toBe(5)
  })

  test('should add two numbers correctly', () => {
    mathOps = new MathOperations()
    expect(mathOps.add(-3, 3)).toBe(0)
  })
  test("should square root a  number correctly", ()=> {
    mathOps = new MathOperations()
    expect(mathOps.squareRoot(9)).toBe(3)
  })

  test("should square root a negative number correctly", ()=> {
    mathOps = new MathOperations()
    expect(mathOps.squareRoot(-16)).toBeNaN()
  })

})
