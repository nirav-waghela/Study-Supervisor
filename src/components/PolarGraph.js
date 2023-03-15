import React from 'react'
import {Bar} from 'react-chartjs-2'

export default function PolarGraph(props){

    let months=[] , lineOfCodes=[]
    console.log(props.data)
    if(props.data){
        props.data.linesOfCode.map(e=>{
            months.push(e.month)
            lineOfCodes.push(e.code)
        })
    }


    const graphData = {
        labels: months,
        datasets: [
          {
            label: 'Lines of Codes',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data:lineOfCodes
          }
        ]
      };
    
    return(
        <Bar data={graphData}
        height={10}
        width={20}/>
    )
}