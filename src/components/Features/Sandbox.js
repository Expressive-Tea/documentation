import React from 'react';
import Sectitle from '../Title/Sectitle'

const sandboxIframeStyle = {width: "100%", height: "500px", border: "0", borderRadius: "4px", overflow: "hidden"};

const Sandbox =() => {
    return(
        <section className="sandbox_area sec_pad">
            <div className="container">
                <Sectitle sClass="sec_title text-center mb_70" Title='Live Preview' TitleP='Review how your application can be possible in Expressive Tea without leave your personal browser.'/>
                <section className="row justify-content-center">
                    <iframe src="https://codesandbox.io/embed/expressive-tea-2kmg7?fontsize=14&hidenavigation=1&module=%2Fmain.ts&theme=dark"
                            style={sandboxIframeStyle}
                            title="expressive-tea"
                            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                    />
                </section>
                <section className="row justify-content-center">
                    <h2 className={`f_p f_size_22 l_height50 f_600`}>Or edit your own</h2>

                </section>
                <section className="row justify-content-center">
                    <a href="https://codesandbox.io/s/expressive-tea-2kmg7?fontsize=14&hidenavigation=1&theme=dark">
                        <img alt="Edit expressive-tea" src="https://codesandbox.io/static/img/play-codesandbox.svg" />
                    </a>
                </section>
            </div>
        </section>
    )
}

export default Sandbox;