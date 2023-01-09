import React, {useState} from "react";

import aromo_1 from './media/img/pngwing.com(1).png';
import aromo_2 from './media/img/pngwing.com(2).png';
import aromo_3 from './media/img/pngwing.com(3).png';
import aromo_4 from './media/img/pngwing.com(4).png';


import './style/header.css'
import './style/section-main.css'

import HeaderFooter from "./components/header-footer/header-footer";
import SectionMain from "./components/section/section-main";

import { Route, Routes, Navigate} from "react-router-dom";

function App() {

    const [allProduct, setAllProduct] = useState([
      {
        id: 1,
        name: "De Larion",
        surname: "The Last of your limit version",
        price: 300,
        photo: {name: aromo_1, width: 153, height: 230},
      },
      {
        id: 2,
        name: "De Larion",
        surname: "The Last of your limit version",
        price: 300,
        photo: {name: aromo_2, width: 167, height: 230},
      },
      {
        id: 3,
        name: "De Larion",
        surname: "The Last of your limit version",
        price: 300,
        photo: {name: aromo_3, width: 173, height: 230},
      },
      {
        id: 4,
        name: "De Larion",
        surname: "The Last of your limit version",
        price: 300,
        photo: {name: aromo_4, width: 230, height: 230},
      },
    ])


  return (
    <div className="App">
      <Routes>                                                                  
            <Route path='/' element={<HeaderFooter/>}>

                <Route index element={<SectionMain product={allProduct}/>} />
                <Route path='/home' element={ <Navigate to="/" replace />} />

            </Route>
        </Routes>
    </div>
  );
}

export default App;
