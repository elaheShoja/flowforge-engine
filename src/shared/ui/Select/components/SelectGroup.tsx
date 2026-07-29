import type { SelectGroup as SelectGroupType } from "../Select.types";

interface Props {
  group: SelectGroupType;
}

export default function SelectGroup({
  group,
}: Props) {
  return (
    <div className="ff-select__group">
      <div className="ff-select__group-label">
        {group.label}
      </div>
    </div>
  );
}