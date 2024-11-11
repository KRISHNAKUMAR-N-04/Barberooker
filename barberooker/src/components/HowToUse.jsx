import React, { useEffect } from 'react';
import './HowToUse.css';

const HowToUse = () => {
    const steps = [
        { number: 1, text: 'Complete your profile' },
        { number: 2, text: 'Search for stylists' },
        { number: 3, text: 'Book them with your requirement' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const items = document.querySelectorAll('.timeline-item');
            items.forEach((item) => {
                const itemTop = item.getBoundingClientRect().top;
                if (itemTop < window.innerHeight - 50) {
                    item.classList.add('show');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='outer'>
            <div className="how-to-use-container">
            <h2 className="how-to-use-title">How to Use</h2>
            <div className="timeline">
                {steps.map((step, index) => (
                    <div
                        className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                        key={index}
                    >
                        <div className="timeline-content">
                            <div className="timeline-number">{step.number}</div>
                            <div className="timeline-text">{step.text}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
        
    );
};

export default HowToUse;
