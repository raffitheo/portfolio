import { Alias, defineConfig } from "vite"
import path from "path"
import react from "@vitejs/plugin-react"

import * as tsconfig from "./tsconfig.paths.json"

const readAliasFromTsConfig = (): Alias[] => {
  const pathReplaceRegex = new RegExp(/\/\*$/, "")

  return Object.entries(tsconfig.compilerOptions.paths).reduce(
    (aliases, [fromPaths, toPaths]) => {
      const find = fromPaths.replace(pathReplaceRegex, "")
      const toPath = toPaths[0].replace(pathReplaceRegex, "")
      const replacement = path.resolve(__dirname, toPath)
      aliases.push({ find, replacement })
      return aliases
    },
    [] as Alias[]
  )
}

export default defineConfig({
  base: "./",
  css: { modules: { localsConvention: "camelCase" } },
  plugins: [react()],
  resolve: {
    alias: readAliasFromTsConfig()
  }
})
