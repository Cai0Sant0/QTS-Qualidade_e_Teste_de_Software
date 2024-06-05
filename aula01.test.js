let a = "Oi";
let b = "Ola";

    Deno.test("É oi",()=>{
        if(a != "Oi"){
            throw new Error('${a} não é oi')
        }
    })

    Deno.test("É ola",()=>{
        if(b != "Ola"){
            throw new Error('${a} não é ola')
        }
    })

