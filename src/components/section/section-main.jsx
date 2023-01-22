import React, {useEffect} from 'react';

import Product from './product';

const SectionMain = function(props){

    function showText_1(){
        document.querySelector(".textSecondBlock").style.top = "0px"
        document.querySelector(".nameSecondBlock").style.top = "0px"
        let height_block_1 = document.querySelector(".textSecondBlock").offsetHeight;
        document.querySelector(".backGrFirst").style.height = (height_block_1 + "px");

    }

    function viewNewColl() {
      let timer = 0;
      for(let i = 1; i <= props.product.length; i++){
      timer = timer + 300;
      console.log(timer)
      setTimeout(() => document.querySelector("#product" + i).style.marginTop = "-20px", timer)
      }
    }

    function rightUl_2(){
      let lenght = window.innerWidth
      document.querySelector(".ulProduct_2").style.marginLeft = lenght + "px"
      let height_block_2 = document.querySelector(".ulProduct_2").offsetHeight;
      document.querySelector(".conteinerThird").style.height = (height_block_2 + 200 + "px");
    }

    function viewRaitedColl() {
      let timer = 0;
      for(let i = 1; i <= props.product.length; i++){
        timer = timer + 300;
        console.log(timer)
        setTimeout(() => document.querySelector("#product" + i).style.marginTop = "-20px", timer)
      }
    }

    useEffect(() => {
      showText_1();
      viewNewColl();
      rightUl_2();
    }, [])



    function offset(el) {
        const rect = el.getBoundingClientRect();
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    function scrollVisible() {
        let elements = document.querySelectorAll("#scroll-el");
        let elements_2 = document.querySelectorAll(".scroll-el");
        let elements_all = [...elements,  ...elements_2];
        console.log(elements_all);
        console.log("1")

        for(let i = 0; i < elements_all.length; i++){
            const animItem = elements_all[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;
            console.log("11")
            let animItemPoint = window.innerHeight - animItemHeight / animStart
            
              if(animItemHeight > window.innerHeight){
                  animItemPoint = window.innerHeight - window.innerHeight / animStart
              }

              if((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)){
                  console.log("111")
              }


        }
    }
    
    
    
    return(
        <section>
          <div className="allContent">
            <div className="firstBlock">
              <div className="backGrFirst">
                <div className="contText">
                  <div className="textSecondBlock">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad temporibus nemo nesciunt praesentium esse eveniet cupiditate placeat dolore.
                  </div>
                </div>
              </div>
            </div>
            <div className="secondBlock">
              <div className="backGrSecond">
                <div className="conteinerProduct">
                    <div className="contNameSec">
                      <div className="nameSecondBlock">New collection</div>
                    </div>
                    <ul className='ulProduct'>
                      {
                        props.product.map(prod => <Product key={prod.id} className="product" product={prod}/>)
                      }
                    </ul>
                </div>
              </div>
            </div>
            <div className="thirdBlock">
              <div className="backGrThird">
                <div className="conteinerThird">
                  <div className="contNameThi">
                    <div className="nameThirdBlock" id="scroll-el">Popular flavors</div>
                  </div>
                  <ul className='ulProduct_2'>
                      {
                        props.product.map(prod => <Product key={prod.id} className="product" product={prod}/>)
                      }
                      
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
}

export default SectionMain;