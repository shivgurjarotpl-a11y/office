import CryptoJS from "crypto-js";

export const encryptData = (data) => {
      if (typeof data !== "string") return "";
    // console.log(data);
    let encrypted =  CryptoJS.AES.encrypt(data,import.meta.env.VITE_SECRET_KEY).toString();
    return encodeURIComponent(encrypted);

}


export const decryptData = (text) => {
    // console.log(text);
    const bytes = CryptoJS.AES.decrypt(text,import.meta.env.VITE_SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
}


// export const decryptData = (cipherText) => {
//   if (!cipherText) return "";
//   const bytes = CryptoJS.AES.decrypt(cipherText, import.meta.env.VITE_SECRET_KEY);
//   return bytes.toString(CryptoJS.enc.Utf8); // ✅ TEXT
// };