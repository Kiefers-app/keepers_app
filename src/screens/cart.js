import React,{useState} from 'react';
import { AdvanceNav } from '../components/navigation';



const CartPage = () =>{

const [cart,getCart] = useState([]);




    return (
        <div>
<AdvanceNav />


<div className='p-4'>

{
    cart.length === 0 ? (
        <p className='text-xl text-gray-500 font-medium'>Cart is empty</p>
    ):(
        <p className='text-2xl font-medium text-gray-500'>Cart is full</p>
    )
}


</div>

        </div>
    )
}


export default CartPage;