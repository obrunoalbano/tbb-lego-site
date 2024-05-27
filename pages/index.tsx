import Layout from "@/components/layout";
import type { Metadata } from 'next'
import Slider from "@/components/slider";
import Section from "@/components/section";
import { sliderContent, cmsContent } from '@/content/site-content'
 
export const metadata: Metadata = {
  title: 'Lego',
  description: 'Lego Description',
}

export default function Page() {
  return (
    <Layout>
      <Slider title={sliderContent.title} video={sliderContent.video} />
      {cmsContent.map((section, index) => (
          <Section key={index} data={section} />
      ))}
    </Layout>
  );
}
