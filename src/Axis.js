import React, { Component } from 'react'
import './Axis.css'

import gear from './gear.svg'



class Axis extends Component {
  constructor(props){
    super(props)
    this.name = "Axis " + props.index;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({position: nextProps.position})
  }

  render() {

    return (
      <div className="Axis" state={this.props.axisState}>
      <div className="Grid">
      <img src={gear} className="AxisIcon" alt="gear" />
        <div className="Position">{this.props.position}.00 ft</div>
        <h3 className="AxisTitle">{this.name}</h3>
        <div className="stylie"><div className="dot"/></div>

      </div>

      </div>
    );
  }
}

export default Axis;
