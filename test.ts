import { assertEquals, assertThrows, assert } from "https://deno.land/std/testing/asserts.ts";

import { passwordGenerator } from "./mod.ts"

function match(reg: RegExp, string: string) {
    return reg.test(string);
}

Deno.test("password Generator should be function", function () {
    assertEquals(typeof passwordGenerator, "function");
});

Deno.test("password Generator should return a string", function () {
    assertEquals(typeof passwordGenerator('*', 10), "string");
});

Deno.test("password Generator length should be 10", function () {
    const password = passwordGenerator('*', 10)
    assertEquals(password.length, 10);
});

Deno.test('Should return Alphabetical, 5 character length:', function () {
    const password = passwordGenerator('A', 5);
    console.log(password);
    assertEquals(password.length, 5);
    assertEquals(match(/[A-Z]/, password),true);
});

Deno.test('Should return number only:', function () {
    const password = passwordGenerator('0', 5)
    assertEquals(password.length, 5);
    assertEquals(match(/[0-9]/, password),true);
});
Deno.test("should throw an error when undefines parameter is passed", function (): void {
    assertThrows((): void => {
        passwordGenerator(undefined);
    }, Error, "Password expects a string or number as a parameter");
});