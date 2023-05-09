import React from 'react'

const InputNew = () => {
  return (
    <div className='flex justify-center items-center py-6'>
    <div class="flex space-x-7">
    <input type="text" class="px-10 py-3 border border-gray-400 rounded-lg" placeholder="First Name"/>
    <input type="text" class="px-10 py-3 border border-gray-400 rounded-lg" placeholder="Last Name"/>
    <button class="px-8 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-900">Add Field</button>
  </div>
  </div>
  )
}

export default InputNew
