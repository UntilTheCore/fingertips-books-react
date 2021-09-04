import { useState } from "react";
import CreateId from "../lib/createId";

type tagType = {
  id: number,
  name: string,
}

type findTagType = (tagId: number) => tagType | undefined;

const _tags: tagType[] = [
  { id: (new CreateId()).getId(), name: "衣" },
  { id: (new CreateId()).getId(), name: "食" },
  { id: (new CreateId()).getId(), name: "住" },
  { id: (new CreateId()).getId(), name: "行" },
]

const useTags = () => {
  const [tags, setTags] = useState<tagType[]>(_tags);
  const findTag: findTagType = (tagId: number): tagType | undefined=> {
    return _tags.filter(tag => tag.id === tagId)[0];
  }
  return { tags, setTags, findTag };
};

export { useTags };
