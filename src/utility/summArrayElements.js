const summArrayElements = (arr) => {
    let x = 0;
    return arr.map(i => x += i, x).reverse()[0];
};
export default summArrayElements;