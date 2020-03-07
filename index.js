function calculateBill(price, vat, tip) {
    sum = `£${price + vat + tip}`;
    return sum.toString();
}

module.exports = calculateBill;