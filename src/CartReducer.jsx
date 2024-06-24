const initialCart = {
    favitems: [
        {
            itemName: "GoPro HERO12 Waterproof Action Camera with Front & Rear LCD Screens",
            itemImage: "https://m.media-amazon.com/images/I/41dr2z-ClFL._SX300_SY300_QL70_FMwebp_.jpg",
            itemPrice: "36,990",
        },
        {
            itemName: "Samsung Galaxy Tab S9 FE 27.69 cm (10.9 inch) Display, RAM 6 GB, ROM 128 GB Expandable",
            itemImage: "https://m.media-amazon.com/images/I/31+JRXdZbeL._SY300_SX300_.jpg",
            itemPrice: "34,999",
        },
        {
            itemName: "realme NARZO N63 (Leather Blue, 4GB RAM+64GB Storage) 45W Fast Charge ",
            itemImage: "https://m.media-amazon.com/images/I/81JjTw28j8L._SL1500_.jpg",
            itemPrice: "8,498",
        },
        {
            itemName: "Redmi A3 (Olive Green, 3GB RAM, 64GB Storage) | Premium Halo Design | 90Hz Display | Powerful 4G G36 Processor",
            itemImage: "https://m.media-amazon.com/images/I/41jNSbEamYL._SX300_SY300_QL70_FMwebp_.jpg",
            itemPrice: "6,999",
        },
    ],
}

const CartReducer = (state = initialCart, action) => {

    switch (action.type) {
        case 'Add_cart':
            return {
                ...state,
                favitems: [...state.favitems, action.payload],
            }
        case 'Delete_item':
            return {
                ...state,
                favitems: state.favitems.filter((item) => item.itemName != action.payload.itemName)
            }


        default:
            return state;
            break;
    }

    return state;
}

export default CartReducer;