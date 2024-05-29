import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const ProductCard = ({ product }) => {

    const { id, brand, thumbnail, category, description, price } = product || {}

    const handleAddToFavorite = () => {
        const favoriteItemsArray = [];

        const favoriteItem = JSON.parse(localStorage.getItem('favorites'))

        if (!favoriteItem) {
            favoriteItemsArray.push(product)
            localStorage.setItem('favorites', JSON.stringify(favoriteItemsArray))
            Swal.fire({
                icon: "success",
                title: "Wow...",
                text: "Added Successfully",

            });
        }
        else {

            const isExist = favoriteItem.find(product => product.id == id)

            if (!isExist) {
                favoriteItemsArray.push(...favoriteItem, product)
                localStorage.setItem('favorites', JSON.stringify(favoriteItemsArray))
                Swal.fire({
                    icon: "success",
                    title: "Wow...",
                    text: "Added Successfully",


                }).then(() => {
                    // Redirect to the homepage or any other page
                    this.props.history.push('/'); // Replace "/home" with the URL of your homepage
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Already Added",

                });

            }

        }

    }

    return (
        <div>
            <div className='py-52 h-[80vh] flex justify-center items-center'>
                <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row">
                    <div
                        className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">

                        <img
                            src={thumbnail}
                            alt="card-image" className=" w-full h-52" />
                    </div>
                    <div className="p-6">
                        <h6
                            className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                            {brand}
                        </h6>
                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            {category}
                        </h4>
                        <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                            {description}
                        </p>
                        <p>Price: {price}</p>
                        <Link>
                            <button onClick={handleAddToFavorite}
                                className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center border bg-slate-400 text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                                type="button">
                                Add to favorite<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                    stroke-width="2" className="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
