import { assertArrayIncludes } from "https://deno.land/std@0.224.0/assert/mod.ts";


console.log("ex01:");
Deno.test("Teste 1 tem", () => {
    assertArrayIncludes([6,8], [6]);
});

console.log("ex02");
Deno.test(" Teste 2 tem", () => {
    assertArrayIncludes([6,8], [2]);
});
