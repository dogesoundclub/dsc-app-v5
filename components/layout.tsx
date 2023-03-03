import Header from './header';
import Footer from './footer';
import Hero from './hero';
import {ReactNode} from 'react';


interface LayoutProps {
    children: ReactNode;
}

export default function Layout({children} : LayoutProps) {
    return (
        <div className="grid grid-cols-3">
            <div>01</div>
            <div className="place-self-center">
            <Header/>
            <Hero/>
            <div>
                
                {children}
            </div>
            <Footer/>
            </div>
            <div>03</div>
        </div>
    )
}