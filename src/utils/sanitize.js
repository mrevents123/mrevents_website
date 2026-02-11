/**
 * Sanitize a string to prevent XSS and email header injection.
 * Strips HTML tags and trims whitespace.
 */
export const sanitize = (str) => {
  if (typeof str !== "string") return "";
  return str
    .replace(/[<>]/g, "")         // strip angle brackets
    .replace(/[\r\n]+/g, " ")     // collapse newlines (prevents header injection)
    .trim();
};

/**
 * Sanitize all string values in a form object.
 */
export const sanitizeForm = (form) => {
  const clean = {};
  for (const [key, value] of Object.entries(form)) {
    clean[key] = key === "message" ? sanitizeMessage(value) : sanitize(value);
  }
  return clean;
};

/**
 * Sanitize message body — allow newlines but strip HTML.
 */
export const sanitizeMessage = (str) => {
  if (typeof str !== "string") return "";
  return str.replace(/[<>]/g, "").trim();
};
