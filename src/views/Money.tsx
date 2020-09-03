import React, { useState } from 'react';
import Types from 'components/Types';
import Tags from 'components/Tags';
import NumberPad from '../components/Money/NumberPad';
import QueueAnim from 'rc-queue-anim';
import Layout from '../components/Layout';

const Money = () => {
    const [selectedType,setSelectedType] = useState<'-'|'+'>('-');
    const [selectedTag,setSelectedTag] = useState('')
    const iconHashTable = new Map([
        ['dining', '餐饮'],
        ['shopping', '购物'],
        ['bus', '交通'],
        ['commodity', '日常'],
        ['vegetables', '蔬菜'],
        ['fruits', '水果'],
        ['snacks', '零食'],
        ['costume', '服饰'],
        ['amusement', '娱乐'],
        ['redpacket', '红包'],
        ['communication', '通讯'],
        ['socialContact', '社交'],
        ['sport', '运动'],
        ['beauty', '美容'],
        ['travel', '旅游'],
        ['gift', '礼物'],
        ['house', '住房'],
        ['car', '汽车'],
        ['living', '居家'],
        ['homeAppliances', '家电'],
        ['waterAndElectricity', '水电'],
        ['expressage', '快递'],
        ['repair', '维修'],
        ['eldership', '长辈'],
        ['child', '孩子'],
        ['wine', '烟酒'],
        ['health', '医疗'],
        ['pet', '宠物'],
        ['study', '学习'],
        ['book', '书籍'],
        ['office', '办公'],
        ['donate', '捐赠'],
        ['lottery', '彩票'],
        ['other', '其他支出']
    ]);
    return (
        <div>
            {selectedType}
            <br/>
            {selectedTag}
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
                <Tags tags={iconHashTable} onChange={(tagId) => {setSelectedTag(tagId)}} />
            </Layout>
        </div>
    );
};

export default Money;