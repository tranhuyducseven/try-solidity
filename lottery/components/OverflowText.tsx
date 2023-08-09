/**
 * This component prevent text overflow outside and show tooltip when truncated
 */
import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import { useActionDebounce } from "@hooks/useAction";
import { useWindowResize } from "@hooks/useWindowResize";
import { Tooltip } from "@material-tailwind/react";
import { cx } from "@utils/tools";
import { HTMLAttributes, ReactNode, useRef, useState } from "react";

import { CopyToClipboard } from "./CopyToClipboard";

const isEllipsisActive = (parent: HTMLDivElement, e: HTMLDivElement) => {
  const c = e.cloneNode(true) as HTMLDivElement;
  c.style.position = "absolute";
  c.style.display = "inline";
  c.style.width = "auto";
  c.className.replaceAll("truncate", "");
  c.className += " whitespace-nowrap";
  c.style.visibility = "hidden";
  parent.appendChild(c);
  const truncated = c.clientWidth > e.clientWidth;
  c.remove();
  return truncated;
};

export const OverflowText: IComponent<
  HTMLAttributes<HTMLDivElement> & {
    showCopy?: boolean;
    textToCopy?: string;
    renderTooltip?: ReactNode;
  }
> = (props) => {
  const { showCopy, textToCopy, renderTooltip } = props;
  const [isOverflow, setIsOverflow] = useState(false);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  const debounce = useActionDebounce(500, true);

  useWindowResize(() => {
    debounce(() => {
      if (textRef.current && parentRef.current) {
        setIsOverflow(isEllipsisActive(parentRef.current, textRef.current));
      }
    });
  }, true);

  const passthroughProps = {
    ...props,
  };
  delete passthroughProps.showCopy;
  delete passthroughProps.textToCopy;
  delete passthroughProps.renderTooltip;

  return (
    <div
      className={cx("flex max-w-full flex-row group items-center", {
        "min-h-[32px]": showCopy,
        "max-w-[78%]": isOverflow,
      })}
      ref={parentRef}
    >
      <Tooltip
        hidden={!isOverflow}
        content={renderTooltip ?? props.children}
        className={cx("max-w-md", { "max-w-[85%]": isOverflow })}
        placement="bottom-start"
      >
        <div className="w-full">
          <div
            {...passthroughProps}
            ref={textRef}
            className={cx(
              "w-full group",
              { truncate: !props.className?.includes("line-clamp") },
              props.className
            )}
          >
            {props.children}
          </div>
        </div>
      </Tooltip>
      {showCopy && (
        <CopyToClipboard
          text={textToCopy ?? ""}
          className="ml-1 cursor-pointer"
        >
          <ClipboardDocumentListIcon className="w-5 h-5 hover:text-primary" />{" "}
        </CopyToClipboard>
      )}
    </div>
  );
};
