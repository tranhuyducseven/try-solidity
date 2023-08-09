import { Tooltip } from "@material-tailwind/react";
import { toast } from "react-toastify";

export const CopyToClipboard: IComponent<{
  text: string;
  className?: string;
  content?: string;
}> = ({ children, text, className, content = "Copy" }) => {
  const onPressCopyToClipboard = (text?: string) => {
    if (text) {
      navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard", { autoClose: 1000 });
    }
  };
  return (
    <Tooltip
      content={content}
      nonce={undefined}
      onResize={undefined}
      onResizeCapture={undefined}
      placement="top"
      className="w-fit"
    >
      <div className={className} onClick={() => onPressCopyToClipboard(text)}>
        {children}
      </div>
    </Tooltip>
  );
};
