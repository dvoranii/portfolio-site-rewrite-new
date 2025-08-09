import { useState, useEffect } from "react";

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;
    };
  }
}

export const useRecaptcha = (siteKey: string): string => {
  const [recaptchaToken, setRecaptchaToken] = useState<string>("");

  useEffect(() => {
    if (document.querySelector(`script[src*="recaptcha/api.js"]`)) {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          window.grecaptcha
            .execute(siteKey, { action: "contact_form" })
            .then((token: string) => {
              setRecaptchaToken(token);
            })
            .catch((error: any) => {
              console.error("reCAPTCHA execution error:", error);
            });
        });
      }
      return;
    }

    const handleLoaded = (): void => {
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(siteKey, { action: "contact_form" })
          .then((token: string) => {
            setRecaptchaToken(token);
          })
          .catch((error: any) => {
            console.error("reCAPTCHA execution error:", error);
          });
      });
    };

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.addEventListener("load", handleLoaded);
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      script.removeEventListener("load", handleLoaded);
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [siteKey]);

  return recaptchaToken;
};
