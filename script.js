(function () {
/*
 * Field Notes — a lifestyle travel journal assembled as small collectible adventures.
 * Each note carries the season window worth copying it in (`when`) and a
 * three-stop route. Photography is loaded directly from Unsplash's image CDN.
 */
const lifestyleItems = [
    ['Linen, lemons & the long lunch', 'Praiano, Italy', 'Slow living', 'May–Jun', 'A cliffside day paced by cold espresso, sea stairs and a table that stays set until sunset.', ['espresso', 'sea stairs', 'late lunch']],
    ['A quiet hour before Kyoto wakes', 'Higashiyama, Japan', 'Morning ritual', 'Mar–Apr', 'Temple bells, warm ceramics and the almost-silent lanes that exist before the shutters rise.', ['tea room', 'moss garden', 'pottery']],
    ['Wind at the edge of the map', 'El Chaltén, Argentina', 'Open air', 'Dec–Feb', 'A weather-led field note about granite horizons, thermos coffee and walking without a playlist.', ['trailhead', 'glacier view', 'camp supper']],
    ['Rose walls after dark', 'Marrakech, Morocco', 'After dark', 'Oct–Apr', 'Lantern-lit courtyards, cardamom on the air and a rooftop table above the last market rush.', ['spice lane', 'courtyard', 'rooftop']],
    ['The swim before breakfast', 'Perissa, Greece', 'Swim club', 'Jun–Sep', 'Black sand, bright water and the particular joy of arriving at breakfast with salt still in your hair.', ['early swim', 'bakery', 'caldera bus']],
    ['Cabin windows, no notifications', 'Banff, Canada', 'Cabin days', 'Jul–Sep', 'A two-day reset built around a cedar cabin, lake weather and one very good paperback.', ['lake loop', 'sauna', 'firelight']],
    ['Tram 28 with nowhere to be', 'Lisbon, Portugal', 'City rhythm', 'Apr–Jun', 'Tiled facades, standing-room coffee and a deliberately unplanned ride across seven hills.', ['bica', 'tram ride', 'record shop']],
    ['A softer kind of Sunday', 'Ubud, Indonesia', 'Reset', 'May–Sep', 'Rice-field paths, woven shade and a day shaped around fruit, water and an unhurried studio visit.', ['fruit stall', 'river path', 'weaving']],
    ['Hot pools between weather fronts', 'Hveragerði, Iceland', 'Road notes', 'Jun–Aug', 'Steam in cold air, wool layers on the back seat and the next waterfall pencilled on a paper map.', ['bakery stop', 'hot river', 'night drive']],
    ['Lunch under the mountain', 'Cape Town, South Africa', 'Table culture', 'Nov–Mar', 'Market flowers, bright plates and a long lunch where the mountain keeps changing colour.', ['flower market', 'shared plates', 'sea wall']],
    ['Chairs, pastries & good signage', 'Copenhagen, Denmark', 'Design walk', 'May–Aug', 'A compact route through bakeries, small studios and streets where even the bike racks feel considered.', ['rye pastry', 'chair studio', 'harbour dip']],
    ['The brave hour', 'Queenstown, New Zealand', 'Adrenaline', 'Dec–Feb', 'One enormous view, one questionable decision and the calm cup of tea that follows both.', ['ridge lift', 'big jump', 'tea stop']],
    ['Two tables by the window', 'Paris, France', 'Café society', 'Apr–Jun', 'A notebook, a buttered tartine and a slow orbit through bookshops on the quieter side of the Seine.', ['corner café', 'book arcade', 'cinema']],
    ['Blue hour on the old wall', 'Dubrovnik, Croatia', 'Sea change', 'May–Jun', 'Warm stone, the first evening breeze and a swim taken just before every table fills.', ['wall walk', 'rock swim', 'late supper']],
    ['Ferry light & flat whites', 'Sydney, Australia', 'Golden hour', 'Oct–Dec', 'A harbour morning assembled from commuter ferries, ocean pools and the city seen from the water.', ['ferry deck', 'ocean pool', 'flat white']],
    ['Bare feet, better clocks', 'Baa Atoll, Maldives', 'Barefoot', 'Jan–Apr', 'A day measured in reef shadows, cold fruit and the distance between the deck and the water.', ['reef drift', 'fruit ice', 'sunset deck']],
    ['Neon, linen & midnight tea', 'Dubai, UAE', 'Night shift', 'Nov–Mar', 'Old creek crossings and new towers joined by a late-night route that ends with saffron tea.', ['abra ride', 'textile lane', 'midnight tea']],
    ['Red cabins in soft rain', 'Lofoten, Norway', 'Far north', 'Jun–Aug', 'A small-weather diary of fishing villages, wet boots and soup eaten facing the harbour.', ['dock walk', 'fish soup', 'sauna']],
    ['The lake wears silk', 'Lake Como, Italy', 'Lake days', 'May–Sep', 'Ferry wake, garden shade and a pale afternoon that makes every old villa look cinematic.', ['ferry hop', 'garden gate', 'aperitivo']],
    ['A train into the clouds', 'Bernese Oberland, Switzerland', 'Alpine calm', 'Jun–Sep', 'Cog railways, meadow paths and the clean quiet that arrives once the station falls behind.', ['cog train', 'meadow walk', 'fondue']],
    ['Pink walls, green doors', 'Jaipur, India', 'Color story', 'Oct–Mar', 'Block-print studios, lime soda and a palette collected one doorway at a time.', ['flower market', 'print studio', 'rooftop lime']],
    ['Sunday table, Amalfi rules', 'Minori, Italy', 'Sunday table', 'Apr–Jun', 'Three generations, six plates and the informal choreography of a lunch nobody wants to end.', ['market bag', 'pasta lesson', 'lemon cake']],
    ['Paper, cedar, indigo', 'Kurashiki, Japan', 'Craft route', 'Oct–Nov', 'A material-first afternoon through old storehouses, indigo workshops and a tiny paper shop.', ['canal walk', 'indigo room', 'paper shop']],
    ['Rooftops after the heat', 'Marrakech, Morocco', 'Rooftop hours', 'Sep–Nov', 'Mint tea, soft shadows and a city becoming social again as the temperature finally drops.', ['hammam', 'mint tea', 'roof supper']],
    ['A record shop on every hill', 'Lisbon, Portugal', 'Record shops', 'Sep–Oct', 'A vinyl-led afternoon with scratched sleeves, tiny bars and views discovered between tracks.', ['crate dig', 'ginginha', 'miradouro']],
    ['Small pleasures, very well made', 'Copenhagen, Denmark', 'Small pleasures', 'May–Aug', 'Cardamom buns, hand-thrown cups and a pocket-size guide to objects worth slowing down for.', ['bun queue', 'ceramics', 'canal bench']],
    ['Last light, first screening', 'Paris, France', 'Last light', 'Sep–Oct', 'An early dinner, a repertory cinema and the warm pavement glow of walking home after credits.', ['early table', 'film poster', 'night walk']]
];

const lifestylePhotos = [
    'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1000&h=1500&q=85',
    'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&h=1500&q=85',
    'https://images.unsplash.com/photo-1721793080744-f4d37b1d1f54?auto=format&fit=crop&w=1000&h=1500&q=85',
    'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=1000&h=1500&q=85',
    'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1000&h=1500&q=85',
    'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1000&h=1500&q=85',
    'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?auto=format&fit=crop&w=1000&h=1500&q=85',
    'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&h=1500&q=85',
    'https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=1000&h=1500&q=85',
    'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=1000&h=1500&q=85',
    'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=1000&h=1500&q=85',
    'https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&w=1000&h=1500&q=85',
    'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&h=1500&q=85',
    'https://images.unsplash.com/photo-1555990793-da11153b2473?auto=format&fit=crop&w=1000&h=1500&q=85',
    'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1000&h=1500&q=85',
    'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&h=1500&q=85',
    'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&h=1500&q=85',
    'https://images.unsplash.com/photo-1504233529578-6d46baba6d34?auto=format&fit=crop&w=1000&h=1500&q=85',
    'https://images.unsplash.com/photo-1638285240257-0d37f116d7d8?auto=format&fit=crop&w=1000&h=1500&q=85',
    'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=1000&h=1500&q=85',
    'https://images.unsplash.com/photo-1524229648276-e66561fe45a9?auto=format&fit=crop&w=1000&h=1500&q=85'
];

/* The precise place that anchors each field note. City and country already sit
   in the card eyebrow; this gives the footer one useful, human-readable spot
   instead of asking the reader to decode latitude and longitude. */
const PLACES = {
    'Linen, lemons & the long lunch': 'Bar del Sole',
    'A quiet hour before Kyoto wakes': 'Kōdai-ji',
    'Wind at the edge of the map': 'Laguna Capri Trail',
    'Rose walls after dark': 'El Fenn Rooftop',
    'The swim before breakfast': 'Perissa Beach',
    'Cabin windows, no notifications': 'Lake Louise',
    'Tram 28 with nowhere to be': 'Martim Moniz',
    'A softer kind of Sunday': 'Campuhan Ridge Walk',
    'Hot pools between weather fronts': 'Reykjadalur Hot River',
    'Lunch under the mountain': 'Oranjezicht Market',
    'Chairs, pastries & good signage': 'Hart Bageri',
    'The brave hour': 'Skyline Queenstown',
    'Two tables by the window': 'Café de Flore',
    'Blue hour on the old wall': 'Buža Bar',
    'Ferry light & flat whites': 'Circular Quay',
    'Bare feet, better clocks': 'Hanifaru Bay',
    'Neon, linen & midnight tea': 'Al Seef Creek',
    'Red cabins in soft rain': 'Henningsvær Harbour',
    'The lake wears silk': 'Villa Monastero',
    'A train into the clouds': 'Kleine Scheidegg',
    'Pink walls, green doors': 'Anokhi Museum',
    'Sunday table, Amalfi rules': 'Giardiniello',
    'Paper, cedar, indigo': 'Kurashiki Bikan Quarter',
    'Rooftops after the heat': 'Terrasse des Épices',
    'A record shop on every hill': 'Carbono',
    'Small pleasures, very well made': 'Juno the Bakery',
    'Last light, first screening': 'Studio 28'
};

const lifestyleCards = lifestyleItems.map(([title, city, tag, when, description, itinerary], index) => ({
    title,
    city,
    tag,
    when,
    description,
    itinerary,
    place: PLACES[title] || city,
    image: lifestylePhotos[index % lifestylePhotos.length]
}));

const ITEMS_PER_PAGE = 3;
const activeSet = new Set();
const pageStatus = document.getElementById('page-status');
const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));

/* Ready-made icons — Tabler (calendar, route glyphs) + Lucide (compass). The
   Explore control keeps the compass in both states; its label and pressed
   treatment communicate whether that route is active. */
const icon = (paths, opts = '') => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"' + (opts ? ' ' + opts : '') + '>' + paths + '</svg>';
const calendarIcon = icon('<path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/>');
const placeIcon = icon('<path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"/>');
const compassOutline = icon('<circle cx="12" cy="12" r="9"/><polygon points="15.5 8.5 13.4 13.4 8.5 15.5 10.6 10.6 15.5 8.5"/>');

/* Country → regional-indicator flag emoji, keyed on the segment after the comma
   in each note's `city`. Covers every country present in the journal. */
const COUNTRY_FLAGS = {
    'Italy': '🇮🇹', 'Japan': '🇯🇵', 'Argentina': '🇦🇷', 'Morocco': '🇲🇦', 'Greece': '🇬🇷',
    'Canada': '🇨🇦', 'Portugal': '🇵🇹', 'Indonesia': '🇮🇩', 'Iceland': '🇮🇸', 'South Africa': '🇿🇦',
    'Denmark': '🇩🇰', 'New Zealand': '🇳🇿', 'France': '🇫🇷', 'Croatia': '🇭🇷', 'Australia': '🇦🇺',
    'Maldives': '🇲🇻', 'UAE': '🇦🇪', 'Norway': '🇳🇴', 'Switzerland': '🇨🇭', 'India': '🇮🇳'
};
const flagFor = (city) => COUNTRY_FLAGS[String(city).split(',').pop().trim()] || '';

/* Ready-made Tabler glyphs for the three route stops. Matched on keywords in
   the stop label so "rooftop", "courtyard", "early swim" etc. each get a
   fitting icon; falls back to a map-pin. Ordered most-specific first. */
const STOP_ICONS = [
    [/coffee|espresso|caf|flat white|bica|aperitivo|latte/, '<path d="M3 8m0 1a1 1 0 0 1 1 -1h13a1 1 0 0 1 1 1v3a5 5 0 0 1 -5 5h-5a5 5 0 0 1 -5 -5z"/><path d="M17 9h2a2 2 0 0 1 2 2v.5a2.5 2.5 0 0 1 -2.5 2.5h-1.5"/><path d="M6 4v-1"/><path d="M10 4v-1"/>'],
    [/\btea\b|matcha/, '<path d="M4 8h13a3 3 0 0 1 0 6h-1"/><path d="M4 8v9a3 3 0 0 0 3 3h6a3 3 0 0 0 3 -3v-9z"/><path d="M8 3l.5 2"/><path d="M12 3l.5 2"/>'],
    [/baker|pastry|bread|cake|croissant|rye|lemon cake|fondue|pasta|supper|lunch|plates|soup|fish|dinner/, '<path d="M4 3v6a2 2 0 0 0 2 2v9m4 -17v17m0 -12a3 3 0 0 0 6 0v-5"/>'],
    [/swim|pool|dip|reef|rock swim|hot river|hot spring|sea stairs/, '<path d="M3 7c3 -2 6 -2 9 0s6 2 9 0"/><path d="M3 17c3 -2 6 -2 9 0s6 2 9 0"/><path d="M3 12c3 -2 6 -2 9 0s6 2 9 0"/>'],
    [/ferry|boat|abra|dock|harbour|sail|canal/, '<path d="M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1"/><path d="M4 18l-1 -3h18l-1 3"/><path d="M11 3v11"/><path d="M13 5l5 9"/>'],
    [/tram|train|cog|bus|metro|record/, '<path d="M4 15a4 4 0 0 0 4 4h8a4 4 0 0 0 4 -4v-7a4 4 0 0 0 -4 -4h-8a4 4 0 0 0 -4 4z"/><path d="M4 11h16"/><path d="M12 3v8"/><path d="M8 19l-2 3"/><path d="M18 22l-2 -3"/><path d="M8 15h.01"/><path d="M16 15h.01"/>'],
    [/rooftop|sunset|deck|golden|caldera/, '<path d="M3 17h1"/><path d="M20 17h1"/><path d="M5.6 10.6l.7 .7"/><path d="M18.4 10.6l-.7 .7"/><path d="M12 4v3"/><path d="M8 17a4 4 0 0 1 8 0"/><path d="M3 21h18"/>'],
    [/sauna|fire|flame|firelight|steam|night drive|night/, '<path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z"/>'],
    [/market|stall|flower|spice|textile|shop|bag/, '<path d="M10 4l-4 6"/><path d="M14 4l4 6"/><path d="M3 10h18l-1.6 8.4a2 2 0 0 1 -2 1.6h-10.8a2 2 0 0 1 -2 -1.6z"/><path d="M9 14v2"/><path d="M15 14v2"/>'],
    [/courtyard|patio|terrace|plaza|arcade|arch/, '<path d="M3 21h18"/><path d="M5 21v-12l7 -4l7 4v12"/><path d="M9 21v-5a3 3 0 0 1 6 0v5"/>'],
    [/garden|moss|meadow|river path|weav|indigo|print|studio|pottery|paper|chair|craft|lesson/, '<path d="M12 21v-8"/><path d="M12 13a5 5 0 0 0 5 -5v-2a5 5 0 0 0 -5 5"/><path d="M12 13a5 5 0 0 1 -5 -5v-1a5 5 0 0 1 5 5"/>'],
    [/trail|ridge|glacier|lift|wall walk|loop|hike|walk|camp|mountain|meadow walk/, '<path d="M12 3l4 7h-8z"/><path d="M6 21l6 -11l6 11z"/><path d="M9.5 16.5h5"/>'],
    [/lake|ocean|water|sea wall|drift/, '<path d="M3 7c3 -2 6 -2 9 0s6 2 9 0"/><path d="M3 17c3 -2 6 -2 9 0s6 2 9 0"/><path d="M3 12c3 -2 6 -2 9 0s6 2 9 0"/>'],
    [/book|arcade|cinema|film|movie/, '<path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6l0 13"/><path d="M12 6l0 13"/><path d="M21 6l0 13"/>'],
    [/fruit|ice|salt/, '<path d="M12 3c1 3 3 5 3 8a3 3 0 0 1 -6 0c0 -3 2 -5 3 -8z"/><path d="M6 21a5 5 0 0 0 6 -4a5 5 0 0 0 6 4"/>']
];
const stopMapPin = '<path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"/>';
const stopIconFor = (stop) => {
    const s = String(stop).toLowerCase();
    for (let i = 0; i < STOP_ICONS.length; i++) {
        if (STOP_ICONS[i][0].test(s)) return icon(STOP_ICONS[i][1]);
    }
    return icon(stopMapPin);
};

/* One unique ready-made Tabler glyph per category, revealed softly on the photo
   when the card is hovered. Keyed on the exact tag so every note has its own. */
const TAG_ICON_MAP = {
    'slow living':    '<path d="M5 21c.5 -4.5 2.5 -8 7 -10" /><path d="M9 18c-3.8 -.3 -6 -2.3 -6 -6c0 -4 3 -7 9 -8c3.5 -.5 6 -.5 9 -1c-.5 2 -.5 4.5 -1 8c-1 6 -4 9 -8 9" />',
    'morning ritual': '<path d="M3 17h1m16 0h1M5.6 10.6l.7 .7m12.1 -.7l-.7 .7M12 3v3M8 17a4 4 0 0 1 8 0" /><path d="M3 21h18" /><path d="M9 6l3 -3l3 3" />',
    'open air':       '<path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24" /><path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24" /><path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" />',
    'after dark':     '<path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />',
    'swim club':      '<path d="M3 7c3 -2 6 -2 9 0s6 2 9 0" /><path d="M3 12c3 -2 6 -2 9 0s6 2 9 0" /><path d="M3 17c3 -2 6 -2 9 0s6 2 9 0" />',
    'cabin days':     '<path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />',
    'city rhythm':    '<path d="M3 21l18 0" /><path d="M5 21v-14l8 -4v18" /><path d="M19 21v-10l-6 -4" /><path d="M9 9l0 .01" /><path d="M9 12l0 .01" /><path d="M9 15l0 .01" /><path d="M9 18l0 .01" />',
    'reset':          '<path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" /><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />',
    'road notes':     '<path d="M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3z" /><path d="M9 4v13" /><path d="M15 7v13" />',
    'table culture':  '<path d="M4 3v6a2 2 0 0 0 2 2v9m4 -17v17m0 -12a3 3 0 0 0 6 0v-5" />',
    'design walk':    '<path d="M5 4h14a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-7a1 1 0 0 0 -1 1v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1" /><path d="M4 8l2 0" /><path d="M4 12l3 0" /><path d="M4 16l2 0" /><path d="M8 4l0 2" /><path d="M12 4l0 3" /><path d="M16 4l0 2" />',
    'adrenaline':     '<path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />',
    'café society':   '<path d="M3 8m0 1a1 1 0 0 1 1 -1h13a1 1 0 0 1 1 1v3a5 5 0 0 1 -5 5h-5a5 5 0 0 1 -5 -5z" /><path d="M17 9h2a2 2 0 0 1 2 2v.5a2.5 2.5 0 0 1 -2.5 2.5h-1.5" /><path d="M6 4v-1" /><path d="M10 4v-1" />',
    'sea change':     '<path d="M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1" /><path d="M4 18l-1 -3h18l-1 3" /><path d="M11 3v11" /><path d="M13 5l5 9" />',
    'golden hour':    '<path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />',
    'barefoot':       '<path d="M7 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M7 21l3 -4" /><path d="M16 21l-2 -4l-3 -3l1 -6" /><path d="M6 12l2 -3l4 -1l3 3l3 1" />',
    'night shift':    '<path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" /><path d="M17 4l0 2" /><path d="M16 5l2 0" />',
    'far north':      '<path d="M10 4l2 1l2 -1" /><path d="M12 3v18" /><path d="M4 8l2 1l-1 2" /><path d="M20 8l-2 1l1 2" /><path d="M4 16l2 -1l-1 -2" /><path d="M20 16l-2 -1l1 -2" /><path d="M12 12l7 -4" /><path d="M12 12l-7 -4" /><path d="M12 12l7 4" /><path d="M12 12l-7 4" />',
    'lake days':      '<path d="M16.69 7.44a6.973 6.973 0 0 0 -1.69 4.56a6.973 6.973 0 0 0 1.69 4.56" /><path d="M2 9.504c7.715 8.647 14.75 10.265 20 2.494c-5.25 -7.761 -12.285 -6.142 -20 2.506" /><path d="M18 11v.01" />',
    'alpine calm':    '<path d="M12 3l4 7h-8z" /><path d="M6 21l6 -11l6 11z" /><path d="M9.5 16.5h5" />',
    'color story':    '<path d="M12 21a9 9 0 0 1 0 -18a9 8 0 0 1 9 8a4.5 4 0 0 1 -4.5 4h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" /><path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />',
    'sunday table':   '<path d="M12 3c1.918 0 3.52 1.35 3.91 3.151a4 4 0 0 1 2.09 7.723v6.126h-12v-6.126a4 4 0 0 1 2.092 -7.723a4 4 0 0 1 3.908 -3.151z" /><path d="M6.161 17.009l11.839 -.009" />',
    'craft route':    '<path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" /><path d="M14.5 5.5l4 4" /><path d="M12 8l-5 -5l-4 4l5 5" /><path d="M16 12l5 5l-4 4l-5 -5" />'
};
const tagIconFor = (tag) => {
    const paths = TAG_ICON_MAP[String(tag).toLowerCase()];
    return icon(paths || '<path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />');
};

const renderCards = (page) => {
    const container = document.getElementById('cards-container');
    const start = ((page - 1) * ITEMS_PER_PAGE) % lifestyleCards.length;
    const pageData = lifestyleCards.slice(start, start + ITEMS_PER_PAGE);

    container.innerHTML = pageData.map((card, offset) => {
        const index = start + offset;
        const isActive = activeSet.has(index);
        const flag = flagFor(card.city);
        const place = card.place || card.city;
        const placeHref = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(place + ', ' + card.city);

        return '<article class="card" style="--enter-i:' + offset + '">' +
            '<img class="card__photo" src="' + esc(card.image) + '" alt="' + esc(card.city) + ' lifestyle field note" loading="lazy" decoding="async" width="1000" height="1500">' +
            '<span class="card__photo-scrim" aria-hidden="true"></span>' +
            '<span class="card__hover-icon" aria-hidden="true">' + tagIconFor(card.tag) + '</span>' +
            '<span class="card__when">' + calendarIcon + esc(card.when) + '</span>' +
            '<div class="card__glass">' +
                '<p class="card__loc">' +
                    (flag ? '<span class="card__flag" aria-hidden="true">' + flag + '</span>' : '') +
                    '<span class="card__city">' + esc(card.city) + '</span>' +
                '</p>' +
                '<h2 class="card__title">' + esc(card.title) + '</h2>' +
                '<p class="card__desc">' + esc(card.description) + '</p>' +
                '<ol class="card__route" aria-label="Suggested route">' +
                    card.itinerary.map((stop) => '<li>' + stopIconFor(stop) + '<span>' + esc(stop) + '</span></li>').join('') +
                '</ol>' +
                '<div class="card__foot">' +
                    '<a class="card__place" href="' + placeHref + '" target="_blank" rel="noreferrer" aria-label="Open ' + esc(place) + ' in Google Maps">' + placeIcon + '<span>' + esc(place) + '</span></a>' +
                    '<button type="button" class="card__explore ' + (isActive ? 'is-active' : '') + '" data-index="' + index + '" aria-pressed="' + isActive + '" aria-label="' + (isActive ? 'Deactivate this field note' : 'Explore this field note') + '">' +
                        '<span class="card__explore-icon">' + compassOutline + '</span><span>' + (isActive ? 'Active' : 'Explore') + '</span>' +
                    '</button>' +
                '</div>' +
            '</div>' +
        '</article>';
    }).join('');

    container.querySelectorAll('.card__explore').forEach((button) => {
        button.addEventListener('click', () => {
            const index = Number(button.dataset.index);
            const nextActive = !activeSet.has(index);
            if (nextActive) activeSet.add(index);
            else activeSet.delete(index);
            button.classList.toggle('is-active', nextActive);
            button.setAttribute('aria-pressed', String(nextActive));
            button.setAttribute('aria-label', nextActive ? 'Deactivate this field note' : 'Explore this field note');
            button.lastElementChild.textContent = nextActive ? 'Active' : 'Explore';
        });
    });

    if (pageStatus) pageStatus.textContent = 'Page ' + page + ' of 9, showing ' + pageData.length + ' lifestyle field notes';
};
const radios = document.querySelectorAll('.pag-r');

const currentPage = () => [...radios].findIndex((r) => r.checked) + 1;

const goTo = (idx) => {
    if (idx >= 0 && idx < radios.length) {
        radios[idx].checked = true;
        renderCards(currentPage());
    }
};

radios.forEach((r) => {
    r.addEventListener('change', () => renderCards(currentPage()));
    // Native radio behavior covers arrow keys; add Home/End jumps.
    r.addEventListener('keydown', (e) => {
        if (e.key === 'Home') {
            e.preventDefault();
            goTo(0);
            radios[0].focus();
        }
        if (e.key === 'End') {
            e.preventDefault();
            goTo(radios.length - 1);
            radios[radios.length - 1].focus();
        }
    });
});

document.addEventListener('keydown', (e) => {
    if (document.activeElement.matches('input, textarea, select, button, a, [contenteditable="true"]')) return;
    const cur = currentPage() - 1;
    if (e.key === 'ArrowLeft') goTo(cur - 1);
    if (e.key === 'ArrowRight') goTo(cur + 1);
    if (e.key === 'Home') goTo(0);
    if (e.key === 'End') goTo(radios.length - 1);
});

renderCards(currentPage());
})();
