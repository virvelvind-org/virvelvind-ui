import React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface RadioButtonProps {
  id: string;
  title: string;
  value: string;
  subtitle?: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: () => void;
}

const RadioButton = React.forwardRef<HTMLDivElement, RadioButtonProps>(
  (
    { title, subtitle, disabled, checked, id, value, onChange, ...props },
    ref
  ) => {
    return (
      <div ref={ref} className="flex items-start" {...props}>
        <input
          type="radio"
          id={id}
          value={value}
          disabled={disabled}
          checked={checked}
          onChange={onChange}
          className="before:content[''] hidden peer"
          style={{ minWidth: "35px", minHeight: "35px" }}
        />
        <label
          htmlFor={id}
          className={cn(
            "flex items-center gap-4 cursor-pointer",
            checked && "peer-checked"
          )}
        >
          {checked ? (
            <div className="w-[35px] h-[35px] bg-grey-700 rounded-full flex items-center justify-center relative">
              <Check
                aria-hidden="true"
                className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0 text-green-500 absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none text-white"
              />
            </div>
          ) : (
            <div
              className={cn(
                "w-[35px] h-[35px] border-2 border-grey-700 rounded-full flex items-center justify-center relative",
                disabled && "border-grey-500"
              )}
            ></div>
          )}
          <div className="items-center justify-center">
            <div className="text-black text-[16px] leading-[19.36px] tracking-[-2%]">
              {title}
            </div>
            {subtitle && (
              <div className="text-grey-700 text-[16px] leading-[19.36px] tracking-[-2%]">
                {subtitle}
              </div>
            )}
          </div>
        </label>
      </div>
    );
  }
);

RadioButton.displayName = "RadioButton";

export default RadioButton;
