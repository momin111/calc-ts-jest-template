import { MathOperations } from '../src/math-operations'

describe('MathOperations Class testing', () => {
  let mathOps: MathOperations

  // Runs before each test, creating a new instance of MathOperations
  beforeEach(() => {
    mathOps = new MathOperations()
    console.log("executed before test")
  })
  afterEach( ()=>{
        console.log("executed after test")
  })
  test('should add two positive numbers correctly', () => {
    expect(mathOps.add(2, 3)).toBe(5)
  })

  test('should add a negative and positive number correctly', () => {
    expect(mathOps.add(-3, 3)).toBe(0)
  })

})
