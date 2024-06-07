// import React from 'react';
// import { useDispatchCart , useCart } from '../ContextReducer';
// function Card(props) {
//     let options = props.options;
//     let price = Object.keys(options);
//     let food = props.fooditem;
//     const handleaddtocart = ()=>{

//     }
//     return (
//         <div className="max-w-lg w-full rounded-lg overflow-hidden shadow-lg mt-6 mx-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transform transition-transform duration-200 hover:scale-105">
//             <img
//                 className="w-full h-32 object-cover"
//                 src={props.food.img}
//                 alt="Sunset in the mountains"
//                 style={{ height: "150px" }}
//             />
//             <div className="px-6 py-4">
//                 <div className="font-bold text-2xl mb-2 text-white">{props.food.name}</div>
//                 <p className="text-gray-200 text-base mb-4">
//                     Important text
//                 </p>
//                 <div className="flex items-center">
//                     <select className="mr-1 h-10 bg-green-500 text-white rounded-lg px-1 py-1 border-2 border-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 shadow-md transition-transform duration-200 transform hover:scale-105 hover:bg-green-600" style={{ width: '5rem' }}>
//                         {Array.from(Array(6), (e, i) => {
//                             return (
//                                 <option key={i + 1} value={i + 1}>{i + 1}</option>
//                             );
//                         })}
//                     </select>
//                     <select className="mr-1 h-10 bg-green-500 text-white rounded-lg px-1 py-1 border-2 border-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 shadow-md transition-transform duration-200 transform hover:scale-105 hover:bg-green-600" style={{ width: '6rem' }}>
//                         {price.map((data) => {
//                             return <option key={data} value={data}>{data}</option>
//                         })}
//                     </select>
//                     <div className="text-xl font-semibold text-white ml-2">
//                         Total Price
//                     </div>
//                 </div>
//                 <hr />
//                 <button className='btn btn-success justify-center ms-2' onClick={handleaddtocart}>Add to Cart</button>
//             </div>
//         </div>
//     );
// }

// export default Card;

// // usecontext => prop drilling

import React, { useState } from 'react';

function Card(props) {
    const options = props.options;
    const price = Object.keys(options);
    return (
        <div className="max-w-lg w-full rounded-lg overflow-hidden shadow-lg mt-6 mx-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transform transition-transform duration-200 hover:scale-105">
            <img
                className="w-full h-32 object-cover"
                src={props.fooditem.img}
                alt="Food"
                style={{ height: "150px" }}
            />
            <div className="px-6 py-4">
                <div className="font-bold text-2xl mb-2 text-white">{props.fooditem.name}</div>
                <p className="text-gray-200 text-base mb-4">
                    Important text
                </p>
                <div className="flex items-center">
                    <select
                        className="mr-1 h-10 bg-green-500 text-white rounded-lg px-2 py-1 border-2 border-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 shadow-md transition-transform duration-200 transform hover:scale-105 hover:bg-green-600"
                        style={{ width: '5rem' }}
                        //value={quantity}
                    >
                        {Array.from(Array(6), (e, i) => {
                            return (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                            );
                        })}
                    </select>
                    <select
                        className="mr-1 h-10 bg-green-500 text-white rounded-lg px-2 py-1 border-2 border-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 shadow-md transition-transform duration-200 transform hover:scale-105 hover:bg-green-600"
                        style={{ width: '6rem' }}
                        //value={size}
                    >
                        {price.map((data) => {
                            return <option key={data} value={data}>{data}</option>;
                        })}
                    </select>
                    <div className="text-xl font-semibold text-white ml-2">
                        {/* {options[selectedOption] ? `Total Price: $${options[selectedOption] * quantity}` : 'Total Price'} */}
                        Hello
                    </div>
                </div>
                <hr />
                <button className='btn btn-success justify-center ms-2'>Add to Cart</button>
            </div>
        </div>
    );
}

export default Card;
