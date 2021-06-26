import React from 'react';
import Footer from '../Footer/Footer';
import Course from './../Course/Course';

const MainPage = () => {
    return ( 
        <div>
            <div className="box-main w-full bg-gray-50 py-12 sm:grid sm:grid-cols-4">
                <img src="image/illustration.png" alt="" className="w-72 mx-auto sm:col-span-2 lg:w-96"/>
                <div className="lg:col-span-2 lg:mt-20">
                    <h1 className="text-center font-semibold">آکادمی آموزش آنلاین سلف لرن</h1><br />
                    <p className="text-center text-gray-500">برنامه نویسی آسان تر از چیزی هست که فکر میکنید</p><br />
                    <div className="flex justify-center"><button className="bg-violet text-white py-2 px-5 rounded-md">نقشه راه یادگیری</button></div>
                </div>
            </div>
            <div className="container-boxes flex justify-between flex-wrap mt-5 lg:justify-evenly">
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
            </div>
                <div className="w-full pt-10">
                    <h1 className="text-center"><span className="rounded-full w-4 h-4 text-violet ml-2">|</span>دوره های سلف لرن<span className="rounded-full w-4 h-4 text-violet mr-2">|</span></h1>
                    <Course />
                </div>
                <div className="w-full pt-10">
                    <h1 className="text-center"><span className="rounded-full w-4 h-4 text-violet ml-2">|</span>آخرین مقالات<span className="rounded-full w-4 h-4 text-violet mr-2">|</span></h1>
                    <div className="article pt-5 ">
                        <div className="w-full boxes rounded p-3 lg:text-center  lg:mx-auto lg:m-3"><h2>فرانت اند چیه ؟</h2></div>
                        <div className="w-full boxes rounded p-3 mt-2 lg:text-center  lg:mx-auto lg:m-3"><h2>چرا ری اکت ؟</h2></div>
                        <div className="w-full boxes rounded p-3 mt-2 lg:text-center  lg:mx-auto lg:m-3"><h2>ورود به دنیای برنامه نویسی</h2></div>
                        <div className="w-full boxes rounded p-3 mt-2 lg:text-center  lg:mx-auto lg:m-3"><h2>چگونه برنامه نویس بهتری شویم ؟</h2></div>
                        <div className="w-full boxes rounded p-3 mt-2 lg:text-center  lg:mx-auto lg:m-3"><h2>sass چیست ؟</h2></div>
                        <div className="w-full boxes rounded p-3 mt-2 lg:text-center  lg:mx-auto lg:m-3"><h2>flex چیست ؟</h2></div>
                        <div className="w-full boxes rounded p-3 mt-2 lg:text-center  lg:mx-auto lg:m-3"><h2>grid چیست ؟</h2></div>
                    </div>
                </div>

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
            
            <Footer/>
        </div>
     );
}
 
export default MainPage;