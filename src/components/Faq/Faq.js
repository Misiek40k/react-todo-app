import React from 'react';
import { faqData } from '../../data/dataStore';

import Container from '../Container/Container';
import Hero from '../Hero/Hero';

const Faq = () => (
    <Container>
        <Hero titleText={faqData.title} heroImage={faqData.image} />
        <p>{faqData.content}</p>
    </Container>
);

export default Faq;