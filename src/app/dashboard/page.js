import React from 'react'
import List from '../../components/List'
import Piechart from '@/components/Piechart'
import Barchart from '@/components/Barchart'

export default function Dashboard() {
  return (
    <div>
      <div className="flex flex-col ">
  <div className="basis-164"><Piechart></Piechart></div>
  <div className="basis-164">  <Barchart></Barchart></div>
  
</div>
      
    
     {/* <List/> */}
    </div>
  )
}
