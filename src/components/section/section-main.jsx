import React, {useEffect} from 'react';

import Product from './product/product';
import Product_2 from './product/product_2';

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
        
        let heightThiUl = document.querySelector(".ulProduct_2").offsetHeight;
        console.log(heightThiUl)
        document.querySelector(".conteinerThird").style.height = heightThiUl * 1.5 - 10 + "px";

        for (let i = 1; i <= props.product.length; i++) { 
          document.querySelector("#product-table-2-" + i).style.transition = "1.5s ease";
        }
        let marginProduct = Math.round(Number(window.getComputedStyle(document.querySelector("#product-table-2-1"), null).getPropertyValue("margin-right").slice(0, -2))) + Math.round(Number(window.getComputedStyle(document.querySelector("#product-table-2-1"), null).getPropertyValue("margin-left").slice(0, -2)));
        document.querySelector(".ulProduct_2").style.marginLeft = window.innerWidth + marginProduct * 4 + "px";
        console.log(marginProduct);
    }

    function viewRaitedColl() {
      let timer = 0;
      for(let i = 1; i <= props.product.length; i++){
        timer = timer + 300;
        console.log(timer)
        setTimeout(() => document.querySelector("#product" + i).style.marginTop = "-20px", timer)
      }
    }


    function offset(el) {
      const rect = el.getBoundingClientRect();
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

    useEffect(() => {
      showText_1();
      viewNewColl();
      rightUl_2();
    }, [])

    function product_2_view() {
        let element_1 = document.querySelector(".nameThirdBlock");
        let element_2 = document.querySelector(".contNameThi");
        const rect = document.querySelector(".contNameThi").getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        console.log(rect);
          if(rect - windowHeight < 0){
            document.querySelector(".ulProduct_2").style.marginLeft = "0px";
            document.querySelector(".nameThirdBlock").style.top = "0px";
              for (let i = 1; i <= props.product.length; i++) {
                document.querySelector("#product-table-2-" + i).style.marginRight = "2%";

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
                <div className="conteinerProduct"  onClick={product_2_view}>
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
                          props.product.map(prod => <Product_2 key={prod.id} className="product" product={prod}/>)
                        }
                    </ul>
                </div>
              </div>
            </div>
            <div className="forthBlock">
              <div className="nameForth">Your brends</div>
              <ul className='brends'>
                <li>Chanel</li>
                <li>Escentric Molecules</li>
                <li>Lancome</li>
                <li>Lanvin</li>
                <li>Dolce & Gabbana</li>
                <li>Versace</li>
                <li>Givenchy</li>               
                <li>Gucci</li>
                <li>Lianore</li>
                <li>Parsel</li>
                <li>Woody</li>
                <li>Arctic</li>
                <li>Flip Moris</li>
                <li>Galisia</li>          
              </ul>
              <div className="moreBrendsName">And more...</div>
            </div>
          </div>
        </section>
      )
}

export default SectionMain;