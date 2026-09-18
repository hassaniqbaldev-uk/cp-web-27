import { contactTopics } from "@/config/common";
import { ArrowUpRight, ChevronDown, Plus } from "lucide-react";

/**
 * Deliberately has no "use client" boundary. The selected card is styled with
 * has-[:checked], and the optional section is a native disclosure, so the whole
 * form works before — and without — JavaScript.
 */
const ContactForm = () => {
  return (
    // TODO: wire to the route handler at app/api/contact, which is still empty.
    <form className="gap-md flex flex-col">
      {/* A group of radios needs a fieldset and a legend: that is what names
          the choice for a screen reader, rather than leaving four unlabelled
          options next to a stray paragraph. */}
      <fieldset>
        <legend className="text-body-04 font-semibold tracking-[-0.02em] text-black uppercase">
          What do you need help with? (required)
        </legend>

        <div className="gap-sm mt-sm grid grid-cols-4">
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
                className={`gap-xs px-sm py-sm has-focus-visible:outline-blue flex cursor-pointer flex-col items-center justify-center rounded-sm border border-black/15 text-center has-focus-visible:outline-2 has-focus-visible:outline-offset-2 ${selectedClassName}`}
              >
                {/* sr-only rather than hidden: the input keeps its place in the
                  tab order and stays operable by keyboard. */}
                <input
                  type="radio"
                  name="topic"
                  value={value}
                  required
                  className="sr-only"
                />

                <Icon
                  aria-hidden="true"
                  size={20}
                  strokeWidth={2}
                  className={`shrink-0 ${iconClassName}`}
                />

                <span className="text-body-04 font-semibold tracking-[-0.02em] text-black">
                  {label}
                </span>
              </label>
            ),
          )}
        </div>
      </fieldset>

      <div className="gap-sm grid grid-cols-2">
        {/* The label sits on the border with a white background behind it, so
            it notches the outline rather than covering it. */}
        <div className="relative">
          <label
            htmlFor="contact-name"
            className="text-body-04 absolute -top-[0.8rem] left-[1.4rem] bg-white px-[0.6rem] font-bold tracking-[-0.02em] text-black uppercase"
          >
            Your name
          </label>

          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="John Smith"
            className="text-body-02 px-sm placeholder:text-text-body/60 w-full rounded-sm border border-black/15 py-[1.8rem] tracking-[-0.02em] text-black focus:border-black focus:outline-none"
          />
        </div>

        <div className="relative">
          <label
            htmlFor="contact-email"
            className="text-body-04 absolute -top-[0.8rem] left-[1.4rem] bg-white px-[0.6rem] font-bold tracking-[-0.02em] text-black uppercase"
          >
            Your email
          </label>

          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            className="text-body-02 px-sm placeholder:text-text-body/60 w-full rounded-sm border border-black/15 py-[1.8rem] tracking-[-0.02em] text-black focus:border-black focus:outline-none"
          />
        </div>
      </div>

      <div className="relative">
        <label
          htmlFor="contact-project"
          className="text-body-04 absolute -top-[0.8rem] left-[1.4rem] bg-white px-[0.6rem] font-bold tracking-[-0.02em] text-black uppercase"
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
          className="text-body-02 p-sm placeholder:text-text-body/60 w-full resize-none rounded-sm border border-black/15 tracking-[-0.02em] text-black focus:border-black focus:outline-none"
        />
      </div>

      {/* A native disclosure, so it opens and closes with no JavaScript and
          carries its own expanded state for assistive tech. */}
      <details className="group rounded-sm border border-black/15">
        <summary className="gap-sm p-sm flex cursor-pointer list-none items-center justify-between">
          <span className="gap-sm flex items-center">
            <span
              aria-hidden="true"
              className="flex size-[3.6rem] shrink-0 items-center justify-center rounded-full border border-black/20"
            >
              <Plus size={18} strokeWidth={2} className="text-black" />
            </span>

            <span>
              <span className="text-body-02 block font-bold tracking-[-0.02em] text-black">
                Add optional details
              </span>

              <span className="text-body-04 text-text-body block tracking-[-0.02em]">
                Website, budget, timeline (optional)
              </span>
            </span>
          </span>

          <ChevronDown
            aria-hidden="true"
            size={20}
            strokeWidth={2}
            className="shrink-0 text-black transition-transform duration-300 group-open:rotate-180"
          />
        </summary>

        <div className="gap-sm px-sm pb-sm pt-md grid grid-cols-3">
          {[
            { id: "website", label: "Website", placeholder: "yoursite.com" },
            { id: "budget", label: "Budget", placeholder: "£10k – £25k" },
            { id: "timeline", label: "Timeline", placeholder: "Next 3 months" },
          ].map(({ id, label, placeholder }) => (
            <div key={id} className="relative">
              <label
                htmlFor={`contact-${id}`}
                className="text-body-04 absolute -top-[0.8rem] left-[1.4rem] bg-white px-[0.6rem] font-bold tracking-[-0.02em] text-black uppercase"
              >
                {label}
              </label>

              <input
                id={`contact-${id}`}
                name={id}
                type="text"
                placeholder={placeholder}
                className="text-body-03 px-sm placeholder:text-text-body/60 w-full rounded-sm border border-black/15 py-[1.4rem] tracking-[-0.02em] text-black focus:border-black focus:outline-none"
              />
            </div>
          ))}
        </div>
      </details>

      <button
        type="submit"
        className="text-body-03 gap-xs flex w-full items-center justify-center rounded-full bg-black py-[1.5rem] font-extrabold tracking-[-0.02em] text-white uppercase"
      >
        Send enquiry
        <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2.5} />
      </button>
    </form>
  );
};

export default ContactForm;
