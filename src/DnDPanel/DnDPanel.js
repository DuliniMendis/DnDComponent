import React from "react";
import { DropTarget } from 'react-dnd';
import DnDItem from "../DnDItem";
import './DnDPanel.css';

const panelTarget = {
  drop(props,monitor,component) {
    let dndItem = monitor.getItem();

    if (props) {
         
        let data = props.data;
        let sourceCode = dndItem.parentCode;
        let destCode = props.code;
        let itemIndex = data[sourceCode].items.findIndex((item) => { return item.code===dndItem.code; });
        let item = data[sourceCode].items[itemIndex];
        data[sourceCode].items.splice(itemIndex,1);
        data[destCode].items.push(item);
   
        props.dragAction(data);

    }

  }
};


const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}


 class DnDPanel extends React.Component {

  constructor(props){
    super(props);
    this.state={
      code:props.code,
      label:props.label
    }
  }

  render() {
    let width = Math.floor(this.props.width/this.props.numPanels);
    let margin = "1px solid";
    if(this.props.position===this.props.numPanels-1)
      width = this.props.width-(this.props.numPanels-1)*width;
    else
      margin="none";
 
    const {connectDropTarget} = this.props;
    
    return connectDropTarget(
      <div className="panel-container" style={{"width":width, "marginRight":margin}}>
     
        <div className="panel" >

            <div className="panel-heading">
              <div className="header-text">
              {this.props.label}    
              </div>        
            </div>
            <div className="scrollbar" id="scrollbar-style">
              <div className="panel-body">             
                  
                    {this.props.items.map((item) => (
                          <DnDItem key={"dndi"+item.code} 
                          parentCode={this.props.code}
                          code={item.code} 
                          dragAction={this.props.dragAction}
                          label={item.label} />
                          
                      ))}         
                  
              </div>
            </div>
        </div>
      </div> 
    
    );
  }
}


const ItemTypes = {
  DNDITEM: 'dndItem'
};


export default DropTarget(ItemTypes.DNDITEM, panelTarget, collect)(DnDPanel)