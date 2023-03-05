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
        <div className="flex flex-col items-center">
                     
            <Hero/>            
            {children}   
            <Nav/>
            <Header/>
            <Footer/>
        </div>
    )
}