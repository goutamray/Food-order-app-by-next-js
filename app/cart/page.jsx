import Image from "next/image"
import CartBreadcrumb from "../components/breadCrumb/CartBreadCrumb"
import burger from "@/public/assets/product/burger11.jpg"

// react icons 
import { FaRegTrashAlt } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";

import Rating from '@mui/material/Rating';
import Counter from "../components/counter/Counter";
import Link from "next/link";

const Cart = () => {
  return (
    <>
       <div className="cart-section ">
        <CartBreadcrumb title={"Cart"}/>

          <div className="container flex flex-col xl:flex-row  gap-4 py-5 xl:mb-5 xl:mt-5">
            <div className="col-md-8 w-2/3">
              <div className="cart-header">
                <div className="cart-left">
                  <h2 className="text-2xl font-semibold text-gray-700 "> Your Cart </h2>
                  <div className="cart-clear">
                    <div className="left">
                      <p className="text-md font-medium "> There are <span> 2 </span> products in your cart </p>
                    </div>                   
                  </div>
                </div>
              </div>
              <div className="cart-product-all">
                 <div className="table-header">
                    <table className="table ">
                      <thead>
                        <tr>
                          <th className="text-xl font-semibold "> Product </th>
                          <th className="text-xl font-semibold "> Price </th>
                          <th className="text-xl font-semibold "> Quantity </th>
                          <th className="text-xl font-semibold "> Subtotal </th>
                          <th className="text-xl font-semibold "> Delete </th>
                        </tr>
                      </thead>
                      <tbody>
                         <tr className="py-2">
                          <td> 
                            <div className="product-data flex gap-3">
                             <div className="image hidden xl:block">
                                <Image src={burger} alt="cart-photo" height={120} width={50} className="rounded-sm"/>
                             </div>
                             <div className="description">
                               <h4 className="text-md font-medium mb-0"> This is product name </h4>
                               <span> 
                                 <Rating name="read-only" value={5} readOnly size="small"/>
                              </span>
                             </div>
                            </div>
                          </td>
                          <td className="text-xl font-semibold"> 500 </td>
                          <td> 
                            <Counter /> 
                          </td>
                          <td className="text-xl font-semibold"> 500</td>
                          <td> 
                            <span> <FaRegTrashAlt className="text-2xl text-red-500 font-medium"/> </span>
                          </td>
                         </tr>

                         <tr className="py-2">
                          <td> 
                            <div className="product-data flex gap-3">
                             <div className="image">
                                <Image src={burger} alt="cart-photo" height={120} width={50} className="rounded-sm"/>
                             </div>
                             <div className="description">
                               <h4 className="text-md font-medium mb-0"> This is product name </h4>
                               <span> 
                                 <Rating name="read-only" value={5} readOnly size="small"/>
                              </span>
                             </div>
                            </div>
                          </td>
                          <td className="text-xl font-semibold"> 500 </td>
                          <td> 
                            <Counter /> 
                          </td>
                          <td className="text-xl font-semibold"> 500</td>
                          <td> 
                            <span> <FaRegTrashAlt className="text-2xl text-red-500 font-medium"/> </span>
                          </td>
                         </tr>
                      </tbody>
                    </table>
                 </div>
              </div>
              <div className="continue mt-5">
                <Link href="/" className="px-5 py-3 bg-blue-600 text-white rounded-md text-center no-underline text-xl font-semibold "> Continue Shopping </Link>
              </div>
            </div>

            <div className="col-md-4 xl:w-1/3  xl:mt-12 w-full mt-5 ">
              <div className="cart-right-part shadow p-3 rounded-md">
                  <h2 className="xl:mt-5 text-2xl font-semibold" > Cart Totals </h2>
                  <table className="table">
                     <thead> 
                        <tr>
                          <th> Subtotal </th>
                          <th> 500 TK </th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                          <td> Shipping </td>
                          <td> Flat Rate </td>
                        </tr>
                        <tr>
                          <td> Total </td>
                          <td> 500 TK </td>
                        </tr>
                     </tbody>
                  </table>
                  <Link 
                     href="/checkout" 
                     className="py-2 px-3 w-full bg-red-500 text-white rounded-md font-bold text-md flex items-center justify-center gap-3 no-underline "> 
                     Proceed To Checkout 
                     <PiSignOutBold className='cart-icon'/> 
                  </Link>
              </div>
            </div>
          </div>

       </div>
    </>
  )
}

export default Cart














