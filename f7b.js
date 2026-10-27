/* Formation 7 — Finance d'entreprise (partie 2 : modules 8 à 14) */
(function(){
const f = window.FB.formations.find(x => x.id === "finance");
f.modules.push(

/* ---------------- M8 ---------------- */
{ id: "ifrs", title: "IFRS 16 et les normes qui changent les chiffres", time: "1 h",
lesson: `
<h3>IFRS 16 : les loyers entrent au bilan</h3>
<p>Depuis 2019, en IFRS, presque tous les contrats de location (bureaux, magasins, entrepôts, véhicules) sont inscrits au bilan du locataire :</p>
<ul>
<li>à l'actif, un <strong>droit d'utilisation</strong> ;</li>
<li>au passif, une <strong>dette de loyers</strong> égale à la valeur actuelle des loyers futurs.</li>
</ul>
<p>Au compte de résultat, la charge de loyer disparaît. Elle est remplacée par un <strong>amortissement</strong> du droit d'utilisation (sous l'EBITDA) et des <strong>intérêts</strong> sur la dette (résultat financier). Exemptions : contrats de moins de 12 mois et biens de faible valeur. Le PCG français (comptes sociaux) n'applique pas IFRS 16.</p>

<h3>Exemple : Verdier passe en IFRS</h3>
<div class="ex"><span class="tag">Loyers de 1,2 M€ par an pendant 8 ans, taux d'actualisation 5 %</span>
<p>Dette de loyers initiale = 1,2 × (1 − 1,05<sup>−8</sup>) / 0,05 ≈ <strong>7,76 M€</strong> (droit d'utilisation du même montant).</p>
<div class="tw"><table><thead><tr><th>Indicateur (année 1)</th><th class="n">PCG</th><th class="n">IFRS 16</th></tr></thead><tbody>
<tr><td>EBITDA</td><td class="n">7,0</td><td class="n">8,2 (+1,2)</td></tr>
<tr><td>Amortissements</td><td class="n">2,0</td><td class="n">2,97 (+7,76/8)</td></tr>
<tr><td>EBIT</td><td class="n">5,0</td><td class="n">5,23</td></tr>
<tr><td>Charges d'intérêts</td><td class="n">0,8</td><td class="n">1,19 (+5 % × 7,76)</td></tr>
<tr><td>Résultat avant impôt (hors exceptionnel)</td><td class="n">4,2</td><td class="n">4,04</td></tr>
<tr><td>Dette nette</td><td class="n">8,0</td><td class="n">15,76</td></tr>
<tr><td>Dette nette / EBITDA</td><td class="n">1,1x</td><td class="n">1,9x</td></tr>
</tbody></table></div>
<p>L'EBITDA progresse, la dette aussi ; le résultat net baisse légèrement les premières années (intérêts élevés au début) puis augmente en fin de contrat. Le cash, lui, n'a pas changé : 1,2 M€ sortent chaque année.</p></div>

<h3>Les conséquences pour l'analyste</h3>
<ul>
<li><strong>Cohérence</strong> : si l'on utilise un EBITDA IFRS 16 (avec les loyers « ajoutés »), il faut inclure la dette de loyers dans la dette nette et dans le passage valeur d'entreprise → fonds propres. Sinon, on surévalue l'entreprise.</li>
<li>Beaucoup d'investisseurs préfèrent un <strong>EBITDA « pré-IFRS 16 »</strong> (ou EBITDAaL, « after leases ») et une dette nette hors loyers : c'est plus proche du cash.</li>
<li>Tableau de flux : le remboursement du principal des loyers passe en <strong>flux de financement</strong>. Le flux d'exploitation publié augmente artificiellement.</li>
<li>Secteurs les plus touchés : distribution, restauration, hôtellerie, transport aérien, salles de sport.</li>
<li>Les multiples de valorisation (EV/EBITDA) d'avant 2019 et d'après ne sont pas directement comparables.</li>
</ul>

<h3>Les autres normes qui comptent pour un investisseur</h3>
<div class="tw"><table><thead><tr><th>Norme</th><th>Sujet</th><th>Ce qu'il faut surveiller</th></tr></thead><tbody>
<tr><td>IFRS 15</td><td>Reconnaissance du chiffre d'affaires</td><td>Rythme de reconnaissance vs facturation, actifs et passifs de contrat</td></tr>
<tr><td>IFRS 3</td><td>Regroupements d'entreprises</td><td>Allocation du prix d'acquisition (PPA) : marques et relations clients amorties, goodwill résiduel</td></tr>
<tr><td>IAS 36</td><td>Dépréciation d'actifs</td><td>Test annuel du goodwill : hypothèses de croissance et de taux d'actualisation en annexe ; une dépréciation est sans effet cash mais révèle une acquisition trop chère</td></tr>
<tr><td>IAS 19</td><td>Avantages au personnel</td><td>Engagements de retraite : dette assimilée, sensibilité aux taux</td></tr>
<tr><td>IFRS 9</td><td>Instruments financiers</td><td>Dépréciation des créances (pertes attendues), couverture de change et de taux</td></tr>
<tr><td>IFRS 5</td><td>Activités abandonnées</td><td>Résultat des activités cédées présenté à part : regarder ce qui reste</td></tr>
</tbody></table></div>

<h3>Les indicateurs alternatifs de performance</h3>
<p>« EBITDA ajusté », « résultat opérationnel courant », « cash-flow libre récurrent » : ces indicateurs ne sont pas normés. Les sociétés cotées doivent les définir et les rapprocher des agrégats IFRS (orientations de l'ESMA). Lisez la réconciliation : la différence entre publié et ajusté raconte souvent l'essentiel.</p>
`,
keys: [
"IFRS 16 : droit d'utilisation à l'actif, dette de loyers au passif ; EBITDA en hausse, dette en hausse, cash inchangé.",
"Cohérence : EBITDA IFRS 16 ⇔ dette de loyers dans la dette nette.",
"Les flux d'exploitation publiés sont gonflés : les loyers passent en financement.",
"Goodwill (IAS 36), PPA (IFRS 3), retraites (IAS 19) : lire les annexes."
],
ex: [
{ t: "Comparer deux distributeurs",
q: `<p>Distributeur A (IFRS) : EBITDA publié 120 M€, dont 40 M€ liés à IFRS 16 ; dette financière nette 100 M€ ; dettes de loyers 300 M€. Distributeur B : propriétaire de ses magasins, EBITDA 80 M€, dette nette 160 M€. Calculez le levier de A selon deux conventions et comparez à B.</p>`,
a: `<p>A, convention IFRS 16 : (100 + 300) / 120 = <strong>3,3x</strong>.<br>A, convention pré-IFRS 16 : 100 / (120 − 40) = <strong>1,25x</strong>, mais avec 40 M€ de loyers fixes à payer chaque année.<br>B : 160 / 80 = <strong>2,0x</strong>.<br>Comparer A à 1,25x et B à 2,0x sans tenir compte des loyers de A serait trompeur : A a des engagements fixes importants. La convention IFRS 16 rend les deux plus comparables (B a acheté ce que A loue).</p>` }
],
qcm: [
[1, "Avec IFRS 16, la charge de loyer est remplacée par :", ["Un amortissement du droit d'utilisation et des intérêts sur la dette de loyers", "Une provision", "Rien, elle disparaît", "Une baisse du chiffre d'affaires"], 0, "Les deux sont sous l'EBITDA."],
[1, "IFRS 16 a pour effet sur l'EBITDA :", ["De l'augmenter", "De le diminuer", "Aucun effet", "De l'annuler"], 0, "Les loyers ne sont plus des charges d'exploitation."],
[1, "Les comptes sociaux en PCG appliquent-ils IFRS 16 ?", ["Non", "Oui", "Seulement pour les PME", "Seulement pour les baux de plus de 9 ans"], 0, "IFRS 16 concerne les comptes consolidés en IFRS."],
[2, "Dans le tableau de flux IFRS 16, le remboursement du principal de la dette de loyers figure en :", ["Flux de financement", "Flux d'exploitation", "Flux d'investissement", "Hors tableau"], 0, "Le flux d'exploitation publié est donc amélioré."],
[2, "Si l'on valorise avec un EBITDA IFRS 16, il faut :", ["Inclure la dette de loyers dans la dette nette pour passer aux fonds propres", "Exclure la dette de loyers", "Ajouter les loyers au CA", "Ne rien changer"], 0, "Sinon, on compte l'avantage sans l'engagement."],
[2, "Une dépréciation de goodwill (IAS 36) :", ["N'a pas d'effet cash mais révèle qu'une acquisition a été payée trop cher", "Réduit immédiatement la trésorerie", "Augmente l'EBITDA", "Est interdite en IFRS"], 0, "Elle affecte le résultat net et les capitaux propres."],
[3, "Verdier en IFRS 16 : dette de loyers initiale pour 1,2 M€ de loyers annuels sur 8 ans à 5 % ?", ["≈ 7,76 M€", "9,6 M€", "6,0 M€", "1,2 M€"], 0, "Valeur actuelle d'une annuité : 1,2 × 6,463."],
[3, "Pourquoi le résultat net IFRS 16 est-il plus faible en début de contrat de location ?", ["Parce que les intérêts sont calculés sur une dette élevée au début et décroissent ensuite", "Parce que le loyer augmente", "Parce que l'amortissement est dégressif", "Il ne l'est pas"], 0, "Effet de « front-loading » des charges."],
[3, "L'EBITDAaL désigne :", ["Un EBITDA après déduction des charges de location", "Un EBITDA ajusté des acquisitions", "Un EBITDA avant loyers et salaires", "Un EBITDA annualisé"], 0, "« After leases » : proche de l'EBITDA pré-IFRS 16."]
] },

/* ---------------- M9 ---------------- */
{ id: "renta", title: "Rentabilité et création de valeur", time: "45 min",
lesson: `
<h3>Trois rentabilités</h3>
<div class="tw"><table><thead><tr><th>Indicateur</th><th>Formule</th><th>Verdier</th></tr></thead><tbody>
<tr><td>ROE (rentabilité des capitaux propres)</td><td>Résultat net ÷ capitaux propres</td><td>3,0 ÷ 15,0 = 20 %</td></tr>
<tr><td>ROCE (avant impôt)</td><td>EBIT ÷ capitaux employés</td><td>5,0 ÷ 24,0 = 20,8 %</td></tr>
<tr><td>ROIC (après impôt)</td><td>EBIT × (1 − taux d'IS) ÷ capitaux employés</td><td>3,75 ÷ 24,0 = 15,6 %</td></tr>
</tbody></table></div>

<h3>La décomposition DuPont</h3>
<p>ROE = marge nette × rotation de l'actif × levier comptable</p>
<p>Verdier : 6 % × (50 ÷ 37) × (37 ÷ 15) = 6 % × 1,35 × 2,47 = <strong>20 %</strong>. Deux entreprises au même ROE peuvent avoir des profils opposés : l'une très rentable et peu endettée, l'autre peu rentable mais très endettée. La seconde est plus risquée.</p>

<h3>L'effet de levier financier</h3>
<p>ROE ≈ ROIC + (ROIC − coût de la dette après impôt) × dette nette ÷ capitaux propres</p>
<p>Verdier : coût de la dette 0,8 / 12 ≈ 6,7 %, soit 5 % après impôt. ROE ≈ 15,6 % + (15,6 % − 5 %) × 0,53 ≈ <strong>21 %</strong> (proche des 20 % constatés, l'écart venant de l'exceptionnel et de la trésorerie). La dette « travaille » pour l'actionnaire tant que le ROIC dépasse son coût.</p>

<h3>Création de valeur : ROIC contre WACC</h3>
<p>Une entreprise crée de la valeur quand elle investit à un rendement (ROIC) <strong>supérieur au coût moyen pondéré de son capital (WACC)</strong>, c'est-à-dire au rendement exigé par ses actionnaires et ses prêteurs (module 11).</p>
<ul>
<li>ROIC &gt; WACC : chaque euro investi crée de la valeur ; la croissance est une bonne nouvelle.</li>
<li>ROIC &lt; WACC : la croissance détruit de la valeur ; mieux vaut distribuer.</li>
<li><strong>EVA</strong> (valeur économique ajoutée) = (ROIC − WACC) × capitaux employés. Verdier, avec un WACC de 9,5 % : (15,6 % − 9,5 %) × 24 ≈ <strong>1,5 M€</strong> créés cette année.</li>
</ul>
<div class="note"><span class="tag">Ce que cherchent les meilleurs investisseurs</span><p>Des entreprises au ROIC élevé et stable (avantage concurrentiel durable), capables de réinvestir beaucoup à ce même rendement. C'est la combinaison qui produit les plus fortes créations de valeur à long terme.</p></div>

<h3>Lire un ROIC dans le temps et par rapport au secteur</h3>
<ul>
<li>Un ROIC qui baisse alors que la croissance accélère : acquisitions chères ou investissements moins rentables.</li>
<li>Un ROIC très élevé avec des capitaux employés minimes (BFR négatif, peu d'actifs) : modèle « asset-light », souvent de grande qualité.</li>
<li>Le goodwill gonfle les capitaux employés : on calcule un ROIC avec et sans goodwill (performance opérationnelle vs performance des acquisitions).</li>
</ul>
`,
keys: [
"ROE = résultat net / capitaux propres ; ROCE = EBIT / capitaux employés ; ROIC = EBIT après IS / capitaux employés.",
"DuPont : marge × rotation × levier. Même ROE, risques différents.",
"Créer de la valeur : ROIC > WACC. EVA = (ROIC − WACC) × capitaux employés.",
"Un ROIC élevé, stable et réinvestissable = la marque des grandes entreprises."
],
ex: [
{ t: "Deux entreprises à 18 % de ROE",
q: `<p>A : marge nette 12 %, rotation de l'actif 1,0, levier 1,5. B : marge nette 3 %, rotation 1,5, levier 4,0. Vérifiez le ROE de chacune et dites laquelle vous préférez comme actionnaire, et pourquoi.</p>`,
a: `<p>A : 12 % × 1,0 × 1,5 = <strong>18 %</strong>. B : 3 % × 1,5 × 4,0 = <strong>18 %</strong>.<br>A est préférable : sa rentabilité vient de ses marges (pouvoir de prix), pas de la dette. Une baisse de 3 points de marge annulerait le résultat de B, dont le levier de 4 rendrait alors la situation financière critique.</p>` }
],
qcm: [
[1, "Le ROE de Verdier est de :", ["20 %", "6 %", "15,6 %", "10 %"], 0, "3,0 / 15,0."],
[1, "Une entreprise crée de la valeur lorsque :", ["Son ROIC dépasse son WACC", "Son chiffre d'affaires augmente", "Son résultat net est positif", "Elle verse un dividende"], 0, "Croissance et profit ne suffisent pas."],
[2, "La décomposition DuPont exprime le ROE comme le produit de :", ["Marge nette × rotation de l'actif × levier comptable", "ROCE × WACC", "EBITDA × PER", "Croissance × marge"], 0, "Elle révèle d'où vient la rentabilité."],
[2, "Le ROIC de Verdier (IS 25 %) est d'environ :", ["15,6 %", "20,8 %", "20 %", "9,5 %"], 0, "5,0 × 0,75 / 24,0."],
[2, "L'effet de levier financier est positif quand :", ["La rentabilité économique dépasse le coût de la dette après impôt", "La dette dépasse les capitaux propres", "Le taux d'intérêt est variable", "L'entreprise est cotée"], 0, "Sinon, la dette réduit le ROE."],
[3, "EVA de Verdier avec un WACC de 9,5 % ?", ["≈ 1,5 M€", "≈ 3,0 M€", "≈ − 1,0 M€", "≈ 5,0 M€"], 0, "(15,6 % − 9,5 %) × 24 M€."],
[3, "Une entreprise à ROIC de 6 % et WACC de 9 % annonce un plan de croissance par investissements. Pour l'actionnaire :", ["La croissance détruit de la valeur tant que le ROIC des nouveaux investissements reste inférieur au WACC", "C'est une excellente nouvelle", "C'est neutre", "Le WACC va baisser"], 0, "Mieux vaudrait améliorer le ROIC ou distribuer."],
[3, "Pourquoi calculer un ROIC hors goodwill ?", ["Pour isoler la performance de l'outil opérationnel de celle des acquisitions payées", "Pour réduire le WACC", "Parce que le goodwill est interdit", "Pour augmenter le résultat"], 0, "Le ROIC avec goodwill mesure ce qu'ont rapporté les capitaux réellement investis, acquisitions comprises."]
] },

/* ---------------- M10 ---------------- */
{ id: "multiples", title: "Valoriser par les multiples", time: "1 h",
lesson: `
<h3>Valeur d'entreprise et valeur des fonds propres</h3>
<p>La <strong>valeur d'entreprise</strong> (VE, « enterprise value ») est la valeur de l'outil opérationnel, pour tous les financeurs. La <strong>valeur des fonds propres</strong> est ce qui revient aux actionnaires. On passe de l'une à l'autre par le « bridge » :</p>
<div class="note"><span class="tag">Bridge</span><p>Valeur des fonds propres = valeur d'entreprise − dette nette − éléments assimilés à de la dette (retraites, loyers IFRS 16 selon convention…) − intérêts minoritaires + participations non consolidées</p></div>
<p>Pour une société cotée, on part de la capitalisation boursière pour remonter à la VE.</p>

<h3>Les multiples usuels</h3>
<div class="tw"><table><thead><tr><th>Multiple</th><th>Niveau</th><th>Usage</th></tr></thead><tbody>
<tr><td>VE / CA</td><td>Valeur d'entreprise</td><td>Entreprises non rentables, en forte croissance (avec prudence)</td></tr>
<tr><td>VE / EBITDA</td><td>Valeur d'entreprise</td><td>Le standard en private equity et en industrie</td></tr>
<tr><td>VE / EBIT</td><td>Valeur d'entreprise</td><td>Comparer des entreprises à intensité capitalistique différente</td></tr>
<tr><td>PER (cours / bénéfice par action)</td><td>Fonds propres</td><td>Le standard en bourse</td></tr>
<tr><td>Cours / actif net (P/B, P/TBV)</td><td>Fonds propres</td><td>Banques, assurances, foncières</td></tr>
<tr><td>Rendement du FCF, rendement du dividende</td><td>Fonds propres</td><td>Sociétés matures</td></tr>
</tbody></table></div>
<p>Règle : un multiple de <strong>VE</strong> se compare à un agrégat <strong>avant</strong> intérêts (CA, EBITDA, EBIT) ; un multiple de <strong>fonds propres</strong> à un agrégat <strong>après</strong> intérêts (résultat net, FCFE).</p>

<h3>Comparables boursiers et transactions</h3>
<ul>
<li><strong>Comparables boursiers</strong> : multiples de sociétés cotées similaires (secteur, taille, croissance, marges). Valeur minoritaire, liquide.</li>
<li><strong>Transactions comparables</strong> : multiples payés lors de rachats d'entreprises similaires. Ils incluent une <strong>prime de contrôle</strong> (souvent 20 à 40 %) et les synergies.</li>
<li>Pour une PME non cotée, on applique souvent une <strong>décote de taille et de liquidité</strong> (15 à 30 %) aux comparables boursiers.</li>
</ul>

<h3>Application à Verdier</h3>
<div class="ex"><span class="tag">Hypothèses : comparables cotés européens du matériel professionnel</span>
<p>Médianes : VE/EBITDA 8,0x ; VE/EBIT 11,0x ; PER 15,0x.<br>
VE/EBITDA : 8,0 × 7,0 = 56,0 → fonds propres 56,0 − 8,0 = <strong>48,0 M€</strong>.<br>
VE/EBIT : 11,0 × 5,0 = 55,0 → <strong>47,0 M€</strong>.<br>
PER : 15,0 × 3,0 = <strong>45,0 M€</strong>.<br>
Fourchette 45-48 M€ en valeur boursière. Avec une décote de taille et de liquidité de 20 % : <strong>36 à 38 M€</strong>. En transaction majoritaire, un acquéreur paierait plutôt 6,5 à 7,5x l'EBITDA normatif (6,9 M€, module 3).</p></div>

<h3>Les pièges des multiples</h3>
<ul>
<li><strong>Cycle</strong> : un PER de 8 au sommet d'un cycle (bénéfices exceptionnels) peut être cher ; un PER de 30 au creux peut être bon marché.</li>
<li><strong>Croissance et ROIC</strong> : un multiple plus élevé se justifie par plus de croissance rentable. Le PEG (PER / croissance) aide à comparer.</li>
<li><strong>Comparabilité comptable</strong> : IFRS 16 ou non, EBITDA ajusté ou publié, éléments exceptionnels.</li>
<li><strong>Multiples historiques vs prospectifs</strong> : préciser N, N+1 (consensus).</li>
<li><strong>Dilution</strong> : utiliser le nombre d'actions dilué (stock-options, actions gratuites, obligations convertibles).</li>
</ul>
`,
keys: [
"Fonds propres = VE − dette nette − assimilés − minoritaires + participations.",
"Multiples de VE ↔ agrégats avant intérêts ; multiples de fonds propres ↔ agrégats après intérêts.",
"Transactions : prime de contrôle ; PME non cotée : décote de taille/liquidité.",
"Méfiance : cycle, comptabilité, multiples historiques vs prospectifs."
],
ex: [
{ t: "Du cours de bourse à la VE",
q: `<p>Société cotée : 40 millions d'actions à 25 €, dette financière 600 M€, trésorerie 150 M€, provisions pour retraites 80 M€ (on retient 75 % après impôt), intérêts minoritaires 50 M€, participation non consolidée valant 30 M€. EBITDA 180 M€, résultat net part du groupe 70 M€. Calculez la VE, le multiple VE/EBITDA et le PER.</p>`,
a: `<p>Capitalisation : 1 000 M€. Dette nette : 450. Retraites : 60. VE = 1 000 + 450 + 60 + 50 − 30 = <strong>1 530 M€</strong>.<br>VE/EBITDA = 1 530 / 180 = <strong>8,5x</strong>. PER = 1 000 / 70 = <strong>14,3x</strong>.</p>` }
],
qcm: [
[1, "La valeur d'entreprise représente :", ["La valeur de l'outil opérationnel pour l'ensemble des financeurs", "La capitalisation boursière", "La valeur comptable des actifs", "La trésorerie"], 0, "Elle est indépendante de la structure de financement."],
[1, "Le PER se calcule :", ["Cours de l'action ÷ bénéfice par action", "VE ÷ EBITDA", "Dividende ÷ cours", "Dette ÷ fonds propres"], 0, "C'est un multiple de fonds propres."],
[1, "Pour passer de la VE à la valeur des fonds propres, on retire notamment :", ["La dette nette", "Le chiffre d'affaires", "L'EBITDA", "Les capitaux propres comptables"], 0, "Plus les éléments assimilés et les minoritaires."],
[2, "Avec quel agrégat compare-t-on une valeur d'entreprise ?", ["Un agrégat avant intérêts : CA, EBITDA, EBIT", "Le résultat net", "Le dividende", "Le bénéfice par action"], 0, "Cohérence entre numérateur et dénominateur."],
[2, "Pourquoi les multiples de transactions sont-ils souvent supérieurs aux multiples boursiers ?", ["Ils incluent une prime de contrôle et des synergies", "Parce que les PME sont plus rentables", "Parce que la bourse est surévaluée", "Ils ne le sont pas"], 0, "Prime de contrôle courante de 20 à 40 %."],
[2, "Verdier valorisée à 8x l'EBITDA : valeur des fonds propres ?", ["48 M€", "56 M€", "40 M€", "64 M€"], 0, "8 × 7 = 56 − 8 de dette nette."],
[3, "Une société cyclique affiche un PER de 7 au sommet du cycle. Lecture prudente ?", ["Le PER est bas parce que les bénéfices sont temporairement élevés ; il faut raisonner sur des bénéfices normatifs de cycle", "C'est une affaire évidente", "Le PER ne s'applique pas aux cycliques", "Il faut ajouter la dette au PER"], 0, "Les cycliques semblent souvent chères au creux et bon marché au sommet."],
[3, "Pourquoi utiliser le nombre d'actions dilué ?", ["Pour tenir compte des actions qui peuvent être créées (options, actions gratuites, convertibles)", "Pour réduire la capitalisation", "C'est une obligation fiscale", "Pour calculer l'EBITDA"], 0, "Sinon, on surestime la valeur par action."],
[3, "Pour comparer un distributeur en IFRS 16 à un concurrent qui publie en normes américaines (où l'EBITDA garde la charge de loyer), on doit :", ["Harmoniser : EBITDA et dette sur la même convention, avec ou sans loyers", "Comparer directement les VE/EBITDA publiés", "Ignorer la dette", "Utiliser uniquement le PER"], 0, "C'est un retraitement standard en analyse sectorielle."]
] },

/* ---------------- M11 ---------------- */
{ id: "dcf", title: "Valoriser par les flux : DCF et WACC", time: "1 h",
lesson: `
<h3>Le principe</h3>
<p>Une entreprise vaut la somme de ses free cash-flows futurs (FCFF), actualisés au <strong>WACC</strong>. On projette en général 5 à 10 ans de flux explicites, puis une <strong>valeur terminale</strong> pour l'au-delà.</p>
<div class="note"><span class="tag">Formules</span><p>VE = Σ FCFF<sub>t</sub> ÷ (1 + WACC)<sup>t</sup> + VT ÷ (1 + WACC)<sup>n</sup><br>Valeur terminale (Gordon-Shapiro) : VT = FCFF<sub>n+1</sub> ÷ (WACC − g), avec g la croissance perpétuelle (souvent 1,5 à 2,5 %)</p></div>

<h3>Le WACC</h3>
<p>WACC = coût des fonds propres × E/(D+E) + coût de la dette après impôt × D/(D+E)</p>
<ul>
<li><strong>Coût des fonds propres</strong> (modèle MEDAF) : taux sans risque + bêta × prime de risque du marché (+ prime de taille ou de risque spécifique pour une petite société).</li>
<li><strong>Coût de la dette</strong> : taux d'emprunt marginal × (1 − taux d'IS).</li>
<li>Les pondérations sont en valeurs de marché et cibles (structure visée à long terme), pas en valeurs comptables.</li>
</ul>
<div class="ex"><span class="tag">Verdier</span><p>Taux sans risque (OAT 10 ans, hypothèse) 3,3 % ; bêta 1,1 ; prime de marché 5,5 % ; prime de taille 2 % → coût des fonds propres ≈ 3,3 + 6,05 + 2 = <strong>11,35 %</strong>.<br>Coût de la dette : 6,7 % × 75 % = <strong>5 %</strong>.<br>Structure cible 75 % fonds propres / 25 % dette → WACC ≈ 8,5 + 1,25 ≈ <strong>9,8 %</strong>. On retient 9,5 % en hypothèse centrale.</p></div>

<h3>Le DCF de Verdier</h3>
<div class="tw"><table><thead><tr><th>M€</th><th class="n">N+1</th><th class="n">N+2</th><th class="n">N+3</th><th class="n">N+4</th><th class="n">N+5</th></tr></thead><tbody>
<tr><td>FCFF projeté</td><td class="n">2,5</td><td class="n">3,0</td><td class="n">3,4</td><td class="n">3,8</td><td class="n">4,1</td></tr>
<tr><td>Facteur d'actualisation (9,5 %)</td><td class="n">0,913</td><td class="n">0,834</td><td class="n">0,762</td><td class="n">0,696</td><td class="n">0,635</td></tr>
<tr><td>Valeur actuelle</td><td class="n">2,28</td><td class="n">2,50</td><td class="n">2,59</td><td class="n">2,64</td><td class="n">2,60</td></tr>
</tbody></table></div>
<p>Somme des flux actualisés : <strong>12,6 M€</strong>. Valeur terminale avec g = 2 % : 4,1 × 1,02 / (9,5 % − 2 %) = 55,8 M€, actualisée : <strong>35,4 M€</strong>.<br>VE ≈ <strong>48,0 M€</strong> ; fonds propres ≈ 48,0 − 8,0 = <strong>40,0 M€</strong>. La valeur terminale pèse <strong>74 %</strong> de la VE : c'est la norme, et c'est la faiblesse du DCF.</p>

<h3>Sensibilités</h3>
<div class="tw"><table><thead><tr><th>VE (M€)</th><th class="n">g = 1,5 %</th><th class="n">g = 2,0 %</th><th class="n">g = 2,5 %</th></tr></thead><tbody>
<tr><td>WACC 8,5 %</td><td class="n">≈ 52,5</td><td class="n">≈ 55,8</td><td class="n">≈ 59,6</td></tr>
<tr><td>WACC 9,5 %</td><td class="n">≈ 45,7</td><td class="n">≈ 48,0</td><td class="n">≈ 50,8</td></tr>
<tr><td>WACC 10,5 %</td><td class="n">≈ 40,3</td><td class="n">≈ 42,1</td><td class="n">≈ 44,2</td></tr>
</tbody></table></div>
<p>Un point de WACC fait varier la valeur d'environ 12 à 15 %. Présenter un DCF sans table de sensibilité n'a pas de sens.</p>

<h3>Les règles de bon sens</h3>
<ul>
<li>La croissance perpétuelle ne dépasse pas la croissance nominale de long terme de l'économie.</li>
<li>Le dernier flux projeté doit être « normatif » : capex proche des amortissements (en croissance modérée), BFR stabilisé en % du CA, marge soutenable.</li>
<li>Recouper le DCF avec les multiples : la VE implicite de Verdier (48 M€) correspond à 6,9x l'EBITDA, cohérent avec les transactions.</li>
<li>Méfiez-vous des business plans en « crosse de hockey » : croissance qui accélère et marges qui s'envolent après une année décevante.</li>
</ul>
`,
keys: [
"VE = flux actualisés + valeur terminale actualisée ; VT de Gordon = FCF(n+1) / (WACC − g).",
"WACC = Ke × E/(D+E) + Kd après IS × D/(D+E) ; Ke = taux sans risque + β × prime (+ prime de taille).",
"La valeur terminale pèse souvent 60 à 80 % : toujours une table de sensibilité.",
"Recouper DCF et multiples ; se méfier des plans en crosse de hockey."
],
ex: [
{ t: "Calcul de WACC et de valeur terminale",
q: `<p>Société cotée : taux sans risque 3 %, bêta 0,9, prime de marché 5,5 %, coût de la dette avant impôt 5 %, IS 25 %, structure cible 70 % fonds propres / 30 % dette. Dernier FCFF projeté (année 5) : 50 M€, croissance perpétuelle 2 %.</p><ol><li>Calculez le coût des fonds propres et le WACC.</li><li>Calculez la valeur terminale à la fin de l'année 5.</li><li>Actualisez-la (facteur pour 5 ans à ce WACC ≈ 0,72).</li></ol>`,
a: `<ol><li>Ke = 3 % + 0,9 × 5,5 % = <strong>7,95 %</strong>. Kd après IS = 3,75 %. WACC = 0,7 × 7,95 % + 0,3 × 3,75 % = 5,57 + 1,13 = <strong>6,7 %</strong>.</li><li>VT = 50 × 1,02 / (6,7 % − 2 %) = 51 / 4,7 % ≈ <strong>1 085 M€</strong>.</li><li>1 085 × 0,72 ≈ <strong>785 M€</strong>. Avec un WACC aussi bas, la sensibilité est forte : à 7,7 %, la VT tomberait à ≈ 895 M€.</li></ol>` }
],
qcm: [
[1, "Le DCF valorise une entreprise à partir :", ["De ses free cash-flows futurs actualisés", "De son chiffre d'affaires passé", "De ses capitaux propres comptables", "De son cours de bourse"], 0, "Discounted Cash Flows."],
[1, "Le taux d'actualisation des FCFF est :", ["Le WACC", "Le taux du Livret A", "Le coût de la dette seul", "Le taux d'inflation"], 0, "Coût moyen pondéré du capital."],
[2, "Selon le MEDAF, le coût des fonds propres est :", ["Taux sans risque + bêta × prime de risque du marché", "Taux de la dette + 2 %", "Dividende / cours", "ROE comptable"], 0, "On ajoute parfois une prime de taille pour les petites sociétés."],
[2, "Pourquoi le coût de la dette est-il pris après impôt dans le WACC ?", ["Parce que les intérêts sont déductibles de l'IS", "Par convention sans raison", "Parce que la dette est remboursée", "Parce que les banques paient l'impôt"], 0, "L'économie d'impôt réduit le coût réel de la dette."],
[2, "Valeur terminale si FCF de l'année suivante = 10, WACC = 9 %, g = 2 % ?", ["≈ 142,9", "≈ 111,1", "≈ 500", "≈ 90,9"], 0, "10 / 0,07."],
[2, "Dans le DCF de Verdier, la valeur terminale représente environ :", ["74 % de la VE", "25 %", "50 %", "95 %"], 0, "35,4 / 48,0."],
[3, "Pourquoi la croissance perpétuelle ne doit-elle pas dépasser la croissance nominale de long terme de l'économie ?", ["Sinon l'entreprise finirait par devenir plus grande que l'économie", "Parce que c'est interdit par les normes IFRS", "Parce que le WACC deviendrait négatif", "Pour réduire l'impôt"], 0, "On retient en général 1,5 à 2,5 % en Europe."],
[3, "Une hausse du WACC de 9,5 % à 10,5 % fait passer la VE de Verdier de 48,0 à environ :", ["42 M€", "47 M€", "55 M€", "30 M€"], 0, "Environ −12 % : la sensibilité au WACC est forte."],
[3, "Le DCF de Verdier (48 M€ de VE) correspond à quel multiple d'EBITDA N ?", ["≈ 6,9x", "≈ 8x", "≈ 4x", "≈ 12x"], 0, "48 / 7,0 : recoupement cohérent avec les transactions."]
] },

/* ---------------- M12 ---------------- */
{ id: "pe", title: "Private equity et LBO", time: "1 h",
lesson: `
<h3>Le principe du LBO</h3>
<p>Un fonds rachète une entreprise via une <strong>holding</strong> qui emprunte une large partie du prix. La dette est remboursée par les dividendes remontés de la cible (régime mère-fille, intégration fiscale). Les quatre leviers : <strong>financier</strong> (la dette), <strong>fiscal</strong> (intérêts déductibles dans la limite des règles), <strong>juridique</strong> (contrôle) et <strong>managérial</strong> (management associé au capital).</p>

<h3>LBO sur Verdier</h3>
<div class="ex"><span class="tag">Structure d'entrée</span>
<p>Prix : 7,0x l'EBITDA de 7,0 M€ = VE de <strong>49 M€</strong> (frais ignorés).<br>
Financement : dette senior 4,0x l'EBITDA = <strong>28 M€</strong> ; fonds propres <strong>21 M€</strong> (fonds + management).<br>
Plan à 5 ans : CA à 66 M€, EBITDA à 9,5 M€ ; dette ramenée à 14 M€ grâce au cash-flow.<br>
Sortie à 7,0x : VE 66,5 M€ − dette 14 M€ = fonds propres <strong>52,5 M€</strong>.</p>
<p><strong>MOIC</strong> (multiple du capital investi) : 52,5 / 21 = <strong>2,5x</strong>. <strong>TRI</strong> : 2,5<sup>1/5</sup> − 1 ≈ <strong>20 %</strong>.</p>
<p>Décomposition de la création de valeur (31,5 M€) : croissance de l'EBITDA 2,5 × 7 = 17,5 M€ ; désendettement 14 M€ ; expansion de multiple : 0.</p></div>

<h3>Les types de dette</h3>
<ul>
<li><strong>Dette senior</strong> bancaire amortissable ou in fine.</li>
<li><strong>Unitranche</strong> : dette unique d'un fonds de dette privée, plus chère mais plus souple, très répandue en Europe pour les PME.</li>
<li><strong>Dette mezzanine</strong> : subordonnée, coûteuse, parfois avec des bons de souscription.</li>
<li>Repères : levier total de 3 à 6x l'EBITDA selon la taille, le secteur et le cycle du crédit.</li>
</ul>

<h3>Ce qu'un fonds cherche dans une cible</h3>
<ul>
<li>Un <strong>cash-flow prévisible</strong> (récurrence, contrats, faible cyclicité) pour rembourser la dette.</li>
<li>Des <strong>leviers d'amélioration</strong> : BFR, achats, prix, digitalisation, croissance externe (« build-up »).</li>
<li>Une <strong>position de marché</strong> défendable et un <strong>management</strong> solide et motivé.</li>
<li>Une <strong>sortie</strong> crédible : vente à un industriel, à un autre fonds, introduction en bourse.</li>
</ul>

<h3>La due diligence financière</h3>
<ul>
<li><strong>Quality of Earnings</strong> : EBITDA normatif (module 3).</li>
<li><strong>Dette nette et éléments assimilés</strong> au jour de la cession (« locked box » ou comptes de clôture).</li>
<li><strong>BFR normatif</strong> et ajustement de prix (module 5).</li>
<li>Revue du business plan : hypothèses de croissance, capex, marges ; tests de sensibilité.</li>
</ul>

<h3>L'économie des fonds</h3>
<ul>
<li>Frais de gestion annuels (souvent environ 2 %) et <strong>carried interest</strong> (souvent 20 % de la plus-value au-delà d'un rendement prioritaire de l'ordre de 8 %).</li>
<li><strong>Courbe en J</strong> : les premières années, les frais et le temps de création de valeur rendent la performance négative ; elle remonte ensuite.</li>
<li>Durée de vie d'un fonds : 10 ans environ ; capital appelé progressivement.</li>
<li>La performance se mesure en <strong>TRI net</strong> (après frais) et en <strong>multiple net</strong> (TVPI, DPI). La dispersion entre les meilleurs et les moins bons gérants est très forte.</li>
</ul>

<h3>Investir en non coté en tant que particulier</h3>
<p>FCPR, FCPI, FIP, fonds européens d'investissement à long terme (ELTIF), et unités de compte de private equity dans l'assurance-vie et le PER. Points d'attention : <strong>illiquidité</strong> (souvent 8 à 10 ans), frais élevés, valorisations lissées qui sous-estiment la volatilité, risque de perte en capital. À réserver à une fraction du patrimoine, avec un horizon long.</p>
`,
keys: [
"LBO : holding endettée, dette remboursée par les dividendes de la cible.",
"Création de valeur : croissance d'EBITDA + désendettement + éventuelle expansion de multiple.",
"MOIC 2,5x en 5 ans ≈ TRI de 20 %.",
"Fonds : 2 % de frais + 20 % de carried au-delà d'un hurdle ; courbe en J ; illiquidité."
],
ex: [
{ t: "Scénario défavorable du LBO Verdier",
q: `<p>Reprenez le LBO de Verdier. Scénario défavorable : l'EBITDA reste à 7,0 M€ pendant 5 ans, la dette n'est réduite qu'à 20 M€, et le multiple de sortie tombe à 6,0x. Calculez le MOIC et commentez.</p>`,
a: `<p>VE de sortie : 6,0 × 7,0 = 42 M€. Fonds propres : 42 − 20 = 22 M€. MOIC = 22 / 21 ≈ <strong>1,05x</strong>, soit un TRI d'environ 1 % par an, avant frais du fonds. Le levier qui amplifiait les gains amplifie l'absence de performance. Si l'EBITDA avait baissé, les fonds propres auraient pu être en grande partie perdus.</p>` }
],
qcm: [
[1, "Dans un LBO, la dette d'acquisition est remboursée principalement par :", ["Les dividendes et flux remontés de la société rachetée", "Les impôts", "Les fonds propres du fonds", "Les salariés"], 0, "D'où l'importance d'un cash-flow prévisible."],
[1, "Le MOIC mesure :", ["Le multiple entre la valeur récupérée et le capital investi", "Le taux d'intérêt de la dette", "La marge d'EBITDA", "Le prix par action"], 0, "Multiple On Invested Capital."],
[1, "La « courbe en J » d'un fonds de private equity décrit :", ["Une performance négative les premières années, puis positive", "Une croissance linéaire", "Une baisse continue", "Une performance garantie"], 0, "Frais et délai de création de valeur."],
[2, "Un MOIC de 2,0x en 5 ans correspond à un TRI d'environ :", ["15 %", "20 %", "10 %", "40 %"], 0, "2^(1/5) − 1 ≈ 14,9 %."],
[2, "Dans le LBO de Verdier, quelle part de la création de valeur vient du désendettement ?", ["14 M€ sur 31,5 M€", "Rien", "31,5 M€", "17,5 M€"], 0, "La croissance de l'EBITDA apporte 17,5 M€."],
[2, "Une dette unitranche est :", ["Une dette unique, souvent fournie par un fonds de dette privée, combinant senior et subordonné", "Une action de préférence", "Un prêt garanti par l'État", "Une obligation cotée"], 0, "Très utilisée dans les LBO de PME en Europe."],
[3, "Le carried interest d'un fonds est généralement :", ["Environ 20 % des plus-values au-delà d'un rendement prioritaire (hurdle)", "2 % des montants engagés", "La totalité des dividendes", "Un impôt"], 0, "Il aligne les intérêts du gérant et des investisseurs."],
[3, "Quel risque principal pour un particulier qui investit en FCPR ?", ["L'illiquidité sur 8 à 10 ans et le risque de perte en capital", "La garantie du capital", "L'absence de frais", "La volatilité quotidienne"], 0, "Les valorisations trimestrielles lissées masquent la volatilité réelle."],
[3, "Lors d'une cession, un mécanisme de « locked box » signifie :", ["Le prix est fixé sur un bilan de référence passé, sans ajustement ultérieur, avec interdiction des fuites de valeur vers le vendeur", "Le prix est ajusté sur les comptes de clôture", "Le prix est payé en actions", "Les titres sont bloqués 5 ans"], 0, "Alternative aux comptes de clôture (« completion accounts »)."]
] },

/* ---------------- M13 ---------------- */
{ id: "bourse", title: "Investir en bourse : la grille fondamentale", time: "1 h",
lesson: `
<h3>Les quatre questions d'un investisseur fondamental</h3>
<ol>
<li><strong>Le business est-il bon ?</strong> Avantage concurrentiel durable (marque, coûts, réseau, coûts de changement pour le client, brevets), ROIC élevé et stable, marges qui résistent aux crises.</li>
<li><strong>Peut-il croître ?</strong> Taille du marché, part de marché, pouvoir de prix, opportunités de réinvestissement à rendement élevé.</li>
<li><strong>La direction alloue-t-elle bien le capital ?</strong> Acquisitions passées (et dépréciations de goodwill), dividendes, rachats d'actions au bon prix, endettement raisonnable, intérêts alignés avec les actionnaires.</li>
<li><strong>Le prix est-il raisonnable ?</strong> Multiples, FCF yield, DCF inversé (quelle croissance le cours suppose-t-il ?).</li>
</ol>

<h3>L'allocation du capital : là où tout se joue</h3>
<ul>
<li><strong>Rachats d'actions</strong> : créateurs de valeur s'ils sont faits sous la valeur intrinsèque et financés par le FCF ; destructeurs s'ils servent à compenser la dilution des rémunérations en actions ou s'ils sont financés à crédit au sommet.</li>
<li><strong>Dividendes</strong> : un taux de distribution (dividende / résultat) supérieur à 100 % durablement est un signal de danger.</li>
<li><strong>Rémunération en actions</strong> (SBC) : coût réel pour l'actionnaire, souvent exclu des résultats « ajustés » dans la tech. Un FCF qui ne déduit pas la SBC est flatteur.</li>
<li><strong>Acquisitions</strong> : le taux de réussite historique est faible ; mesurer le ROIC des acquisitions.</li>
</ul>

<h3>Les secteurs ont leurs propres indicateurs</h3>
<div class="tw"><table><thead><tr><th>Secteur</th><th>Indicateurs clés</th></tr></thead><tbody>
<tr><td>Banques</td><td>Ratio de fonds propres CET1, rentabilité des capitaux propres tangibles (ROTE), coût du risque, cours / actif net tangible (P/TBV). L'EBITDA n'a pas de sens.</td></tr>
<tr><td>Assurances</td><td>Ratio de solvabilité (Solvabilité II), ratio combiné en dommages (&lt; 100 % = profit technique), marge sur affaires nouvelles en vie</td></tr>
<tr><td>Foncières</td><td>Actif net réévalué (ANR), décote/prime sur ANR, ratio d'endettement LTV (dette / valeur des actifs, &lt; 40 % confortable), taux d'occupation</td></tr>
<tr><td>Logiciels (SaaS)</td><td>Revenus récurrents annualisés (ARR), rétention nette (NRR), « règle des 40 » (croissance % + marge de FCF % ≥ 40), coût d'acquisition client</td></tr>
<tr><td>Industrie cyclique</td><td>Marges en moyenne de cycle, carnet de commandes, taux d'utilisation</td></tr>
<tr><td>Distribution</td><td>Croissance à magasins comparables, marge brute, rotation des stocks, loyers (IFRS 16)</td></tr>
</tbody></table></div>

<h3>La communication financière</h3>
<ul>
<li><strong>Guidance</strong> : objectifs annuels de la direction ; une révision à la baisse en cours d'année pèse lourdement sur le cours.</li>
<li><strong>Consensus</strong> des analystes : le cours réagit à l'écart entre résultats publiés et consensus, plus qu'aux résultats eux-mêmes.</li>
<li>Lire les transcriptions des conférences : le ton, les questions éludées, les changements de définitions d'indicateurs.</li>
</ul>

<h3>Les erreurs classiques de l'investisseur particulier</h3>
<ul>
<li>Acheter une histoire sans regarder le bilan et le cash-flow.</li>
<li>Confondre une action « pas chère » (PER bas) et une bonne affaire : les pièges à valeur sont nombreux (secteur en déclin, dette, cycle).</li>
<li>Payer n'importe quel prix pour une excellente entreprise : même une très bonne société peut être un mauvais placement si le prix intègre déjà dix ans de croissance parfaite.</li>
<li>Concentrer, ou au contraire tout diversifier sans conviction ; ignorer les frais et la fiscalité (PEA, compte-titres, assurance-vie, formation 1).</li>
</ul>
`,
keys: [
"Bon business, croissance rentable, bonne allocation du capital, prix raisonnable.",
"Rachats d'actions créateurs seulement sous la valeur intrinsèque et financés par le FCF ; la SBC est un coût.",
"Chaque secteur a ses ratios : CET1 et P/TBV (banques), ANR et LTV (foncières), ARR et règle des 40 (SaaS).",
"Le cours réagit à l'écart avec le consensus et à la guidance."
],
ex: [
{ t: "DCF inversé",
q: `<p>Une société de logiciels vaut 10 Md€ en bourse, sans dette. Son FCF actuel est de 200 M€. Avec un WACC de 9 % et une croissance perpétuelle de 3 % après 10 ans, le marché suppose une croissance annuelle du FCF d'environ 20 % pendant 10 ans. Comment utiliser cette information ?</p>`,
a: `<p>Le DCF inversé ne dit pas si l'action est chère : il explicite ce que le prix suppose. Ici, un FCF multiplié par 6 environ en 10 ans (1,20<sup>10</sup> ≈ 6,2). Il faut juger si c'est plausible : taille du marché, rétention, marges futures, concurrence. Si l'investisseur pense que 12 % de croissance est plus réaliste, l'action est surévaluée même si l'entreprise est excellente. FCF yield actuel : 200 / 10 000 = 2 %.</p>` }
],
qcm: [
[1, "Un avantage concurrentiel durable se traduit le plus souvent par :", ["Un ROIC élevé et stable dans le temps", "Un chiffre d'affaires en forte hausse une année", "Un PER bas", "Une dette élevée"], 0, "C'est la rentabilité qui résiste à la concurrence."],
[1, "Pour une banque, quel indicateur n'a pas de sens ?", ["L'EBITDA", "Le ratio CET1", "Le ROTE", "Le P/TBV"], 0, "La dette est sa matière première."],
[2, "Un rachat d'actions crée de la valeur pour les actionnaires qui restent si :", ["Il est réalisé sous la valeur intrinsèque et financé par le free cash-flow", "Il est réalisé à n'importe quel prix", "Il est financé par de la dette au sommet du cycle", "Il compense la dilution des stock-options"], 0, "Sinon, il transfère de la valeur aux vendeurs."],
[2, "La « règle des 40 » pour une société SaaS :", ["Croissance du CA en % + marge de FCF en % ≥ 40", "PER inférieur à 40", "40 % de marge brute minimum", "40 clients minimum"], 0, "Équilibre entre croissance et rentabilité."],
[2, "Pour une foncière cotée, la LTV mesure :", ["La dette rapportée à la valeur des actifs immobiliers", "Le rendement locatif", "La vacance", "La durée des baux"], 0, "En dessous de 40 %, la structure est généralement jugée confortable."],
[2, "Un ratio combiné de 95 % chez un assureur dommages signifie :", ["Un bénéfice technique : sinistres et frais représentent 95 % des primes", "Une perte de 5 %", "Une solvabilité de 95 %", "Une croissance de 95 %"], 0, "Au-dessus de 100 %, l'activité d'assurance perd de l'argent avant produits financiers."],
[3, "Une société tech affiche un FCF « ajusté » qui exclut 15 % de rémunération en actions (SBC). Lecture ?", ["Le FCF est flatteur : la SBC est un coût réel (dilution ou rachats pour la compenser)", "C'est la bonne mesure", "La SBC n'a aucun effet pour l'actionnaire", "Il faut l'ajouter au CA"], 0, "Beaucoup d'investisseurs retirent la SBC du FCF."],
[3, "Un DCF inversé sert à :", ["Expliciter la croissance ou la marge implicitement supposée par le cours actuel", "Calculer le dividende", "Remplacer les comptes", "Calculer le WACC"], 0, "On juge ensuite si cette hypothèse est réaliste."],
[3, "Une action à PER 6, en secteur en déclin structurel et endettée à 4x l'EBITDA, est typiquement :", ["Un piège à valeur potentiel", "Une affaire évidente", "Une valeur de croissance", "Sans risque"], 0, "Le multiple bas reflète souvent un risque réel."]
] },

/* ---------------- M14 ---------------- */
{ id: "decision", title: "Grille de décision et cas final", time: "1 h 15",
lesson: `
<h3>La grille en 8 questions</h3>
<div class="tw"><table><thead><tr><th>Question</th><th>Indicateurs</th><th>Feu vert</th><th>Feu rouge</th></tr></thead><tbody>
<tr><td>1. Croissance de qualité ?</td><td>Croissance organique, prix/volume</td><td>Organique, régulière</td><td>Achetée, ou portée par un seul client</td></tr>
<tr><td>2. Marges solides ?</td><td>Marge brute, EBITDA, EBIT sur 5-10 ans</td><td>Stables ou en hausse, résistent aux crises</td><td>Volatiles, en érosion</td></tr>
<tr><td>3. Résultats convertis en cash ?</td><td>FCF / EBITDA, FCF / RN</td><td>Conversion élevée et stable</td><td>Écart persistant, BFR qui gonfle</td></tr>
<tr><td>4. Rentabilité du capital ?</td><td>ROIC vs WACC</td><td>ROIC &gt; WACC durablement</td><td>ROIC &lt; WACC, goodwill lourd</td></tr>
<tr><td>5. Bilan solide ?</td><td>Levier, couverture, échéancier, liquidité</td><td>Levier &lt; 2x, pas de mur de dette</td><td>Levier &gt; 4x hors LBO, waivers</td></tr>
<tr><td>6. Comptabilité propre ?</td><td>Ajustements, opinion du CAC, méthodes</td><td>Peu d'ajustements, définitions stables</td><td>EBITDA ajusté très supérieur au publié, changements de méthode</td></tr>
<tr><td>7. Management et gouvernance ?</td><td>Historique d'allocation, alignement</td><td>Actionnaires dirigeants, discours cohérent</td><td>Rotation des dirigeants, rémunérations déconnectées</td></tr>
<tr><td>8. Prix ?</td><td>Multiples, DCF, FCF yield</td><td>Marge de sécurité vs valeur estimée</td><td>Prix qui suppose une exécution parfaite</td></tr>
</tbody></table></div>

<h3>Verdier : le verdict</h3>
<div class="ex"><span class="tag">Synthèse</span>
<ul>
<li>Croissance +11 % et marge d'EBITDA en hausse de 11,8 à 14 % : positif, mais dépendance au cycle de la restauration (levier opérationnel de 6).</li>
<li>Conversion en cash faible en N (25 %), à cause du BFR (stocks à 146 jours) : levier d'amélioration de plus de 4 M€.</li>
<li>ROIC de 15,6 % &gt; WACC de 9,5 % : création de valeur.</li>
<li>Bilan sain : levier 1,1x (1,9x avec les loyers), couverture des intérêts 6x.</li>
<li>Dividende supérieur au FCFE : à ajuster.</li>
<li>Valeur des fonds propres : 40 M€ (DCF), 36-38 M€ (multiples décotés), 41 M€ (7x l'EBITDA normatif de 6,9 M€).</li>
</ul>
<p><strong>En private equity</strong> : cible attractive pour un LBO à 7x (TRI de 20 % dans le scénario central grâce à la croissance et au BFR), à condition de valider la résistance du marché et le management. Ne pas payer plus de 7,5x.<br>
<strong>En bourse</strong> (si elle était cotée) : intéressante sous 35 M€ de capitalisation, avec une marge de sécurité d'environ 15 % sur la valeur centrale ; à surveiller sur la saisonnalité du BFR et le cycle.</p></div>

<h3>Cas d'entraînement : Optimo Distribution</h3>
<p>Un fonds vous présente Optimo Distribution, distributeur B2B de fournitures, cible de LBO au prix de 11x l'EBITDA ajusté. Les données sont dans l'exercice : à vous de décider.</p>
`,
keys: [
"Croissance, marges, conversion cash, ROIC, bilan, comptabilité, management, prix : huit questions avant d'investir.",
"Un seul feu rouge sérieux (comptabilité, liquidité) suffit à renoncer.",
"Toujours trianguler la valeur (DCF, multiples, transactions) et exiger une marge de sécurité.",
"Le prix payé détermine le rendement : une excellente entreprise peut être un mauvais placement."
],
ex: [
{ t: "Cas final : Optimo Distribution",
q: `<p>Données sur 3 ans (M€) :</p>
<ul>
<li>CA : 180 → 205 → 240 (dont deux acquisitions représentant 30 M€ en dernière année).</li>
<li>EBITDA publié : 18 → 19 → 21 ; EBITDA ajusté présenté : 22 → 25 → 30 (« coûts d'intégration », « synergies à venir », « éléments non récurrents »).</li>
<li>Créances clients : 30 → 40 → 58. Le groupe utilise 25 M€ de reverse factoring non mentionné dans la dette nette.</li>
<li>FCF après capex : −2 → −5 → −8.</li>
<li>Dette nette publiée 80 M€ ; goodwill 120 M€ pour 110 M€ de capitaux propres ; changement de commissaire aux comptes l'an dernier.</li>
</ul>
<p>Appliquez la grille et donnez votre décision.</p>`,
a: `<ol>
<li><strong>Croissance</strong> : organique ≈ (240 − 30) / 205 − 1 ≈ 2,4 %, le reste est acheté. Feu orange.</li>
<li><strong>Marges</strong> : EBITDA publié de 10 % à 8,75 % : en baisse.</li>
<li><strong>Qualité comptable</strong> : EBITDA ajusté 43 % au-dessus du publié, ajustements « synergies à venir » inacceptables. Créances +45 % pour un CA +17 %. Feu rouge.</li>
<li><strong>Cash</strong> : FCF négatif et en dégradation trois ans de suite malgré des résultats positifs. Feu rouge.</li>
<li><strong>Dette</strong> : dette nette économique = 80 + 25 = 105 M€, soit 5,0x l'EBITDA publié (et non 2,7x sur l'ajusté). Feu rouge.</li>
<li><strong>Bilan</strong> : goodwill supérieur aux capitaux propres : capitaux propres tangibles négatifs.</li>
<li><strong>Gouvernance</strong> : changement de CAC à investiguer.</li>
<li><strong>Prix</strong> : 11x un EBITDA ajusté de 30 = 330 M€ de VE, soit 15,7x l'EBITDA publié. Excessif.</li>
</ol>
<p><strong>Décision : ne pas investir</strong>, ou seulement après une due diligence QoE indépendante et à un prix fondé sur l'EBITDA publié et la dette économique (de l'ordre de 7x 21 = 147 M€ de VE, moins 105 de dette = 42 M€ de fonds propres au plus, contre 225 M€ implicites).</p>` }
],
qcm: [
[1, "Avant d'investir, quel feu rouge suffit en général à renoncer ?", ["Des doutes sérieux sur la sincérité des comptes", "Une croissance de 5 %", "Un dividende stable", "Un PER de 15"], 0, "Toute l'analyse repose sur les chiffres."],
[1, "La marge de sécurité désigne :", ["L'écart entre la valeur estimée et le prix payé", "La marge brute", "Le taux d'IS", "La trésorerie minimale"], 0, "Elle protège contre les erreurs d'estimation."],
[2, "Optimo : quel est le levier sur dette nette économique (avec reverse factoring) et EBITDA publié ?", ["5,0x", "2,7x", "3,8x", "1,0x"], 0, "(80 + 25) / 21."],
[2, "Optimo : quelle est la croissance organique approximative de la dernière année ?", ["≈ 2,4 %", "≈ 17 %", "≈ 33 %", "≈ 10 %"], 0, "Hors 30 M€ de CA acquis."],
[2, "Pourquoi les « synergies à venir » ne doivent-elles pas figurer dans l'EBITDA ajusté de valorisation ?", ["Parce qu'elles ne sont pas encore réalisées et que l'acheteur paierait pour son propre travail futur", "Parce qu'elles sont toujours négatives", "Parce qu'elles sont fiscales", "Elles doivent y figurer"], 0, "On les négocie à part, éventuellement en complément de prix."],
[3, "Verdier : pourquoi ne pas payer plus de 7,5x l'EBITDA dans un LBO ?", ["Au-delà, le TRI du scénario central passe sous les objectifs et le scénario défavorable fait perdre de l'argent", "Parce que c'est la loi", "Parce que la banque l'interdit", "Parce que l'EBITDA est faux"], 0, "Le prix d'entrée est le premier déterminant du rendement."],
[3, "Une entreprise excellente cotée à un prix qui suppose dix ans de croissance parfaite est :", ["Potentiellement un mauvais placement malgré sa qualité", "Toujours un bon placement", "Sans risque", "Forcément surendettée"], 0, "Qualité et prix sont deux questions distinctes."],
[3, "Capitaux propres tangibles négatifs (goodwill supérieur aux capitaux propres) signifient :", ["Que la valeur comptable repose entièrement sur des acquisitions passées dont la valeur peut être dépréciée", "Que l'entreprise est en faillite", "Que la dette est nulle", "Rien d'important"], 0, "Signal de croissance externe intensive, à combiner avec le levier et le FCF."]
] }

);
})();
