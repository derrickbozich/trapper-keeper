vinyl = Item.create(name: 'Nostalgia For Infinity', price: 25, wholesale_price: 8, style:'color')
vinyl2 = Item.create(name: 'The Twin', price: 25, wholesale_price: 8, style:'black')
cart = Cart.create(date: Date.today.to_s, payment_method: 'cash')
cart2 = Cart.create(date: Date.today.to_s, payment_method: 'credit')
cart.items << vinyl
cart.items << vinyl2
cart2.items << vinyl
cart2.items << vinyl2
