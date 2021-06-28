import React from 'react'

const Section1 = () => {
    return ( 
        <section className="box-main w-full bg-gray-50 py-12 sm:grid sm:grid-cols-4">
                <img src="image/illustration.png" alt="" className="w-72 mx-auto sm:col-span-2 lg:w-96"/>
                <div className="lg:col-span-2 lg:mt-20">
                    <h1 className="text-center font-semibold">آکادمی آموزش آنلاین سلف لرن</h1><br />
                    <p className="text-center text-gray-500">برنامه نویسی آسان تر از چیزی هست که فکر میکنید</p><br />
                    <div className="flex justify-center"><button className="bg-violet text-white py-2 px-5 rounded-md">نقشه راه یادگیری</button></div>
                </div>
            </section>
     );
}
 
export default Section1;