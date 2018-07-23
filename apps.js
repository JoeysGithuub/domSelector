const head = document.querySelector(".article__header")
const text = head.innerHTML
head.innerHTML = "Welcome to the Joey Blog"

// let all = document.querySelectorAll(".article__header")
// console.log(all)
// all.setAttribute("class", "article__header Important")
// all.classList.add(".article__header Important")


    let all = document.querySelectorAll(".article__header")
    console.log(all)
    for (i=0; i < all.length; i++) {
    all[i].classList.add("Important")
    }


// let more = all.classList.add("article__header important")
// all.classList("article__header important")



//   $(function() {
//       $(".article__header").text("Welcome to the Joey blog")
//   })

