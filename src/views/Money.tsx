import React from 'react';
import Types from 'components/Types';
import Tags from 'components/Tags';
import NumberPad from '../components/Money/NumberPad';
import QueueAnim from 'rc-queue-anim';
import Layout from '../components/Layout';
type Props = {
    className: string,
}

const Money = () => {
    return (
        <Layout
            headerSlot={<Types type='-' />}
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
    );
};

export default Money;