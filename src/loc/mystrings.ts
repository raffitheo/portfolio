import LocalizedStrings, { LocalizedStringsMethods } from "react-localization"

import enUS from "@loc/en-en"
import itIT from "@loc/it-it"
import frFR from "@loc/fr-fr"

export type PortfolioLocalizations = {
  landing: {
    description: string
    social: {
      email: string
      github: string
      linkedin: string
      resume: string
    }
    title: string
  }
}

const strings: PortfolioLocalizations & LocalizedStringsMethods =
  new LocalizedStrings({
    en: enUS,
    fr: frFR,
    it: itIT
  })

export default strings
