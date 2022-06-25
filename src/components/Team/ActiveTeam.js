import React from 'react';
import Sectitle from '../Title/Sectitle';
import Teamitem from '../Team/Teamitem';

const socialNetworks = [
  {
    id: 1,
    url: 'https://github.com/zerooneit',
    icon: 'ti-github'
  },
  {
    id: 2,
    url: 'https://twitter.com/diegoresendez',
    icon: 'ti-twitter-alt'
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/in/diego-resendez/',
    icon: 'ti-linkedin'
  }
];
const ActiveTeam = () => {
  return (
    <section className="experts_team_area">
      <div className="container">
        <Sectitle
          sClass="sec_title text-center mb_70"
          Title="Active Members"
          tClass="t_color3"
          TitleP="The Expressive Tea Team works on the core functionality, plugins as well documentation."
        />
        <div className="row justify-content-center">
          <div className="col-lg-3 col-sm-6">
            <Teamitem
              teamImageUrl="https://gravatar.com/avatar/91976c5dd9d5242f5690caf19d30b5a3?s=1024&d=robohash&r=x"
              memberN="Diego Resendez"
              memberd="Lead Developer / Author"
              socialNetworks={socialNetworks}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ActiveTeam;
