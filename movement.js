const width = window.innerWidth;
const height = window.innerHeight;

const svg = d3.select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

// t is going to be our time.
let t = 0;
setInterval(() => {
    const data = d3.range(20).map((d) => ({
        x: d * 70 + 40,
        y: (height / 2) + Math.sin(d * 0.5 + t) * 180,
    }));
    
    // // First way with DUPLICATED LOGIC.
    // const circles = svg.selectAll('circle').data(data);
    // circles.enter().append('circle')
    //     .attr('r', 30)
    //     .attr('cx', (d) => d.x)
    //     .attr('cy', (d) => d.y);;
    // circles
    //     .attr('cx', (d) => d.x)
    //     .attr('cy', (d) => d.y);

    // // Second way using .merge
    // //Next is the update selection.
    // const circles = svg.selectAll('circle').data(data);
    // // Next is the enter selection.
    // const circlesEnter = circles.enter().append('circle')
    //     .attr('r', 30);

    // circles.merge(circlesEnter)
    //     .attr('cx', (d) => d.x)
    //     .attr('cy', (d) => d.y);


    // Third way using .join
    const circles = svg.selectAll('circle').data(data).join('circle')
        .attr('r', 30)
        .attr('cx', (d) => d.x)
        .attr('cy', (d) => d.y);

    // Increase time.
    t = t + 0.03;
    
// TIme in miliseconds (60 frames/second).  
}, 1000 / 60);