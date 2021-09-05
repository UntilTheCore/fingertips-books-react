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

  const updateTags = (tagId: number, obj: { newName: string }) => {
    const index = findTagIndex(tagId);
    if (index !== -1) {
      const cloneTags: tagType[] = JSON.parse(JSON.stringify(tags));
      cloneTags.splice(index, 1, { id: tagId, name: obj.newName });
      setTags(() => cloneTags);
      return true;
    }
    return false;
  }
  return { tags, setTags, findTag, findTagIndex, updateTags };
};

export { useTags };
