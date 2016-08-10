export const module = (name) => {
	let prodName = name + ' - result';
	
	return prodName;
}

export const setPrice = (key, price) => {
	let count = 0;
	count++;
	
	return count > 0 ? {key: key, price: price} : {};
}