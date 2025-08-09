import sanitizeHtml from "sanitize-html";

interface SanitizeInputFunctions {
  text: (input: string) => string;
  message: (input: string) => string;
}

const sanitizeInput: SanitizeInputFunctions = {
  text: (input) =>
    sanitizeHtml(input, {
      allowedTags: [],
      allowedAttributes: {},
    }),
  message: (input) =>
    sanitizeHtml(input, {
      allowedTags: ["b", "i", "em", "strong", "a"],
      allowedAttributes: {
        a: ["href"],
      },
    }),
};

export default sanitizeInput;
