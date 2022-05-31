class Shop {
    constructor() {
        this.totalCost = 0
    }

    getTotalCost(basket) {
        for (let i = 0; i < basket.length; i++) {
            const cost = basket[i].price * basket[i].quantity
            this.totalCost += cost
        }
        return this.totalCost
    }

    createReceipt(basket) {
        const basketTotalCost = this.getTotalCost(basket)
        if (basketTotalCost === 0) {
            return 'No items found'
        }
        const receipt = [...basket, 'Total cost: ' + basketTotalCost]
        return receipt
    }
}

module.exports = Shop