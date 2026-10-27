/* Formation 6 — Capitales du monde (QCM intermédiaire et avancé, générés à chaque partie) */
(function(){
/* [pays, capitale, niveau (2 = intermédiaire, 3 = avancé), pièges (villes plus connues souvent confondues), remarque] */
const D = {
europe: [
["Suisse","Berne",2,["Zurich","Genève","Bâle"],"Berne est la « ville fédérale » ; Zurich est la plus grande ville."],
["Slovaquie","Bratislava",2,["Ljubljana","Košice"],""],
["Slovénie","Ljubljana",2,["Bratislava","Maribor"],"Ne pas confondre Slovénie et Slovaquie."],
["Macédoine du Nord","Skopje",2,["Ohrid","Tirana"],""],
["Monténégro","Podgorica",3,["Cetinje","Budva"],"Cetinje est la capitale historique et royale."],
["Albanie","Tirana",2,["Durrës","Skopje"],""],
["Moldavie","Chișinău",3,["Tiraspol","Bălți"],"Tiraspol est la principale ville de la Transnistrie séparatiste."],
["Biélorussie","Minsk",2,["Brest","Vilnius"],""],
["Lituanie","Vilnius",2,["Kaunas","Riga"],""],
["Lettonie","Riga",2,["Tallinn","Vilnius"],""],
["Estonie","Tallinn",2,["Tartu","Riga"],""],
["Islande","Reykjavik",2,["Akureyri"],""],
["Malte","La Valette",2,["Mdina","Sliema"],"Mdina était l'ancienne capitale."],
["Liechtenstein","Vaduz",3,["Schaan","Saint-Marin"],""],
["Bosnie-Herzégovine","Sarajevo",2,["Banja Luka","Mostar"],""],
["Kosovo","Pristina",3,["Prizren","Skopje"],"Indépendance de 2008 reconnue par une partie des États."],
["Andorre","Andorre-la-Vieille",3,["Escaldes-Engordany","Canillo"],""],
["Pays-Bas","Amsterdam",2,["La Haye","Rotterdam"],"Amsterdam est la capitale constitutionnelle ; le gouvernement siège à La Haye."],
["Turquie","Ankara",2,["Istanbul","Izmir"],"Ankara est capitale depuis 1923 ; Istanbul est la plus grande ville."],
["Croatie","Zagreb",2,["Split","Dubrovnik"],""],
["Roumanie","Bucarest",2,["Cluj-Napoca","Budapest"],""],
["Bulgarie","Sofia",2,["Plovdiv","Varna"],""],
["Chypre","Nicosie",2,["Limassol","Larnaca"],""],
["Finlande","Helsinki",2,["Turku","Tampere"],"Turku fut la capitale jusqu'en 1812."],
["Norvège","Oslo",2,["Bergen","Stockholm"],""],
["Ukraine","Kiev (Kyiv)",2,["Lviv","Kharkiv"],""],
["Serbie","Belgrade",2,["Novi Sad","Zagreb"],""],
["Géorgie","Tbilissi",2,["Batoumi","Erevan"],""],
["Arménie","Erevan",2,["Gyumri","Tbilissi"],""],
["Saint-Marin","Saint-Marin",3,["Serravalle","Borgo Maggiore"],"La capitale porte le même nom que l'État."]
],
afrique: [
["Nigeria","Abuja",2,["Lagos","Kano"],"Abuja a remplacé Lagos en 1991."],
["Côte d'Ivoire","Yamoussoukro",3,["Abidjan","Bouaké"],"Abidjan reste la capitale économique."],
["Tanzanie","Dodoma",3,["Dar es Salaam","Zanzibar"],"Le transfert depuis Dar es Salaam s'est achevé dans les années 2010-2020."],
["Maroc","Rabat",2,["Casablanca","Marrakech"],""],
["Bénin","Porto-Novo",3,["Cotonou","Abomey"],"Cotonou est le siège du gouvernement."],
["Burundi","Gitega",3,["Bujumbura","Ngozi"],"Gitega est la capitale politique depuis 2019 ; Bujumbura la capitale économique."],
["Cameroun","Yaoundé",2,["Douala","Garoua"],""],
["Burkina Faso","Ouagadougou",2,["Bobo-Dioulasso","Niamey"],""],
["Niger","Niamey",2,["Zinder","Bamako"],""],
["Mali","Bamako",2,["Tombouctou","Niamey"],""],
["Mauritanie","Nouakchott",2,["Nouadhibou","Dakar"],""],
["Tchad","N'Djamena",2,["Moundou","Bangui"],""],
["République centrafricaine","Bangui",2,["Berbérati","N'Djamena"],""],
["Gabon","Libreville",2,["Port-Gentil","Brazzaville"],""],
["République du Congo","Brazzaville",2,["Kinshasa","Pointe-Noire"],"Kinshasa, en face sur le fleuve, est la capitale de la RD Congo."],
["Rwanda","Kigali",2,["Butare","Kampala"],""],
["Ouganda","Kampala",2,["Entebbe","Kigali"],""],
["Éthiopie","Addis-Abeba",2,["Dire Dawa","Asmara"],""],
["Érythrée","Asmara",3,["Massaoua","Djibouti"],""],
["Soudan du Sud","Djouba",3,["Malakal","Khartoum"],""],
["Zambie","Lusaka",2,["Ndola","Harare"],""],
["Zimbabwe","Harare",2,["Bulawayo","Lusaka"],""],
["Malawi","Lilongwe",3,["Blantyre","Zomba"],"Zomba fut capitale jusqu'en 1975."],
["Mozambique","Maputo",2,["Beira","Luanda"],""],
["Angola","Luanda",2,["Huambo","Maputo"],""],
["Namibie","Windhoek",2,["Walvis Bay","Gaborone"],""],
["Botswana","Gaborone",2,["Francistown","Windhoek"],""],
["Lesotho","Maseru",3,["Mbabane","Teyateyaneng"],""],
["Madagascar","Antananarivo",2,["Toamasina","Mahajanga"],""],
["Comores","Moroni",3,["Mutsamudu","Mamoudzou"],"Mamoudzou est à Mayotte (France)."],
["Cap-Vert","Praia",3,["Mindelo","Bissau"],""],
["Guinée-Bissau","Bissau",3,["Conakry","Bafatá"],""],
["Guinée","Conakry",2,["Bissau","Kankan"],""],
["Sierra Leone","Freetown",2,["Monrovia","Bo"],""],
["Libéria","Monrovia",2,["Freetown","Buchanan"],""],
["Ghana","Accra",2,["Kumasi","Lomé"],""],
["Togo","Lomé",2,["Kara","Accra"],""],
["Gambie","Banjul",3,["Serekunda","Dakar"],""],
["Djibouti","Djibouti",2,["Tadjourah","Asmara"],""],
["Maurice","Port-Louis",2,["Curepipe","Victoria"],""],
["Seychelles","Victoria",3,["Port-Louis","Moroni"],""]
],
asie: [
["Birmanie (Myanmar)","Naypyidaw",3,["Rangoun","Mandalay"],"Naypyidaw a remplacé Rangoun en 2005-2006."],
["Kazakhstan","Astana",2,["Almaty","Karaganda"],"Elle s'est appelée Noursoultan de 2019 à 2022. Almaty fut la capitale jusqu'en 1997."],
["Sri Lanka","Sri Jayawardenepura Kotte",3,["Colombo","Kandy"],"Colombo est la capitale commerciale et le siège de nombreuses institutions."],
["Malaisie","Kuala Lumpur",3,["Putrajaya","George Town"],"Putrajaya est le centre administratif fédéral ; Kuala Lumpur reste la capitale officielle."],
["Pakistan","Islamabad",2,["Karachi","Lahore"],""],
["Vietnam","Hanoï",2,["Hô-Chi-Minh-Ville","Huê"],""],
["Kirghizistan","Bichkek",2,["Och","Douchanbé"],""],
["Tadjikistan","Douchanbé",2,["Khodjent","Bichkek"],""],
["Turkménistan","Achgabat",3,["Turkmenbachy","Tachkent"],""],
["Ouzbékistan","Tachkent",2,["Samarcande","Boukhara"],""],
["Mongolie","Oulan-Bator",2,["Erdenet","Karakorum"],"Karakorum était la capitale de l'Empire mongol."],
["Bhoutan","Thimphou",3,["Paro","Punakha"],""],
["Népal","Katmandou",2,["Pokhara","Thimphou"],""],
["Laos","Vientiane",2,["Luang Prabang","Phnom Penh"],""],
["Cambodge","Phnom Penh",2,["Siem Reap","Vientiane"],""],
["Bangladesh","Dacca",2,["Chittagong","Calcutta"],""],
["Philippines","Manille",2,["Quezon City","Cebu"],"Quezon City fut capitale de 1948 à 1976."],
["Brunei","Bandar Seri Begawan",3,["Kuala Belait","Kota Kinabalu"],""],
["Timor oriental","Dili",3,["Baucau","Kupang"],""],
["Maldives","Malé",2,["Addu","Colombo"],""],
["Azerbaïdjan","Bakou",2,["Gandja","Erevan"],""],
["Oman","Mascate",2,["Salalah","Doha"],""],
["Émirats arabes unis","Abou Dabi",2,["Dubaï","Charjah"],""],
["Bahreïn","Manama",3,["Riffa","Doha"],""],
["Jordanie","Amman",2,["Aqaba","Beyrouth"],""],
["Arabie saoudite","Riyad",2,["Djeddah","La Mecque"],""],
["Afghanistan","Kaboul",2,["Kandahar","Hérat"],""],
["Corée du Nord","Pyongyang",2,["Kaesong","Séoul"],""],
["Inde","New Delhi",2,["Bombay","Calcutta"],"Calcutta fut la capitale de l'Inde britannique jusqu'en 1911."],
["Chine","Pékin",2,["Shanghai","Nankin"],"Nankin fut capitale à plusieurs reprises."]
],
ameriques: [
["Canada","Ottawa",2,["Toronto","Montréal"],""],
["Brésil","Brasília",2,["Rio de Janeiro","São Paulo"],"Rio fut capitale jusqu'en 1960."],
["Bolivie","Sucre",3,["La Paz","Santa Cruz de la Sierra"],"Sucre est la capitale constitutionnelle ; La Paz est le siège du gouvernement."],
["Équateur","Quito",2,["Guayaquil","Cuenca"],""],
["Paraguay","Asunción",2,["Ciudad del Este","Montevideo"],""],
["Uruguay","Montevideo",2,["Punta del Este","Buenos Aires"],""],
["Colombie","Bogota",2,["Medellín","Cali"],""],
["Venezuela","Caracas",2,["Maracaibo","Valencia"],""],
["Honduras","Tegucigalpa",2,["San Pedro Sula","Managua"],""],
["Nicaragua","Managua",2,["León","Tegucigalpa"],""],
["Belize","Belmopan",3,["Belize City","Orange Walk"],"Belize City fut capitale jusqu'en 1970."],
["Guyana","Georgetown",3,["Paramaribo","Linden"],""],
["Suriname","Paramaribo",3,["Georgetown","Cayenne"],"Cayenne est en Guyane (France)."],
["Jamaïque","Kingston",2,["Montego Bay","Spanish Town"],"Spanish Town fut capitale jusqu'en 1872."],
["Trinité-et-Tobago","Port-d'Espagne",3,["San Fernando","Scarborough"],""],
["Barbade","Bridgetown",3,["Speightstown","Castries"],""],
["Sainte-Lucie","Castries",3,["Bridgetown","Soufrière"],""],
["Saint-Vincent-et-les-Grenadines","Kingstown",3,["Kingston","Castries"],"Ne pas confondre avec Kingston (Jamaïque)."],
["Grenade","Saint-Georges",3,["Grenville","Roseau"],""],
["Dominique","Roseau",3,["Portsmouth","Saint-Georges"],""],
["Antigua-et-Barbuda","Saint John's",3,["Basseterre","Codrington"],""],
["Saint-Christophe-et-Niévès","Basseterre",3,["Charlestown","Basse-Terre"],"Basse-Terre est le chef-lieu de la Guadeloupe (France)."],
["Bahamas","Nassau",2,["Freeport","Kingston"],""],
["Haïti","Port-au-Prince",2,["Cap-Haïtien","Saint-Domingue"],""],
["République dominicaine","Saint-Domingue",2,["Santiago de los Caballeros","Port-au-Prince"],""],
["Costa Rica","San José",2,["Limón","Managua"],""],
["El Salvador","San Salvador",2,["Santa Ana","Tegucigalpa"],""],
["Chili","Santiago",2,["Valparaíso","Concepción"],"Le Congrès siège à Valparaíso."],
["États-Unis","Washington",2,["New York","Philadelphie"],"Philadelphie fut capitale provisoire au XVIIIe siècle."]
],
oceanie: [
["Australie","Canberra",2,["Sydney","Melbourne"],"Canberra a été choisie en 1908 comme compromis entre Sydney et Melbourne."],
["Nouvelle-Zélande","Wellington",2,["Auckland","Christchurch"],""],
["Papouasie-Nouvelle-Guinée","Port Moresby",3,["Lae","Honiara"],""],
["Fidji","Suva",3,["Nadi","Apia"],""],
["Samoa","Apia",3,["Pago Pago","Suva"],"Pago Pago est aux Samoa américaines."],
["Tonga","Nuku'alofa",3,["Neiafu","Apia"],""],
["Vanuatu","Port-Vila",3,["Luganville","Nouméa"],"Nouméa est en Nouvelle-Calédonie (France)."],
["Îles Salomon","Honiara",3,["Gizo","Port Moresby"],""],
["Kiribati","Tarawa-Sud",3,["Majuro","Funafuti"],""],
["Tuvalu","Funafuti",3,["Tarawa-Sud","Majuro"],""],
["Îles Marshall","Majuro",3,["Ebeye","Palikir"],""],
["États fédérés de Micronésie","Palikir",3,["Kolonia","Majuro"],"Kolonia fut la capitale jusqu'en 1989."],
["Palaos","Ngerulmud",3,["Koror","Melekeok"],"Ngerulmud, situé dans l'État de Melekeok, a remplacé Koror en 2006."]
]
};

const NAMES = {europe:"Europe", afrique:"Afrique", asie:"Asie et Moyen-Orient", ameriques:"Amériques", oceanie:"Océanie"};
const shuffle = a => { for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; };
const allCaps = k => D[k].map(r=>r[1]);
const allCountries = k => D[k].map(r=>r[0]);

function questionsFor(k){
  const rows = D[k], qs = [];
  rows.forEach(([pays, cap, lvl, pieges, note]) => {
    // Question directe : capitale du pays
    const pool = shuffle(allCaps(k).filter(c=>c!==cap && !pieges.includes(c)));
    const opts = [cap].concat(pieges.slice(0,2)).concat(pool).filter((v,i,a)=>a.indexOf(v)===i).slice(0,4);
    const exp = "La capitale de " + pays + " est " + cap + "." + (note ? " " + note : "");
    qs.push([lvl, "Quelle est la capitale de : <b>" + pays + "</b> ?", opts, 0, exp]);
    // Question inverse (une fois sur deux, niveau avancé)
    if(cap !== pays && cap.indexOf(pays) !== 0){
      const others = shuffle(allCountries(k).filter(p=>p!==pays)).slice(0,3);
      qs.push([3, "<b>" + cap + "</b> est la capitale de :", [pays].concat(others), 0, exp]);
    }
  });
  return shuffle(qs).slice(0, Math.min(25, rows.length));
}

const pieges = [
[3, "Quelle ville est la capitale constitutionnelle de la Bolivie ?", ["Sucre","La Paz","Cochabamba","Santa Cruz de la Sierra"], 0, "La Paz est le siège du gouvernement et du Parlement."],
[3, "L'Afrique du Sud compte trois capitales. Laquelle est la capitale administrative (gouvernement) ?", ["Pretoria","Le Cap","Bloemfontein","Johannesburg"], 0, "Le Cap est la capitale législative, Bloemfontein la capitale judiciaire. Johannesburg n'est pas capitale."],
[3, "Quel État n'a pas de capitale officielle, Yaren y faisant office de siège du gouvernement ?", ["Nauru","Tuvalu","Monaco","Vatican"], 0, "Les institutions de Nauru sont situées dans le district de Yaren."],
[3, "Le Parlement d'Eswatini et la résidence royale se trouvent à Lobamba. Quelle est la capitale administrative ?", ["Mbabane","Maseru","Manzini","Gaborone"], 0, "Eswatini a une capitale administrative (Mbabane) et une capitale royale et législative (Lobamba)."],
[3, "Quelle ville était la capitale du Kazakhstan avant Astana ?", ["Almaty","Karaganda","Chymkent","Bichkek"], 0, "Le transfert date de 1997."],
[3, "Quelle ville, siège du gouvernement des Pays-Bas, n'est pas la capitale ?", ["La Haye","Rotterdam","Utrecht","Amsterdam"], 0, "La capitale constitutionnelle est Amsterdam."],
[2, "Laquelle de ces capitales est la plus haute du monde (siège de gouvernement) ?", ["La Paz","Quito","Bogota","Addis-Abeba"], 0, "La Paz, siège du gouvernement bolivien, est à environ 3 600 m. Parmi les capitales officielles, Quito (environ 2 850 m) est la plus haute."],
[3, "Quelle capitale africaine a été créée de toutes pièces pour remplacer Lagos ?", ["Abuja","Dodoma","Yamoussoukro","Gitega"], 0, "Inaugurée en 1991."],
[2, "Quelles sont les deux capitales les plus proches l'une de l'autre au monde (hors Rome/Vatican) ?", ["Kinshasa et Brazzaville","Vienne et Bratislava","Buenos Aires et Montevideo","Abou Dabi et Doha"], 0, "Séparées par le fleuve Congo (quelques kilomètres) ; Vienne et Bratislava sont à environ 55 km."],
[3, "Quelle capitale a été rebaptisée Noursoultan entre 2019 et 2022 ?", ["Astana","Achgabat","Tachkent","Douchanbé"], 0, "Elle a retrouvé le nom d'Astana en 2022."],
[3, "Palikir est la capitale de :", ["États fédérés de Micronésie","Palaos","Îles Marshall","Kiribati"], 0, "Ngerulmud est la capitale des Palaos, Majuro celle des Marshall."],
[2, "Quelle capitale européenne est traversée par le Danube ?", ["Belgrade","Prague","Varsovie","Ljubljana"], 0, "Le Danube traverse aussi Vienne, Bratislava et Budapest. Prague est sur la Vltava."]
];

const mods = Object.keys(D).map(k => ({
  id: k, title: NAMES[k], time: "15 min",
  genCount: Math.min(25, D[k].length),
  gen: () => questionsFor(k)
}));
mods.push({ id: "pieges", title: "Pièges et capitales multiples", time: "10 min", qcm: pieges });

(window.FB = window.FB || {formations: []}).formations.push({
  id: "capitales", num: 6, short: "Capitales", title: "Capitales du monde",
  kicker: "Culture générale", hours: "≈ 1 h 30", quizOnly: true, examSize: 30,
  blurb: "QCM de niveau intermédiaire et avancé uniquement, continent par continent, avec les pièges classiques (Berne, Canberra, Sucre, Naypyidaw…). Questions renouvelées à chaque partie.",
  intro: "Pas de Paris ni de Madrid ici : uniquement des capitales de niveau intermédiaire et avancé, avec des propositions piégeuses (la plus grande ville, l'ancienne capitale, la ville voisine). Les questions et les choix sont tirés au hasard à chaque partie, dans les deux sens (pays → capitale et capitale → pays).",
  modules: mods
});
})();
