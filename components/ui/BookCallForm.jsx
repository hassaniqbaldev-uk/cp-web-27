import { contactPhone } from "@/config/navigation";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const BookCallForm = () => {
  return (
    <form className="flex flex-col gap-[20px] rounded-[20px] bg-white px-[30px] py-[45px]">
      <div className="grid grid-cols-2 gap-[20px]">
        <div className="relative">
          <label
            htmlFor="book-call-name"
            className="absolute -top-[8px] left-[14px] bg-white px-[6px] text-[14px] font-bold tracking-[-0.02em] text-black uppercase"
          >
            Your name{" "}
            <span className="text-text-body font-medium">(required)</span>
          </label>

          <input
            id="book-call-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="John Doe"
            className="placeholder:text-text-body/60 w-full rounded-[10px] border border-black/15 px-[20px] py-[18px] text-[18px] tracking-[-0.02em] text-black focus:border-black focus:outline-none"
          />
        </div>

        <div className="relative">
          <label
            htmlFor="book-call-email"
            className="absolute -top-[8px] left-[14px] bg-white px-[6px] text-[14px] font-bold tracking-[-0.02em] text-black uppercase"
          >
            Your email{" "}
            <span className="text-text-body font-medium">(required)</span>
          </label>

          <input
            id="book-call-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className="placeholder:text-text-body/60 w-full rounded-[10px] border border-black/15 px-[20px] py-[18px] text-[18px] tracking-[-0.02em] text-black focus:border-black focus:outline-none"
          />
        </div>
      </div>

      <div className="relative">
        <label
          htmlFor="book-call-need"
          className="absolute -top-[8px] left-[14px] bg-white px-[6px] text-[14px] font-bold tracking-[-0.02em] text-black uppercase"
        >
          What do you need (a sentence is fine)
        </label>

        <textarea
          id="book-call-need"
          name="need"
          rows={4}
          placeholder="Optional. e.g. traffic but no enquiries, slow on mobile, checkout drop-off"
          className="placeholder:text-text-body/60 w-full resize-none rounded-[10px] border border-black/15 p-[20px] text-[18px] tracking-[-0.02em] text-black focus:border-black focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="mt-[10px] flex w-full items-center justify-center gap-[10px] rounded-full bg-black py-[15px] text-[16px] font-extrabold tracking-[-0.02em] text-white uppercase"
      >
        Tell us what you need
        <ArrowUpRight size={18} strokeWidth={2.5} />
      </button>

      <p className="text-text-body flex flex-col text-[16px] leading-[30px] tracking-[-0.02em]">
        <span> No obligation. A person replies within one working day.</span>
        <span>
          Prefer to talk?{" "}
          <Link
            href={contactPhone.href}
            className="text-blue font-medium underline-offset-4 hover:underline"
          >
            {contactPhone.label}
          </Link>
        </span>
      </p>

      <p className="text-text-body text-[16px] leading-[30px] tracking-[-0.02em]"></p>
    </form>
  );
};

export default BookCallForm;
