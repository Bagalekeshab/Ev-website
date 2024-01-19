

const ModelyPage = () => {
  return (
    <>
    <div>
        <p className="text-center text-4xl py-5 font-medium">Model Y</p>

        <div className="container md:flex md:space-x-10">
        <div className="py-5">
        <img className="m-auto" src='/modely/GUID-1.png' alt="modely" />
        
        </div>
        <div className="rightsection md:relative md:top-52 md:left-5 md:w-1/3  md:h-36">
        <div className="text-center space-x-7">
            <button className="bg-slate-200 font-medium rounded-2xl px-3 py-1 text-xl">$43,990</button>
            <button className="bg-blue-300  font-medium rounded-2xl px-3 py-1 text-xl">Order</button>
        </div>
        
        <div className="data">
            <div className="Rangeitem py-4 px-5 flex justify-between mt-2">
                <div>
                    <p className="font-medium">242min</p>
                    <p className="font-mono">Range(est.)</p>
                </div>
                <div>
                    <p className="font-medium">135mph</p>
                    <p className="font-mono">TopSpeed</p>
                </div>
                <div>
                    <p className="font-medium">6.6sec</p>
                    <p className="font-mono">0.60mph</p>
                </div>

            </div>
            <div className="wheels mt-10 text-center">
                <h1 className=" text-2xl font-medium">Wheels</h1>
                <div className="wheelitems flex justify-center py-2 h-14 space-x-4 ">
                    <img src="/modely/wheels/gemini_wheels.avif" alt="wheel" />
                    <img src="/modely/wheels/induction_wheels.avif" alt="wheel" />
                
                </div>
                <div className="py-5 font-medium">
                <p>19" Gemini Wheels</p>
                <p>20" induction Wheels</p>
                </div>
                
            </div>
            <div className="interior  text-center  py-2">
                <h1 className="text-2xl font-medium">Interior</h1>
                <div className="flex justify-center mt-5 space-x-3">
                <div className="bg-black rounded-full h-10  w-10 "></div>
                <div className="bg-white border-2 rounded-full h-10  w-10 "></div>
                </div>
                <div className="py-5 font-medium">
                <h3>All Black Include</h3>
                <p>Black and White</p>
                </div>
            </div>
            <div className="spec px-5 py-5 space-y-5 h-auto ">
                <h1 className="text-2xl text-center font-medium">Model Y Spec</h1>
                <h2 className="font-bold underline">Drive</h2>
                <div className="flex justify-between px-2 mt-2 py-2 space-x-5">
                    <div>
                        <h1 className="font-bold">Battery</h1>
                        <p>Long Range</p>

                    </div>
                    <div>
                        <h1 className="font-bold">Acceleration</h1>
                        <p>3.5s 0-6 mph
                            with rollout
                            subtracted
                        </p>

                    </div>
                    <div>
                        <h1 className="font-bold">Drive</h1>
                        <p>Dual Motor ALL-Wheel Drive
                
                        </p>

                    </div>

                </div>
                <h2 className="font-bold mt-5 underline">Dimensions</h2>
                <div className="dimensionitems grid grid-cols-2 md:grid-cols-3  px-2 md:space-x-4 ">
                    <div className="py-4">
                        <h1 className="font-bold">Weight</h1>
                        <a>4,398 lbs</a>
                    </div>
                    <div className="py-4">
                        <h1 className="font-bold">Cargo</h1>
                        <a>76 cu ft</a>
                    </div>
                    <div className="py-4">
                        <h1 className="font-bold">Wheels</h1>
                        <a>21"</a>
                    </div>
                    <div className="py-4">
                        <h1 className="font-bold">seating</h1>
                        <a>5 Adults</a>
                    </div>
                    <div className="py-4">
                        <h1 className="font-bold">Displays</h1>
                        <a>15" Center Touchscreen</a>
                    </div>
                    <div className="py-4">
                        <h1 className="font-bold">Ground Clearance</h1>
                        <a>6.2"</a>
                    </div>
                    <div className="py-4">
                        <h1 className="font-bold">Overall Width</h1>
                        <a>Folded mirrors:77.9"</a>
                        <p>Extented mirrors:83.8"</p>
                    </div>
                    <div className="py-4">
                        <h1 className="font-bold">Overall Height</h1>
                        <a>64"</a>
                    </div>
                    <div className="py-4">
                        <h1 className="font-bold">Overall Length</h1>
                        <a>187"</a>
                    </div>
                    <div className="py-4">
                        <h1 className="font-bold">Track-Front & Rear</h1>
                        <a>64.8" & 64.2"</a>
                    </div>

                </div>
            </div>
        </div>
        </div>
        </div>
       <div>
       <div className="Description p-5 md:w-2/5 border-2 md:relative md:left-20 bg-blue-950 rounded-2xl">
            <div className="text-white">
                <h1 className="text-3xl">Go AnyWhere</h1>
                <p className="pl-6 py-2">Go ahead, take the road trip. With up to 310 miles (EPA est.) of range on a single charge,
                     chances are you’ll need a break before your Model Y will. Dual motor all-wheel drive ensures 
                     you’re ready to tackle any road conditions.</p>
            </div>
        </div>
        <div className="Descriptionsecond p-5 md:w-2/5 border-2 md:relative md:left-20 bg-blue-900 rounded-2xl">
            <div className="text-white">
                <h1 className="text-3xl">Do More Than Drive</h1>
                <p className="pl-6 py-2">Your favorite song,movie or game is just a few tabs away. An ultra-responsive 15-inch
                touchscreen sits at the center of your driving experience.</p>
            </div>
        </div>
        <div>
            <img src="/modely/TopGear.jpg" alt="interior" />
            <img src="/modely/TopGear1.jpg" alt="interior" />
        </div>
        
       </div>


        <div className="modelslider relative right-10 mt-2">
            <p className="text-center text-3xl font-medium">Other Model</p>
            <div className="flex justify-center">
            <div className="box1 border-2 w-96 h-52">
            <img className="h-full w-auto object-cover" src="/images/tesla_mode_s.jpg" alt="car"/>
                <div className="bg-blue-950 py-2 flex justify-center space-x-5">
                    <button className=" text-xl rounded-2xl px-2 text-cyan-500">See More</button>
                    <button className=" text-xl rounded-2xl px-2 text-cyan-200">$699</button>
                </div>

            </div>
            </div>
        </div>
        
      
    </div>
    </>

  )
}

export default ModelyPage
