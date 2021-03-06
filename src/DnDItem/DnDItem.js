import React, {PropTypes} from 'react';
import { DragSource } from 'react-dnd';
import './DnDItem.css';

const applicantSource = {
  beginDrag(props) {    
    return props;
  },

  endDrag(props, monitor, component) {
   // const item = monitor.getItem();
   // const dropResult = monitor.getDropResult();
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
    menuVisible: false
  }
}

const propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
  
};

 
class DnDItem extends React.Component {

  

  render() {


    const { connectDragSource, isDragging} = this.props;

    
    return connectDragSource(
        <div style={{ opacity: isDragging ? 0.5 : 1 }}>   
           
              <div className="dnd-item">
                <div>{this.props.label}</div>     
              </div>          
       
        </div>

       
        );
    
    

    
  }
}



const ItemTypes = {
  DNDITEM:'dndItem'
};

// Export the wrapped component:
export default DragSource(ItemTypes.DNDITEM, applicantSource, collect)(DnDItem);