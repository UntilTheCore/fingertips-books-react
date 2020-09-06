import React, { useState } from 'react';
import Types from 'components/Types';
import Tags from 'components/Tags';
import NumberPad from '../components/Money/NumberPad';
import QueueAnim from 'rc-queue-anim';
import Layout from '../components/Layout';
import { Calendar, Toast } from 'antd-mobile';

const todayStamp = Date.parse(new Date().toISOString().split('T')[0]);
let minDate = new Date(todayStamp - 2592000000);
const maxDate = new Date(todayStamp + 432000000);
const Money = () => {
    const [selectedType, setSelectedType] = useState<'-' | '+'>('-');
    const [selectedTag, setSelectedTag] = useState('');
    const [calendarShow, setCalendarShow] = useState(false);
    const [selectedTime, setSelectedTime] = useState<Date>(new Date());
    
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
            <Layout
                headerSlot={
                    <Types
                        defaultType={ selectedType }
                        onChange={ (value) => {
                            setSelectedType(value);
                        } }
                    /> }
                footerSlot={
                    <QueueAnim animConfig={ [
                        { opacity: [1, 0], translateY: [0, 200] },
                        { opacity: [1, 0], translateY: [0, -200] }
                    ] }>
                        <NumberPad key={ 'a' }
                                   isOk={ (note, amount) => {
                                       // 做点击完成按钮后的判断
                                       if ( parseFloat(amount) === 0 ) {
                                           Toast.fail('金额为0', 1);
                                           return;
                                       }
                            
                                       if ( selectedTag === '' ) {
                                           Toast.info('请选择标签', 1);
                                           return;
                                       }
                                   } }
                                   calendarShow={ (value) => {
                                       setCalendarShow(value);
                                   } }
                                   selectedTime={ selectedTime }
                        />
                    </QueueAnim>
                }>
                <Tags tags={ iconHashTable } onChange={ (tagId) => {setSelectedTag(tagId);} } />
                
                <Calendar
                    visible={ calendarShow }
                    onCancel={ () => setCalendarShow(false) }
                    onConfirm={ (startDateTime) => {
                        if ( startDateTime ) {
                            setSelectedTime(startDateTime);
                            setCalendarShow(false);
                        }
                    }
                    }
                    type='one'
                    pickTime={ true }
                    minDate={ minDate }
                    maxDate={ maxDate }
                    rowSize={ 'xl' }
                    defaultTimeValue={ new Date() }
                    defaultValue={ [new Date()] }
                >
                </Calendar>
            </Layout>
        </div>
    );
};

export default Money;