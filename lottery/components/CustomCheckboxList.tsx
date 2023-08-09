import { cx } from "@utils/tools";
import { useState } from "react";

import { CustomCheckableInput } from "./CustomCheckableInput";
import styles from "./styles.module.scss";

export const CustomCheckboxList: IComponent<{
  list: string[];
  name?: string;
  className?: string;
  itemClassName?: string;
  getSelectedItems: (selectItems: string[]) => void;
}> = ({ list, name, className, itemClassName, getSelectedItems }) => {
  const [check, setCheck] = useState<boolean[]>(Array(list.length).fill(false));
  return (
    <ul className={className}>
      {list.map((text, index) => (
        <li
          className={cx(
            styles.item,
            { "bg-light": check[index] },
            itemClassName
          )}
          key={index}
          onClick={() => {
            const checkTemp = [...check];
            checkTemp[index] = !checkTemp[index];
            setCheck(checkTemp);
            getSelectedItems(list.filter((_, i) => checkTemp[i]));
          }}
        >
          <CustomCheckableInput
            type="checkbox"
            name={name}
            check={check[index]}
            text={text}
          />
        </li>
      ))}
    </ul>
  );
};
