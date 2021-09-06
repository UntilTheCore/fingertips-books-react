import { useState } from "react";
import CreateId from "../lib/createId";

type tagType = {
  id: number,
  name: string,
}

type findTagType = (tagId: number) => tagType | undefined;

const defaultTags: tagType[] = [
  { id: (new CreateId()).getId(), name: "衣" },
  { id: (new CreateId()).getId(), name: "食" },
  { id: (new CreateId()).getId(), name: "住" },
  { id: (new CreateId()).getId(), name: "行" },
]

const useTags = () => {
  const [tags, setTags] = useState<tagType[]>(defaultTags);
  const findTag: findTagType = (tagId: number): tagType | undefined => {
    return tags.filter(tag => tag.id === tagId)[0];
  }

  /**
   * 根据tag id找在 _tags 中的下标
   * @param tagId 
   * @returns -1 或 找到的下标
   */
  const findTagIndex = (tagId: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tagId === tags[i].id) {
        result = i;
        break;
      }
    }
    return result;
  }

  /**
   * 根据标签的id和提供含name的对象更新tag名
   * @param tagId
   * @param obj 
   * @returns 
   */
  const updateTags = (tagId: number, { name }: { name: string }) => {
    const index = findTagIndex(tagId);
    if (index !== -1) {
      setTags(tags.map(tag => {
        return tag.id === tagId ? { id: tag.id, name } : tag;
      }));
      return true;
    }
    return false;
  }

  /**
   * 根据tag id 删除标签
   * @param tagId 
   * @returns 
   */
  const deleteTag = (tagId: number) => {
    const index = findTagIndex(tagId);
    if (index !== -1) {
      // 过滤出所有不相同id的tag
      setTags(tags.filter(tag => tag.id !== tagId));
      return true;
    }
    return false;
  }

  return { tags, setTags, findTag, findTagIndex, updateTags, deleteTag };
};

export { useTags };
