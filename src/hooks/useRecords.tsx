import { useEffect, useState } from "react";
import { useUpdate } from "./useUpdate";
import dayjs from "dayjs";

type recordType = {
  tags: number[],
  note: string,
  category: "+" | "-",
  money: number,
  createAt: string, // 创建记录的日期
}

type newRecordType = Omit<recordType, "createAt">;

const useRecords = () => {
  const [ records, setRecords ] = useState<recordType[]>( [] );

  // 获取 records 数据
  useEffect( () => {
    setRecords( JSON.parse( localStorage.getItem( "records" ) || "[]" ) );
  }, [] );

  useUpdate( () => {
    localStorage.setItem( "records", JSON.stringify( records ) );
  }, [ records ] );


  const addRecord = (record: newRecordType) => {
    if ( record.money <= 0 ) {
      alert( "金额不能为0" );
      return false;
    } else if ( record.tags.length === 0 ) {
      alert( "请至少一个标签" );
      return false;
    }
    const temp: recordType = {
      ...record,
      createAt: new Date().toISOString()
    };
    setRecords( [ ...records, temp ] );
    return true;
  };

  /**
   * 通过日期筛选获取记录数据
   */
  const getRecordsByDate = (category: '+' | '-'): { date: string, list: recordType[] }[] => {
    const result = [];

    for ( let i = 0; i < 6; i++ ) {
      const day = dayjs().subtract( i, "day" );
      result[i] = {
        date: day.format( "YYYY年MM月DD日" ),
        list: records.filter( r => dayjs( r.createAt ).isSame( day, "day" ) ).filter(n => n.category === category).reverse()
      };
    }

    return result;
  };

  return { records, addRecord, getRecordsByDate };
};

export { useRecords };
