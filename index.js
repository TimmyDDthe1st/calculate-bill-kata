function calculateBill(price, vat, tip) {
    let sum;
    if (!Number.isInteger(price) && !Number.isInteger(vat) && !Number.isInteger(tip)) {
        sum = "error";
    } else if (vat === undefined) {
        sum = "error"
    } else if (tip === null) {
        sum = "error"
    } else {
        sum = `£${price + vat + tip}`;
    }
    
    return sum;
}

module.exports = calculateBill;