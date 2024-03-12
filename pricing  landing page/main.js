const toggler = document.querySelector(".toggler");
const starterPrice = document.getElementById("starter-price");
const proPrice = document.getElementById("pro-price");
const ultraPrice = document.getElementById("ultra-price");


toggler.addEventListener("change", ()=>{
    if(toggler.checked){
        starterPrice.innerHTML = `$99<span> / day </span>`;
        proPrice.innerHTML = `$500 <span> / week </span>`;
        ultraPrice.innerHTML = `$2500 <span> / month </span>`;

    }else{
        starterPrice.innerHTML = `$150 <span> / day </span>`;
        proPrice.innerHTML = '$530 <span> / week </span>'; 
        ultraPrice.innerHTML = `$3000<span> / month </span>`;

    }
})