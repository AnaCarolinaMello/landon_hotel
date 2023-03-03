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
                        <li><a href={`https://${social.text}.com`}><img className="icon" src={`https://landonhotel.com/images/socialmedia/${social.text}.png`} alt={`icon for ${social.text}`} /></a></li>
                        )
                    }  
                </ul>      
                </div>
            </article>
        </footer>
    )
}

export default Footer