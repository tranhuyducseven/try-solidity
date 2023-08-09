import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Tooltip } from "@material-tailwind/react";
import { cx } from "@utils/tools";

import styles from "./styles.module.scss";

export const SearchComponent: IComponent<{
  placeholder?: string;
  tooltip?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}> = ({ onChange, onClick, value, className, placeholder, tooltip }) => (
  <div className={cx(styles.container, className)}>
    <input
      type="text"
      className="w-full h-full outline-none text-[20px] font-normal leading-[24px] bg-transparent text-[#696969]"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
    <Tooltip content={tooltip}>
      <button onClick={onClick}>
        <MagnifyingGlassIcon className="w-8 h-8 fill-secondary hover:fill-[#696969]" />
      </button>
    </Tooltip>
  </div>
);
