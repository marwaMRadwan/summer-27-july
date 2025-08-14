// const formData = document.querySelector("#form-data")
// const allUsers = []
// formData.addEventListener("submit", function(e){
//     e.preventDefault()
//     //regex
//     let validForm = true
//     // name between 3 to 20 chars
//     if(formData.name.value.length< 3 || formData.name.value.length>20){
//         validForm=false
//         formData.name.nextElementSibling.className= "mt-3 alert alert-danger"
//         formData.name.nextElementSibling.innerText= "name must be between 3 to 30 chars"
//     }
//     // valid email  
//     if(formData.email.value.length< 3 || formData.email.value.length>20){
//         validForm=false
//         formData.email.nextElementSibling.className= "mt-3 alert alert-danger"
//         formData.email.nextElementSibling.innerText= "name must be between 3 to 30 chars"
//     }
//     if(validForm){
//         let user = {
//             name: formData.name.value,
//             age: formData.age.value,
//             email: formData.email.value,
//             address: formData.address.value,
//             position: formData.position.value,
//         }
//         allUsers.push(user)
//         formData.reset()
//     }
// })


const div = document.querySelector("div")
const p = document.querySelector("p")
const span = document.querySelector("span")
let sec = 60, min = 10, hours = 1

setInterval(() => {
    div.innerHTML = sec
    p.innerHTML = min
    span.innerHTML = hours

    if (sec > 0) {
        sec--
    }
    else {
        min--
        sec = 60
        console.log(2);
        if (min == 0) {
            min = 60
            hours--
        }
    }
}, 1000)
