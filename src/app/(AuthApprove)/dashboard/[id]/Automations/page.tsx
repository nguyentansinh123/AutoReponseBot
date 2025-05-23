import AutomationList from '@/components/global/AutomationList/AutomationList'
import CreateAutomationButton from '@/components/global/createAutomation/CreateAutomation'
import { Check } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
    <div className="lg:col-span-4">
      <AutomationList />
    </div>
    <div className="lg:col-span-2">
      <div className="flex flex-col rounded-xl bg-background-80 gap-y-6 p-5 border-[1px] overflow-hidden border-in-active">
        <div>
          <h2 className="text-xl">Automation</h2>
          <p className="text-text-secondary">
            All live automation will show here.
          </p>
        </div>
        <div className="flex flex-col gap-y-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-start justify-between">
              <div className="flex flex-col">
                <h3 className="font-medium">
                  Direct traffic towards website
                </h3>
                <p className="text-text-secondary text-sm">
                  October 5th 2024
                </p>
              </div>
              <Check />
            </div>
          ))}
        </div>
        <CreateAutomationButton />
      </div>
    </div>
  </div>
  )
}

export default page