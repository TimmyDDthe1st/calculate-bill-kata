function calculateBill(price, vat, tip) {
    let propertyIsInteger;

    if (!Number.isInteger(price) && !Number.isInteger(vat) && !Number.isInteger(tip) || vat === undefined || tip === null) {
        propertyIsInteger = false;
    } else {
        propertyIsInteger = true;
    }

    return propertyIsInteger ? `£${price + vat + tip}` : "error";
}

module.exports = calculateBill;