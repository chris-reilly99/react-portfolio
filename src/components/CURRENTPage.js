import React from 'react';
import About from './Pages/About';
import Resume from './Pages/Resume';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';

const renderPage = (currentPage) => {
    if (currentPage === 'About') {
        return <About />;
    }
    if (currentPage === 'Portfolio') {
        return <Portfolio />;
    }
    if (currentPage === 'Contact') {
        return <Contact />;
    }
    return <Resume />;
};

export default function Content(props) {
    return (
        <div>
            {renderPage(props.currentPage)}
        </div>
    );
}