import React from "react";
import DnDContainer from '../DnDContainer';
import './DnDComponent.css';
import ContainerDimensions from 'react-container-dimensions';

export default class DnDComponent extends React.Component {

  

render() {

  return (
  	<div className="full-width-height">
    <ContainerDimensions>
    { ({ width, height }) => <DnDContainer  data={this.props.data} dragAction={this.props.dragAction} width={width} height={height}/> }
    </ContainerDimensions>  
    </div>
    
    );
}
}

