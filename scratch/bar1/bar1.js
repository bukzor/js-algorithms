var data = [4, 8, 15, 16, 23, 42];
var x_scale = d3.scale.linear()
     .domain([0, d3.max(data)])
     .range([0, '100%']);
var y_scale = d3.scale.ordinal()
    .domain(data)
    .rangeRoundBands([0, 120], .3);

var chart = d3.select("body").append("svg")
    .attr("class", "chart")
    .attr("width", '100%')
    .attr("height", 20 * data.length + 20)
    .style("font-size", "10px")
 .append("g")
     .attr("transform", "translate(10,15)");

chart.selectAll("line")
     .data(x_scale.ticks(10))
   .enter().append("line")
     .attr("x1", x_scale)
     .attr("x2", x_scale)
     .attr("y1", 0)
     .attr("y2", 120)
     .style("stroke", "#ccc");


chart.selectAll("rect")
     .data(data)
   .enter().append("rect")
     .attr("y", y_scale)
     .attr("width", x_scale)
     .attr("height", y_scale.rangeBand());

chart.selectAll("text.rule")
     .data(x_scale.ticks(10))
   .enter().append("text")
     .attr("class", "rule")
     .attr("x", x_scale)
     .attr("y", 0)
     .attr("dy", -3)
     .attr("text-anchor", "middle")
     .text(String);

chart.selectAll("text.label")
     .data(data)
   .enter().append("text")
     .attr("class", "label")
     .attr("x", x_scale)
     .attr("y", function(d) { return y_scale(d) + y_scale.rangeBand()/2; })
     .attr("dx", -3) // padding-right
     .attr("dy", ".35em") // vertical-align: center
     .attr("text-anchor", "end") // text-align: right
     .text(String);

chart.append("line")
     .attr("y1", 0)
     .attr("y2", 120)
     .style("stroke", "#000");
