/**
 * This file will export all env with typing for app to use
 * Flow: Add into .env => bind into next.config => export in env.ts
 */

import getConfig from "next/config";

interface IRuntimeConfig {
  INFURA_API_KEY: string;
  MNEMONIC: string;
}

const { publicRuntimeConfig } = getConfig();

/**
 * True if running in production
 */
export const { INFURA_API_KEY, MNEMONIC } =
  publicRuntimeConfig as IRuntimeConfig;
