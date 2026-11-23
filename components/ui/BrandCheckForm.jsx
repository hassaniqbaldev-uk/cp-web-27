import { ArrowUpRight } from "lucide-react";
import { fieldClassName, labelClassName } from "./ServiceContactForm";

const urlFields = [
  { id: "website", label: "Website link", placeholder: "www.yourdomain.com" },
  {
    id: "social",
    label: "Instagram / LinkedIn URL",
    placeholder: "www.yourdomain.com",
  },
];

// Branding footer form. Same field styling as ServiceContactForm (markup only,
// not wired to an API yet).
const BrandCheckForm = () => {
  return (
    <form className="flex flex-col gap-[30px]">
      <div className="grid grid-cols-2 gap-[20px]">
        <div className="relative">
          <label htmlFor="brand-check-name" className={labelClassName}>
            Your name (required)
          </label>

          <input
            id="brand-check-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="John Doe"
            className={fieldClassName}
          />
        </div>

        <div className="relative">
          <label htmlFor="brand-check-email" className={labelClassName}>
            Your email (required)
          </label>

          <input
            id="brand-check-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@company.com"
            className={fieldClassName}
          />
        </div>
      </div>

      {urlFields.map(({ id, label, placeholder }) => (
        <div key={id} className="relative">
          <label htmlFor={`brand-check-${id}`} className={labelClassName}>
            {label}
          </label>

          <input
            id={`brand-check-${id}`}
            name={id}
            type="text"
            inputMode="url"
            placeholder={placeholder}
            className={fieldClassName}
          />
        </div>
      ))}

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-[10px] rounded-full bg-black py-[15px] text-[16px] font-extrabold tracking-[-0.02em] text-white uppercase"
      >
        Get my free brand check
        <ArrowUpRight size={18} strokeWidth={2.5} />
      </button>
    </form>
  );
};

export default BrandCheckForm;
