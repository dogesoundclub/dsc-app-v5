import Nav from './nav';
import Header from './header';
import Footer from './footer';
import Hero from './hero';
import {ReactNode} from 'react';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({children} : LayoutProps) {
    return (
        <div className="flex flex-col items-center zoom-[80%]">
            <Header/>         
            <Hero/>            
            {children}   
            <Nav/>
            <Footer/>
        </div>
    )
}