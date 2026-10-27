"use client";

import { useCallback, useEffect, useRef } from "react";
import { spamConfig } from "@/lib/spam/spamConfig";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

// Loads reCAPTCHA v3 once and returns a honeypot ref + a token getter for the
// given action. With no site key set, getToken returns null and the server
// skips the check too, so forms still work in dev.
export function useSpamProtection(action) {
  const honeypotRef = useRef(null);

  useEffect(() => {
    if (!SITE_KEY) return;
    if (
      document.querySelector(
        `script[src^="${spamConfig.recaptcha.scriptBase}"]`,
      )
    ) {
      return;
    }

    const script = document.createElement("script");
    script.src = `${spamConfig.recaptcha.scriptBase}?render=${SITE_KEY}`;
    script.async = true;
    document.head.appendChild(script);
  }, []);

  const getToken = useCallback(async () => {
    if (!SITE_KEY || !window.grecaptcha) return null;

    await new Promise((resolve) => window.grecaptcha.ready(resolve));
    return window.grecaptcha.execute(SITE_KEY, { action });
  }, [action]);

  const getHoneypot = useCallback(() => honeypotRef.current?.value ?? "", []);

  return {
    honeypotRef,
    honeypotName: spamConfig.honeypotField,
    getToken,
    getHoneypot,
  };
}
