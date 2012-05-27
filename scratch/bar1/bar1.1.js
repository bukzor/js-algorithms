var data = [4, 8, 15, 16, 23, 42];
var scale = d3.scale.linear()
     .domain([0, d3.max(data)])
     .range(["0", "100%"]);


var chart = d3.select("body").append("div")
    .attr("class", "chart");

chart.selectAll("div")
     .data(data)
   .enter().append("div")
     .style("width", scale)
     .text(function(d) { return d; });
