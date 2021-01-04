function injectFonts(typography) {
  const fontsStr = getFontsStr(typography)
  if (fontsStr) {
    const link = getFontsLink(fontsStr)
    injectLink(link)
  } else {
    // dunno if this is ideal behavior
    throw new Error('no fonts str')
  }
}

function injectLink(link) {
  const typoElt = document.getElementById("typography.js")
  if (typoElt) {
    typoElt.insertAdjacentHTML('afterend', link)
  } else {
    // i don't feel like handling this case right now
    throw new Error('no typo elt')
  }
}

function getFontsStr(typography) {
  let fontsStr = ""
  if (typography.options.googleFonts) {
    const fonts = typography.options.googleFonts.map(font => {
      let str = ""
      str += font.name.split(" ").join("+")
      str += ":"
      str += font.styles.join(",")

      return str
    })

    fontsStr = fonts.join("|")

  }
  return fontsStr
}

function getFontsLink(str) {
  const link = `<link href="//fonts.googleapis.com/css?family=${str}" rel="stylesheet" type="text/css" />`
  return link
}

export default injectFonts
