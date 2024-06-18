
const initialData = {
    prod_name : ['Apple iPhone 15 (Black, 128 GB)','Apple iPhone 15 (Black, 128 GB)'],
    prod_rate : ['₹67,999'],
    prod_url : [''],
    prod_quantity : []
}

console.log(initialData);

const Reducer =  (state=initialData,action)=>{
    switch (action.type) {
        case 'Upload':
            return {
                ...state,
                prod_name : action.payload
            }
    
        default:
            return state;
    }
    
}

export default Reducer;