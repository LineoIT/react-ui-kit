import { FC } from "react";

const TiersUI: FC<{ className?: string }> = (prop) => {
  return (
    <div className={prop.className}>
      <fieldset className="border p-2">
        <legend className="p-2  dark:text-gray-400">Tiers components</legend>
        <div className="flex items-center flex-wrap gap-2 py-2">
          <span className="absolute flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
        </div>
      </fieldset>
    </div>
  );
};

export default TiersUI;
