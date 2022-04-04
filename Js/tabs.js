const tabs = document.querySelectorAll(".tab");
const produtos = document.querySelector("#produtos");
const sobreNos = document.querySelector("#sobre-nos");
const tabContent = document.querySelectorAll(".tab-content");
const produtosTab = document.querySelector("#product-tab");
const sobreNosTab = document.querySelector("#about-us-tab");

tabContent.forEach((content)=>{
    content.style.display = "none";
})
document.querySelector(".default-open").style.display="flex";

tabs.forEach((tab)=>{
    tab.addEventListener("click",()=>{
        if(tab.innerText === "Products"){
            produtos.style.display="flex";
            sobreNos.style.display="none";
            if(!tab.classList.contains("active-tab")){
                tab.classList.toggle("active-tab");
                sobreNosTab.classList.toggle("active-tab");
            }
        }

        if(tab.innerText === "About-us"){
            produtos.style.display="none";
            sobreNos.style.display="flex";
            if(!tab.classList.contains("active-tab")){
                tab.classList.toggle("active-tab");
                produtosTab.classList.toggle("active-tab");

            }
        }
        
    })
    
})