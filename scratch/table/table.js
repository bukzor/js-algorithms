var matrix = [
    [11975,  5871, 8916, 2868],
    [ 1951, 10048, 2060, 6171],
    [ 8010, 16145, 8090, 8045],
    [ 1013,   990,  940, 6907]
];

var tr = d3.select("body").append("table").selectAll("tr")
    .data(matrix)
.enter().append("tr");

var td = tr.selectAll("td")
    .data(d3.identity)
.enter().append("td")
    .text(String);
