import { useState } from "react";
import CreateId from "../lib/createId";

const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>([
    {id: (new CreateId()).getId(), name: "衣"},
    {id: (new CreateId()).getId(), name: "食"},
    {id: (new CreateId()).getId(), name: "住"},
    {id: (new CreateId()).getId(), name: "行"},
  ]);
  return {tags, setTags};
};

export { useTags };
