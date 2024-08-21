module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 > 0) return false;
    
    const openBrackets = [];
    const stack = [];
    const bracketsPairs = {};

    bracketsConfig.forEach(bracket => {
        openBrackets .push(bracket[0]);
        bracketsPairs[bracket[1]] = bracket[0];
    })

    for (let i = 0; i < str.length; i++) {
        let currentSymbol = str[i];

        if (openBrackets .includes(currentSymbol)) {
            if (bracketsPairs[currentSymbol] == stack[stack.length - 1] && stack.length != 0)
                stack.pop();
            else
                stack.push(currentSymbol);
        } else {
            if (stack.length == 0) 
                return false;

            if (bracketsPairs[currentSymbol] == stack[stack.length - 1])
                stack.pop();
            else
                return false;
        }
    }

    return stack.length == 0;
}
