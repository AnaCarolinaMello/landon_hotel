import React from 'react';
import socialMediaData from './data/social_media.json'

const Footer = ()=>{
    return(
        <footer className="scene">
            <article className="content">
                <div id="socialmedia">
                <ul className="group">
                    {
                        socialMediaData.map((social)=>
                        <li><a href={`https://${social.href}.com`}><img className="icon" src={`${social.src}`} alt={`icon for ${social.alt}`} /></a></li>
                        )
                    }  
                </ul>      
                </div>
            </article>
        </footer>
    )
}

export default Footer