import AutometionBreadcrumbs from '@/components/global/autometion-bradcrumbs'
import Trigger from '@/components/global/autometions/trigger'
import { Warning } from '@/icons'
import React from 'react'

type Props = {
    params: { id: string }
}

//WIP : set some meta data

const Page = ({params}: Props) => {
    //WIP : connect real automation data
  return (
    <div className='flex flex-col items-center'>
        <AutometionBreadcrumbs id={params.id}/>
        <div className="w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col bg-[#1D1D1D] gap-y-3">
        <div className="flex gap-x-2">
        <Warning />
        When...
        </div>
        <Trigger id={params.id} />
    </div>
    </div>
  )
}

export default Page