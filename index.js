const width = window.innerWidth;
const height = window.innerHeight;

const svg = d3.select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height);


const data = d3.range(15).map(d => ({
    x: d * 70 + 40,
    y: (height / 2) + Math.sin(d * 0.5) * 180
}));

svg.selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('r', 30)
    .attr('cx', (d) => d.x)
    .attr('cy', (d) => d.y);
