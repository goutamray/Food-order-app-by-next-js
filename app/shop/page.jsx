import ShopBreadcrumb from "../components/breadCrumb/ShopBreadcrumb";
import Example from "../components/pagination/Example";
import ProductV2 from "../components/product/ProductV2";


export default function page() {
  return (
    <div >
        <ShopBreadcrumb title={"Shop"}/>

        {/* filter  products */}
        <div className="filter py-10">
          <div className="container">
            <div className="flex flex-col xl:flex-row justify-start xl:justify-between items-start xl:items-center  xl border-b-2 pb-8">
              <div>
                   <p> Showing 1–12 of 30 results </p>
              </div>
              <div>
                  <select name="" id="" className="border-1 border-gray-300 px-2 py-1  w-[250px]">
                    <option value="popularity">Sort by popularity </option>
                    <option value="rating" >Sort by average rating</option>
                    <option value="date"  >Sort by latest</option>
                    <option value="price"  >Sort by price: low to high</option>
                    <option value="price"  >Sort by price: high to low</option>
                  </select>
              </div>
            </div>
          </div>
        </div>


         {/* products All */}
         <div className="container">
          <div className="pb-5">
             <div className="productList grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 place-items-center ">
                 <ProductV2 />
                 <ProductV2 />
                 <ProductV2 />
                 <ProductV2 />
                 <ProductV2 />
                 <ProductV2 />
                 <ProductV2 />
                 <ProductV2 />    
             </div>        
          </div>
        <Example />
        </div>
    </div>
  )
}
