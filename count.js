// let n = 5;
// for(let i = 1; i<n; i++){
//     console.log("Hello,",i);
// }
// console.log("Bye")

let args = console.log(process.argv);
for(let i=2;i<args.length;i++){
    console.log("Hello to ",args[i]);
}