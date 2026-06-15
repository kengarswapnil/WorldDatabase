import React from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";


const Chart = ({data}) => {
  return (
    <div className='ms-5' style={{ width: "90%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={'Name'} />
          <YAxis />
          <Tooltip />
          <Bar dataKey={'Population'} />
        </BarChart>

      </ResponsiveContainer>

    </div>
  )
}

export default Chart
