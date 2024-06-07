import React from 'react'

function Card() {
    return (
        <>
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mt-6 mx-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
                <img
                    className="w-full h-48 object-cover"
                    src="/img/card-top.jpg"
                    alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                    <div className="font-bold text-2xl mb-2 text-white">The Coldest Sunset</div>
                    <p className="text-gray-200 text-base mb-4">
                        Important text
                    </p>
                    <div className="flex items-center">
                        <select className="m-2 h-10 bg-green-500 text-white rounded-lg px-3 py-1 border-2 border-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 shadow-md transition-transform duration-200 transform hover:scale-105 hover:bg-green-600">
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                );
                            })}
                        </select>
                        <select className="m-2 h-10 bg-green-500 text-white rounded-lg px-3 py-1 border-2 border-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 shadow-md transition-transform duration-200 transform hover:scale-105 hover:bg-green-600">
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>
                        <div className="m-2 text-xl font-semibold text-white">
                            Total Price
                        </div>
                    </div>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #photography
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #travel
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #winter
                    </span>
                </div>
            </div>
        </>
    )
}

export default Card