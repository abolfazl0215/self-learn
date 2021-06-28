import React from 'react'

const Section2 = () => {
    return ( 
        <section className="container-boxes flex justify-between flex-wrap mt-5 lg:justify-evenly">
            <div className="w-1/2 h-52 p-1 lg:w-1/5 lg:m-4">
                <div className="w-full h-full rounded pt-5 boxes">
                    <img src="image/mentor.svg" alt="" className="w-8 mx-auto" />
                    <h1 className="text-center pt-2">همراهی مربی</h1>
                    <p className="w-3/4 text-center text-gray-500 mx-auto mt-2">با مربی های حرفه  ای و با حوصله رفع اشکال میکنید</p>
                </div>
            </div>
            <div className="w-1/2 h-52 p-1 lg:w-1/5 lg:m-4">
                <div className="w-full h-full rounded pt-5 boxes">
                    <img src="image/refund.svg" alt="" className="w-8 mx-auto" />
                    <h1 className="text-center pt-2">تضمیت بازگشت وجه</h1>
                    <p className="w-3/4 text-center text-gray-500 mx-auto mt-2">اگر راضی نبودی تا 15 روز فرصت دارید انصراف بدید</p>
                </div>
            </div>
            <div className="w-1/2 h-52 p-1 lg:w-1/5 lg:m-4">
                <div className="w-full h-full rounded pt-5 boxes">
                    <img src="image/quality.svg" alt="" className="w-8 mx-auto" />
                    <h1 className="text-center pt-2">تضمین کیفیت</h1>
                    <p className="w-3/4 text-center text-gray-500 mx-auto mt-2">با کیفیت ترین و به روزترین آموزش سطح ایران را دریافت میکنید</p>
                </div>
            </div>
            <div className="w-1/2 h-52 p-1 lg:w-1/5 lg:m-4">
                <div className="w-full h-full rounded pt-5 boxes">
                    <img src="image/time.svg" alt="" className="w-8 mx-auto" />
                    <h1 className="w-3/4 mx-auto text-center pt-2 ">ویدیو های کوتاه و باکیفیت</h1>
                    <p className="w-3/4 text-center text-gray-500 mx-auto mt-2">هر مبحث در قالب یک جلسه کوتاه و کاربردی آماده شده است</p>
                </div>
            </div>
        </section>
     );
}
 
export default Section2;