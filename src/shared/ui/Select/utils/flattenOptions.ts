import type {
  SelectGroup,
  SelectOption,
} from "../Select.types";

export default function flattenOptions(
  options: Array<SelectOption | SelectGroup>
): SelectOption[] {

  return options.flatMap((option) => {

    if ("options" in option) {
      return option.options;
    }

    return option;

  });

}