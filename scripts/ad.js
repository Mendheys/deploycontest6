let url = "https://glacial-bastion-32625.herokuapp.com/cars"

let form = document.getElementById("adForm");

form.addEventListener("submit", handleForm);

function handleForm(e){
    e.preventDefault()

    let brand = form.elements[0].value;

    let MA = form.elements[1].value;

    let YOP = form.elements[2].value;

    let KM = form.elements[3].value;

    let des = form.elements[4].value;

    let price = form.elements[5].value;



    var obj = {
        brand : brand,
        year : YOP,
        type : MA,
        kms : KM,
        Description : des,
        Price : price
    }

    console.log(obj)

    let otp1 = document.getElementById("otp1")
    let otp2 = document.getElementById("otp2")
    let otp3 = document.getElementById("otp3")
    let otp4 = document.getElementById("otp4")

    console.log(otp1.value,otp2.value,otp3.value,otp4.value)

    if(otp1.value == 1 && otp2.value == 2 && otp3.value == 3 && otp4.value == 4)
    {
        fetch(url,{
            method : "POST",
            body : JSON.stringify(obj),
            headers : {"content-type" : "application/json"}
        }).then((res) => console.log(res)).then(alert("successfully Post ads"))
    }

    


    
}

////////////////////////////////////////////modal

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}