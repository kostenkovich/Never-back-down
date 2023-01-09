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

    useEffect(() => {
      showText_1();
      viewNewColl();
    }, [])
    
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
                    <div className="nameSecondBlock">Popular flavors</div>
                  </div>
                  <ul className='ulProduct'>
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