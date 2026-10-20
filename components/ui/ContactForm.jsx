import { contactTopics } from "@/config/common";
import { ArrowUpRight, Calendar, ChevronDown, Clock, Plus } from "lucide-react";

const assurances = [
  {
    id: "reviewed",
    icon: Clock,
    text: "Reviewed by a senior member of our team.",
  },
  {
    id: "reply",
    icon: Calendar,
    text: "We usually reply within one working day.",
  },
];

const ContactForm = ({ showAssurances = false }) => {
  return (
    <form className="flex flex-col gap-[30px]">
      <fieldset>
        <legend className="text-[14px] font-semibold tracking-[-0.02em] text-black uppercase">
          What do you need help with? (required)
        </legend>

        <div className="mt-[20px] grid grid-cols-4 gap-[20px]">
          {contactTopics.map(
            ({
              id,
              icon: Icon,
              label,
              value,
              iconClassName,
              selectedClassName,
            }) => (
              <label
                key={id}
                className={`flex cursor-pointer flex-col items-center justify-center gap-[10px] rounded-[10px] border border-black/15 px-[20px] py-[20px] text-center ${selectedClassName}`}
              >
                <input
                  type="radio"
                  name="topic"
                  value={value}
                  required
                  className="sr-only"
                />

                <Icon
                  size={20}
                  strokeWidth={2}
                  className={`shrink-0 ${iconClassName}`}
                />

                <span className="text-[14px] font-semibold tracking-[-0.02em] text-black">
                  {label}
                </span>
              </label>
            ),
          )}
        </div>
      </fieldset>

      <div className="grid grid-cols-2 gap-[20px]">
        <div className="relative">
          <label
            htmlFor="contact-name"
            className="absolute -top-[8px] left-[14px] bg-white px-[6px] text-[14px] font-bold tracking-[-0.02em] text-black uppercase"
          >
            Your name
          </label>

          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="John Smith"
            className="placeholder:text-text-body/60 w-full rounded-[10px] border border-black/15 px-[20px] py-[18px] text-[18px] tracking-[-0.02em] text-black focus:border-black focus:outline-none"
          />
        </div>

        <div className="relative">
          <label
            htmlFor="contact-email"
            className="absolute -top-[8px] left-[14px] bg-white px-[6px] text-[14px] font-bold tracking-[-0.02em] text-black uppercase"
          >
            Your email
          </label>

          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            className="placeholder:text-text-body/60 w-full rounded-[10px] border border-black/15 px-[20px] py-[18px] text-[18px] tracking-[-0.02em] text-black focus:border-black focus:outline-none"
          />
        </div>
      </div>

      <div className="relative">
        <label
          htmlFor="contact-project"
          className="absolute -top-[8px] left-[14px] bg-white px-[6px] text-[14px] font-bold tracking-[-0.02em] text-black uppercase"
        >
          Tell us about your project{" "}
          <span className="text-text-body font-medium">(required)</span>
        </label>

        <textarea
          id="contact-project"
          name="project"
          rows={5}
          required
          placeholder="A few details about what you're looking to do..."
          className="placeholder:text-text-body/60 w-full resize-none rounded-[10px] border border-black/15 p-[20px] text-[18px] tracking-[-0.02em] text-black focus:border-black focus:outline-none"
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
          {[
            { id: "website", label: "Website", placeholder: "yoursite.com" },
            { id: "budget", label: "Budget", placeholder: "£10k – £25k" },
            { id: "timeline", label: "Timeline", placeholder: "Next 3 months" },
          ].map(({ id, label, placeholder }) => (
            <div key={id} className="relative">
              <label
                htmlFor={`contact-${id}`}
                className="absolute -top-[8px] left-[14px] bg-white px-[6px] text-[14px] font-bold tracking-[-0.02em] text-black uppercase"
              >
                {label}
              </label>

              <input
                id={`contact-${id}`}
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
        Send enquiry
        <ArrowUpRight size={18} strokeWidth={2.5} />
      </button>

      {showAssurances && (
        <ul className="grid grid-cols-2 gap-[30px]">
          {assurances.map(({ id, icon: Icon, text }) => (
            <li key={id} className="flex items-start gap-[10px]">
              <Icon
                size={30}
                strokeWidth={2}
                className="text-orange mt-[6px] shrink-0"
              />

              <p className="text-text-body text-[16px] leading-[22px] tracking-[-0.02em]">
                {text}
              </p>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default ContactForm;
