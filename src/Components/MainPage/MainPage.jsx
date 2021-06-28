import React from 'react';
import Footer from '../Footer/Footer';
import TopNav from '../Navs/TopNav';
import Course from './../Course/Course';
import Article from './Article';
import Section1 from './Section1';
import Section2 from './Section2';
import Section5 from './Section5';

const MainPage = () => {
    return ( 
        <div>
            <TopNav/>
            <Section1/>
            <Section2/>
                <div className="w-full pt-10">
                    <h1 className="text-center"><span className="rounded-full w-4 h-4 text-violet ml-2">|</span>دوره های سلف لرن<span className="rounded-full w-4 h-4 text-violet mr-2">|</span></h1>
                    <Course />
                </div>
                <Article/>  
            <Section5/>
            <Footer/>
        </div>
     );
}
 
export default MainPage;