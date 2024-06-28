const calculateSubTotal = (item) => {
  const subtotal = item.quantity * item["preço"];
  return { ...item, subtotal: subtotal.toFixed(2) };
};

export default calculateSubTotal;
