module.exports = {
  "presets": [
    [
      "next/babel",
      {
        "preset-env": {},
        "transform-runtime": {},
        "styled-jsx": {},
        "class-properties": {}
      },
      "@babel/preset-react"
    ]
  ],
  plugins: [
    [
      "styled-components",
      { 
        "ssr": true
      }
    ],
  ],
}
