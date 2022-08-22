const items = ["pencil","eraser","scale","sharpner","crayons","pen","ink-eraser","blue-ink","black-ink","marker"];
const value = [5,2,10,3,25,15,5,20,20,30];
const products = [];

class Product
{  
	name = "";
	count = 0;
	value = 0;
    constructor(name,value)  
    {  
      	this.name = name;  
      	this.value = value;  
    }
	
	increaseCount(){
		this.count++;
	}
	decreaseCount(){
		this.count--;
	}
}  

for(var i=0;i<items.length;i++){
	products.push(new Product(items[i],value[i]));
}

function adder(flag,itemName){
	const product = products.filter((product) => product.name === itemName);
	if(product[0] !== null){
		if(flag){
			product[0].increaseCount();
		}
		else{
			product[0].decreaseCount();
		}
	}
	myFunction();
}

function getTotal(){
	let s = 0;
	for(let i=0;i<items.length;i++)
	{
		s += products[i].count;
	}
	return s;
}

function getCash(){
	let s = 0;
	for(let i=0;i<items.length;i++)
	{
		s += products[i].count*products[i].value;
	}
	return s;
}

function myFunction() {
	for(let i=0;i<items.length;i++) {
		if(products[i].count<=0)
		{
			products[i].count=0;
			document.getElementById(products[i].name).innerText = "";
		}
		else{
    		document.getElementById(products[i].name).innerText = "You ordered "+products[i].count+" "+products[i].name;
		}
	var total= getTotal();
	var cash= getCash();
	if(total!==0){
		document.getElementById("total").innerText = "You total order is "+total+" items.";
		document.getElementById("cash").innerText = "Total cash need to pay is "+cash+".";
	}
	else{
		document.getElementById("total").innerText = "";
		document.getElementById("cash").innerText = "";
	}
  }
}

var index = 1;
function Creation(){
	var total_cost = 0;
	let folder = document.createElement("div");
	folder.classList.add("contents");
	var para = document.createElement("p")
	var text = document.createTextNode("Order no - "+index);
	para.appendChild(text);
	folder.appendChild(para);

	for(let i=0;i<items.length;i++){
		if(products[i].count !==0 ){
			var para = document.createElement("p");
			var text = document.createTextNode(products[i].name+" -> "+products[i].count);
			total_cost+=products[i].count*products[i].value;
			para.appendChild(text);
			folder.appendChild(para);
			products[i].count=0;
		}
	}
	var para = document.createElement("p")
	var text = document.createTextNode("Total is "+total_cost);
	para.appendChild(text);
	folder.appendChild(para);
	
   	var element = document.getElementById("Cart-folder");
   	element.appendChild(folder);
	index++;
}

function openTab(tabName) {
    var i, x;
    x = document.getElementsByClassName("containerTab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
  }
