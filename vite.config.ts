import { ConfigEnv, defineConfig, loadEnv } from 'vite';

/**
 * In the Vite API the command value is 'serve' during dev. In the CLI 'vite', 'vite dev', and 
 * 'vite serve' are aliases. While 'build' is used for production (e.g., 'vite build').
 */
export default defineConfig(({ command, mode }: ConfigEnv) => {
  // Vite doesn't load .env files by default. The files to load can only be determined after 
  // evaluating the given Vite config. For example, the root and envDir options affect the 
  // loading behaviour. However, you can use the exported loadEnv helper to load the specific 
  // .env file if needed. So here, we load env file based on `mode` in the current working 
  // directory. Then, we set the third parameter to '' to load all env regardless of the 
  // `VITE_` prefix. See docs: https://vitejs.dev/config/
  const env = loadEnv(mode, process.cwd(), '');

  if (command === 'serve') {
    return {
      // dev config
      server: {
        port: Number(env.PORT) ?? 5173,
      }
    }
  } else {
    // command === 'build'
    return {
      // production config
      server: {
        port: Number(env.PORT) ?? 5173,
      }
    }
  }
})