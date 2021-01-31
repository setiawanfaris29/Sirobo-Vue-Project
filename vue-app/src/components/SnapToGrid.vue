<template>
  <body>
  </body>
</template>

<script>
import * as d3 from "d3";
export default {
  name: "SnapToGrid",
};

var width = 960,
  height = 500,
  resolution = 10,
  r = 10;

var points = d3.range(10).map(function() {
  return {
    x: round(Math.random() * width, resolution),
    y: round(Math.random() * height, resolution),
  };
});


var drag = d3.behavior
  .drag()
  .origin(function(d) {
    return d;
  })
  .on("drag", dragged)

var svg1 = d3.select("body")
.append("g")
.attr("width", 200)
.attr("height", 100)

svg1.append("text")
.data(points)
.text("name")
.attr("x", function(d) {return d.x;})
.attr("y", function(d) {return d.y;})
.style("fill", "black")



var svg = d3
  .select("body")
  .append("svg")
  .attr("width", `0 0 300 600`)
  // .attr("width", width)
  .attr("height", height)
  // .attr("width", `0 0 300 600`)
  // .attr("height", height);



svg
  .selectAll(".vertical")
  .data(d3.range(1, width / resolution))
  .enter()
  .append("line")
  .attr("class", "vertical")
  .attr("x1", function(d) {
    return d * resolution;
  })
  .attr("y1", 0)
  .attr("x2", function(d) {
    return d * resolution;
  })
  .attr("y2", height)
  .attr({
    "stroke": "black",
    "stroke-width": "1px",
  });

svg
  .selectAll(".horizontal")
  .data(d3.range(1, height / resolution))
  .enter()
  .append("line")
  .attr("class", "horizontal")
  .attr("x1", 0)
  .attr("y1", function(d) {
    return d * resolution;
  })
  .attr("x2", width)
  .attr("y2", function(d) {
    return d * resolution;
  })
  .attr({
    "stroke": "black",
    "stroke-width": "1px",
  });

svg
  .selectAll("circle")
  .data(points)
  .enter()
  .append("circle")
  .attr("cx", function(d) {
    return d.x;
  })
  .attr("cy", function(d) {
    return d.y;
  })
  .attr("r", r)
  .call(drag)
  .style("fill", "steelblue")

  

function dragged(d) {
  d.x = d3.event.x,
  d.y = d3.event.y
 
    var gridX = round(Math.max(r, Math.min(width - r, d.x)), resolution)
    var gridY = round(Math.max(r, Math.min(height - r, d.y)), resolution);

  d3.select(this)
    .attr("cx", (d.x = gridX ))
    .attr("cy", (d.y = gridY ))
    // .attr("transform", function(){ return "translate(" + d3.event.x + "," + d3.event.y + ")"})
}


function round(p, n) {
  return p % n < n / 2 ? p - (p % n) : p + n - (p % n);
}
</script>

<style scoped>

body{
  width: 100%;
  height: 100%;
  display: grid;
  position: relative;
  align-content: center;
  justify-content: center;
}

svg {
  box-sizing: border-box;
  border: 1px solid rgb(112, 112, 112);
}

circle {
  stroke: rgb(95, 176, 228);
  stroke-width: 1;
  fill: rgba(205, 246, 255, 0.3);
}

line {
  stroke: rgb(102, 102, 102);
  stroke-width: 1px;
  shape-rendering: crispEdges;
}
</style>
