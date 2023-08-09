import { DVLabSVG } from "./SVGIcons/DVLabSVG";

export const PoweredByComponent: IComponent = () => (
  <div className="sticky flex py-2 justify-center items-center text-sm">
    <a
      className=" flex items-center justify-center gap-4"
      target="_blank"
      href="https://github.com/DV-Lab"
      rel="noreferrer"
    >
      <span>Powered by </span>
      <span className="bg-teal-200 p-1 rounded-lg">
        <DVLabSVG width={64} height="auto" />
      </span>
    </a>
  </div>
);
