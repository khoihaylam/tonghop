let a=Number(prompt("nhap a"))
let b=Number(prompt("nhap b"))
let c=Number(prompt("nhap c"))
max=a
if(b>max){
    max=b
}
if(c>max){
    max=c
}
console.log(max)
for(let i=3;i>0;i--){
    for(let j=i;j>0;j--){
        document.writeln('*')
    }
    document.writeln('<br>')
}