export default [
  // 最上段(Escから)
  {keys:[
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
    {keys: ['Key.f12']},
    // prt scr
    // scroll lock
    // pause break
    // insert
    {keys: ['Key.delete']}
    // page up/ home
    // page down/ end
  ]},
  // 上から二段目(数字の行)
  {keys: [
    {keys: ["'\\\\'"]},
    {keys: ["'1'", "'!'"]},
    {keys: ["'2'", "'\"'"]},
    {keys: ["'3'", "'#'"]},
    {keys: ["'4'", "'$'"]},
    {keys: ["'5'", "'%'"]},
    {keys: ["'6'", "'&'"]},
    {keys: ["'7'", "\"'\""]},
    {keys: ["'8'", "'('"]},
    {keys: ["'9'", "')'"]},
    {keys: ["'0'"]},
    {keys: ["'-'", "'='"]},
    {keys: ["'^'", "'~'"]},
    {keys: ["'\\'", "'|'"]},
    {keys: ['Key.backspace']}
  ]},
  // 上から三段目(QWERTYの行)
   {keys: [
    {width: 1.5, keys: ['Key.tab']},
    {keys: ["'q'", "'Q'"]},
    {keys: ["'w'", "'W'"]},
    {keys: ["'e'", "'E'"]},
    {keys: ["'r'", "'R'"]},
    {keys: ["'t'", "'T'"]},
    {keys: ["'y'", "'Y'"]},
    {keys: ["'u'", "'U'"]},
    {keys: ["'i'", "'I'"]},
    {keys: ["'o'", "'O'"]},
    {keys: ["'p'", "'P'"]},
    {keys: ["'@'", "'`'"]},
    {keys: ["'['", "'{'"]}
   ]},
   {keys: [
    {width: 2, keys: ['Key.caps_lock']},
    {keys: ["'a'", "'A'"]},
    {keys: ["'s'", "'S'"]},
    {keys: ["'d'", "'D'"]},
    {keys: ["'f'", "'F'"]},
    {keys: ["'g'", "'G'"]},
    {keys: ["'h'", "'H'"]},
    {keys: ["'j'", "'J'"]},
    {keys: ["'k'", "'K'"]},
    {keys: ["'l'", "'L'"]},
    {keys: ["';'", "'+'"]},
    {keys: ["':'", "'*'"]},
    {keys: ["']'", "'}'"]},
    {width: 1.5, keys: ['Key.enter']}
   ]},
   {keys: [
    {width: 2.5, keys:['Key.shift']},
    {keys: ["'z'", "'Z'"]},
    {keys: ["'x'", "'X'"]},
    {keys: ["'c'", "'C'"]},
    {keys: ["'v'", "'V'"]},
    {keys: ["'b'", "'B'"]},
    {keys: ["'n'", "'N'"]},
    {keys: ["'m'", "'M'"]},
    {keys: ["','", "'<'"]},
    {keys: ["'.'", "'>'"]},
    {keys: ["'//'", "'?'"]},
    {keys: ["'\\'", "'_'"]},
    {keys: ['Key.shift_r']}
   ]},
   {keys: [
    {keys: ['Key.ctrl']},
    {keys: ['Key.cmd']},
    {keys: ['Key.alt']},
    {width: 3, keys: ['Key.space']},
    {keys: ['Key.alt_r']},
    {keys: ['Key.ctrl_r']},
    {keys: ['Key.left', 'Key.home']},
    {keys: ['Key.down', 'Key.page_down']},// page downってこれで良かった？
    {keys: ['Key.up', 'Key.page_up']},
    {keys: ['Key.right', 'Key.end']}
   ]}
];
