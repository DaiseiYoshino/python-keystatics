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
    {width: 1.5, keys: [
      "'1'",
      "'!'",
      "'\u00a1'", // ¡
      "'\u2044'"  // ⁄
    ]},
    {keys: [
      "'2'",
      // 「"」
      "'\u2122'", // ™
      "'\u20ac'"  // €
    ]},
    {keys: [
      "'3'",
      "'#'",
      "'\u00a3'", // £
      "'\u2039'"  // ‹
    ]},
    {keys: [
      "'4'",
      "'$'",
      "'\u00a2'", // ¢
      "'\u203a'"  // ›
    ]},
    {keys: [
      "'5'",
      "'%'",
      "'\u221e'", // ∞
      "'\ufb01'"  // ﬁ
    ]},
    {keys: [
      "'6'",
      "'&'",
      "'\u00a7'", // §
      "'\ufb02'"  // ﬂ
    ]},
    {keys: [
      "'7'",
      // 「'」
      "'\u00b6'", // ¶
      "'\u2021'"  // ‡
    ]},
    {keys: [
      "'8'",
      "'('",
      "'\u2022'", // •
      "'\u00b0'"  // °
    ]},
    {keys: [
      "'9'",
      "')'",
      "'\u00aa'", // ª
      "'\u00b7'"  // ·
    ]},
    {keys: [
      "'0'",
      "'\u00ba'", // º
      "'\u201a'"  // ‚
    ]},
    {keys: [
      "'-'",
      "'='",
      "'\u2013'", // –
      "'\u2014'"  // —
    ]},
    {keys: [
      "'^'",
      "'~'",
      "'\u2260'", // ≠
      "'\u00b1'" // ±
    ]},
    {keys: [
      "'\\'",// これで合ってる？
      "'|'"
    ]},
    {keys: [
      'Key.backspace'
    ]}
  ]},
  {keys: [
    {keys:['Key.tab']},
    {keys:[
      "'q'",
      "'Q'",
      "'\u0153'", // œ
      "'\u0152'", // Œ
    ]},
    {keys: [
      "'w'",
      "'W'",
      "'\u2211'", // ∑
      "'\u201e'"  // „
    ]},
    {keys: [
      "'e'",
      "'E'",
      "'\u00b4'"  // ´
    ]},
    {keys: [
      "'r'",
      "'R'",
      "'\u00ae'", // ®
      "'\u2030'"  // ‰
    ]},
    {keys: [
      "'t'",
      "'T'",
      // †
      // ˇ
    ]},
    {keys: [
      "'y'",
      "'Y'",
      // \
      // Á
    ]},
    {keys: [
      "'u'",
      "'U'",
      // ¨
    ]},
    {keys: [
      "'i'",
      "'I'",
      // ˆ
    ]},
    {keys: [
      "'o'",
      "'O'",
      // ø
      // Ø
    ]},
    {keys: [
      "'p'",
      "'P'",
      // π
      // ∏
    ]},
    {keys: [
      "'@'",
      "'`'",
      // “
      // ”
    ]},
    {keys: [
      "'['",
      "'{'",
      // ‘
      // ’
    ]}
  ]},
  {keys: [
    {keys: [
      'Key.ctrl'
    ]},
    {keys: [
      "'a'",
      "'A'",
      // å
      // Å
    ]},
    {keys: [
      "'s'",
      "'S'",
      // ß
      //Í
    ]},
    {keys: [
      "'d'",
      "'D'",
      // ∂
      // Î
    ]},
    {keys: [
      "'f'",
      "'F'",
      // ƒ
      // Ï
    ]},
    {keys: [
      "'g'",
      "'G'",
      // ©
      // ˝
    ]},
    {keys: [
      "'h'",
      "'H'",
      // ˙
      // Ó
    ]},
    {keys: [
      "'j'",
      "'J'",
      // ∆
      // Ô
    ]},
    {keys: [
      "'k'",
      "'K'",
      // ˚
      // 
    ]},
    {keys: [
      "'l'",
      "'L'",
      // ¬
      // Ò
    ]},
    {keys: [
      "';'",
      "'+'",
      // …
      // Ú
    ]},
    {keys: [
      "':'",
      "'*'",
      // æ
      // Æ
    ]},
    {keys: [
      "']'",
      "'}'",
      // «
      // »
    ]},
    {keys: ['Key.enter']}
  ]},
  {keys: [
    {keys: ['Key.shift']},
    {keys: [
      "'z'",
      "'Z'",
      // Ω
      // ¸
    ]},
    {keys: [
      "'x'",
      "'X'",
      // ≈
      // ˛
    ]},
    {keys: [
      "'c'",
      "'C'",
      // ç
      // Ç
    ]},
    {keys: [
      "'v'",
      "'V'",
      // √
      // ◊
    ]},
    {keys: [
      "'b'",
      "'B'",
      // ∫
      // ı
    ]},
    {keys: [
      "'n'",
      "'N'",
      // ˜
    ]},
    {keys: [
      "'m'",
      "'M'",
      // µ
      // ¯
    ]},
    {keys: [
      "','",
      "'<'",
      // ≤
      // ¯
    ]},
    {keys: [
      "'.'",
      "'>'",
      // ≥
      // ˘
    ]},
    {keys: [
      "'//'",
      "'?'",
      // ÷
      // ¿
    ]},
    {keys: [
      "'_'",
      // `
    ]},
    {keys: [
      'Key.shift_r'
    ]}
  ]},
  {keys: [
    {keys: ['Key.caps_lock']},
    {keys: ['Key.alt']},
    {keys: ['Key.cmd']},
    {keys: ['Key.space']},
    {keys: ['Key.cmd_r']},
    // fn
    {keys: ['Key.left']},
    {keys: ['Key.down']},
    {keys: ['Key.up']},
    {keys: ['Key.right']}
  ]}
];
