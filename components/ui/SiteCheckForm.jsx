import { ArrowUpRight } from "lucide-react";
import { HiOutlineLink } from "react-icons/hi2";
import { fieldClassName, labelClassName } from "./ServiceContactForm";

// Same field styling as ServiceContactForm (markup only, not wired to a site
// check yet).
const SiteCheckForm = () => {
  return (
    <form className="flex flex-col items-center">
      <span className="bg-blue/15 text-blue flex size-[80px] items-center justify-center rounded-full max-sm:size-[60px]">
        <HiOutlineLink size={35} className="max-sm:size-[26px]" />
      </span>

      <h3 className="mt-[20px] text-[35px] leading-[40px] font-bold tracking-[-0.06em] text-black max-sm:mt-[16px] max-sm:text-center max-sm:text-[24px] max-sm:leading-[28px]">
        Enter your website address
      </h3>

      <div className="relative mt-[40px] w-full max-sm:mt-[30px]">
        <label htmlFor="site-check-url" className={labelClassName}>
          Your website URL
        </label>

        <input
          id="site-check-url"
          name="url"
          type="text"
          inputMode="url"
          autoComplete="url"
          required
          placeholder="https://yourwebsite.com"
          className={fieldClassName}
        />
      </div>

      <button
        type="submit"
        className="mt-[25px] flex w-full cursor-pointer items-center justify-center gap-[10px] rounded-full bg-black py-[15px] text-[16px] font-extrabold tracking-[-0.02em] text-white uppercase max-sm:mt-[20px]"
      >
        Check my site
        <ArrowUpRight size={18} strokeWidth={2.5} />
      </button>
    </form>
  );
};

export default SiteCheckForm;
