function calculateAiCost(tokensUsed) {
    // Write your code here.
    if (typeof tokensUsed === "number" && tokensUsed > 0) {
        if (tokensUsed <= 500) {
            return 0;
        } else {
            let extraToken = tokensUsed - 500;
            let extraTokenCost = Math.floor(extraToken / 100) * 5;
            return extraTokenCost;
        }        
    } else {
        return "Invalid";
    }

}
let result = calculateAiCost(300);
console.log(result);
result = calculateAiCost(500);
console.log(result);
result = calculateAiCost(650);
console.log(result);
result = calculateAiCost(1000);
console.log(result);
result = calculateAiCost(-20);
console.log(result);
result = calculateAiCost("10");
console.log(result);