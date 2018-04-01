

const initialstate = {
    albums:[]
}



export default (state=initialstate,action) => {
    switch(action.type) {
        case "GOT_DATA":
        state.albums = action.payload
           return state;
        break;
    default:
   return state
           
    }
    
}