import React from 'react';

const Header = function(){


    return(
        <header>
            <div className="topMenu">
                <div className="conteinerHeader">
                    <div className="logo"></div>
                    <form className='formTopMenu'>
                        <input 
                        type="seach"
                        className='seachInput'
                        placeholder='Victorias Secret Bombshell Eau de Parfum...'
                        />
                        <button 
                        className='seachButton'
                        >Find</button>
                    </form>
                    <div className="contTopHelp">
                        <div className="helpBtn">Help</div>
                    </div>
                    <div className="cart">
                        <img className='imgCart' src=""/>
                        <button className='myCart'>Cart</button>
                    </div>
                </div>
            </div>    
        </header>
      )
}

export default Header;