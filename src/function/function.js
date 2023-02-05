


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



export {
    onloadUseEff,
    productBlockSecondView,
    loadItem,
    brendsMainView,
}