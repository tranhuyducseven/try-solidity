import { ArrowPathIcon } from "@heroicons/react/24/outline";

export const LoadingComponent: IComponent<{
  content?: string;
}> = ({ content = "Loading..." }) => (
  <div className="h-[50vh] flex flex-col justify-center items-center">
    <ArrowPathIcon className="animate-spin mb-2" width={72} height={72} />
    {content}
  </div>
);
