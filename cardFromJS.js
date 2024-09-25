// Create Elements
let div = document.querySelector(".container");
let img = document.createElement("img");
let p = document.createElement("p");
let h3 = document.createElement("h3");
let a = document.createElement("a");
let card = document.createElement("div");
let inputText = document.createElement("input");
let inputEmail = document.createElement("input");
let inputCode = document.createElement("input");
let span = document.createElement("span");
let btn = document.createElement("button");
let popUp = document.querySelector(".popUp");
let confirm =document.querySelector(".confirm");
let close =document.querySelector(".close");


// Attrbiutes
card.className = "card";
img.src = "https://images.unsplash.com/photo-1567365607350-aa8ebcd4e0da?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fHww";
inputText.setAttribute("placeholder","Type your Name and Wait for 5 seconds!");
inputEmail.setAttribute("placeholder","Type your Email and Click the Button!");
inputEmail.setAttribute("type","email");
inputCode.setAttribute("placeholder","Type the Code that you Recived on your Email");
inputCode.setAttribute("type","number");

// Text Corner
h3.innerHTML = "Product Name";
p.innerHTML = "Product Value";
span.innerHTML = "Buy Now!";
btn.innerHTML = "Submit";



// Styles
div.style.cssText = "width : 500px; margin :50px auto; color : white; text-align : center; border-radius: 3px";
card.style.cssText = "text-align:center; border: solid 1px black; border-radius:5px; background-color:#bbc2d6;";
img.style.cssText = "width : 100%; border-top-left-radius: 5px; border-top-right-radius: 5px;";
inputText.style.cssText = "display: none;";
inputEmail.style.cssText = "display: none;";
inputCode.style.cssText = "display: none;";
span.style.cssText = "display: block; text-align: left; margin:5px; cursor : pointer;";
btn.style.cssText = "display: none";




// Functions
span.addEventListener("click",function(){
    inputText.style.cssText = "display:block; margin: 10px auto; padding: 5px; width: 400px; background-color:lightgray; outline:none; border:none; border-radius:3px;";
    setTimeout(function() {
        inputEmail.style.cssText = "display:block; margin: 10px auto; padding: 5px; width: 400px; background-color:lightgray; outline:none; border:none; border-radius:3px;";
    }, 5000);
    span.remove();
});

inputEmail.addEventListener("blur" , function(){
    btn.style.cssText = "display: block; background-color:gray; color:white; outline:none; border:none; width:60px; margin:5px auto; padding:5px; border-radius:3px; text-align: center;";
    
    btn.addEventListener("click", function(){
        window.sessionStorage.setItem("dataName" , inputText.value);
        window.sessionStorage.setItem("dataEmail" , inputEmail.value);
        inputCode.style.cssText = "display:block; margin: 10px auto; padding: 5px; width: 400px; background-color:lightgray; outline:none; border:none; border-radius:3px;";


        btn.addEventListener("click", function() {
            window.sessionStorage.setItem("dataCode" , inputCode.value);
            popUp.style.cssText = "display : block;";
            div.style.cssText = "opacity:0.5; width : 500px; margin:20px auto; color : white; text-align : center; border-radius: 3px;";
        });
        confirm.addEventListener("click", function(){
            popUp.innerHTML = "Well Done!";
            popUp.style.cssText = "display:block; background-color:green; border-radius:5px; padding:5px;";
            window.sessionStorage.removeItem("dataEmail");
            window.sessionStorage.removeItem("dataName");
            window.sessionStorage.removeItem("dataCode");
            setTimeout(function(){
                window.location.reload();
            }, 5000);
        }); 
        close.addEventListener("click", function(){
            window.location.reload();
        });
    });
});
let dataName = window.sessionStorage.getItem("dataName");
let dataEmail = window.sessionStorage.getItem("dataEmail");
let dataCode = window.sessionStorage.getItem("dataCode");

inputText.value = dataName;
inputEmail.value = dataEmail;
inputCode.value = dataCode;





// if condition to remove data from sessionStorage
if (window.closed){
    window.sessionStorage.removeItem("dataName");
    window.sessionStorage.removeItem("dataEmail");
    window.sessionStorage.removeItem("dataCode");
}


// Append Childs
div.appendChild(card);
card.appendChild(img);
card.appendChild(h3);
card.appendChild(p);
card.appendChild(inputText);
card.appendChild(inputEmail);
card.appendChild(inputCode);
card.appendChild(btn);
card.appendChild(span);