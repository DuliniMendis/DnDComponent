import React, { Component } from 'react';
import InputBox from './components/InputBox';
import DnDComponent from './components/DnDComponent';
import './App.css';




export default class App extends Component {
  constructor(){
    super();
    this.state={
      data : [{
              code:0,
              label:"Applied",
              items:[{
                code:0,
                label:"Apple"
              },
              {
                code:1,
                label:"Orange"
              }]
              },
              {
              code:1,
              label:"Screened",
              items:[]
              },
              {
              code:2,
              label:"Interviewed",
              items:[]
              },
              {
              code:3,
              label:"Shortlisted",
              items:[]
              },
              {
              code:4,
              label:"Offer",
              items:[]
              },
              {
              code:5,
              label:"Placed",
              items:[]
              }
    ]
    }
  }

 handleDrag (newData) {
   this.setState({data:newData});
}



  render() {
    return (
      <div className="App">

       <DnDComponent id={0} data={this.state.data} dragAction={this.handleDrag.bind(this)}/>

      
      </div>
      );
  }
}

// <div className="wrapper">


//       <InputBox id={0}/>
//       <InputBox id={1}/>
//       <InputBox id={2}/>
//       <InputBox id={3}/>
//       <InputBox id={4}/>
//       <InputBox id={5}/>
//       <InputBox id={6}/>
//       <InputBox id={7}/>
//       <InputBox id={8}/>
//       <InputBox id={9}/>
//       <InputBox id={10}/>
//       <InputBox id={11}/>
//       <InputBox id={12}/>

//       </div>
