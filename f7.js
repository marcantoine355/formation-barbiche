/* Formation 7 — Finance d'entreprise et analyse financière (partie 1 : modules 1 à 7) */
(window.FB = window.FB || {formations: []}).formations.push({
  id: "finance", num: 7, short: "Finance d'entreprise", title: "Finance d'entreprise : analyser avant d'investir",
  kicker: "Private equity · bourse", hours: "≈ 15 h",
  blurb: "Compte de résultat, bilan, BFR, cash-flow, solvabilité, IFRS 16, rentabilité, multiples, DCF et LBO : la boîte à outils pour décider d'investir ou non, en non coté comme en bourse.",
  intro: "Un fil rouge accompagne les quatorze modules : <strong>Verdier Industries</strong>, PME fictive qui fabrique du matériel de cuisine professionnelle (50 M€ de chiffre d'affaires). On décortique ses comptes, on mesure sa solidité, on la valorise, puis on décide si on investirait, comme fonds de private equity et comme actionnaire en bourse.",
  modules: [

/* ---------------- M1 ---------------- */
{ id: "lire", title: "Lire les comptes : sources, normes, trois états", time: "45 min",
lesson: `
<h3>Où trouver l'information</h3>
<div class="tw"><table><thead><tr><th>Entreprise</th><th>Sources principales</th></tr></thead><tbody>
<tr><td>Société cotée</td><td>Document d'enregistrement universel (DEU) ou rapport annuel, rapports semestriels, communiqués de résultats, présentations aux investisseurs, transcriptions des conférences téléphoniques</td></tr>
<tr><td>PME non cotée</td><td>Comptes annuels déposés au greffe (consultables sur les sites officiels, sauf option de confidentialité des petites entreprises), liasse fiscale, rapport de gestion, rapport du commissaire aux comptes</td></tr>
<tr><td>Cible de private equity</td><td>Data room : comptes sur 3 à 5 ans, reportings mensuels, budget, business plan du management, rapports de due diligence (financière, juridique, fiscale, sociale)</td></tr>
</tbody></table></div>

<h3>Deux référentiels : PCG français et IFRS</h3>
<ul>
<li>Les <strong>comptes sociaux</strong> des entreprises françaises suivent le <strong>plan comptable général</strong> (PCG). Logique patrimoniale et fiscale, compte de résultat présenté par nature, résultat exceptionnel isolé.</li>
<li>Les <strong>comptes consolidés</strong> des groupes cotés européens suivent les normes <strong>IFRS</strong>. Logique de « juste valeur » et d'information de l'investisseur ; pas de résultat exceptionnel au sens français ; contrats de location au bilan (IFRS 16, module 8) ; goodwill non amorti mais testé.</li>
<li>Comparer deux sociétés suppose de vérifier qu'elles utilisent le même référentiel et les mêmes définitions d'indicateurs (« EBITDA ajusté », « résultat opérationnel courant »…).</li>
</ul>

<h3>Les trois états financiers et leur lien</h3>
<ol>
<li><strong>Le compte de résultat</strong> : ce que l'entreprise a gagné ou perdu sur l'exercice (un film de l'année).</li>
<li><strong>Le bilan</strong> : ce qu'elle possède et ce qu'elle doit à une date donnée (une photo).</li>
<li><strong>Le tableau des flux de trésorerie</strong> : d'où vient et où va le cash (exploitation, investissement, financement).</li>
</ol>
<p>Ils se tiennent : le résultat net alimente les capitaux propres du bilan ; la variation de trésorerie du tableau de flux égale la variation de trésorerie entre deux bilans. Un analyste vérifie toujours cette cohérence.</p>
<div class="note"><span class="tag">Résultat ≠ cash</span><p>Une entreprise peut être bénéficiaire et manquer de trésorerie (clients qui paient tard, stocks qui gonflent, investissements lourds). L'inverse existe aussi. L'investisseur regarde les deux, et se méfie quand ils divergent longtemps.</p></div>

<h3>Les annexes et le rapport du commissaire aux comptes</h3>
<p>Les <strong>annexes</strong> contiennent ce qui compte : méthodes comptables, détail des dettes et de leur échéancier, engagements hors bilan, litiges, parties liées, rémunérations. Le <strong>commissaire aux comptes</strong> émet une opinion : certification sans réserve, avec réserve, refus de certifier, ou impossibilité de certifier. Une réserve ou une « observation » sur la continuité d'exploitation est un signal d'alerte majeur.</p>

<h3>Notre fil rouge : Verdier Industries (exercice N, en M€)</h3>
<div class="tw"><table><thead><tr><th>Compte de résultat</th><th class="n">N</th><th class="n">N-1</th></tr></thead><tbody>
<tr><td>Chiffre d'affaires</td><td class="n">50,0</td><td class="n">45,0</td></tr>
<tr><td>Achats consommés</td><td class="n">−20,0</td><td class="n">−18,5</td></tr>
<tr><td>Charges externes</td><td class="n">−8,0</td><td class="n">−7,4</td></tr>
<tr><td>Impôts et taxes</td><td class="n">−0,8</td><td class="n">−0,7</td></tr>
<tr><td>Charges de personnel</td><td class="n">−14,2</td><td class="n">−13,1</td></tr>
<tr><td><strong>EBE (EBITDA)</strong></td><td class="n"><strong>7,0</strong></td><td class="n"><strong>5,3</strong></td></tr>
<tr><td>Dotations aux amortissements</td><td class="n">−2,0</td><td class="n">−1,8</td></tr>
<tr><td><strong>Résultat d'exploitation (EBIT)</strong></td><td class="n"><strong>5,0</strong></td><td class="n"><strong>3,5</strong></td></tr>
<tr><td>Résultat financier</td><td class="n">−0,8</td><td class="n">−0,7</td></tr>
<tr><td>Résultat exceptionnel</td><td class="n">−0,2</td><td class="n">0,0</td></tr>
<tr><td>Impôt sur les sociétés (25 %)</td><td class="n">−1,0</td><td class="n">−0,7</td></tr>
<tr><td><strong>Résultat net</strong></td><td class="n"><strong>3,0</strong></td><td class="n"><strong>2,1</strong></td></tr>
</tbody></table></div>
<div class="tw"><table><thead><tr><th>Bilan fin N</th><th class="n">M€</th><th>Bilan fin N</th><th class="n">M€</th></tr></thead><tbody>
<tr><td>Immobilisations nettes (dont goodwill 3,0)</td><td class="n">14,0</td><td>Capitaux propres</td><td class="n">15,0</td></tr>
<tr><td>Stocks</td><td class="n">8,0</td><td>Provisions</td><td class="n">1,0</td></tr>
<tr><td>Créances clients</td><td class="n">10,0</td><td>Dettes financières (dont 2,0 à moins d'un an)</td><td class="n">12,0</td></tr>
<tr><td>Autres créances</td><td class="n">1,0</td><td>Dettes fournisseurs</td><td class="n">6,0</td></tr>
<tr><td>Trésorerie</td><td class="n">4,0</td><td>Dettes fiscales et sociales</td><td class="n">3,0</td></tr>
<tr><td><strong>Total</strong></td><td class="n"><strong>37,0</strong></td><td><strong>Total</strong></td><td class="n"><strong>37,0</strong></td></tr>
</tbody></table></div>
<p>Autres données : investissements (capex) de l'exercice 2,5 M€ ; BFR fin N-1 : 8,5 M€ ; Verdier loue ses bâtiments (1,2 M€ de loyers par an) ; dividende versé 1,5 M€.</p>
`,
keys: [
"Trois états liés : compte de résultat (film), bilan (photo), flux de trésorerie (cash).",
"PCG (comptes sociaux) ≠ IFRS (consolidés cotés) : vérifier le référentiel avant de comparer.",
"Les annexes et l'opinion du commissaire aux comptes valent autant que les chiffres.",
"Résultat et trésorerie peuvent diverger : on regarde toujours les deux."
],
ex: [
{ t: "Premiers chiffres de Verdier",
q: `<p>À partir des comptes de Verdier, calculez : (1) la croissance du chiffre d'affaires ; (2) la marge d'EBITDA en N et N-1 ; (3) la marge nette en N ; (4) le taux d'impôt apparent.</p>`,
a: `<ol><li>(50 − 45) / 45 = <strong>+11,1 %</strong>.</li><li>7,0 / 50 = <strong>14,0 %</strong> en N contre 5,3 / 45 = <strong>11,8 %</strong> en N-1 : forte amélioration.</li><li>3,0 / 50 = <strong>6,0 %</strong>.</li><li>Résultat avant impôt : 5,0 − 0,8 − 0,2 = 4,0 ; impôt 1,0 : <strong>25 %</strong>.</li></ol>` }
],
qcm: [
[1, "Le bilan représente :", ["Le patrimoine de l'entreprise à une date donnée", "Les ventes de l'année", "Les flux de trésorerie de l'année", "Le budget de l'année suivante"], 0, "C'est une photo ; le compte de résultat est un film."],
[1, "Les groupes cotés européens publient leurs comptes consolidés selon :", ["Les normes IFRS", "Le PCG français", "Les US GAAP obligatoirement", "Les normes fiscales"], 0, "Depuis 2005."],
[1, "Une entreprise bénéficiaire peut-elle manquer de trésorerie ?", ["Oui, par exemple si ses clients paient tard ou si elle investit beaucoup", "Non, c'est impossible", "Seulement en IFRS", "Seulement si elle verse des dividendes"], 0, "Résultat et trésorerie sont deux notions distinctes."],
[2, "Où trouve-t-on l'échéancier des dettes financières ?", ["Dans l'annexe des comptes", "Dans le compte de résultat", "Dans le rapport de gestion uniquement", "Nulle part"], 0, "L'annexe détaille dettes, engagements hors bilan et litiges."],
[2, "Quel élément du rapport du commissaire aux comptes doit alerter immédiatement ?", ["Une observation ou une réserve sur la continuité d'exploitation", "Une certification sans réserve", "La mention du nom du cabinet", "La date du rapport"], 0, "Elle signifie un doute sur la capacité à poursuivre l'activité."],
[2, "Quelle est la marge d'EBITDA de Verdier en N ?", ["14 %", "10 %", "6 %", "60 %"], 0, "7,0 / 50,0."],
[3, "En IFRS, le résultat exceptionnel au sens du PCG :", ["N'existe pas comme tel ; les éléments inhabituels sont présentés dans le résultat opérationnel, parfois isolés en « autres produits et charges opérationnels »", "Est présenté de la même façon", "Est obligatoire", "Est intégré au résultat financier"], 0, "D'où l'importance de lire la définition du « résultat opérationnel courant »."],
[3, "Comment vérifier la cohérence entre les trois états financiers ?", ["La variation de trésorerie du tableau de flux doit égaler la variation de trésorerie entre deux bilans", "Le résultat net doit égaler la trésorerie", "L'EBITDA doit égaler le chiffre d'affaires", "Ils sont indépendants"], 0, "Le résultat net alimente aussi les capitaux propres (hors dividendes et autres mouvements)."]
] },

/* ---------------- M2 ---------------- */
{ id: "cr", title: "Le compte de résultat décortiqué", time: "1 h",
lesson: `
<h3>Les soldes intermédiaires de gestion</h3>
<p>Le compte de résultat se lit du haut vers le bas, chaque solde isolant un niveau de performance :</p>
<div class="tw"><table><thead><tr><th>Solde</th><th>Calcul</th><th>Ce qu'il mesure</th></tr></thead><tbody>
<tr><td>Marge brute (ou commerciale)</td><td>CA − coût des marchandises ou matières consommées</td><td>Pouvoir de fixation des prix, positionnement</td></tr>
<tr><td>Valeur ajoutée</td><td>Marge brute − consommations externes</td><td>Richesse créée par l'entreprise</td></tr>
<tr><td>EBE / EBITDA</td><td>Valeur ajoutée − impôts et taxes − charges de personnel (+ subventions)</td><td>Performance opérationnelle avant politique d'investissement et de financement</td></tr>
<tr><td>Résultat d'exploitation / EBIT</td><td>EBE − dotations aux amortissements et provisions</td><td>Rentabilité de l'outil industriel</td></tr>
<tr><td>Résultat courant avant impôt</td><td>EBIT + résultat financier</td><td>Effet de l'endettement</td></tr>
<tr><td>Résultat net</td><td>+ exceptionnel − participation − IS</td><td>Ce qui revient aux actionnaires</td></tr>
</tbody></table></div>
<p>Verdier : marge brute 30,0 (60 %), valeur ajoutée 22,0, EBITDA 7,0 (14 %), EBIT 5,0 (10 %), résultat net 3,0 (6 %).</p>

<h3>Lire la croissance du chiffre d'affaires</h3>
<p>Une hausse du CA n'a pas la même valeur selon son origine. On décompose :</p>
<ul>
<li><strong>Effet volume</strong> (plus d'unités vendues) et <strong>effet prix/mix</strong> (prix plus élevés, produits plus chers dans le mix).</li>
<li><strong>Croissance organique</strong> (à périmètre et change constants) vs <strong>effet périmètre</strong> (acquisitions) et <strong>effet change</strong>.</li>
</ul>
<p>Une croissance « achetée » par acquisitions ne vaut pas une croissance organique : elle a coûté du capital. Une croissance portée uniquement par les prix (inflation) peut s'inverser.</p>

<h3>Charges fixes, charges variables et levier opérationnel</h3>
<p>Les charges <strong>variables</strong> évoluent avec l'activité (matières, sous-traitance, commissions) ; les charges <strong>fixes</strong> non (loyers, structure, une grande partie des salaires, amortissements). Plus la part de charges fixes est élevée, plus le résultat amplifie les variations du CA : c'est le <strong>levier opérationnel</strong>.</p>
<div class="ex"><span class="tag">Verdier</span><p>Charges variables : achats, soit 40 % du CA (taux de marge sur coûts variables : 60 %). Charges fixes : 8,0 + 0,8 + 14,2 + 2,0 = 25,0 M€.<br>
<strong>Point mort</strong> (EBIT nul) : 25,0 / 60 % = <strong>41,7 M€</strong> de CA. Verdier est à 50 M€, soit une marge de sécurité de 17 %.<br>
Si le CA progresse de 10 % (55 M€) à charges fixes constantes : EBIT = 55 × 60 % − 25 = 8,0 M€, soit <strong>+60 %</strong>. Levier opérationnel : 6. À l'inverse, −10 % de CA ferait chuter l'EBIT de 60 %.</p></div>

<h3>Présentation par nature ou par fonction</h3>
<p>Le PCG présente les charges <strong>par nature</strong> (achats, personnel, amortissements). Beaucoup de groupes IFRS les présentent <strong>par fonction</strong> (coût des ventes, frais commerciaux, frais généraux, R&D) : l'EBITDA n'apparaît alors pas directement ; il faut rajouter les amortissements, donnés en annexe ou dans le tableau de flux.</p>

<h3>Questions à se poser sur chaque ligne</h3>
<ul>
<li><strong>Marge brute</strong> : stable dans le temps ? Résiste-t-elle à l'inflation des matières ? Un taux qui baisse signale une perte de pouvoir de prix.</li>
<li><strong>Charges de personnel / CA</strong> : la croissance est-elle « scalable » (CA qui augmente plus vite que les effectifs) ?</li>
<li><strong>Amortissements vs investissements</strong> : un groupe qui investit durablement moins que ses amortissements sous-investit (et embellit son cash-flow).</li>
<li><strong>Résultat financier</strong> : coût de la dette, mais aussi effets de change.</li>
<li><strong>Taux d'impôt effectif</strong> : un taux anormalement bas est-il durable (déficits reportables, crédits d'impôt) ?</li>
</ul>
`,
keys: [
"Marge brute → valeur ajoutée → EBITDA → EBIT → résultat net : chaque solde isole un niveau de performance.",
"Croissance organique (volume, prix/mix) ≠ croissance par acquisition ou par change.",
"Point mort = charges fixes ÷ taux de marge sur coûts variables ; levier opérationnel = sensibilité de l'EBIT au CA.",
"En présentation par fonction, l'EBITDA se reconstitue avec les amortissements de l'annexe."
],
ex: [
{ t: "Scénario de crise chez Verdier",
q: `<p>Un retournement du marché de la restauration fait baisser le CA de Verdier de 15 % en N+1. Le taux de marge sur coûts variables reste à 60 % ; la direction réduit les charges externes de 1,0 M€. Calculez l'EBIT N+1 et commentez.</p>`,
a: `<p>CA : 42,5 M€. Marge sur coûts variables : 25,5 M€. Charges fixes : 25,0 − 1,0 = 24,0 M€. <strong>EBIT = 1,5 M€</strong> (contre 5,0) : −70 % pour −15 % de CA. Après 0,8 M€ de frais financiers, le résultat avant impôt n'est plus que de 0,7 M€. Verdier reste au-dessus du point mort (40 M€ après économies), mais la marge de manœuvre est faible : un investisseur doit stresser ce scénario.</p>` }
],
qcm: [
[1, "L'EBITDA correspond en français à :", ["L'excédent brut d'exploitation (EBE)", "Le résultat net", "Le résultat d'exploitation", "La marge brute"], 0, "Earnings Before Interest, Taxes, Depreciation and Amortization."],
[1, "L'EBIT se calcule à partir de l'EBITDA en retirant :", ["Les dotations aux amortissements (et provisions d'exploitation)", "Les intérêts", "L'impôt", "Les achats"], 0, "L'EBIT est le résultat d'exploitation."],
[1, "La croissance organique exclut :", ["Les effets de périmètre (acquisitions) et de change", "Les hausses de prix", "Les hausses de volumes", "Les nouveaux clients"], 0, "Elle mesure la croissance « à périmètre et change constants »."],
[2, "Point mort d'une entreprise avec 30 M€ de charges fixes et un taux de marge sur coûts variables de 40 % ?", ["75 M€", "30 M€", "12 M€", "70 M€"], 0, "30 / 0,40 = 75 M€."],
[2, "Une forte proportion de charges fixes rend le résultat :", ["Plus sensible aux variations du chiffre d'affaires", "Plus stable", "Indépendant du CA", "Toujours négatif"], 0, "C'est le levier opérationnel."],
[2, "Un taux de marge brute qui baisse trois années de suite alors que le CA progresse signale souvent :", ["Une perte de pouvoir de fixation des prix ou une hausse des coûts non répercutée", "Une meilleure efficacité", "Une baisse de l'impôt", "Une réduction de la dette"], 0, "C'est un indicateur clé de la qualité du modèle économique."],
[3, "Un groupe IFRS présente ses charges par fonction. Comment obtenir son EBITDA ?", ["Ajouter au résultat opérationnel les amortissements indiqués en annexe ou dans le tableau de flux", "Il est impossible à calculer", "Prendre la marge brute", "Soustraire les frais commerciaux"], 0, "Attention aux définitions maison de l'EBITDA « ajusté »."],
[3, "Verdier : si le CA augmente de 10 % avec des charges fixes inchangées, l'EBIT progresse de :", ["60 %", "10 %", "14 %", "25 %"], 0, "De 5,0 à 8,0 M€."],
[3, "Un groupe dont les investissements sont durablement inférieurs aux amortissements :", ["Risque de sous-investir et d'embellir temporairement son cash-flow", "Est forcément bien géré", "Va voir son EBITDA baisser immédiatement", "Est surendetté"], 0, "À comparer sur plusieurs années, avec l'âge des actifs."]
] },

/* ---------------- M3 ---------------- */
{ id: "qualite", title: "Qualité des résultats et retraitements", time: "45 min",
lesson: `
<h3>Le résultat publié n'est pas le résultat économique</h3>
<p>Un investisseur cherche le <strong>résultat normatif</strong> : celui que l'entreprise peut reproduire chaque année. Il retraite donc les comptes publiés. En private equity, cette analyse s'appelle la <strong>Quality of Earnings</strong> (QoE) et donne l'« EBITDA ajusté » sur lequel le prix est négocié.</p>

<h3>Les retraitements classiques</h3>
<div class="tw"><table><thead><tr><th>Élément</th><th>Retraitement</th></tr></thead><tbody>
<tr><td>Coûts réellement non récurrents (litige ponctuel, déménagement, frais d'acquisition)</td><td>Réintégrés dans l'EBITDA ajusté</td></tr>
<tr><td>Rémunération du dirigeant-actionnaire hors marché</td><td>Normalisée au niveau d'un manager salarié</td></tr>
<tr><td>Loyers versés à une SCI du dirigeant à un prix hors marché</td><td>Normalisés au loyer de marché</td></tr>
<tr><td>Produits de cession d'actifs</td><td>Exclus</td></tr>
<tr><td>Effets en année pleine (acquisition, nouveau contrat)</td><td>Ajoutés avec prudence (« pro forma »)</td></tr>
<tr><td>Changements de méthode comptable</td><td>Neutralisés pour comparer les années</td></tr>
</tbody></table></div>

<h3>Les signaux d'alerte</h3>
<ul>
<li><strong>Les « non récurrents » qui reviennent chaque année</strong> : des coûts de restructuration présents 4 ans sur 5 font partie de l'activité.</li>
<li><strong>Écart croissant entre EBITDA ajusté et EBITDA publié</strong> : plus les ajustements sont nombreux, plus il faut les justifier un par un.</li>
<li><strong>Créances clients qui croissent plus vite que le CA</strong> : ventes de fin d'année forcées, clients en difficulté, reconnaissance anticipée du chiffre d'affaires.</li>
<li><strong>Stocks qui gonflent</strong> : produits invendables non dépréciés, ou production stockée pour absorber les coûts fixes (ce qui améliore la marge comptable).</li>
<li><strong>Capitalisation croissante de charges</strong> (R&D, logiciels, coûts d'obtention de contrats) : les charges passent au bilan et l'EBITDA monte mécaniquement.</li>
<li><strong>Reprises de provisions</strong> qui soutiennent le résultat.</li>
<li><strong>Cash-flow d'exploitation durablement inférieur au résultat</strong>.</li>
<li>Changement de commissaire aux comptes, retards de publication, départ du directeur financier.</li>
</ul>
<div class="note"><span class="tag">Le test le plus simple</span><p>Comparez sur 5 ans la somme des résultats nets et la somme des cash-flows d'exploitation après investissements. Une entreprise de qualité convertit l'essentiel de ses résultats en cash. Un écart persistant doit être expliqué.</p></div>

<h3>La reconnaissance du chiffre d'affaires (IFRS 15)</h3>
<p>Le CA est reconnu quand le contrôle du bien ou du service est transféré au client, obligation par obligation. Les contrats longs (construction, logiciels, abonnements) reconnaissent le CA à l'avancement ou dans le temps. Questions à poser : quel est le rythme de facturation par rapport à la reconnaissance ? Y a-t-il des « actifs de contrat » (CA reconnu non encore facturé) qui gonflent ? Des remises ou des retours sont-ils correctement estimés ?</p>

<h3>Cas Verdier : 0,2 M€ d'exceptionnel</h3>
<p>Le résultat exceptionnel de −0,2 M€ correspond à une indemnité de licenciement d'un directeur commercial. Ponctuelle, elle se situe déjà sous l'EBITDA dans le PCG : pas de retraitement nécessaire de l'EBITDA. En revanche, le dirigeant fondateur se verse 120 k€ alors qu'un directeur général salarié coûterait 250 k€ chargés : l'EBITDA normatif pour un acquéreur est donc de 7,0 − 0,13 ≈ <strong>6,9 M€</strong>.</p>
`,
keys: [
"Chercher le résultat normatif, reproductible chaque année (Quality of Earnings).",
"Normaliser rémunération du dirigeant, loyers intra-groupe, éléments vraiment ponctuels.",
"Alerte : non récurrents récurrents, créances et stocks plus rapides que le CA, charges capitalisées.",
"Test clé : conversion des résultats en cash sur plusieurs années."
],
ex: [
{ t: "Valider un EBITDA ajusté",
q: `<p>Le vendeur d'une PME présente un EBITDA ajusté de 4,0 M€ pour un EBITDA publié de 3,0 M€. Ajustements : (a) frais d'un litige prud'homal 0,2 ; (b) « coûts de restructuration » 0,4 (même ligne de 0,3 à 0,5 les 4 années précédentes) ; (c) effet en année pleine d'un nouveau client signé en novembre 0,3 ; (d) salaire du fondateur jugé trop élevé 0,1. Lesquels accepter ?</p>`,
a: `<ul><li>(a) Acceptable si le litige est réellement isolé (vérifier l'historique de contentieux).</li><li>(b) À refuser : des restructurations chaque année sont des coûts d'exploitation.</li><li>(c) À accepter partiellement et avec prudence : contrat signé, mais montée en charge et marge à vérifier ; on retient souvent une partie seulement.</li><li>(d) Acceptable si le successeur sera effectivement payé moins (benchmark).</li></ul><p>EBITDA ajusté retenu : environ 3,0 + 0,2 + 0,15 + 0,1 = <strong>3,45 M€</strong>, et non 4,0. À 7 fois l'EBITDA, l'écart représente près de 4 M€ de valeur.</p>` }
],
qcm: [
[1, "L'analyse « Quality of Earnings » vise à déterminer :", ["Le résultat normatif et reproductible de l'entreprise", "Le cours de bourse futur", "Le montant des impôts", "La valeur des stocks"], 0, "C'est le cœur de la due diligence financière."],
[1, "Des coûts de restructuration présents chaque année depuis 5 ans sont :", ["Des coûts récurrents, à ne pas réintégrer", "Exceptionnels par nature", "À ajouter à l'EBITDA", "Neutres"], 0, "Un ajustement doit être réellement ponctuel."],
[2, "Les créances clients progressent de 40 % quand le CA progresse de 10 %. Hypothèses à examiner ?", ["Clients en difficulté, délais de paiement allongés, ou reconnaissance anticipée du chiffre d'affaires", "Une meilleure rentabilité", "Une baisse de la dette", "Rien d'anormal"], 0, "C'est l'un des signaux d'alerte les plus fiables."],
[2, "Capitaliser des frais de développement au lieu de les passer en charges :", ["Augmente l'EBITDA de l'année", "Diminue l'EBITDA", "N'a aucun effet", "Augmente la dette"], 0, "Les montants sont ensuite amortis, sous l'EBITDA."],
[2, "Pourquoi normaliser la rémunération d'un dirigeant-fondateur sous-payé ?", ["Parce que l'acquéreur devra payer un dirigeant au prix du marché", "Pour réduire l'impôt", "Parce que c'est obligatoire en comptabilité", "Pour augmenter l'EBITDA"], 0, "Ici, la normalisation réduit l'EBITDA."],
[3, "Selon IFRS 15, le chiffre d'affaires est reconnu :", ["Lorsque le contrôle du bien ou du service est transféré au client", "À la signature du contrat", "À l'encaissement", "À la facturation"], 0, "Obligation de performance par obligation de performance."],
[3, "Une entreprise produit plus que ses ventes pour stocker. Effet comptable à court terme ?", ["Une partie des coûts fixes est stockée, ce qui améliore la marge de l'exercice", "Aucun effet", "Une baisse immédiate du résultat", "Une hausse de la trésorerie"], 0, "Effet réversible quand les stocks seront écoulés ou dépréciés."],
[3, "Sur 5 ans, une société cumule 50 M€ de résultat net et −5 M€ de cash-flow après investissements, sans croissance notable. Lecture ?", ["Conversion très faible : la qualité des résultats est douteuse et doit être expliquée", "Excellente gestion", "Normal pour toute PME", "Signe d'un faible endettement"], 0, "Un tel écart sans investissements de croissance est un signal fort."]
] },

/* ---------------- M4 ---------------- */
{ id: "bilan", title: "Le bilan : structure financière et équilibre", time: "55 min",
lesson: `
<h3>Les grandes masses</h3>
<ul>
<li><strong>Actif immobilisé</strong> : incorporel (goodwill, marques, logiciels, brevets), corporel (usines, machines), financier (participations).</li>
<li><strong>Actif circulant</strong> : stocks, créances clients, autres créances, trésorerie.</li>
<li><strong>Capitaux propres</strong> : capital, réserves, résultat.</li>
<li><strong>Provisions</strong> : risques et charges (litiges, garanties, retraites).</li>
<li><strong>Dettes</strong> : financières (emprunts bancaires, obligations, crédit-bail en IFRS), d'exploitation (fournisseurs, fiscales et sociales), autres.</li>
</ul>

<h3>Le goodwill : ce que l'on a payé en plus</h3>
<p>Quand un groupe achète une société plus cher que la juste valeur de ses actifs nets, la différence est le <strong>goodwill</strong> (écart d'acquisition). En IFRS, il n'est pas amorti mais soumis chaque année à un <strong>test de dépréciation</strong> (module 8). Un goodwill qui représente une large part des capitaux propres signale une croissance par acquisitions et un risque de dépréciation brutale. Beaucoup d'analystes raisonnent en <strong>capitaux propres tangibles</strong> (hors goodwill et incorporels).</p>

<h3>Lecture fonctionnelle : FRNG, BFR, trésorerie</h3>
<p>On regroupe le bilan par cycles :</p>
<ul>
<li><strong>Fonds de roulement net global (FRNG)</strong> = ressources stables (capitaux propres + provisions + dettes financières à long terme) − emplois stables (immobilisations).</li>
<li><strong>Besoin en fonds de roulement (BFR)</strong> = stocks + créances d'exploitation − dettes d'exploitation.</li>
<li><strong>Trésorerie nette</strong> = FRNG − BFR (= trésorerie active − concours bancaires courants).</li>
</ul>
<div class="ex"><span class="tag">Verdier fin N</span><p>
Ressources stables : 15,0 + 1,0 + 10,0 (dette à plus d'un an) = 26,0 ; emplois stables : 14,0 → <strong>FRNG = 12,0</strong>.<br>
BFR : 8,0 + 10,0 + 1,0 − 6,0 − 3,0 = <strong>10,0</strong> (20 % du CA).<br>
Trésorerie nette : 12,0 − 10,0 = 2,0, soit 4,0 de trésorerie active − 2,0 de dette à moins d'un an. Le BFR est financé par des ressources stables : structure saine.</p></div>
<p>Règle d'équilibre : les emplois durables doivent être financés par des ressources durables. Une entreprise qui finance ses usines avec des découverts est en danger au premier resserrement du crédit.</p>

<h3>Lecture « investisseur » : capitaux employés et dette nette</h3>
<p>Les investisseurs préfèrent une autre présentation :</p>
<ul>
<li><strong>Capitaux employés</strong> = actif immobilisé d'exploitation + BFR. Verdier : 14,0 + 10,0 = <strong>24,0 M€</strong>.</li>
<li>Financés par les <strong>capitaux propres</strong> et la <strong>dette nette</strong> (dettes financières − trésorerie) : 15,0 + 8,0 = 23,0, plus les provisions 1,0 = 24,0.</li>
</ul>
<p>Cette lecture sert à calculer la rentabilité des capitaux employés (ROCE, module 9) et à passer de la valeur d'entreprise à la valeur des fonds propres (module 10).</p>

<h3>Le hors-bilan</h3>
<p>Engagements donnés (cautions, garanties de passif, locations hors IFRS 16), engagements de retraite non provisionnés en PCG, affacturage déconsolidant, achats fermes : l'annexe les recense. Pour un investisseur, une partie relève de la dette « cachée ».</p>
`,
keys: [
"FRNG = ressources stables − emplois stables ; BFR = stocks + créances d'exploitation − dettes d'exploitation ; Trésorerie = FRNG − BFR.",
"Capitaux employés = immobilisations d'exploitation + BFR = capitaux propres + dette nette (+ provisions).",
"Goodwill important = croissance externe et risque de dépréciation : regarder les capitaux propres tangibles.",
"Lire le hors-bilan : une partie est de la dette déguisée."
],
ex: [
{ t: "Diagnostic de structure",
q: `<p>Société X (M€) : immobilisations 30 ; stocks 12 ; clients 15 ; trésorerie 1 ; capitaux propres 18 ; dettes financières à long terme 8 ; concours bancaires courants 9 ; fournisseurs 14 ; dettes fiscales et sociales 9. Calculez FRNG, BFR, trésorerie nette. Diagnostic ?</p>`,
a: `<p>Ressources stables : 18 + 8 = 26 ; emplois stables : 30 → <strong>FRNG = −4</strong>. BFR : 12 + 15 − 14 − 9 = <strong>4</strong>. Trésorerie nette : −4 − 4 = <strong>−8</strong> (1 − 9). Les immobilisations sont en partie financées par du court terme et le BFR entièrement par les découverts : situation fragile, dépendante des banques. Il faut renforcer les fonds propres ou consolider la dette à long terme.</p>` }
],
qcm: [
[1, "Le BFR se calcule ainsi :", ["Stocks + créances d'exploitation − dettes d'exploitation", "Actif total − passif total", "Capitaux propres − dettes", "Trésorerie − dettes financières"], 0, "Il mesure l'argent immobilisé par le cycle d'exploitation."],
[1, "Le goodwill représente :", ["L'écart entre le prix payé pour une acquisition et la juste valeur des actifs nets acquis", "La valeur de la marque créée en interne", "La trésorerie excédentaire", "Les réserves"], 0, "Il est testé chaque année en IFRS."],
[1, "La dette nette se calcule :", ["Dettes financières − trésorerie et équivalents", "Toutes les dettes − actifs", "Dettes fournisseurs − créances clients", "Capitaux propres − dettes"], 0, "Base des ratios de levier."],
[2, "Trésorerie nette = ?", ["FRNG − BFR", "BFR − FRNG", "Capitaux propres − immobilisations", "Résultat net + amortissements"], 0, "Relation fondamentale de l'analyse fonctionnelle."],
[2, "Un FRNG négatif signifie :", ["Qu'une partie des immobilisations est financée par des ressources de court terme", "Que l'entreprise est très rentable", "Que le BFR est négatif", "Que l'entreprise n'a pas de dette"], 0, "Situation fragile, sauf modèle à BFR très négatif (grande distribution)."],
[2, "Les capitaux employés de Verdier s'élèvent à :", ["24 M€ (14 d'immobilisations + 10 de BFR)", "37 M€", "15 M€", "10 M€"], 0, "Ils servent à calculer le ROCE."],
[3, "Pourquoi certains analystes raisonnent-ils en capitaux propres tangibles ?", ["Pour neutraliser le goodwill et les incorporels, dont la valeur peut disparaître en cas de dépréciation", "Parce que c'est obligatoire en IFRS", "Pour augmenter les fonds propres", "Pour calculer l'impôt"], 0, "Très utilisé pour les banques (P/TBV) et les sociétés très acquisitives."],
[3, "Quel élément hors bilan s'apparente le plus à de la dette pour un investisseur ?", ["Une garantie donnée sur l'emprunt d'une filiale non consolidée", "Un brevet", "Une marque créée en interne", "Un carnet de commandes"], 0, "Si la filiale fait défaut, la société paie."]
] },

/* ---------------- M5 ---------------- */
{ id: "bfr", title: "Le BFR : l'argent qui dort dans l'exploitation", time: "45 min",
lesson: `
<h3>Pourquoi le BFR est central</h3>
<p>Une entreprise paie ses fournisseurs, stocke, puis est payée par ses clients. Le décalage doit être financé : c'est le BFR. Il consomme du cash quand l'activité croît, en libère quand elle baisse. Pour un investisseur, c'est un levier de création de valeur (le réduire libère du cash) et un piège (un vendeur peut l'avoir artificiellement réduit avant la cession).</p>

<h3>Les ratios en jours</h3>
<div class="tw"><table><thead><tr><th>Ratio</th><th>Formule</th><th>Verdier</th></tr></thead><tbody>
<tr><td>Délai clients (DSO)</td><td>Créances clients ÷ CA TTC × 365</td><td>10 ÷ 60 × 365 ≈ 61 jours</td></tr>
<tr><td>Rotation des stocks (DIO)</td><td>Stocks ÷ achats consommés × 365</td><td>8 ÷ 20 × 365 = 146 jours</td></tr>
<tr><td>Délai fournisseurs (DPO)</td><td>Dettes fournisseurs ÷ achats TTC (achats + charges externes) × 365</td><td>6 ÷ 33,6 × 365 ≈ 65 jours</td></tr>
<tr><td>BFR en jours de CA</td><td>BFR ÷ CA HT × 365</td><td>10 ÷ 50 × 365 = 73 jours</td></tr>
</tbody></table></div>
<p>Le <strong>cycle de conversion du cash</strong> = DSO + DIO − DPO ≈ 61 + 146 − 65 = 142 jours pour Verdier. Les stocks sont clairement le poste à travailler.</p>
<div class="warn"><span class="tag">Attention au TTC</span><p>Les créances et dettes figurent TTC au bilan, le CA et les achats HT au compte de résultat : pour des délais justes, on convertit le CA et les achats en TTC.</p></div>

<h3>Croissance et BFR</h3>
<p>Si le BFR représente 20 % du CA, chaque euro de CA supplémentaire immobilise 0,20 € de trésorerie. Une croissance forte d'une entreprise à BFR élevé peut l'asphyxier malgré des bénéfices : c'est l'effet ciseau classique des PME en croissance.</p>
<div class="ex"><span class="tag">Verdier</span><p>CA +10 % (5 M€) → BFR +1,0 M€ à financer. En N, le BFR est passé de 8,5 à 10,0 : 1,5 M€ de cash consommé pour 5 M€ de CA supplémentaires, soit 30 % : le BFR a crû plus vite que le CA. À surveiller.</p></div>

<h3>Les secteurs</h3>
<ul>
<li><strong>BFR négatif</strong> : grande distribution, restauration rapide, abonnements payés d'avance, voyagistes. Les clients paient avant les fournisseurs : la croissance génère du cash.</li>
<li><strong>BFR élevé</strong> : industrie, négoce, bâtiment, luxe (stocks), distribution B2B. La croissance coûte du cash.</li>
</ul>

<h3>Les leviers d'optimisation</h3>
<ul>
<li>Clients : facturation rapide, relances, escompte pour paiement anticipé, conditions générales, assurance-crédit. En France, la loi de modernisation de l'économie plafonne les délais de paiement interentreprises (60 jours date de facture ou 45 jours fin de mois).</li>
<li>Stocks : réduction des références, flux tendus, prévision des ventes.</li>
<li>Fournisseurs : négociation des délais dans la limite légale.</li>
<li>Financement : affacturage, Dailly, <strong>reverse factoring</strong> (affacturage inversé).</li>
</ul>
<div class="warn"><span class="tag">Dette déguisée</span><p>L'affacturage déconsolidant et le reverse factoring réduisent le BFR affiché, mais ressemblent économiquement à de la dette. Un investisseur les réintègre dans la dette nette ou dans un BFR « normatif ». Plusieurs faillites retentissantes ont été précédées d'un usage massif du reverse factoring non publié.</p></div>

<h3>Le BFR normatif en private equity</h3>
<p>Dans une cession, le prix est souvent fixé pour une entreprise « avec un niveau normal de BFR ». On calcule un <strong>BFR normatif</strong> (moyenne mensuelle sur 12 mois, ajustée de la saisonnalité) ; si le BFR à la date de cession est inférieur (le vendeur a tiré sur les fournisseurs et encaissé les clients), le prix est ajusté à la baisse. Un vendeur qui « habille » son BFR en fin d'année n'y gagne donc rien si l'acheteur est vigilant.</p>
`,
keys: [
"DSO, DIO, DPO : cycle de conversion du cash = DSO + DIO − DPO.",
"Croissance × BFR en % du CA = cash consommé.",
"Affacturage déconsolidant et reverse factoring = dette économique à réintégrer.",
"En cession : BFR normatif sur 12 mois et ajustement de prix."
],
ex: [
{ t: "Libérer du cash chez Verdier",
q: `<p>Le nouvel actionnaire de Verdier se fixe deux objectifs : ramener le délai clients de 61 à 45 jours et réduire les stocks de 146 à 110 jours d'achats consommés, à activité constante. Combien de trésorerie est libérée ?</p>`,
a: `<p>Clients : 60 × 45 / 365 ≈ 7,4 M€ (contre 10,0) → <strong>2,6 M€</strong> libérés.<br>Stocks : 20 × 110 / 365 ≈ 6,0 M€ (contre 8,0) → <strong>2,0 M€</strong> libérés.<br>Total ≈ <strong>4,6 M€</strong>, soit plus de 1,5 année de résultat net, sans augmenter le CA. C'est un levier classique des fonds de private equity.</p>` }
],
qcm: [
[1, "Un BFR qui augmente :", ["Consomme de la trésorerie", "Génère de la trésorerie", "Augmente le résultat net", "Réduit la dette"], 0, "Il faut le financer."],
[1, "Le DSO mesure :", ["Le délai moyen de paiement des clients", "Le délai de paiement des fournisseurs", "La durée de stockage", "La durée de la dette"], 0, "Days Sales Outstanding."],
[1, "Quel secteur a typiquement un BFR négatif ?", ["La grande distribution alimentaire", "L'industrie lourde", "Le bâtiment", "Le luxe"], 0, "Les clients paient comptant, les fournisseurs à 30-60 jours."],
[2, "Une entreprise dont le BFR vaut 25 % du CA fait +20 M€ de CA. Cash à financer ?", ["5 M€", "20 M€", "2,5 M€", "0"], 0, "20 × 25 %."],
[2, "Pourquoi convertir le CA en TTC pour calculer le DSO ?", ["Parce que les créances clients sont enregistrées TTC au bilan", "Parce que l'IS est inclus", "Ce n'est pas nécessaire", "Pour augmenter le délai"], 0, "Sinon, on surestime le délai."],
[2, "Le cycle de conversion du cash se calcule :", ["DSO + DIO − DPO", "DSO − DIO + DPO", "DPO − DSO", "DIO − DSO"], 0, "Plus il est court, moins l'exploitation immobilise de cash."],
[3, "Le reverse factoring (affacturage inversé) :", ["Allonge de fait le délai fournisseurs et s'apparente économiquement à de la dette", "Réduit l'EBITDA", "Est interdit en France", "N'a aucun effet sur le BFR"], 0, "Un investisseur le réintègre dans la dette nette."],
[3, "Un vendeur réduit fortement son BFR juste avant la date de cession. Protection de l'acquéreur ?", ["Un mécanisme d'ajustement de prix fondé sur un BFR normatif", "Aucune", "Une garantie fiscale", "Une clause de non-concurrence"], 0, "Le prix est ajusté si le BFR de clôture s'écarte du niveau normatif."],
[3, "Plafond légal des délais de paiement interentreprises en France (cas général) ?", ["60 jours à compter de la facture, ou 45 jours fin de mois", "90 jours", "30 jours", "Libre"], 0, "Loi de modernisation de l'économie (2008)."]
] },

/* ---------------- M6 ---------------- */
{ id: "cash", title: "Du résultat au cash : CAF, flux et free cash-flow", time: "1 h",
lesson: `
<h3>Le tableau des flux de trésorerie</h3>
<p>Il classe les flux en trois catégories :</p>
<ol>
<li><strong>Flux d'exploitation</strong> : résultat net + charges non décaissées (amortissements, provisions) − plus-values de cession − variation du BFR.</li>
<li><strong>Flux d'investissement</strong> : acquisitions d'immobilisations (capex), acquisitions de sociétés, cessions.</li>
<li><strong>Flux de financement</strong> : emprunts, remboursements, augmentations de capital, dividendes, rachats d'actions (et, en IFRS 16, remboursement des dettes de loyers).</li>
</ol>

<h3>La capacité d'autofinancement (CAF)</h3>
<p>Notion française : résultat net + dotations nettes aux amortissements et provisions − reprises − plus-values de cession. Verdier : 3,0 + 2,0 = <strong>5,0 M€</strong> (hors mouvements de provisions). La CAF n'intègre pas la variation du BFR : ce n'est pas encore du cash.</p>

<h3>Le free cash-flow : la mesure reine</h3>
<div class="note"><span class="tag">Free cash-flow opérationnel (FCFF, avant financement)</span><p>FCFF = EBITDA − impôt sur l'EBIT − capex − variation du BFR</p></div>
<div class="ex"><span class="tag">Verdier N</span><p>EBITDA 7,0 − impôt normatif sur l'EBIT (25 % × 5,0 = 1,25) − capex 2,5 − hausse du BFR 1,5 = <strong>FCFF = 1,75 M€</strong>.<br>
<strong>Taux de conversion</strong> FCFF / EBITDA = 25 % : faible, à cause de la hausse du BFR et d'un capex supérieur aux amortissements.</p></div>
<p>Le <strong>free cash-flow aux actionnaires (FCFE)</strong> retire en plus les intérêts après impôt et ajoute la variation nette de dette : Verdier, sans variation de dette : 1,75 − 0,8 × 75 % = <strong>1,15 M€</strong>. Or Verdier a versé 1,5 M€ de dividendes : elle a puisé dans sa trésorerie. Un dividende durablement supérieur au FCFE n'est pas soutenable.</p>

<h3>Capex de maintenance et capex de croissance</h3>
<p>Une partie des investissements maintient l'outil (souvent proche des amortissements), une autre finance la croissance (nouvelle usine, capacité). Pour valoriser une entreprise mature, on raisonne avec le capex de <strong>maintenance</strong> ; un FCF faible à cause d'un capex de croissance bien employé n'est pas un mauvais signe. Les directions ne publient pas toujours cette répartition : on l'estime (capex/amortissements, capex/CA historique).</p>

<h3>Les indicateurs à suivre</h3>
<ul>
<li><strong>Conversion</strong> : FCF / EBITDA (souvent 40 à 70 % pour une entreprise de qualité selon le secteur) et FCF / résultat net (proche de 100 % ou plus).</li>
<li><strong>Intensité capitalistique</strong> : capex / CA.</li>
<li><strong>FCF yield</strong> (rendement du free cash-flow) : FCFE / capitalisation boursière. Une entreprise cotée à 25 fois ses bénéfices mais avec un FCF yield de 6 % est moins chère qu'il n'y paraît, et inversement.</li>
</ul>
<div class="warn"><span class="tag">Pièges</span><ul><li>« EBITDA − capex » sans impôt ni BFR : flatteur.</li><li>FCF « avant éléments exceptionnels » qui reviennent chaque année.</li><li>En IFRS 16, les loyers ne sont plus dans les flux d'exploitation : le FCF publié est gonflé si l'on n'y retire pas les remboursements de dettes de loyers (module 8).</li><li>Rachat d'actions financé par la dette présenté comme du « retour à l'actionnaire ».</li></ul></div>
`,
keys: [
"FCFF = EBITDA − impôt sur EBIT − capex − ΔBFR ; FCFE = FCFF − intérêts après impôt + Δdette nette.",
"Un dividende durablement supérieur au FCFE n'est pas soutenable.",
"Distinguer capex de maintenance et de croissance.",
"En IFRS 16, retirer les remboursements de loyers pour un FCF comparable."
],
ex: [
{ t: "Comparer deux entreprises",
q: `<p>A : EBITDA 20, capex 4, ΔBFR +1, impôt normatif 3. B : EBITDA 20, capex 12, ΔBFR +5, impôt normatif 3. Calculez le FCFF et la conversion. Quelle question poser avant de conclure que A est meilleure ?</p>`,
a: `<p>A : 20 − 3 − 4 − 1 = <strong>12</strong> (60 %). B : 20 − 3 − 12 − 5 = <strong>0</strong> (0 %).<br>Question : quelle part du capex et du BFR de B finance la croissance ? Si B construit une usine qui doublera ses ventes avec un bon retour sur capital, son FCF futur peut dépasser celui de A. Si c'est du capex de maintenance (outil vieillissant) et des clients qui paient de plus en plus tard, B est nettement moins bonne.</p>` }
],
qcm: [
[1, "Le free cash-flow opérationnel (FCFF) se calcule :", ["EBITDA − impôt sur l'EBIT − capex − variation du BFR", "Résultat net + amortissements", "EBITDA − intérêts", "CA − charges"], 0, "C'est le cash disponible pour tous les financeurs."],
[1, "Les dividendes apparaissent dans les flux :", ["De financement", "D'exploitation", "D'investissement", "Ils n'apparaissent pas"], 0, "Comme les emprunts et les rachats d'actions."],
[1, "La CAF (capacité d'autofinancement) diffère du flux d'exploitation par :", ["La variation du BFR", "Les amortissements", "L'impôt", "Les dividendes"], 0, "Flux d'exploitation ≈ CAF − ΔBFR."],
[2, "Le FCFF de Verdier en N est de :", ["1,75 M€", "7,0 M€", "5,0 M€", "3,0 M€"], 0, "7,0 − 1,25 − 2,5 − 1,5."],
[2, "Pourquoi distinguer capex de maintenance et capex de croissance ?", ["Pour évaluer le FCF « normatif » d'une entreprise qui investit pour croître", "Pour calculer l'IS", "C'est une obligation comptable", "Pour réduire l'EBITDA"], 0, "Le capex de croissance prépare des flux futurs."],
[2, "Un FCF yield de 8 % signifie :", ["Que le free cash-flow aux actionnaires représente 8 % de la capitalisation", "Que le dividende est de 8 %", "Que la croissance est de 8 %", "Que la dette coûte 8 %"], 0, "Indicateur de valorisation complémentaire au PER."],
[3, "Verdier verse 1,5 M€ de dividendes pour un FCFE de 1,15 M€. Conséquence ?", ["La différence est financée par la trésorerie ou la dette ; pas soutenable dans la durée", "Rien", "Le BFR baisse", "L'EBITDA augmente"], 0, "Il faudra améliorer le FCF ou réduire le dividende."],
[3, "En IFRS 16, si l'on ne retraite rien, le FCF « EBITDA − capex − ΔBFR − impôt » est :", ["Surestimé, car les loyers sont sortis de l'EBITDA et des flux d'exploitation", "Sous-estimé", "Inchangé", "Négatif"], 0, "Il faut retirer les remboursements de dettes de loyers (et intérêts associés)."],
[3, "Un groupe annonce un FCF record grâce à la cession de créances clients sans recours en fin d'exercice. Lecture ?", ["Amélioration en partie artificielle, de nature financière : à retraiter", "Amélioration durable de l'exploitation", "Hausse de l'EBITDA", "Rien à signaler"], 0, "L'affacturage déconsolidant déplace le cash dans le temps."]
] },

/* ---------------- M7 ---------------- */
{ id: "solva", title: "Endettement, solvabilité et liquidité", time: "1 h",
lesson: `
<h3>Les ratios incontournables</h3>
<div class="tw"><table><thead><tr><th>Ratio</th><th>Formule</th><th>Verdier</th><th>Repères</th></tr></thead><tbody>
<tr><td>Levier</td><td>Dette nette ÷ EBITDA</td><td>8,0 ÷ 7,0 = 1,1x</td><td>&lt; 2x confortable ; 3-4x tendu pour une PME ; 4-6x en LBO</td></tr>
<tr><td>Gearing</td><td>Dette nette ÷ capitaux propres</td><td>8,0 ÷ 15,0 = 53 %</td><td>&lt; 100 % en général</td></tr>
<tr><td>Couverture des intérêts</td><td>EBIT ÷ charges financières</td><td>5,0 ÷ 0,8 = 6,3x</td><td>&gt; 3-4x confortable</td></tr>
<tr><td>Liquidité générale</td><td>Actif circulant ÷ passif à court terme</td><td>23,0 ÷ 11,0 = 2,1</td><td>&gt; 1</td></tr>
<tr><td>Capacité de remboursement</td><td>Dette financière ÷ CAF</td><td>12,0 ÷ 5,0 = 2,4 ans</td><td>&lt; 3-4 ans pour les banques</td></tr>
</tbody></table></div>

<h3>La dette nette « économique »</h3>
<p>Au-delà des emprunts, un investisseur ajoute les éléments <strong>assimilables à de la dette</strong> (« debt-like items ») :</p>
<ul>
<li>Dettes de loyers IFRS 16 (selon la convention retenue pour l'EBITDA).</li>
<li>Engagements de retraite non financés (nets d'impôt).</li>
<li>Affacturage déconsolidant, reverse factoring.</li>
<li>Compléments de prix sur acquisitions, dettes fiscales et sociales échues, dividendes votés non payés.</li>
<li>Provisions pour litiges certains, coûts de restructuration engagés.</li>
<li>Minoritaires et participations : traités dans le passage de la valeur d'entreprise aux fonds propres (module 10).</li>
</ul>

<h3>Les covenants bancaires</h3>
<p>Les contrats de prêt imposent des ratios à respecter (« covenants »), par exemple dette nette / EBITDA &lt; 3,0x et EBITDA / intérêts &gt; 4x, testés chaque semestre. Un bris de covenant permet aux prêteurs d'exiger un remboursement anticipé : l'entreprise négocie alors un « waiver » (renonciation), souvent payant. Lire la définition contractuelle de l'EBITDA et de la dette : elle diffère souvent des comptes publiés.</p>

<h3>Le mur de la dette et la liquidité</h3>
<ul>
<li><strong>Échéancier</strong> : une dette concentrée sur une année (« mur de refinancement ») est un risque majeur si les marchés se ferment ou si les taux montent.</li>
<li><strong>Liquidité disponible</strong> : trésorerie + lignes de crédit confirmées non tirées. On la compare aux besoins des 12 à 24 mois.</li>
<li><strong>Coût de la dette</strong> : part à taux variable et couverture. Une dette refinancée à 6 % au lieu de 2 % peut réduire de moitié le résultat net d'une entreprise endettée.</li>
</ul>

<h3>Effet de levier financier : arme à double tranchant</h3>
<p>La dette augmente la rentabilité des capitaux propres tant que la rentabilité économique dépasse le coût de la dette (module 9). Mais elle augmente aussi la volatilité du résultat et le risque de défaut : un levier de 5x et une baisse de 30 % de l'EBITDA portent le levier à plus de 7x.</p>

<h3>Les signaux de détresse</h3>
<ul>
<li>Levier en hausse sur plusieurs années malgré des résultats « en croissance ».</li>
<li>Recours croissant au court terme, découverts permanents.</li>
<li>Retards fournisseurs et dettes fiscales et sociales qui gonflent.</li>
<li>Waivers à répétition, refinancements à des taux nettement plus élevés, vente d'actifs stratégiques.</li>
<li>Score d'Altman (combinaison de ratios) ou notations qui se dégradent ; obligations qui cotent bien en dessous du pair.</li>
</ul>
`,
keys: [
"Levier dette nette/EBITDA, gearing, couverture des intérêts, liquidité : les quatre réflexes.",
"Dette nette économique : ajouter loyers, retraites, affacturage, compléments de prix…",
"Covenants : lire les définitions contractuelles ; un bris donne le pouvoir aux prêteurs.",
"Échéancier et liquidité disponible sur 12-24 mois."
],
ex: [
{ t: "Levier sous stress",
q: `<p>Une entreprise a une dette nette de 200 M€, un EBITDA de 50 M€, un covenant de levier à 4,5x et une couverture d'intérêts de 5x (EBITDA / intérêts, intérêts de 10 M€). L'EBITDA baisse de 25 % et la dette est refinancée à un taux qui fait passer les intérêts à 14 M€. Les covenants sont-ils respectés ?</p>`,
a: `<p>EBITDA : 37,5 M€. Levier : 200 / 37,5 = <strong>5,3x</strong> &gt; 4,5x : <strong>bris de covenant</strong>. Couverture : 37,5 / 14 = <strong>2,7x</strong>, très dégradée. L'entreprise doit négocier un waiver, céder des actifs ou lever des fonds propres. Pour un actionnaire, le risque de dilution ou de restructuration financière est élevé.</p>` }
],
qcm: [
[1, "Le ratio dette nette / EBITDA mesure :", ["Le nombre d'années d'EBITDA nécessaires pour rembourser la dette nette", "La rentabilité", "La liquidité à court terme", "La croissance"], 0, "C'est le ratio de levier le plus utilisé."],
[1, "Le gearing se calcule :", ["Dette nette ÷ capitaux propres", "EBITDA ÷ dette", "Dette ÷ actif total", "Capitaux propres ÷ CA"], 0, "Verdier : 53 %."],
[1, "Un covenant bancaire est :", ["Un engagement contractuel de respecter certains ratios financiers", "Une garantie hypothécaire", "Un type d'action", "Une taxe"], 0, "Testé périodiquement par les prêteurs."],
[2, "La couverture des intérêts de Verdier (EBIT / charges financières) est d'environ :", ["6,3x", "1,1x", "2,1x", "14x"], 0, "5,0 / 0,8."],
[2, "Lequel n'est PAS en général un élément assimilable à de la dette ?", ["Les dettes fournisseurs normales du cycle d'exploitation", "Les engagements de retraite non financés", "Le reverse factoring", "Un complément de prix dû sur une acquisition"], 0, "Les dettes fournisseurs sont dans le BFR."],
[2, "Un « mur de refinancement » désigne :", ["Une forte concentration d'échéances de dette sur une même période", "Un plafond légal d'endettement", "Une clause de remboursement anticipé", "Un taux d'intérêt maximum"], 0, "Risque majeur si les marchés de crédit se ferment."],
[3, "Un EBITDA de 40 et une dette nette de 160 (levier 4x). L'EBITDA baisse de 30 %. Nouveau levier ?", ["≈ 5,7x", "4x", "2,8x", "5,2x"], 0, "160 / 28 ≈ 5,7x."],
[3, "Pourquoi lire la définition contractuelle de l'EBITDA dans un contrat de crédit ?", ["Parce qu'elle diffère souvent de l'EBITDA publié (ajustements, synergies, IFRS 16)", "Parce qu'elle est fixée par la loi", "Parce qu'elle est toujours plus faible", "Ce n'est pas utile"], 0, "Des définitions généreuses masquent un levier réel plus élevé."],
[3, "Quel signal est le plus inquiétant pour un actionnaire minoritaire ?", ["Waivers répétés et refinancement à taux beaucoup plus élevé", "Une hausse du dividende", "Une croissance organique de 5 %", "Une baisse du capex de croissance après une usine livrée"], 0, "Prélude fréquent à une restructuration financière diluante."]
] }

  ]
});
