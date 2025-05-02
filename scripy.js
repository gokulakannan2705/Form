cart = []
document.getElementById("FormBox").addEventListener("submit", (e, i) => {
    e.preventDefault()
    let FirstName = (e.target[0].value);
    let LirstName = (e.target[1].value);
    let Email = (e.target[2].value);
    let Id = e.target.i
    console.log(FirstName, LirstName, Email);

    // e.target[0].value = ""
    // e.target[1].value = ""
    // e.target[2].value = ""

    if (FirstName === "" || LirstName === "" || Email === "") {
        alert("Please Fill All The Fields")
    }
    else {
        // id = 0
        let userDetails = {
            FirstName,
            LirstName,
            Email,
            Id: cart.length + 1
        }
        cart.push(userDetails)
        console.log(cart);

    }
    e.target.reset()
    FormFillers()
    localStorage.setItem("click", JSON.stringify(cart))
})


function FormFillers() {
    j = 0;
    document.getElementById("TotalStore").innerHTML = cart.map((v, i) => {
        let { FirstName, LirstName, Email } = v
        return `
        <tr>
                        <td>${i + 1}</td>
                        <td>${FirstName}</td>
                        <td>${LirstName}</td>
                        <td>${Email}</td>
                        <td><button><i class="fa-solid fa-user-pen"></i></button>
                        <button><i class="fa-solid fa-trash" onclick="delElement(${j})"></i></button></td>
        </tr>`

    }).join("")
    localStorage.setItem("click", JSON.stringify(cart))

}

function delElement(a) {

    cart.splice(a, 1)
    FormFillers()
    console.log(cart);
    localStorage.setItem("click", JSON.stringify(cart))

}

