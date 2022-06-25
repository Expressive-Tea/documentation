import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import SupportBanner from '../components/Banner/SupportBanner';
import BannerData from '../components/Banner/BannerData';
import featuresData from '../data/features';
import SupportPartnerlogo from '../components/SupportPartnerlogo';
import SupportItem from '../components/Service/SupportItem';
import Sandbox from '../components/Features/Sandbox';
import Feature from '../components/Feature/Feature';

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  console.log(featuresData);
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A Simple, clean, flexible and modulable web framework."
    >
      <SupportBanner />
      {featuresData.map((featureData) => {
        return <Feature data={featureData}/>
      })}
      <SupportPartnerlogo BannerData={BannerData} />
      <SupportItem />
      <Sandbox />
    </Layout>
  );
}
