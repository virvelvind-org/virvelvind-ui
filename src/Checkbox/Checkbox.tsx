import { forwardRef, InputHTMLAttributes } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  description?: string;
  id: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, id, description, ...props }, ref) => {
    return (
      <div className="flex items-center me-4">
        <input
          checked
          id={id}
          type="checkbox"
          value=""
          className="w-[35px] h-[35px] text-gray-700 border-gray-700 rounded border-2 dark:ring-offset-gray-800 focus:ring-0 dark:bg-gray-700 dark:border-gray-600 transition duration-150 ease-in-out"
          {...props}
        />
        <label htmlFor={id} className="ms-4 text-sm text-black">
          <span>{label}</span>
          {description && (
            <p className="text-gray-500 leading-5 py-2 font-normal">
              {description}
            </p>
          )}
        </label>
      </div>
    );
  }
);

export default Checkbox;

Checkbox.displayName = "Checkbox";
