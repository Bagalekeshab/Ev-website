"use client"
export const ProductFilter = () => {
    return (
        <div className='bg-blue-950  '>
            <p className='text-center text-3xl py-10 font-medium text-white'>Search</p>
            <div className='py-10'>
                <form className='text-center'>
                    <input type='text' placeholder='Company' className='rounded-lg px-2 py-1 w-40 bg-black text-white md:w-56 outline-none md:py-2 '></input>
                    <div className='space-x-2 flex px-1 py-5 justify-center items-center'>
                        <input type='text' placeholder='Model' className='w-40 rounded-lg px-2 py-1 md:w-56 bg-black text-white md:py-2 outline-none'></input>
                        <select className='rounded-lg  bg-black px-1 py-1 md:w-56 md:py-2 outline-none text-slate-400'>
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

