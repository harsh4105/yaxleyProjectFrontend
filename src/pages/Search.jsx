import React from 'react';

function Search() {
    const containerStyle = {
        textAlign: 'center',
        marginTop: '50px',
    };

    const headingStyle = {
        fontSize: '36px',
    };

    const paragraphStyle = {
        fontSize: '18px',
        color: '#666',
    };

    return (
        <div>
            <div style={containerStyle}>
                <h1 style={headingStyle}>Coming Soon</h1>
                <p style={paragraphStyle}>Our website is under construction. Please check back later.</p>
            </div>
        </div>


    );
}

export default Search;
