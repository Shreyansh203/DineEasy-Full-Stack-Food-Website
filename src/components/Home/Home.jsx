// import React, { useEffect, useState } from 'react';
// import Card from './Card';
// import './Home.css'; // Import custom CSS

// export default function Home() {
//     // States
//     const [foodcat, setFoodCat] = useState([]);
//     const [fooditem, setFoodItem] = useState([]);
//     const [search, setSearch] = useState("");

//     // Fetch data from API
//     const loadData = async () => {
//         let response = await fetch("http://localhost:5000/api/foodData", {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });
//         response = await response.json();
//         setFoodItem(response[0]);
//         setFoodCat(response[1]);
//     }

//     // Load data on component mount
//     useEffect(() => {
//         loadData();
//     }, [])

//     return (
//         <div className="home-container">
//             {/* Carousel */}
//             <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
//                 <div className="carousel-inner">
//                     <div className="carousel-caption" style={{ zIndex: "10" }}>
//                         <div className="d-flex justify-content-center">
//                             <input 
//                                 className="form-control me-2" 
//                                 type="search" 
//                                 placeholder="Search" 
//                                 aria-label="Search" 
//                                 style={{ borderRadius: '0.25rem 0 0 0.25rem' }} 
//                                 value={search} 
//                                 onChange={(e) => setSearch(e.target.value)}
//                             />
//                             {/* <button className="btn btn-success" type="submit" style={{ borderRadius: '0 0.25rem 0.25rem 0' }}>Search</button> */}
//                         </div>
//                     </div>
//                     <div className="carousel-item active">
//                         <img src="https://source.unsplash.com/random/800x400/?burger" className="d-block w-100" alt="..." style={{ filter: "brightness(90%)" }} />
//                     </div>
//                     <div className="carousel-item">
//                         <img src="https://source.unsplash.com/random/800x400/?pizza" className="d-block w-100" alt="..." style={{ filter: "brightness(90%)" }} />
//                     </div>
//                     <div className="carousel-item">
//                         <img src="https://source.unsplash.com/random/800x400/?pasta" className="d-block w-100" alt="..." style={{ filter: "brightness(90%)" }} />
//                     </div>
//                 </div>
//                 <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//                     <span className="carousel-control-prev-icon" aria-hidden="true" />
//                     <span className="visually-hidden">Previous</span>
//                 </button>
//                 <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//                     <span className="carousel-control-next-icon" aria-hidden="true" />
//                     <span className="visually-hidden">Next</span>
//                 </button>
//             </div>

//             {/* Food Items */}
//             <div className="container">
//                 {foodcat.length > 0 ? (
//                     foodcat.map((category) => (
//                         <div key={category._id} className="category-section">
//                             <div className='fs-3 m-3 category-title'>{category.CategoryName}</div>
//                             <hr className="category-divider" />
//                             <div className="row">
//                                 {fooditem.length > 0 && fooditem
//                                     .filter((item) => (item.CategoryName === category.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
//                                     .map(filteredItem => (
//                                         <div key={filteredItem._id} className="col-md-3 mb-3">
//                                             <Card 
//                                                 //foodname={filteredItem.name}
//                                                 options={filteredItem.options[0]}
//                                                 //imgSrc={filteredItem.img}
//                                                 fooditem = {filteredItem}
//                                             />
//                                         </div>
//                                     ))}
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     <div>Loading...</div>
//                 )}
//             </div>
//         </div>
//     );
// }
import React, { useEffect, useState } from 'react';
import Card from './Card';
import './Home.css'; // Import custom CSS

export default function Home() {
    // States
    const [foodcat, setFoodCat] = useState([]);
    const [fooditem, setFoodItem] = useState([]);
    const [search, setSearch] = useState("");

    // Fetch data from API
    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/foodData", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        response = await response.json();
        setFoodItem(response[0]);
        setFoodCat(response[1]);
    }

    // Load data on component mount
    useEffect(() => {
        loadData();
    }, [])

    return (
        <div className="home-container">
            {/* Carousel */}
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-caption" style={{ zIndex: "10" }}>
                        <div className="d-flex justify-content-center">
                            <input 
                                className="form-control me-2" 
                                type="search" 
                                placeholder="Search" 
                                aria-label="Search" 
                                style={{ borderRadius: '0.25rem 0 0 0.25rem' }} 
                                value={search} 
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            {/* <button className="btn btn-success" type="submit" style={{ borderRadius: '0 0.25rem 0.25rem 0' }}>Search</button> */}
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/800x400/?burger" className="d-block w-100" alt="..." style={{ filter: "brightness(90%)" }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/800x400/?pizza" className="d-block w-100" alt="..." style={{ filter: "brightness(90%)" }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/800x400/?pasta" className="d-block w-100" alt="..." style={{ filter: "brightness(90%)" }} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Food Items */}
            <div className="container">
                {foodcat.length > 0 ? (
                    foodcat.map((category) => (
                        <div key={category._id} className="category-section">
                            <div className='fs-3 m-3 category-title'>{category.CategoryName}</div>
                            <hr className="category-divider" />
                            <div className="row">
                                {fooditem.length > 0 && fooditem
                                    .filter((item) => (item.CategoryName === category.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                                    .map(filteredItem => (
                                        <div key={filteredItem._id} className="col-md-3 mb-3">
                                            <Card 
                                                foodname={filteredItem.name}
                                                options={filteredItem.options[0]}
                                                imgSrc={filteredItem.img}
                                                fooditem={filteredItem}
                                            />
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </div>
    );
}
