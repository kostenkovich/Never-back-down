import React, {useEffect} from 'react';

import { Link } from 'react-router-dom';

const Product_2 = function(props){

    function secondBlock(){
        let height_block_2 = document.querySelector(".product").offsetHeight;
        document.querySelector(".conteinerProduct").style.height = (height_block_2 + 130 + "px");
    }

    useEffect(() => {
        secondBlock();
    }, [])
    

    return(
        <Link to={"/product/" + props.product.id}  id={"product-table-2-" + props.product.id} className={"product-table-2-all-el"}>
            <div className="product">
                <img className="imgProduct" src={props.product.photo.name} height={props.product.photo.height} width={props.product.photo.width + ""}/>
                <div className="nameProduct">{props.product.name}</div>
                <div className="price">{props.product.price}$</div>
                <button className='buyProduct'>Buy now</button>
            </div>
        </Link>
      )
}

export default Product_2;