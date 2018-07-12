var MyConstants;
(function (MyConstants) {
    MyConstants[MyConstants["pi"] = 3.14] = "pi";
    MyConstants[MyConstants["e"] = 2.73] = "e";
    MyConstants[MyConstants["log2"] = 0.3] = "log2";
    MyConstants[MyConstants["log5"] = 0.7] = "log5";
})(MyConstants || (MyConstants = {}));
console.log("Circumference of circle:");
var radius = 10;
console.log(2 * MyConstants.pi * radius);
