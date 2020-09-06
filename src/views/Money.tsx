import React, { useState } from 'react';
import Types from 'components/Types';
import Tags from 'components/Tags';
import NumberPad from '../components/Money/NumberPad';
import QueueAnim from 'rc-queue-anim';
import Layout from '../components/Layout';
import { Calendar, Toast } from 'antd-mobile';
import { useTags } from '../components/useTags';

const todayStamp = Date.parse(new Date().toISOString().split('T')[0]);
let minDate = new Date(todayStamp - 2592000000);
const maxDate = new Date(todayStamp + 432000000);
const Money = () => {
    const [selectedType, setSelectedType] = useState<'-' | '+'>('-');
    const [selectedTag, setSelectedTag] = useState('');
    const [calendarShow, setCalendarShow] = useState(false);
    const [selectedTime, setSelectedTime] = useState<Date>(new Date());
    const { tags } = useTags();
    
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
                <Tags tags={ tags } onChange={ (tagId) => {setSelectedTag(tagId);} } />
                
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