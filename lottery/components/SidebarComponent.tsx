import { TAB_RECORDS, TTab } from "@configs/tab";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { Card, List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { cx } from "@utils/tools";
import { useRouter } from "next/router";
import { useCallback } from "react";

import { PoweredByComponent } from "./PoweredByComponent";

const CustomListItem: IComponent<{
  name: string;
  isSelected: boolean;
  icon: React.ReactNode;
  onClick: () => void;
}> = ({ name, isSelected, icon, onClick }) => {
  return (
    <ListItem
      nonce={undefined}
      onResize={undefined}
      onResizeCapture={undefined}
      className={cx(
        "text-secondary hover:text-primary cursor-pointer focus:text-primary font-default bg-transparent",
        isSelected && "text-primary"
      )}
      onClick={onClick}
    >
      <ListItemPrefix
        nonce={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
      >
        {icon}
      </ListItemPrefix>
      <h3
        className={cx("font-bold text-[20px]", {
          "text-black": isSelected,
        })}
      >
        {name}
      </h3>
    </ListItem>
  );
};

export const SidebarComponent: IComponent = () => {
  const router = useRouter();

  const handleSelectSidebarItem = useCallback(
    async (value: TTab) => {
      router.replace({ query: { tab: value } });
    },
    [router.query]
  );

  const tab = router.query.tab;

  return (
    <Card
      className="sidebar h-[calc(100vh-4rem)] max-w-[300px] p-4 shadow-xl shadow-blue-gray-900/5 "
      nonce={undefined}
      onResize={undefined}
      onResizeCapture={undefined}
    >
      <div className="py-6 px-4 flex justify-center gap-4">
        <h1 className="font-bold text-3xl">DV Lab</h1>
      </div>
      <List
        nonce={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
        className="bg-transparent flex flex-col h-full"
      >
        <CustomListItem
          isSelected={!tab || tab === TAB_RECORDS.Nothing}
          name={TAB_RECORDS.Nothing}
          icon={<div className="w-5 h-5 bg-indigo-500" />}
          onClick={() => handleSelectSidebarItem("Nothing")}
        />
        <div className="grow flex flex-col justify-end w-full item">
          <button className="py-2 px-2 flex items-center text-[#777]  font-default bg-transparent gap-2 font-bold text-[20px]">
            <ArrowRightOnRectangleIcon
              className="w-6 h-6 hover:text-primary cursor-pointer focus:text-primary"
              strokeWidth={1.5}
            />
          </button>
        </div>
        <PoweredByComponent />
      </List>
    </Card>
  );
};
