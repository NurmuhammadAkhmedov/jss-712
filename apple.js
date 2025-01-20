let str = prompt ("String typedagi malumot kiriting")
let num = +prompt ("Number typedagi malumot kiriting")
let boo = +prompt ("Boolean typedagi malumot kiriting")
let con = confirm("hamma malumotlarni to'g'ri kiritganizga ishonchingiz komilmi?")

alert(
    `
     Siz  ${str}  kiritgan sozi typega tegishli 
    Siz  ${num}  kiritgan sozi typega tegishli 
    Siz  ${boo} kiritgan sozi typega tegishli
    `
)