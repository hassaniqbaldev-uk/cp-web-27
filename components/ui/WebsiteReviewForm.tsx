import { ArrowUpRight, CalendarDays, Clock } from "lucide-react";

// TODO: placeholder until the real turnaround is agreed.
const assurances = [
  {
    id: "senior",
    icon: Clock,
    text: "Reviewed by a senior person, not a tool.",
  },
  {
    id: "turnaround",
    icon: CalendarDays,
    text: "Short video within three working days.",
  },
];

/**
 * Deliberately has no "use client" boundary. Every field is a plain input, so
 * the form works before — and without — JavaScript.
 */
const WebsiteReviewForm = () => {
  return (
    // TODO: wire to a route handler. app/api/contact is still empty.
    <form className="gap-md flex flex-col">
      {/* The label sits on the border with a white background behind it, so it
          notches the outline rather than covering it. */}
      <div className="relative">
        <label
          htmlFor="review-website"
          className="text-body-04 max-425:text-[1.2rem] absolute -top-[0.8rem] left-[1.4rem] bg-white px-[0.6rem] font-bold tracking-[-0.02em] text-black uppercase"
        >
          Your website{" "}
          <span className="text-text-body font-medium">(required)</span>
        </label>

        <input
          id="review-website"
          name="website"
          type="url"
          required
          autoComplete="url"
          placeholder="https://"
          className="text-body-02 px-sm placeholder:text-text-body/60 w-full rounded-sm border border-black/15 py-[1.8rem] tracking-[-0.02em] text-black focus:border-black focus:outline-none"
        />
      </div>

      <div className="gap-sm max-425:grid-cols-1 grid grid-cols-2">
        <div className="relative">
          <label
            htmlFor="review-name"
            className="text-body-04 max-425:text-[1.2rem] absolute -top-[0.8rem] left-[1.4rem] bg-white px-[0.6rem] font-bold tracking-[-0.02em] text-black uppercase"
          >
            Your name{" "}
            <span className="text-text-body font-medium">(required)</span>
          </label>

          <input
            id="review-name"
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
            htmlFor="review-email"
            className="text-body-04 max-425:text-[1.2rem] absolute -top-[0.8rem] left-[1.4rem] bg-white px-[0.6rem] font-bold tracking-[-0.02em] text-black uppercase"
          >
            Your email{" "}
            <span className="text-text-body font-medium">(required)</span>
          </label>

          <input
            id="review-email"
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
          htmlFor="review-concern"
          className="text-body-04 max-425:text-[1.2rem] absolute -top-[0.8rem] left-[1.4rem] bg-white px-[0.6rem] font-bold tracking-[-0.02em] text-black uppercase"
        >
          What are you most concerned about?
        </label>

        <textarea
          id="review-concern"
          name="concern"
          rows={5}
          placeholder="Optional. e.g. traffic but no enquiries, slow on mobile, checkout drop-off"
          className="text-body-02 p-sm placeholder:text-text-body/60 w-full resize-none rounded-sm border border-black/15 tracking-[-0.02em] text-black focus:border-black focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="text-body-03 gap-xs flex w-full items-center justify-center rounded-full bg-black py-[1.5rem] font-extrabold tracking-[-0.02em] text-white uppercase"
      >
        Request the review
        <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2.5} />
      </button>

      {/* What happens to the request once it is sent. A list, so the two
          announce as a pair rather than as loose fragments after the button.
          The rule is drawn between them rather than as a border on either, so
          neither end trails a stray line. */}
      <ul className="gap-md max-425:gap-sm max-425:grid-cols-1 max-425:divide-x-0 max-425:divide-y grid grid-cols-2 divide-x divide-black/15">
        {assurances.map(({ id, icon: Icon, text }) => (
          <li
            key={id}
            className="gap-xs first:pr-md last:pl-md max-425:first:pr-0 max-425:last:pl-0 max-425:first:pb-sm max-425:last:pt-sm flex items-start"
          >
            <Icon
              aria-hidden="true"
              size={30}
              strokeWidth={2}
              className="text-orange mt-[0.2rem] shrink-0"
            />

            <p className="text-body-03 text-text-body leading-[2.2rem] tracking-[-0.02em]">
              {text}
            </p>
          </li>
        ))}
      </ul>
    </form>
  );
};

export default WebsiteReviewForm;
