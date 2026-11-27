import { ArrowUpRight } from "lucide-react";

const labelClassName =
  "bg-blue absolute -top-[8px] left-[20px] px-[10px] text-[14px] leading-[16px] font-semibold tracking-[-0.02em] text-white uppercase";

const fieldClassName =
  "h-[75px] w-full rounded-[10px] border border-white bg-transparent px-[30px] text-[18px] max-sm:h-[60px] max-sm:px-[20px] max-sm:text-[16px] tracking-[-0.02em] text-white placeholder:text-white/60 focus:ring-1 focus:ring-white focus:outline-none";

const fields = [
  {
    id: "website",
    label: "Website",
    placeholder: "www.yourwebsite.com",
    inputMode: "url",
    autoComplete: "url",
    className: "col-span-2 max-sm:col-span-1",
  },
  { id: "search-1", label: "Search 01", placeholder: "Your first search" },
  { id: "search-2", label: "Search 02", placeholder: "Your second search" },
  {
    id: "name",
    label: "Your name",
    placeholder: "John Doe",
    autoComplete: "name",
  },
  {
    id: "email",
    label: "Your email",
    type: "email",
    placeholder: "you@company.com",
    autoComplete: "email",
  },
];

// White-on-blue version of the service form fields (markup only, not wired to
// an API yet).
const SeoCheckForm = () => {
  return (
    <form className="grid grid-cols-2 gap-x-[30px] gap-y-[29px] max-sm:grid-cols-1 max-sm:gap-y-[24px]">
      {fields.map(
        ({ id, label, type = "text", className = "", ...inputProps }) => (
          <div key={id} className={`relative ${className}`}>
            <label htmlFor={`seo-check-${id}`} className={labelClassName}>
              {label}
            </label>

            <input
              id={`seo-check-${id}`}
              name={id}
              type={type}
              required
              className={fieldClassName}
              {...inputProps}
            />
          </div>
        ),
      )}

      <button
        type="submit"
        className="col-span-2 flex h-[53px] w-full cursor-pointer items-center justify-center gap-[10px] rounded-full bg-white text-[18px] font-extrabold tracking-[-0.02em] text-black uppercase max-sm:col-span-1 max-sm:h-[50px] max-sm:text-[15px]"
      >
        Tell us what’s not being found
        <ArrowUpRight size={18} strokeWidth={2.5} />
      </button>
    </form>
  );
};

export default SeoCheckForm;
