import {mean} from '../src/mean-array';

test("al resultado de 4.5 (6+3)/2", () =>{
    expect(mean([6,3])).toBe(4.5);
    });

    
test("al resultado de 1.5 (5+5)/2", () =>{
    expect(mean([5,5])).toBe(1.5);
    });