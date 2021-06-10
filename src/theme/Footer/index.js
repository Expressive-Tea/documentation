/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useThemeConfig} from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import ThemedImage from '@theme/ThemedImage';

function FooterLink({to, href, label, prependBaseUrlToHref, ...props}) {
    const toUrl = useBaseUrl(to);
    const normalizedHref = useBaseUrl(href, {
        forcePrependBaseUrl: true,
    });
    return (
        <Link
            className="footer__link-item"
            {...(href
                ? {
                    href: prependBaseUrlToHref ? normalizedHref : href,
                }
                : {
                    to: toUrl,
                })}
            {...props}>
            {label}
        </Link>
    );
}

const FooterLogo = ({sources, alt}) => (
    <ThemedImage className="footer__logo" alt={alt} sources={sources}/>
);

function Footer() {
    const {footer} = useThemeConfig();
    const {copyright, links = [], logo = {}} = footer || {};
    const sources = {
        light: useBaseUrl(logo.src),
        dark: useBaseUrl(logo.srcDark || logo.src),
    };

    if (!footer) {
        return null;
    }

    return (
        <footer
            className={clsx('footer', {
                'footer--dark': footer.style === 'dark',
            })}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        {links && links.length > 0 && (
                            <div className="row footer__links">
                                {links.map((linkItem, i) => (
                                    <div key={i} className="col footer__col">
                                        {linkItem.title != null ? (
                                            <h4 className="footer__title">{linkItem.title}</h4>
                                        ) : null}
                                        {linkItem.items != null &&
                                        Array.isArray(linkItem.items) &&
                                        linkItem.items.length > 0 ? (
                                            <ul className="footer__items">
                                                {linkItem.items.map((item, key) =>
                                                    item.html ? (
                                                        <li
                                                            key={key}
                                                            className="footer__item" // Developer provided the HTML, so assume it's safe.
                                                            // eslint-disable-next-line react/no-danger
                                                            dangerouslySetInnerHTML={{
                                                                __html: item.html,
                                                            }}
                                                        />
                                                    ) : (
                                                        <li key={item.href || item.to} className="footer__item">
                                                            <FooterLink {...item} />
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        ) : null}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row align-items-center data-info footer_bottom">
                    <div className="col-lg-4 col-md-5 col-sm-6">
                        {copyright ? (
                            <div
                                className="footer__copyright" // Developer provided the HTML, so assume it's safe.
                                // eslint-disable-next-line react/no-danger
                                dangerouslySetInnerHTML={{
                                    __html: copyright,
                                }}
                            />
                        ) : null}
                    </div>
                    <div className="col-lg-4 col-md-3 col-sm-6">
                        <div className="f_social_icon_two text-center">
                            <a href="#"><i className="ti-twitter-alt"></i></a>
                            <a href="#"><i className="ti-github"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <ul className="list-unstyled f_menu text-right">
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
