import React from 'react';
import Sectitle from '../Title/Sectitle';
import Teamitem from '../Team/Teamitem';

const mayoralito= [
    {
        id: 1,
        url: 'https://github.com/mayoralito',
        icon: 'ti-github',
    }
];

const fernando = [
    {
        id: 1,
        url: 'https://github.com/JFernandoGomez',
        icon: 'ti-github',
    },
];

const gabriel = [
    {
        id: 1,
        url: 'https://github.com/storymx',
        icon: 'ti-github',
    },
];
const Team =()=>{
    return(
        <section className="experts_team_area">
            <div className="container">
                <Sectitle sClass="sec_title text-center mb_70" Title="Support Team" tClass="t_color3" TitleP="Expressive Tea would never be what it is today without huge help from these pals who have joining on the planning of the new features and found issues on the current version of Expressive Tea. With their guide and knowledge this project grows everyday."/>
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImageUrl="https://avatars1.githubusercontent.com/u/523047?s=460&u=bd5d781046f4d8da96237e5e55fa480daf029c0b&v=4" memberN="Adrian Mayoral" memberd="Developer" socialNetworks={mayoralito}/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImageUrl="https://avatars3.githubusercontent.com/u/13803801?s=460&u=11c8d5015358b888b36c034f39fb8e31b3590630&v=4" memberN="Gabriel Jaramillo" memberd="Developer" socialNetworks={gabriel}/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImageUrl="https://avatars1.githubusercontent.com/u/7247476?s=460&v=4" memberN="Fernando Gomez" memberd="Developer" socialNetworks={fernando}/>
                    </div>
                </div>
            </div>
        </section>
        
    )
}
export default Team;