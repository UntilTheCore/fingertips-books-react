import { useState } from "react";
import CreateId from "../lib/createId";

const _tags = [
  { id: (new CreateId()).getId(), name: "衣" },
  { id: (new CreateId()).getId(), name: "食" },
  { id: (new CreateId()).getId(), name: "住" },
  { id: (new CreateId()).getId(), name: "行" },
]

const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>(_tags);
  return { tags, setTags };
};

export { useTags };
