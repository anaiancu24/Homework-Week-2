//1) JS file should exist, and exported value should be a constructor
//2) should be able to add items
//3) should be able to clear items
//4) should total up the value of items

const items = [];
module.exports = class ShoppingCart {
    constructor() {

    }

    getItems() {
        return items;
    }
    addItem(itemName, quantity, price) {
        const item = {
            name: "",
            quantity: 0,
            pricePerUnit: 0
        }
        item.name = itemName;
        item.quantity = quantity;
        item.pricePerUnit = price;

        this.getItems().push(item);
        return this.getItems()
    }
    clear() {
        const numberOfItems = this.getItems().length;
        this.getItems().splice(0, numberOfItems)
        return this.getItems()
    }
    total() {
        let sum = 0;
        if (this.getItems().length === 0) {return sum}
        else {
        const sumItem = this.getItems().map(x => x.quantity * x.pricePerUnit)
       sum = sumItem.reduce((acc, cur) => acc+cur)
        return sum; }
    }

}



