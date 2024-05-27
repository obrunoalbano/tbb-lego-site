import Head from 'next/head';
import Layout from "@/components/layout";
import Slider from "@/components/slider";
import Section from "@/components/section";
import { sliderContent, cmsContent } from '@/content/site-content'


export default function Page() {
  return (
    <Layout>
      <Head>
        <title>LEGO® Sets for Adults | Adults Welcome</title>
        <meta name="description" content="Here are some of our most complex LEGO® sets designed exclusively for grown-ups. From sport to Star Wars™, vehicles to art, discover LEGO Sets for Adults" />
      </Head>
      <Slider title={sliderContent.title} video={sliderContent.video} />
      {cmsContent.map((section, index) => (
          <Section key={index} data={section} />
      ))}
    </Layout>
  );
}
