function removeElement(array, item) {
    const arrayRemove = [1, 2, 3, 4, 5, 6, 7];
    arrayRemove.splice(array, item);
    console.log(arrayRemove);
// Результат: [1, 2, 3, 4, 6, 7]
}

removeElement(4, 1);
removeElement(5, 2);
removeElement(1, 1);



function removeElementSecondVersion(item) {
    const array = [1, 2, 3, 4, 5, 6, 7];
    const filteredArray = array.filter((number) => number != item);
    console.log(filteredArray);
}

removeElementSecondVersion(5);