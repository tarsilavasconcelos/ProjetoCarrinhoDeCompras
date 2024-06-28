import {
	addItemToCart,
	deleteItemCart,
	removeItens,
} from './services/cart.service.js';

const cart = {
	items: [],
	total: 0,
};

// Adicionar Itens ao carrinho
addItemToCart(15, 3, cart);
addItemToCart(16, 3, cart);
addItemToCart(13, 3, cart);
addItemToCart(11, 3, cart);

// Remover itens do carrinho
deleteItemCart(15, cart);

// Adicionar item ao carrinho
addItemToCart(19, 5, cart);

// Remover quantidade do item
removeItens(19, 2, cart);
