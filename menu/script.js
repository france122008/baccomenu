/* --- DATI BACCO BAR MENU (COMPLETO CON GELATERIA) --- */

// SVG Bandiere (Base64)
const flags = {
    it: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'%3E%3Cpath fill='%23009246' d='M0 0h1v2H0z'/%3E%3Cpath fill='%23fff' d='M1 0h1v2H1z'/%3E%3Cpath fill='%23ce2b37' d='M2 0h1v2H2z'/%3E%3C/svg%3E",
    en: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3CclipPath id='a'%3E%3Cpath d='M0 0v30h60V0z'/%3E%3C/clipPath%3E%3Cg clip-path='url(%23a)'%3E%3Cpath d='M0 0v30h60V0z' fill='%23012169'/%3E%3Cpath d='M0 0l60 30m0-30L0 30' stroke='%23fff' stroke-width='6'/%3E%3Cpath d='M0 0l60 30m0-30L0 30' stroke='%23c8102e' stroke-width='4'/%3E%3Cpath d='M30 0v30M0 15h60' stroke='%23fff' stroke-width='10'/%3E%3Cpath d='M30 0v30M0 15h60' stroke='%23c8102e' stroke-width='6'/%3E%3C/g%3E%3C/svg%3E",
    de: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 3'%3E%3Cpath fill='%23000' d='M0 0h5v1H0z'/%3E%3Cpath fill='%23d00' d='M0 1h5v1H0z'/%3E%3Cpath fill='%23ffce00' d='M0 2h5v1H0z'/%3E%3C/svg%3E",
    fr: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'%3E%3Cpath fill='%23002395' d='M0 0h1v2H0z'/%3E%3Cpath fill='%23fff' d='M1 0h1v2H1z'/%3E%3Cpath fill='%23ed2939' d='M2 0h1v2H2z'/%3E%3C/svg%3E",
    es: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 750 500'%3E%3Cpath fill='%23c60b1e' d='M0 0h750v500H0z'/%3E%3Cpath fill='%23ffc400' d='M0 125h750v250H0z'/%3E%3C/svg%3E"
};

const uiTranslations = {
    it: { brand: "BACCO BAR", footer: "© 2026 Bacco Bar - L'Officina del Gusto", ingredients: "INGREDIENTI", allergens: "ALLERGENI", addToCart: "Aggiungi", yourOrder: "La tua Comanda", total: "Totale:", emptyCart: "Il carrello è vuoto", cartNote: "Mostra al cameriere per ordinare.", reviewBtn: "Lasciaci una recensione" },
    en: { brand: "BACCO BAR", footer: "© 2026 Bacco Bar - Workshop of Taste", ingredients: "INGREDIENTS", allergens: "ALLERGENS", addToCart: "Add", yourOrder: "Your Order", total: "Total:", emptyCart: "Cart is empty", cartNote: "Show to waiter to order.", reviewBtn: "Leave us a review" },
    de: { brand: "BACCO BAR", footer: "© 2026 Bacco Bar - Werkstatt des Geschmacks", ingredients: "ZUTATEN", allergens: "ALLERGENE", addToCart: "Hinzufügen", yourOrder: "Bestellung", total: "Gesamt:", emptyCart: "Warenkorb leer", cartNote: "Dem Kellner zeigen.", reviewBtn: "Bewertung abgeben" },
    fr: { brand: "BACCO BAR", footer: "© 2026 Bacco Bar - L'Atelier du Goût", ingredients: "INGRÉDIENTS", allergens: "ALLERGÈNES", addToCart: "Ajouter", yourOrder: "Votre Commande", total: "Total:", emptyCart: "Panier vide", cartNote: "Montrer au serveur.", reviewBtn: "Laissez un avis" },
    es: { brand: "BACCO BAR", footer: "© 2026 Bacco Bar - El Taller del Sabor", ingredients: "INGREDIENTES", allergens: "ALÉRGENOS", addToCart: "Añadir", yourOrder: "Su Pedido", total: "Total:", emptyCart: "Carrito vacío", cartNote: "Mostrar al camarero.", reviewBtn: "Danos tu opinión" }
};

// Categorie Aggiornate (Aggiunta Gelateria)
const categories = [
    { id: "caffe", label: { it: "Caffetteria", en: "Coffee", de: "Kaffee", fr: "Café", es: "Cafetería" } },
    { id: "gelati", label: { it: "Gelateria", en: "Ice Cream", de: "Eiscreme", fr: "Glaces", es: "Helados" } },
    { id: "forno", label: { it: "Forno & Salato", en: "Bakery", de: "Bäckerei", fr: "Boulangerie", es: "Panadería" } },
    { id: "panini", label: { it: "Panini", en: "Sandwiches", de: "Sandwiches", fr: "Sandwiches", es: "Bocadillos" } },
    { id: "cucina", label: { it: "Cucina", en: "Kitchen", de: "Küche", fr: "Cuisine", es: "Cocina" } },
    { id: "bevande", label: { it: "Bevande", en: "Drinks", de: "Getränke", fr: "Boissons", es: "Bebidas" } },
    { id: "cocktails", label: { it: "Cocktails", en: "Cocktails", de: "Cocktails", fr: "Cocktails", es: "Cócteles" } },
    { id: "gin", label: { it: "Gin Tonic", en: "Gin Tonic", de: "Gin Tonic", fr: "Gin Tonic", es: "Gin Tonic" } },
    { id: "vini", label: { it: "Vini & Birre", en: "Wine & Beer", de: "Wein & Bier", fr: "Vins & Bières", es: "Vinos y Cervezas" } }
];

const allergenTrans = { 
    "Solfiti": { en: "Sulfites", de: "Sulfite", fr: "Sulfites", es: "Sulfitos" },
    "Glutine": { en: "Gluten", de: "Gluten", fr: "Gluten", es: "Gluten" },
    "Latte": { en: "Milk", de: "Milch", fr: "Lait", es: "Leche" },
    "Uova": { en: "Eggs", de: "Eier", fr: "Œufs", es: "Huevos" },
    "Frutta a guscio": { en: "Nuts", de: "Nüsse", fr: "Fruits à coque", es: "Frutos secos" },
    "Pesce": { en: "Fish", de: "Fisch", fr: "Poisson", es: "Pescado" },
    "Sesamo": { en: "Sesame", de: "Sesam", fr: "Sésame", es:"Sésamo" }
};

const imgBase = "https://placehold.co/400x300/922B3E/F4F1E8?text=";

const products = [
    // --- CAFFETTERIA ---
    {
        id: "espresso", categoryId: "caffe", price: 1.50, img: imgBase + "Espresso",
        name: { it: "Espresso Izzo", en: "Izzo Espresso", de: "Izzo Espresso", fr: "Expresso Izzo", es: "Espresso Izzo" },
        desc: { it: "La miscela napoletana tostata a legna. Intensa, cremosa.", en: "Wood-roasted Neapolitan blend. Intense, creamy.", de: "Holzgeröstete neapolitanische Mischung.", fr: "Mélange napolitain torréfié au feu de bois.", es: "Mezcla napolitana tostada a la leña." },
        ingredients: { it: [], en: [], de: [], fr: [], es: [] }, allergens: []
    },
    {
        id: "macchiato", categoryId: "caffe", price: 1.60, img: imgBase + "Macchiato",
        name: { it: "Macchiato 'L'Intruso'", en: "Macchiato", de: "Macchiato", fr: "Noisette", es: "Cortado" },
        desc: { it: "Un goccio di latte nella nostra miscela scura.", en: "A drop of milk in our dark blend.", de: "Ein Schuss Milch in unserer dunklen Mischung.", fr: "Une goutte de lait dans notre café noir.", es: "Una gota de leche en nuestra mezcla oscura." },
        ingredients: { it: [], en: [], de: [], fr: [], es: [] }, allergens: ["Latte"]
    },
    {
        id: "deca", categoryId: "caffe", price: 1.60, img: imgBase + "Deca",
        name: { it: "Il Deca del Borgo", en: "Decaf", de: "Entkoffeiniert", fr: "Décaféiné", es: "Descafeinado" },
        desc: { it: "Tutto il gusto Izzo, zero caffeina. Per chi vuole il bis.", en: "Izzo taste, zero caffeine.", de: "Izzo Geschmack, ohne Koffein.", fr: "Goût Izzo, sans caféine.", es: "Sabor Izzo, cero cafeína." },
        ingredients: { it: [], en: [], de: [], fr: [], es: [] }, allergens: []
    },
    {
        id: "americano", categoryId: "caffe", price: 2.00, img: imgBase + "Americano",
        name: { it: "Americano 'II Viandante'", en: "Americano", de: "Americano", fr: "Café Allongé", es: "Americano" },
        desc: { it: "Tazza lunga, per chi vuole godersi la piazza con calma.", en: "Long cup to enjoy the square.", de: "Große Tasse zum Genießen.", fr: "Café long.", es: "Taza larga." },
        ingredients: { it: [], en: [], de: [], fr: [], es: [] }, allergens: []
    },
    {
        id: "latte_macchiato", categoryId: "caffe", price: 2.50, img: imgBase + "Latte+Macchiato",
        name: { it: "Latte Macchiato 'Nuvola'", en: "Latte Macchiato", de: "Latte Macchiato", fr: "Latte Macchiato", es: "Latte Macchiato" },
        desc: { it: "Tanto latte, tanta schiuma, tanta gioia.", en: "Lots of milk, lots of foam.", de: "Viel Milch, viel Schaum.", fr: "Beaucoup de lait, beaucoup de mousse.", es: "Mucha leche, mucha espuma." },
        ingredients: { it: [], en: [], de: [], fr: [], es: [] }, allergens: ["Latte"]
    },
    {
        id: "marocchino", categoryId: "caffe", price: 2.50, img: imgBase + "Marocchino",
        name: { it: "Marocchino Industrial", en: "Marocchino", de: "Marocchino", fr: "Marocchino", es: "Marocchino" },
        desc: { it: "Cacao, latte e la spinta del caffè. Piccolo ma cattivo.", en: "Cocoa, milk and espresso.", de: "Kakao, Milch und Espresso.", fr: "Cacao, lait et expresso.", es: "Cacao, leche y espresso." },
        ingredients: { it: [], en: [], de: [], fr: [], es: [] }, allergens: ["Latte"]
    },
    {
        id: "shakerato", categoryId: "caffe", price: 3.50, img: imgBase + "Shakerato",
        name: { it: "Caffè Shakerato 'Bacco'", en: "Shakerato Coffee", de: "Shakerato Kaffee", fr: "Café Shakerato", es: "Café Shakerato" },
        desc: { it: "Ghiaccio e olio di gomito. Il nostro modo di battere il caldo.", en: "Ice and elbow grease. Beats the heat.", de: "Eis und Ellbogenschmalz.", fr: "Glaçons et huile de coude.", es: "Hielo y esfuerzo." },
        ingredients: { it: [], en: [], de: [], fr: [], es: [] }, allergens: []
    },
    {
        id: "ginseng", categoryId: "caffe", price: 2.00, img: imgBase + "Ginseng",
        name: { it: "Caffè al Ginseng", en: "Ginseng Coffee", de: "Ginseng Kaffee", fr: "Café au Ginseng", es: "Café al Ginseng" },
        desc: { it: "Per chi ha bisogno di una marcia in più e dolcezza.", en: "For an extra gear and sweetness.", de: "Für einen extra Gang und Süße.", fr: "Pour une vitesse supérieure et de la douceur.", es: "Para una marcha más y dulzura." },
        ingredients: { it: [], en: [], de: [], fr: [], es: [] }, allergens: ["Latte"]
    },
    {
        id: "orzo", categoryId: "caffe", price: 1.80, img: imgBase + "Orzo",
        name: { it: "Caffè d'Orzo", en: "Barley Coffee", de: "Gerstenkaffee", fr: "Café d'Orge", es: "Café de Cebada" },
        desc: { it: "Sano, buono e senza pensieri.", en: "Healthy, good and carefree.", de: "Gesund, gut und unbeschwert.", fr: "Sain, bon et sans soucis.", es: "Sano, bueno y sin preocupaciones." },
        ingredients: { it: [], en: [], de: [], fr: [], es: [] }, allergens: ["Glutine"]
    },

    // --- GELATERIA ---
    {
        id: "cono_piccolo", categoryId: "gelati", price: 3.00, img: imgBase + "Cono+Piccolo",
        name: { it: "Cono Piccolo", en: "Small Cone", de: "Kleine Waffel", fr: "Petit Cône", es: "Cono Pequeño" },
        desc: { it: "⚠️ ATTENZIONE: I gelati vanno scelti e ritirati all'interno del bar al banco.", en: "⚠️ ATTENTION: Ice cream must be chosen and collected inside at the counter.", de: "⚠️ ACHTUNG: Eis muss drinnen an der Theke ausgewählt und abgeholt werden.", fr: "⚠️ ATTENTION : Les glaces doivent être choisies et récupérées à l'intérieur au comptoir.", es: "⚠️ ATENCIÓN: Los helados deben elegirse y recogerse en el interior de la barra." },
        ingredients: { it: [], en: [], de: [], fr: [], es: [] }, allergens: ["Latte", "Glutine"]
    },
    {
        id: "cono_medio", categoryId: "gelati", price: 3.50, img: imgBase + "Cono+Medio",
        name: { it: "Cono Medio", en: "Medium Cone", de: "Mittlere Waffel", fr: "Cône Moyen", es: "Cono Mediano" },
        desc: { it: "⚠️ ATTENZIONE: I gelati vanno scelti e ritirati all'interno del bar al banco.", en: "⚠️ ATTENTION: Ice cream must be chosen and collected inside at the counter.", de: "⚠️ ACHTUNG: Eis muss drinnen an der Theke ausgewählt und abgeholt werden.", fr: "⚠️ ATTENTION : Les glaces doivent être choisies et récupérées à l'intérieur au comptoir.", es: "⚠️ ATENCIÓN: Los helados deben elegirse y recogerse en el interior de la barra." },
        ingredients: { it: [], en: [], de: [], fr: [], es: [] }, allergens: ["Latte", "Glutine"]
    },
    {
        id: "cono_grande", categoryId: "gelati", price: 4.00, img: imgBase + "Cono+Grande",
        name: { it: "Cono Grande", en: "Large Cone", de: "Große Waffel", fr: "Grand Cône", es: "Cono Grande" },
        desc: { it: "⚠️ ATTENZIONE: I gelati vanno scelti e ritirati all'interno del bar al banco.", en: "⚠️ ATTENTION: Ice cream must be chosen and collected inside at the counter.", de: "⚠️ ACHTUNG: Eis muss drinnen an der Theke ausgewählt und abgeholt werden.", fr: "⚠️ ATTENTION : Les glaces doivent être choisies et récupérées à l'intérieur au comptoir.", es: "⚠️ ATENCIÓN: Los helados deben elegirse y recogerse en el interior de la barra." },
        ingredients: { it: [], en: [], de: [], fr: [], es: [] }, allergens: ["Latte", "Glutine"]
    },
    {
        id: "coppetta_piccola", categoryId: "gelati", price: 3.00, img: imgBase + "Coppetta+Piccola",
        name: { it: "Coppetta Piccola", en: "Small Cup", de: "Kleiner Becher", fr: "Petite Coupe", es: "Tarrina Pequeña" },
        desc: { it: "⚠️ ATTENZIONE: I gelati vanno scelti e ritirati all'interno del bar al banco.", en: "⚠️ ATTENTION: Ice cream must be chosen and collected inside at the counter.", de: "⚠️ ACHTUNG: Eis muss drinnen an der Theke ausgewählt und abgeholt werden.", fr: "⚠️ ATTENTION : Les glaces doivent être choisies et récupérées à l'intérieur au comptoir.", es: "⚠️ ATENCIÓN: Los helados deben elegirse y recogerse en el interior de la barra." },
        ingredients: { it: [], en: [], de: [], fr: [], es: [] }, allergens: ["Latte"]
    },
    {
        id: "coppetta_media", categoryId: "gelati", price: 3.50, img: imgBase + "Coppetta+Media",
        name: { it: "Coppetta Media", en: "Medium Cup", de: "Mittlerer Becher", fr: "Coupe Moyenne", es: "Tarrina Mediana" },
        desc: { it: "⚠️ ATTENZIONE: I gelati vanno scelti e ritirati all'interno del bar al banco.", en: "⚠️ ATTENTION: Ice cream must be chosen and collected inside at the counter.", de: "⚠️ ACHTUNG: Eis muss drinnen an der Theke ausgewählt und abgeholt werden.", fr: "⚠️ ATTENTION : Les glaces doivent être choisies et récupérées à l'intérieur au comptoir.", es: "⚠️ ATENCIÓN: Los helados deben elegirse y recogerse en el interior de la barra." },
        ingredients: { it: [], en: [], de: [], fr: [], es: [] }, allergens: ["Latte"]
    },
    {
        id: "coppetta_grande", categoryId: "gelati", price: 4.00, img: imgBase + "Coppetta+Grande",
        name: { it: "Coppetta Grande", en: "Large Cup", de: "Großer Becher", fr: "Grande Coupe", es: "Tarrina Grande" },
        desc: { it: "⚠️ ATTENZIONE: I gelati vanno scelti e ritirati all'interno del bar al banco.", en: "⚠️ ATTENTION: Ice cream must be chosen and collected inside at the counter.", de: "⚠️ ACHTUNG: Eis muss drinnen an der Theke ausgewählt und abgeholt werden.", fr: "⚠️ ATTENTION : Les glaces doivent être choisies et récupérées à l'intérieur au comptoir.", es: "⚠️ ATENCIÓN: Los helados deben elegirse y recogerse en el interior de la barra." },
        ingredients: { it: [], en: [], de: [], fr: [], es: [] }, allergens: ["Latte"]
    },
    {
        id: "frappe", categoryId: "gelati", price: 4.50, img: imgBase + "Frappe",
        name: { it: "Frappè al Gelato", en: "Milkshake", de: "Milchshake", fr: "Milk-shake", es: "Batido de Helado" },
        desc: { it: "Fresco e cremoso. ⚠️ ATTENZIONE: Da ordinare all'interno del bar scegliendo il gusto.", en: "Fresh and creamy. ⚠️ ATTENTION: Order inside choosing your flavor.", de: "Frisch und cremig. ⚠️ ACHTUNG: Drinnen bestellen und Geschmack wählen.", fr: "Frais et crémeux. ⚠️ ATTENTION : Commandez à l'intérieur en choisissant votre parfum.", es: "Fresco y cremoso. ⚠️ ATENCIÓN: Pida en el interior eligiendo su sabor." },
        ingredients: { it: ["Latte", "Gelato Artigianale"], en: ["Milk", "Artisanal Ice Cream"], de: ["Milch", "Handwerkliches Eis"], fr: ["Lait", "Glace Artisanale"], es: ["Leche", "Helado Artesanal"] }, allergens: ["Latte"]
    },
    {
        id: "affogato", categoryId: "gelati", price: 4.00, img: imgBase + "Affogato",
        name: { it: "Affogato al Caffè", en: "Coffee Affogato", de: "Kaffee Affogato", fr: "Affogato au Café", es: "Affogato de Café" },
        desc: { it: "Gelato affogato nell'espresso caldo. ⚠️ ATTENZIONE: Da ordinare all'interno del bar.", en: "Ice cream drowned in hot espresso. ⚠️ ATTENTION: Order inside.", de: "Eis in heißem Espresso ertränkt. ⚠️ ACHTUNG: Drinnen bestellen.", fr: "Glace noyée dans un expresso chaud. ⚠️ ATTENTION : Commandez à l'intérieur.", es: "Helado ahogado en espresso caliente. ⚠️ ATENCIÓN: Pida en el interior." },
        ingredients: { it: ["Gelato", "Caffè Espresso"], en: ["Ice Cream", "Espresso"], de: ["Eis", "Espresso"], fr: ["Glace", "Expresso"], es: ["Helado", "Espresso"] }, allergens: ["Latte"]
    },

    // --- FORNO ---
    {
        id: "cornetto_forno", categoryId: "forno", price: 1.50, img: imgBase + "Cornetto",
        name: { it: "Cornetto 'Sfornato ora'", en: "Fresh Croissant", de: "Frisches Croissant", fr: "Croissant Frais", es: "Croissant Fresco" },
        desc: { it: "Vuoto o farcito al momento. Semplice, croccante, essenziale.", en: "Plain or freshly filled.", de: "Natur oder frisch gefüllt.", fr: "Nature ou fourré à la minute.", es: "Normal o relleno al momento." },
        ingredients: { it: [], en: [], de: [], fr: [], es: [] }, allergens: ["Glutine", "Latte", "Uova"]
    },
    {
        id: "schiaccia", categoryId: "forno", price: 3.00, img: imgBase + "Schiaccia",
        name: { it: "Schiaccia Campigliese", en: "Campigliese Flatbread", de: "Campigliese Fladenbrot", fr: "Fougasse Campigliese", es: "Focaccia Campigliese" },
        desc: { it: "La leggenda del borgo. Se non la provi, non sei mai stato a Campiglia.", en: "The legend of the village.", de: "Die Legende des Dorfes.", fr: "La légende du village.", es: "La leyenda del pueblo." },
        ingredients: { it: [], en: [], de: [], fr: [], es: [] }, allergens: ["Glutine"]
    },
    {
        id: "budino", categoryId: "forno", price: 2.50, img: imgBase + "Budino",
        name: { it: "Budino di Riso 'Tradizione'", en: "Rice Pudding Tart", de: "Reispudding", fr: "Tartelette au Riz", es: "Pastel de Arroz" },
        desc: { it: "Un classico toscano, fatto come Dio comanda.", en: "A Tuscan classic.", de: "Ein toskanischer Klassiker.", fr: "Un classique toscan.", es: "Un clásico toscano." },
        ingredients: { it: [], en: [], de: [], fr: [], es: [] }, allergens: ["Glutine", "Latte", "Uova"]
    },
    {
        id: "pasticciotto", categoryId: "forno", price: 2.50, img: imgBase + "Pasticciotto",
        name: { it: "Pasticciotto del Bacco", en: "Pasticciotto", de: "Pasticciotto", fr: "Pasticciotto", es: "Pasticciotto" },
        desc: { it: "Un cuore morbido che ti farà iniziare la giornata col sorriso.", en: "Soft heart pastry.", de: "Weiches Herzgebäck.", fr: "Pâtisserie au cœur tendre.", es: "Pastel de corazón tierno." },
        ingredients: { it: [], en: [], de: [], fr: [], es: [] }, allergens: ["Glutine", "Latte", "Uova"]
    },
    {
        id: "torte", categoryId: "forno", price: 4.00, img: imgBase + "Torte",
        name: { it: "Le Torte della Casa", en: "Homemade Cakes", de: "Hausgemachte Kuchen", fr: "Gâteaux Maison", es: "Tartas Caseras" },
        desc: { it: "Ogni giorno una sorpresa diversa. Chiedi al banco la follia del giorno!", en: "Ask for today's cake!", de: "Fragen Sie nach dem Kuchen des Tages!", fr: "Demandez le gâteau du jour!", es: "¡Pregunte por la tarta del día!" },
        ingredients: { it: [], en: [], de: [], fr: [], es: [] }, allergens: ["Glutine", "Latte", "Uova"]
    },
    {
        id: "glutenfree", categoryId: "forno", price: 4.50, img: imgBase + "Gluten+Free",
        name: { it: "Dolcezza Zero Glutine", en: "Gluten Free Sweets", de: "Glutenfreie Süßigkeiten", fr: "Douceurs Sans Gluten", es: "Dulces Sin Gluten" },
        desc: { it: "Selezione di torte e prodotti per il massimo gusto senza compromessi.", en: "Selection of GF cakes.", de: "Auswahl an GF Kuchen.", fr: "Sélection de gâteaux sans gluten.", es: "Selección de tartas sin gluten." },
        ingredients: { it: [], en: [], de: [], fr: [], es: [] }, allergens: ["Latte", "Uova"]
    },
    {
        id: "toast", categoryId: "forno", price: 4.50, img: imgBase + "Toast",
        name: { it: "Toast 'Industrial'", en: "Toast", de: "Toast", fr: "Croque-Monsieur", es: "Sándwich Mixto" },
        desc: { it: "Pane tostato, prosciutto scelto e formaggio filante. Solo sostanza.", en: "Toasted bread, ham, melted cheese.", de: "Getoastetes Brot, Schinken, Käse.", fr: "Pain grillé, jambon, fromage.", es: "Pan tostado, jamón, queso." },
        ingredients: { it: ["Prosciutto", "Formaggio"], en: ["Ham", "Cheese"], de: ["Schinken", "Käse"], fr: ["Jambon", "Fromage"], es: ["Jamón", "Queso"] }, allergens: ["Glutine", "Latte"]
    },
    {
        id: "cornetto_salato", categoryId: "forno", price: 5.00, img: imgBase + "Cornetto+Sal",
        name: { it: "Cornetto Salato Gourmet", en: "Savory Croissant", de: "Herzhaftes Croissant", fr: "Croissant Salé", es: "Croissant Salado" },
        desc: { it: "Brioche salata farcita con ingredienti freschi. Provalo con il crudo toscano!", en: "Stuffed with fresh ingredients.", de: "Gefüllt mit frischen Zutaten.", fr: "Fourré d'ingrédients frais.", es: "Relleno de ingredientes frescos." },
        ingredients: { it: [], en: [], de: [], fr: [], es: [] }, allergens: ["Glutine", "Latte", "Uova"]
    },

    // --- PANINI ---
    {
        id: "ghibellino", categoryId: "panini", price: 7.00, img: imgBase + "Ghibellino",
        name: { it: "Il Ghibellino", en: "The Ghibellino", de: "Der Ghibellino", fr: "Le Ghibellino", es: "El Ghibellino" },
        desc: { it: "Il classico intramontabile.", en: "The timeless classic.", de: "Der zeitlose Klassiker.", fr: "Le classique intemporel.", es: "El clásico atemporal." },
        ingredients: { it: ["Prosciutto Toscano DOP", "Pecorino", "Crema carciofi"], en: ["Tuscan Ham", "Pecorino", "Artichoke cream"], de: ["Toskanischer Schinken", "Pecorino", "Artischockencreme"], fr: ["Jambon toscan", "Pecorino", "Crème d'artichaut"], es: ["Jamón toscano", "Pecorino", "Crema de alcachofa"] }, allergens: ["Glutine", "Latte"]
    },
    {
        id: "etrusco", categoryId: "panini", price: 7.00, img: imgBase + "Etrusco",
        name: { it: "L'Etrusco", en: "The Etruscan", de: "Der Etrusker", fr: "L'Étrusque", es: "El Etrusco" },
        desc: { it: "Sapori intensi.", en: "Intense flavors.", de: "Intensive Aromen.", fr: "Saveurs intenses.", es: "Sabores intensos." },
        ingredients: { it: ["Finocchiona IGP", "Formaggio fresco", "Melanzane sott'olio"], en: ["Finocchiona", "Fresh cheese", "Eggplants"], de: ["Finocchiona", "Frischkäse", "Auberginen"], fr: ["Finocchiona", "Fromage frais", "Aubergines"], es: ["Finocchiona", "Queso fresco", "Berenjenas"] }, allergens: ["Glutine", "Latte"]
    },
    {
        id: "bacco_piazza", categoryId: "panini", price: 8.00, img: imgBase + "Bacco+Piazza",
        name: { it: "Il Bacco in Piazza", en: "Bacco in Square", de: "Bacco auf dem Platz", fr: "Bacco sur la Place", es: "Bacco en la Plaza" },
        desc: { it: "Per chi vuole esagerare.", en: "For those who want to overdo it.", de: "Für die, die übertreiben wollen.", fr: "Pour ceux qui veulent exagérer.", es: "Para los que quieren exagerar." },
        ingredients: { it: ["Mortadella", "Stracciatella bufala", "Pistacchi"], en: ["Mortadella", "Stracciatella", "Pistachios"], de: ["Mortadella", "Stracciatella", "Pistazien"], fr: ["Mortadelle", "Stracciatella", "Pistaches"], es: ["Mortadela", "Stracciatella", "Pistachos"] }, allergens: ["Glutine", "Latte", "Frutta a guscio"]
    },
    {
        id: "minerario", categoryId: "panini", price: 7.50, img: imgBase + "Minerario",
        name: { it: "Il Minerario", en: "The Miner", de: "Der Bergmann", fr: "Le Mineur", es: "El Minero" },
        desc: { it: "Salsiccia toscana, stracchino filante e verdure spadellate.", en: "Sausage, stracchino, vegetables.", de: "Wurst, Stracchino, Gemüse.", fr: "Saucisse, stracchino, légumes.", es: "Salchicha, stracchino, verduras." },
        ingredients: { it: ["Salsiccia", "Stracchino", "Verdure"], en: ["Sausage", "Stracchino", "Veggies"], de: ["Wurst", "Stracchino", "Gemüse"], fr: ["Saucisse", "Stracchino", "Légumes"], es: ["Salchicha", "Stracchino", "Verduras"] }, allergens: ["Glutine", "Latte"]
    },
    {
        id: "ortolano", categoryId: "panini", price: 6.50, img: imgBase + "Ortolano",
        name: { it: "L'Ortolano (Veg)", en: "The Greengrocer (Veg)", de: "Der Gemüsehändler", fr: "Le Maraîcher", es: "El Hortelano" },
        desc: { it: "Hummus di ceci, verdure grigliate e pomodori secchi.", en: "Hummus, grilled veggies, sun-dried tomatoes.", de: "Hummus, Grillgemüse, getrocknete Tomaten.", fr: "Houmous, légumes grillés, tomates séchées.", es: "Hummus, verduras a la parrilla, tomates secos." },
        ingredients: { it: ["Hummus", "Verdure", "Pomodori secchi"], en: ["Hummus", "Veggies", "Tomatoes"], de: ["Hummus", "Gemüse", "Tomaten"], fr: ["Houmous", "Légumes", "Tomates"], es: ["Hummus", "Verduras", "Tomates"] }, allergens: ["Glutine", "Sesamo"]
    },
    {
        id: "rocca", categoryId: "panini", price: 7.50, img: imgBase + "Rocca",
        name: { it: "Il Rocca Silvana", en: "The Rocca Silvana", de: "Der Rocca Silvana", fr: "Le Rocca Silvana", es: "El Rocca Silvana" },
        desc: { it: "Capocollo, pecorino e crema di olive. Un sapore deciso e antico.", en: "Capocollo, pecorino, olive cream.", de: "Capocollo, Pecorino, Olivencreme.", fr: "Capocollo, pecorino, crème d'olives.", es: "Capocollo, pecorino, crema de aceitunas." },
        ingredients: { it: ["Capocollo", "Pecorino", "Crema olive"], en: ["Capocollo", "Pecorino", "Olive cream"], de: ["Capocollo", "Pecorino", "Olivencreme"], fr: ["Capocollo", "Pecorino", "Crème d'olives"], es: ["Capocollo", "Pecorino", "Crema de aceitunas"] }, allergens: ["Glutine", "Latte"]
    },

    // --- CUCINA E INSALATE ---
    {
        id: "tagliere", categoryId: "cucina", price: 16.00, img: imgBase + "Tagliere",
        name: { it: "Tagliere Bacco", en: "Bacco Platter", de: "Bacco Platte", fr: "Planche Bacco", es: "Tabla Bacco" },
        desc: { it: "Il meglio dei salumi e formaggi servito con crostini e miele.", en: "Cold cuts, cheese, croutons.", de: "Aufschnitt, Käse, Croutons.", fr: "Charcuterie, fromages, croûtons.", es: "Embutidos, quesos, picatostes." },
        ingredients: { it: ["Salumi", "Formaggi", "Miele", "Crostini"], en: ["Cold cuts", "Cheese", "Honey", "Bread"], de: ["Aufschnitt", "Käse", "Honig", "Brot"], fr: ["Charcuterie", "Fromage", "Miel", "Pain"], es: ["Embutidos", "Queso", "Miel", "Pan"] }, allergens: ["Glutine", "Latte"]
    },
    {
        id: "caprese", categoryId: "cucina", price: 9.00, img: imgBase + "Caprese",
        name: { it: "La Caprese del Borgo", en: "Village Caprese", de: "Dorf Caprese", fr: "Caprese du Village", es: "Caprese del Pueblo" },
        desc: { it: "Mozzarella bufala, pomodori km zero, origano, olio buono.", en: "Buffalo mozzarella, local tomatoes.", de: "Büffelmozzarella, lokale Tomaten.", fr: "Mozzarella de bufflonne, tomates locales.", es: "Mozzarella de búfala, tomates locales." },
        ingredients: { it: ["Mozzarella", "Pomodori"], en: ["Mozzarella", "Tomatoes"], de: ["Mozzarella", "Tomaten"], fr: ["Mozzarella", "Tomates"], es: ["Mozzarella", "Tomates"] }, allergens: ["Latte"]
    },
    {
        id: "campigliese_insalata", categoryId: "cucina", price: 10.00, img: imgBase + "Ins.+Campigliese",
        name: { it: "La Campigliese (Insalatona)", en: "Campigliese Salad", de: "Campigliese Salat", fr: "Salade Campigliese", es: "Ensalada Campigliese" },
        desc: { it: "Misticanza, tonno, olive taggiasche, pomodorini, cipolla rossa.", en: "Greens, tuna, olives, tomatoes, onion.", de: "Grünzeug, Thunfisch, Oliven, Tomaten, Zwiebel.", fr: "Mesclun, thon, olives, tomates, oignon.", es: "Mezclum, atún, aceitunas, tomates, cebolla." },
        ingredients: { it: ["Tonno", "Olive", "Pomodorini"], en: ["Tuna", "Olives", "Tomatoes"], de: ["Thunfisch", "Oliven", "Tomaten"], fr: ["Thon", "Olives", "Tomates"], es: ["Atún", "Aceitunas", "Tomates"] }, allergens: ["Pesce"]
    },
    {
        id: "rustica", categoryId: "cucina", price: 11.00, img: imgBase + "Ins.+Rustica",
        name: { it: "La Rustica (Insalatona)", en: "Rustic Salad", de: "Rustikaler Salat", fr: "Salade Rustique", es: "Ensalada Rústica" },
        desc: { it: "Pollo alla piastra, crostini, scaglie grana, salsa yogurt.", en: "Chicken, croutons, parmesan, yogurt sauce.", de: "Huhn, Croutons, Parmesan, Joghurtsauce.", fr: "Poulet, croûtons, parmesan, sauce yaourt.", es: "Pollo, picatostes, parmesano, salsa de yogur." },
        ingredients: { it: ["Pollo", "Grana", "Salsa Yogurt"], en: ["Chicken", "Parmesan", "Yogurt"], de: ["Huhn", "Parmesan", "Joghurt"], fr: ["Poulet", "Parmesan", "Yaourt"], es: ["Pollo", "Parmesano", "Yogur"] }, allergens: ["Glutine", "Latte"]
    },
    {
        id: "delicata", categoryId: "cucina", price: 10.50, img: imgBase + "Ins.+Delicata",
        name: { it: "La Delicata (Insalatona)", en: "Delicate Salad", de: "Zarter Salat", fr: "Salade Délicate", es: "Ensalada Delicada" },
        desc: { it: "Misticanza, noci, mela verde, formaggio caprino, miele.", en: "Greens, walnuts, apple, goat cheese, honey.", de: "Grünzeug, Walnüsse, Apfel, Ziegenkäse, Honig.", fr: "Mesclun, noix, pomme, chèvre, miel.", es: "Mezclum, nueces, manzana, queso de cabra, miel." },
        ingredients: { it: ["Noci", "Mela", "Caprino"], en: ["Walnuts", "Apple", "Goat Cheese"], de: ["Walnüsse", "Apfel", "Ziegenkäse"], fr: ["Noix", "Pomme", "Chèvre"], es: ["Nueces", "Manzana", "Cabra"] }, allergens: ["Latte", "Frutta a guscio"]
    },

    // --- BEVANDE ---
    {
        id: "spremuta", categoryId: "bevande", price: 3.50, img: imgBase + "Spremuta",
        name: { it: "Spremuta d'Arancia Espressa", en: "Fresh Orange Juice", de: "Frischer Orangensaft", fr: "Jus d'Orange Frais", es: "Zumo Naranja Natural" },
        desc: { it: "Vitamina pura, spremuta al momento. Niente scatole.", en: "Pure vitamin, freshly squeezed.", de: "Pures Vitamin, frisch gepresst.", fr: "Vitamine pure, fraîchement pressé.", es: "Vitamina pura, recién exprimido." },
        ingredients: { it: [], en: [], de: [], fr: [], es: [] }, allergens: []
    },
    {
        id: "succhi", categoryId: "bevande", price: 3.00, img: imgBase + "Succhi+Bio",
        name: { it: "Succhi di Frutta Bio", en: "Organic Juices", de: "Bio-Säfte", fr: "Jus Bio", es: "Zumos Ecológicos" },
        desc: { it: "Selezione di gusti intensi per piccoli e grandi.", en: "Selection of intense flavors.", de: "Auswahl an intensiven Aromen.", fr: "Sélection de saveurs intenses.", es: "Selección de sabores intensos." },
        ingredients: { it: [], en: [], de: [], fr: [], es: [] }, allergens: []
    },
    {
        id: "cioccolata", categoryId: "bevande", price: 4.00, img: imgBase + "Cioccolata",
        name: { it: "Cioccolata Calda dell'Officina", en: "Hot Chocolate", de: "Heiße Schokolade", fr: "Chocolat Chaud", es: "Chocolate Caliente" },
        desc: { it: "Densa, avvolgente e scura. Il comfort food definitivo.", en: "Thick, enveloping and dark.", de: "Dick, einhüllend und dunkel.", fr: "Épais, enveloppant et sombre.", es: "Espeso, envolvente y oscuro." },
        ingredients: { it: [], en: [], de: [], fr: [], es: [] }, allergens: ["Latte"]
    },
    {
        id: "te", categoryId: "bevande", price: 3.50, img: imgBase + "Te+Infusi",
        name: { it: "Selezione Tè e Infusi", en: "Tea & Infusions", de: "Tee & Aufgüsse", fr: "Thés & Infusions", es: "Tés e Infusiones" },
        desc: { it: "Un viaggio tra aromi e spezie dal mondo.", en: "A journey through aromas and spices.", de: "Eine Reise durch Aromen und Gewürze.", fr: "Un voyage à travers les arômes et les épices.", es: "Un viaje por aromas y especias." },
        ingredients: { it: [], en: [], de: [], fr: [], es: [] }, allergens: []
    },

    // --- COCKTAILS ---
    {
        id: "spritz", categoryId: "cocktails", price: 6.00, img: imgBase + "Spritz+Bacco",
        name: { it: "Spritz Bacco", en: "Bacco Spritz", de: "Bacco Spritz", fr: "Spritz Bacco", es: "Spritz Bacco" },
        desc: { it: "Il re della piazza. Aperol o Campari, prosecco e un tocco saggio.", en: "Aperol/Campari, prosecco.", de: "Aperol/Campari, Prosecco.", fr: "Aperol/Campari, prosecco.", es: "Aperol/Campari, prosecco." },
        ingredients: { it: ["Aperol/Campari", "Prosecco", "Soda"], en: ["Aperol/Campari", "Prosecco", "Soda"], de: ["Aperol/Campari", "Prosecco", "Soda"], fr: ["Aperol/Campari", "Prosecco", "Soda"], es: ["Aperol/Campari", "Prosecco", "Soda"] }, allergens: ["Solfiti"]
    },
    {
        id: "hugo", categoryId: "cocktails", price: 7.00, img: imgBase + "Hugo+Rocca",
        name: { it: "Hugo della Rocca", en: "Hugo", de: "Hugo", fr: "Hugo", es: "Hugo" },
        desc: { it: "Il lato fresco del Medioevo. Sciroppo sambuco, prosecco, menta.", en: "Elderflower, prosecco, mint.", de: "Holunder, Prosecco, Minze.", fr: "Sureau, prosecco, menthe.", es: "Saúco, prosecco, menta." },
        ingredients: { it: ["Sambuco", "Prosecco", "Menta"], en: ["Elderflower", "Prosecco", "Mint"], de: ["Holunder", "Prosecco", "Minze"], fr: ["Sureau", "Prosecco", "Menthe"], es: ["Saúco", "Prosecco", "Menta"] }, allergens: ["Solfiti"]
    },
    {
        id: "americano_cocktail", categoryId: "cocktails", price: 7.00, img: imgBase + "Americano",
        name: { it: "Americano Industrial", en: "Americano", de: "Americano", fr: "Americano", es: "Americano" },
        desc: { it: "Bitter Campari, Vermouth rosso e soda. Semplice, amaro, onesto.", en: "Campari, red vermouth, soda.", de: "Campari, roter Wermut, Soda.", fr: "Campari, vermouth rouge, soda.", es: "Campari, vermouth rojo, soda." },
        ingredients: { it: ["Campari", "Vermouth", "Soda"], en: ["Campari", "Vermouth", "Soda"], de: ["Campari", "Wermut", "Soda"], fr: ["Campari", "Vermouth", "Soda"], es: ["Campari", "Vermouth", "Soda"] }, allergens: ["Solfiti"]
    },
    {
        id: "negroni", categoryId: "cocktails", price: 8.00, img: imgBase + "Negroni",
        name: { it: "Negroni del Cavaliere", en: "Negroni", de: "Negroni", fr: "Negroni", es: "Negroni" },
        desc: { it: "Forte come le mura del castello. Gin, Campari, Vermouth.", en: "Gin, Campari, Vermouth.", de: "Gin, Campari, Wermut.", fr: "Gin, Campari, Vermouth.", es: "Gin, Campari, Vermouth." },
        ingredients: { it: ["Gin", "Campari", "Vermouth"], en: ["Gin", "Campari", "Vermouth"], de: ["Gin", "Campari", "Wermut"], fr: ["Gin", "Campari", "Vermouth"], es: ["Gin", "Campari", "Vermouth"] }, allergens: ["Solfiti"]
    },
    {
        id: "margarita", categoryId: "cocktails", price: 8.00, img: imgBase + "Margarita",
        name: { it: "Margarita 'Pietra Blu'", en: "Margarita", de: "Margarita", fr: "Margarita", es: "Margarita" },
        desc: { it: "Tequila, Triple Sec e succo di lime. Con crosta di sale.", en: "Tequila, Triple Sec, lime.", de: "Tequila, Triple Sec, Limette.", fr: "Tequila, Triple Sec, citron vert.", es: "Tequila, Triple Sec, lima." },
        ingredients: { it: ["Tequila", "Triple Sec", "Lime"], en: ["Tequila", "Triple Sec", "Lime"], de: ["Tequila", "Triple Sec", "Limette"], fr: ["Tequila", "Triple Sec", "Citron vert"], es: ["Tequila", "Triple Sec", "Lima"] }, allergens: []
    },
    {
        id: "martini", categoryId: "cocktails", price: 8.00, img: imgBase + "Martini",
        name: { it: "Martini Cocktail", en: "Martini", de: "Martini", fr: "Martini", es: "Martini" },
        desc: { it: "Il drink dell'eleganza. Gin (o Vodka) e Vermouth Dry.", en: "Gin/Vodka, Dry Vermouth.", de: "Gin/Wodka, trockener Wermut.", fr: "Gin/Vodka, Vermouth sec.", es: "Gin/Vodka, Vermouth seco." },
        ingredients: { it: ["Gin/Vodka", "Vermouth Dry"], en: ["Gin/Vodka", "Dry Vermouth"], de: ["Gin/Wodka", "Trockener Wermut"], fr: ["Gin/Vodka", "Vermouth sec"], es: ["Gin/Vodka", "Vermouth seco"] }, allergens: ["Solfiti"]
    },
    {
        id: "moscow_mule", categoryId: "cocktails", price: 8.00, img: imgBase + "Moscow+Mule",
        name: { it: "Moscow Mule 'Fucina'", en: "Moscow Mule", de: "Moscow Mule", fr: "Moscow Mule", es: "Moscow Mule" },
        desc: { it: "Vodka, lime e Ginger Beer. Piccante e rinfrescante.", en: "Vodka, lime, ginger beer.", de: "Wodka, Limette, Ginger Beer.", fr: "Vodka, citron vert, ginger beer.", es: "Vodka, lima, ginger beer." },
        ingredients: { it: ["Vodka", "Ginger Beer", "Lime"], en: ["Vodka", "Ginger Beer", "Lime"], de: ["Wodka", "Ginger Beer", "Limette"], fr: ["Vodka", "Ginger Beer", "Citron vert"], es: ["Vodka", "Ginger Beer", "Lima"] }, allergens: []
    },
    {
        id: "mojito", categoryId: "cocktails", price: 8.00, img: imgBase + "Mojito",
        name: { it: "Mojito dell'Officina", en: "Mojito", de: "Mojito", fr: "Mojito", es: "Mojito" },
        desc: { it: "Rum, menta pestata, zucchero canna, lime. Per rinfrescare il pomeriggio.", en: "Rum, mint, sugar, lime.", de: "Rum, Minze, Zucker, Limette.", fr: "Rhum, menthe, sucre, citron vert.", es: "Ron, menta, azúcar, lima." },
        ingredients: { it: ["Rum", "Menta", "Lime"], en: ["Rum", "Mint", "Lime"], de: ["Rum", "Minze", "Limette"], fr: ["Rhum", "Menthe", "Citron vert"], es: ["Ron", "Menta", "Lima"] }, allergens: []
    },
    {
        id: "old_fashioned", categoryId: "cocktails", price: 9.00, img: imgBase + "Old+Fashioned",
        name: { it: "Old Fashioned 'II Fondatore'", en: "Old Fashioned", de: "Old Fashioned", fr: "Old Fashioned", es: "Old Fashioned" },
        desc: { it: "Drink di carattere a base di Bourbon. Sapori decisi e senza tempo.", en: "Bourbon based, strong flavor.", de: "Auf Bourbon-Basis, starker Geschmack.", fr: "À base de Bourbon, saveur forte.", es: "A base de Bourbon, sabor fuerte." },
        ingredients: { it: ["Bourbon", "Angostura", "Zucchero"], en: ["Bourbon", "Angostura", "Sugar"], de: ["Bourbon", "Angostura", "Zucker"], fr: ["Bourbon", "Angostura", "Sucre"], es: ["Bourbon", "Angostura", "Azúcar"] }, allergens: []
    },
    {
        id: "daiquiri", categoryId: "cocktails", price: 8.00, img: imgBase + "Daiquiri",
        name: { it: "Cubano (Daiquiri)", en: "Daiquiri", de: "Daiquiri", fr: "Daiquiri", es: "Daiquiri" },
        desc: { it: "Rum, lime e zucchero. L'essenza dei Caraibi tra le pietre toscane.", en: "Rum, lime, sugar.", de: "Rum, Limette, Zucker.", fr: "Rhum, citron vert, sucre.", es: "Ron, lima, azúcar." },
        ingredients: { it: ["Rum", "Lime", "Zucchero"], en: ["Rum", "Lime", "Sugar"], de: ["Rum", "Limette", "Zucker"], fr: ["Rhum", "Citron vert", "Sucre"], es: ["Ron", "Lima", "Azúcar"] }, allergens: []
    },
    {
        id: "cubalibre", categoryId: "cocktails", price: 8.00, img: imgBase + "Cuba+Libre",
        name: { it: "Cuba Libre", en: "Cuba Libre", de: "Cuba Libre", fr: "Cuba Libre", es: "Cuba Libre" },
        desc: { it: "Rum scuro, cola e lime. Un classico che non tradisce mai.", en: "Dark rum, cola, lime.", de: "Dunkler Rum, Cola, Limette.", fr: "Rhum brun, cola, citron vert.", es: "Ron oscuro, cola, lima." },
        ingredients: { it: ["Rum Scuro", "Cola", "Lime"], en: ["Dark Rum", "Cola", "Lime"], de: ["Dunkler Rum", "Cola", "Limette"], fr: ["Rhum brun", "Cola", "Citron vert"], es: ["Ron oscuro", "Cola", "Lima"] }, allergens: []
    },

    // --- LA GIN OFFICINA ---
    {
        id: "gin_tanqueray", categoryId: "gin", price: 9.00, img: imgBase + "Tanqueray",
        name: { it: "Gin Tonic - Tanqueray", en: "Gin Tonic - Tanqueray", de: "Gin Tonic - Tanqueray", fr: "Gin Tonic - Tanqueray", es: "Gin Tonic - Tanqueray" },
        desc: { it: "II classico intramontabile. Secco, deciso, senza sorprese.", en: "Classic dry gin.", de: "Klassischer trockener Gin.", fr: "Gin sec classique.", es: "Ginebra seca clásica." },
        ingredients: { it: ["Tanqueray", "Tonica Premium"], en: ["Tanqueray", "Tonic"], de: ["Tanqueray", "Tonic"], fr: ["Tanqueray", "Tonic"], es: ["Tanqueray", "Tónica"] }, allergens: []
    },
    {
        id: "gin_bulldog", categoryId: "gin", price: 10.00, img: imgBase + "Bulldog",
        name: { it: "Gin Tonic - Bulldog", en: "Gin Tonic - Bulldog", de: "Gin Tonic - Bulldog", fr: "Gin Tonic - Bulldog", es: "Gin Tonic - Bulldog" },
        desc: { it: "Moderno e grintoso, con note di lavanda e occhio di drago.", en: "Lavender and dragon eye notes.", de: "Lavendel und Drachenauge.", fr: "Notes de lavande et œil de dragon.", es: "Notas de lavanda y ojo de dragón." },
        ingredients: { it: ["Bulldog", "Tonica Premium"], en: ["Bulldog", "Tonic"], de: ["Bulldog", "Tonic"], fr: ["Bulldog", "Tonic"], es: ["Bulldog", "Tónica"] }, allergens: []
    },
    {
        id: "gin_hendricks", categoryId: "gin", price: 12.00, img: imgBase + "Hendrick's",
        name: { it: "Gin Tonic - Hendrick's", en: "Gin Tonic - Hendrick's", de: "Gin Tonic - Hendrick's", fr: "Gin Tonic - Hendrick's", es: "Gin Tonic - Hendrick's" },
        desc: { it: "L'insolito. Note di cetriolo e rosa per un sorso rinfrescante.", en: "Cucumber and rose notes.", de: "Gurke und Rose.", fr: "Notes de concombre et rose.", es: "Notas de pepino y rosa." },
        ingredients: { it: ["Hendrick's", "Tonica Premium"], en: ["Hendrick's", "Tonic"], de: ["Hendrick's", "Tonic"], fr: ["Hendrick's", "Tonic"], es: ["Hendrick's", "Tónica"] }, allergens: []
    },
    {
        id: "gin_botanist", categoryId: "gin", price: 14.00, img: imgBase + "The+Botanist",
        name: { it: "Gin Tonic - The Botanist", en: "Gin Tonic - The Botanist", de: "Gin Tonic - The Botanist", fr: "Gin Tonic - The Botanist", es: "Gin Tonic - The Botanist" },
        desc: { it: "Direttamente dalla Scozia. 22 erbe spontanee, selvaggio.", en: "22 wild Scottish herbs.", de: "22 schottische Wildkräuter.", fr: "22 herbes sauvages écossaises.", es: "22 hierbas silvestres escocesas." },
        ingredients: { it: ["The Botanist", "Tonica Premium"], en: ["The Botanist", "Tonic"], de: ["The Botanist", "Tonic"], fr: ["The Botanist", "Tonic"], es: ["The Botanist", "Tónica"] }, allergens: []
    },
    {
        id: "gin_mazzetti", categoryId: "gin", price: 11.00, img: imgBase + "Mazzetti",
        name: { it: "Gin Tonic - Mazzetti", en: "Gin Tonic - Mazzetti", de: "Gin Tonic - Mazzetti", fr: "Gin Tonic - Mazzetti", es: "Gin Tonic - Mazzetti" },
        desc: { it: "L'eccellenza italiana. Profumato, con eleganza piemontese.", en: "Italian excellence.", de: "Italienische Exzellenz.", fr: "L'excellence italienne.", es: "Excelencia italiana." },
        ingredients: { it: ["Mazzetti", "Tonica Premium"], en: ["Mazzetti", "Tonic"], de: ["Mazzetti", "Tonic"], fr: ["Mazzetti", "Tonic"], es: ["Mazzetti", "Tónica"] }, allergens: []
    },
    {
        id: "gin_ginestro", categoryId: "gin", price: 11.00, img: imgBase + "Ginestro",
        name: { it: "Gin Tonic - Ginestro", en: "Gin Tonic - Ginestro", de: "Gin Tonic - Ginestro", fr: "Gin Tonic - Ginestro", es: "Gin Tonic - Ginestro" },
        desc: { it: "Il tocco toscano. Prodotto con ginepro locale, l'essenza della nostra terra.", en: "Tuscan touch, local juniper.", de: "Toskanische Note, lokaler Wacholder.", fr: "Touche toscane, genévrier local.", es: "Toque toscano, enebro local." },
        ingredients: { it: ["Ginestro", "Tonica Premium"], en: ["Ginestro", "Tonic"], de: ["Ginestro", "Tonic"], fr: ["Ginestro", "Tonic"], es: ["Ginestro", "Tónica"] }, allergens: []
    },

    // --- VINI E BIRRE ---
    {
        id: "vino", categoryId: "vini", price: 5.00, img: imgBase + "Vini+Val+di+Cornia",
        name: { it: "Calice Val di Cornia", en: "Wine Glass", de: "Glas Wein", fr: "Verre de Vin", es: "Copa de Vino" },
        desc: { it: "Selezione dei migliori rossi e bianchi delle cantine del borgo.", en: "Selection of local wines.", de: "Auswahl lokaler Weine.", fr: "Sélection de vins locaux.", es: "Selección de vinos locales." },
        ingredients: { it: [], en: [], de: [], fr: [], es: [] }, allergens: ["Solfiti"]
    },
    {
        id: "birra", categoryId: "vini", price: 6.00, img: imgBase + "Birre+Artigianali",
        name: { it: "Birre Artigianali", en: "Craft Beers", de: "Craft Biere", fr: "Bières Artisanales", es: "Cervezas Artesanales" },
        desc: { it: "Chiedi al banco le spine o le bottiglie disponibili oggi.", en: "Ask for today's beers.", de: "Fragen Sie nach den heutigen Bieren.", fr: "Demandez les bières du jour.", es: "Pregunte por las cervezas de hoy." },
        ingredients: { it: [], en: [], de: [], fr: [], es: [] }, allergens: ["Glutine"]
    }
];

/* --- LOGICA DELLA PAGINA --- */
let currentLang = 'it';
let activeCategory = 'caffe';
let cartState = [];
let currentProductInModal = null;

document.addEventListener('DOMContentLoaded', () => {
    
    // --- LINGUE ---
    const dropdown = document.getElementById('lang-dropdown');
    const selectedBtn = document.getElementById('current-lang-btn');
    const langList = document.getElementById('lang-list');
    const selectedFlag = document.getElementById('selected-flag');
    const selectedCode = document.getElementById('selected-code');

    const langs = ['it', 'en', 'de', 'fr', 'es'];
    langs.forEach(lang => {
        const item = document.createElement('div');
        item.className = 'select-item';
        item.innerHTML = `<img src="${flags[lang]}"> <span>${lang.toUpperCase()}</span>`;
        item.onclick = () => { setLanguage(lang); langList.classList.add('hidden'); };
        langList.appendChild(item);
    });

    selectedBtn.onclick = (e) => { e.stopPropagation(); langList.classList.toggle('hidden'); };
    document.addEventListener('click', (e) => { if (!dropdown.contains(e.target)) langList.classList.add('hidden'); });

    function setLanguage(lang) {
        currentLang = lang;
        selectedFlag.src = flags[lang];
        selectedCode.textContent = lang.toUpperCase();
        renderApp();
    }

    // --- RENDER ---
    function renderApp() {
        const ui = uiTranslations[currentLang];
        
        document.getElementById('brand-name').textContent = ui.brand;
        document.getElementById('footer-text').textContent = ui.footer;
        document.getElementById('lbl-ingredients').textContent = ui.ingredients;
        document.getElementById('lbl-allergens').textContent = ui.allergens;
        document.getElementById('add-to-cart-btn').textContent = ui.addToCart;
        document.getElementById('review-label').textContent = ui.reviewBtn;

        const catNav = document.getElementById('category-nav');
        catNav.innerHTML = '';
        categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = `nav-tab ${cat.id === activeCategory ? 'active' : ''}`;
            btn.textContent = cat.label[currentLang];
            btn.onclick = () => { activeCategory = cat.id; renderGrid(); updateTabStyles(); };
            catNav.appendChild(btn);
        });
        renderGrid();
        renderCartModal(); 
    }

    function updateTabStyles() {
        document.querySelectorAll('.nav-tab').forEach(btn => {
           btn.classList.toggle('active', btn.textContent === categories.find(c => c.id === activeCategory).label[currentLang]);
        });
    }

    function renderGrid() {
        const grid = document.getElementById('product-grid');
        grid.innerHTML = '';
        const filtered = products.filter(p => p.categoryId === activeCategory);
        
        if(filtered.length === 0) grid.innerHTML = '<p style="opacity:0.6; text-align:center; grid-column:span 2;">In aggiornamento...</p>';

        filtered.forEach(prod => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.onclick = () => openProductModal(prod);
            card.innerHTML = `
                <img src="${prod.img}" class="card-img" alt="${prod.name[currentLang]}">
                <div class="card-info">
                    <div class="card-name">${prod.name[currentLang]}</div>
                    <div class="card-price">€${prod.price.toFixed(2)}</div>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    // --- MODALI ---
    const productModal = document.getElementById('product-modal');
    const cartModal = document.getElementById('cart-modal');
    
    function openProductModal(product) {
        currentProductInModal = product;
        document.getElementById('modal-img').src = product.img;
        document.getElementById('modal-title').textContent = product.name[currentLang];
        document.getElementById('modal-price').textContent = `€${product.price.toFixed(2)}`;
        document.getElementById('modal-desc').textContent = product.desc[currentLang];
        
        const ingList = document.getElementById('modal-ingredients-list');
        ingList.innerHTML = (product.ingredients?.[currentLang] || []).map(i => `<li>${i}</li>`).join('');
        document.getElementById('modal-ingredients-box').style.display = ingList.children.length ? 'block' : 'none';

        const allTags = document.getElementById('modal-allergens-tags');
        allTags.innerHTML = (product.allergens || []).map(a => {
            const t = allergenTrans[a]?.[currentLang] || a;
            return `<span class="allergen-tag">${t}</span>`;
        }).join('');
        document.getElementById('modal-allergens-box').style.display = product.allergens.length ? 'block' : 'none';

        openModal(productModal);
    }

    // --- CARRELLO ---
    function addToCart() {
        if(!currentProductInModal) return;
        cartState.push(currentProductInModal);
        updateCartUI();
        closeModal(productModal);
    }

    function removeFromCart(index) {
        cartState.splice(index, 1);
        updateCartUI();
        renderCartModal();
    }

    function updateCartUI() {
        const badge = document.getElementById('cart-count-badge');
        badge.textContent = cartState.length;
        badge.classList.toggle('hidden', cartState.length === 0);
    }

    function renderCartModal() {
        const ui = uiTranslations[currentLang];
        document.getElementById('lbl-your-order').textContent = ui.yourOrder;
        document.getElementById('lbl-total').textContent = ui.total;
        document.querySelector('.cart-note').textContent = ui.cartNote;
        
        const list = document.getElementById('cart-items-list');
        list.innerHTML = '';
        let total = 0;
        
        if(cartState.length === 0) {
            document.getElementById('cart-empty-msg').classList.remove('hidden');
            document.getElementById('cart-empty-msg').querySelector('p').textContent = ui.emptyCart;
        } else {
            document.getElementById('cart-empty-msg').classList.add('hidden');
            
            cartState.forEach((p, index) => {
                total += p.price;
                const li = document.createElement('li');
                li.className = 'cart-item';
                li.innerHTML = `
                    <div class="cart-item-info">
                        <span class="cart-item-name">${p.name[currentLang]}</span>
                        <span class="cart-item-price">€${p.price.toFixed(2)}</span>
                    </div>
                    <button class="cart-remove-btn" aria-label="Rimuovi">
                        <svg viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                    </button>
                `;
                li.querySelector('.cart-remove-btn').onclick = () => removeFromCart(index);
                list.appendChild(li);
            });
        }
        document.getElementById('cart-total-price').textContent = `€${total.toFixed(2)}`;
    }

    function openModal(el) { el.classList.remove('hidden'); setTimeout(() => el.classList.add('open'), 10); document.body.style.overflow = 'hidden'; }
    function closeModal(el) { el.classList.remove('open'); setTimeout(() => { el.classList.add('hidden'); document.body.style.overflow = ''; }, 300); }

    document.getElementById('cart-trigger-btn').onclick = () => { renderCartModal(); openModal(cartModal); };
    document.getElementById('add-to-cart-btn').onclick = addToCart;
    document.querySelectorAll('.modal-overlay').forEach(o => o.onclick = (e) => { if(e.target === o || e.target.closest('.close-modal-btn')) closeModal(o); });

    setLanguage('it');
});