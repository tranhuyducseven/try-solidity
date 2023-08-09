import { ArrowPathIcon } from "@heroicons/react/24/outline";
import Button from "@material-tailwind/react/components/Button";
import IconButton from "@material-tailwind/react/components/IconButton";
import { cx } from "@utils/tools";
import { ComponentProps } from "react";

import { LoadingSVG } from "./SVGIcons/LoadingSVG";

type LoadableButton = ComponentProps<typeof Button> & {
  loading?: boolean;
  childclassname?: string;
  loadingWidth?: number;
  loadingHeight?: number;
};
type LoadableIconButton = ComponentProps<typeof IconButton> & {
  loading?: boolean;
};

export const LoadableButton: IComponent<LoadableButton> = (props) => {
  const btn_props = {
    ...props,
    loading: undefined,
    disabled: props.disabled || props.loading,
  };
  const { childclassname, loadingHeight = 18, loadingWidth = 18 } = props;
  return (
    <Button {...btn_props}>
      {props.loading ? (
        <div className="w-full py-1 flex items-center justify-center gap-2 capitalize">
          <ArrowPathIcon
            width={loadingWidth}
            height={loadingHeight}
            className={cx(childclassname, "animate-spin")}
          />
          Loading...
        </div>
      ) : (
        props.children
      )}
    </Button>
  );
};

export const LoadableIconButton: IComponent<LoadableIconButton> = (props) => {
  const btn_props = {
    ...props,
    loading: undefined,
    disabled: props.disabled || props.loading,
  };

  return (
    <IconButton {...btn_props}>
      {props.loading ? (
        <div className="py-1">
          <LoadingSVG width={18} height={18} />
        </div>
      ) : (
        props.children
      )}
    </IconButton>
  );
};
