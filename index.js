"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const menu = [
    { id: RandomId(), name: "Margarita", price: 100 },
    { id: RandomId(), name: "Achar do Pyas", price: 150 },
    { id: RandomId(), name: "Pasta Pizza", price: 239 },
    { id: RandomId(), name: "Veg Loaded", price: 335 },
    { id: RandomId(), name: "Golden Corn", price: 250 },
];
let cashInRegister = 100;
const orderQue = [];
function RandomId() {
    return Math.floor(Math.random() * 100) + 1;
}
function addNewPizza(newPizza) {
    const newItem = {
        id: RandomId(),
        ...newPizza
    };
    menu.push(newItem);
}
function placeOrder(pizza) {
    const [item] = menu.filter((item) => item.name == pizza);
    if (item) {
        cashInRegister = cashInRegister + item.price;
        let newOrder = { id: RandomId(), pizza: item.name, status: "ordered" };
        orderQue.push(newOrder);
        console.log(cashInRegister);
        return newOrder;
    }
    else {
        console.log("item could not be found");
        return undefined;
    }
}
function completeOrder(id) {
    const item = orderQue.find((item) => item.id == id);
    if (item) {
        item.status = "completed";
        return item;
    }
    else {
        console.log("Item Not Found");
        return undefined;
    }
}
function getPizzaDetails(identifier) {
    let findPizza = orderQue.find(item => item.id == identifier || item.pizza == identifier);
    if (!findPizza) {
        console.log("Could not find the detail about the order");
        return undefined;
    }
    return findPizza;
}
addNewPizza({ name: "Chicken with Keema Pizza", price: 542 });
addNewPizza({ name: "Cheese Dominator", price: 242 });
const order = placeOrder("Cheese Dominator");
if (order) {
    const { id } = order;
    console.log(completeOrder(id));
}
const anotherOrder = placeOrder("Chicken with Keema Pizza");
if (anotherOrder) {
    const { id } = anotherOrder;
    console.log(getPizzaDetails(id));
}
console.log("MENU");
console.log(menu);
console.log(`CASH IN REGISTER ${cashInRegister}`);
// type Address={
//   state:string
//   country:string
// }
// type Person={
//   name:string
//   address?:Address
// }
// let data:Person={name:"asdasd"}
//# sourceMappingURL=index.js.map