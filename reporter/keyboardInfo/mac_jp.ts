export default [
  // 最上段(Esc, Fnの段)
  {keys: [
    {keys: ['Key.esc']},
    {keys: ['Key.f1']},
    {keys: ['Key.f2']},
    {keys: ['Key.f3']},
    {keys: ['Key.f4']},
    {keys: ['Key.f5']},
    {keys: ['Key.f6']},
    {keys: ['Key.f7']},
    {keys: ['Key.f8']},
    {keys: ['Key.f9']},
    {keys: ['Key.f10']},
    {keys: ['Key.f11']},
    {keys: ['Key.f12']}
  ]},
  // 数字等の段
  {keys: [
    {keys: [
      "'1'",
      "'!'",
      '\u00a1', // ¡
      '\u2044'  // ⁄
    ]},
    {keys: [
      "'2'",
      // 「"」
      "\u2122", // ™
      "\u20ac"  // €
    ]},
    {keys: [
      "'3'",
      "'#'",
    ]},
    {keys: [
      "'4'",
      "'$'"
    ]},
    {keys: [
      "'5'",
      "'%'"
    ]},
    {keys: [
      "'6'",
      "'&'"
    ]},
    {keys: [
      "'7'",
      // 「'」
    ]},
    {keys: [
      "'8'",
      "'('"
    ]},
    {keys: [
      "'9'",,
      "')'"
    ]},
    {keys: [
      "'0'",
      "\u00ba", // º
      "\u201a"  // ‚
    ]},
    {keys: [
      "'-'",
      "'='",
      '\u2013', // –
      '\u2014'  // —
    ]},
    {keys: [
      "'^'",
      "'~'",
      '\u2260', // ≠
      '\u00b1' // ±
    ]},
    {keys: [
      "'\\'",// これで合ってる？
      "'|'"
    ]},
    {keys: [
      'Key.backspace',
    ]}
  ]}
];

