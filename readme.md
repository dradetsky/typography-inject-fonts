typography-inject-fonts
=======================

If you want to use typography.js & google fonts inside of an app
created with create-react-app, you might have some difficulty, As did
the gentleman here:

https://github.com/KyleAMathews/typography.js/issues/177

Fortunately, if you're not too bothered about "clean solutions" or
"good code quality," I think I may have an answer for you.

usage
-----

SHITTY HACKS INCOMING!!!!!

```javascript
import Typography from 'typography'
import fairyGatesTheme from 'typography-theme-fairy-gates'
import injectFonts from 'typography-inject-fonts'

const theme = fairyGatesTheme
const typography = new Typography(theme)
typography.injectStyles()
injectFonts(typography)
```

implementation
--------------

I basically just ganked the code from
`packages/react-typography/src/GoogleFont.js`, stole the basic idea
used by `injectStyles()`, and so far it seems to work. By which I mean
"I have not yet been bitten by the edge case." If you're interested in
volunteering to be bitten by the edge cases, I'll put it up on npm
later.

WARNING: I am not a real frontend engineer. I don't even play one on
TV. DO NOT GET THE IDEA THAT THIS IS GOOD ENGINEERING. If you want to
get better at frontend stuff, steal your ideas from @KyleAMathews, not
me.
