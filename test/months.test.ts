import {monthsUnac} from "../src/months-unac";

test ("conts array contains feb", () => {
    expect (monthsUnac()).toContain ("feb");
});

test ("conts array contains March", () => {
    expect (monthsUnac()).toContain ("March");
});


test ("conts array contains Oct", () => {
    expect (monthsUnac()).toContain ("octubre");
});

test ("conts array contains Nov", () => {
    expect (monthsUnac()).toContain ("diciembre");
});