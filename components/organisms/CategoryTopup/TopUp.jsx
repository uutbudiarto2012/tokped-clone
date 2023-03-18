import classNames from 'classnames'
import React, { useState } from 'react'
import TabPln from './TabPpob/TabPln'
import TabPulsa from './TabPpob/TabPulsa'

const TopUp = () => {
  const [activeTab, setActiveTab] = useState('pulsa')
  const ClassTabBtn = active =>
    classNames({
      'flex-1 py-2 text-gray-600 font-semibold border-b-2 block text-center duration-300': true,
      'border-transparent': !active,
      'border-green-600 text-green-600': active
    })

  const handleChangeTab = data => {
    setActiveTab(data)
  }
  return (
    <div className='border my-5 rounded-lg'>
      <div className='flex item-center border-b'>
        <button
          onClick={() => handleChangeTab('pulsa')}
          className={ClassTabBtn(activeTab === 'pulsa')}
        >
          Pulsa
        </button>
        <button
          onClick={() => handleChangeTab('paket-data')}
          className={ClassTabBtn(activeTab === 'paket-data')}
        >
          Paket Data
        </button>
        {/* <button
          onClick={() => handleChangeTab('flight')}
          className={ClassTabBtn(activeTab === 'flight')}
        >
          Flight
        </button> */}
        <a
          href='https://www.tokopedia.com/flight/'
          className={ClassTabBtn(false)}
        >
          Flight
        </a>
        <button
          onClick={() => handleChangeTab('listrik-pln')}
          className={ClassTabBtn(activeTab === 'listrik-pln')}
        >
          Listrik PLN
        </button>
      </div>
      <div className='p-4'>
        {activeTab === 'pulsa' && <TabPulsa />}
        {activeTab === 'paket-data' && <TabPulsa />}
        {activeTab === 'flight' && <div>flight</div>}
        {activeTab === 'listrik-pln' && <TabPln />}
      </div>
    </div>
  )
}

export default TopUp
