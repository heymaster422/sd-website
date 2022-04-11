import React, {useState} from 'react'

export default function Home() {

    return(
        <div className='Home'>
            <img src="DC logo_nav.png" alt="game logo" width="400" height="200" ></img>
            <div className='gameDesc'>
                <h4> About </h4>
                Dimension Crawl is a rogue like game that demonstrates how PCG can be integrated into a video game. Explore 5
                different levels varying in difficulty and fight your way to defeat the boss in order to escape the dimensional 
                rift. Run the game over and over again to explore endless possibilities and challenges. 

                <h4>Inspiration</h4>
                <p>
                As a group we wanted to showcase the power of PCG in content creation. 
                This idea can help the entertainment industry specifically video games. 
                Companies tend to put countless hours into producing new content tailored 
                to an audience in their market. However, with PCG this step can be cut out 
                when creating a game that’s purpose is to provide endless content to the 
                consumer. We want to continue the process of testing and innovating PCG. 
                </p>
                <h4>Major Features</h4>
                <ul>
                    <img src='scrn5.png' width="600" height="400"/>
                    <li>PCG made levels.</li>
                    <li>PCG made stats for weapons.</li>
                    <li>PCG made stats for mobs.</li>
                    <li>PCG spawn locations for loot.</li>
                    <li>Creating a store.</li>
                    <li>Dynamic music transitioning / for changing levels</li>
                </ul>
            </div>
            <div id='TechAndSkills'>
                <div className='technologies'>
                <h1>Technologies</h1>
                    <ul>
                            <li>Unity</li>
                            <li>C#</li>
                            <li>Git</li>
                            <li>Photoshop</li>
                            <li>Visual Studio Code</li>
                        </ul>
                </div>
                
                <div className='skills'>
                <h1>Skills</h1>
                    <ul>
                        <li>Game Development</li>
                        <li>Game Deseign</li>
                        <li>C#</li>
                        <li>Shaderlab</li>
                        <li>Unity</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}