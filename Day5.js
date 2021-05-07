// Detect if two integers have opposite signs

let compareIntegerSign = (num1, num2) => num1 > 0 && num2 > 0 || num1 < 0 && num2 < 0 ? 'SAME SIGN' : 'OPPOSITE SIGN'
let _compareIntegerSign = (num1, num2) => num1 === num2 ? 'SAME SIGN' : 'OPPOSITE SIGN'
