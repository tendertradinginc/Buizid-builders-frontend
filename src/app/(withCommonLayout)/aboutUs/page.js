import OurPromises from '@/components/FrontendComponent/AboutUs/OurPromises';
import OurTeam from '@/components/FrontendComponent/AboutUs/OurTeam';
import WhyChooseUs from '@/components/FrontendComponent/AboutUs/WhyChooseUs';
import WorkingProcess from '@/components/FrontendComponent/AboutUs/WorkingProcess';
import React from 'react';

const AboutUs = () => {
    return (
        <div className='mt-36'>
            <WhyChooseUs />
            <WorkingProcess />
            <OurTeam />
            <OurPromises />
        </div>
    );
};

export default AboutUs;