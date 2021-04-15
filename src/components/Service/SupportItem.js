import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

const SupportItem = () => {
    return(
        <section className="support_help_area sec_pad">
            <div className="container">
                <h2 className="f_p f_size_30 l_height50 f_600 t_color text-center wow fadeInUp mb_60">What kind of help do you need today?</h2>
                <div className="d-flex">
                    <div className="support_item">
                        <img src={useBaseUrl ('/img/new-home/ticket-support.png')} alt=""/>
                        <h4>Need to report an issue...</h4>
                        <a href="https://github.com/Zero-OneiT/expresive-tea/issues" className="software_banner_btn btn_submit f_size_15 f_500">Report a bug</a>
                    </div>
                    <div className="support_item">
                        <img src={useBaseUrl ('../../img/new-home/email.png')} alt=""/>
                        <h4>Need to ask a feature...</h4>
                        <a href="https://github.com/Zero-OneiT/expresive-tea/discussions/categories/ideas" className="software_banner_btn btn_submit f_size_15 f_500">Request a feature</a>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default SupportItem;

