import React, {useState} from 'react'; 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import storeItems from '../data/StopItems';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import ItemList from '../components/ItemList';
import Basket from '../components/Basket';


const StoreContainer = function () {
    const [items, setItems] = useState(storeItems); 
    const [basketItems, setBasketItems] = useState([])


    const handleItems = (item) => {
        if(!basketItems.includes(item)) {
            setBasketItems([...basketItems, item])
        }
    }

    const checkIfAdded = (item) => {
        if(basketItems.includes(item)) {
            return true
        } else {
            return false
        }
    }


    return (
        <Router>
            <Header />
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/kitchen-dining" element={<ItemList items={items} handleItems={handleItems} checkIfAdded={checkIfAdded}/>}></Route>
                    <Route path='/basket' element={<Basket basketItems={basketItems}/>}></Route>
                </Routes>
        </Router>
    )
}

export default StoreContainer; 