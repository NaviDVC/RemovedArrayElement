function removeElement(array, item) {
    const filteredArray = array.filter((number) => number != item);
    console.log(filteredArray);
}

const array = [1, 2, 3, 4, 5, 6, 7];

removeElement(array, 5);