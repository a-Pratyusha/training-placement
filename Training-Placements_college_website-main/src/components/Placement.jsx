import React from 'react'
import Table from './Table'

function Placement() {
  return (
    <div className='container-fluid '>
        <div className="container lg:p-5 p-1">
                <div className="container ">
                    <span className="lg:text-5xl text-lg font-bold" >Annual Placement Records</span>
                </div>
                <div className='container mt-5'>
                   <Table/> 
                </div>
        </div>
    </div>
  )
}

export default Placement