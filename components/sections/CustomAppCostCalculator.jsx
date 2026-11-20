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

const CustomAppCostCalculator = () => {
  const [values, setValues] = useState(() =>
    Object.fromEntries(
      calculatorFields.map(({ id, initial }) => [id, initial]),
    ),
  );

  const [yearlyCost, setYearlyCost] = useState(() => getYearlyCost(values));

  return (
    <>
      <Section id="custom-app-cost-calculator" className="py-[120px]">
        <Container>
          <SectionHeading
            className="text-center"
            title={
              <>
                What is your manual <br />
                <span className="text-blue">process costing you?</span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
          />

          <div className="mx-auto mt-[45px] flex w-[1010px] items-stretch justify-between gap-[45px] rounded-[20px] bg-white p-[45px] shadow-[0px_20px_80px_0px_rgba(0,0,0,0.08)]">
            <div className="flex flex-1 flex-col justify-center gap-[30px]">
              {calculatorFields.map(({ id, label, min, max }) => {
                const value = values[id];
                const progress = ((value - min) / (max - min)) * 100;

                return (
                  <div key={id}>
                    <div className="flex items-center justify-between gap-[20px]">
                      <label
                        htmlFor={`calculator-${id}`}
                        className="text-[18px] font-bold tracking-[-0.04em] text-black"
                      >
                        {label}
                      </label>

                      <span className="bg-grey/60 flex h-[40px] min-w-[60px] items-center justify-center rounded-full px-[15px] text-[14px] tracking-[-0.02em] text-black">
                        {String(value).padStart(2, "0")}
                      </span>
                    </div>

                    <input
                      id={`calculator-${id}`}
                      type="range"
                      min={min}
                      max={max}
                      value={value}
                      onChange={(event) =>
                        setValues((current) => ({
                          ...current,
                          [id]: Number(event.target.value),
                        }))
                      }
                      style={{
                        background: `linear-gradient(to right, var(--color-blue) ${progress}%, var(--color-grey) ${progress}%)`,
                      }}
                      className="[&::-webkit-slider-thumb]:bg-blue [&::-moz-range-thumb]:bg-blue mt-[15px] h-[5px] w-full cursor-pointer appearance-none rounded-full [&::-moz-range-thumb]:size-[14px] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-webkit-slider-thumb]:size-[14px] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full"
                    />
                  </div>
                );
              })}
            </div>

            <div className="flex w-[430px] shrink-0 flex-col items-start rounded-[20px] bg-[linear-gradient(124.35deg,#3078FF_2.03%,#AFCBFF_100%)] p-[45px]">
              <p className="text-[18px] tracking-[-0.02em] text-white">
                That&apos;s about
              </p>

              <p
                aria-live="polite"
                className="mt-[5px] text-[65px] leading-none font-extrabold tracking-[-0.06em] text-white"
              >
                {formatCurrency(yearlyCost)}
              </p>

              <p className="mt-[10px] text-[18px] tracking-[-0.02em] text-white">
                a year on one manual process.
              </p>

              <span className="my-[30px] block h-px w-full bg-white/40" />

              <div className="flex">
                <button
                  type="button"
                  onClick={() => setYearlyCost(getYearlyCost(values))}
                  className="group hover:bg-dark-pink! active:bg-dark-pink! inline-flex cursor-pointer items-center justify-center gap-[10px] rounded-full bg-white px-[20px] py-[12px] text-[16px] font-extrabold tracking-[-0.02em] text-black uppercase transition-colors duration-300 ease-out hover:text-white! active:text-white!"
                >
                  Calculate manual costs
                  <ArrowUpRight
                    size={18}
                    strokeWidth={2.5}
                    className="shrink-0 transition-[rotate] duration-300 ease-out group-hover:rotate-45 group-active:rotate-45"
                  />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default CustomAppCostCalculator;
