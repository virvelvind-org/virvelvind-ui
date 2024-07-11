import { forwardRef, InputHTMLAttributes } from "react";

// extend input attributes
interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  description?: string;
  rows?: number;
}

// pass ref to input
const TextArea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, description, rows, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && <label className="text-base">{label}</label>}
        {description && (
          <p className="text-grey-700 leading-5 py-2 font-normal">
            {description}
          </p>
        )}

        <textarea
          ref={ref}
          rows={rows}
          {...props}
          className="border-grey-500 border rounded p-2 w-full focus:ring-2 hover:border-black focus:ring-yellow-200 focus:border-yellow-200 focus:outline-none"
        />
      </div>
    );
  }
);

export default TextArea;

TextArea.displayName = "TextArea";
