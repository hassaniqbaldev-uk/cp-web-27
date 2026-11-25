import { ArrowUpRight } from "lucide-react";

const labelClassName =
  "bg-orange absolute -top-[8px] left-[20px] px-[10px] text-[14px] leading-[16px] font-semibold tracking-[-0.02em] text-white uppercase";

const fieldClassName =
  "h-[75px] w-full rounded-[10px] border border-white bg-transparent px-[34px] text-[18px] tracking-[-0.02em] text-white placeholder:text-white focus:ring-1 focus:ring-white focus:outline-none";

const fields = [
  {
    id: "store",
    label: "Store URL",
    placeholder: "https://yourstore.com",
    inputMode: "url",
    autoComplete: "url",
  },
  {
    id: "email",
    label: "Your email",
    type: "email",
    placeholder: "You@company.com",
    autoComplete: "email",
  },
  {
    id: "product",
    label: "Link to product",
    placeholder: "Paste product URL",
    inputMode: "url",
  },
];

// White-on-orange version of the service form fields (markup only, not wired to
// an API yet).
const ProductCheckForm = () => {
  return (
    <form className="grid grid-cols-3 gap-[18px]">
      {fields.map(({ id, label, type = "text", ...inputProps }) => (
        <div key={id} className="relative">
          <label htmlFor={`product-check-${id}`} className={labelClassName}>
            {label}
          </label>

          <input
            id={`product-check-${id}`}
            name={id}
            type={type}
            required
            className={fieldClassName}
            {...inputProps}
          />
        </div>
      ))}

      <button
        type="submit"
        className="col-span-3 flex h-[53px] w-full cursor-pointer items-center justify-center gap-[10px] rounded-full bg-white text-[18px] font-extrabold tracking-[-0.02em] text-black uppercase"
      >
        Show us your hardest product
        <ArrowUpRight size={18} strokeWidth={2.5} />
      </button>
    </form>
  );
};

export default ProductCheckForm;
