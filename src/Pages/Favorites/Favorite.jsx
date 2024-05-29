import React from 'react';

const Favorite = ({ favorite }) => {
    const { id, brand, thumbnail, category, description } = favorite || {}
    return (
        <div>
            <div className=' flex justify-center items-center'>
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

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Favorite;