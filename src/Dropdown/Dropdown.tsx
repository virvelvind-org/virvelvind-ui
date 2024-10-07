import { forwardRef, SelectHTMLAttributes } from "react";
interface Option {
  value: string;
  label: string;
  disabled?: boolean | undefined;
}
interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  full?: boolean;
  description?: string;
  options: Option[];
  selected?: string;
}

const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  ({ label, description, full, options, selected, ...props }, ref) => {
    return (
      <div
        className={`flex flex-col ${full ? "w-full" : ""} ${props.className}`}
      >
        {label && <label className="text-base">{label}</label>}
        {description && (
          <p className="text-grey-700 leading-5 py-2 font-normal">
            {description}
          </p>
        )}

        <select
          ref={ref}
          value={selected}
          {...props}
          className="border-grey-500 border rounded p-2 w-full focus:ring-2 hover:border-black focus:ring-yellow-200 focus:border-yellow-200 focus:outline-none"
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.value === "" || option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export default Dropdown;

Dropdown.displayName = "Dropdown";
