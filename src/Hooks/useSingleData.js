import React, { useEffect, useState } from 'react';

const useSingleData = () => {
    const url = `https://dummyjson.com/products`

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data.products));
    }, [url]);

    return data;
};

export default useSingleData;