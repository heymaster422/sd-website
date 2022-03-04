import React, {useState} from 'react'

export default function Team() {

    return(

        <div className = "teamPage">
            <h1>Meet the Team</h1>
            {/* Team Member Template */}
            <div id='team'>
                <div className="team-child-name">
                    <h3 className="teamName">
                        Oscar Cansino
                    </h3>
                    <h4 className="role">Head Developer</h4>
                    <div className="teamContact">
                        <a
                        href="https://github.com/ocansino"
                        target = "_blank"
                        className="Button">
                        GitHub
                        </a>
                    </div>
                </div>
                    <div className='team-child-info'>
                        <p className="teamDescription">
                        I am Oscar Cansino, and I am a Senior at California State University Northridge as a Computer Science Major. My interests in Computer Science include Web Development, Cybersecurity, Artificial Intelligence, Game Development and Data Mining. Outside of class I have a big interest in both board games and trading card games such as Yu-Gi-Oh! and Magic the Gathering. I am also big into building computers, having built my first one from random parts donated to me when I was 11. Some fun facts about me are that I am going to be the first person in my extended family to be a university graduate and I am colorblind.
                        </p>
                    </div>
            </div>
            {/* Team Member Template */}
            <div id='team'>
                <div className="team-child-name">
                    <h3 className="teamName">
                        Alex Kang
                    </h3>
                    <h4 className='role'>Developer(Gameplay and Design)</h4>
                    <div className="teamContact">
                        <a
                        href="https://github.com/AlexKang99"
                        target = "_blank"
                        className="Button">
                        GitHub
                        </a>
                    </div>
                </div>
                    <div className='team-child-info'>
                        <p className="teamDescription">
                                I'm Alex.
                        </p>
                    </div>
            </div>
            {/* Team Member Template */}
            <div id='team'>
                <div className="team-child-name">
                    <h3 className="teamName">
                        Michael Barseghian
                    </h3>
                    <h4 className='role'>Developer (UI/Systems)</h4>
                    <div className="teamContact">
                        <a
                        href="https://github.com/michaelbarseghian"
                        target = "_blank"
                        className="Button">
                        GitHub
                        </a>
                    </div>
                </div>
                    <div className='team-child-info'>
                        <p className="teamDescription">
                        Hello, my name is Michael Barseghian. I am a senior who’s going to be graduating at the end of this semester. I have attended CSUN for all of my college career. From the beginning, I declared as a computer science because I have always been interested in computers. After graduation I hope to get a software engineering career and go from there. My interests outside of school includes sports, such as soccer, basketball, and motor racing.
                        </p>
                    </div>
            </div>
            {/* Team Member Template */}
            <div id='team'>
                <div className="team-child-name">
                    <h3 className="teamName">
                        Miher Jivalagian 
                    </h3>
                    <h4 className='role'>Group Leader / Scrum Master / Member of Art Team</h4>
                    <div className="teamContact">
                        <a
                        href="https://github.com/heymaster422"
                        target = "_blank"
                        className="Button">
                        GitHub
                        </a>
                    </div>
                </div>
                    <div className='team-child-info'>
                        <p className="teamDescription">
                        Hello, my name is Miher! I am 23 years old and I am a senior in Computer Science at California State University, Northridge.
                        My interests in Programming are Software Development and Management. My favorite programming languages are C and C++. 
                        I am also apart of my families first generation University graduates.
                        </p>
                    </div>
            </div>
            {/* Team Member Template */}
            <div id='team'>
                <div className="team-child-name">
                    <h3 className="teamName">
                        Andrew Wong
                    </h3>
                    <h4 className='role'>Art Team Lead / Developer</h4>
                    <div className="teamContact">
                        <a
                        href="https://github.com/heymaster422"
                        target = "_blank"
                        className="Button">
                        GitHub
                        </a>
                    </div>
                </div>
                    <div className='team-child-info'>
                        <p className="teamDescription">
                                Hi, I'm Andrew. I look forward to gaining outside experience in the technological industry. 
                                When I am not at school or studying, I would like to be working in the real world to acquire 
                                the essential skills that will help me succeed in my future career. In my free time I enjoy working out,
                                cycling, and gaming. This is my last semester at CSUN and plan on working in the web development, cyber security,
                                QA engineering, or software engineering fields. 
                        </p>
                    </div>
            </div>
 
        </div>

    )
}