import React from 'react';
import Layout from 'components/Layout';
import Types from 'components/Types';
import Tags from 'components/Tags';
import NumberPad from '../components/Money/NumberPad';

const Money = () => {
    return (
        <Layout headerSlot={<Types type='-' />} footerSlot={<NumberPad />}>
            <Tags />
        </Layout>
    );
};

export default Money;