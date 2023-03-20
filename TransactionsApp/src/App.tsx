import { useState } from 'react'
import { TransactionType } from './types/typeTransaction'
import Transaction from './components/Transaction'
import transactionList from './assets/data.json'
const transactions = transactionList as [TransactionType]

function App() {

  return (
    <div className='max-w-[1000px] mx-auto bg-slate-100 p-4 md:p-14'>
      <div className='flex flex-row justify-between mb-10'>
        <h1 className='text-2xl md:text-4xl font-medium'>Last Transactions</h1>
        <a className='text-xl md:text-3xl text-gray-600 font-medium' href="#">See All</a>
      </div>
      {transactions.map(item => <Transaction transaction={item} key={item.id} />)
      }
    </div>


  )
}

export default App
