import { useEffect, useState } from 'react';

const earningHashTable = {
    'salary': '工资',
    'partTimeJob': '兼职',
    'moneyManagement': '理财',
    'bonus': '奖金',
    'claimExpense': '报销',
    'cashGift': '礼金',
    'other': '其他收入',
};
const expendHashTable = {
    'dining': '餐饮',
    'shopping': '购物',
    'bus': '交通',
    'commodity': '日常',
    'vegetables': '蔬菜',
    'fruits': '水果',
    'snacks': '零食',
    'costume': '服饰',
    'amusement': '娱乐',
    'redpacket': '红包',
    'communication': '通讯',
    'socialContact': '社交',
    'sport': '运动',
    'beauty': '美容',
    'travel': '旅游',
    'gift': '礼物',
    'house': '住房',
    'car': '汽车',
    'living': '居家',
    'homeAppliances': '家电',
    'waterAndElectricity': '水电',
    'expressage': '快递',
    'repair': '维修',
    'eldership': '长辈',
    'child': '孩子',
    'wine': '烟酒',
    'health': '医疗',
    'pet': '宠物',
    'study': '学习',
    'book': '书籍',
    'office': '办公',
    'donate': '捐赠',
    'lottery': '彩票',
    'other': '其他支出'
};

const keyExpendName = 'expendTagList';
const keyEarningName = 'earningTagList';
// 此hook可用于后期自定义新增标签
const useTags = (type: '+' | '-' | null) => { // 创建自定义 Hook
    const [expendTags, setExpendTags] = useState<{ [key: string]: string }>();
    const [earningTags, setEarningTags] = useState<{ [key: string]: string }>();
    useEffect(() => {
        const expandTagList = window.localStorage.getItem(keyExpendName);
        const earningTagList = window.localStorage.getItem(keyEarningName);
        if ( !expandTagList ) {
            window.localStorage.setItem(keyExpendName, JSON.stringify(expendHashTable));
        }
        if ( !earningTagList ) {
            window.localStorage.setItem(keyEarningName, JSON.stringify(earningHashTable));
        }
        setExpendTags(JSON.parse(window.localStorage.getItem(keyExpendName) || '[]'));
        setEarningTags(JSON.parse(window.localStorage.getItem(keyEarningName) || '[]'));
    }, []);
    const findTagName = (tagId: string, type: '+' | '-') => {
        return type === '-' ? (expendTags && expendTags[tagId]) : earningTags && earningTags[tagId];
    };
    return {
        tags: type === '-' ? expendTags : earningTags,
        findTagName
    };
};

export { useTags };
