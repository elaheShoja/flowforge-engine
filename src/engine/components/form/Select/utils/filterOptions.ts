import type {
  SelectGroup,
  SelectOption,
} from "../Select.types";

export default function filterOptions(
  options: Array<SelectOption | SelectGroup>,
  search: string
): Array<SelectOption | SelectGroup> {
  if (!search.trim()) {
    return options;
  }

  const keyword = search.toLowerCase();

  return options.reduce<
    Array<SelectOption | SelectGroup>
  >((result, option) => {

    // Group
    if ("options" in option) {

      const children = option.options.filter((child) =>
        child.label.toLowerCase().includes(keyword)
      );

      if (children.length > 0) {
        result.push({
          ...option,
          options: children,
        });
      }

      return result;
    }

    // Single option
    if (
      option.label
        .toLowerCase()
        .includes(keyword)
    ) {
      result.push(option);
    }

    return result;

  }, []);
}