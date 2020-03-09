function calculateBill(price, vat, tip) {
    if (Number.isInteger(price) && Number.isInteger(vat) && Number.isInteger(tip)) {
        return `£${price + vat + tip}`;
    } else {
        return "error";
    }
}

module.exports = calculateBill;