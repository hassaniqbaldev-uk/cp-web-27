"use client";

import { platformQuizResults, platformQuizSteps } from "@/config/common";
import { ArrowUpRight, ChevronLeft } from "lucide-react";
import { useState } from "react";
import Button from "./Button";

const SECONDS_PER_STEP = 5;

const total = platformQuizSteps.length;

// Adds up each chosen option's `points`; a tie goes to the first result.
const getResult = (answers) => {
  const score = (resultId) =>
    platformQuizSteps.reduce((sum, { id, options }) => {
      const option = options.find((item) => item.id === answers[id]);

      return sum + (option?.points?.[resultId] ?? 0);
    }, 0);

  return platformQuizResults.reduce((best, result) =>
    score(result.id) > score(best.id) ? result : best,
  );
};

const PlatformQuiz = () => {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  if (index === total) {
    const { icon: Icon, iconClassName, title, text, cta } = getResult(answers);

    return (
      <div
        role="status"
        className="flex min-h-[376px] flex-col items-center text-center"
      >
        <Icon size={75} className={`mt-[25px] ${iconClassName}`} />

        <h3 className="mt-[25px] text-[28px] leading-[34px] font-bold tracking-[-0.06em] text-black">
          {title}
        </h3>

        <p className="text-text-body mt-[18px] max-w-[440px] text-[18px] leading-[24px] font-medium tracking-[-0.02em]">
          {text}
        </p>

        <div className="mt-auto flex w-full pt-[25px]">
          <Button
            href={cta.href}
            className="w-full rounded-full bg-black px-[20px] py-[13px] text-[18px] font-extrabold tracking-[-0.02em] text-white uppercase"
          >
            {cta.label}
          </Button>
        </div>
      </div>
    );
  }

  const { id, question, options, optionsClassName } = platformQuizSteps[index];
  const selected = answers[id];

  const onSubmit = (event) => {
    event.preventDefault();
    if (selected) setIndex(index + 1);
  };

  return (
    <form onSubmit={onSubmit} className="flex min-h-[376px] flex-col">
      <div className="flex items-center gap-[18px]">
        {index > 0 && (
          <button
            type="button"
            aria-label="Previous question"
            onClick={() => setIndex(index - 1)}
            className="flex size-[38px] shrink-0 cursor-pointer items-center justify-center rounded-full border border-black text-black transition-colors duration-300 hover:bg-black hover:text-white"
          >
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>
        )}

        <div className="flex-1">
          <div className="flex items-center justify-between gap-[20px]">
            <p
              aria-live="polite"
              className="text-dark-pink text-[16px] leading-[22px] tracking-[-0.02em]"
            >
              Step {index + 1} of {total}
            </p>

            <p className="text-[13px] leading-[22px] tracking-[-0.02em] text-black/50">
              About {(total - index) * SECONDS_PER_STEP} seconds left
            </p>
          </div>

          <span className="bg-dark-pink/15 mt-[8px] block h-[4px] w-full overflow-hidden rounded-full">
            <span
              className="bg-dark-pink block h-full rounded-full transition-[width] duration-500 ease-out"
              style={{ width: `${((index + 1) / total) * 100}%` }}
            />
          </span>
        </div>
      </div>

      <fieldset key={id} className="mt-[25px]">
        <legend className="text-[28px] leading-[34px] font-bold tracking-[-0.06em] whitespace-pre-line text-black">
          {question}
        </legend>

        <div className={`mt-[18px] flex gap-[10px] ${optionsClassName}`}>
          {options.map(({ id: optionId, label, className = "" }) => (
            <label
              key={optionId}
              className={`has-checked:bg-grey bg-grey/40 hover:bg-grey/70 has-focus-visible:outline-dark-pink flex h-[55px] flex-1 cursor-pointer items-center gap-[10px] rounded-full px-[12px] text-[18px] font-medium tracking-[-0.02em] text-black transition-colors duration-300 has-focus-visible:outline-2 ${className}`}
            >
              <input
                type="radio"
                name={id}
                value={optionId}
                checked={selected === optionId}
                onChange={() =>
                  setAnswers((current) => ({ ...current, [id]: optionId }))
                }
                className="peer sr-only"
              />

              <span className="flex size-[30px] shrink-0 items-center justify-center rounded-full bg-white before:size-[13px] before:scale-0 before:rounded-full before:bg-black before:transition-transform before:duration-200 peer-checked:before:scale-100" />

              {label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-auto pt-[18px]">
        <button
          type="submit"
          disabled={!selected}
          className="flex h-[53px] w-full cursor-pointer items-center justify-center gap-[10px] rounded-full bg-black text-[18px] font-extrabold tracking-[-0.02em] text-white uppercase transition-opacity duration-300 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next
          <ArrowUpRight size={18} strokeWidth={2.5} />
        </button>
      </div>
    </form>
  );
};

export default PlatformQuiz;
