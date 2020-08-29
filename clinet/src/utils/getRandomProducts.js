/* Get n number of items from an array randomly */
const getRandomProducts = (arr, n) => {
  let len = arr.length;
  const result = new Array(n);
  const taken = new Array(len);

  while (n--) {
    let x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
};

export default getRandomProducts;
