const ftoc = function(faren) {
	let cels = (faren - 32) * (5 / 9);
	let rounded = Math.round( cels * 10 ) / 10;
	return rounded
}

const ctof = function(cels) {
	let faren = cels * (9 / 5) + 32
	let rounded = Math.round( faren * 10 ) /10;
	return rounded
}

module.exports = {
  ftoc,
  ctof
}
