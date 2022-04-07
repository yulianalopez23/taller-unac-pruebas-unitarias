import {mean} from '../src/mean-array';

test("al resultado de 4.5 (6+3)/2", () =>{
    expect(mean([6,3])).toBe(4.5);
    });