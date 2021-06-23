import React from 'react';

const MainPage = () => {
    return ( 
        <div>
            <div className="w-full bg-gray-50 py-5">
                <img src="image/illustration.png" alt="" className="w-72 mx-auto"/>
                <h1 className="text-center font-semibold">آکادمی آموزش آنلاین سلف لرن</h1><br />
                <p className="text-center text-gray-500">برنامه نویسی آسان تر از چیزی هست که فکر میکنید</p><br />
                <div className="flex justify-center"><button className="bg-violet text-white py-2 px-5 rounded-md">نقشه راه یادگیری</button></div>
            </div>
        </div>
     );
}
 
export default MainPage;