// product constructor
function Shirt(name, size, color, stock, image) {
	this.name  = name
	this.size  = size
	this.color = color
	this.stock = stock
	this.image = image
}

// create new products from the product constructor
var beenie  = new Shirt("Beenies", "Free-size", "Black", 150, "img/beenie.jpg")
var bhoodie  = new Shirt("Hoodies", "Lg | Md | Sm", "Black", 50, "img/blackhoodie.jpg")
var tee    = new Shirt("Tees", "Lg | Md | Sm", "Black", 20, "img/blacktee.jpg")
var hat   = new Shirt("Snap backs", "Free-size", "Black", 70, "img/blackhat.jpg")
var tank  = new Shirt("Tank-tops", "Lg | Md | Sm", "black", 55, "img/blacktank.jpg")
var crewneck = new Shirt("Crews", "Lg | Md | Sm", "Grey", 50, "img/greycrewneck.jpg")

// create an array to add products to
var shirtArray = new Array

// add products to array of products
shirtArray.push(beenie, bhoodie, tee, hat, tank, crewneck)

// loop through products array
for(var i = 0; i < shirtArray.length; i++) {
	// create new elements for each product
	var newItem  = document.createElement("div")
	var newDiv   = document.createElement("div")
	var nameH1   = document.createElement("h1")
	var sizeH4   = document.createElement("h4")
	var colorH4  = document.createElement("h4")
	var stockH4  = document.createElement("h4")
	var btn      = document.createElement("button")
	var image    = document.createElement("img")

	// create text for new elements
	var tName   = document.createTextNode(shirtArray[i].name)
	var tSize   = document.createTextNode("Available size: " + shirtArray[i].size)
	var tColor  = document.createTextNode("Color: " + shirtArray[i].color)
	var tStock  = document.createTextNode("In stock: " + shirtArray[i].stock)
	var tButton = document.createTextNode("Buy Now!")

	// update source attribute
	image.src = shirtArray[i].image

	// update class attributes
	image.className = "img-responsive"
	btn.className = "btn btn-primary btn-lg"
	newItem.className = "col-sm-4"
	newDiv.className = "tshirt shirtName" + [i] + " thumbnail"
	
	// add text to elements
	nameH1.appendChild(tName)
	sizeH4.appendChild(tSize)
	colorH4.appendChild(tColor)
	stockH4.appendChild(tStock)
	btn.appendChild(tButton)

	// add elements to new div
	newDiv.appendChild(nameH1)
	newDiv.appendChild(image)
	newDiv.appendChild(sizeH4)
	newDiv.appendChild(colorH4)
	newDiv.appendChild(stockH4)
	newDiv.appendChild(btn)

	// add new div to new item div
	newItem.appendChild(newDiv)

	// add new item to the element with id="shirts"
	document.getElementById("products").appendChild(newItem)
}
