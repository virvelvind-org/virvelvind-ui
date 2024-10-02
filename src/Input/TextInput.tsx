import { forwardRef, InputHTMLAttributes } from "react";

// extend input attributes
interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
}

// pass ref to input
const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, description, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && <label className="text-base">{label}</label>}
        {description && (
          <p className="text-grey-700 leading-5 py-2 font-normal">
            {description}
          </p>
        )}

        <input
          ref={ref}
          {...props}
          className={`border-grey-500 border rounded p-2 w-full focus:ring-2 hover:border-black focus:ring-yellow-200 focus:border-yellow-200 focus:outline-none ${props.className}`}
        />
      </div>
    );
  }
);

export default TextInput;

TextInput.displayName = "TextInput";
