const getTotalCost = (basket) => {
    let totalCost = 0

    for (let i = 0; i < basket.length; i++) {
        const cost = basket[i].price * basket[i].quantity
        totalCost += cost
    }
    return totalCost
}

module.exports = {
    getTotalCost
}