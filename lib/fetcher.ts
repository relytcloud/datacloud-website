import type { WithImplicitCoercion } from "node:buffer";
import crypto from "node:crypto";

const key = "uLAfBfUHV3xoLMYI";

function generateRandomString() {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomString = "";
  for (let i = 0; i < 16; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }
  return randomString;
}

function encryptCBC(
  data: string,
  key:
    | WithImplicitCoercion<string>
    | { [Symbol.toPrimitive](hint: "string"): string },
  iv:
    | WithImplicitCoercion<string>
    | { [Symbol.toPrimitive](hint: "string"): string }
) {
  const cipher = crypto.createCipheriv(
    "aes-128-cbc",
    Buffer.from(key, "utf8"),
    Buffer.from(iv, "utf8")
  );
  let encrypted = cipher.update(data, "utf8", "base64");
  encrypted += cipher.final("base64");
  return encrypted;
}

export const postFetch = async (url: string, body: Record<string, unknown>) => {
  const now = Date.now().toString();
  const iv = generateRandomString();
  const encrypted = encryptCBC(now, key, iv);
  const finalResult = Buffer.from(iv + encrypted).toString("base64");

  const res = await fetch(
    `https://web-api.data.cloud/${url}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        credentials: "include",
        Authentication: finalResult,
      },
      body: JSON.stringify({ ...body, language: 'en' }),
    }
  );
  const json = await res.json();
  return json;
};
