import { LoadableButton } from "@components/LoadableButton";
import { ZuniSVG } from "@components/SVGIcons/ZuniSVG";
import { cx } from "@utils/tools";
import Image from "next/image";
import { useState } from "react";

import styles from "./styles.module.scss";

export const CardComponent: IComponent<{
  name: string;
  did: string;
  logo: string;
  handleRemove: (did: string) => Promise<void>;
}> = ({ name, did, logo, handleRemove }) => {
  const [loading, setLoading] = useState(false);
  return (
    <div
      className={cx(
        "flex p-[38px] justify-between items-center gap-[20px] shrink-0",
        styles.container
      )}
    >
      <div className="flex flex-col gap-3">
        <h2 className="text-[28px] font-bold">{name || "Unknown"}</h2>
        <h3 className="text-[20px] font-normal mt-[8px]">{did}</h3>
        <LoadableButton
          className="button !bg-[#FF6161] !px-10 !py-3 !h-[52px] !text-[16px] flex items-center justify-center capitalize !w-[200px]"
          onClick={() => {
            setLoading(true);
            handleRemove(did).then(() => setLoading(false));
          }}
          loading={loading}
        >
          Remove
        </LoadableButton>
      </div>
      <div>
        {logo ? (
          <div className="text-left mt-4">
            <div className="aspect-square wrapper bg-[#444] rounded-full flex items-center justify-center p-1">
              <Image
                src={logo ?? "/mock/card.png"}
                alt={name}
                width={120}
                height={120}
                className="rounded-full object-cover"
              />
            </div>
          </div>
        ) : (
          <ZuniSVG />
        )}
      </div>
    </div>
  );
};

export const VCCardComponent: IComponent<{
  id: number;
  name: string;
  description: string;
  image: string;
  onClick: () => void;
}> = ({ id, name, description, image, onClick }) => {
  return (
    <div
      key={id}
      className="bg-white rounded-[30px] overflow-hidden shadow-lg flex flex-col cursor-pointer   gap-4"
      onClick={onClick}
    >
      <picture className="bg-gray-50 shadow-sm max-h-52 w-full flex items-center justify-center aspect-square p-2 py-8">
        <img className="object-contain w-fit" src={image} alt="Placeholder" />
      </picture>
      <div className="px-6 grow">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="py-3">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #{name.toLowerCase()}
          </span>
          <span className="mt-1 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            #privacy
          </span>
        </div>
      </div>
    </div>
  );
};
