const add = (a,b) => a + b;
const Greeting = (name) => `Hello ${name}`
test('Should add two numbers', ()=> {
    const result = add(3,4);

    // if(result !== 7){
    //     throw new Error(`You have passed 3 and 4, filan result expected to be ${result}`)
    // }
});

test('Should say hello to me ', () => {
    const GreetMe = Greeting('Zaur');
    expect(GreetMe).toBe('Hello Zaur');
})