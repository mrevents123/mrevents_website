import { useState, useEffect } from "react";

const STORAGE_KEY = "mr-events-cookie-consent";

const useCookieConsent = () => {
  const [consent, setConsent] = useState(null); // null = not decided, "accepted", "declined"

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) setConsent(stored);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setConsent("accepted");
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setConsent("declined");
  };

  return { consent, accept, decline, isUndecided: consent === null };
};

export default useCookieConsent;
