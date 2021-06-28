import React from 'react'

const Section5 = () => {
    return (
        <div>
            <h1 className="text-center w-full mt-10"><span className="rounded-full w-4 h-4 text-violet ml-2">|</span>آمار ها باعث افتخار هستند<span className="rounded-full w-4 h-4 text-violet mr-2">|</span></h1>
            <section className="grid grid-cols-4 bg-gray-50 mt-5 w-full py-2">
                <div className="bg-white col-span-4 col-start-1 m-2  p-3 rounded-md flex justify-between">
                    <p className="text-xl text-center">3 +</p>
                    <p className="text-violet text-center">سال سابقه فعالیت حرفه ای</p>
                </div>
                <div className="bg-white col-span-4 col-start-1 m-2  p-3 rounded-md flex justify-between">
                    <p className="text-xl text-center">87 +</p>
                    <p className="text-violet text-center">دانش آموز خصوصی و آنلاین</p>
                </div>
                <div className="bg-white col-span-4 col-start-1 m-2  p-3 rounded-md flex justify-between">
                    <p className="text-xl text-center">95 % +</p>
                    <p className="text-violet text-center">رضایت از آموزش</p>
                </div>
            </section>
        </div>
    );
}

export default Section5;