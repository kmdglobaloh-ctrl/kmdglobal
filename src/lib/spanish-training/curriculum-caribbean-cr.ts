import type { Chapter } from "./curriculum-types";

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "Greetings & Everyday Basics",
    emoji: "👋",
    description: "Say hello, introduce yourself, and handle polite small talk like a local.",
    lesson: {
      title: "Greetings & Everyday Basics",
      intro: "Costa Ricans (Ticos) are warm and friendly. Greetings matter — walk past someone without saying 'buenas' and you'll stand out as a tourist immediately. In Limon and Cocles, you'll also hear Creole English and Patois, but Spanish is essential everywhere.",
      vocab: [
        { spanish: "Hola", english: "Hello", pronunciation: "OH-lah" },
        { spanish: "Buenas", english: "Good (shorthand for any time of day greeting)", pronunciation: "BWEH-nahs", slang: true, slangNote: "Ticos use 'buenas' instead of saying buenos días/tardes/noches — it works anytime." },
        { spanish: "Buenos días", english: "Good morning", pronunciation: "BWEH-nohs DEE-ahs" },
        { spanish: "Buenas tardes", english: "Good afternoon", pronunciation: "BWEH-nahs TAR-dehs" },
        { spanish: "Buenas noches", english: "Good evening/night", pronunciation: "BWEH-nahs NOH-chehs" },
        { spanish: "¿Cómo está usted?", english: "How are you? (formal)", pronunciation: "KOH-moh ehs-TAH oo-STED" },
        { spanish: "¿Cómo estás?", english: "How are you? (informal)", pronunciation: "KOH-moh ehs-TAHS" },
        { spanish: "¿Pura vida?", english: "How's it going? / All good? (Costa Rican)", pronunciation: "POO-rah VEE-dah", slang: true, slangNote: "Pura vida is THE phrase of Costa Rica. It means pure life, but is used as hello, goodbye, you're welcome, no worries, life is good — basically everything." },
        { spanish: "Pura vida", english: "Life is good / No worries / You're welcome", pronunciation: "POO-rah VEE-dah", slang: true, slangNote: "Used as a response too — someone asks how you are, you say 'pura vida!'" },
        { spanish: "Bien, gracias", english: "Good, thank you", pronunciation: "BEEYEN, GRAH-see-ahs" },
        { spanish: "Más o menos", english: "More or less / So-so", pronunciation: "MAHS oh MEH-nohs" },
        { spanish: "¿Cómo se llama usted?", english: "What is your name? (formal)", pronunciation: "KOH-moh seh YAH-mah oo-STED" },
        { spanish: "¿Cómo te llamas?", english: "What is your name? (informal)", pronunciation: "KOH-moh teh YAH-mahs" },
        { spanish: "Me llamo...", english: "My name is...", pronunciation: "meh YAH-moh" },
        { spanish: "Mucho gusto", english: "Nice to meet you", pronunciation: "MOO-choh GOO-stoh" },
        { spanish: "Igualmente", english: "Likewise / Same to you", pronunciation: "ee-gwal-MEN-teh" },
        { spanish: "Por favor", english: "Please", pronunciation: "por fah-VOR" },
        { spanish: "Gracias", english: "Thank you", pronunciation: "GRAH-see-ahs" },
        { spanish: "De nada", english: "You're welcome", pronunciation: "deh NAH-dah" },
        { spanish: "Con mucho gusto", english: "With pleasure (CR version of you're welcome)", pronunciation: "kon MOO-choh GOO-stoh", slang: true, slangNote: "In Costa Rica, people say 'con mucho gusto' instead of 'de nada'. It sounds friendlier." },
        { spanish: "Perdón / Disculpe", english: "Excuse me / Sorry", pronunciation: "pair-DON / dees-KOOL-peh" },
        { spanish: "Adiós", english: "Goodbye", pronunciation: "ah-dee-OHS" },
        { spanish: "Hasta luego", english: "See you later", pronunciation: "AHS-tah LWEH-goh" },
        { spanish: "Chao", english: "Bye (casual)", pronunciation: "CHOW", slang: true, slangNote: "From Italian via pop culture, 'chao' is extremely common casual goodbye in Costa Rica." },
      ],
      grammar: [
        {
          title: "Tú vs. Usted (You informal vs. formal)",
          explanation: "Spanish has two ways to say 'you'. 'Tú' is informal (friends, kids, peers). 'Usted' is formal (strangers, elders, authority). Costa Ricans use 'usted' more than most Spanish-speaking countries — even with friends sometimes! When in doubt, use usted.",
          examples: [
            { spanish: "¿Cómo estás tú?", english: "How are you? (to a friend)" },
            { spanish: "¿Cómo está usted?", english: "How are you? (to a stranger/elder)" },
          ]
        },
        {
          title: "Verb: Ser vs. Estar (To be)",
          explanation: "Spanish has two verbs for 'to be'. SER is for permanent things (identity, origin, profession). ESTAR is for temporary states (how you feel, where you are). For greetings, use ESTAR.",
          examples: [
            { spanish: "Yo soy americano.", english: "I am American. (permanent identity — SER)" },
            { spanish: "Yo estoy bien.", english: "I am fine. (temporary state — ESTAR)" },
            { spanish: "¿Cómo estás?", english: "How are you? (ESTAR — how do you feel right now?)" },
          ]
        }
      ],
      phrases: [
        { spanish: "No hablo español bien.", english: "I don't speak Spanish well.", note: "Say this early — locals will slow down for you." },
        { spanish: "¿Habla usted inglés?", english: "Do you speak English?" },
        { spanish: "Hablo un poco de español.", english: "I speak a little Spanish." },
        { spanish: "¿Puede repetir, por favor?", english: "Can you repeat, please?" },
        { spanish: "Más despacio, por favor.", english: "More slowly, please." },
        { spanish: "No entiendo.", english: "I don't understand." },
        { spanish: "¿Qué significa...?", english: "What does ... mean?" },
      ],
      dialogue: [
        { speaker: "You", spanish: "Buenas. ¿Cómo está usted?", english: "Hey there. How are you?" },
        { speaker: "Local", spanish: "Pura vida, mae. ¿Y usted?", english: "All good, man. And you?" },
        { speaker: "You", spanish: "Bien, gracias. Me llamo Alex.", english: "Good, thank you. My name is Alex." },
        { speaker: "Local", spanish: "Mucho gusto, Alex. Bienvenido a Cocles.", english: "Nice to meet you, Alex. Welcome to Cocles." },
        { speaker: "You", spanish: "Gracias. Hablo un poco de español.", english: "Thank you. I speak a little Spanish." },
        { speaker: "Local", spanish: "No hay problema. Pura vida.", english: "No problem. All good." },
      ]
    },
    testScenario: "You've just arrived in Cocles and meet a local named Carlos at the entrance of the beach. Practice greeting him, introducing yourself, and explaining that you're still learning Spanish.",
    testSystemPrompt: `You are Carlos, a friendly local from Cocles, Limon, Costa Rica. You are helping a tourist practice basic Spanish greetings.

The student is practicing Chapter 1: Greetings & Basics.

Rules:
- Respond primarily in Spanish, but include English translations in parentheses for new vocabulary
- Use Costa Rican expressions like "pura vida", "mae", "buenas"
- When the student makes a grammar mistake, gently correct them with a brief explanation
- When they do something well, praise them with encouragement
- Keep your Spanish simple and clear for a beginner
- After 6-8 exchanges, wrap up the conversation naturally
- Format corrections like: ✓ Great! or ✗ Small correction: [explanation]

The goal is for the student to: greet you, introduce themselves, and explain they are learning Spanish.`
  },
  {
    id: 2,
    title: "Getting Around: Tuk-Tuks & Taxis",
    emoji: "🛺",
    description: "Hail a tuk-tuk, ask for directions, and navigate Cocles and Puerto Viejo like a pro.",
    lesson: {
      title: "Getting Around: Tuk-Tuks & Taxis",
      intro: "Tuk-tuks (3-wheeled motorized taxis) are the main local transport in Cocles and Puerto Viejo. They're cheap, fun, and the drivers are usually very chatty. You'll also need to ask for directions — locals use landmark-based directions, not street addresses.",
      vocab: [
        { spanish: "el tuk-tuk", english: "tuk-tuk (3-wheel taxi)", pronunciation: "el took-TOOK", slang: true, slangNote: "Everyone calls them tuk-tuks. You might also hear 'mototaxi'." },
        { spanish: "el taxi", english: "taxi", pronunciation: "el TAHK-see" },
        { spanish: "el bus", english: "bus", pronunciation: "el BOOS" },
        { spanish: "la bicicleta", english: "bicycle", pronunciation: "lah bee-see-KLEH-tah" },
        { spanish: "a pie", english: "on foot / walking", pronunciation: "ah PYEH" },
        { spanish: "¿Cuánto cuesta?", english: "How much does it cost?", pronunciation: "KWAHN-toh KWEHS-tah" },
        { spanish: "¿A cuánto me lleva a...?", english: "How much to take me to...?", pronunciation: "ah KWAHN-toh meh YEH-vah ah", slang: true, slangNote: "This is the natural way to ask for a tuk-tuk ride price in Costa Rica." },
        { spanish: "Lléveme a..., por favor", english: "Take me to..., please", pronunciation: "YEH-veh-meh ah... por fah-VOR" },
        { spanish: "¿Dónde está...?", english: "Where is...?", pronunciation: "DON-deh ehs-TAH" },
        { spanish: "¿Cómo llego a...?", english: "How do I get to...?", pronunciation: "KOH-moh YEH-goh ah" },
        { spanish: "a la derecha", english: "to the right", pronunciation: "ah lah deh-REH-chah" },
        { spanish: "a la izquierda", english: "to the left", pronunciation: "ah lah ees-KYEHR-dah" },
        { spanish: "recto / derecho", english: "straight ahead", pronunciation: "REK-toh / deh-REH-choh" },
        { spanish: "cerca", english: "near / close", pronunciation: "SER-kah" },
        { spanish: "lejos", english: "far", pronunciation: "LEH-hohs" },
        { spanish: "aquí", english: "here", pronunciation: "ah-KEE" },
        { spanish: "allá", english: "over there", pronunciation: "ah-YAH" },
        { spanish: "la parada", english: "the stop / bus stop", pronunciation: "lah pah-RAH-dah" },
        { spanish: "la playa", english: "the beach", pronunciation: "lah PLAH-yah" },
        { spanish: "el centro", english: "downtown / town center", pronunciation: "el SEN-troh" },
        { spanish: "Puerto Viejo", english: "Puerto Viejo (nearby town)", pronunciation: "PWEHR-toh VYEH-hoh" },
        { spanish: "Mae", english: "Dude / Man (Costa Rican)", pronunciation: "MY", slang: true, slangNote: "'Mae' is the most common Tico slang word. It's like 'dude' or 'man' — used constantly. 'Mae, ¿dónde está la playa?' = 'Dude, where's the beach?'" },
        { spanish: "¿Me puede esperar?", english: "Can you wait for me?", pronunciation: "meh PWEH-deh ehs-peh-RAR" },
        { spanish: "Pare aquí, por favor", english: "Stop here, please", pronunciation: "PAH-reh ah-KEE por fah-VOR" },
      ],
      grammar: [
        {
          title: "Asking Questions with ¿Dónde? and ¿Cómo?",
          explanation: "Question words always have accent marks in Spanish: ¿Dónde? (Where?), ¿Cómo? (How?), ¿Cuánto? (How much?), ¿Qué? (What?). Notice the inverted question mark at the start — this is standard Spanish writing.",
          examples: [
            { spanish: "¿Dónde está la playa?", english: "Where is the beach?" },
            { spanish: "¿Cómo llego al centro?", english: "How do I get to downtown?" },
            { spanish: "¿Cuánto cuesta el tuk-tuk?", english: "How much is the tuk-tuk?" },
          ]
        },
        {
          title: "El / La (The) — Gendered Articles",
          explanation: "Every Spanish noun is either masculine or feminine. Masculine nouns use 'el' (the) and 'un' (a). Feminine use 'la' (the) and 'una' (a). You usually learn the gender with the word — there are some patterns but many exceptions. Memorize: el tuk-tuk, la playa, el centro, la parada.",
          examples: [
            { spanish: "el taxi", english: "the taxi (masculine)" },
            { spanish: "la playa", english: "the beach (feminine)" },
            { spanish: "un bus", english: "a bus (masculine)" },
            { spanish: "una bicicleta", english: "a bicycle (feminine)" },
          ]
        }
      ],
      phrases: [
        { spanish: "Mae, ¿a cuánto me lleva a la playa?", english: "Dude, how much to take me to the beach?", note: "Classic tuk-tuk opener" },
        { spanish: "¿Hay tuk-tuks cerca?", english: "Are there tuk-tuks nearby?" },
        { spanish: "Quiero ir a Puerto Viejo.", english: "I want to go to Puerto Viejo." },
        { spanish: "¿Cuánto tiempo tarda?", english: "How long does it take?" },
        { spanish: "Está muy caro.", english: "That's too expensive.", note: "Useful for negotiating" },
        { spanish: "¿Me hace un precio?", english: "Can you give me a deal?", note: "Polite way to negotiate" },
        { spanish: "Voy a... / Vamos a...", english: "I'm going to... / We're going to..." },
      ],
      dialogue: [
        { speaker: "You", spanish: "Mae, ¿a cuánto me lleva a Puerto Viejo?", english: "Dude, how much to take me to Puerto Viejo?" },
        { speaker: "Driver", spanish: "Son dos mil colones, mae.", english: "That's 2,000 colones, dude." },
        { speaker: "You", spanish: "¿Está muy lejos?", english: "Is it very far?" },
        { speaker: "Driver", spanish: "No, son como diez minutos.", english: "No, it's about ten minutes." },
        { speaker: "You", spanish: "Listo, vámonos.", english: "Alright, let's go." },
        { speaker: "Driver", spanish: "Pura vida. Suba.", english: "Great. Hop in." },
        { speaker: "You", spanish: "Pare aquí, por favor. Gracias.", english: "Stop here please. Thank you." },
        { speaker: "Driver", spanish: "Con mucho gusto. Que le vaya bien.", english: "With pleasure. Have a good one." },
      ]
    },
    testScenario: "You need to get from Cocles beach to Puerto Viejo town center. A tuk-tuk driver named Miguel pulls up. Negotiate the fare, confirm the destination, and handle the ride.",
    testSystemPrompt: `You are Miguel, a tuk-tuk driver in Cocles, Costa Rica. You are chatty and friendly, using typical Costa Rican slang.

The student is practicing Chapter 2: Getting Around.

Rules:
- Start by offering your services naturally ("¿Le llevo a algún lado, mae?")
- Respond primarily in Spanish with English translations in parentheses for new words
- Use "mae", "pura vida", "listo", "diay" naturally
- Prices in colones: short trip 1000-2000, Puerto Viejo 2000-3000
- Accept light negotiation with good humor
- Correct grammar mistakes gently and clearly explain why
- Mark corrections: ✗ Small fix: [explanation] | ✓ [positive feedback]
- After 8-10 exchanges, end the ride naturally

Key grammar points to watch: question formation, el/la articles, verb "querer" (to want).`
  },
  {
    id: 3,
    title: "At the Restaurant & Soda",
    emoji: "🍽️",
    description: "Order food, ask about dishes, handle the bill, and navigate Costa Rican 'sodas' (local restaurants).",
    lesson: {
      title: "At the Restaurant & Soda",
      intro: "A 'soda' is a small, family-run Costa Rican restaurant — the heart of local eating. You'll find casado (the national dish: rice, beans, meat, salad), ceviche, and patacones everywhere in Cocles. The Caribbean coast has its own unique food like rice and beans cooked in coconut milk. Don't miss the rondon (seafood stew)!",
      vocab: [
        { spanish: "la soda", english: "small local restaurant", pronunciation: "lah SOH-dah", slang: true, slangNote: "Not a soft drink! A 'soda' in Costa Rica is a cheap, casual local eatery. Always try the soda before fancy restaurants." },
        { spanish: "el casado", english: "the 'married man' — national dish (rice, beans, meat, salad)", pronunciation: "el kah-SAH-doh", slang: true, slangNote: "Casado means 'married man' — the joke is it's what a wife cooks for her husband every day. It's the staple daily meal." },
        { spanish: "el menú / la carta", english: "the menu", pronunciation: "el meh-NOO / lah KAR-tah" },
        { spanish: "el agua", english: "water", pronunciation: "el AH-gwah" },
        { spanish: "el agua con hielo", english: "water with ice", pronunciation: "el AH-gwah kon YEH-loh" },
        { spanish: "el refresco natural", english: "fresh fruit drink", pronunciation: "el reh-FRES-koh nah-too-RAL", slang: true, slangNote: "Fresh fruit blended with water or milk. Always order this over bottled drinks. Try guanábana or cas flavor!" },
        { spanish: "el café", english: "coffee", pronunciation: "el kah-FEH" },
        { spanish: "la cerveza", english: "beer", pronunciation: "lah sehr-VEH-sah" },
        { spanish: "Imperial", english: "the most common CR beer brand", pronunciation: "eem-peh-ree-AL", slang: true, slangNote: "Just say 'una Imperial' and everyone knows." },
        { spanish: "el arroz con leche de coco", english: "rice with coconut milk (Caribbean specialty)", pronunciation: "el ah-ROHS kon LEH-cheh deh KOH-koh" },
        { spanish: "el ceviche", english: "ceviche (raw fish in lime juice)", pronunciation: "el seh-VEE-cheh" },
        { spanish: "los patacones", english: "fried plantain slabs", pronunciation: "lohs pah-tah-KOH-nehs" },
        { spanish: "el rondon", english: "Caribbean seafood stew (local specialty)", pronunciation: "el ron-DON", slang: true, slangNote: "Rondon (or 'run down') is the signature dish of the Caribbean coast — coconut milk stew with fish, yuca, plantain. Order it if you see it." },
        { spanish: "rico", english: "delicious / rich", pronunciation: "REE-koh", slang: true, slangNote: "Say '¡Qué rico!' when something tastes good. Locals love hearing this." },
        { spanish: "la cuenta", english: "the bill / check", pronunciation: "lah KWEHN-tah" },
        { spanish: "el servicio", english: "service charge / tip", pronunciation: "el sehr-VEE-syoh", slang: true, slangNote: "Costa Rica adds 10% servicio + 13% IVA tax to restaurant bills automatically. You'll see it on the receipt." },
        { spanish: "sin...", english: "without...", pronunciation: "seen" },
        { spanish: "con...", english: "with...", pronunciation: "kon" },
        { spanish: "picante", english: "spicy", pronunciation: "pee-KAN-teh" },
        { spanish: "vegetariano/a", english: "vegetarian", pronunciation: "veh-heh-tah-ree-AH-noh" },
      ],
      grammar: [
        {
          title: "Ordering: Quiero vs. Me gustaría vs. Quisiera",
          explanation: "'Quiero' (I want) is the most common way to order. It sounds direct but is perfectly polite in a restaurant. 'Me gustaría' or 'Quisiera' mean 'I would like' and sound slightly more formal/polite, but Ticos don't expect tourists to use them.",
          examples: [
            { spanish: "Quiero un casado, por favor.", english: "I want a casado, please. (most common)" },
            { spanish: "Me gustaría una cerveza.", english: "I would like a beer." },
            { spanish: "Quisiera ver el menú.", english: "I would like to see the menu." },
          ]
        },
        {
          title: "Plurals: Adding -s or -es",
          explanation: "Making plurals in Spanish is simple: add -s to words ending in a vowel, and -es to words ending in a consonant. Also, el becomes los and la becomes las.",
          examples: [
            { spanish: "una cerveza → dos cervezas", english: "one beer → two beers" },
            { spanish: "un refresco → dos refrescos", english: "one drink → two drinks" },
            { spanish: "el patacón → los patacones", english: "the plantain → the plantains" },
            { spanish: "la cuenta → las cuentas", english: "the bill → the bills" },
          ]
        }
      ],
      phrases: [
        { spanish: "¿Tienen mesa para...?", english: "Do you have a table for...?", note: "e.g., 'para dos' = for two" },
        { spanish: "¿Qué recomienda usted?", english: "What do you recommend?" },
        { spanish: "¿Qué tiene el casado hoy?", english: "What comes with today's casado?" },
        { spanish: "Sin cilantro, por favor.", english: "Without cilantro, please." },
        { spanish: "¿Está incluido el servicio?", english: "Is the service charge included?" },
        { spanish: "¿Me trae la cuenta, por favor?", english: "Can you bring me the check, please?" },
        { spanish: "¿Aceptan tarjeta?", english: "Do you accept cards?" },
        { spanish: "¡Qué rico está todo!", english: "Everything is so delicious!" },
        { spanish: "Estoy lleno/a.", english: "I'm full. (male/female)" },
      ],
      dialogue: [
        { speaker: "Server", spanish: "Buenas, bienvenidos. ¿Qué les sirvo?", english: "Hi, welcome. What can I get you?" },
        { speaker: "You", spanish: "Buenas. ¿Tienen el menú, por favor?", english: "Hi. Do you have the menu, please?" },
        { speaker: "Server", spanish: "Claro que sí. Hoy tenemos casado con pollo o pescado, ceviche, y rondon.", english: "Of course. Today we have casado with chicken or fish, ceviche, and rondon." },
        { speaker: "You", spanish: "¿Qué recomienda usted?", english: "What do you recommend?" },
        { speaker: "Server", spanish: "El rondon está muy rico hoy, mae.", english: "The rondon is really good today, dude." },
        { speaker: "You", spanish: "Bueno, quiero un rondon y un refresco natural de guanábana, por favor.", english: "Okay, I want a rondon and a fresh guanábana juice, please." },
        { speaker: "Server", spanish: "¡Perfecto! ¿Algo más?", english: "Perfect! Anything else?" },
        { speaker: "You", spanish: "No, gracias. ¿Está incluido el servicio?", english: "No, thank you. Is the service charge included?" },
        { speaker: "Server", spanish: "Sí, el diez por ciento está incluido.", english: "Yes, 10% is included." },
        { speaker: "You", spanish: "Perfecto. Gracias.", english: "Perfect. Thank you." },
      ]
    },
    testScenario: "You walk into a local soda in Cocles called 'Soda Marisol'. The owner, Marisol, welcomes you. Order a meal, ask about the food, and handle paying the bill.",
    testSystemPrompt: `You are Marisol, the warm owner of Soda Marisol in Cocles. You love sharing your food and Costa Rican culture.

The student is practicing Chapter 3: Restaurants.

Today's menu: casado con pollo (2500 colones), casado con pescado (3000), rondon (3500), ceviche (2000), Imperial cerveza (1500), refresco natural (800), agua (500).

Rules:
- Greet warmly, offer the menu
- Respond in Spanish with English in parentheses for new vocab
- Use "mae", "pura vida", "¡qué rico!", "diay" naturally
- The Caribbean coast has special food — mention coconut rice & beans, rondon with pride
- Correct grammar mistakes gently: ✗ Fix: [explanation] | ✓ [praise]
- Remind them about the 10%+13% taxes if they ask about the bill
- After ordering and paying, wrap up naturally
- Key grammar to watch: plural forms, quiero/quisiera, question formation`
  },
  {
    id: 4,
    title: "Shopping & Money",
    emoji: "🛍️",
    description: "Handle colones, bargain at markets, and shop at local stores without getting overcharged.",
    lesson: {
      title: "Shopping & Money",
      intro: "Costa Rica uses colones (₡). In Cocles and Puerto Viejo, many places also accept US dollars, but you'll get a worse exchange rate. Learn to handle money in colones and you'll save significantly. Markets and street vendors may be open to some bargaining, but most shops have fixed prices.",
      vocab: [
        { spanish: "el colón / los colones", english: "the colon / colones (Costa Rican currency)", pronunciation: "el koh-LON / lohs koh-LOH-nehs" },
        { spanish: "el dólar", english: "US dollar", pronunciation: "el DOH-lar" },
        { spanish: "¿Cuánto cuesta?", english: "How much does it cost?", pronunciation: "KWAHN-toh KWEHS-tah" },
        { spanish: "¿Cuánto es?", english: "How much is it?", pronunciation: "KWAHN-toh ehs" },
        { spanish: "caro/a", english: "expensive", pronunciation: "KAH-roh" },
        { spanish: "barato/a", english: "cheap / inexpensive", pronunciation: "bah-RAH-toh" },
        { spanish: "¿Tiene cambio?", english: "Do you have change?", pronunciation: "TYEH-neh KAM-byoh" },
        { spanish: "el mercado", english: "the market", pronunciation: "el mehr-KAH-doh" },
        { spanish: "la tienda", english: "the shop/store", pronunciation: "lah TYEHN-dah" },
        { spanish: "el supermercado", english: "the supermarket", pronunciation: "el soo-pehr-mehr-KAH-doh" },
        { spanish: "la farmacia", english: "the pharmacy", pronunciation: "lah far-MAH-syah" },
        { spanish: "comprar", english: "to buy", pronunciation: "kom-PRAR" },
        { spanish: "vender", english: "to sell", pronunciation: "ven-DER" },
        { spanish: "¿Me puede dar un descuento?", english: "Can you give me a discount?", pronunciation: "meh PWEH-deh dar oon des-KWEHN-toh", slang: true, slangNote: "Polite way to ask for a discount. Don't push it — Ticos don't love hard bargaining." },
        { spanish: "Llevo esto.", english: "I'll take this.", pronunciation: "YEH-voh EHS-toh", slang: true, slangNote: "Literally 'I'll carry this' — the natural way to say you're buying something." },
        { spanish: "Voy a pensar.", english: "I'm going to think about it.", pronunciation: "BOY ah pen-SAR" },
        { spanish: "¿Acepta tarjeta de crédito?", english: "Do you accept credit cards?", pronunciation: "ah-SEP-tah tar-HEH-tah deh KREH-dee-toh" },
        { spanish: "el recibo", english: "the receipt", pronunciation: "el reh-SEE-boh" },
        { spanish: "la bolsa", english: "the bag", pronunciation: "lah BOL-sah" },
        { spanish: "los souvenirs / los regalos", english: "souvenirs / gifts", pronunciation: "lohs soo-veh-NIRS / lohs reh-GAH-lohs" },
        { spanish: "Diay", english: "Well... / So... / Hm (filler word)", pronunciation: "dee-AY", slang: true, slangNote: "'Diay' (or 'idiay') is a Costa Rican filler word like 'well' or 'so' or 'oh man'. You'll hear it constantly. Saying it makes you sound very local." },
      ],
      grammar: [
        {
          title: "Numbers for Prices",
          explanation: "You need numbers to handle money. Key numbers: uno(1), dos(2), tres(3), cuatro(4), cinco(5), seis(6), siete(7), ocho(8), nueve(9), diez(10), veinte(20), cien(100), mil(1000), dos mil(2000). Prices are said like: 'dos mil quinientos' = 2,500.",
          examples: [
            { spanish: "Son dos mil colones.", english: "That's 2,000 colones." },
            { spanish: "Cuesta cinco mil quinientos.", english: "It costs 5,500." },
            { spanish: "Le debo diez mil.", english: "I owe you 10,000." },
          ]
        },
        {
          title: "Using 'Tener' (To Have) for Shopping",
          explanation: "'Tener' is an irregular verb meaning 'to have'. It's used constantly in shopping: ¿Tiene...? = Do you have...? Tengo = I have. No tengo = I don't have.",
          examples: [
            { spanish: "¿Tiene esto en azul?", english: "Do you have this in blue?" },
            { spanish: "¿Tiene algo más barato?", english: "Do you have something cheaper?" },
            { spanish: "No tengo suficiente dinero.", english: "I don't have enough money." },
            { spanish: "Tengo un billete de diez mil.", english: "I have a 10,000 colon bill." },
          ]
        }
      ],
      phrases: [
        { spanish: "¿Dónde puedo comprar...?", english: "Where can I buy...?" },
        { spanish: "¿Tiene esto en otro color/talla?", english: "Do you have this in another color/size?" },
        { spanish: "Solo estoy mirando, gracias.", english: "I'm just looking, thanks." },
        { spanish: "¿A cómo está el tipo de cambio?", english: "What's the exchange rate?" },
        { spanish: "Pago en efectivo.", english: "I'll pay in cash." },
        { spanish: "Me da la vuelta en colones, por favor.", english: "Give me change in colones, please." },
        { spanish: "¿Tiene algo típico de aquí?", english: "Do you have something typical from here?" },
      ],
      dialogue: [
        { speaker: "Vendor", spanish: "Buenas, ¿qué busca?", english: "Hi, what are you looking for?" },
        { speaker: "You", spanish: "Solo estoy mirando. ¿Cuánto cuesta este collar?", english: "I'm just looking. How much is this necklace?" },
        { speaker: "Vendor", spanish: "Son ocho mil colones.", english: "It's 8,000 colones." },
        { speaker: "You", spanish: "Diay, está un poco caro. ¿Me puede dar un descuento?", english: "Hmm, that's a little expensive. Can you give me a discount?" },
        { speaker: "Vendor", spanish: "Bueno, le dejo en siete mil, mae.", english: "Okay, I'll leave it at 7,000, dude." },
        { speaker: "You", spanish: "Listo, llevo esto. ¿Acepta tarjeta?", english: "Alright, I'll take this. Do you accept cards?" },
        { speaker: "Vendor", spanish: "No, solo efectivo.", english: "No, cash only." },
        { speaker: "You", spanish: "Está bien. Aquí tiene diez mil.", english: "That's fine. Here's 10,000." },
        { speaker: "Vendor", spanish: "Gracias. Le doy tres mil de vuelta.", english: "Thanks. I'll give you 3,000 change." },
      ]
    },
    testScenario: "You're at a small artisan market in Puerto Viejo. A vendor named Roxana is selling handmade jewelry and local crafts. Browse, ask about prices, try to negotiate, and make a purchase.",
    testSystemPrompt: `You are Roxana, a friendly artisan vendor at the Puerto Viejo market selling handmade jewelry and crafts from the Limon area.

The student is practicing Chapter 4: Shopping & Money.

Your prices (all in colones): collar/necklace 8000-12000, pulsera/bracelet 3000-6000, aretes/earrings 2500-5000, bolsa/bag 15000-25000. Accept USD at 500 colones per dollar exchange. Cash only.

Rules:
- Be friendly but firm on price — accept max 10-15% discount with a little back-and-forth
- Use "diay", "mae", "pura vida", "listo" naturally
- Respond in Spanish with English in parentheses for new words
- Correct grammar: ✗ Fix: [explanation] | ✓ [praise]
- Key grammar to watch: tener conjugation, numbers, el/la with shopping items
- After a purchase, wrap up warmly`
  },
  {
    id: 5,
    title: "Beach, Activities & Emergencies",
    emoji: "🏄",
    description: "Talk about beach activities, book a surf lesson, and handle basic emergency situations.",
    lesson: {
      title: "Beach, Activities & Emergencies",
      intro: "Cocles beach is one of the best surf beaches in Costa Rica. You'll interact with surf instructors, wildlife guides, yoga teachers, and kayak rental shops. You should also know basic emergency phrases — the nearest hospital is in Limón city, about an hour away. The local clinic (CAJA) is in Bribrí.",
      vocab: [
        { spanish: "la ola", english: "the wave", pronunciation: "lah OH-lah" },
        { spanish: "surfear", english: "to surf", pronunciation: "soor-feh-AR" },
        { spanish: "la tabla de surf", english: "surfboard", pronunciation: "lah TAH-blah deh SOORF" },
        { spanish: "la clase de surf", english: "surf lesson", pronunciation: "lah KLAH-seh deh SOORF" },
        { spanish: "el guía", english: "the guide", pronunciation: "el GEE-ah" },
        { spanish: "el kayak", english: "kayak", pronunciation: "el KAY-yak" },
        { spanish: "snorkel", english: "snorkel", pronunciation: "SNOR-kel" },
        { spanish: "el sendero", english: "the trail / path", pronunciation: "el sen-DEH-roh" },
        { spanish: "el mono", english: "the monkey", pronunciation: "el MOH-noh" },
        { spanish: "la rana", english: "the frog (poison dart frogs are everywhere!)", pronunciation: "lah RAH-nah" },
        { spanish: "la pereza", english: "the sloth", pronunciation: "lah peh-REH-sah", slang: true, slangNote: "'Pereza' means laziness — and sloths are named for it. Muy apropiado (very appropriate)." },
        { spanish: "la corriente", english: "the current (ocean)", pronunciation: "lah koh-RYEHN-teh", slang: true, slangNote: "Rip currents (corriente de resaca) are dangerous in Cocles. Know this word: '¡Hay corriente!' = There's a current!" },
        { spanish: "¡Auxilio! / ¡Socorro!", english: "Help!", pronunciation: "owk-SEE-lyoh / soh-KOH-roh" },
        { spanish: "¡Llame a la policía!", english: "Call the police!", pronunciation: "YAH-meh ah lah poh-lee-SEE-ah" },
        { spanish: "¡Llame a una ambulancia!", english: "Call an ambulance!", pronunciation: "YAH-meh ah OO-nah am-boo-LAN-syah" },
        { spanish: "Me duele...", english: "...hurts me / I have pain in...", pronunciation: "meh DWEH-leh", slang: true, slangNote: "'Me duele la cabeza' = I have a headache. 'Me duele el estómago' = I have a stomachache." },
        { spanish: "Estoy perdido/a.", english: "I'm lost. (male/female)", pronunciation: "ehs-TOY pehr-DEE-doh" },
        { spanish: "Necesito un doctor.", english: "I need a doctor.", pronunciation: "neh-seh-SEE-toh oon dok-TOR" },
        { spanish: "la farmacia", english: "the pharmacy", pronunciation: "lah far-MAH-syah" },
        { spanish: "el seguro", english: "insurance", pronunciation: "el seh-GOO-roh" },
        { spanish: "Me robaron.", english: "I was robbed.", pronunciation: "meh roh-BAH-ron" },
        { spanish: "¡Tuanis!", english: "Cool! / Great! / Awesome!", pronunciation: "TWAH-nees", slang: true, slangNote: "'Tuanis' is pure Tico slang for 'cool' or 'awesome'. Origin disputed — some say it's from English 'too nice'. Say this and locals will love you." },
      ],
      grammar: [
        {
          title: "Reflexive: 'Me' — Things That Happen To You",
          explanation: "In Spanish, many experiences use reflexive pronouns. 'Me duele' literally means 'it hurts me'. 'Me robaron' = 'they robbed me'. You don't need to master reflexives — just memorize these patterns for emergencies.",
          examples: [
            { spanish: "Me duele la cabeza.", english: "I have a headache. (My head hurts me.)" },
            { spanish: "Me corté el pie.", english: "I cut my foot." },
            { spanish: "Me mareo en el agua.", english: "I get dizzy in the water." },
          ]
        },
        {
          title: "Querer (to want) & Poder (can/to be able) — Essential Irregular Verbs",
          explanation: "These two verbs are irregular in the present tense but you NEED them constantly. Quiero (I want), quieres (you want), quiere (he/she wants). Puedo (I can), puedes (you can), puede (he/she can).",
          examples: [
            { spanish: "Quiero alquilar una tabla de surf.", english: "I want to rent a surfboard." },
            { spanish: "¿Puedes enseñarme?", english: "Can you teach me?" },
            { spanish: "No puedo nadar bien.", english: "I can't swim well." },
            { spanish: "¿Podemos ir mañana?", english: "Can we go tomorrow?" },
          ]
        }
      ],
      phrases: [
        { spanish: "¿Dónde puedo alquilar una tabla?", english: "Where can I rent a surfboard?" },
        { spanish: "¿Cuánto cuesta una clase de surf?", english: "How much is a surf lesson?" },
        { spanish: "Nunca he surfeado antes.", english: "I've never surfed before." },
        { spanish: "¿Está seguro nadar aquí?", english: "Is it safe to swim here?" },
        { spanish: "¿Dónde está el baño más cercano?", english: "Where is the nearest bathroom?" },
        { spanish: "¿Hay corriente hoy?", english: "Is there a current today?" },
        { spanish: "¿Puede tomar una foto de nosotros?", english: "Can you take a photo of us?" },
        { spanish: "¡Qué tuanis está esto!", english: "This is so cool!" },
      ],
      dialogue: [
        { speaker: "You", spanish: "Hola. ¿Dan clases de surf aquí?", english: "Hi. Do you give surf lessons here?" },
        { speaker: "Instructor", spanish: "Sí, mae. ¿Alguna vez has surfeado?", english: "Yeah, dude. Have you ever surfed?" },
        { speaker: "You", spanish: "No, nunca. Es mi primera vez.", english: "No, never. It's my first time." },
        { speaker: "Instructor", spanish: "¡Tuanis! Tenemos clases para principiantes. Son veinte dólares por dos horas.", english: "Awesome! We have beginner classes. It's $20 for two hours." },
        { speaker: "You", spanish: "Perfecto. ¿Está seguro el mar hoy?", english: "Perfect. Is the sea safe today?" },
        { speaker: "Instructor", spanish: "Sí, hoy está calmado. Hay olas pequeñas — ideal para aprender.", english: "Yes, it's calm today. Small waves — ideal for learning." },
        { speaker: "You", spanish: "¡Qué tuanis! Quiero hacer la clase.", english: "How awesome! I want to do the class." },
        { speaker: "Instructor", spanish: "Listo, pura vida. Empieza en diez minutos.", english: "Great, no worries. It starts in ten minutes." },
      ]
    },
    testScenario: "You're on Cocles beach and you want to book a surf lesson. Find an instructor named Felipe, ask about lessons, check safety conditions, and sign up.",
    testSystemPrompt: `You are Felipe, a surf instructor on Cocles beach who has been surfing there for 15 years.

The student is practicing Chapter 5: Beach & Activities.

Surf lesson prices: $20/2 hours beginner, $15/hour intermediate. Also rent boards: $10/hour. Today's conditions: small 1-2ft waves, good for beginners, no dangerous currents.

Rules:
- Be enthusiastic and encouraging — surf instructors are typically very positive
- Use "tuanis", "mae", "pura vida", "listo" naturally
- Respond in Spanish with English in (parentheses) for new words
- Give safety advice naturally (currents, sunscreen, etc.)
- Correct grammar: ✗ Fix: [explanation] | ✓ [praise]
- Key grammar: querer/poder conjugations, ¿Hay...? questions, safety vocabulary
- After booking, wrap up with lesson instructions`
  },
  {
    id: 6,
    title: "Local Slang & Caribbean Vibes",
    emoji: "🌴",
    description: "Master Costa Rican AND Limon Caribbean slang to connect with locals on a deeper level.",
    lesson: {
      title: "Local Slang & Caribbean Vibes",
      intro: "Cocles is in the Limon province — the Caribbean coast — which has a unique culture blending Costa Rican, Afro-Caribbean, and indigenous Bribri traditions. You'll hear Spanish, English Creole (Patois), and sometimes Bribri language. This chapter covers the slang that will make locals smile and open doors that stay closed for most tourists.",
      vocab: [
        { spanish: "Mae", english: "Dude / Man / Hey", pronunciation: "MY", slang: true, slangNote: "The #1 Tico word. Can be used for any gender in any situation. 'Mae, pura vida!' / 'Esa mae es simpática' (That person is nice)." },
        { spanish: "Tuanis", english: "Cool / Awesome / Great", pronunciation: "TWAH-nees", slang: true, slangNote: "Uniquely Costa Rican. 'Está tuanis' = It's cool. 'Qué tuanis!' = How cool!" },
        { spanish: "Pura vida", english: "Pure life (hello/goodbye/great/no worries)", pronunciation: "POO-rah VEE-dah", slang: true, slangNote: "THE phrase. It answers everything. Question: ¿Cómo estás? Answer: Pura vida. Someone thanks you: Pura vida. How's the food? Pura vida." },
        { spanish: "Diay / Idiay", english: "Well... / So... / Oh! / Hmm", pronunciation: "dee-AY / ee-dee-AY", slang: true, slangNote: "A uniquely Costa Rican filler word. 'Diay, mae, no sé.' = 'Well, dude, I don't know.' Start sentences with this and you'll sound very local." },
        { spanish: "Zarpe", english: "The last drink of the night", pronunciation: "SAR-peh", slang: true, slangNote: "'¿Hacemos un zarpe?' = Should we have one last drink? It literally means 'departure' — as in, the last one before you leave." },
        { spanish: "Al chile", english: "For real / Seriously / No joke", pronunciation: "al CHEE-leh", slang: true, slangNote: "'Al chile' means 'for real'. '¿Al chile?' = Are you serious? 'Al chile que sí.' = For real, yes." },
        { spanish: "Guaro", english: "Costa Rican sugarcane liquor (like moonshine)", pronunciation: "GWAH-roh", slang: true, slangNote: "The local firewater. Cheap, strong, and ubiquitous. 'Cacique' brand is the most famous guaro." },
        { spanish: "Chunche", english: "Thing / Thingy / Whatchamacallit", pronunciation: "CHOON-cheh", slang: true, slangNote: "When you forget the word for something: '¿Cómo se llama ese chunche?' = What do you call that thing?" },
        { spanish: "Salado", english: "Too bad / Unlucky (literally: salty)", pronunciation: "sah-LAH-doh", slang: true, slangNote: "'Qué salado' = That's too bad / What bad luck. Opposite of what you'd expect from 'salty'!" },
        { spanish: "Brete", english: "Work / Job", pronunciation: "BREH-teh", slang: true, slangNote: "'Tengo brete' = I have work. 'El brete' = the job. Used constantly instead of 'trabajo'." },
        { spanish: "Andar con ganas", english: "To be motivated / to be into something", pronunciation: "an-DAR kon GAH-nahs", slang: true, slangNote: "'Ando con ganas de surfear' = I really feel like surfing. 'Andar' means 'to go around' but is used like 'to be' in many slang contexts." },
        { spanish: "Maje", english: "Dude (slightly less polite than mae, can be teasing)", pronunciation: "MAH-heh", slang: true, slangNote: "Similar to 'mae' but can be slightly mocking depending on tone. Stick to 'mae' to be safe." },
        { spanish: "Estar de goma", english: "To be hungover", pronunciation: "es-TAR deh GOH-mah", slang: true, slangNote: "'Estoy de goma.' = I'm hungover. Literally 'to be of rubber/gum'. Very common morning phrase in tourist areas." },
        { spanish: "¡Upe!", english: "Hello? Anyone home? (knock equivalent)", pronunciation: "OO-peh", slang: true, slangNote: "Instead of knocking, Costa Ricans call out '¡Upe!' at the door of a house. You won't use this much as a tourist but you'll hear it." },
        { spanish: "A cachete", english: "Excellent / Perfect (Caribbean coast)", pronunciation: "ah kah-CHEH-teh", slang: true, slangNote: "More Caribbean than national Tico slang. 'Todo a cachete' = Everything is perfect. You'll hear this in Limon more than San José." },
        { spanish: "Birra", english: "Beer (informal)", pronunciation: "BEE-rah", slang: true, slangNote: "Informal for 'cerveza'. '¿Vamos por una birra?' = Wanna grab a beer?" },
      ],
      grammar: [
        {
          title: "Estar (to be) for States & Locations",
          explanation: "A quick review: ESTAR is used for how you feel, where you are, and temporary states. Most slang expressions about being in a state use 'estar'. 'Estoy de goma' (I'm hungover), 'Está tuanis' (It's cool), 'Estoy perdido' (I'm lost).",
          examples: [
            { spanish: "Estoy de goma hoy.", english: "I'm hungover today." },
            { spanish: "¿Cómo estás, mae?", english: "How are you, dude?" },
            { spanish: "El surf está tuanis aquí.", english: "Surfing is cool/awesome here." },
          ]
        },
        {
          title: "Slang Verbs: Andar & Quedar",
          explanation: "'Andar' (literally: to walk/go around) is used in slang to mean 'to be' in a state: 'Ando con hambre' = I'm hungry. 'Quedar' (to remain/stay) is used like 'to be left' or 'to turn out': '¿Cómo quedó?' = How did it turn out? These are very Tico patterns.",
          examples: [
            { spanish: "Ando sin plata.", english: "I'm broke right now. (literally: I'm going around without money)" },
            { spanish: "Ando con ganas de bailar.", english: "I really feel like dancing." },
            { spanish: "¿Cómo quedó la comida?", english: "How did the food turn out?" },
          ]
        }
      ],
      phrases: [
        { spanish: "Mae, al chile que sí.", english: "Dude, for real, yes.", note: "Strong agreement" },
        { spanish: "Qué salado, mae.", english: "That's too bad, dude.", note: "Sympathy expression" },
        { spanish: "¿Hacemos un zarpe?", english: "Should we have one last drink?", note: "Classic bar phrase" },
        { spanish: "Ando sin brete hoy.", english: "I have no work today / I'm free.", note: "Using brete (work)" },
        { spanish: "Todo tranqui.", english: "All chill / Everything's relaxed.", note: "Short for tranquilo" },
        { spanish: "¡Qué tuanis, mae! Al chile.", english: "That's so cool, dude! For real.", note: "Pure Tico enthusiasm" },
        { spanish: "No se me olvida.", english: "I won't forget it.", note: "Using reflexive me" },
        { spanish: "Estoy de goma, pero pura vida.", english: "I'm hungover, but life is good.", note: "The Tico spirit" },
      ],
      dialogue: [
        { speaker: "Local", spanish: "Mae, ¿cómo amaneció?", english: "Dude, how did you wake up? (How are you this morning?)" },
        { speaker: "You", spanish: "Diay, mae... estoy un poco de goma.", english: "Well, dude... I'm a little hungover." },
        { speaker: "Local", spanish: "Jaja, qué salado. ¿Hicieron zarpe anoche?", english: "Haha, that's too bad. Did you have a last drink last night?" },
        { speaker: "You", spanish: "Al chile que sí. Fue tuanis la noche.", english: "For real. It was an awesome night." },
        { speaker: "Local", spanish: "Buena nota, mae. ¿Qué va a hacer hoy?", english: "Nice, dude. What are you going to do today?" },
        { speaker: "You", spanish: "Ando con ganas de surfear, pero primero necesito un café.", english: "I really feel like surfing, but first I need a coffee." },
        { speaker: "Local", spanish: "Diay, sí. La soda de la esquina está a cachete. Pura vida.", english: "Well, yeah. The soda on the corner is excellent. Pure life." },
        { speaker: "You", spanish: "¡Tuanis! Gracias, mae.", english: "Awesome! Thanks, dude." },
      ]
    },
    testScenario: "You're hanging out at a beach bar in Cocles in the evening. You meet Andrés, a local who works as a surf instructor. Have a casual, slang-filled conversation about your day, the local scene, and maybe plan something for tomorrow.",
    testSystemPrompt: `You are Andrés, a 28-year-old surf instructor and local from Cocles who loves chatting with interesting tourists. You speak very colloquial Costa Rican Spanish.

The student is practicing Chapter 6: Local Slang.

Rules:
- Use HEAVY Tico slang: mae, tuanis, pura vida, diay, al chile, zarpe, brete, goma, chunche, a cachete — naturally and frequently
- Don't translate your slang UNLESS they look confused or ask
- When they use slang correctly, react with genuine enthusiasm: "¡Al chile, mae!" or "¡Eso! Hablas como tico ya."
- When they make grammar errors, correct briefly: ✗ [correction] | ✓ [encouragement]
- Topics: surfing, night life, favorite spots in Cocles, Caribbean food, plans for tomorrow
- If they try to use slang but use it wrong, gently correct it with humor
- Keep the conversation flowing naturally like two people chilling at a beach bar
- After 8-10 exchanges, suggest meeting up tomorrow to surf`
  }
];
