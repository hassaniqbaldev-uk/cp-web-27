import { contactPhone } from "@/config/navigation";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

/**
 * Deliberately has no "use client" boundary. Every field is a plain input, so
 * the form works before — and without — JavaScript.
 */
const BookCallForm = () => {
  return (
    // TODO: wire to a route handler. app/api/contact is still empty.
    <form className="gap-sm py-lg px-md flex flex-col rounded-md bg-white">
      <div className="gap-sm max-425:grid-cols-1 grid grid-cols-2">
        {/* The label sits on the border with a white background behind it, so
            it notches the outline rather than covering it. */}
        <div className="relative">
          <label
            htmlFor="book-call-name"
            className="text-body-04 max-425:text-[1.2rem] absolute -top-[0.8rem] left-[1.4rem] bg-white px-[0.6rem] font-bold tracking-[-0.02em] text-black uppercase"
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
            className="text-body-02 px-sm placeholder:text-text-body/60 w-full rounded-sm border border-black/15 py-[1.8rem] tracking-[-0.02em] text-black focus:border-black focus:outline-none"
          />
        </div>

        <div className="relative">
          <label
            htmlFor="book-call-email"
            className="text-body-04 max-425:text-[1.2rem] absolute -top-[0.8rem] left-[1.4rem] bg-white px-[0.6rem] font-bold tracking-[-0.02em] text-black uppercase"
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
            className="text-body-02 px-sm placeholder:text-text-body/60 w-full rounded-sm border border-black/15 py-[1.8rem] tracking-[-0.02em] text-black focus:border-black focus:outline-none"
          />
        </div>
      </div>

      <div className="relative">
        <label
          htmlFor="book-call-need"
          className="text-body-04 max-425:text-[1.2rem] absolute -top-[0.8rem] left-[1.4rem] bg-white px-[0.6rem] font-bold tracking-[-0.02em] text-black uppercase"
        >
          What do you need (a sentence is fine)
        </label>

        <textarea
          id="book-call-need"
          name="need"
          rows={4}
          placeholder="Optional. e.g. traffic but no enquiries, slow on mobile, checkout drop-off"
          className="text-body-02 p-sm placeholder:text-text-body/60 w-full resize-none rounded-sm border border-black/15 tracking-[-0.02em] text-black focus:border-black focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="text-body-03 gap-xs mt-xs flex w-full items-center justify-center rounded-full bg-black py-[1.5rem] font-extrabold tracking-[-0.02em] text-white uppercase"
      >
        Tell us what you need
        <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2.5} />
      </button>

      <p className="text-body-03 text-text-body flex flex-col leading-[3rem] tracking-[-0.02em]">
        <span> No obligation. A person replies within one working day.</span>
        <span>
          Prefer to talk?{" "}
          <Link
            href={contactPhone.href}
            className="text-blue font-medium underline-offset-4 hover:underline focus-visible:underline"
          >
            {contactPhone.label}
          </Link>
        </span>
      </p>

      <p className="text-body-03 text-text-body leading-[3rem] tracking-[-0.02em]"></p>
    </form>
  );
};

export default BookCallForm;
