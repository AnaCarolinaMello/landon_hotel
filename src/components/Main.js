import React from 'react';
import Info from './Info';
import WelcomeComponent from './WelcomeComponent';

const Main = ()=>{
    return(
        <main id="wrapper">
            <WelcomeComponent/>
            <Info/>
        </main>
    )
}

export default Main