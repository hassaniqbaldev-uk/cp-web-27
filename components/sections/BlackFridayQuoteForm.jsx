"use client";

import { useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const jobTypes = [
  { id: "wordpress", label: "Wordpress" },
  { id: "woocommerce", label: "WooCommerce" },
  { id: "shopify", label: "Shopify" },
  { id: "seo", label: "SEO" },
  { id: "print", label: "Print" },
  { id: "something-else", label: "Something else" },
];

const engagementOptions = [
  { id: "one-off", label: "Just this job" },
  { id: "ongoing", label: "Ongoing work" },
  { id: "not-sure", label: "Not sure yet" },
];

const contactMethods = [
  { id: "email", label: "Email" },
  { id: "whatsapp", label: "WhatsApp" },
  { id: "slack", label: "Slack" },
  { id: "call", label: "Call back" },
];

const successPoints = [
  "We reply from a real person, usually within hours",
  "You get a fixed quote, with clear timelines",
  "Say yes, and we start on the job",
];

const TOTAL_STEPS = 4;

const META = {
  1: { label: "About 30 seconds", title: "Send us a small job" },
  2: { label: "About 20 seconds left", title: "Tell us about the job" },
  3: { label: "Last one", title: "Where should we send the quote?" },
};

const fieldClassName =
  "w-full rounded-[10px] border border-black/15 px-[16px] py-[12px] text-[16px] tracking-[-0.02em] text-black placeholder:text-text-body/50 focus:border-black focus:outline-none";

const labelClassName =
  "mb-[8px] block text-[13px] font-medium tracking-[-0.02em] text-black";

const OptionPill = ({ name, value, label, checked, onChange }) => (
  <label className="has-[:checked]:bg-grey flex cursor-pointer items-center gap-[10px] rounded-full border border-black/15 px-[18px] py-[12px] transition-colors has-[:checked]:border-transparent">
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      className="peer sr-only"
    />

    <span className="flex size-[14px] shrink-0 items-center justify-center rounded-full border border-black/30 peer-checked:border-black">
      <span className="size-[6px] scale-0 rounded-full bg-black transition-transform peer-checked:scale-100" />
    </span>

    <span className="text-[14px] tracking-[-0.02em] text-black">{label}</span>
  </label>
);

const BlackFridayQuoteForm = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    jobType: "wordpress",
    website: "",
    details: "",
    engagement: "one-off",
    name: "",
    agency: "",
    email: "",
    contact: "email",
    updates: false,
  });

  const set = (key) => (event) =>
    setData((current) => ({ ...current, [key]: event.target.value }));

  const next = () => setStep((current) => Math.min(current + 1, TOTAL_STEPS));

  const cardClassName = "w-[540px] shrink-0 rounded-[20px] bg-white p-[30px]";

  if (step === TOTAL_STEPS) {
    return (
      <div className={cardClassName}>
        <div className="flex items-center gap-[12px]">
          <Image
            src="/images/home/hassan-avatar-img.png"
            alt="Hassan, Creative Pixels"
            width={44}
            height={44}
            className="size-[44px] rounded-full object-cover"
          />

          <div>
            <p className="text-[14px] font-semibold tracking-[-0.02em] text-black">
              Hassan
            </p>

            <p className="text-text-body/60 text-[12px] tracking-[-0.02em]">
              Usually replies in a few hours
            </p>
          </div>
        </div>

        <h2 className="mt-[25px] text-[24px] font-bold tracking-[-0.02em] text-black">
          Thanks {data.name || "there"}, you’re in.
        </h2>

        <p className="text-text-body mt-[10px] text-[14px] leading-[22px] tracking-[-0.02em]">
          Got your brief. A senior person will look at it and reply within a few
          hours — from a real human, not an auto-responder.
        </p>

        <ul className="mt-[25px] flex flex-col gap-[14px]">
          {successPoints.map((point, index) => (
            <li key={point} className="flex items-center gap-[12px]">
              <span className="bg-dark-pink flex size-[22px] shrink-0 items-center justify-center rounded-full text-[12px] font-bold text-white">
                {index + 1}
              </span>

              <span className="text-[14px] tracking-[-0.02em] text-black">
                {point}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-[25px] flex items-start gap-[10px] rounded-[10px] bg-[#FFF6EC] p-[16px]">
          <Sparkles
            size={18}
            strokeWidth={2}
            className="text-orange mt-[2px] shrink-0"
          />

          <p className="text-[13px] leading-[20px] tracking-[-0.02em] text-black">
            <span className="font-bold">Your Black Friday rate is held.</span>{" "}
            Book your first job by 30 November and it’s yours for 6 months.
          </p>
        </div>

        <Link
          href="/contact"
          className="mt-[25px] flex w-full items-center justify-center gap-[10px] rounded-full border border-black py-[16px] text-[14px] font-extrabold tracking-[-0.02em] text-black uppercase transition-colors hover:bg-black hover:text-white"
        >
          Prefer to talk? Book a 15-min call
        </Link>
      </div>
    );
  }

  return (
    <div className={cardClassName}>
      <div className="flex items-center justify-between">
        <span className="text-dark-pink text-[16px] font-medium tracking-[-0.02em]">
          Step {step} of {TOTAL_STEPS}
        </span>

        <span className="text-text-body/60 text-[14px] tracking-[-0.02em]">
          {META[step].label}
        </span>
      </div>

      <div className="bg-dark-pink/15 mt-[12px] h-[5px] w-full overflow-hidden rounded-full">
        <div
          className="bg-dark-pink h-full rounded-full transition-[width] duration-300"
          style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
        />
      </div>

      <h2 className="mt-[20px] text-[25px] leading-[36px] font-bold tracking-[-0.07em] text-black">
        {META[step].title}
      </h2>

      {step === 1 && (
        <>
          <p className="text-text-body mt-[6px] text-[12px] tracking-[-0.02em]">
            No commitment. What’s it for?
          </p>

          <fieldset className="mt-[30px]">
            <legend className="sr-only">What do you need help with?</legend>

            <div className="grid grid-cols-2 gap-[10px]">
              {jobTypes.map(({ id, label }) => (
                <OptionPill
                  key={id}
                  name="job-type"
                  value={id}
                  label={label}
                  checked={data.jobType === id}
                  onChange={set("jobType")}
                />
              ))}
            </div>
          </fieldset>
        </>
      )}

      {step === 2 && (
        <div className="mt-[20px] flex flex-col gap-[20px]">
          <div>
            <label htmlFor="quote-website" className={labelClassName}>
              Website URL (optional)
            </label>

            <input
              id="quote-website"
              type="text"
              placeholder="yoursite.com"
              value={data.website}
              onChange={set("website")}
              className={fieldClassName}
            />
          </div>

          <div>
            <label htmlFor="quote-details" className={labelClassName}>
              What needs doing?
            </label>

            <textarea
              id="quote-details"
              rows={3}
              placeholder="e.g. Fix the checkout on a WooCommerce store, move a site to a new host…"
              value={data.details}
              onChange={set("details")}
              className={`${fieldClassName} resize-none`}
            />
          </div>

          <fieldset>
            <legend className={labelClassName}>
              Is this a one-off or ongoing?
            </legend>

            <div className="grid grid-cols-3 gap-[12px]">
              {engagementOptions.map(({ id, label }) => (
                <OptionPill
                  key={id}
                  name="engagement"
                  value={id}
                  label={label}
                  checked={data.engagement === id}
                  onChange={set("engagement")}
                />
              ))}
            </div>
          </fieldset>
        </div>
      )}

      {step === 3 && (
        <div className="mt-[20px] flex flex-col gap-[20px]">
          <div className="grid grid-cols-2 gap-[12px]">
            <div>
              <label htmlFor="quote-name" className={labelClassName}>
                Your name
              </label>

              <input
                id="quote-name"
                type="text"
                autoComplete="name"
                placeholder="Sarah"
                value={data.name}
                onChange={set("name")}
                className={fieldClassName}
              />
            </div>

            <div>
              <label htmlFor="quote-agency" className={labelClassName}>
                Agency name
              </label>

              <input
                id="quote-agency"
                type="text"
                placeholder="Bright Media"
                value={data.agency}
                onChange={set("agency")}
                className={fieldClassName}
              />
            </div>
          </div>

          <div>
            <label htmlFor="quote-email" className={labelClassName}>
              Work email
            </label>

            <input
              id="quote-email"
              type="email"
              autoComplete="email"
              placeholder="name@agency.co.uk"
              value={data.email}
              onChange={set("email")}
              className={fieldClassName}
            />
          </div>

          <fieldset>
            <legend className={labelClassName}>Best way to reach you?</legend>

            <div className="grid grid-cols-2 gap-[12px]">
              {contactMethods.map(({ id, label }) => (
                <OptionPill
                  key={id}
                  name="contact"
                  value={id}
                  label={label}
                  checked={data.contact === id}
                  onChange={set("contact")}
                />
              ))}
            </div>
          </fieldset>

          <label className="flex cursor-pointer items-center gap-[10px]">
            <input
              type="checkbox"
              checked={data.updates}
              onChange={(event) =>
                setData((current) => ({
                  ...current,
                  updates: event.target.checked,
                }))
              }
              className="size-[16px] shrink-0 accent-black"
            />

            <span className="text-text-body text-[13px] tracking-[-0.02em]">
              Send me the occasional useful tip. No spam.
            </span>
          </label>
        </div>
      )}

      <button
        type="button"
        onClick={next}
        className="mt-[33px] flex w-full items-center justify-center gap-[10px] rounded-full bg-black py-[15px] text-[18px] font-extrabold tracking-[-0.02em] text-white uppercase"
      >
        {step === 3 ? "Get my quote" : "Next"}
        <ArrowUpRight size={18} strokeWidth={2.5} />
      </button>

      <p className="text-text-body mt-[14px] text-center text-[12px] tracking-[-0.02em]">
        Prefer to talk?{" "}
        <Link
          href="/contact"
          className="font-bold underline underline-offset-2 hover:text-black"
        >
          Book a 15-min call
        </Link>
      </p>
    </div>
  );
};

export default BlackFridayQuoteForm;
