import { assertStringIncludes } from "https://deno.land/std@0.224.0/assert/mod.ts";


console.log("Teste 1:");
Deno.test("Teste de String", ()=>{
    assertStringIncludes("hello word", "word");
});

console.log("Teste 2:");
Deno.test("Teste de String", ()=>{
    assertStringIncludes("hello word", "jiji");
});
