function camelCase(cssProp) {
    return cssProp.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
}

function camelCaseElif(cssProp) {
    // Same logic as camelCase, just written with an if for clarity
    return cssProp.replace(/-([a-z])/g, function (match, char) {
        if (char) {
            return char.toUpperCase();
        }
        return '';
    });
}

function camelCaseAll(cssProps) {
    for (let i = 0; i < cssProps.length; i++) {
        cssProps[i] = camelCase(cssProps[i]);
    }
    return cssProps;
}
const props = ['margin-left', 'background-image', 'display', 'this-is-a-test'];


console.log(camelCase('props')) // marginLeft 
console.log(camelCase('background-image')) // backgroundImage 
console.log(camelCase('display')) // display 
console.log(camelCase('this-is-a-test')) // thisIsATest

console.log(camelCaseElif('margin-left')) // marginLeft 
console.log(camelCaseElif('background-image')) // backgroundImage 
console.log(camelCaseElif('display')) // display 
console.log(camelCaseElif('this-is-a-test')) // thisIsATest

console.log(camelCaseAll(props)) // marginLeft backgroundImage display thisIsATest