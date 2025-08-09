import { Firestore } from "@google-cloud/firestore";
import { fileURLToPath } from "url";
import fs from "fs/promises";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface ServiceAccount {
  type: string;
  project_id: string;
  private_key_id: string;
  private_key: string;
  client_email: string;
  client_id: string;
  auth_uri: string;
  token_uri: string;
  auth_provider_x509_cert_url: string;
  client_x509_cert_url: string;
  universe_domain: string;
}

interface SubmissionData {
  name: string;
  email: string;
  message: string;
}

let firestore: Firestore | null = null;

async function initializeFirestore(): Promise<void> {
  let serviceAccount: ServiceAccount;

  try {
    if (process.env.NODE_ENV === "production") {
      const base64String = process.env.FIREBASE_SERVICE_ACCOUNT;

      if (base64String) {
        const decodedString = Buffer.from(base64String, "base64").toString(
          "utf8"
        );
        serviceAccount = JSON.parse(decodedString) as ServiceAccount;
        console.log(serviceAccount);
      } else {
        throw new Error("FIREBASE_SERVICE_ACCOUNT not found in .env file");
      }
    } else {
      const serviceAccountPath = resolve(
        __dirname,
        "../config/serviceAccount.json"
      );
      const data = await fs.readFile(serviceAccountPath, "utf-8");
      serviceAccount = JSON.parse(data) as ServiceAccount;
    }
  } catch (error) {
    console.error("Error initializing Firestore:", error);
    throw error;
  }

  firestore = new Firestore({
    projectId: serviceAccount.project_id,
    credentials: serviceAccount,
  });

  console.log("Firestore initialized successfully");

  try {
    const testDoc = await firestore.collection("submissions").limit(1).get();
    console.log(
      "Firestore test query successful, documents found:",
      testDoc.size
    );
  } catch (error) {
    console.error("Error executing Firestore test query:", error);
  }
}

initializeFirestore().catch((error) => {
  console.error("Error initializing Firestore:", error);
  // Handle initialization failure (e.g., exit process, retry, etc.)
});

export default async function saveFormSubmission(
  submissionData: SubmissionData
): Promise<string> {
  if (!firestore) {
    throw new Error("Firestore is not initialized");
  }

  try {
    const docRef = firestore.collection("submissions").doc();
    await docRef.set({
      ...submissionData,
      timestamp: new Date(),
    });

    return docRef.id;
  } catch (error) {
    console.error("Error saving form submission: ", error);
    throw error;
  }
}
