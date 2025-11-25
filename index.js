const menu=[
    {name:"Margarita",price:100},
    {name:"Achar do Pyas",price:150},
    {name:"Pasta Pizza",price:239},
    {name:"Veg Loaded",price:335},
    {name:"Golden Corn",price:250},

]

let cashInRegister=100
const orderQue=[]

function RandomId(){
    return Math.floor(Math.random()*100)+1
}

function addNewPizza(newPizza){
    menu.push(newPizza)
}

function placeOrder(pizza){
    const [item]=menu.filter(item=>item.name==pizza)
    if(item){
        cashInRegister=cashInRegister+item.price
        let newOrder = { id: RandomId(), pizza: item.name, status: "ordered" };
        orderQue.push(newOrder)
        console.log(cashInRegister)
        return newOrder
    }
    else{
        console.log("item could not be found")
    }
}
    
function completeOrder(id){
    const item=orderQue.find(item=>item.id==id)
    if(item){
        item.status="completed"
        return item;
    }else{
        console.log("Item Not Found")
    }
}

addNewPizza({name:"Chicken with Keema Pizza",price:542})
addNewPizza({ name: "Cheese Dominator", price: 242 });

const {id}=placeOrder("Cheese Dominator")
console.log(completeOrder(id))