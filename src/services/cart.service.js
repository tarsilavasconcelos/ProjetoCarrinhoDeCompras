import { items } from '../utils/items.js';
import calculateSubTotal from './item.service.js';

const addItemToCart = (id, quantity, cart) => {
	const item = items.find((item) => item.id === id);

	if (!item) {
		throw Error('Product not found!');
	}

	const itemWSubTotal = calculateSubTotal({ ...item, quantity });

	cart.items.push(itemWSubTotal);

	const cartTotal = cart.items.reduce((acc, item) => {
		return acc + Number(item.subtotal);
	}, 0);

	cart.total = cartTotal.toFixed(2);

	console.log(`Produto adicionado ao carrinho: `, item);

	console.log('\n', cart);
};

const deleteItemCart = (id, cart) => {
	const item = cart.items.find((item) => item.id === id);

	if (!item) {
		throw Error('Product not found!');
	}

	cart.items.pop(item);
	console.log(`Produto deletado do carrinho: `, item);
};

const removeItens = (id, quantity, cart) => {
	const item = cart.items.find((item) => item.id === id);

	if (!item) {
		throw Error(`Product not found!`);
	}

	if (quantity > item.quantity) {
		throw Error(`Quantidade inválida `);
	}

	const newItem = { ...item, quantity: item.quantity - quantity };

	cart.items.pop(item);
	cart.items.push(newItem);

	console.log(`Quantidade alterada!`, newItem);
};

export { addItemToCart, deleteItemCart, removeItens };
