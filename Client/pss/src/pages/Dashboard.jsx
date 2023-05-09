import React from 'react'
import AccountCards from '../components/AccountCards'
import Header from '../components/Header'
import {data} from '../data/data'
import Email from '../components/Email'
import InputNew from '../components/inputNew'


const Dashboard = () => {

  

 

  return (
    <>   <div className='text-slate-300 bg-gray-50 dark:bg-gray-900 flex items-center justify-center'>
   

    
   
    <div className='w-4/5  '>
    
    <Header  heading="Dashboard" btn="Add New Category"/>
    <div className='flex flex-wrap justify-center'>
  <AccountCards/>
  <AccountCards/>
  <AccountCards/>
  <AccountCards/>
  <AccountCards/>
  <AccountCards/>
  <AccountCards/><AccountCards/>
</div>
    
    <Header  heading="Management Page" btn="Add New Account"/>
    <div className="flex flex-wrap">
    <Email/>
    <Email/><Email/>
    <Email/><Email/>
    <Email/><Email/>
    <Email/>
    <Email/>
    
    </div>
    <Header  heading="Add New Account" btn="Add More Field"/>
    <InputNew/>
    <InputNew/>
    <InputNew/>
   
    
    </div>
    
    </div>
  </>)

      }

export default Dashboard