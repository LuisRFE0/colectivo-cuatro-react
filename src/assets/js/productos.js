function loadStorageSampleData() {
    if (!localStorage.getItem("products")) {
        const sampleProducts = [
            {
                "id": 461196,
                "name": "Bolsa Willys",
                "descriptions": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur quisquam ipsum, cupiditate, at, quaerat nobis debitis error eligendi veniam delectus ad ut. Dolor hic quasi possimus accusamus mollitia, est magni?",
                "images": "./src/assets/images/products-images/bolsa-willys.jpg",
                "price": 299,
                "stocks": 30
            },
            {
                "id": 35345,
                "name": "Bolsa Horizonte",
                "descriptions": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur quisquam ipsum, cupiditate, at, quaerat nobis debitis error eligendi veniam delectus ad ut. Dolor hic quasi possimus accusamus mollitia, est magni?",
                "images": "./src/assets/images/products-images/bolsa-horizonte.jpg",
                "price": 299,
                "stocks": 30
            },
            {
                "id": 65613153,
                "name": "Playera Antidepresivos",
                "descriptions": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur quisquam ipsum, cupiditate, at, quaerat nobis debitis error eligendi veniam delectus ad ut. Dolor hic quasi possimus accusamus mollitia, est magni?",
                "images": "./src/assets/images/products-images/playera-antidepresivos-2.jpg",
                "price": 299,
                "stocks": 30
            },
            {
                "id": 63513,
                "name": "Playera Benoni",
                "descriptions": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur quisquam ipsum, cupiditate, at, quaerat nobis debitis error eligendi veniam delectus ad ut. Dolor hic quasi possimus accusamus mollitia, est magni?",
                "images": "./src/assets/images/products-images/playera-benoni-2.jpg",
                "price": 299,
                "stocks": 30
            },
            {
                "id": 861352,
                "name": "Playera Boyera",
                "descriptions": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur quisquam ipsum, cupiditate, at, quaerat nobis debitis error eligendi veniam delectus ad ut. Dolor hic quasi possimus accusamus mollitia, est magni?",
                "images": "./src/assets/images/products-images/playera-boyera-2.jpg",
                "price": 299,
                "stocks": 30
            },
            {
                "id": 136813,
                "name": "Playera Jacarandas Blanca",
                "descriptions": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur quisquam ipsum, cupiditate, at, quaerat nobis debitis error eligendi veniam delectus ad ut. Dolor hic quasi possimus accusamus mollitia, est magni?",
                "images": "./src/assets/images/products-images/playera-jacarandas-blanca.jpg",
                "price": 299,
                "stocks": 30
            },
            {
                "id": 1384815,
                "name": "Playera Masuku",
                "descriptions": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur quisquam ipsum, cupiditate, at, quaerat nobis debitis error eligendi veniam delectus ad ut. Dolor hic quasi possimus accusamus mollitia, est magni?",
                "images": "./src/assets/images/products-images/playera-masuku-2.jpg",
                "price": 299,
                "stocks": 30
            },
            {
                "id": 63313,
                "name": "Playera Vocho Amarilla",
                "descriptions": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur quisquam ipsum, cupiditate, at, quaerat nobis debitis error eligendi veniam delectus ad ut. Dolor hic quasi possimus accusamus mollitia, est magni?",
                "images": "./src/assets/images/products-images/playera-vocho-amarilla.jpg",
                "price": 299,
                "stocks": 30
            },
            {
                "id": 62638613,
                "name": "Playera Jacarandas Negro",
                "descriptions": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur quisquam ipsum, cupiditate, at, quaerat nobis debitis error eligendi veniam delectus ad ut. Dolor hic quasi possimus accusamus mollitia, est magni?",
                "images": "./src/assets/images/products-images/playera-jacarandas-negro.jpg",
                "price": 299,
                "stocks": 30
            },
            {
                "id": 633134,
                "name": "Playera Vocho Rosa",
                "descriptions": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur quisquam ipsum, cupiditate, at, quaerat nobis debitis error eligendi veniam delectus ad ut. Dolor hic quasi possimus accusamus mollitia, est magni?",
                "images": "./src/assets/images/products-images/playera-vocho-rosa.jpg",
                "price": 299,
                "stocks": 30
            }


        ];
        localStorage.setItem("products", JSON.stringify(sampleProducts));
    }
}

