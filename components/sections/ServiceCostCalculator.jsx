"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const WORKING_WEEKS_PER_YEAR = 48;

const calculatorFields = [
  { id: "hours", label: "Hours per week", min: 1, max: 30, initial: 10 },
  { id: "people", label: "People doing it", min: 1, max: 15, initial: 2 },
  {
    id: "rate",
    label: "Hourly cost per person in £",
    min: 10,
    max: 60,
    initial: 20,
  },
];

const getYearlyCost = ({ hours, people, rate }) =>
  hours * people * rate * WORKING_WEEKS_PER_YEAR;

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(value);

// Shared manual-process calculator. With a `note` the total updates live and
// the note replaces the button; without one, the button updates the total.
const ServiceCostCalculator = ({ id, hoursLabel, note }) => {
  const [values, setValues] = useState(() =>
    Object.fromEntries(
      calculatorFields.map(({ id, initial }) => [id, initial]),
    ),
  );

  const [calculatedCost, setCalculatedCost] = useState(() =>
    getYearlyCost(values),
  );

  const yearlyCost = note ? getYearlyCost(values) : calculatedCost;

  return (
    <>
      <Section id={id} className="py-[120px] max-sm:py-[80px]">
        <Container className="max-sm:px-[20px]">
          <SectionHeading
            className="text-center"
            title={
              <>
                What is your manual <br />
                <span className="text-blue">process costing you?</span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black max-sm:text-[32px] max-sm:leading-[34px]"
          />

          <div className="mx-auto mt-[60px] flex items-stretch justify-between gap-[45px] rounded-[20px] bg-white p-[45px] shadow-[16px_16px_124px_0px_#0000001C] max-sm:mt-[30px] max-sm:flex-col max-sm:gap-[28px] max-sm:p-[16px] max-sm:pt-[24px]">
            <div className="flex flex-1 flex-col justify-center gap-[30px] max-sm:gap-[24px] max-sm:px-[4px]">
              {calculatorFields.map(({ id: fieldId, label, min, max }) => {
                const value = values[fieldId];
                const progress = ((value - min) / (max - min)) * 100;

                return (
                  <div key={fieldId}>
                    <div className="flex items-center justify-between gap-[20px]">
                      <label
                        htmlFor={`calculator-${fieldId}`}
                        className="text-[18px] font-bold tracking-[-0.04em] text-black max-sm:text-[16px]"
                      >
                        {fieldId === "hours" && hoursLabel ? hoursLabel : label}
                      </label>

                      <span className="bg-grey/60 flex h-[40px] min-w-[60px] items-center justify-center rounded-full px-[15px] text-[14px] tracking-[-0.02em] text-black max-sm:h-[34px] max-sm:min-w-[52px]">
                        {String(value).padStart(2, "0")}
                      </span>
                    </div>

                    <input
                      id={`calculator-${fieldId}`}
                      type="range"
                      min={min}
                      max={max}
                      value={value}
                      onChange={(event) =>
                        setValues((current) => ({
                          ...current,
                          [fieldId]: Number(event.target.value),
                        }))
                      }
                      style={{
                        background: `linear-gradient(to right, var(--color-blue) ${progress}%, var(--color-grey) ${progress}%)`,
                      }}
                      className="[&::-webkit-slider-thumb]:bg-blue [&::-moz-range-thumb]:bg-blue mt-[15px] h-[5px] w-full cursor-pointer appearance-none rounded-full [&::-moz-range-thumb]:size-[14px] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 max-sm:[&::-moz-range-thumb]:size-[20px] [&::-webkit-slider-thumb]:size-[14px] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full max-sm:[&::-webkit-slider-thumb]:size-[20px]"
                    />
                  </div>
                );
              })}
            </div>

            <div className="flex w-[430px] shrink-0 flex-col items-start rounded-[20px] bg-[linear-gradient(124.35deg,#3078FF_2.03%,#AFCBFF_100%)] p-[45px] max-sm:w-full max-sm:p-[24px]">
              <p className="text-[18px] tracking-[-0.02em] text-white max-sm:text-[16px]">
                That&apos;s about
              </p>

              <p
                aria-live="polite"
                className="mt-[5px] text-[65px] leading-none font-extrabold tracking-[-0.06em] text-white max-sm:text-[46px]"
              >
                {formatCurrency(yearlyCost)}
              </p>

              <p className="mt-[10px] text-[18px] tracking-[-0.02em] text-white max-sm:text-[16px]">
                a year on one manual process.
              </p>

              <span className="my-[30px] block h-px w-full bg-white/40 max-sm:my-[20px]" />

              {note ? (
                <p className="text-[18px] leading-[26px] font-bold tracking-[-0.04em] text-white max-sm:text-[16px] max-sm:leading-[24px]">
                  {note}
                </p>
              ) : (
                <div className="flex max-sm:w-full">
                  <button
                    type="button"
                    onClick={() => setCalculatedCost(getYearlyCost(values))}
                    className="group hover:bg-dark-pink! active:bg-dark-pink! inline-flex cursor-pointer items-center justify-center gap-[10px] rounded-full bg-white px-[20px] py-[12px] text-[16px] font-extrabold tracking-[-0.02em] text-black uppercase transition-colors duration-300 ease-out hover:text-white! active:text-white! max-sm:w-full max-sm:px-[16px] max-sm:text-[14px] max-sm:whitespace-nowrap"
                  >
                    Calculate manual costs
                    <ArrowUpRight
                      size={18}
                      strokeWidth={2.5}
                      className="shrink-0 transition-[rotate] duration-300 ease-out group-hover:rotate-45 group-active:rotate-45"
                    />
                  </button>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default ServiceCostCalculator;
