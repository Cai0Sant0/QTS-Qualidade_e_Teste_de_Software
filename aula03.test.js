import{
    assertEquals
} from "https://deno.land/std/testing/asserts.ts"

    Deno.test("hello world x=3",()=>{
        const x = 1+2;
        assertEquals(x, 3)
    })