import express, { Request, Response } from "express";
import verifyRecaptcha from "./utils/verifyCaptcha";
import sanitizeInput from "./utils/sanitizeInput";
import validateInput from "./utils/validate";
import saveFormSubmission from "./utils/firestore";

const router = express.Router();

interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
  recaptchaToken: string;
}

interface ValidationErrors {
  nameError?: string;
  emailError?: string;
}

router.post(
  "/api/contact",
  async (req: Request<{}, {}, ContactRequestBody>, res: Response) => {
    let { name, email, message, recaptchaToken } = req.body;

    const nameError = validateInput.name(name);
    const emailError = validateInput.email(email);

    if (nameError || emailError) {
      const errors: ValidationErrors = { nameError, emailError };
      return res.status(400).json({
        status: "failed",
        errors,
      });
    }

    try {
      name = sanitizeInput.text(name);
      email = sanitizeInput.text(email);
      message = sanitizeInput.message(message);

      const recaptchaResult = await verifyRecaptcha(recaptchaToken);

      console.log(recaptchaResult);

      if (
        !recaptchaResult.success ||
        (recaptchaResult.score && recaptchaResult.score < 0.5)
      ) {
        console.log(recaptchaResult);
        return res.status(400).json({
          status: "failed",
          error: "reCAPTCHA verification failed",
        });
      }

      await saveFormSubmission({ name, email, message });

      // TODO: Implement email sending later
      // const mailResult = await sendMail({ name, email, message });

      res.status(200).json({ status: "success" });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      res.status(500).json({
        status: "failed",
        error: errorMessage,
      });
    }
  }
);

export default router;
