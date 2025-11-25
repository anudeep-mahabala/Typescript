type Order = {
  id: number;
  pizza: string;
  status: "ordered" | "completed";
};

type Pizza = {
  name: string;
  price: number;
};

const menu:Pizza[] = [
  { name: "Margarita", price: 100 },
  { name: "Achar do Pyas", price: 150 },
  { name: "Pasta Pizza", price: 239 },
  { name: "Veg Loaded", price: 335 },
  { name: "Golden Corn", price: 250 },
];

let cashInRegister = 100;
const orderQue: Order[] = [];

function RandomId() {
  return Math.floor(Math.random() * 100) + 1;
}

function addNewPizza(newPizza: Pizza) {
  menu.push(newPizza);
}

function placeOrder(pizza: string){
  const [item] = menu.filter((item) => item.name == pizza);
  if (item) {
    cashInRegister = cashInRegister + item.price;
    let newOrder:Order = { id: RandomId(), pizza: item.name, status: "ordered" };
    orderQue.push(newOrder);
    console.log(cashInRegister);
    return newOrder;
  } else {
    console.log("item could not be found");
    return undefined
  }
}

function completeOrder(id: number) {
  const item = orderQue.find((item) => item.id == id);
  if (item) {
    item.status = "completed";
    return item;
  } else {
    console.log("Item Not Found");
  }
}

addNewPizza({ name: "Chicken with Keema Pizza", price: 542 });
addNewPizza({ name: "Cheese Dominator", price: 242 });

const order=placeOrder("Cheese Dominator")
if(order){
    const {id}=order;
    console.log(completeOrder(id));
}
