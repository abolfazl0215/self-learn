import React from 'react';
const Article = () => {
    return (
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
    );
}

export default Article;