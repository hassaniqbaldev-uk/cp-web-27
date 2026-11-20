import { ArrowUpRight, ChevronDown, Plus } from "lucide-react";
import Link from "next/link";

const labelClassName =
  "absolute -top-[8px] left-[14px] bg-white px-[6px] text-[14px] font-bold tracking-[-0.02em] text-black uppercase";

const fieldClassName =
  "placeholder:text-text-body/60 w-full rounded-[10px] border border-black/15 px-[20px] py-[18px] text-[18px] tracking-[-0.02em] text-black focus:border-black focus:outline-none";

const optionalFields = [
  { id: "website", label: "Website", placeholder: "yoursite.com" },
  { id: "budget", label: "Budget", placeholder: "£10k – £25k" },
  { id: "timeline", label: "Timeline", placeholder: "Next 3 months" },
];

const ServiceContactForm = ({
  needLabel = "What do you need (a sentence is fine)",
  needPlaceholder = "Optional, e.g. traffic but no enquiries, slow on mobile, checkout drop-off",
  submitLabel = "Send my details",
}) => {
  return (
    <form className="flex flex-col gap-[30px]">
      <div className="grid grid-cols-2 gap-[20px]">
        <div className="relative">
          <label htmlFor="service-name" className={labelClassName}>
            Your name (required)
          </label>

          <input
            id="service-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="John Doe"
            className={fieldClassName}
          />
        </div>

        <div className="relative">
          <label htmlFor="service-email" className={labelClassName}>
            Your email (required)
          </label>

          <input
            id="service-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@company.com"
            className={fieldClassName}
          />
        </div>
      </div>

      <div className="relative">
        <label htmlFor="service-need" className={labelClassName}>
          {needLabel}
        </label>

        <textarea
          id="service-need"
          name="need"
          rows={3}
          placeholder={needPlaceholder}
          className={`block resize-none ${fieldClassName}`}
        />
      </div>

      <details className="group rounded-[10px] border border-black/15">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-[20px] p-[20px]">
          <span className="flex items-center gap-[20px]">
            <span className="flex size-[36px] shrink-0 items-center justify-center rounded-full border border-black/20">
              <Plus size={18} strokeWidth={2} className="text-black" />
            </span>

            <span>
              <span className="block text-[18px] font-bold tracking-[-0.02em] text-black">
                Add optional details
              </span>

              <span className="text-text-body block text-[14px] tracking-[-0.02em]">
                Website, budget, timeline (optional)
              </span>
            </span>
          </span>

          <ChevronDown
            size={20}
            strokeWidth={2}
            className="shrink-0 text-black transition-transform duration-300 group-open:rotate-180"
          />
        </summary>

        <div className="grid grid-cols-3 gap-[20px] px-[20px] pt-[30px] pb-[20px]">
          {optionalFields.map(({ id, label, placeholder }) => (
            <div key={id} className="relative">
              <label htmlFor={`service-${id}`} className={labelClassName}>
                {label}
              </label>

              <input
                id={`service-${id}`}
                name={id}
                type="text"
                placeholder={placeholder}
                className="placeholder:text-text-body/60 w-full rounded-[10px] border border-black/15 px-[20px] py-[14px] text-[16px] tracking-[-0.02em] text-black focus:border-black focus:outline-none"
              />
            </div>
          ))}
        </div>
      </details>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-[10px] rounded-full bg-black py-[15px] text-[16px] font-extrabold tracking-[-0.02em] text-white uppercase"
      >
        {submitLabel}
        <ArrowUpRight size={18} strokeWidth={2.5} />
      </button>

      <p className="text-text-body -mt-[15px] text-[14px] leading-[22px] tracking-[-0.02em]">
        No obligation. A person replies within one working day.
        <br />
        Prefer to talk?{" "}
        <Link href="tel:+441618202667" className="text-blue">
          0161 820 2667
        </Link>
      </p>
    </form>
  );
};

export default ServiceContactForm;
