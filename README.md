This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
This also uses the following npm packages:
- "react-container-dimensions": "^1.3.2",
- "react-dnd": "^2.3.0",
- "react-dnd-html5-backend": "^2.3.0",
- "react-onclickoutside": "^5.11.1"

An example use case is shown below. Make sure the input data structure is the same with exactly the same property names.

```
import React, { Component } from 'react';
import DnDComponent from 'DnDComponent';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      data : [{
              code:0,
              label:"Requested",
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
              label:"Approved",
              items:[]
              },
              {
              code:2,
              label:"Ordered",
              items:[]
              },
              {
              code:3,
              label:"Received",
              items:[]
              },
              {
              code:4,
              label:"Used",
              items:[]
              }
    ]
    }
  }

 handleDrag = (newData) => {
   this.setState({data:newData});
}



  render() {
    return (
      <div style={{width:"100vw",height:"100vh"}}>
       <DnDComponent id={0} data={this.state.data} dragAction={this.handleDrag}/>      
      </div>
      );
  }
}
```
