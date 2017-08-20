import React from 'react'
import * as d3 from 'd3'

class BubbleChart extends React.Component{
  componentDidMount(){
    let svg = d3.selectAll("svg")
    let circles = svg.selectAll("circle").data(this.props.data)
    .enter()
    .append("circle")

    circles.attr("cx", function(d,i){
      return (i*50) + d*5
    })
    .attr("cy", 100)
    .attr("r", function(d){ return d})
    .attr("fill", "grey")
    .attr("stroke", "blue")
    .attr("stroke-width", 3)

  }
  render(){


    return (
      <div>
        <svg width="720" height="500">
        </svg>
      </div>
    )
  }
}

export default BubbleChart
