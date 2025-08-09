interface RecaptchaResponse {
  success: boolean;
  score?: number;
  "error-codes"?: string[];
}

const verifyRecaptcha = async (token: string): Promise<RecaptchaResponse> => {
  const secret = process.env.SECRET_KEY;

  if (!secret) {
    throw new Error("SECRET_KEY is not defined in environment variables.");
  }

  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secret}&response=${token}`,
    }
  );

  const data: RecaptchaResponse = await response.json();
  return data;
};

export default verifyRecaptcha;
