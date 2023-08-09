import classNames from "classnames";

/**
 * Mapping hotkey into className package for better usage
 */
const cx = classNames;

export { cx };

export const decodeJwt = (token: string) => {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace("-", "+").replace("_", "/");
  return JSON.parse(window.atob(base64));
};

export function foldTo16Bytes(bytes: Array<any>) {
  while (bytes.length > 16) {
    bytes[bytes.length - 17] =
      Number(bytes[bytes.length - 17]) ^ Number(bytes[bytes.length - 1]);
    bytes.pop();
  }
  return bytes;
}

export const formatDID = (did: string) => {
  const prefix = "did:flow:";
  const keyId = did.replace(prefix, "");
  const startId = keyId.slice(0, 4);
  const endId = keyId.slice(-4);
  const formattedId = prefix + `${startId}...${endId}`;
  return formattedId;
};
