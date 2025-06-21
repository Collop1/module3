function camelCase(cssProp) {
    return cssProp
        .toLowerCase()
        .split('-')
        .map((word, index) =>
            index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join('');
}

function camelCaseElif(cssProp) {
    return cssProp
        .toLowerCase()
        .split('-')
        .map((word, index) => {
            if (index === 0) {
                return word;
            } else {
                return word.charAt(0).toUpperCase() + word.slice(1);
            }
        })
        .join('');
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