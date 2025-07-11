import React from 'react'
import List from '@/components/List'
import Piechart from '@/components/Piechart'
import Barchart from '@/components/Barchart'

export default function Dashboard() {
  return (
    <div>
      <div className="flex flex-row mt-20">
          <div className="basis-200 mr-3">  <Barchart></Barchart></div>
  <div className="basis-150"><Piechart></Piechart></div>

  
</div>
      
    
     {/* <List/> */}
    </div>
  )
}
