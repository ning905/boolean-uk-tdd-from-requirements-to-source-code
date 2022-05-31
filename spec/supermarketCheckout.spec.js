const Shop = require('../src/supermarketCheckout.js')

describe('Supermarket Checkout', () => {
    it('returns 0 if the quantity is 0', () => {
        // setup
        const shop = new Shop()
        const basket = [{ name: 'apple', price: 1, quantity: 0 }, { name: 'orange', price: 2, quantity: 0 }]
        // execute
        const totalCost = shop.getTotalCost(basket)
        // verify
        expect(totalCost).toEqual(0)
    })

    it('returns 4 if the quantity of apple is 2, and orange 1', () => {
        // setup
        const shop = new Shop()
        const basket = [{ name: 'apple', price: 1, quantity: 2 }, { name: 'orange', price: 2, quantity: 1 }]
        // execute
        const totalCost = shop.getTotalCost(basket)
        // verify
        expect(totalCost).toEqual(4)
    })

    it('gets the receipt for empty basket', () => {
        // setup
        const shop = new Shop()
        const basket = [{ name: 'apple', price: 1, quantity: 0 }, { name: 'orange', price: 2, quantity: 0 }]
        const expected = 'No items found'
        // execute
        const result = shop.createReceipt(basket)
        // verify
        expect(result).toEqual(expected)
    })


    it('gets the receipt for 2 apples and 1 orange', () => {
        // setup
        const shop = new Shop()
        const basket = [{ name: 'apple', price: 1, quantity: 2 }, { name: 'orange', price: 2, quantity: 1 }]
        const expected = [{ name: 'apple', price: 1, quantity: 2 }, { name: 'orange', price: 2, quantity: 1 }, 'Total cost: 4']
        // execute
        const result = shop.createReceipt(basket)
        // verify
        expect(result).toEqual(expected)
    })
})
