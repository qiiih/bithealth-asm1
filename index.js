const inputName = document.getElementById("input-name")
const inputRole = document.getElementById("input-role")
const inputAvail = document.getElementById("input-availability")
const inputAge = document.getElementById("input-age")
const inputLocation = document.getElementById("input-location")
const inputExp = document.getElementById("input-exp")
const inputEmail = document.getElementById("input-email")
const btnSubmit = document.getElementById("btn-submit")

function clrForm() {
    inputName.value = ""
    inputRole.value = ""
    inputAvail.value = ""
    inputAge.value = ""
    inputLocation.value = ""
    inputExp.value = ""
    inputEmail.value = ""
}

btnSubmit.addEventListener("click", (e) => {
    const profile = {
        name : inputName.value,
        role : inputRole.value,
        avail : inputAvail.value,
        age : inputAge.value,
        loc : inputLocation.value,
        exp : inputExp.value,
        email : inputEmail.value,
    }
    console.log(profile);
    clrForm()
})
