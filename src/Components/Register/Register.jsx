import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
import Footer from '../Footer/Footer';
import TopNav from '../Navs/TopNav';

const Register = ({history}) => {

    const [FullName, setFullName] = useState();
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();
    
    const [,ForceUpdate] = useState();
    const validator=useRef(new SimpleReactValidator({
        messages:{
            required: "پر کردن این فیلد الزامی میباشد",
                min: "کمتر از 5 کاراکتر نباید باشد",
                email: "ایمیل نوشته شده صحیح نمی باشد"
        }, 
        element:message=><div className="text-red-500">{message}</div>
    }));
    
    const reset=()=>{
        setFullName("");
        setEmail("");
        setPassword("")
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        const user={
            FullName,
            Email,
            Password
        }
        console.log(user)
        reset()
    }

    

    return ( 
        <div>
            <TopNav/>
            <div className="w-full py-10">
                <h1 className="text-center text-violet mt-12 mb-3">ثبت نام در سلف لرن</h1>
                <form onSubmit={handleSubmit} className="register shadow-2xl mx-auto p-4 py-10 text-gray-500 lg:w-1/3">
                    <label className="block text-gray-500 mb-2 mt-3">
                        نام و نام خانوادگی :
                    </label>
                    <input 
                        type="text" 
                        name="FullName"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={FullName}
                        onChange={(event)=>{
                            setFullName(event.target.value);
                            validator.current.showMessageFor("FullName");
                        }}
                    />
                    {validator.current.message("FullName",FullName,"required|min:5")}
                    <label className="block text-gray-500 mb-2 mt-3">
                        ایمیل:
                    </label>
                    <input 
                        type="email" 
                        name="Email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={Email}
                        onChange={(event)=>{
                            setEmail(event.target.value);
                            validator.current.showMessageFor("Email")
                        }}
                    />
                    {validator.current.message("Email",Email,"required|email")}
                    <label className="block text-gray-500 mb-2 mt-3">
                        رمز عبور:
                    </label>
                    <input 
                        type="password"
                        name="Password" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={Password}
                        onChange={(event)=>{
                            setPassword(event.target.value);
                            validator.current.showMessageFor("Password")
                        }}
                    />
                    {validator.current.message("Password",Password,"required|min:5")}
                    <div className="flex justify-between mt-7">
                        <Link to="login"><p className="mt-3 cursor-pointer">قبلا ثبت نام کرده ام !</p></Link>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">ثبت نام</button>
                    </div>
                    </form>
            </div>
            <Footer/>
        </div>
     );
}
 
export default Register;