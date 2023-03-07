import Nav from './nav';
import Header from './header/header';
import Footer from './footer';
import Hero from './hero';
import {ReactNode} from 'react';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({children} : LayoutProps) {
    return (
        <div className="flex w-full flex-col items-center overflow-hidden">
                     
            <Hero/>            
            {children}   
            <Nav/>
            <Header/>
            <Footer/>
        </div>
    )
}