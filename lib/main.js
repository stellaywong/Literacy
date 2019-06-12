document.addEventListener("DOMContentLoaded", () => {
    d3.select("body").append("svg")
        .attr("width", 5000)
        .attr("height", 5000)
        .append("circle")
        .attr("cx", 25)
        .attr("cy", 25)
        .attr("r", 250)
        .style("fill", "turquoise");

    var loc = window.location.pathname;
    var dir = loc.substring(0, loc.lastIndexOf('/'));
    console.log(dir)

})