import { FC } from "react";
import { Spinner } from "../components/Spinner";
import { ArcSpinner, DotSpinner } from "../components/Spinner/Spinner";

export const SpinnerUI: FC<{ className?: string }> = (prop) => {
  return (
    <div className={prop.className}>
      <fieldset className="border p-2">
        <legend className="p-2  dark:text-gray-400">Spinners</legend>
        <div className="flex items-center flex-wrap gap-8 py-2">
            <Spinner />
            <ArcSpinner /> 
            <DotSpinner /> 
        </div>
      </fieldset>
    </div>
  );
};
