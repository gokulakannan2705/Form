let cart = JSON.parse(localStorage.getItem("FormDiv")) || []
let editId = null
document.getElementById("FormBox").addEventListener("submit", (e, i) => {
    e.preventDefault()
    let FirstName = (e.target[0].value);
    let LirstName = (e.target[1].value);
    let Email = (e.target[2].value);
    let Id = e.target.i
    if (FirstName === "" || LirstName === "" || Email === "") {
        alert("Please Fill All The Fields")
    }
    else {
        if (editId === null) {
            let userDetails = {
                FirstName,
                LirstName,
                Email,
                Id: cart.length + 1
            }
            cart.push(userDetails)
            console.log(cart);
        }
        else {
           let details= cart.find((v, i) => {
                return v.Id === editId
            })            
            details.FirstName=FirstName
            details.LirstName=LirstName
            details.Email=Email
            editId = null

        }

    }
    e.target.reset()
    FormFillers()
    localStorage.setItem("FormDiv", JSON.stringify(cart))
})


function FormFillers() {
    document.getElementById("TotalStore").innerHTML = cart.map((v, i) => {
        let { FirstName, LirstName, Email, Id } = v
        return `
        <tr>
                        <td>${i + 1}</td>
                        <td>${FirstName}</td>
                        <td>${LirstName}</td>
                        <td>${Email}</td>
                        <td><button><i class="fa-solid fa-user-pen" onclick="EditElement(${Id})"></i></button>
                        <button><i class="fa-solid fa-trash" onclick="delElement(${Id})"></i></button></td>
        </tr>`

    }).join("")
}

function delElement(Id) {
    cart = cart.filter((v, i) => {
        return v.Id !== Id
    })


    cart = cart.map((v, i) => {
        return v ? { ...v, Id: i + 1 } : v;
    })

    FormFillers()
    localStorage.setItem("FormDiv", JSON.stringify(cart))


}

FormFillers()


function EditElement(Id) {

    let FindElement = cart.find((v, i) => {
        return v.Id === Id;
    })


    let { FirstName, LirstName, Email } = FindElement
    document.getElementById("input01").value = FirstName;
    document.getElementById("input02").value = LirstName;
    document.getElementById("input03").value = Email;
    editId = Id
}