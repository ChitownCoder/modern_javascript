let re;
re = /hello/;

console.log(re);
console.log(re.source);

// exec() Return the result in an array of null
const result = re.exec("hello world");
