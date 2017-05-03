import React from "react";
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Panel from "../DnDPanel";
import './DnDContainer.css';


class DnDContainer extends React.Component {

 constructor(props) {
  super(props);

  this.state = {
   data : props.data
 }

}


render() {

  return (

    <div className="dnd-container">

    {this.state.data.map((item,i) => (
      <Panel 
      key={"panel"+i} 
      position={i}
      code={item.code} 
      label={item.label}
      items={item.items}
      data={this.props.data}
      dragAction={this.props.dragAction}
      width={this.props.width}
      numPanels={this.state.data.length} />
      ))}

    </div>
    
    
    );
}
}


export default DragDropContext(HTML5Backend)(DnDContainer)

