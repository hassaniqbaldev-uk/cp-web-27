import { ArrowUpRight, CalendarDays, Clock } from "lucide-react";

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

const WebsiteReviewForm = () => {
  return (
    <form className="flex flex-col gap-[30px]">
      <div className="relative">
        <label
          htmlFor="review-website"
          className="absolute -top-[8px] left-[14px] bg-white px-[6px] text-[14px] font-bold tracking-[-0.02em] text-black uppercase"
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
          className="placeholder:text-text-body/60 w-full rounded-[10px] border border-black/15 px-[20px] py-[18px] text-[18px] tracking-[-0.02em] text-black focus:border-black focus:outline-none"
        />
      </div>

      <div className="grid grid-cols-2 gap-[20px]">
        <div className="relative">
          <label
            htmlFor="review-name"
            className="absolute -top-[8px] left-[14px] bg-white px-[6px] text-[14px] font-bold tracking-[-0.02em] text-black uppercase"
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
            className="placeholder:text-text-body/60 w-full rounded-[10px] border border-black/15 px-[20px] py-[18px] text-[18px] tracking-[-0.02em] text-black focus:border-black focus:outline-none"
          />
        </div>

        <div className="relative">
          <label
            htmlFor="review-email"
            className="absolute -top-[8px] left-[14px] bg-white px-[6px] text-[14px] font-bold tracking-[-0.02em] text-black uppercase"
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
            className="placeholder:text-text-body/60 w-full rounded-[10px] border border-black/15 px-[20px] py-[18px] text-[18px] tracking-[-0.02em] text-black focus:border-black focus:outline-none"
          />
        </div>
      </div>

      <div className="relative">
        <label
          htmlFor="review-concern"
          className="absolute -top-[8px] left-[14px] bg-white px-[6px] text-[14px] font-bold tracking-[-0.02em] text-black uppercase"
        >
          What are you most concerned about?
        </label>

        <textarea
          id="review-concern"
          name="concern"
          rows={5}
          placeholder="Optional. e.g. traffic but no enquiries, slow on mobile, checkout drop-off"
          className="placeholder:text-text-body/60 w-full resize-none rounded-[10px] border border-black/15 p-[20px] text-[18px] tracking-[-0.02em] text-black focus:border-black focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-[10px] rounded-full bg-black py-[15px] text-[16px] font-extrabold tracking-[-0.02em] text-white uppercase"
      >
        Request the review
        <ArrowUpRight size={18} strokeWidth={2.5} />
      </button>

      <ul className="grid grid-cols-2 gap-[30px] divide-x divide-black/15">
        {assurances.map(({ id, icon: Icon, text }) => (
          <li
            key={id}
            className="flex items-start gap-[10px] first:pr-[30px] last:pl-[30px]"
          >
            <Icon
              size={30}
              strokeWidth={2}
              className="text-orange mt-[2px] shrink-0"
            />

            <p className="text-text-body text-[16px] leading-[22px] tracking-[-0.02em]">
              {text}
            </p>
          </li>
        ))}
      </ul>
    </form>
  );
};

export default WebsiteReviewForm;
