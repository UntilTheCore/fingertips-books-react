import { useEffect, useState } from 'react';
import { useUpdate } from 'hooks/useUpdate';

const keyName = 'recordList';

const useRecord = () => {
    // const [record, setRecord] = useState<RecordListItem>();
    const [records, setRecords] = useState<RecordListItem[]>();
    // 首次进入获取列表数据
    useEffect(() => {
        setRecords(JSON.parse(window.localStorage.getItem(keyName) || '[]'));
    }, []);
    /*
    * 添加一个record记录
    *
    * 添加后自动保存
    * */
    const addRecord = (value: RecordListItem) => {
        setRecords(records?.concat(value));
    };
    // 监听record变化
    useUpdate(() => {
        // 执行保存操作
        window.localStorage.setItem(keyName, JSON.stringify(records));
    }, [records]);
    return { records, addRecord };
};

export { useRecord };