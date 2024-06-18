
const initialData = {
    prod_name : ['Apple iPhone 15 (Black, 128 GB)','Apple iPhone 15 (Black, 128 GB)'],
    prod_rate : ['₹67,999'],
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