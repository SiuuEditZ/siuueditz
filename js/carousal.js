const reviews=[
    {
        name:"VLine",
        reviews:"[16/3 4.34 PM] Vline: Store aman terpercaya amanah, palayanan cefat [16/3 4.34 PM] Vline: Ya"
    }
];
const Name=document.querySelector(".test_box h4");
const Review=document.querySelector(".test_box p");
const btn=document.getElementsByClassName("next-circle");

let i=0;
setInterval(myTimer, 2000);
const reviewName=document.querySelector(".test_box");
function myTimer() {
    Name.textContent=reviews[i%3].name;
    Review.textContent=reviews[i%3].reviews;
    btn[i%3].style.backgroundColor="black";
    btn[(i+1)%3].style.backgroundColor="#ff8aa5";
    btn[(i+2)%3].style.backgroundColor="#ff8aa5";


    i++;

}
