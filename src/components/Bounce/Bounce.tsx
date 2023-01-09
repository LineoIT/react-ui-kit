import React from "react";

type Prop = {
  size?: number;
  unit?: string;
  disabled?: boolean;
  color?: string;
  fill?: boolean;
  strokeWidth?: number
};


export const Bounce: React.FC<Prop> = ({
  size = 20,
  unit = "px",
  disabled = false,
  color = "",
  fill = false,
  strokeWidth = 2
}) => {
  const dimen = `${size}${unit}`;
  const bounceDimen = `${size / 2}${unit}`;



  return (
    <div
      className="rounded-full flex items-center justify-center"
      style={{
        borderColor: disabled ? "gray" : color,
        background: fill ? color : "transparent",
        width: dimen,
        height: dimen,
        borderWidth: `${strokeWidth}${unit}`
      }}
    >
      {!disabled && !fill && (
        <div
          className="border rounded-full"
          style={{
            backgroundColor: disabled ? "gray" : color,
            width: bounceDimen,
            height: bounceDimen,
          }}
        />
      )}
    </div>
  );
};

