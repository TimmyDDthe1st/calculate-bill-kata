function calculateBill(price, vat, tip) {
    if (isNaN(parseFloat(price)) || isNaN(parseFloat(vat)) || isNaN(parseFloat(tip))) {
        return "error";
    } 
    
    return `£${round((price + vat + tip).toFixed(2))}`;
}

const round = num => num.slice(-3) === '.00' ? parseFloat(num) : num

module.exports = calculateBill;