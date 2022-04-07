import { crazy } from '../src/crazy-method';

test("Test resultado = 4 + number1 = 3 ", () =>{
    //probar
    expect(crazy(4,3)).toBe(10);
});

test("Test resultado = 2 + number1 = 2 ", () =>{
    //probar
    expect(crazy(0,2)).toBe(5);
});