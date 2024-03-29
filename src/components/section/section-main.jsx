import React, {useEffect} from 'react';

import Product from './product/product';
import Product_2 from './product/product_2';

import { onloadUseEff, loadItem, productBlockSecondView, brendsMainView, adaptiv_js } from '../../function/function';

const SectionMain = function(props){

    function showText_1(){
        document.querySelector(".textSecondBlock").style.top = "0px"
        document.querySelector(".nameSecondBlock").style.top = "0px"

        let height_block_1 = document.querySelector(".textSecondBlock").offsetHeight;
        document.querySelector(".backGrFirst").style.height = (height_block_1 + "px");



    }

    function viewNewColl() {
      
      let timer = 0;
      let marginBottomFirstUl = Math.round(Number(window.getComputedStyle(document.querySelector("#product-table-2-1"), null).getPropertyValue("margin-left").slice(0, -2))) * 2 + 10 ;

      for(let i = 1; i <= props.product.length; i++){
        
        document.querySelector("#product" + i).style.marginBottom = marginBottomFirstUl + "px";
        document.querySelector("#product-table-2-" + i).style.marginBottom = marginBottomFirstUl - 20 + "px";
        if(window.innerWidth < 587){  
          document.querySelector("#product" + i).style.marginBottom = marginBottomFirstUl * 1.5 + "px";
          document.querySelector("#product-table-2-" + i).style.marginBottom = marginBottomFirstUl * 1.5 - 20 + "px";
        }
      timer = timer + 300;
      setTimeout(() => document.querySelector("#product" + i).style.marginTop = "-20px", timer)
      }
      adaptiv_js(marginBottomFirstUl);
  }


    function rightUl_2(){

        for (let i = 1; i <= props.product.length; i++) { 
          document.querySelector("#product-table-2-" + i).style.transition = "1.5s ease";

        }
        let marginProduct = Math.round(Number(window.getComputedStyle(document.querySelector("#product-table-2-1"), null).getPropertyValue("margin-right").slice(0, -2))) + Math.round(Number(window.getComputedStyle(document.querySelector("#product-table-2-1"), null).getPropertyValue("margin-left").slice(0, -2)));
        document.querySelector(".ulProduct_2").style.marginLeft = window.innerWidth + marginProduct * 4 + "px";
    }

    function viewRaitedColl() {
      let timer = 0;
      for(let i = 1; i <= props.product.length; i++){
        timer = timer + 300;
        setTimeout(() => document.querySelector("#product" + i).style.marginTop = "-20px", timer)
      }
    }

    useEffect(() => {
      showText_1();
      viewNewColl();
      rightUl_2();
      onloadUseEff();
    }, [])


    setInterval( window.onload = () => loadItem(".contNameThi", productBlockSecondView), 200);
    setInterval( window.onload = () => loadItem(".nameForth", brendsMainView), 200);
    
    
    

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