import{
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes
} from "https://deno.land/std/testing/asserts.ts"

let a = "Oi";
let b = "Ola";

    Deno.test("É oi",()=>{
       assertEquals(a, "Oi")
    })

    Deno.test("É ola",()=>{
       assertEquals(b, "Ola")
    })