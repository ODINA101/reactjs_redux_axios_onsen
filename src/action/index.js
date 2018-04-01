import axios from "axios";



export function fetchdata(store) {

    axios.get("https://jsonplaceholder.typicode.com/photos").then(response => {
        store.dispatch({type:"GOT_DATA",payload:response.data})
    })



}