/* Formation 3 — Devenir diagnostiqueur immobilier */
(window.FB = window.FB || {formations: []}).formations.push({
  id: "diag", num: 3, short: "Diagnostiqueur", title: "Devenir diagnostiqueur immobilier",
  kicker: "DPE · amiante · plomb · élec/gaz", hours: "≈ 5 h",
  blurb: "Accès au métier, diagnostics obligatoires et durées de validité, DPE en détail, gagner des lettres au meilleur coût, et les questions que posent tous les clients.",
  intro: "Une formation de découverte pour comprendre le métier avant de se lancer, ou pour parler d'égal à égal avec un diagnostiqueur. Le module 4 est consacré à l'optimisation du DPE : quels travaux font gagner le plus de lettres pour le moins d'argent, dans le respect des règles (un diagnostiqueur reste impartial).",
  modules: [

{ id: "metier", title: "Le métier : accès, certification, responsabilité", time: "50 min",
lesson: `
<h3>Ce que fait un diagnostiqueur</h3>
<p>Le diagnostiqueur immobilier réalise les diagnostics techniques obligatoires lors d'une <strong>vente</strong> ou d'une <strong>location</strong> : performance énergétique (DPE), amiante, plomb, termites, installations de gaz et d'électricité, mesurages (Carrez, surface habitable). Il remet un rapport qui rejoint le <strong>dossier de diagnostic technique (DDT)</strong> annexé à la promesse ou au bail. Il ne fait pas d'expertise de valeur et ne vend pas de travaux.</p>

<h3>Comment devient-on diagnostiqueur ?</h3>
<ul>
<li>Aucun diplôme n'est imposé par la loi, mais il faut obtenir une <strong>certification de compétences</strong> par domaine, délivrée par un organisme certificateur accrédité par le <strong>COFRAC</strong>.</li>
<li>La certification comprend un examen théorique et un examen pratique sur site. Elle est valable pour un <strong>cycle de 7 ans</strong>, avec des contrôles de surveillance (sur dossiers et sur site) pendant le cycle.</li>
<li>Domaines certifiés : DPE (sans mention / avec mention pour les immeubles et le tertiaire), amiante (sans / avec mention), plomb (CREP), termites, gaz, électricité. Les mesurages Carrez et Boutin ne demandent pas de certification.</li>
<li>Formations privées de 4 à 8 semaines en général pour préparer le « pack » de certifications (coût de plusieurs milliers d'euros, finançable par le CPF ou France Travail selon la situation).</li>
</ul>

<h3>Les obligations de l'exercice</h3>
<ul>
<li><strong>Assurance responsabilité civile professionnelle</strong> obligatoire, avec des garanties minimales (300 000 € par sinistre, 500 000 € par an).</li>
<li><strong>Indépendance et impartialité</strong> : aucun lien de nature à porter atteinte à son impartialité avec le propriétaire, son mandataire (agence) ou une entreprise susceptible de réaliser des travaux sur le bien. Interdit de recevoir des commissions d'une agence ou d'un artisan.</li>
<li>Matériel adapté (détecteur de plomb à fluorescence X avec source radioactive soumise à autorisation de l'ASN, humidimètre, télémètre, caméra, outils de prélèvement amiante).</li>
<li>Transmission de chaque DPE et audit à l'<strong>observatoire de l'ADEME</strong>, qui attribue un numéro et repère les anomalies statistiques.</li>
</ul>

<h3>Responsabilité : un métier exposé</h3>
<p>Depuis le 1er juillet 2021, le DPE est <strong>opposable</strong> : l'acquéreur ou le locataire peut se retourner contre le vendeur ou le bailleur, qui lui-même peut appeler le diagnostiqueur en garantie. Une erreur de classe peut coûter cher : perte de chance de négocier le prix, coût de travaux supplémentaires. En amiante, une omission peut engager la responsabilité pour le coût du désamiantage. D'où l'importance de bien documenter les limites de mission (pièces non visitées, éléments non accessibles).</p>
<p>Exercer sans certification, ou en violant les règles d'indépendance, est puni d'une amende pénale. Un DPE frauduleux expose à des sanctions plus lourdes et au retrait de la certification.</p>

<h3>Économie du métier</h3>
<ul>
<li>Indépendant (micro-entreprise ou société), salarié d'un cabinet ou franchisé d'un réseau.</li>
<li>Ordres de grandeur de prix : DPE seul d'un appartement 100 à 250 € ; pack vente d'une maison ancienne (DPE, amiante, plomb, termites, gaz, électricité, ERP) 300 à 600 € selon la région ; audit énergétique 500 à 1 200 €.</li>
<li>L'activité dépend du volume de transactions et des réformes : le DPE collectif en copropriété, l'audit énergétique et les mises à jour du DPE ont ouvert de nouveaux marchés.</li>
<li>Prescripteurs : agences, notaires, syndics, bailleurs. Le diagnostiqueur peut travailler avec eux, sans commission ni lien capitalistique.</li>
</ul>
`,
keys: [
"Certification par domaine, organisme accrédité COFRAC, cycle de 7 ans avec surveillance.",
"RC pro obligatoire ; indépendance totale vis-à-vis du vendeur, de l'agence et des artisans.",
"DPE opposable depuis le 1er juillet 2021 : responsabilité réelle du diagnostiqueur.",
"Carrez et Boutin : pas de certification requise."
],
ex: [
{ t: "Conflit d'intérêts ?",
q: `<p>Pour chaque situation, dites si le diagnostiqueur peut accepter : (1) un DPE dans un appartement vendu par l'agence de son beau-frère ; (2) un partenariat où une entreprise d'isolation lui reverse 5 % des chantiers qu'il recommande ; (3) une convention de tarifs préférentiels avec un syndic pour les DPE collectifs ; (4) un DPE pour son propre frère qui vend sa maison.</p>`,
a: `<ol><li>Risque fort : un lien familial avec le mandataire peut être regardé comme portant atteinte à l'impartialité. À éviter.</li><li>Interdit : rémunération par une entreprise de travaux.</li><li>Possible, tant qu'il n'y a ni commission versée au syndic ni dépendance économique contraire à l'impartialité.</li><li>À refuser : lien direct avec le propriétaire.</li></ol>` }
],
qcm: [
[1, "Pour réaliser un DPE, un diagnostiqueur doit :", ["Être certifié par un organisme accrédité par le COFRAC", "Avoir un diplôme d'ingénieur", "Être inscrit à l'ordre des architectes", "Être agréé par la mairie"], 0, "La certification se fait domaine par domaine."],
[1, "Un mesurage loi Carrez nécessite-t-il une certification ?", ["Non", "Oui, certification « mesurage »", "Oui, la certification DPE", "Seulement en copropriété de plus de 50 lots"], 0, "Carrez et Boutin ne sont pas des domaines certifiés."],
[1, "Le DPE est opposable depuis :", ["Le 1er juillet 2021", "Le 1er janvier 2026", "Le 1er janvier 2018", "2007"], 0, "Avant, il n'avait qu'une valeur informative."],
[2, "Un diagnostiqueur peut-il percevoir une commission d'un artisan à qui il envoie des clients ?", ["Non, c'est contraire à l'obligation d'impartialité", "Oui, si elle est déclarée", "Oui, jusqu'à 5 %", "Oui, après le rapport"], 0, "Article L271-6 du code de la construction et de l'habitation."],
[2, "Le cycle de certification d'un diagnostiqueur dure :", ["7 ans, avec des surveillances en cours de cycle", "1 an", "Toute la carrière", "3 ans"], 0, "Le cycle a été allongé par la réforme de la certification."],
[2, "Chaque DPE est transmis :", ["À l'observatoire de l'ADEME, qui lui attribue un numéro", "À la mairie", "Au notaire uniquement", "À la DGFiP"], 0, "Ce numéro permet de vérifier l'authenticité et de mettre à jour le DPE."],
[3, "Un acheteur découvre que son logement classé D est en réalité un F. Il peut :", ["Agir contre le vendeur, qui peut appeler le diagnostiqueur en garantie, pour obtenir une indemnisation", "Faire annuler automatiquement la vente", "Rien, le DPE est informatif", "Obtenir le remboursement intégral du prix"], 0, "L'indemnisation porte souvent sur la perte de chance de négocier et le surcoût de travaux."],
[3, "Quel appareil utilisé pour le CREP est soumis à autorisation de l'Autorité de sûreté nucléaire ?", ["L'analyseur de plomb à fluorescence X à source radioactive", "Le télémètre laser", "L'humidimètre", "La caméra thermique"], 0, "Les appareils à source radioactive imposent autorisation, formation et suivi dosimétrique."]
] },

{ id: "ddt", title: "Les diagnostics obligatoires et leur durée de validité", time: "1 h",
lesson: `
<h3>À la vente : le dossier de diagnostic technique</h3>
<div class="tw"><table><thead><tr><th>Diagnostic</th><th>Quand est-il obligatoire ?</th><th>Validité (vente)</th></tr></thead><tbody>
<tr><td>DPE</td><td>Tout logement (sauf exceptions : constructions provisoires, bâtiments non chauffés…)</td><td>10 ans (DPE réalisés depuis le 1er juillet 2021)</td></tr>
<tr><td>Audit énergétique</td><td>Maison ou immeuble en monopropriété classé E, F ou G</td><td>5 ans</td></tr>
<tr><td>Amiante</td><td>Permis de construire délivré avant le 1er juillet 1997</td><td>Illimitée si absence d'amiante (repérage selon les normes actuelles) ; sinon contrôle périodique</td></tr>
<tr><td>Plomb (CREP)</td><td>Logement construit avant le 1er janvier 1949</td><td>Illimitée si absence ou concentration inférieure au seuil ; 1 an sinon</td></tr>
<tr><td>Électricité</td><td>Installation de plus de 15 ans</td><td>3 ans</td></tr>
<tr><td>Gaz</td><td>Installation de plus de 15 ans</td><td>3 ans</td></tr>
<tr><td>Termites</td><td>Zone délimitée par arrêté préfectoral</td><td>6 mois</td></tr>
<tr><td>État des risques (ERP)</td><td>Toujours</td><td>6 mois</td></tr>
<tr><td>Assainissement non collectif</td><td>Logement non raccordé au tout-à-l'égout (contrôle du SPANC)</td><td>3 ans</td></tr>
<tr><td>Mérule</td><td>Zone délimitée par arrêté (information)</td><td>—</td></tr>
<tr><td>Bruit</td><td>Zone d'exposition au bruit d'un aérodrome</td><td>—</td></tr>
<tr><td>Mesurage Carrez</td><td>Lot de copropriété (≥ 8 m²)</td><td>Sans limite, sauf travaux modifiant la surface</td></tr>
</tbody></table></div>
<p>Le DDT est annexé à la promesse de vente, ou à défaut à l'acte authentique. Sans diagnostic valide, le vendeur ne peut pas s'exonérer de la garantie des vices cachés pour le risque concerné (amiante, plomb, termites, gaz, électricité, assainissement).</p>
<div class="warn"><span class="tag">Erreur de surface Carrez</span><p>Si la surface réelle est inférieure de plus de 5 % à la surface Carrez indiquée, l'acquéreur peut obtenir une diminution de prix proportionnelle, dans l'année qui suit l'acte.</p></div>

<h3>À la location : le dossier annexé au bail</h3>
<div class="tw"><table><thead><tr><th>Diagnostic</th><th>Validité (location)</th></tr></thead><tbody>
<tr><td>DPE</td><td>10 ans</td></tr>
<tr><td>CREP (avant 1949)</td><td>6 ans si présence de plomb ; illimité sinon</td></tr>
<tr><td>Électricité et gaz (installations de plus de 15 ans)</td><td>6 ans</td></tr>
<tr><td>État des risques (ERP)</td><td>6 mois au moment de la signature</td></tr>
<tr><td>Surface habitable (loi Boutin)</td><td>Sans limite, sauf travaux</td></tr>
<tr><td>Amiante</td><td>Dossier amiante – parties privatives tenu à disposition</td></tr>
<tr><td>Bruit</td><td>Selon la zone</td></tr>
</tbody></table></div>

<h3>Repères sur le DPE dans le temps</h3>
<ul>
<li>DPE établis avant le 1er janvier 2018 : périmés.</li>
<li>DPE établis entre le 1er janvier 2018 et le 30 juin 2021 : valables jusqu'au 31 décembre 2024 seulement, donc <strong>périmés</strong> aujourd'hui.</li>
<li>DPE établis depuis le 1er juillet 2021 : valables 10 ans. Ceux établis avant 2026 peuvent bénéficier d'une <strong>attestation de mise à jour</strong> gratuite pour le nouveau coefficient de l'électricité (module 3).</li>
</ul>

<h3>En copropriété</h3>
<ul>
<li><strong>Dossier technique amiante (DTA)</strong> des parties communes, tenu par le syndic, pour les immeubles dont le permis est antérieur à juillet 1997.</li>
<li><strong>DPE collectif</strong> obligatoire : plus de 200 lots depuis 2024, 51 à 200 lots depuis 2025, 50 lots et moins depuis le 1er janvier 2026.</li>
<li><strong>Projet de plan pluriannuel de travaux (PPPT)</strong> pour les copropriétés de plus de 15 ans, réalisé par un professionnel qualifié (souvent un diagnostiqueur avec mention ou un bureau d'études).</li>
</ul>

<h3>Annonces immobilières</h3>
<p>Toute annonce de vente ou de location doit mentionner la classe énergie et la classe climat, une estimation des dépenses annuelles d'énergie et, pour les classes F et G, la mention « logement à consommation énergétique excessive ».</p>
`,
keys: [
"Validités vente : DPE 10 ans ; élec/gaz 3 ans ; termites et ERP 6 mois ; plomb 1 an si présence ; amiante illimité si absence.",
"Location : électricité, gaz et CREP (si présence) 6 ans.",
"Amiante : permis avant le 1er juillet 1997 ; plomb : construit avant 1949 ; élec/gaz : installation de plus de 15 ans.",
"DPE antérieurs au 1er juillet 2021 : tous périmés."
],
ex: [
{ t: "Composer le DDT",
q: `<p>Listez les diagnostics obligatoires pour : (1) la vente d'une maison de 1962, chauffage fioul, installation électrique d'origine, sans gaz, en zone termites, fosse septique, classée F ; (2) la location d'un T2 de 2005 en copropriété, chauffage électrique.</p>`,
a: `<ol><li>DPE, <strong>audit énergétique</strong> (maison classée F), amiante (avant 1997), électricité (installation de plus de 15 ans), termites, ERP, assainissement non collectif (SPANC). Pas de plomb (après 1949), pas de gaz.</li><li>DPE, ERP, surface habitable (Boutin), électricité (une installation d'origine de 2005 a plus de 15 ans en 2026 : diagnostic à faire). Pas d'amiante (permis postérieur à 1997), pas de CREP. Le Carrez n'est exigé qu'à la vente.</li></ol>` }
],
qcm: [
[1, "La durée de validité d'un DPE réalisé en 2023 est de :", ["10 ans", "3 ans", "6 mois", "Illimitée"], 0, "Pour les DPE établis depuis le 1er juillet 2021."],
[1, "Le diagnostic amiante est obligatoire pour les biens dont le permis de construire date d'avant :", ["Le 1er juillet 1997", "1949", "1975", "2001"], 0, "1949 correspond au plomb."],
[1, "Le constat de risque d'exposition au plomb (CREP) concerne les logements construits avant :", ["1949", "1997", "1975", "1914"], 0, "Peintures au plomb interdites ensuite pour les logements."],
[2, "En vente, un diagnostic termites est valable :", ["6 mois", "1 an", "3 ans", "10 ans"], 0, "Comme l'état des risques."],
[2, "Les diagnostics électricité et gaz en location sont valables :", ["6 ans", "3 ans", "10 ans", "1 an"], 0, "3 ans en vente."],
[2, "Un DPE réalisé en mars 2020 est en 2026 :", ["Périmé", "Valable jusqu'en 2030", "Valable avec une mise à jour ADEME", "Valable pour la location seulement"], 0, "Les DPE 2018-juin 2021 ont expiré le 31 décembre 2024."],
[2, "L'audit énergétique est obligatoire à la vente :", ["D'une maison ou d'un immeuble en monopropriété classé E, F ou G", "De tout appartement en copropriété", "De tout logement construit avant 1975", "Uniquement des passoires G"], 0, "Classe E depuis le 1er janvier 2025 ; D prévue en 2034."],
[3, "La surface Carrez vendue est de 60 m², la surface réelle de 56 m². L'acquéreur peut :", ["Demander une baisse de prix proportionnelle dans l'année suivant l'acte", "Rien, l'écart est inférieur à 10 %", "Annuler la vente", "Demander des dommages et intérêts uniquement"], 0, "L'écart est de 6,7 %, au-delà du seuil de 5 %."],
[3, "Depuis quand le DPE collectif est-il obligatoire pour les copropriétés de 50 lots ou moins ?", ["1er janvier 2026", "1er janvier 2024", "1er janvier 2025", "1er janvier 2028"], 0, "Calendrier : 2024 (> 200 lots), 2025 (51-200), 2026 (≤ 50)."],
[3, "Sans diagnostic gaz valide annexé à la vente, le vendeur :", ["Ne peut pas s'exonérer de la garantie des vices cachés pour ce risque", "Voit la vente annulée", "Paie une amende de 1 500 €", "N'encourt rien"], 0, "C'est la sanction civile commune aux diagnostics techniques."]
] },

{ id: "dpe", title: "Le DPE en profondeur : méthode, étiquettes, réforme 2026", time: "1 h 10",
lesson: `
<h3>Ce que mesure le DPE</h3>
<p>Le DPE estime, par la <strong>méthode de calcul 3CL-DPE 2021</strong>, la consommation conventionnelle d'un logement pour 5 usages : chauffage, eau chaude sanitaire, refroidissement, éclairage et auxiliaires (ventilateurs, pompes). Il ne se base plus sur les factures. Le résultat est exprimé :</p>
<ul>
<li>en <strong>énergie primaire</strong> (kWhEP/m²/an), pour l'étiquette énergie ;</li>
<li>en <strong>émissions de gaz à effet de serre</strong> (kgCO2/m²/an), pour l'étiquette climat.</li>
</ul>
<p>L'étiquette finale retient la <strong>plus mauvaise des deux</strong> : c'est le « double seuil ».</p>
<div class="tw"><table><thead><tr><th>Classe</th><th class="n">Énergie primaire (kWhEP/m²/an)</th><th class="n">GES (kgCO2/m²/an)</th></tr></thead><tbody>
<tr><td>A</td><td class="n">≤ 70</td><td class="n">≤ 6</td></tr>
<tr><td>B</td><td class="n">71 à 110</td><td class="n">7 à 11</td></tr>
<tr><td>C</td><td class="n">111 à 180</td><td class="n">12 à 30</td></tr>
<tr><td>D</td><td class="n">181 à 250</td><td class="n">31 à 50</td></tr>
<tr><td>E</td><td class="n">251 à 330</td><td class="n">51 à 70</td></tr>
<tr><td>F</td><td class="n">331 à 420</td><td class="n">71 à 100</td></tr>
<tr><td>G</td><td class="n">&gt; 420</td><td class="n">&gt; 100</td></tr>
</tbody></table></div>
<p>Depuis juillet 2024, les seuils sont <strong>ajustés pour les logements de moins de 40 m²</strong>, qui étaient pénalisés (l'eau chaude pèse lourd rapporté à une petite surface).</p>

<h3>Énergie primaire et coefficient de l'électricité : la réforme du 1er janvier 2026</h3>
<p>L'électricité consommée (énergie finale) est multipliée par un coefficient pour obtenir l'énergie primaire. Ce coefficient est passé de <strong>2,3 à 1,9</strong> au 1er janvier 2026. Les autres énergies (gaz, fioul, bois) ont un coefficient de 1 (0,6 pour le bois dans certains cas). Effet : les logements chauffés à l'électricité gagnent mécaniquement en énergie primaire, souvent une classe. Environ 850 000 logements seraient ainsi sortis du statut de passoire.</p>
<div class="ex"><span class="tag">Exemple</span><p>Studio chauffé et en eau chaude électriques : 160 kWh d'énergie finale/m²/an.<br>Avant 2026 : 160 × 2,3 = 368 kWhEP → <strong>F</strong>.<br>Depuis 2026 : 160 × 1,9 = 304 kWhEP → <strong>E</strong>.</p></div>
<p>Les DPE établis avant 2026 restent valables. Le propriétaire peut télécharger gratuitement sur le site de l'observatoire de l'ADEME une <strong>attestation de mise à jour</strong> avec la nouvelle étiquette, sans nouvelle visite. Elle a la même valeur que le DPE d'origine.</p>

<h3>Les données d'entrée : là où tout se joue</h3>
<p>Le diagnostiqueur relève sur place : surfaces, orientation, parois (murs, planchers, toiture) et leur isolation, menuiseries (type de vitrage, menuiserie, volets), système de chauffage, d'eau chaude, de ventilation, de refroidissement, et leur année d'installation. Quand une information ne peut pas être <strong>constatée ou justifiée</strong>, le logiciel applique une <strong>valeur par défaut</strong> fondée sur l'année de construction, souvent défavorable.</p>
<div class="note"><span class="tag">Justificatifs acceptables</span><p>Factures de travaux d'isolation mentionnant l'épaisseur et le matériau, fiches techniques des équipements (rendement, COP), attestations RGE, procès-verbaux de réception, notices des menuiseries, photos datées des travaux. Le diagnostiqueur peut les exiger et doit les conserver.</p></div>

<h3>Le rapport DPE</h3>
<ul>
<li>Les deux étiquettes, une estimation des <strong>dépenses annuelles d'énergie</strong> (fourchette), la part de chaque usage.</li>
<li>Les déperditions par poste (murs, toiture, planchers, fenêtres, ventilation, ponts thermiques).</li>
<li>Des <strong>recommandations de travaux</strong> en deux étapes (« pack » de travaux) avec estimation de coût et classe atteinte.</li>
<li>Le confort d'été (indicateur) et les énergies renouvelables présentes.</li>
</ul>

<h3>Les variantes du DPE</h3>
<ul>
<li><strong>DPE à l'appartement</strong>, réalisé dans le logement.</li>
<li><strong>DPE généré à partir des données de l'immeuble</strong> : un DPE collectif permet d'éditer les DPE des lots.</li>
<li><strong>DPE collectif</strong> (bâtiment entier), obligatoire en copropriété selon le calendrier 2024-2026.</li>
<li><strong>Audit énergétique</strong> : plus complet, avec des parcours de travaux chiffrés pour atteindre au moins la classe B (ou la meilleure possible), réalisé par un diagnostiqueur certifié avec mention, un bureau d'études ou un architecte qualifié.</li>
</ul>

<h3>Les conséquences d'une étiquette F ou G</h3>
<ul>
<li><strong>Gel des loyers</strong> : depuis le 24 août 2022, pas de révision annuelle (IRL) ni d'augmentation à la relocation pour les F et G.</li>
<li><strong>Interdiction de location</strong> des logements trop énergivores (calendrier de la loi Climat et résilience) : <strong>G depuis le 1er janvier 2025</strong>, <strong>F au 1er janvier 2028</strong>, <strong>E au 1er janvier 2034</strong>, pour les nouveaux baux et les reconductions. Outre-mer : G en 2028, F en 2031.</li>
<li>Audit énergétique obligatoire à la vente des maisons E, F, G.</li>
<li>Décote à la vente (« valeur verte »).</li>
</ul>
<div class="warn"><span class="tag">Projet de loi en cours (octobre 2026)</span><p>Le projet de loi « Relance et décentralisation du logement », adopté par le Sénat le 8 juillet 2026 et par la commission de l'Assemblée le 22 septembre, doit être examiné en séance mi-novembre 2026. Son article 6 permettrait de relouer des logements F ou G en échange d'un engagement contractuel de travaux. Tant qu'il n'est pas promulgué, l'interdiction actuelle s'applique.</p></div>
`,
keys: [
"Étiquette = la plus mauvaise des deux classes (énergie primaire et GES).",
"Coefficient électricité : 1,9 depuis le 1er janvier 2026 (2,3 avant) ; mise à jour gratuite via l'ADEME.",
"Sans justificatif, valeurs par défaut défavorables : les factures et fiches techniques comptent.",
"Location interdite : G depuis 2025, F en 2028, E en 2034 ; gel des loyers F et G depuis août 2022."
],
ex: [
{ t: "Quelle étiquette ?",
q: `<ol><li>Maison au fioul : 240 kWhEP/m²/an et 72 kgCO2/m²/an. Quelle classe ?</li><li>Appartement tout électrique : 195 kWh d'énergie finale/m²/an, émissions faibles. Classe avec le coefficient 2,3 puis 1,9 ?</li></ol>`,
a: `<ol><li>Énergie : D ; climat : F (71 à 100). Double seuil : <strong>F</strong>. Le fioul est pénalisé par le CO2 : changer de mode de chauffage est le premier levier.</li><li>195 × 2,3 = 448,5 → <strong>G</strong> ; 195 × 1,9 = 370,5 → <strong>F</strong>. Le logement reste interdit à la location en 2028 sans travaux.</li></ol>` }
],
qcm: [
[1, "L'étiquette DPE finale correspond à :", ["La plus mauvaise des classes énergie et climat", "La moyenne des deux", "La classe énergie seule", "La classe climat seule"], 0, "C'est la règle du double seuil."],
[1, "Le coefficient de conversion de l'électricité en énergie primaire est depuis le 1er janvier 2026 de :", ["1,9", "2,3", "2,58", "1"], 0, "Il était de 2,3 auparavant."],
[1, "Un logement consommant 300 kWhEP/m²/an (GES faibles) est classé :", ["E", "D", "F", "G"], 0, "E va de 251 à 330 kWhEP."],
[2, "Pour un DPE réalisé en 2024 sur un logement électrique, le propriétaire peut :", ["Télécharger gratuitement une attestation de mise à jour sur le site de l'ADEME", "Refaire obligatoirement un DPE", "Rien, l'ancien coefficient s'applique jusqu'à expiration", "Demander une révision au tribunal"], 0, "Sans nouvelle visite, avec la même valeur juridique."],
[2, "En l'absence de facture d'isolation des combles, le diagnostiqueur :", ["Applique une valeur par défaut selon l'année de construction, s'il ne peut pas constater l'isolation", "Considère l'isolation comme excellente", "Refuse de faire le DPE", "Demande une expertise judiciaire"], 0, "D'où l'importance de rassembler les justificatifs."],
[2, "Depuis le 24 août 2022, pour un logement F loué :", ["Le loyer ne peut plus être révisé ni augmenté à la relocation", "Le loyer doit baisser de 10 %", "La location est interdite", "Rien ne change"], 0, "Le gel concerne les classes F et G."],
[2, "La location d'un logement classé F sera interdite en métropole à partir du :", ["1er janvier 2028", "1er janvier 2025", "1er janvier 2034", "1er janvier 2030"], 0, "Sous réserve du projet de loi Relance logement non encore adopté."],
[3, "Maison : 230 kWhEP/m²/an et 55 kgCO2/m²/an. Classe ?", ["E (classe climat)", "D", "C", "F"], 0, "Énergie D, mais climat E (51 à 70) : le double seuil retient E."],
[3, "Pourquoi les petits logements de moins de 40 m² ont-ils bénéficié d'un ajustement des seuils en 2024 ?", ["Parce que l'eau chaude sanitaire pèse très lourd rapportée à une petite surface", "Parce qu'ils sont mieux isolés", "Pour réduire le prix des DPE", "Parce qu'ils sont tous chauffés au gaz"], 0, "Les studios étaient surreprésentés dans les classes F et G."],
[3, "Le projet de loi Relance logement (octobre 2026) prévoit pour les passoires F et G :", ["De permettre leur relocation contre un engagement contractuel de travaux, sous réserve de son adoption", "De supprimer le DPE", "De reporter l'interdiction des G à 2040", "D'interdire leur vente"], 0, "Adopté au Sénat le 8 juillet 2026, attendu en séance à l'Assemblée mi-novembre."]
] },

{ id: "lettres", title: "Gagner des lettres au moindre coût", time: "1 h 15",
lesson: `
<h3>La règle d'or : gratuit d'abord, rentable ensuite</h3>
<p>Un propriétaire (ou un investisseur qui veut relouer) cherche à monter d'une ou deux classes avec le budget le plus faible. L'ordre d'attaque :</p>
<ol>
<li><strong>Vérifier les données</strong> : un DPE fait avec des valeurs par défaut peut sous-estimer l'isolation réelle. Rassembler factures, fiches techniques et photos, puis faire refaire ou corriger le DPE. Coût : quelques centaines d'euros au plus.</li>
<li><strong>Appliquer la réforme 2026</strong> pour un logement électrique : attestation ADEME gratuite.</li>
<li><strong>Identifier le poste dominant</strong> dans le rapport (déperditions et répartition par usage) : on attaque ce qui pèse le plus.</li>
<li><strong>Choisir les gestes avec le meilleur ratio gain/coût</strong>, puis les plus coûteux seulement si nécessaire.</li>
</ol>
<div class="warn"><span class="tag">Ligne rouge</span><p>Le diagnostiqueur ne « gonfle » pas un DPE et ne vend pas de travaux. Il peut expliquer les recommandations de son rapport et les justificatifs qui comptent. Le propriétaire choisit ensuite librement ses artisans. Un DPE complaisant engage sa responsabilité et sa certification.</p></div>

<h3>Le palmarès des gestes rentables (ordres de grandeur 2026, posés, hors aides)</h3>
<div class="tw"><table><thead><tr><th>Geste</th><th>Coût indicatif</th><th>Effet typique sur le DPE</th><th>Pour qui</th></tr></thead><tbody>
<tr><td>Isolation des combles perdus (soufflage)</td><td>25 à 45 €/m²</td><td>Fort : la toiture représente souvent 25 à 30 % des déperditions</td><td>Maisons, derniers étages</td></tr>
<tr><td>Ballon thermodynamique à la place d'un cumulus électrique</td><td>2 500 à 4 500 €</td><td>Fort dans les petites surfaces où l'eau chaude pèse lourd</td><td>Studios, T1, T2 électriques</td></tr>
<tr><td>Pompe à chaleur air/air à la place de convecteurs</td><td>2 500 à 4 500 € (mono-split), 5 000 à 10 000 € (multi-split)</td><td>Très fort : la consommation de chauffage est divisée par 3 environ</td><td>Logements chauffés à l'électricité directe</td></tr>
<tr><td>Pompe à chaleur air/eau à la place d'une chaudière fioul ou gaz ancienne</td><td>10 000 à 18 000 €</td><td>Très fort sur l'étiquette climat (CO2) et l'énergie</td><td>Maisons au fioul</td></tr>
<tr><td>Isolation du plancher bas (sous-face de cave ou vide sanitaire)</td><td>30 à 60 €/m²</td><td>Moyen à fort</td><td>Rez-de-chaussée, maisons sur cave</td></tr>
<tr><td>VMC hygroréglable à la place d'une ventilation par ouverture des fenêtres</td><td>1 000 à 2 500 €</td><td>Moyen</td><td>Logements sans ventilation mécanique</td></tr>
<tr><td>Programmation, thermostat, robinets thermostatiques</td><td>200 à 800 €</td><td>Faible, mais peu coûteux</td><td>Tous</td></tr>
<tr><td>Remplacement des fenêtres simple vitrage</td><td>500 à 1 200 € par fenêtre</td><td>Moyen ; faible si déjà en double vitrage</td><td>Logements en simple vitrage</td></tr>
<tr><td>Isolation des murs par l'intérieur</td><td>50 à 100 €/m²</td><td>Fort, mais perte de surface</td><td>Murs donnant sur l'extérieur</td></tr>
<tr><td>Isolation des murs par l'extérieur</td><td>120 à 250 €/m²</td><td>Très fort</td><td>Maisons, copropriétés (vote en AG)</td></tr>
</tbody></table></div>
<p>Les remplacements de radiateurs électriques par des modèles « à inertie » ont un effet modeste dans le calcul : ils ne remplacent pas une pompe à chaleur.</p>

<h3>Cas types</h3>
<div class="ex"><span class="tag">Studio de 22 m², convecteurs + cumulus, classé G (ancien DPE)</span><ol><li>Mise à jour ADEME gratuite : souvent F.</li><li>Ballon thermodynamique compact ou petit chauffe-eau thermodynamique : l'eau chaude représente parfois 30 à 40 % de la consommation d'un studio.</li><li>Mono-split air/air pour la pièce principale.</li><li>Résultat fréquent : E, voire D, pour 6 000 à 9 000 € de travaux.</li></ol></div>
<div class="ex"><span class="tag">Maison des années 1970, chaudière fioul, combles non isolés, classée F</span><ol><li>Isolation des combles perdus : 2 500 à 4 000 € pour 90 m².</li><li>Pompe à chaleur air/eau à la place du fioul : l'étiquette climat bondit (le fioul émet beaucoup de CO2).</li><li>Résultat fréquent : C ou D.</li></ol></div>
<div class="ex"><span class="tag">Appartement en copropriété, chauffage collectif gaz, classé F</span><p>Peu de leviers individuels : fenêtres, isolation intérieure des murs froids, robinets thermostatiques. Le vrai levier est collectif : vote de travaux en assemblée générale (isolation de façade, chaudière collective). Le PPPT et le DPE collectif servent de base.</p></div>

<h3>Financer les travaux</h3>
<ul>
<li><strong>MaPrimeRénov'</strong> (par geste ou rénovation d'ampleur), selon les conditions et l'ouverture du guichet de l'année, et sous conditions de ressources pour les propriétaires occupants ; les bailleurs y ont accès sous conditions.</li>
<li><strong>Certificats d'économies d'énergie</strong> (primes des fournisseurs d'énergie).</li>
<li><strong>Éco-prêt à taux zéro</strong>, TVA à 5,5 % sur les travaux de rénovation énergétique.</li>
<li>Pour un bailleur : <strong>déficit foncier doublé à 21 400 €</strong> pour une rénovation qui fait sortir le logement de E, F ou G vers A à D (dépenses payées jusqu'au 31 décembre 2027).</li>
<li>Artisans <strong>RGE</strong> (reconnu garant de l'environnement) obligatoires pour les aides.</li>
</ul>
<div class="rdv"><span class="tag">Conseil de méthode</span><p>Pour viser une classe précise, demandez au diagnostiqueur une simulation à partir du DPE existant, ou faites faire un audit énergétique : il chiffre des scénarios. Faites refaire le DPE après travaux, avec toutes les factures.</p></div>
`,
keys: [
"Gratuit d'abord : justificatifs pour éviter les valeurs par défaut, mise à jour ADEME pour l'électrique.",
"Gestes les plus rentables : combles perdus, PAC (air/air ou air/eau), chauffe-eau thermodynamique, plancher bas.",
"Fioul/gaz : l'étiquette climat (CO2) bloque souvent ; changer d'énergie est le levier n°1.",
"Diagnostiqueur impartial : il explique, il ne vend pas de travaux et ne gonfle pas les étiquettes."
],
ex: [
{ t: "Budget de 8 000 € : que faire ?",
q: `<p>Un investisseur possède une maison de 85 m² des années 1980, chauffage par convecteurs électriques, cumulus de 200 L, combles perdus avec 5 cm de laine (facture disponible), simple vitrage sur 2 fenêtres sur 8. DPE de 2023 en F. Budget : 8 000 €, objectif : sortir de F avant 2028.</p><p>Classez les actions et justifiez.</p>`,
a: `<ol><li>Attestation de mise à jour ADEME (gratuit) : chauffage tout électrique, gain probable d'une classe → peut-être déjà E.</li><li>Vérifier que la facture d'isolation a bien été prise en compte (sinon corriger le DPE).</li><li>Isolation des combles (complément jusqu'à 30-40 cm) : environ 2 500 à 3 500 € pour ~85 m² de plancher de combles.</li><li>Pompe à chaleur air/air multi-split pour les pièces principales ou chauffe-eau thermodynamique, selon le reliquat de budget.</li><li>Les 2 fenêtres en simple vitrage passent après : moins rentables.</li></ol><p>Puis nouveau DPE avec toutes les factures.</p>` }
],
qcm: [
[1, "Quel est le premier geste, gratuit, pour un logement électrique au DPE de 2024 ?", ["Télécharger l'attestation de mise à jour sur le site de l'ADEME", "Changer les fenêtres", "Isoler les murs par l'extérieur", "Refaire l'électricité"], 0, "Le coefficient 1,9 fait souvent gagner une classe."],
[1, "Quel geste est généralement le plus rentable dans une maison aux combles perdus non isolés ?", ["L'isolation des combles par soufflage", "Le changement des fenêtres", "L'isolation des murs par l'extérieur", "Des radiateurs à inertie"], 0, "Peu coûteux, fort impact."],
[1, "Les artisans doivent être RGE pour :", ["Que le client bénéficie des aides publiques à la rénovation", "Pouvoir faire des travaux", "Que le DPE soit valide", "Facturer en TVA à 20 %"], 0, "MaPrimeRénov', CEE et éco-PTZ exigent un professionnel RGE."],
[2, "Dans un studio électrique, pourquoi le chauffe-eau thermodynamique est-il un levier fort ?", ["L'eau chaude représente une part élevée de la consommation rapportée aux m²", "Il chauffe aussi le logement", "Il supprime le gel des loyers", "Il n'a pas d'effet sur le DPE"], 0, "C'est pour cette raison que les petites surfaces ont aussi eu un ajustement de seuils."],
[2, "Une maison au fioul est classée F à cause de son étiquette climat. Le levier prioritaire est :", ["Changer d'énergie de chauffage (pompe à chaleur)", "Changer les fenêtres", "Installer une VMC", "Repeindre en blanc"], 0, "Le fioul émet beaucoup de CO2 par kWh."],
[2, "Remplacer des convecteurs par des radiateurs à inertie fait-il gagner beaucoup ?", ["Peu, dans la méthode de calcul ; une pompe à chaleur fait bien mieux", "Deux classes en général", "Autant qu'une PAC", "Rien du tout, c'est interdit"], 0, "L'effet porte sur la régulation et l'émission, pas sur le rendement de production."],
[2, "Le plafond de déficit foncier pour une rénovation énergétique sortant un logement de E, F ou G vers A à D est de :", ["21 400 € (dépenses jusqu'à fin 2027)", "10 700 €", "15 000 €", "Sans limite"], 0, "Le plafond de droit commun est de 10 700 €."],
[3, "Un propriétaire demande au diagnostiqueur de « mettre E au lieu de F, ça ne fait que 10 kWh d'écart ». Réponse correcte ?", ["Refuser : le DPE doit refléter les données constatées ou justifiées, et il est opposable", "Accepter si l'écart est faible", "Accepter contre un supplément", "Proposer de mettre E et d'ajouter une réserve"], 0, "Un DPE de complaisance expose à des sanctions et au retrait de la certification."],
[3, "Dans un appartement en copropriété à chauffage collectif gaz, le levier le plus puissant pour gagner des classes est généralement :", ["Les travaux votés en assemblée générale (isolation, chaufferie)", "Le changement de la porte d'entrée", "L'achat d'un radiateur d'appoint", "Les ampoules LED"], 0, "Le DPE collectif et le PPPT servent de base à ces décisions."],
[3, "Après des travaux, que faut-il faire pour que la nouvelle classe soit opposable ?", ["Faire réaliser un nouveau DPE en fournissant les factures et fiches techniques", "Envoyer les factures à la mairie", "Attendre la fin de validité de l'ancien DPE", "Faire une attestation sur l'honneur"], 0, "Le nouveau DPE remplace l'ancien dans l'observatoire ADEME."]
] },

{ id: "faq", title: "Les questions fréquentes des clients", time: "1 h",
lesson: `
<h3>« Qui choisit et qui paie le diagnostiqueur ? »</h3>
<p>Le <strong>vendeur</strong> ou le <strong>bailleur</strong> : c'est lui qui doit fournir le dossier. Il choisit librement un diagnostiqueur certifié (vérification possible dans l'annuaire officiel du ministère). L'agence peut recommander, mais ne peut pas imposer ni être rémunérée.</p>

<h3>« Deux diagnostiqueurs donnent deux lettres différentes : qui a raison ? »</h3>
<p>Les écarts viennent presque toujours des <strong>données d'entrée</strong> (isolation constatée ou par défaut, surfaces, équipements). Demander les deux rapports et comparer les pages « descriptif du bâti » et « équipements ». Le dernier DPE établi remplace le précédent dans l'observatoire ; on ne peut pas choisir celui qui arrange.</p>

<h3>« Je vends mon appartement classé G, c'est interdit ? »</h3>
<p>Non. Les interdictions concernent la <strong>location</strong>. Une vente reste possible quel que soit le classement ; seul l'audit énergétique est obligatoire pour les maisons et monopropriétés classées E, F ou G. L'acheteur-investisseur devra, lui, faire des travaux pour louer.</p>

<h3>« Mon locataire est en place dans un logement G : que dois-je faire ? »</h3>
<p>L'interdiction s'applique aux nouveaux baux et aux <strong>renouvellements ou reconductions tacites</strong> conclus depuis le 1er janvier 2025. Un logement G ne répond plus au critère de décence énergétique : le locataire peut demander au juge d'ordonner des travaux ou une baisse de loyer. Le bailleur ne peut pas expulser le locataire pour ce motif. En pratique, il faut planifier les travaux. Le loyer est gelé.</p>

<h3>« Je loue en meublé ou en saisonnier, suis-je concerné ? »</h3>
<p>La location meublée de résidence principale suit les mêmes règles de décence énergétique que la location nue. Pour les <strong>meublés de tourisme</strong>, la loi Le Meur impose un DPE : classe F minimum (E dès 2028) pour les nouveaux meublés soumis à autorisation de changement d'usage, puis A à D pour tous les meublés de tourisme en 2034.</p>

<h3>« Faut-il un DPE pour une maison sans chauffage ? »</h3>
<p>Un bâtiment sans aucun système de chauffage (ou résidence non destinée à être chauffée) peut être exclu du DPE. Mais un logement « mal chauffé » ou dont le chauffage est hors service reste soumis au DPE, qui se fera avec les équipements présents ou des hypothèses réglementaires.</p>

<h3>« L'annonce doit-elle afficher la classe ? »</h3>
<p>Oui, la classe énergie et la classe climat, et une estimation des dépenses d'énergie. Pour les F et G, la mention « logement à consommation énergétique excessive ». Un défaut d'affichage est sanctionnable par une amende administrative.</p>

<h3>« Mon DPE a été fait sans visiter le grenier. »</h3>
<p>Le rapport doit mentionner les parties non visitées et les hypothèses retenues. Si le grenier est isolé et accessible, demandez une visite complémentaire et un DPE corrigé.</p>

<h3>« Combien de temps prend un DPE ? »</h3>
<p>De 1 h à 2 h sur place pour un appartement, davantage pour une maison. Le rapport est généralement remis sous quelques jours. Préparez : plans, factures de travaux, fiches techniques, accès aux combles, au tableau électrique, à la chaudière et au ballon.</p>

<h3>« Le DPE peut-il être contesté ? »</h3>
<p>Le DPE est opposable. Un acquéreur ou un locataire qui démontre une erreur fautive peut obtenir réparation du vendeur ou du bailleur, qui se retourne contre le diagnostiqueur. Le diagnostiqueur peut aussi corriger lui-même un rapport erroné : le nouveau rapport remplace l'ancien dans l'observatoire.</p>
`,
keys: [
"Vendre une passoire est permis ; louer une passoire G ne l'est plus depuis 2025.",
"Les écarts entre deux DPE viennent des données d'entrée : comparer les descriptifs.",
"Annonce : classes énergie et climat obligatoires, mention spéciale pour F et G.",
"Préparer la visite : factures, fiches techniques, accès aux combles et aux équipements."
],
qcm: [
[1, "Qui doit faire réaliser les diagnostics lors d'une vente ?", ["Le vendeur", "L'acquéreur", "Le notaire", "L'agence"], 0, "Il en supporte le coût."],
[1, "Vendre une maison classée G est :", ["Autorisé, avec un audit énergétique", "Interdit depuis 2025", "Interdit sans travaux", "Autorisé uniquement à un professionnel"], 0, "Les interdictions visent la location."],
[1, "Une annonce de vente doit indiquer :", ["Les classes énergie et climat et une estimation des dépenses d'énergie", "Uniquement la classe énergie", "Le nom du diagnostiqueur", "Rien tant que le compromis n'est pas signé"], 0, "Et la mention « consommation excessive » pour F et G."],
[2, "Un bail d'un logement G est tacitement reconduit en 2026. Situation ?", ["Le logement ne respecte pas le critère de décence ; le locataire peut exiger des travaux", "Aucun problème, seul un nouveau bail est visé", "Le bail est nul de plein droit", "Le locataire doit partir"], 0, "Les reconductions sont visées par l'interdiction depuis le 1er janvier 2025."],
[2, "Deux DPE réalisés à six mois d'écart donnent E puis F. Lequel compte ?", ["Le dernier établi, qui remplace le précédent dans l'observatoire", "Le plus favorable", "Celui choisi par le vendeur", "Aucun, il faut un troisième avis"], 0, "D'où l'intérêt de bien préparer les justificatifs avant le DPE."],
[2, "Le bailleur peut-il donner congé au locataire en place au motif que le logement est classé G ?", ["Non, ce n'est pas un motif de congé ; il doit faire les travaux", "Oui, avec 3 mois de préavis", "Oui, immédiatement", "Oui, après accord du préfet"], 0, "Les motifs de congé sont limités (reprise, vente, motif légitime et sérieux)."],
[3, "Un meublé de tourisme nouvellement soumis à autorisation de changement d'usage en 2026 doit avoir un DPE :", ["Au minimum F (E à partir de 2028)", "Au minimum D", "Aucun DPE n'est exigé", "Au minimum B"], 0, "Puis A à D pour tous les meublés de tourisme en 2034 (loi Le Meur)."],
[3, "Un diagnostiqueur s'aperçoit d'une erreur dans un DPE qu'il a remis. Il doit :", ["Établir un rapport rectifié, qui remplacera l'ancien dans l'observatoire", "Ne rien faire", "Attendre une réclamation", "Supprimer le DPE"], 0, "La correction spontanée limite sa responsabilité."],
[3, "Quels documents réduisent le plus le risque de valeurs par défaut défavorables ?", ["Factures précisant matériaux et épaisseurs, fiches techniques des équipements, photos datées", "Les avis de taxe foncière", "Les quittances de loyer", "Le titre de propriété seul"], 0, "Le diagnostiqueur peut les exiger et doit les conserver."]
] }

  ]
});
