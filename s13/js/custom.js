// let result = document.getElementById("test-id")

// console.log(result);

// result = document.getElementsByClassName("test-class")
// console.log(result);
// result = document.getElementsByTagName("div")
// console.log(result)


// result = document.getElementById("test-id")
// let text = result.textContent
// console.log(text);

// text = result.innerText
// console.log(text);

// let html = result.innerHTML
// console.log(html);


// result.innerText = "hello"
// result.innerHTML = "<h1>hello</h1>"


// let result = document.querySelector("#test-id")
// console.log(result);
// result = document.querySelectorAll("div")
// console.log(result);
// result.forEach((el, i)=>{
//     el.innerText = `hello ${i}`
// })
// let result = document.querySelector("#test-id")
// let c = result.className
// console.log(c);
// c = result.classList
// console.log(c);
// result.classList.add("bg-primary")
// result.classList.remove("test-class")

// result.className = "bg-success"
// result.classList.toggle("d-none")

// let body = document.querySelector("body")
// let div = document.createElement("div")
// body.appendChild(div)
// div.innerText= "hello"
// div.className="alert alert-primary"

// div.remove()


// const data = [
//   { "id": 1, "name": "Alice Johnson", "email": "alice.johnson@example.com", "age": 28, "address": "123 Maple Street, Springfield" },
//   { "id": 2, "name": "Bob Smith", "email": "bob.smith@example.com", "age": 35, "address": "456 Oak Avenue, Lincoln" },
//   { "id": 3, "name": "Charlie Brown", "email": "charlie.brown@example.com", "age": 42, "address": "789 Pine Road, Fairview" },
//   { "id": 4, "name": "Diana Prince", "email": "diana.prince@example.com", "age": 30, "address": "101 Elm Street, Gotham" },
//   { "id": 5, "name": "Ethan Hunt", "email": "ethan.hunt@example.com", "age": 38, "address": "202 Cedar Lane, Rivertown" },
//   { "id": 6, "name": "Fiona Gallagher", "email": "fiona.gallagher@example.com", "age": 25, "address": "303 Birch Blvd, Lakeside" },
//   { "id": 7, "name": "George Miller", "email": "george.miller@example.com", "age": 47, "address": "404 Walnut Drive, Hillsboro" },
//   { "id": 8, "name": "Hannah Lee", "email": "hannah.lee@example.com", "age": 29, "address": "505 Chestnut Court, Brookfield" },
//   { "id": 9, "name": "Ian Wright", "email": "ian.wright@example.com", "age": 33, "address": "606 Redwood Street, Pleasantville" },
//   { "id": 10, "name": "Julia Roberts", "email": "julia.roberts@example.com", "age": 41, "address": "707 Poplar Way, Riverdale" },
//   { "id": 11, "name": "Kevin Turner", "email": "kevin.turner@example.com", "age": 26, "address": "808 Magnolia Lane, Meadowbrook" },
//   { "id": 12, "name": "Laura Adams", "email": "laura.adams@example.com", "age": 32, "address": "909 Dogwood Drive, Greendale" },
//   { "id": 13, "name": "Michael Scott", "email": "michael.scott@example.com", "age": 45, "address": "111 Ash Street, Scranton" },
//   { "id": 14, "name": "Nina Patel", "email": "nina.patel@example.com", "age": 27, "address": "222 Sycamore Ave, Maplewood" },
//   { "id": 15, "name": "Oscar Diaz", "email": "oscar.diaz@example.com", "age": 34, "address": "333 Fir Lane, Sunnyvale" },
//   { "id": 16, "name": "Paula Green", "email": "paula.green@example.com", "age": 39, "address": "444 Willow Street, Clearwater" },
//   { "id": 17, "name": "Quincy Hall", "email": "quincy.hall@example.com", "age": 36, "address": "555 Spruce Court, Westfield" },
//   { "id": 18, "name": "Rachel King", "email": "rachel.king@example.com", "age": 31, "address": "666 Beech Street, Parkside" },
//   { "id": 19, "name": "Samuel Brooks", "email": "samuel.brooks@example.com", "age": 44, "address": "777 Alder Avenue, Greenfield" },
//   { "id": 20, "name": "Tina Morris", "email": "tina.morris@example.com", "age": 28, "address": "888 Hawthorn Blvd, Rosewood" }
// ]

// const dataWrap = document.querySelector("#data-wrap")
// data.forEach(user=>{
//     let tr = document.createElement("tr")
//     dataWrap.appendChild(tr)
//     let td = document.createElement("td")
//     td.textContent = user.id
//     tr.appendChild(td)
//     td = document.createElement("td")
//     td.textContent = user.name
//     tr.appendChild(td)
//     td = document.createElement("td")
//     td.textContent = user.email
//     tr.appendChild(td)
//     td = document.createElement("td")
//     td.textContent = user.age
//     tr.appendChild(td)
//     td = document.createElement("td")
//     td.textContent = user.address
//     tr.appendChild(td)
// })


let todos = [
{
userId: 1,
id: 1,
title: "delectus aut autem",
completed: false
},
{
userId: 1,
id: 2,
title: "quis ut nam facilis et officia qui",
completed: false
},
{
userId: 1,
id: 3,
title: "fugiat veniam minus",
completed: false
},
{
userId: 1,
id: 4,
title: "et porro tempora",
completed: true
},
{
userId: 1,
id: 5,
title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
completed: false
},
{
userId: 1,
id: 6,
title: "qui ullam ratione quibusdam voluptatem quia omnis",
completed: false
},
{
userId: 1,
id: 7,
title: "illo expedita consequatur quia in",
completed: false
},
{
userId: 1,
id: 8,
title: "quo adipisci enim quam ut ab",
completed: true
},
{
userId: 1,
id: 9,
title: "molestiae perspiciatis ipsa",
completed: false
},
{
userId: 1,
id: 10,
title: "illo est ratione doloremque quia maiores aut",
completed: true
}
]
            
let todoWrap = document.querySelector("#todos")
// todos.forEach(ele => {
    // todoWrap.innerHTML += `<div class="p-3 col-md-4 col-12">
    //     <div class="${ele.completed? 'bg-success': 'bg-danger'} p-3 text-center rouned">
    //         <p class="rounded-circle bg-white mx-auto" style="width: 50px;height: 50px;">
    //             <span class="p-3">${ele.id}</span>
    //         </p>
    //         <h3 class="text-white">${ele.title}</h3>
    //         <p class="text-muted">${ele.completed}</p>
    //     </div>
    // </div>`
    // let div = document.createElement("div")
    // div.className = "p-3 col-md-4 col-12 h-100"
    // todoWrap.appendChild(div)
    // let innerDiv = document.createElement("div")
    // innerDiv.className = `${ele.completed? 'bg-success': 'bg-danger'} p-3 h-100 text-center rouned`
    // div.appendChild(innerDiv)

    // let p = document.createElement("p")
    // p.classList="rounded-circle bg-white mx-auto"
    // innerDiv.appendChild(p)

    // let span = document.createElement("span")
    // span.classList="p-3"
    // span.innerText=ele.id
    // p.appendChild(span)

    // let h3 = document.createElement("h3")
    // h3.innerText= ele.title
    // h3.className= "text-white"
    // innerDiv.appendChild(h3)

    // let pinner = document.createElement("p")
    // pinner.innerText= ele.completed
    // pinner.className= "text-muted"
    // innerDiv.appendChild(pinner)
// })
const createMyOwnElement = (parent, el, txt, classes) =>{
    const newEle = document.createElement(el)
    newEle.className=classes
    newEle.innerText=txt
    parent.appendChild(newEle)
    return newEle
}

todos.forEach(ele => {
    let div = createMyOwnElement(todoWrap, "div", "", "p-3 col-md-4 col-12")
    let innerDiv = createMyOwnElement(div, "div", "", `${ele.completed? 'bg-success': 'bg-danger'} p-3 h-100 text-center rouned`)
    let p = createMyOwnElement(innerDiv, "p", "", "rounded-circle bg-white mx-auto")
    p.setAttribute("style", "width: 50px;height: 50px;")
    createMyOwnElement(p, "span", ele.id, "p-3")
    createMyOwnElement(innerDiv, "h3", ele.title, "text-white")
    createMyOwnElement(innerDiv, "p", ele.completed, "text-white")
})
