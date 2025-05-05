import { INTEGRATION_CARDS } from '@/components/global/junkdata/integration'
import React from 'react'
import IntergrationCard from './_components/integrationCard'

const page = () => {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col w-fill lg:w8/12 gap-y-5'>

        {INTEGRATION_CARDS.map((card, key)=>{
          return <IntergrationCard key={key} {...card}/>
        })}

      </div>
    </div>
  )
}

export default page