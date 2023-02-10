import React, { useEffect, useRef, useState } from 'react';
import axios from "axios";
import * as d3 from 'd3';

function YRBChart() {
    const [data, setData] = useState([""]);
    const svgRef = useRef();

    useEffect(() => {

        axios.get(`/api/yrlvl`).then((res) => {
            if (res.status === 200) {
              setData(res.data.all);
            }
          });
    }, [])
    const w = 400
        const h = 100

        const svg = d3.select(svgRef.current)
            .attr('width', w)
            .attr('height', h)
            .style('overflow', 'visible')
            .style('margin-top', '30px');

        const xScale = d3.scaleBand()
            .domain(data.map((val, i) => i))
            .range([0, w])
            .padding(0.5);
        
        const yScale = d3.scaleLinear()
            .domain([0, h])
            .range([h, 0]);

        const xAxis = d3.axisBottom(xScale)
            .ticks(data.length);
        const yAxis = d3.axisLeft(yScale)
            .ticks(5);
        
        svg.append('g')
            .call(xAxis)
            .attr('transform', `translate(0, ${h})`)
        svg.append('g')
            .call(yAxis);

        svg.selectAll('.bar')
            .data(data)
            .join('rect')
                .attr('x', (v,i) => xScale(i))
                .attr('y', yScale)
                .attr('width', xScale.bandwidth())
                .attr('height', val => h - yScale(val));
    return(
        <div>
            <svg ref={svgRef}></svg>
        </div>
    )
}
export default YRBChart;