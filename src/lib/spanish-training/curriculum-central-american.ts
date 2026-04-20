import type { Chapter } from "./curriculum-types";

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "Greetings & Polite Basics",
    emoji: "👋",
    description: "Essential greetings, introductions, and polite phrases used across Central America.",
    lesson: {
      title: "Greetings & Polite Basics",
      intro: "Spanish greetings are the foundation of every interaction. Across Central America, being polite and greeting people properly shows respect and opens doors. The good news: the basics are simple and immediately useful.",
      vocab: [
        { spanish: "Hola", english: "Hello", pronunciation: "OH-lah" },
        { spanish: "Buenos días", english: "Good morning", pronunciation: "BWEH-nohs DEE-ahs" },
        { spanish: "Buenas tardes", english: "Good afternoon", pronunciation: "BWEH-nahs TAR-dehs" },
        { spanish: "Buenas noches", english: "Good evening / Good night", pronunciation: "BWEH-nahs NOH-chehs" },
        { spanish: "¿Cómo está usted?", english: "How are you? (formal)", pronunciation: "KOH-moh ehs-TAH oo-STED" },
        { spanish: "¿Cómo estás?", english: "How are you? (informal)", pronunciation: "KOH-moh ehs-TAHS" },
        { spanish: "Bien, gracias. ¿Y usted?", english: "Good, thank you. And you?", pronunciation: "BEEYEN GRAH-see-ahs ee oo-STED" },
        { spanish: "Más o menos", english: "So-so / More or less", pronunciation: "MAHS oh MEH-nohs" },
        { spanish: "Me llamo...", english: "My name is...", pronunciation: "meh YAH-moh" },
        { spanish: "¿Cómo se llama usted?", english: "What is your name?", pronunciation: "KOH-moh seh YAH-mah oo-STED" },
        { spanish: "Mucho gusto", english: "Nice to meet you", pronunciation: "MOO-choh GOO-stoh" },
        { spanish: "El gusto es mío", english: "The pleasure is mine", pronunciation: "el GOO-stoh ehs MEE-oh" },
        { spanish: "Por favor", english: "Please", pronunciation: "por fah-VOR" },
        { spanish: "Gracias", english: "Thank you", pronunciation: "GRAH-see-ahs" },
        { spanish: "De nada", english: "You're welcome", pronunciation: "deh NAH-dah" },
        { spanish: "Perdón / Disculpe", english: "Excuse me / Sorry", pronunciation: "pair-DON / dees-KOOL-peh" },
        { spanish: "Con permiso", english: "Excuse me (passing through)", pronunciation: "kon pair-MEE-soh" },
        { spanish: "Adiós", english: "Goodbye", pronunciation: "ah-dee-OHS" },
        { spanish: "Hasta luego", english: "See you later", pronunciation: "AHS-tah LWEH-goh" },
        { spanish: "Hasta mañana", english: "See you tomorrow", pronunciation: "AHS-tah mah-NYAH-nah" },
        { spanish: "Nos vemos", english: "We'll see each other / See you", pronunciation: "nohs VEH-mohs" },
      ],
      grammar: [
        {
          title: "Tú vs. Usted (Informal vs. Formal 'You')",
          explanation: "Spanish has two words for 'you'. Use 'tú' with friends, family, and people your age. Use 'usted' with elders, strangers, authority figures, or in formal situations. When in doubt with a stranger, use 'usted' — it's always respectful.",
          examples: [
            { spanish: "¿Cómo te llamas tú?", english: "What's your name? (to a friend)" },
            { spanish: "¿Cómo se llama usted?", english: "What is your name? (formal)" },
            { spanish: "¿Hablas inglés?", english: "Do you speak English? (tú)" },
            { spanish: "¿Habla inglés?", english: "Do you speak English? (usted)" },
          ]
        },
        {
          title: "Present Tense of 'Ser' (To Be — permanent) and 'Estar' (To Be — temporary)",
          explanation: "Spanish has two verbs for 'to be'. SER is for permanent facts: identity, nationality, profession. ESTAR is for temporary states: feelings, location, conditions. This distinction is key to Spanish.",
          examples: [
            { spanish: "Soy de los Estados Unidos.", english: "I am from the United States. (SER — origin)" },
            { spanish: "Estoy cansado/a.", english: "I am tired. (ESTAR — temporary state)" },
            { spanish: "El restaurante está cerca.", english: "The restaurant is nearby. (ESTAR — location)" },
            { spanish: "Ella es doctora.", english: "She is a doctor. (SER — profession)" },
          ]
        }
      ],
      phrases: [
        { spanish: "No hablo español muy bien.", english: "I don't speak Spanish very well." },
        { spanish: "¿Habla usted inglés?", english: "Do you speak English?" },
        { spanish: "Hablo un poco de español.", english: "I speak a little Spanish." },
        { spanish: "¿Puede hablar más despacio, por favor?", english: "Can you speak more slowly, please?" },
        { spanish: "No entiendo.", english: "I don't understand." },
        { spanish: "¿Puede repetir eso?", english: "Can you repeat that?" },
        { spanish: "¿Cómo se dice... en español?", english: "How do you say ... in Spanish?" },
      ],
      dialogue: [
        { speaker: "You", spanish: "Buenos días. ¿Cómo está usted?", english: "Good morning. How are you?" },
        { speaker: "Local", spanish: "Bien, gracias. ¿Y usted?", english: "Good, thank you. And you?" },
        { speaker: "You", spanish: "Muy bien. Me llamo Sarah. Mucho gusto.", english: "Very good. My name is Sarah. Nice to meet you." },
        { speaker: "Local", spanish: "El gusto es mío. ¿De dónde es usted?", english: "The pleasure is mine. Where are you from?" },
        { speaker: "You", spanish: "Soy de los Estados Unidos. Estoy aprendiendo español.", english: "I'm from the United States. I'm learning Spanish." },
        { speaker: "Local", spanish: "¡Qué bien! Su español es bueno.", english: "How great! Your Spanish is good." },
        { speaker: "You", spanish: "Gracias. Hablo solo un poco.", english: "Thank you. I only speak a little." },
      ]
    },
    testScenario: "You arrive at a small hotel in a Central American town. The receptionist greets you. Practice a full introduction: greet them, give your name, say where you're from, and explain you're learning Spanish.",
    testSystemPrompt: `You are María, the receptionist at a small hotel in Central America. You are professional and helpful.

The student is practicing Chapter 1: Greetings & Basics.

Rules:
- Use standard, clear Spanish — no heavy regional slang
- Respond in Spanish with English in (parentheses) for new vocabulary
- Correct grammar gently: ✗ Small fix: [explanation] | ✓ [praise]
- Key grammar to watch: ser vs. estar, tú vs. usted, present tense conjugation
- Topics: greeting, name, origin, why they're traveling
- After 6-8 exchanges, wrap up by handing over the room key naturally`
  },
  {
    id: 2,
    title: "Getting Around & Transportation",
    emoji: "🚌",
    description: "Take buses, taxis, and ask for directions anywhere in Central America.",
    lesson: {
      title: "Getting Around & Transportation",
      intro: "Buses (called 'microbús' or 'camioneta' in some countries, 'bus' everywhere) are the backbone of Central American travel. Taxis are common in cities. Always confirm prices before getting in — meters aren't always used. Directions use landmarks, not street addresses.",
      vocab: [
        { spanish: "el autobús / el bus", english: "bus", pronunciation: "el ow-toh-BOOS / el BOOS" },
        { spanish: "el taxi", english: "taxi", pronunciation: "el TAHK-see" },
        { spanish: "el minibús / la camioneta", english: "minibus / van (varies by country)", pronunciation: "el mee-nee-BOOS / lah kah-myoh-NEH-tah" },
        { spanish: "la parada", english: "bus stop", pronunciation: "lah pah-RAH-dah" },
        { spanish: "la terminal", english: "bus terminal", pronunciation: "lah tehr-mee-NAL" },
        { spanish: "el aeropuerto", english: "airport", pronunciation: "el ah-eh-roh-PWEHR-toh" },
        { spanish: "¿Cuánto cuesta el boleto?", english: "How much is the ticket?", pronunciation: "KWAHN-toh KWEHS-tah el boh-LEH-toh" },
        { spanish: "Un boleto a..., por favor", english: "One ticket to..., please", pronunciation: "oon boh-LEH-toh ah" },
        { spanish: "¿A qué hora sale el bus?", english: "What time does the bus leave?", pronunciation: "ah keh OH-rah SAH-leh el BOOS" },
        { spanish: "¿Dónde está...?", english: "Where is...?", pronunciation: "DON-deh ehs-TAH" },
        { spanish: "¿Cómo llego a...?", english: "How do I get to...?", pronunciation: "KOH-moh YEH-goh ah" },
        { spanish: "a la derecha", english: "to the right", pronunciation: "ah lah deh-REH-chah" },
        { spanish: "a la izquierda", english: "to the left", pronunciation: "ah lah ees-KYEHR-dah" },
        { spanish: "recto / derecho", english: "straight ahead", pronunciation: "REK-toh / deh-REH-choh" },
        { spanish: "la cuadra / la manzana", english: "the block", pronunciation: "lah KWAH-drah / lah man-SAH-nah" },
        { spanish: "cerca / lejos", english: "near / far", pronunciation: "SER-kah / LEH-hohs" },
        { spanish: "en la esquina", english: "on the corner", pronunciation: "en lah ehs-KEE-nah" },
        { spanish: "enfrente de", english: "in front of", pronunciation: "en-FREN-teh deh" },
        { spanish: "al lado de", english: "next to", pronunciation: "al LAH-doh deh" },
        { spanish: "Pare aquí, por favor", english: "Stop here please", pronunciation: "PAH-reh ah-KEE por fah-VOR" },
      ],
      grammar: [
        {
          title: "Question Words (Interrogatives)",
          explanation: "All question words have accent marks. The most useful ones for travel: ¿Dónde? (Where?), ¿Cuándo? (When?), ¿Cuánto? (How much?), ¿Cómo? (How?), ¿Qué? (What?), ¿Cuál? (Which?), ¿A qué hora? (At what time?).",
          examples: [
            { spanish: "¿Dónde está la parada de bus?", english: "Where is the bus stop?" },
            { spanish: "¿Cuándo sale el próximo bus?", english: "When does the next bus leave?" },
            { spanish: "¿Cuánto cuesta ir al centro?", english: "How much does it cost to go downtown?" },
            { spanish: "¿A qué hora llega?", english: "What time does it arrive?" },
          ]
        },
        {
          title: "Ir (To Go) — Most Important Irregular Verb",
          explanation: "'Ir' is completely irregular but essential. You'll use it constantly. Present tense: voy (I go), vas (you go), va (he/she/you formal goes), vamos (we go), van (they go). 'Voy a + [destination/infinitive]' = I'm going to...",
          examples: [
            { spanish: "Voy al centro.", english: "I'm going downtown." },
            { spanish: "¿Vas a la playa?", english: "Are you going to the beach?" },
            { spanish: "El bus va a la terminal.", english: "The bus goes to the terminal." },
            { spanish: "Vamos a tomar un taxi.", english: "We're going to take a taxi." },
          ]
        }
      ],
      phrases: [
        { spanish: "¿Pasa el bus por...?", english: "Does the bus go through/by...?" },
        { spanish: "¿Cuánto tiempo tarda?", english: "How long does it take?" },
        { spanish: "Me puede bajar en..., por favor.", english: "Can you drop me off at..., please." },
        { spanish: "¿Me avisa cuando lleguemos a...?", english: "Can you let me know when we arrive at...?" },
        { spanish: "¿Hay un bus directo?", english: "Is there a direct bus?" },
        { spanish: "Necesito ir a...", english: "I need to go to..." },
        { spanish: "¿Está lejos a pie?", english: "Is it far on foot?" },
      ],
      dialogue: [
        { speaker: "You", spanish: "Disculpe. ¿Dónde está la parada de bus para el centro?", english: "Excuse me. Where is the bus stop for downtown?" },
        { speaker: "Local", spanish: "Está a dos cuadras, a la derecha.", english: "It's two blocks away, to the right." },
        { speaker: "You", spanish: "Gracias. ¿Cuánto cuesta el boleto?", english: "Thank you. How much is the ticket?" },
        { speaker: "Local", spanish: "Son dos quetzales. Es muy barato.", english: "It's two quetzales. It's very cheap." },
        { speaker: "You", spanish: "¿A qué hora sale el próximo bus?", english: "What time does the next bus leave?" },
        { speaker: "Local", spanish: "En diez minutos. Apúrese.", english: "In ten minutes. Hurry up." },
        { speaker: "You", spanish: "¡Gracias! Hasta luego.", english: "Thank you! See you later." },
      ]
    },
    testScenario: "You're in a bus terminal in a Central American city and need to get to a small town nearby. Ask a local for help finding the right bus, buy a ticket, and confirm the route.",
    testSystemPrompt: `You are Roberto, a helpful local at a Central American bus terminal.

The student is practicing Chapter 2: Getting Around.

Rules:
- Use standard, clear Spanish across Central America — no country-specific slang
- Bus to the town costs 15 quetzales/cordobas/colones (use generic prices), leaves every hour, 45 min journey
- Respond in Spanish with English in (parentheses) for new words
- Correct grammar: ✗ Fix: [explanation] | ✓ [praise]
- Key grammar: ir (to go), question words, directions vocabulary
- After 8 exchanges, send them to the right bus naturally`
  },
  {
    id: 3,
    title: "Restaurants & Ordering Food",
    emoji: "🍽️",
    description: "Order food and drinks, handle dietary restrictions, and pay the bill at any Central American eatery.",
    lesson: {
      title: "Restaurants & Ordering Food",
      intro: "Central American food is hearty and delicious. Rice and beans (gallo pinto or arroz con frijoles) are at every meal. Tortillas are handmade in Guatemala. Pupusas are the national dish of El Salvador. Wherever you are, these ordering phrases will get you fed.",
      vocab: [
        { spanish: "el menú / la carta", english: "the menu", pronunciation: "el meh-NOO / lah KAR-tah" },
        { spanish: "el plato del día", english: "plate of the day / daily special", pronunciation: "el PLAH-toh del DEE-ah" },
        { spanish: "el desayuno", english: "breakfast", pronunciation: "el deh-sah-YOO-noh" },
        { spanish: "el almuerzo", english: "lunch", pronunciation: "el al-MWEHR-soh" },
        { spanish: "la cena", english: "dinner", pronunciation: "lah SEH-nah" },
        { spanish: "el agua (purificada)", english: "water (purified)", pronunciation: "el AH-gwah poo-ree-fee-KAH-dah" },
        { spanish: "el jugo / el zumo", english: "juice", pronunciation: "el HOO-goh / el SOO-moh" },
        { spanish: "la cerveza", english: "beer", pronunciation: "lah sehr-VEH-sah" },
        { spanish: "el refresco", english: "soft drink / soda", pronunciation: "el reh-FRES-koh" },
        { spanish: "el pollo", english: "chicken", pronunciation: "el POH-yoh" },
        { spanish: "la carne", english: "beef/meat", pronunciation: "lah KAR-neh" },
        { spanish: "el pescado", english: "fish (cooked)", pronunciation: "el pes-KAH-doh" },
        { spanish: "los frijoles", english: "beans", pronunciation: "lohs free-HOH-lehs" },
        { spanish: "el arroz", english: "rice", pronunciation: "el ah-ROHS" },
        { spanish: "sin...", english: "without...", pronunciation: "seen" },
        { spanish: "con...", english: "with...", pronunciation: "kon" },
        { spanish: "picante / chile", english: "spicy / chili", pronunciation: "pee-KAN-teh / CHEE-leh" },
        { spanish: "vegetariano/a", english: "vegetarian", pronunciation: "veh-heh-tah-ree-AH-noh" },
        { spanish: "la cuenta", english: "the bill / check", pronunciation: "lah KWEHN-tah" },
        { spanish: "¿Está incluido el servicio?", english: "Is service/tip included?", pronunciation: "ehs-TAH een-klwee-doh el sehr-VEE-syoh" },
        { spanish: "¿Aceptan tarjeta?", english: "Do you accept cards?", pronunciation: "ah-SEP-tan tar-HEH-tah" },
        { spanish: "rico / delicioso", english: "delicious", pronunciation: "REE-koh / deh-lee-SYOH-soh" },
      ],
      grammar: [
        {
          title: "Ordering: Quiero, Quisiera, and Me gustaría",
          explanation: "'Quiero' (I want) is the most common and perfectly polite way to order. 'Quisiera' (I would like) is slightly more formal. 'Me gustaría' (I would like) is the most polite. All three work fine — don't overthink it.",
          examples: [
            { spanish: "Quiero un café con leche.", english: "I want a coffee with milk." },
            { spanish: "Quisiera ver la carta.", english: "I would like to see the menu." },
            { spanish: "¿Me trae un vaso de agua?", english: "Can you bring me a glass of water?" },
          ]
        },
        {
          title: "Plurals: -s and -es",
          explanation: "Add -s to nouns ending in a vowel. Add -es to nouns ending in a consonant. Articles also change: el → los, la → las, un → unos, una → unas.",
          examples: [
            { spanish: "una cerveza → dos cervezas", english: "one beer → two beers" },
            { spanish: "un refresco → tres refrescos", english: "one soda → three sodas" },
            { spanish: "la tortilla → las tortillas", english: "the tortilla → the tortillas" },
            { spanish: "el plato → los platos", english: "the plate → the plates" },
          ]
        }
      ],
      phrases: [
        { spanish: "¿Tienen mesa disponible?", english: "Do you have a table available?" },
        { spanish: "Una mesa para dos, por favor.", english: "A table for two, please." },
        { spanish: "¿Qué recomienda usted?", english: "What do you recommend?" },
        { spanish: "¿Está incluido el pan?", english: "Is bread included?" },
        { spanish: "No como carne.", english: "I don't eat meat." },
        { spanish: "Soy alérgico/a a los mariscos.", english: "I'm allergic to seafood." },
        { spanish: "¿Me trae la cuenta, por favor?", english: "Can you bring me the check please?" },
        { spanish: "Todo estuvo muy rico.", english: "Everything was very delicious." },
      ],
      dialogue: [
        { speaker: "Server", spanish: "Buenas tardes. ¿Qué le sirvo?", english: "Good afternoon. What can I get you?" },
        { speaker: "You", spanish: "Buenas. ¿Me puede traer la carta?", english: "Good afternoon. Can you bring me the menu?" },
        { speaker: "Server", spanish: "Claro que sí. Hoy tenemos pollo asado y el plato del día es arroz con camarones.", english: "Of course. Today we have roasted chicken and the daily special is rice with shrimp." },
        { speaker: "You", spanish: "¿Qué recomienda usted?", english: "What do you recommend?" },
        { speaker: "Server", spanish: "El plato del día es excelente. Muy fresco.", english: "The daily special is excellent. Very fresh." },
        { speaker: "You", spanish: "Bueno. Quiero el plato del día y un jugo de naranja, por favor.", english: "Okay. I want the daily special and an orange juice, please." },
        { speaker: "Server", spanish: "Perfecto. ¿Algo más?", english: "Perfect. Anything else?" },
        { speaker: "You", spanish: "No gracias. ¿Aceptan tarjeta de crédito?", english: "No thank you. Do you accept credit cards?" },
        { speaker: "Server", spanish: "Sí, claro. Con mucho gusto.", english: "Yes, of course. With pleasure." },
      ]
    },
    testScenario: "You walk into a small restaurant at lunchtime. The server greets you. Practice asking for a table, ordering from the menu, and requesting the bill.",
    testSystemPrompt: `You are Carmen, a server at a small restaurant in Central America.

The student is practicing Chapter 3: Restaurants.

Menu (lunch): pollo asado con arroz y frijoles (80 quetzales), plato del día — sopa de res (65), ensalada mixta (45), jugo natural (25), refresco (20), agua (15). Cash and cards accepted.

Rules:
- Use standard, clear Spanish — no heavy slang
- Respond in Spanish with English in (parentheses) for new vocabulary
- Be warm and helpful as a good server would be
- Correct grammar: ✗ Fix: [explanation] | ✓ [praise]
- Key grammar: quiero/quisiera, plural forms, ordering structure
- After the meal is ordered and paid, wrap up naturally`
  },
  {
    id: 4,
    title: "Shopping & Handling Money",
    emoji: "🛍️",
    description: "Buy things, ask prices, pay in local currency, and navigate markets across Central America.",
    lesson: {
      title: "Shopping & Handling Money",
      intro: "Each Central American country has its own currency: Guatemala (quetzal), Honduras (lempira), El Salvador (US dollar), Nicaragua (córdoba), Costa Rica (colón). Many tourist areas accept USD. Learn to handle prices and light negotiation — especially at markets.",
      vocab: [
        { spanish: "¿Cuánto cuesta?", english: "How much does it cost?", pronunciation: "KWAHN-toh KWEHS-tah" },
        { spanish: "¿Cuánto es?", english: "How much is it?", pronunciation: "KWAHN-toh ehs" },
        { spanish: "el precio", english: "the price", pronunciation: "el PREH-syoh" },
        { spanish: "caro/a", english: "expensive", pronunciation: "KAH-roh" },
        { spanish: "barato/a", english: "cheap", pronunciation: "bah-RAH-toh" },
        { spanish: "el mercado", english: "market", pronunciation: "el mehr-KAH-doh" },
        { spanish: "la tienda", english: "store / shop", pronunciation: "lah TYEHN-dah" },
        { spanish: "el dinero / la plata", english: "money", pronunciation: "el dee-NEH-roh / lah PLAH-tah" },
        { spanish: "el cambio / el vuelto", english: "change (money back)", pronunciation: "el KAM-byoh / el VWEHL-toh" },
        { spanish: "en efectivo", english: "in cash", pronunciation: "en eh-fek-TEE-voh" },
        { spanish: "con tarjeta", english: "by card", pronunciation: "kon tar-HEH-tah" },
        { spanish: "comprar", english: "to buy", pronunciation: "kom-PRAR" },
        { spanish: "vender", english: "to sell", pronunciation: "ven-DER" },
        { spanish: "Me llevo esto.", english: "I'll take this.", pronunciation: "meh YEH-voh EHS-toh" },
        { spanish: "Solo estoy mirando.", english: "I'm just looking.", pronunciation: "SOH-loh ehs-TOY mee-RAN-doh" },
        { spanish: "¿Tiene algo más barato?", english: "Do you have something cheaper?", pronunciation: "TYEH-neh AL-goh mahs bah-RAH-toh" },
        { spanish: "¿Me hace un descuento?", english: "Can you give me a discount?", pronunciation: "meh AH-seh oon des-KWEHN-toh" },
        { spanish: "el recibo", english: "the receipt", pronunciation: "el reh-SEE-boh" },
        { spanish: "Está muy caro.", english: "It's very expensive.", pronunciation: "ehs-TAH MWEE KAH-roh" },
        { spanish: "¿Tiene en otro color?", english: "Do you have it in another color?", pronunciation: "TYEH-neh en OH-troh koh-LOR" },
      ],
      grammar: [
        {
          title: "Numbers 1–1000 (Essential for Prices)",
          explanation: "Key numbers: uno(1), dos(2), tres(3), cuatro(4), cinco(5), seis(6), siete(7), ocho(8), nueve(9), diez(10), veinte(20), treinta(30), cuarenta(40), cincuenta(50), cien(100), doscientos(200), quinientos(500), mil(1000). Compound: treinta y cinco = 35, doscientos cincuenta = 250.",
          examples: [
            { spanish: "Cuesta cuarenta y cinco.", english: "It costs forty-five." },
            { spanish: "Son cien quetzales.", english: "That's one hundred quetzales." },
            { spanish: "Le debo doscientos cincuenta.", english: "I owe you two hundred fifty." },
          ]
        },
        {
          title: "Tener (To Have) — Shopping Essential",
          explanation: "Tener is irregular: tengo (I have), tienes (you have), tiene (he/she/you formal has), tenemos (we have). Use it constantly: ¿Tiene...? = Do you have...? Tengo = I have. No tengo = I don't have.",
          examples: [
            { spanish: "¿Tiene talla mediana?", english: "Do you have a medium size?" },
            { spanish: "Tengo cien dólares.", english: "I have one hundred dollars." },
            { spanish: "No tienen tarjeta aquí.", english: "They don't accept cards here." },
          ]
        }
      ],
      phrases: [
        { spanish: "¿Dónde puedo cambiar dinero?", english: "Where can I exchange money?" },
        { spanish: "¿Aceptan dólares?", english: "Do you accept dollars?" },
        { spanish: "No traigo suficiente dinero.", english: "I don't have enough money on me." },
        { spanish: "¿Cuál es el tipo de cambio?", english: "What is the exchange rate?" },
        { spanish: "¿Tiene una bolsa, por favor?", english: "Do you have a bag, please?" },
        { spanish: "Voy a pensar.", english: "I'm going to think about it." },
        { spanish: "¿Es el precio fijo?", english: "Is the price fixed?" },
      ],
      dialogue: [
        { speaker: "Vendor", spanish: "Buenas, ¿qué busca?", english: "Hello, what are you looking for?" },
        { speaker: "You", spanish: "Solo estoy mirando. ¿Cuánto cuesta esta hamaca?", english: "Just looking. How much is this hammock?" },
        { speaker: "Vendor", spanish: "Son trescientos quetzales.", english: "It's 300 quetzales." },
        { speaker: "You", spanish: "Está un poco caro. ¿Me hace un descuento?", english: "It's a little expensive. Can you give me a discount?" },
        { speaker: "Vendor", spanish: "Le dejo en doscientos setenta. Es mi mejor precio.", english: "I'll leave it at 270. That's my best price." },
        { speaker: "You", spanish: "Está bien. Me la llevo. ¿Acepta tarjeta?", english: "Okay. I'll take it. Do you accept cards?" },
        { speaker: "Vendor", spanish: "No, solo efectivo.", english: "No, cash only." },
        { speaker: "You", spanish: "Aquí tiene trescientos. ¿Me da el vuelto?", english: "Here's three hundred. Can you give me change?" },
      ]
    },
    testScenario: "You're at an artisan market. A vendor approaches you selling handmade textiles. Browse, ask about prices, try to negotiate gently, and make a purchase paying in cash.",
    testSystemPrompt: `You are Lucia, a friendly artisan market vendor selling handmade textiles and crafts from the region.

The student is practicing Chapter 4: Shopping.

Prices: bolsa/bag 120-200, bufanda/scarf 80-150, hamaca/hammock 250-400. Cash only (US dollars or local currency at 1:7 ratio). Max 10% discount after some back-and-forth.

Rules:
- Use standard Spanish, no heavy regional slang
- Respond in Spanish with English in (parentheses) for new words
- Be friendly but a fair negotiator
- Correct grammar: ✗ Fix: [explanation] | ✓ [praise]
- Key grammar: tener conjugation, numbers, question formation
- After a purchase, thank them warmly and wish them a good trip`
  },
  {
    id: 5,
    title: "Activities, Nature & Emergencies",
    emoji: "🏔️",
    description: "Book tours, talk about nature and adventures, and handle basic emergency situations across Central America.",
    lesson: {
      title: "Activities, Nature & Emergencies",
      intro: "Central America is one of the world's best destinations for ecotourism: volcanoes, rainforests, ruins, and world-class beaches. You'll need Spanish to book tours, talk to guides, and — importantly — handle emergencies. The nearest hospital or clinic may be far away in rural areas.",
      vocab: [
        { spanish: "el volcán", english: "volcano", pronunciation: "el vol-KAN" },
        { spanish: "la selva / el bosque", english: "jungle / forest", pronunciation: "lah SEL-vah / el BOS-keh" },
        { spanish: "la cascada", english: "waterfall", pronunciation: "lah kas-KAH-dah" },
        { spanish: "el sendero", english: "trail / path", pronunciation: "el sen-DEH-roh" },
        { spanish: "el guía", english: "guide", pronunciation: "el GEE-ah" },
        { spanish: "la excursión / el tour", english: "excursion / tour", pronunciation: "lah eks-koor-SYOHN / el TOOR" },
        { spanish: "escalar / subir", english: "to climb / to go up", pronunciation: "ehs-kah-LAR / soo-BEER" },
        { spanish: "nadar", english: "to swim", pronunciation: "nah-DAR" },
        { spanish: "bucear", english: "to dive / snorkel", pronunciation: "boo-seh-AR" },
        { spanish: "¿Es seguro?", english: "Is it safe?", pronunciation: "ehs seh-GOO-roh" },
        { spanish: "el protector solar", english: "sunscreen", pronunciation: "el proh-tek-TOR soh-LAR" },
        { spanish: "el mosquito / el zancudo", english: "mosquito", pronunciation: "el mos-KEE-toh / el san-KOO-doh" },
        { spanish: "¡Auxilio! / ¡Socorro!", english: "Help!", pronunciation: "owk-SEE-lyoh / soh-KOH-roh" },
        { spanish: "Llame a la policía.", english: "Call the police.", pronunciation: "YAH-meh ah lah poh-lee-SEE-ah" },
        { spanish: "Necesito una ambulancia.", english: "I need an ambulance.", pronunciation: "neh-seh-SEE-toh OO-nah am-boo-LAN-syah" },
        { spanish: "Me duele...", english: "...hurts / I have pain in...", pronunciation: "meh DWEH-leh" },
        { spanish: "Estoy perdido/a.", english: "I'm lost. (m/f)", pronunciation: "ehs-TOY pehr-DEE-doh" },
        { spanish: "Me robaron.", english: "I was robbed.", pronunciation: "meh roh-BAH-ron" },
        { spanish: "la embajada", english: "the embassy", pronunciation: "lah em-bah-HAH-dah" },
        { spanish: "el hospital", english: "hospital", pronunciation: "el os-pee-TAL" },
        { spanish: "la farmacia", english: "pharmacy", pronunciation: "lah far-MAH-syah" },
        { spanish: "el seguro médico", english: "health insurance", pronunciation: "el seh-GOO-roh MEH-dee-koh" },
      ],
      grammar: [
        {
          title: "Poder (Can/To Be Able) — Essential Irregular Verb",
          explanation: "Poder is irregular: puedo (I can), puedes (you can), puede (he/she/you formal can), podemos (we can), pueden (they can). Use it constantly: ¿Puede ayudarme? = Can you help me?",
          examples: [
            { spanish: "¿Puedo nadar aquí?", english: "Can I swim here?" },
            { spanish: "¿Puede llamar a la policía?", english: "Can you call the police?" },
            { spanish: "No podemos subir hoy — hay lluvia.", english: "We can't go up today — it's raining." },
          ]
        },
        {
          title: "Me duele / Me duelen — Expressing Pain",
          explanation: "'Me duele' (singular) or 'me duelen' (plural) is how you express pain. Literally 'it hurts me'. The thing that hurts is the subject: 'me duele la cabeza' = my head hurts me. This is a reflexive construction — just memorize the pattern.",
          examples: [
            { spanish: "Me duele la cabeza.", english: "I have a headache. (My head hurts me.)" },
            { spanish: "Me duele el estómago.", english: "My stomach hurts." },
            { spanish: "Me duelen las piernas.", english: "My legs hurt. (plural — duelen)" },
            { spanish: "Me torci el tobillo.", english: "I twisted my ankle." },
          ]
        }
      ],
      phrases: [
        { spanish: "¿Cuánto cuesta el tour?", english: "How much does the tour cost?" },
        { spanish: "¿A qué hora empieza?", english: "What time does it start?" },
        { spanish: "¿Qué debo llevar?", english: "What should I bring?" },
        { spanish: "¿Hay guías que hablen inglés?", english: "Are there guides who speak English?" },
        { spanish: "¿Es difícil el camino?", english: "Is the path difficult?" },
        { spanish: "¿Dónde está el hospital más cercano?", english: "Where is the nearest hospital?" },
        { spanish: "Perdí mi pasaporte.", english: "I lost my passport." },
        { spanish: "¿Dónde está la embajada americana?", english: "Where is the American embassy?" },
      ],
      dialogue: [
        { speaker: "You", spanish: "Hola. ¿Tienen tours al volcán?", english: "Hi. Do you have tours to the volcano?" },
        { speaker: "Guide", spanish: "Sí, tenemos tours todos los días. ¿Para cuántas personas?", english: "Yes, we have tours every day. For how many people?" },
        { speaker: "You", spanish: "Para dos personas. ¿Cuánto cuesta?", english: "For two people. How much does it cost?" },
        { speaker: "Guide", spanish: "Son ochenta dólares por persona. Incluye transporte y guía.", english: "It's $80 per person. Includes transport and a guide." },
        { speaker: "You", spanish: "¿Es seguro? ¿Qué debo llevar?", english: "Is it safe? What should I bring?" },
        { speaker: "Guide", spanish: "Sí, es seguro. Necesita botas, agua, y protector solar.", english: "Yes, it's safe. You need boots, water, and sunscreen." },
        { speaker: "You", spanish: "Perfecto. Queremos hacer el tour mañana.", english: "Perfect. We want to do the tour tomorrow." },
        { speaker: "Guide", spanish: "Muy bien. Sale a las seis de la mañana.", english: "Very good. It leaves at 6 in the morning." },
      ]
    },
    testScenario: "You want to book a rainforest hiking tour with a local guide agency. Ask about available tours, prices, what to bring, safety, and confirm your booking for the next day.",
    testSystemPrompt: `You are Jorge, a tour guide at an ecotourism agency in Central America.

The student is practicing Chapter 5: Activities & Emergencies.

Tours available: rainforest hike ($45/person, 4 hrs), volcano tour ($80/person, full day), waterfall tour ($55/person, half day). All include guide and transport. Leave 6am daily. What to bring: boots/hiking shoes, water, sunscreen, insect repellent.

Rules:
- Use standard, clear Spanish — no heavy regional slang
- Respond in Spanish with English in (parentheses) for new vocabulary
- Include natural safety advice and practical tips
- Correct grammar: ✗ Fix: [explanation] | ✓ [praise]
- Key grammar: poder conjugation, me duele pattern, question words
- After booking, confirm details and wish them a good adventure`
  },
  {
    id: 6,
    title: "Making Friends & Social Spanish",
    emoji: "🤝",
    description: "Have real conversations, make plans, talk about yourself, and connect socially in Spanish.",
    lesson: {
      title: "Making Friends & Social Spanish",
      intro: "Once you have survival Spanish down, you can start having real conversations. Central Americans are warm and curious about foreigners. Questions about where you're from, your family, and your impressions of the country are universal icebreakers. This chapter bridges polite basics to real connection.",
      vocab: [
        { spanish: "¿De dónde es usted?", english: "Where are you from?", pronunciation: "deh DON-deh ehs oo-STED" },
        { spanish: "Soy de...", english: "I'm from...", pronunciation: "SOY deh" },
        { spanish: "¿A qué se dedica?", english: "What do you do (for work)?", pronunciation: "ah keh seh deh-DEE-kah" },
        { spanish: "Soy estudiante / maestro / médico", english: "I'm a student / teacher / doctor", pronunciation: "SOY ehs-too-DYAN-teh" },
        { spanish: "¿Le gusta...?", english: "Do you like...?", pronunciation: "leh GOO-stah" },
        { spanish: "Me gusta mucho.", english: "I like it a lot.", pronunciation: "meh GOO-stah MOO-choh" },
        { spanish: "No me gusta.", english: "I don't like it.", pronunciation: "noh meh GOO-stah" },
        { spanish: "Me encanta.", english: "I love it.", pronunciation: "meh en-KAN-tah" },
        { spanish: "¿Quiere tomar algo?", english: "Do you want to grab a drink?", pronunciation: "KYEH-reh toh-MAR AL-goh" },
        { spanish: "¿Vamos a...?", english: "Shall we go to...?", pronunciation: "VAH-mohs ah" },
        { spanish: "¿A qué hora nos vemos?", english: "What time do we meet?", pronunciation: "ah keh OH-rah nohs VEH-mohs" },
        { spanish: "¿Cuánto tiempo lleva aquí?", english: "How long have you been here?", pronunciation: "KWAHN-toh TYEM-poh YEH-vah ah-KEE" },
        { spanish: "Llevo... días / semanas", english: "I've been here... days / weeks", pronunciation: "YEH-voh... DEE-ahs / seh-MAH-nahs" },
        { spanish: "¿Qué le parece el país?", english: "What do you think of the country?", pronunciation: "keh leh pah-REH-seh el pah-EES" },
        { spanish: "Es increíble / hermoso / interesante", english: "It's incredible / beautiful / interesting", pronunciation: "ehs een-kreh-EE-bleh / ehr-MOH-soh" },
        { spanish: "¿Cuál es su número?", english: "What's your number?", pronunciation: "kwal ehs soo NOO-meh-roh" },
        { spanish: "¿Tiene WhatsApp?", english: "Do you have WhatsApp?", pronunciation: "TYEH-neh wats-AP", slang: true, slangNote: "WhatsApp is the primary messaging app across all of Central America — more important than any other contact method." },
        { spanish: "Con mucho gusto", english: "With pleasure / You're welcome", pronunciation: "kon MOO-choh GOO-stoh" },
        { spanish: "¡Qué bueno!", english: "How great! / That's great!", pronunciation: "keh BWEH-noh" },
        { spanish: "Fue un placer.", english: "It was a pleasure.", pronunciation: "fweh oon plah-SER" },
      ],
      grammar: [
        {
          title: "Gustar (To Like) — Backwards From English",
          explanation: "'Gustar' works opposite to English. Instead of 'I like X', Spanish says 'X pleases me' (X me gusta). The verb agrees with WHAT you like, not with you. If you like one thing: me gusta. If you like multiple things: me gustan.",
          examples: [
            { spanish: "Me gusta la comida.", english: "I like the food. (food pleases me)" },
            { spanish: "Me gustan los tacos.", english: "I like tacos. (tacos please me — plural)" },
            { spanish: "¿Te gusta el país?", english: "Do you like the country?" },
            { spanish: "Me encanta viajar.", english: "I love to travel. (traveling enchants me)" },
          ]
        },
        {
          title: "Llevar + Time (How Long You've Been Doing Something)",
          explanation: "'Llevar + time + gerund (-ando/-iendo)' expresses how long you've been doing something. Very common in conversation. 'Llevo tres días aquí' = I've been here for three days.",
          examples: [
            { spanish: "Llevo dos semanas en Guatemala.", english: "I've been in Guatemala for two weeks." },
            { spanish: "Llevo un año aprendiendo español.", english: "I've been learning Spanish for a year." },
            { spanish: "¿Cuánto tiempo llevas viajando?", english: "How long have you been traveling?" },
          ]
        }
      ],
      phrases: [
        { spanish: "¿Habla usted otro idioma?", english: "Do you speak another language?" },
        { spanish: "Estoy aprendiendo español.", english: "I'm learning Spanish." },
        { spanish: "¿Tiene recomendaciones para visitar?", english: "Do you have recommendations for visiting?" },
        { spanish: "¿Cuál es su lugar favorito aquí?", english: "What is your favorite place here?" },
        { spanish: "Fue un placer conocerle.", english: "It was a pleasure meeting you." },
        { spanish: "Espero que nos veamos pronto.", english: "I hope we see each other soon." },
        { spanish: "¿Puedo añadirle en WhatsApp?", english: "Can I add you on WhatsApp?" },
      ],
      dialogue: [
        { speaker: "Local", spanish: "¿De dónde es usted? Noto que es extranjero.", english: "Where are you from? I notice you're a foreigner." },
        { speaker: "You", spanish: "Soy de Canadá. Llevo una semana viajando por aquí.", english: "I'm from Canada. I've been traveling here for a week." },
        { speaker: "Local", spanish: "¡Bienvenido! ¿Le gusta el país?", english: "Welcome! Do you like the country?" },
        { speaker: "You", spanish: "Me encanta. La comida es increíble y la gente es muy amable.", english: "I love it. The food is incredible and the people are very friendly." },
        { speaker: "Local", spanish: "¡Qué bueno! ¿Ha visitado el lago?", english: "How great! Have you visited the lake?" },
        { speaker: "You", spanish: "No todavía. ¿Lo recomienda usted?", english: "Not yet. Do you recommend it?" },
        { speaker: "Local", spanish: "Absolutamente. Es hermosísimo. Vaya el martes — hay menos turistas.", english: "Absolutely. It's gorgeous. Go on Tuesday — fewer tourists." },
        { speaker: "You", spanish: "Perfecto. Gracias por el consejo. Fue un placer.", english: "Perfect. Thanks for the advice. It was a pleasure." },
        { speaker: "Local", spanish: "Con mucho gusto. ¡Buen viaje!", english: "With pleasure. Have a good trip!" },
      ]
    },
    testScenario: "You're at a café in a Central American city and you start chatting with a local named Ana who is curious about where you're from and your travels. Have a friendly conversation, share your impressions, and exchange contact info.",
    testSystemPrompt: `You are Ana, a friendly local in her 30s at a café in Central America. You're curious about travelers and enjoy practicing your basic English — but you prefer Spanish.

The student is practicing Chapter 6: Social Spanish.

Rules:
- Use standard, conversational Spanish — slightly more natural/flowing than earlier chapters
- Respond in Spanish, offer English translations only for genuinely new vocabulary
- Be genuinely warm and curious — ask follow-up questions
- React naturally to what they share about themselves
- Correct grammar: ✗ Fix: [explanation] | ✓ enthusiastic praise when they get it right
- Key grammar: gustar construction, llevar + time, ser vs. estar
- Topics: where they're from, travel impressions, recommendations, WhatsApp exchange
- End by warmly exchanging WhatsApp and wishing them a great trip`
  },
];
