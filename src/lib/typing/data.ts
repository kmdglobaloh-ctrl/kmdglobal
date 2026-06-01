export type Finger =
  | "left-pinky"
  | "left-ring"
  | "left-middle"
  | "left-index"
  | "thumb"
  | "right-index"
  | "right-middle"
  | "right-ring"
  | "right-pinky";

export interface FingerInfo {
  finger: Finger;
  hand: "left" | "right" | "both";
  color: string;       // tailwind bg class
  textColor: string;   // tailwind text class
  label: string;
  emoji: string;
}

export const FINGER_INFO: Record<Finger, FingerInfo> = {
  "left-pinky":  { finger: "left-pinky",  hand: "left",  color: "bg-purple-400", textColor: "text-purple-700", label: "Left Pinky",   emoji: "🤙" },
  "left-ring":   { finger: "left-ring",   hand: "left",  color: "bg-blue-400",   textColor: "text-blue-700",   label: "Left Ring",    emoji: "💍" },
  "left-middle": { finger: "left-middle", hand: "left",  color: "bg-teal-400",   textColor: "text-teal-700",   label: "Left Middle",  emoji: "🖕" },
  "left-index":  { finger: "left-index",  hand: "left",  color: "bg-green-400",  textColor: "text-green-700",  label: "Left Index",   emoji: "☝️" },
  "thumb":       { finger: "thumb",       hand: "both",  color: "bg-gray-300",   textColor: "text-gray-600",   label: "Thumb",        emoji: "👍" },
  "right-index": { finger: "right-index", hand: "right", color: "bg-yellow-400", textColor: "text-yellow-700", label: "Right Index",  emoji: "☝️" },
  "right-middle":{ finger: "right-middle",hand: "right", color: "bg-orange-400", textColor: "text-orange-700", label: "Right Middle", emoji: "🖕" },
  "right-ring":  { finger: "right-ring",  hand: "right", color: "bg-red-400",    textColor: "text-red-700",    label: "Right Ring",   emoji: "💍" },
  "right-pinky": { finger: "right-pinky", hand: "right", color: "bg-pink-400",   textColor: "text-pink-700",   label: "Right Pinky",  emoji: "🤙" },
};

// Full keyboard layout — each key mapped to the correct finger
export const KEY_FINGER: Record<string, Finger> = {
  // Number row
  "`": "left-pinky", "1": "left-pinky", "2": "left-ring", "3": "left-middle",
  "4": "left-index", "5": "left-index", "6": "right-index", "7": "right-index",
  "8": "right-middle", "9": "right-ring", "0": "right-pinky", "-": "right-pinky", "=": "right-pinky",
  // Top row
  "q": "left-pinky",  "w": "left-ring",   "e": "left-middle", "r": "left-index",
  "t": "left-index",  "y": "right-index", "u": "right-index", "i": "right-middle",
  "o": "right-ring",  "p": "right-pinky", "[": "right-pinky", "]": "right-pinky",
  // Home row
  "a": "left-pinky",  "s": "left-ring",   "d": "left-middle", "f": "left-index",
  "g": "left-index",  "h": "right-index", "j": "right-index", "k": "right-middle",
  "l": "right-ring",  ";": "right-pinky", "'": "right-pinky",
  // Bottom row
  "z": "left-pinky",  "x": "left-ring",   "c": "left-middle", "v": "left-index",
  "b": "left-index",  "n": "right-index", "m": "right-index", ",": "right-middle",
  ".": "right-ring",  "/": "right-pinky",
  // Space
  " ": "thumb",
};

export const KEYBOARD_ROWS = [
  {
    row: "number",
    keys: ["`","1","2","3","4","5","6","7","8","9","0","-","="],
  },
  {
    row: "top",
    keys: ["q","w","e","r","t","y","u","i","o","p","[","]"],
  },
  {
    row: "home",
    keys: ["a","s","d","f","g","h","j","k","l",";","'"],
  },
  {
    row: "bottom",
    keys: ["z","x","c","v","b","n","m",",",".","/"],
  },
];

export interface Lesson {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  focusKeys: string[];     // keys being introduced
  focusFingers: Finger[];  // fingers being trained
  lines: string[];         // practice text lines
  wpmGoal: number;
  color: string;           // tailwind accent color for the card
}

export const LESSONS: Lesson[] = [
  {
    id: "1",
    title: "Home Row — Left Hand",
    subtitle: "Start with A S D F. Keep fingers resting on these keys!",
    emoji: "👈",
    focusKeys: ["a","s","d","f"],
    focusFingers: ["left-pinky","left-ring","left-middle","left-index"],
    lines: [
      "aaaa ssss dddd ffff",
      "asdf asdf asdf asdf",
      "add sad fad dad as",
      "ads dads fads safe",
    ],
    wpmGoal: 10,
    color: "from-purple-500 to-blue-500",
  },
  {
    id: "2",
    title: "Home Row — Right Hand",
    subtitle: "Now J K L and the semicolon. Your right hand's home!",
    emoji: "👉",
    focusKeys: ["j","k","l",";"],
    focusFingers: ["right-index","right-middle","right-ring","right-pinky"],
    lines: [
      "jjjj kkkk llll jkl",
      "jkl jkl jkl jkl jkl",
      "jll lkj kll jkl lll",
      "jk lk jl kj lj kl jl",
    ],
    wpmGoal: 10,
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: "3",
    title: "Full Home Row",
    subtitle: "Both hands together! F and J have little bumps to find without looking.",
    emoji: "🏠",
    focusKeys: ["a","s","d","f","g","h","j","k","l",";"],
    focusFingers: ["left-pinky","left-ring","left-middle","left-index","right-index","right-middle","right-ring","right-pinky"],
    lines: [
      "asdf jkl asdf jkl",
      "all fall hall shall",
      "glad flask flag lads",
      "ask dad fall half glass",
    ],
    wpmGoal: 15,
    color: "from-green-500 to-teal-500",
  },
  {
    id: "4",
    title: "Adding G and H",
    subtitle: "G uses your LEFT index. H uses your RIGHT index.",
    emoji: "🤝",
    focusKeys: ["g","h"],
    focusFingers: ["left-index","right-index"],
    lines: [
      "ghgh ghgh ghgh ghgh",
      "glad hash gash half",
      "flash laugh shag hash",
      "shall flash gash glad",
    ],
    wpmGoal: 15,
    color: "from-green-400 to-yellow-400",
  },
  {
    id: "5",
    title: "Top Row — E and R",
    subtitle: "Reach up! E is LEFT middle, R is LEFT index.",
    emoji: "⬆️",
    focusKeys: ["e","r"],
    focusFingers: ["left-middle","left-index"],
    lines: [
      "eeee rrrr erer rere",
      "red led fled sled",
      "free tree refer deer",
      "read real reel feel fell",
    ],
    wpmGoal: 18,
    color: "from-teal-500 to-green-400",
  },
  {
    id: "6",
    title: "Top Row — U and I",
    subtitle: "U is RIGHT index, I is RIGHT middle. Mirror of E and R!",
    emoji: "🪞",
    focusKeys: ["u","i"],
    focusFingers: ["right-index","right-middle"],
    lines: [
      "iiii uuuu iuiu uiui",
      "did dig dug jug rug",
      "rude rule full fuel like",
      "ride fire hire kid skill",
    ],
    wpmGoal: 18,
    color: "from-orange-400 to-yellow-400",
  },
  {
    id: "7",
    title: "Top Row — T and Y",
    subtitle: "Both use your INDEX fingers — T left, Y right.",
    emoji: "🎯",
    focusKeys: ["t","y"],
    focusFingers: ["left-index","right-index"],
    lines: [
      "tttt yyyy tyty ytyt",
      "try yet style dusty",
      "thirty utility thirty",
      "fruit trust truly rusty",
    ],
    wpmGoal: 20,
    color: "from-blue-400 to-teal-400",
  },
  {
    id: "8",
    title: "Top Row — W O P",
    subtitle: "W is LEFT ring, O is RIGHT ring, P is RIGHT pinky.",
    emoji: "🎸",
    focusKeys: ["w","o","p"],
    focusFingers: ["left-ring","right-ring","right-pinky"],
    lines: [
      "wow pop pow row",
      "world work word power",
      "woke spoke poke yolk",
      "proud loud proof drops",
    ],
    wpmGoal: 20,
    color: "from-pink-400 to-red-400",
  },
  {
    id: "9",
    title: "Bottom Row — V B N M",
    subtitle: "Reach down! Index fingers handle V B on left, N M on right.",
    emoji: "⬇️",
    focusKeys: ["v","b","n","m"],
    focusFingers: ["left-index","right-index"],
    lines: [
      "vvvv bbbb nnnn mmmm",
      "brave name move flame",
      "number verb born mint",
      "seveniven oven raven mine",
    ],
    wpmGoal: 22,
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: "10",
    title: "Bottom Row — C X Z",
    subtitle: "Reach down to the left side. Pinky on Z, ring on X, middle on C.",
    emoji: "⬇️",
    focusKeys: ["c","x","z"],
    focusFingers: ["left-pinky","left-ring","left-middle"],
    lines: [
      "zzzz xxxx cccc",
      "zinc excel crisp",
      "exact expect except",
      "complex relax excite",
    ],
    wpmGoal: 22,
    color: "from-gray-500 to-gray-600",
  },
  {
    id: "11",
    title: "Common Words",
    subtitle: "Real words! Try not to look at your hands.",
    emoji: "📚",
    focusKeys: [],
    focusFingers: [],
    lines: [
      "the and for are but",
      "not you all can her",
      "was one our out day",
      "get has him his how",
      "man new now old see",
      "two way who boy did",
    ],
    wpmGoal: 25,
    color: "from-blue-600 to-blue-500",
  },
  {
    id: "12",
    title: "Fun Sentences",
    subtitle: "Full sentences — keep your eyes on the screen, not the keyboard!",
    emoji: "🚀",
    focusKeys: [],
    focusFingers: [],
    lines: [
      "the dog ran fast and jumped high",
      "she likes to read books every day",
      "we love to play games with our friends",
      "the quick brown fox jumps over the lazy dog",
      "practice makes perfect so keep on typing",
    ],
    wpmGoal: 30,
    color: "from-amber-500 to-orange-500",
  },
  {
    id: "13",
    title: "Speed Challenge",
    subtitle: "How fast can you go? Type as quickly AND accurately as you can!",
    emoji: "⚡",
    focusKeys: [],
    focusFingers: [],
    lines: [
      "pack my box with five dozen liquor jugs",
      "how vexingly quick daft zebras jump",
      "the five boxing wizards jump quickly",
      "sphinx of black quartz judge my vow",
      "bright vixens jump dozy fowl quack",
    ],
    wpmGoal: 35,
    color: "from-yellow-400 to-red-500",
  },
];
