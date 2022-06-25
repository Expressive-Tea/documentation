import useBaseUrl from '@docusaurus/useBaseUrl';
import Markdown from '../Markdown';
import CodeBlock from '@theme/CodeBlock';

import React from 'react';

const installation = `\`\`\`bash
npm install --save @zerooneit/expressive-tea
\`\`\``;

const SupportBanner = () => {
  return (
    <section className="support_home_area">
      <div className="banner_top">
        <div className="container">
          <section class="row justify-content-center logo-section">
            <a href="https://github.com/Zero-OneiT/expresive-tea">
              <img src={useBaseUrl('/img/logo.png')} alt="Logo" width="350" />
            </a>
          </section>

          <section className="row justify-content-center badges-section">
            <a href="https://www.npmjs.com/package/@zerooneit/expressive-tea">
              <img
                alt="npm (scoped)"
                src="https://img.shields.io/npm/v/@zerooneit/expressive-tea?style=for-the-badge"
              />
            </a>
            <a href="https://www.npmjs.com/package/@zerooneit/expressive-tea">
              <img
                alt="npm"
                src="https://img.shields.io/npm/dw/@zerooneit/expressive-tea?style=for-the-badge"
              />
            </a>
            <a href="https://github.com/Zero-OneiT/expresive-tea/blob/develop/LICENSE">
              <img
                alt="NPM"
                src="https://img.shields.io/npm/l/@zerooneit/expressive-tea?style=for-the-badge"
              />
            </a>
            <a href="https://snyk.io//test/github/Zero-OneiT/expresive-tea?targetFile=package.json">
              <img
                alt="Snyk Vulnerabilities for npm package"
                src="https://img.shields.io/snyk/vulnerabilities/npm/@zerooneit/expressive-tea?style=for-the-badge"
              />
            </a>
            <a href="https://github.com/Zero-OneiT/expresive-tea">
              <img
                alt="GitHub last commit"
                src="https://img.shields.io/github/last-commit/Zero-OneiT/expresive-tea?style=for-the-badge"
              />
            </a>
            <a href="https://github.com/Zero-OneiT/expresive-tea/stargazers">
              <img
                alt="GitHub stars"
                src="https://img.shields.io/github/stars/Zero-OneiT/expresive-tea?style=for-the-badge"
              />
            </a>
            <a href="https://travis-ci.org/Zero-OneiT/expresive-tea">
              <img
                alt="Travis (.org) branch"
                src="https://img.shields.io/travis/zero-oneit/expresive-tea/master?style=for-the-badge"
              />
            </a>
          </section>

          <section className="row justify-content-center text-section">
            <div className="col-md-12 text-center">
              <h2 className="f_p f_size_40 l_height60 wow fadeInUp" data-wow-delay="0.3s">
                A Simple, Clean, Flexible and Modulable <br />
                <span className="f_700">web framework</span> project
              </h2>
              <p className="f_size_18 l_height30 wow fadeInUp" data-wow-delay="0.5s">
                Infused from <span className="f_600">ExpressJS</span> as strong and stable web
                framework
                <br /> Flavored with <span className="f_700">Typescript</span> to take advantage of
                the latest Javascript Features.
              </p>
            </div>
            <div className="col-md-6 align-self-center text-center">
              <a href="/docs/" className="software_banner_btn btn_submit f_size_15 f_500">
                Getting Started
              </a>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
export default SupportBanner;
