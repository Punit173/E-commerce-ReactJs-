
const initialData = {
    prod_name : ['Apple iPhone 15 (Black, 128 GB)','Samsung Galaxy Tab S6 Lite 26.31 cm (10.4 inch), S-Pen in Box, Slim and Light, Dolby Atmos Sound, 4 GB RAM, 64 GB ROM, Wi-Fi Tablet, Gray'],
    prod_rate : ['₹67,999','₹22,999'],
    prod_url : [''],
    prod_quantity : []
}


const Reducer =  (state=initialData,action)=>{
    switch (action.type) {
        case 'Upload':
            return {
                ...state,
                prod_name : [...state,action.payload.name],
                prod_rate : [...state,action.payload.price],
                prod_url : [...state,action.payload.url] 
            }
    
        default:
            return state;
    }
    
}

export default Reducer;