import { useCallback, useState } from "react";
import { useUpdate } from "./useUpdate";

type recordType = {
  tags: number[],
  note: string,
  category: "+" | "-",
  money: number,
  createAt: string, // 创建记录的日期
}

type newRecordType = Omit<recordType, "createAt">;

const useRecords = () => {
  const [records, setRecords] = useState<recordType[]>([]);

  const addRecord = (record: newRecordType) => {
    console.log("add record");
    if (record.money <= 0) {
      alert("金额不能为0");
      return false;
    } else if (record.tags.length === 0) {
      alert("请至少一个标签");
      return false;
    }
    const temp: recordType = {
      ...record,
      createAt: new Date().toISOString()
    };
    setRecords([...records, temp]);
  };

  const a = useCallback(() => {
    localStorage.setItem("records", JSON.stringify(records));
  }, [records]);

  useUpdate(a, [records]);

  return {addRecord};
};

export { useRecords };
