import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as d3 from 'd3'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

var circleData = [
  { "cx": 20, "cy": 20, "radius": 20, "color" : "green" },  { "cx": 70, "cy": 70, "radius": 20, "color" : "purple" }];


 var rectangleData = [
   { "rx": 110, "ry": 110, "height": 30, "width": 30, "color" : "blue" },
   { "rx": 160, "ry": 160, "height": 30, "width": 30, "color" : "red" }];

var svgContainer = d3.select("body").append("svg")
                                     .attr("width",200)
                                     .attr("height",200);

var circles = svgContainer.selectAll("circle")
                          .data(circleData)
                           .enter()
                           .append("circle");

var circleAttributes = circles
                        .attr("cx", function (d) { return d.cx; })
                       .attr("cy", function (d) { return d.cy; })
                        .attr("r", function (d) { return d.radius; })
                       .style("fill", function (d) { return d.color; });

var rectangles = svgContainer.selectAll("rect")
                             .data(rectangleData)
                             .enter()
                             .append("rect");

var rectangleAttributes = rectangles
                           .attr("x", function (d) { return d.rx; })
                           .attr("y", function (d) { return d.ry; })
                           .attr("height", function (d) { return d.height; })
                           .attr("width", function (d) { return d.width; })
                           .style("fill", function(d) { return d.color; });


                           // Fake JSON data
  var json = {"countries_msg_vol": {
    "CA": 170, "US": 393, "BB": 12, "CU": 9, "BR": 89, "MX": 192, "PY": 32, "UY": 9, "VE": 25, "BG": 42, "CZ": 12, "HU": 7, "RU": 184, "FI": 42, "GB": 162, "IT": 87, "ES": 65, "FR": 42, "DE": 102, "NL": 12, "CN": 92, "JP": 65, "KR": 87, "TW": 9, "IN": 98, "SG": 32, "ID": 4, "MY": 7, "VN": 8, "AU": 129, "NZ": 65, "GU": 11, "EG": 18, "LY": 4, "ZA": 76, "A1": 2, "Other": 254
  }};
