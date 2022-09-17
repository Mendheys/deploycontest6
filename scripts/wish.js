let server_url = "https://glacial-bastion-32625.herokuapp.com/wishlisted_cars"

let container = document.getElementById("container");

fetchfromurl(server_url)

function fetchfromurl(url){

    fetch(url).then((res) => res.json()).then((res) => {
        res.map((el) => {

            // console.log(el)
            let divOne = document.createElement("div")
            divOne.setAttribute("id", "divOne")

            //////////////////////////////////
            let image = document.createElement("img")
            image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-P56-K0irxelw42XLlWgKjtnRFs4_bWJpgw&usqp=CAU";

            let Yname = document.createElement("div")
            Yname.setAttribute("id", "Yname");

            let year = document.createElement("h2");
            year.innerText = el.year;

            let brand = document.createElement("h2");
            brand.innerText = el.brand

            Yname.append(year,brand);
            ///////////////////

            let AM = document.createElement("h4");
            AM.innerText = `Type : ${el.type}`

            let KM = document.createElement("h4");
            KM.innerText  = `KM Driven : ${el.kms}`

            let price = document.createElement("h2");
            price.innerText = `Price : ${el.Price}`;

            let des = document.createElement("h4");
            des.innerText = `Description : ${el.Description}`;

            // //delete Part
            // let deleteBtn = document.createElement("button")
            // deleteBtn.innerText = "Delete"

            // deleteBtn.addEventListener("click", async () => {
            //     container
            //     let delete_link = `https://glacial-bastion-32625.herokuapp.com/wishlisted_cars/${el.id}`
            //    await fetch(delete_link,{
            //         method : "DELETE"
            //     })

            //     container.innerHTML = ""
            //     fetchfromurl(server_url)
            // })

            // //edit Part

            // let edit = document.createElement("button")
            // edit.innerText = "EDIT"

            // edit.addEventListener("click", () => {
            //     let edit_link = `https://glacial-bastion-32625.herokuapp.com/wishlisted_cars/${el.id}`
            //     localStorage.setItem("itemID", JSON.stringify(el.id))
            //     window.location.href = "edit.html"
            // })
            //

            // //wishList Part

            // let wishList = document.createElement("button")
            // wishList.innerText = "Add to wishlist";

            // wishList.addEventListener("click", () => {
            //     let wish_url = "https://glacial-bastion-32625.herokuapp.com/wishlisted_cars"

            //     // console.log(el)
            //     fetch(wish_url,{
            //         method : "POST",
            //         body : JSON.stringify(el),
            //         headers : {"content-type" : "application/json"}
            //     }).then((res) => console.log(res))


            // })




            divOne.append(image,Yname,AM,KM,price,des);

            container.append(divOne)

        


        })
    })

}
