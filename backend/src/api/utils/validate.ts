interface Validator {
  name: (input: string) => string;
  email: (input: string) => string;
}

const validateInput: Validator = {
  name: (input: string): string => {
    if (!input.trim()) return "Name is required";
    return "";
  },
  email: (input: string): string => {
    if (!input) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input)) return "Email is invalid";
    return "";
  },
};

export default validateInput;
