const codeFlower = (graph) =>  {                                //the function d3.json receives another callback that contains an error variable. 'graph' is the graph we've been referring to.
        // if (error) throw error;                                                     // throw error in case of error
        d3.selectAll("svg > *").remove();                       // clears the screen per continent button push


    const svg = d3.select('svg'),                                       // make a selection selecting the svg
        width = +svg.attr('width'),                                     // both are determined from 5 lines up
        height = +svg.attr('height'),
        color = d3.scaleOrdinal(d3.schemeCategory20)                    // add rainbow of colors for the nodes                       // color palette available          https://bl.ocks.org/pstuffa/3393ff2711a53975040077b7453781a9     https://d3-wiki.readthedocs.io/zh_CN/master/Ordinal-Scales/

    const simulation = d3.forceSimulation()                             // call the function forceSimulation that creates the simulation object
        .force('center', d3.forceCenter(width / 2, height / 2.1))         // 2. create forces. put the nodes (x, y) in the middle of the screen (half its width and height)
        .force('collide', d3.forceCollide(function (d) { d.r * 1.5 }))  // 3. make sure the nodes don't collide      ?
        .force('charge', d3.forceManyBody()
            .strength(-95))                                            // 4. the nodes repel: the higher the negative value (of force), the further they repel.
        // .distanceMin(80)
        // .distanceMax(800)
        .force('link', d3.forceLink()                                   // link force
            // .strength(0.2)                                           // * link strength -- don't give them a strength unless you want a perfectly circular graph
            .id(function (d) {
                return d.id;                                            // the id for the link is a function: for each node, look at d's id
            }))

        .force("x", d3.forceX(width / 2))                               // 2. create forces. put the nodes (x) in the middle of the screen (half its width)
        // .force("x", d3.forceX(function (d) {
        //     return byCountry(d.group);                               // separating the nodes by their ___ (group, in this case)
        // }).strength(0.1))                                            // force of separation -- its push
        .force("y", d3.forceY(height / 2))                              // 3. create forces. put the nodes (y) in the middle of the screen (half its height)

        // .force('link', d3.layout.force().linkDistance(20));


        const link = svg.append('g')                                                // g element groups SVG shapes together
            .attr('class', 'links')
            .selectAll('line')
            .data(graph.links)
            .enter().append('line')
            .attr('stroke-width', function (d) { return Math.sqrt(d.value); });

        const node = svg.append('g')
            .attr('class', 'nodes')
            .selectAll('g')
            .data(graph.nodes)
            .enter().append('g')

        const circles = node.append('circle')
            .attr('r', function (d) {
                if ((d.r > 10) && (['Female', 'Adult', 'Gross', 'Adolescent', 'MMR'].includes(d.id.split(' ')[0]))) {
                    return (Math.log10(d.r) * 10)
                }
                else if ((d.r > 10) && (!['Female', 'Adult', 'Gross', 'Adolescent', 'MMR'].includes(d.id.split(' ')[0]))) {
                    return (d.r/2);
                }
                else {
                    return d.r/2;
                };
            })                                                              // https://stackoverflow.com/questions/20723564/d3-force-layout-how-do-i-set-the-size-of-every-node
            .attr('fill', function (d) {                                    // color
            //     if (d.group === 1000) {
            //         return '#ffff00';
            //     }
            //     else {
                    return color(d.group); 
            //     }
            })
            .attr('stroke', function (d) {                                    // color
                if (['Female'].includes(d.id.split(' ')[0])) {
                    return '#ffff00';
                }
                else if (['Adult'].includes(d.id.split(' ')[0])) {
                    return '#e75480';
                }
                else if (['MMR'].includes(d.id.split(' ')[0])) {
                    return '#000000';
                }
                else if (['Gross'].includes(d.id.split(' ')[0])) {
                    return '#32CC32';
                }
                else {
                    return '#gray';
                }
            })
            ;

        const labels = node.append('text')
            .text(function (d) {
                if (['Female'].includes(d.id.split(' ')[0])) {
                    return (d.id.slice(0, 16) + 'Rate ' + d.r + '%');
                }
                else if (['Adult'].includes(d.id.split(' ')[0])) {
                    return (d.id.slice(0, 6) + 'Female Literacy Rate ' + d.r + '%');
                }
                else if (['Gross'].includes(d.id.split(' ')[0])) {
                    return (d.id.slice(0, 22) + d.r + ' per capita');
                }
                else if (['Adolescent'].includes(d.id.split(' ')[0])) {
                    return (d.id.slice(0, 21) + 'Rate ' + d.r + '%');
                }
                else if (['MMR'].includes(d.id.split(' ')[0])) {
                    return ('Maternal Mortality Rate (' + d.r + '/100000 live births)')
                }
                else {
                    return d.id;
                }

            })
            .attr('x', -28)                                               // location of text relative to node             // distance the lettering is from the node
            .attr('y', -28)

            .attr('class', function (d) {
                if (['Female', 'Adult', 'Gross', 'MMR', 'Adolescent'].includes(d.id.split(' ')[0])) {
                    return 'hidden';
                }
                else {
                    return 'country-continent-world';
                }
            }
            )
            ;

        const images = node.append('svg:image')             // append the country's flag to the country nodes
            .attr('class', 'imgs')
            .attr('xlink:href', function (d) {
                return d.img;
            })
            .attr('x', function (d) { return -25; })
            .attr('y', function (d) { return -25; })
            .attr('height', 35)
            .attr('width', 35);

        node
            .append('title')
            .text(function (d) { return d.id; });

        simulation
            .nodes(graph.nodes)         // assign the simulation's nodes to be the graph's nodes
            .on('tick', update)         // 1. update whenever the 'tick' is called (once per node creation) after getting data. tick event listener function update all nodes.
            .force('link')              // links are just another force: get the force first
            .links(graph.links);        // assign the simulation's links to be the graph's links

        function update() {
            node
                .attr('transform', function (d) {
                    // d.x = Math.max(d.r, Math.min(width - d.r, d.x));
                    // d.y = Math.max(d.r, Math.min(height - d.r, d.y));
                    return 'translate(' + d.x + ',' + d.y + ')';
                })
                // .attr("cx", function (d) { 
                //     return d.x = Math.max(d.r, Math.min(width - d.r, d.x)); 
                // })
                // .attr("cy", function (d) { 
                //     return d.y = Math.max(d.r, Math.min(height - d.r, d.y)); 
                // })

                .call(d3.drag()                                                         // ability to drag
                    .on('start', startDrag)
                    .on('drag', nowDrag)
                    .on('end', stopDrag));

            link
                .attr('x1', function (d) { return d.source.x; })
                .attr('y1', function (d) { return d.source.y; })
                .attr('x2', function (d) { return d.target.x; })
                .attr('y2', function (d) { return d.target.y; });
        }
    // };

    function startDrag() {
        if (!d3.event.active) {                     // *
            simulation.alphaTarget(0.3).restart();  // alpha decays from 1 to 0 over 300 iterations. restart the simulation when choosing new way to group nodes (later)
        }
        d3.event.subject.fx = d3.event.subject.x;   // take a node (d3 event subject)
        d3.event.subject.fy = d3.event.subject.y;
        console.log(d3.event.subject);              // test: printing which node you picked up to console the node when labels not yet appended
    }

    function nowDrag() {
        d3.event.subject.fx = d3.event.x;           // allows you to pick up AND move the node
        d3.event.subject.fy = d3.event.y;
    }

    function stopDrag() {
        if (!d3.event.active) {
            simulation.alphaTarget(0.1);            // alpha at 0, no decay, then simulation never stops
        }

        d3.event.subject.fx = null;                 // *
        d3.event.subject.fy = null;
    }
}

export default codeFlower;