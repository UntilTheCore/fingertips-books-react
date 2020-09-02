import React, { useState } from 'react';
import Types from 'components/Types';
import Tags from 'components/Tags';
import NumberPad from '../components/Money/NumberPad';
import QueueAnim from 'rc-queue-anim';
import Layout from '../components/Layout';

const Money = () => {
    const [selectedType,setSelectedType] = useState<'-'|'+'>('-');
    return (
        <div>
            {selectedType}
            <Layout
                headerSlot={
                    <Types
                        defaultType={selectedType}
                        onChange={(value) => {
                            setSelectedType(value)
                        }}
                    />}
                footerSlot={
                    <QueueAnim animConfig={[
                        { opacity: [1, 0], translateY: [0, 200] },
                        { opacity: [1, 0], translateY: [0, -200] }
                    ]}>
                        <NumberPad key={'a'} className={'xxx'}/>
                    </QueueAnim>
                }>
                <Tags />
            </Layout>
        </div>
    );
};

export default Money;