import React, { Component } from 'react';

class RangeSlider extends Component {
  constructor(props){
    super(props);
    this.track = React.createRef();
    this.val = React.createRef();
    this.style = {
      display: 'grid',
      placeItems: 'center'
    }
  }

  render() {
    const {props, track, val, style} = this;
    const {background, width, height, value} = props;
    return <div
      id={'rangeSlider'}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: background,
        ...style,
      }}
      >
        <span ref={val}
          style={{display: 'inline-flex',
          alignItems: 'center'}}
          >{value}</span>
        <span
          ref={track}
          style={
            {position: 'absolute',
             height: `${height}px`,
             width: '30px',
             backgroundColor: 'blue'}
          }
        >
        </span>
    </div>;
  }
}

RangeSlider.defaultProps = {
    width: '300',
    height: '30',
    value: 10,
    background: '#D2D2D2',
}

export default RangeSlider;
