import { useContext } from 'react';
import { WishItemsContext } from '../../Context/WishItemsContext';
import WishCard from '../Card/Wishlist/WishCard';
import './index.css'

const Wishlist = () => {
    const wishItems = useContext(WishItemsContext)
    // console.log("itempm",wishItems.items[0]);

    return ( 
        <div className="wishlist">
            <div className="wishlist__container">
                <div className="wishlist__header"><h2>Your Wishlist</h2></div>
                <div className="wishlist__items__container">
                    <div className="wishlist__items">   
                    {wishItems.items.length>0? wishItems.items.map((item) => <WishCard key={item.id} item={item}/>) : <>No items</>}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Wishlist;