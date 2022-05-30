const { getTotalCost } = require('../src/supermarketCheckout.js')

describe('Supermarket Checkout', () => {
    it('returns 0 if the quantity is 0', () => {
        // setup
        const basket = [{ name: 'apple', price: 1, quantity: 0 }, { name: 'orange', price: 2, quantity: 0 }]
        // execute
        const totalCost = getTotalCost(basket)
        // verify
        expect(totalCost).toEqual(0)
    })

    it('returns 4 if the quantity of apple is 2, and orange 1', () => {
        // setup
        const basket = [{ name: 'apple', price: 1, quantity: 2 }, { name: 'orange', price: 2, quantity: 1 }]
        // execute
        const totalCost = getTotalCost(basket)
        // verify
        expect(totalCost).toEqual(4)
    })
})
