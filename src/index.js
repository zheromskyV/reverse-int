module.exports = function reverse (n) {
	if (n < 0) {
		n *= -1;
	}
	let str = n.toString();
	let res = str.split("").reverse().join("");
	return +res;
}
