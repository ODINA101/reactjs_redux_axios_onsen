import React, { Component } from 'react';
import './App.css';
import {fetchdata} from "./action";
import { Page, Toolbar, Button,Card,ProgressCircular } from 'react-onsenui';
import Zoom from 'react-reveal/Zoom';
import Modal from 'react-responsive-modal';


class App extends Component {
constructor(props) {
  super(props);
  fetchdata(this.props.store);
this.state = {
  albums:[],
  loading:true,
  load:5,
  open:false,
  img:""
}
this.handleScroll = this.handleScroll.bind(this);
this.props.store.subscribe(() => {
  console.log(this.props.store.getState())
  this.setState({albums:this.props.store.getState().albums,loading:false})
});

}
 






handleScroll() {
  const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
  const body = document.body;
  const html = document.documentElement;
  const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
  const windowBottom = windowHeight + window.pageYOffset;
  if (windowBottom >= docHeight) {
   const message = 'bottom reached'

    console.log(message)
    this.setState({
      load:this.state.load+5
    })
    
  } else {
    this.setState({
      message:'not at bottom'
    });
  }
}

componentDidMount() {
  console.log("kii")
  window.addEventListener("scroll", this.handleScroll);
}

componentWillUnmount() {
  window.removeEventListener("scroll", this.handleScroll);
}




preloader() {
  return <img src={require("../src/spinner.gif")} />;
}




onOpenModal = (data) => {
  this.setState({ open: true,img:data});
};

onCloseModal = () => {
  this.setState({ open: false });
};

  render() {
    const { open } = this.state;
if(this.state.loading) {
      return (
      <div className="App">
       loding
      </div>
  );
}else{

  return (
     <div className="albums" style={{textAlign:"center"}}>
     
     <ul>
     {

this.state.albums.slice(0,this.state.load).map((item)=> {
 
  return (
    <Zoom>
  <li>  <Card onClick={()=>this.onOpenModal(item.url)} style={{width:"300px",height:"350px"}}>
    <img className="photos" style={{width:"100%",marginTop:"0px"}} src={item.url} />

   <p style={{fontSize:"15px"}}>{item.title}</p>
   </Card> 
   </li>
   </Zoom>
  )



})

     } </ul> 
     <Zoom>
 <Modal open={open} onClose={this.onCloseModal} little>
    <img className="photos" style={{width:"100%",marginTop:"0px"}} src={this.state.img} />
          <h2>Simple centered modal</h2>
        </Modal>
        </Zoom>
<ProgressCircular indeterminate />
       
       </div>
);
}





  }
}

export default App;
