import React from 'react'

const Search = () => {
  return (

    <div className='bg-blue-900  '>
        
            <p className='text-center text-3xl py-10 font-medium text-white'>Search</p>
        <div className='py-14'>
            <form className='text-center'>
                <input type='text' placeholder='Company' className='rounded-lg px-1 py-1 w-40 bg-black text-white'></input>
                <div className='space-x-1 flex px-1 py-5 justify-center items-center'>
                    <input type='text' placeholder='Model' className='w-40 rounded-lg px-1 py-1  bg-black text-white'></input>
                    <select className='rounded-lg  bg-black text-white px-1 py-1'>
                        <option>Below 50$</option>
                        <option>Below 100$</option>
                        <option>Below 200$</option>
                        <option>Below 300$</option>
                        <option>Others</option>
                        
                    </select>
                </div>
                <button className='bg-cyan-500 rounded-lg px-10 py-1 text-white '>Search</button>
            </form>
        </div>

    


      
    </div>
  )
}

export default Search
