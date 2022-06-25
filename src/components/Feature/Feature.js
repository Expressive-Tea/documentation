import React from 'react';

import './feature.scss';

const Feature = ({data}) => (
  <section className="feature-home container">
    <div className="feature-item">
      <div className="body d-flex">
        <div className="feature-column">
          <h2 className="f_p f_size_30 l_height50 f_600 t_color text-center wow fadeInUp">
            {data.title}
          </h2>
          <p dangerouslySetInnerHTML={{__html: data.label}}/>
        </div>
        <div className="feature-column"></div>
      </div>
    </div>
  </section>
);

export default Feature;
