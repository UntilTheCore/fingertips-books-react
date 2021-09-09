// 小数点数据的判断
const checkValue = (outPut: string) => {
  // 小数点左右位数判断，总的长度加起来不超过10位，小数点有效位不超过2位，小数点右边不大于7位
  if (outPut.includes(".")) {
    const [lLength, rLength] = outPut.split(".");
    const lLen = lLength.length;
    if (rLength) {
      const rLen = rLength.length;
      if ((lLen + rLen) > 8 || lLen > 6 || rLen > 1) {
        return false;
      }
    }
  } else {
    return outPut.length < 9;
  }
  return true;
};

const setValue = (text: string, outPut: string): string => {
  if (checkValue(outPut)) {
    if (text === ".") {
      if (outPut === "0") {
        return "0" + text;
      } else if (outPut.includes(".")) {
        return outPut;
      } else {
        return outPut + text;
      }
    } else {
      if (outPut === "0") {
        return text;
      } else {
        return outPut + text;
      }
    }
  } else {
    return outPut;
  }
};

// 删除
const deleteNum = (outPut: string) => {
  if (outPut.length === 1) {
    return "0";
  } else {
    return outPut.slice(0, -1);
  }
};

const generatorOutput = (text: string, outPut = "0"): string => {
  switch (text) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      return setValue(text, outPut);
    case ".":
      return setValue(text, outPut);
    case "删除":
      return deleteNum(outPut);
    case "清空":
      return "0";
    default:
      return "";
  }
};

export { generatorOutput };
