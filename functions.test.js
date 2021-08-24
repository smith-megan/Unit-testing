const {greeting, returnTwo, add, multiply, divide, subtract} = require("./functions.js")

test("return two should return integer 2",()=>{
  expect(returnTwo()).toEqual(2)
})

test("greeting should return {hello name}",()=>{
  expect(greeting("James")).toEqual("Hello, James.")
  expect(greeting("Jill")).toEqual("Hello, Jill.")
})
describe("math functions", ()=>{

  test("add should return two numbers summed", ()=>{
    expect(add(1,2)).toEqual(3)
    expect(add(5,9)).toEqual(14)
  })
  
  test("multiply should return two numbers *", ()=>{
    expect(multiply(1,2)).toEqual(2)
    expect(multiply(5,9)).toEqual(45)
  })
  
  test("divide should return two numbers /", ()=>{
    expect(divide(4,2)).toEqual(2)
    expect(divide(10,5)).toEqual(2)
  })
  
  test("subtract should return two numbers -", ()=>{
    expect(subtract(4,2)).toEqual(2)
    expect(subtract(10,5)).toEqual(5)
  })
  

})
