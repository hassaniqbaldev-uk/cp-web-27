"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import BookCallButton from "../ui/BookCallButton";
import WhatsappIcon from "../ui/WhatsappIcon";
import { useWhatsappChat } from "./WhatsappChatContext";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

// WhatsApp chat (replaces the Crisp chat). On desktop a floating launcher opens
// it; on max-xl the floating launcher is hidden and the header's WhatsApp icon
// opens it instead. Both share open state through WhatsappChatContext.
//  - Panel is "message the founder", not a faceless support bot.
//  - One tap per service; the message is prefilled and tagged with the page
//    it came from, so we know the context before replying.
//  - The free 15 min call stays one tap away for people who'd rather talk.
//  - Teaser bubble shows once per session (desktop only), never on first paint.

// ---- Edit these -------------------------------------------------------------
const WHATSAPP_NUMBER = "441618202667"; // international format, no + or spaces
const OFFICE_HOURS = { start: 9, end: 17.5, days: [1, 2, 3, 4, 5] }; // UK time, Mon-Fri
const TEASER_DELAY_MS = 12000;
const AVATAR = "/images/black-friday/hassan-avatar.png";
const TOPICS = [
  {
    id: "website",
    label: "A new website",
    message: "Hi Hassan, I'm looking for a new website.",
  },
  {
    id: "seo",
    label: "Getting found on Google",
    message: "Hi Hassan, I'd like help getting found on Google (SEO).",
  },
  {
    id: "ecommerce",
    label: "Growing my online shop",
    message: "Hi Hassan, I'd like help growing my online shop.",
  },
  {
    id: "care",
    label: "Support for my current site",
    message:
      "Hi Hassan, I need ongoing support or hosting for my current site.",
  },
];
// -----------------------------------------------------------------------------

const TEASER_KEY = "cp-wa-teaser-seen";

// Sends the event to Google Tag Manager
const track = (event, params = {}) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
};

const isOfficeOpen = () => {
  try {
    const parts = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/London",
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    }).formatToParts(new Date());
    const get = (type) => parts.find((p) => p.type === type)?.value;
    const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(
      get("weekday"),
    );
    const time = Number(get("hour")) + Number(get("minute")) / 60;
    return (
      OFFICE_HOURS.days.includes(day) &&
      time >= OFFICE_HOURS.start &&
      time < OFFICE_HOURS.end
    );
  } catch {
    return true;
  }
};

const buildLink = (text) => {
  const page = window.location.pathname;
  const full =
    page && page !== "/"
      ? `${text}\n\n(From creativepixels.agency${page})`
      : text;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(full)}`;
};

const ArrowIcon = () => (
  <svg
    viewBox="0 0 16 16"
    aria-hidden="true"
    className="h-[14px] w-[14px]"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

const CloseIcon = ({ className = "h-[16px] w-[16px]" }) => (
  <svg
    viewBox="0 0 16 16"
    aria-hidden="true"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
  >
    <path d="M4 4l8 8M12 4l-8 8" />
  </svg>
);

const WhatsAppWidget = () => {
  const { open, setOpen } = useWhatsappChat();
  const [teaser, setTeaser] = useState(false);
  const [online, setOnline] = useState(true);
  const [message, setMessage] = useState("");
  const buttonRef = useRef(null);
  const panelRef = useRef(null);
  const teaserRef = useRef(null);

  // Office hours status, re-checked every minute
  useEffect(() => {
    const frame = requestAnimationFrame(() => setOnline(isOfficeOpen()));
    const timer = setInterval(() => setOnline(isOfficeOpen()), 60000);

    return () => {
      cancelAnimationFrame(frame);
      clearInterval(timer);
    };
  }, []);

  // Teaser bubble, once per session
  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(TEASER_KEY) === "1";
    } catch {
      seen = false;
    }
    if (seen) return;

    const timer = setTimeout(() => setTeaser(true), TEASER_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  // Escape to close, focus into the panel when it opens
  useEffect(() => {
    if (!open) return;

    track("whatsapp_open");
    panelRef.current?.querySelector("button, a, textarea")?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // Panel open/close (GSAP)
  useGSAP(() => {
    if (open) {
      gsap.fromTo(
        panelRef.current,
        { autoAlpha: 0, y: 16, scale: 0.96 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.35, ease: "back.out(1.4)" },
      );
    } else {
      gsap.to(panelRef.current, {
        autoAlpha: 0,
        y: 12,
        scale: 0.97,
        duration: 0.2,
        ease: "power2.in",
      });
    }
  }, [open]);

  // Teaser bubble (GSAP)
  useGSAP(() => {
    if (teaser && !open) {
      gsap.fromTo(
        teaserRef.current,
        { autoAlpha: 0, y: 10, scale: 0.95 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.3, ease: "back.out(1.4)" },
      );
    } else {
      gsap.to(teaserRef.current, {
        autoAlpha: 0,
        y: 6,
        scale: 0.97,
        duration: 0.2,
        ease: "power2.in",
      });
    }
  }, [teaser, open]);

  const dismissTeaser = () => {
    setTeaser(false);
    try {
      sessionStorage.setItem(TEASER_KEY, "1");
    } catch {
      /* storage blocked */
    }
  };

  const toggle = () => {
    dismissTeaser();
    setOpen(!open);
  };

  const sendTo = (text, topic) => {
    track("whatsapp_click", { topic });
    window.open(buildLink(text), "_blank", "noopener,noreferrer");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const text = message.trim();
    if (!text) return;
    sendTo(text, "custom");
    setMessage("");
  };

  return (
    <div className="fixed right-[24px] bottom-[24px] z-[110] max-sm:right-[16px] max-sm:bottom-[16px]">
      {/* Panel */}
      <div
        ref={panelRef}
        id="cp-wa-panel"
        role="dialog"
        aria-label="Chat with CreativePixels on WhatsApp"
        aria-hidden={!open}
        style={{ transformOrigin: "bottom right" }}
        className="invisible absolute right-0 bottom-[calc(100%+12px)] w-[calc(100vw-32px)] max-w-[360px] overflow-hidden rounded-[24px] bg-white opacity-0 shadow-[0px_24px_60px_0px_#07070733] max-xl:fixed max-xl:top-[120px] max-xl:right-[16px] max-xl:bottom-auto max-xl:left-auto"
      >
        {/* Header */}
        <div className="relative overflow-hidden bg-[#070707] px-[20px] pt-[20px] pb-[24px] text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-[80px] -right-[60px] h-[180px] w-[180px] rounded-full opacity-60 blur-[50px]"
            style={{
              background: "linear-gradient(135deg, #FF37B3, #3078FF)",
            }}
          />
          <div className="relative flex items-start justify-between gap-[12px]">
            <div className="flex items-center gap-[12px]">
              <div className="relative h-[48px] w-[48px] shrink-0">
                <Image
                  src={AVATAR}
                  alt=""
                  width={48}
                  height={48}
                  className="h-full w-full rounded-full object-cover"
                />
                <span
                  className={`absolute right-[1px] bottom-[1px] h-[12px] w-[12px] rounded-full border-2 border-[#070707] ${
                    online ? "bg-[#25D366]" : "bg-[#9A96A3]"
                  }`}
                />
              </div>
              <div>
                <p className="text-[17px] leading-[22px] font-semibold">
                  Hassan Iqbal
                </p>
                <p className="text-[13px] leading-[18px] text-white/60">
                  Founder, CreativePixels
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="flex h-[32px] w-[32px] items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              <CloseIcon />
            </button>
          </div>
          <p className="relative mt-[16px] text-[13px] leading-[18px] text-white/70">
            {online
              ? "Usually replies within the hour"
              : "Out of hours. I'll reply from 9am UK time"}
          </p>
        </div>

        {/* Body */}
        <div className="bg-[#F6F5F8] px-[16px] pt-[16px] pb-[12px]">
          <div className="max-w-[90%] rounded-[16px] rounded-tl-[4px] bg-white px-[16px] py-[12px] text-[15px] leading-[22px] text-[#070707] shadow-[0px_2px_8px_0px_#0707070d]">
            Hi there. What can we help you with? Pick one and I&rsquo;ll pick it
            up on WhatsApp.
          </div>

          <ul className="mt-[12px] flex flex-col gap-[6px]">
            {TOPICS.map((topic) => (
              <li key={topic.id}>
                <button
                  type="button"
                  onClick={() => sendTo(topic.message, topic.id)}
                  className="group flex w-full items-center justify-between rounded-[12px] border border-[#E4E3E8] bg-white px-[16px] py-[12px] text-left text-[15px] leading-[20px] font-medium text-[#070707] transition-all duration-200 hover:border-[#070707] hover:pl-[20px]"
                >
                  {topic.label}
                  <span className="text-[#9A96A3] transition-colors group-hover:text-[#070707]">
                    <ArrowIcon />
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <form
            onSubmit={onSubmit}
            className="mt-[12px] flex items-end gap-[8px]"
          >
            <label htmlFor="cp-wa-message" className="sr-only">
              Or write your own message
            </label>
            <textarea
              id="cp-wa-message"
              rows={1}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) onSubmit(e);
              }}
              placeholder="Or write your own message"
              className="max-h-[100px] min-h-[44px] flex-1 resize-none rounded-[12px] border border-[#E4E3E8] bg-white px-[14px] py-[11px] text-[15px] leading-[20px] text-[#070707] outline-none placeholder:text-[#9A96A3] focus:border-[#070707]"
            />
            <button
              type="submit"
              disabled={!message.trim()}
              aria-label="Send on WhatsApp"
              className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white transition-opacity disabled:opacity-40"
            >
              <WhatsappIcon className="h-[20px] w-[20px]" />
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="border-t border-[#E4E3E8] bg-white px-[20px] py-[14px]">
          <BookCallButton
            onClick={() =>
              track("call_booking_click", { source: "whatsapp-widget" })
            }
            className="w-full justify-between! text-[14px] leading-[20px] font-medium text-[#625C70] transition-colors hover:text-[#070707]"
          >
            Prefer to talk? Book a free 15 min call
            <ArrowIcon />
          </BookCallButton>
        </div>
      </div>

      {/* Teaser bubble (desktop only) */}
      <div
        ref={teaserRef}
        aria-hidden={!(teaser && !open)}
        style={{ transformOrigin: "bottom right" }}
        className="invisible absolute right-0 bottom-[calc(100%+12px)] flex w-[280px] items-start gap-[10px] rounded-[18px] rounded-br-[4px] bg-white py-[12px] pr-[36px] pl-[12px] opacity-0 shadow-[0px_12px_40px_0px_#07070726] max-xl:hidden"
      >
        <Image
          src={AVATAR}
          alt=""
          width={36}
          height={36}
          className="h-[36px] w-[36px] shrink-0 rounded-full object-cover"
        />
        <button
          type="button"
          onClick={toggle}
          className="flex-1 text-left text-[14px] leading-[20px] text-[#070707]"
        >
          <span className="font-semibold">Got a project in mind?</span> Message
          me here, I reply myself.
        </button>
        <button
          type="button"
          onClick={dismissTeaser}
          aria-label="Dismiss"
          className="absolute top-[8px] right-[8px] flex h-[24px] w-[24px] items-center justify-center rounded-full text-[#9A96A3] hover:bg-[#F6F5F8] hover:text-[#070707]"
        >
          <CloseIcon className="h-[12px] w-[12px]" />
        </button>
      </div>

      {/* Launcher (desktop only; max-xl opens from the header icon) */}
      <button
        ref={buttonRef}
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-controls="cp-wa-panel"
        aria-label={open ? "Close WhatsApp chat" : "Chat with us on WhatsApp"}
        className="group relative flex h-[64px] w-[64px] items-center justify-center rounded-full transition-transform duration-300 hover:scale-105 active:scale-95 max-xl:hidden"
      >
        {/* CP gradient ring */}
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full motion-safe:animate-[spin_6s_linear_infinite]"
          style={{
            background:
              "conic-gradient(from 0deg, #FF37B3, #3078FF, #EE8D00, #FF37B3)",
          }}
        />
        <span className="absolute inset-[3px] rounded-full bg-[#070707]" />
        <span className="relative flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#25D366] text-white">
          {open ? (
            <CloseIcon className="h-[20px] w-[20px]" />
          ) : (
            <WhatsappIcon className="h-[26px] w-[26px]" />
          )}
        </span>
        {teaser && !open && (
          <span
            aria-hidden="true"
            className="absolute top-[2px] right-[2px] h-[14px] w-[14px] rounded-full border-2 border-white bg-[#FF37B3]"
          />
        )}
      </button>
    </div>
  );
};

export default WhatsAppWidget;
