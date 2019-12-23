import React from 'react';
import { infoData } from '../../data/dataStore';

import Hero from '../Hero/Hero';
import Container from '../Container/Container';

const Info = () => (
    <Container>
        <Hero titleText={infoData.title} heroImage={infoData.image} />
        <p>{infoData.content}</p>
    </Container>
);

export default Info;