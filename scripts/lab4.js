function sumValues(num1, num2, add) {
    if (add) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            return false;
        }
        let result = 0;
        result = num1 + num2;
        return result;
    } else {
        return false;
    }
}

function discountPrices(prices, discount) {
    if (!Array.isArray(prices) || typeof discount !== 'number') return false;
    if (prices.length === 0) return false;

    const discounted = [];
    for (let i = 0; i < prices.length; i++) {
        const discountedPrice = prices[i] * (1 - discount);
        discounted.push(discountedPrice);
    }

    return discounted;
}

module.exports = { sumValues, discountPrices };
