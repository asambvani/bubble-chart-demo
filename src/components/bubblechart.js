import React from 'react'
import * as d3 from 'd3'


class BubbleChart extends React.Component{
  componentDidMount(){

  }
  render(){
    return (
      <div>
        <svg width="720" height="120" syle="background-color:black">
          <circle cx="40" cy="60" r="10"></circle>
          <circle cx="80" cy="60" r="10"></circle>
          <circle cx="120" cy="60" r="10"></circle>
        </svg>
      </div>
    )
  }
}

export default BubbleChart
