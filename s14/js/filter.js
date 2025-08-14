// const products = [
//   { id: 1, price: 19.99, name: "Wireless Mouse", category: "Electronics", image: "https://placehold.co/600x400/cccccc/000000?text=Wireless+Mouse" },
//   { id: 2, price: 49.99, name: "Bluetooth Headphones", category: "Electronics", image: "https://placehold.co/600x400/eeeeee/111111?text=Bluetooth+Headphones" },
//   { id: 3, price: 9.99, name: "Coffee Mug", category: "Kitchen", image: "https://placehold.co/600x400/f4a460/ffffff?text=Coffee+Mug" },
//   { id: 4, price: 29.99, name: "Desk Lamp", category: "Home", image: "https://placehold.co/600x400/ffd700/000000?text=Desk+Lamp" },
//   { id: 5, price: 15.00, name: "Notebook", category: "Stationery", image: "https://placehold.co/600x400/98fb98/000000?text=Notebook" },
//   { id: 6, price: 5.00, name: "Ballpoint Pen", category: "Stationery", image: "https://placehold.co/600x400/87cefa/000000?text=Ballpoint+Pen" },
//   { id: 7, price: 199.99, name: "Smartwatch", category: "Electronics", image: "https://placehold.co/600x400/4682b4/ffffff?text=Smartwatch" },
//   { id: 8, price: 79.99, name: "Travel Backpack", category: "Accessories", image: "https://placehold.co/600x400/ff6347/000000?text=Travel+Backpack" },
//   { id: 9, price: 3.49, name: "Sticky Notes", category: "Stationery", image: "https://placehold.co/600x400/ffffe0/000000?text=Sticky+Notes" },
//   { id: 10, price: 24.99, name: "Water Bottle", category: "Outdoors", image: "https://placehold.co/600x400/00ced1/000000?text=Water+Bottle" },
//   { id: 11, price: 149.99, name: "Gaming Keyboard", category: "Electronics", image: "https://placehold.co/600x400/1e90ff/ffffff?text=Gaming+Keyboard" },
//   { id: 12, price: 89.99, name: "Office Chair", category: "Furniture", image: "https://placehold.co/600x400/8b4513/ffffff?text=Office+Chair" },
//   { id: 13, price: 59.99, name: "Running Shoes", category: "Sportswear", image: "https://placehold.co/600x400/ff4500/ffffff?text=Running+Shoes" },
//   { id: 14, price: 12.99, name: "Scented Candle", category: "Home", image: "https://placehold.co/600x400/fff0f5/000000?text=Scented+Candle" },
//   { id: 15, price: 7.99, name: "USB Flash Drive", category: "Electronics", image: "https://placehold.co/600x400/dcdcdc/000000?text=USB+Flash+Drive" },
//   { id: 16, price: 249.99, name: "Tablet", category: "Electronics", image: "https://placehold.co/600x400/00008b/ffffff?text=Tablet" },
//   { id: 17, price: 39.99, name: "Blender", category: "Kitchen", image: "https://placehold.co/600x400/ffebcd/000000?text=Blender" },
//   { id: 18, price: 5.49, name: "Measuring Cup Set", category: "Kitchen", image: "https://placehold.co/600x400/f5f5dc/000000?text=Measuring+Cup+Set" },
//   { id: 19, price: 129.99, name: "Drone", category: "Electronics", image: "https://placehold.co/600x400/2f4f4f/ffffff?text=Drone" },
//   { id: 20, price: 18.99, name: "Yoga Mat", category: "Sportswear", image: "https://placehold.co/600x400/dda0dd/000000?text=Yoga+Mat" },
//   { id: 21, price: 299.99, name: "Digital Camera", category: "Electronics", image: "https://placehold.co/600x400/ff69b4/000000?text=Digital+Camera" },
//   { id: 22, price: 65.00, name: "Leather Wallet", category: "Accessories", image: "https://placehold.co/600x400/a0522d/ffffff?text=Leather+Wallet" },
//   { id: 23, price: 35.99, name: "Sunglasses", category: "Accessories", image: "https://placehold.co/600x400/8b0000/ffffff?text=Sunglasses" },
//   { id: 24, price: 22.99, name: "Chef Knife", category: "Kitchen", image: "https://placehold.co/600x400/b22222/ffffff?text=Chef+Knife" },
//   { id: 25, price: 14.50, name: "Oven Mitts", category: "Kitchen", image: "https://placehold.co/600x400/ffdab9/000000?text=Oven+Mitts" },
//   { id: 26, price: 8.99, name: "Shampoo", category: "Personal Care", image: "https://placehold.co/600x400/fafad2/000000?text=Shampoo" },
//   { id: 27, price: 6.50, name: "Toothbrush", category: "Personal Care", image: "https://placehold.co/600x400/f0e68c/000000?text=Toothbrush" },
//   { id: 28, price: 4.25, name: "Bar Soap", category: "Personal Care", image: "https://placehold.co/600x400/e6e6fa/000000?text=Bar+Soap" },
//   { id: 29, price: 11.75, name: "Hair Brush", category: "Personal Care", image: "https://placehold.co/600x400/fffacd/000000?text=Hair+Brush" },
//   { id: 30, price: 54.99, name: "Electric Kettle", category: "Kitchen", image: "https://placehold.co/600x400/ffe4b5/000000?text=Electric+Kettle" }
// ];
// const categories = [
//   "Electronics",
//   "Kitchen",
//   "Home",
//   "Stationery",
//   "Accessories",
//   "Outdoors",
//   "Furniture",
//   "Sportswear",
//   "Personal Care"
// ];
// const createMyOwnElement = (parent, el, txt, classes, href) =>{
//     const newEle = document.createElement(el)
//     newEle.className=classes
//     newEle.innerText=txt
//     parent.appendChild(newEle)
//     newEle.src= href
//     return newEle
// }
// const showAllProducts = (allProducts) => {
//     data.innerHTML=""
//     allProducts.forEach(product=>{
//     let div = createMyOwnElement(data, "div", null, "col-md-4 p-3")
//     let innerDiv = createMyOwnElement(div, "div", null, "border border-3 rounded")
//     createMyOwnElement(innerDiv, "img", null, "img-fluid", product.image)
//     createMyOwnElement(innerDiv, "h3", product.name, "my-2 mx-1 h4 text-primary")
//     createMyOwnElement(innerDiv, "h6", product.category, "my-2 mx-1  text-muted")
//     createMyOwnElement(innerDiv, "h6", `${product.price} EGP`, "my-2 mx-1  text-muted")
// })
// }

// const data = document.querySelector("#data")
// const cats = document.querySelector("#cats")
// const search = document.querySelector("#search")
// showAllProducts(products)
// const myCatWrap = createMyOwnElement(cats, "div", null, "row bg-light p-3")

// categories.forEach(cat=>{
//     const eachCat = createMyOwnElement(myCatWrap, "button", cat, "btn btn-success justify-space-between col mx-2 cat")
//     eachCat.addEventListener("click", function(){
//         let c = document.querySelectorAll(".cat")
//         c.forEach(el=> { el.classList.remove("btn-info") })
//         eachCat.classList.add("btn-info")
//         const result = products.filter(p=>{
//             return p.category == cat
//         })
//         showAllProducts(result)
//     })
// })

// search.addEventListener("input", ()=>{
//     let result = products.filter(el=>{
//         return el.name.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())
//     })
//     showAllProducts(result)
// })

// const createMyOwnElement = (parent, el, txt, classes, href) =>{
//     const newEle = document.createElement(el)
//     newEle.className=classes
//     newEle.innerText=txt
//     parent.appendChild(newEle)
//     newEle.src= href
//     return newEle
// }

// const addbtn = document.querySelector("#addbtn")
// const add = document.querySelector("#add")
// const content = document.querySelector("#content")
// addbtn.addEventListener("click", ()=>{
//     createMyOwnElement(content, "li", add.value)
//     add.value = ""
// })

// const up = document.querySelector("#up")
// up.addEventListener("click", ()=>{
//     window.scrollTo({
//         top:0, 
//         behavior:"instant" //smooth
//     })
// })

let nav = document.querySelector("#nav")
window.addEventListener("scroll", function(e){
    console.log(window.scrollX, window.scrollY)
    if(this.window.scrollY>=500){
        nav.classList.add("position-fixed")
    }
    else{
        nav.classList.remove("position-fixed")
    }
})