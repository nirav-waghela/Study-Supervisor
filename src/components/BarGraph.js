import React from 'react'
import {HorizontalBar   } from 'react-chartjs-2'

export default function BarGraph(props){
    console.log(props)
    
    let months = [], days = []

    if(props.data){
        props.data.months.map(e=>{
            months.push(e.month)
            days.push(e.days)
        }) 
    }

    

const data = {
    labels: months,
    datasets: [
      {
        label: 'Attendance',
        backgroundColor: 'rgba(43, 212, 97,0.2)',
        borderColor: 'rgba(43, 212, 97,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(43, 212, 97,0.4)',
        hoverBorderColor: 'rgba(43, 212, 97,1)',
        data: days
      }
    ]
  };

    return(
        <div>
            <HorizontalBar data={data} 
                height={15}
                width={60}
            />
        </div>
    )
}