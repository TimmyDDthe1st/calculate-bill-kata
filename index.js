function calculateBill(price, vat, tip) {
    let sum = `£${price + vat + tip}`;
    if (!Number.isInteger(price) && !Number.isInteger(vat) && !Number.isInteger(tip)) {
        sum = "error";
    } else if (vat === undefined) {
        sum = "error"
    } else if (tip === null) {
        sum = "error"
    }
    
    return sum;
}

module.exports = calculateBill;