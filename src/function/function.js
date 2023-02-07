


function loadItem(selector, fun) {
    const rect = document.querySelector(selector).getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if(rect - windowHeight < 0){
        fun();
      }
}

function productBlockSecondView() {
    document.querySelector(".ulProduct_2").style.marginLeft = "0px";
    document.querySelector(".nameThirdBlock").style.top = "0px";
        for (let i = 1; i <= 4; i++) {
          document.querySelector("#product-table-2-" + i).style.marginRight = "2%";
          }
  }

  function brendsMainView(){
    document.querySelector(".nameForth").style.opacity = "1";

    let nodeBrends = document.querySelectorAll(".brends li")
    let allBrends = [...nodeBrends];
    for (let i = 0; i < allBrends.length; i++) {
        allBrends[i].style.opacity = "1";;
        
    }
  }



function onloadUseEff() {
    window.addEventListener('scroll', loadItem(".contNameThi", productBlockSecondView));
    window.addEventListener('scroll', loadItem(".nameForth", brendsMainView));
}

function adaptiv_js(margin){
  
  let heightFirstUl = document.querySelector("#product-table-2-1").offsetHeight;
      
  document.querySelector(".conteinerThird").style.height = heightFirstUl * 1.48 + "px";

  if(window.innerWidth < 1286){
    document.querySelector(".conteinerThird").style.height = heightFirstUl * 2.5 + margin - 20 + "px";
    document.querySelector(".conteinerProduct").style.height = (heightFirstUl + margin * 1.5) * 2 + "px";
    document.querySelector(".ulProduct_2").style.display = "inline-block";
    document.querySelector(".ulProduct_2").style.textAlign = "center";
  }
  if(window.innerWidth < 1020){
    document.querySelector(".conteinerProduct").style.height = (heightFirstUl + margin * 1.8) * 2 + "px";
  }
  if(window.innerWidth < 695){
    document.querySelector(".conteinerProduct").style.height = (heightFirstUl + margin * 2.3) * 2 + "px";
  }
  if(window.innerWidth < 587){
    document.querySelector(".conteinerProduct").style.height = (heightFirstUl + margin * 2.1) * 3 + "px";
    document.querySelector(".ulProduct").lastChild.style.display = "none";
    document.querySelector(".ulProduct_2").lastChild.style.display = "none";
    document.querySelector(".conteinerThird").style.height = (heightFirstUl * 3.5 + margin * 2) + "px";
  }
  if(window.innerWidth < 400){
    document.querySelector(".conteinerProduct").style.height = (heightFirstUl + margin * 2.3) * 3 + "px";
}
}


export {
    onloadUseEff,
    productBlockSecondView,
    loadItem,
    brendsMainView,
    adaptiv_js,
}