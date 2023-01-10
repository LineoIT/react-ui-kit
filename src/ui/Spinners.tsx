import { FC } from "react";
import { Spinner } from "../components/Spinner";
import { ArcSpinner, DotSpinner } from "../components/Spinner/Spinner";
import { Heading } from "./Heading";

export const SpinnerUI: FC<{ className?: string }> = (prop) => {
  return (
    <div className={prop.className}>
        <Heading>Spinners</Heading>
        <div className="flex items-center flex-wrap gap-8 py-2">
            <Spinner />
            <ArcSpinner /> 
            <DotSpinner /> 
        </div>
    </div>
  );
};
