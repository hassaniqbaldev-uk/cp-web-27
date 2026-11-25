import { ArrowUpRight } from "lucide-react";

const labelClassName =
  "absolute -top-[8px] left-[20px] bg-[#0A0616] px-[10px] text-[14px] leading-[16px] font-semibold tracking-[-0.02em] text-white uppercase";

const fieldClassName =
  "h-[75px] w-full rounded-[10px] border border-white bg-transparent px-[30px] text-[18px] tracking-[-0.02em] text-white placeholder:text-white/50 focus:ring-1 focus:ring-white focus:outline-none";

const fields = [
  {
    id: "company",
    label: "Company name",
    placeholder: "Your company",
    autoComplete: "organization",
  },
  {
    id: "url",
    label: "Your website URL",
    placeholder: "https://yourwebsite.co.uk",
    inputMode: "url",
    autoComplete: "url",
  },
];

// Dark version of the service form fields (markup only, not wired to an API
// yet).
const AuditForm = () => {
  return (
    <form className="flex flex-col">
      {fields.map(({ id, label, ...inputProps }) => (
        <div key={id} className="relative not-first:mt-[28px]">
          <label htmlFor={`audit-${id}`} className={labelClassName}>
            {label}
          </label>

          <input
            id={`audit-${id}`}
            name={id}
            type="text"
            required
            className={fieldClassName}
            {...inputProps}
          />
        </div>
      ))}

      <button
        type="submit"
        className="mt-[20px] flex h-[53px] w-full cursor-pointer items-center justify-center gap-[10px] rounded-full bg-white text-[18px] font-extrabold tracking-[-0.02em] text-black uppercase"
      >
        Get the audit
        <ArrowUpRight size={18} strokeWidth={2.5} />
      </button>
    </form>
  );
};

export default AuditForm;
