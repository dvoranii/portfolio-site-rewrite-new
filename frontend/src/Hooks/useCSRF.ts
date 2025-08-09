import { useState, useEffect } from "react";

/**
 * Custom hook to fetch and provide a CSRF token.
 * This token is used to prevent Cross-Site Request Forgery attacks.
 * @returns The CSRF token as a string.
 */
export const useCsrfToken = (): string => {
  const [csrfToken, setCsrfToken] = useState<string>("");

  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/csrf`, {
          credentials: "include",
        });

        if (response.ok) {
          const data: { csrfToken: string } = await response.json();
          setCsrfToken(data.csrfToken);
        } else {
          console.error("Failed to fetch CSRF token");
        }
      } catch (error) {
        console.error("Error fetching CSRF token:", error);
      }
    };

    fetchCsrfToken();
  }, []);

  return csrfToken;
};
