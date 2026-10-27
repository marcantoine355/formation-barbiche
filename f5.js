/* Formation 5 — Investissement immobilier avancé */
(window.FB = window.FB || {formations: []}).formations.push({
  id: "immo", num: 5, short: "Investissement immo", title: "Investissement immobilier avancé",
  kicker: "Investisseurs · rentabilité · réglementation", hours: "≈ 9 h",
  blurb: "Rentabilité et financement, choix du régime fiscal, optimisations, DPE et règles locatives, sécurité incendie, urbanisme, structuration et due diligence.",
  intro: "Pour l'investisseur qui a déjà un ou deux biens et veut passer à l'étape suivante. On raisonne en rentabilité nette après impôt et en risques réglementaires : DPE, sécurité, urbanisme, encadrement des loyers. Données à jour d'octobre 2026, y compris le statut du bailleur privé et le projet de loi Relance logement.",
  modules: [

{ id: "renta", title: "Rentabilité, cash-flow et financement", time: "1 h 10",
lesson: `
<h3>Trois rendements, un seul qui compte</h3>
<div class="tw"><table><thead><tr><th>Indicateur</th><th>Formule</th><th>Usage</th></tr></thead><tbody>
<tr><td>Rendement brut</td><td>Loyers annuels ÷ prix d'achat</td><td>Annonces, première comparaison ; trompeur</td></tr>
<tr><td>Rendement net</td><td>(Loyers − charges non récupérables − taxe foncière − assurances − gestion − vacance) ÷ coût total (prix + frais de notaire + travaux + frais bancaires)</td><td>Comparer deux biens</td></tr>
<tr><td>Rendement net-net</td><td>Rendement net après impôt sur le revenu et prélèvements sociaux</td><td>Décision d'investissement</td></tr>
</tbody></table></div>
<p>Repères : frais de notaire d'environ <strong>7,5 à 8 %</strong> dans l'ancien (droits de mutation relevés à 5 % par une majorité de départements depuis 2025, sauf primo-accédants) et 2 à 3 % dans le neuf. Vacance locative : prévoir au moins un mois par an en meublé, un demi-mois en nu dans une zone tendue.</p>

<h3>Le cash-flow</h3>
<p>Cash-flow mensuel = loyer − mensualité de crédit (assurance comprise) − charges − taxe foncière/12 − impôts liés au bien/12. Un cash-flow négatif n'est pas forcément mauvais : c'est un effort d'épargne qui achète un patrimoine. Mais il doit être choisi, pas subi.</p>

<h3>L'effet de levier</h3>
<p>Emprunter permet d'acheter plus que ses fonds propres. Si le rendement net du bien dépasse le coût du crédit (taux + assurance), le surplus revient à l'investisseur, multiplié par le levier. En sens inverse, il amplifie les pertes. Ce qui compte : la <strong>rentabilité des fonds propres</strong> et le <strong>TRI</strong> (taux de rendement interne) qui intègre les flux annuels et le prix de revente.</p>
<div class="ex"><span class="tag">Exemple</span><p>Bien de 200 000 € (frais compris), rendement net 5 % = 10 000 €/an.<br>Comptant : rentabilité des fonds propres 5 %.<br>Avec 40 000 € d'apport et 160 000 € empruntés à 3,5 % (intérêts ≈ 5 600 € la première année) : 4 400 € de résultat avant impôt pour 40 000 € investis, soit 11 %, hors remboursement du capital.</p></div>

<h3>Ce que les banques acceptent (règles du HCSF)</h3>
<ul>
<li><strong>Taux d'effort</strong> maximal de 35 % des revenus, assurance emprunteur comprise.</li>
<li><strong>Durée</strong> maximale de 25 ans (27 ans en cas d'achat dans le neuf ou avec travaux importants et différé).</li>
<li>Une marge de flexibilité de 20 % de la production des banques, réservée surtout aux résidences principales : l'investisseur locatif en profite rarement.</li>
<li>Les loyers sont pris en compte à <strong>70 %</strong> en général (parfois en différentiel de loyer pour les investisseurs avec un patrimoine important).</li>
</ul>
<p>Leviers : présenter un bilan patrimonial complet, montrer un historique de gestion, apporter un nantissement (assurance-vie) plutôt qu'une hypothèque, négocier l'assurance emprunteur (délégation possible à tout moment depuis la loi Lemoine de 2022).</p>

<h3>Le prix de revente : la variable oubliée</h3>
<p>Une rentabilité de 7 % dans une ville qui perd des habitants peut finir en perte si le prix chute de 25 %. Analysez : démographie, emploi, transports, offre neuve, évolution des prix sur 10 ans, délai de vente moyen, et l'étiquette DPE (la décote des F et G se creuse).</p>
`,
keys: [
"Raisonner en rendement net-net et en TRI, pas en rendement brut.",
"HCSF : 35 % de taux d'effort, 25 ans maximum ; loyers retenus à 70 % en général.",
"Effet de levier : favorable si rendement net > coût du crédit ; il amplifie aussi les pertes.",
"Le prix de revente et l'étiquette DPE pèsent autant que le loyer."
],
ex: [
{ t: "Analyse d'un T2",
q: `<p>T2 à 150 000 €, frais de notaire 11 500 €, travaux 8 500 €. Loyer 750 € hors charges. Charges non récupérables 600 €/an, taxe foncière 900 €, PNO 150 €, gestion 7 % des loyers, vacance 1 mois tous les 2 ans.</p><ol><li>Rendement brut (sur le prix) ?</li><li>Rendement net (sur le coût total) ?</li><li>Crédit de 170 000 € sur 20 ans à 3,4 % (mensualité ≈ 977 € assurance comprise) : cash-flow mensuel avant impôt ?</li></ol>`,
a: `<ol><li>9 000 / 150 000 = <strong>6 %</strong>.</li><li>Loyers encaissés : 9 000 − 375 (vacance) = 8 625 €. Charges : 600 + 900 + 150 + 604 (7 % de 8 625) = 2 254 €. Net : 6 371 € / 170 000 € = <strong>3,75 %</strong>.</li><li>(8 625 − 2 254) / 12 − 977 ≈ 531 − 977 = <strong>− 446 € par mois</strong>. Effort d'épargne important : l'opération n'a de sens que si le prix de revente et la fiscalité (LMNP réel par exemple) le justifient.</li></ol>` }
],
qcm: [
[1, "Le rendement brut se calcule :", ["Loyers annuels ÷ prix d'achat", "Loyers après charges ÷ prix", "Cash-flow ÷ apport", "Loyers après impôt ÷ coût total"], 0, "Il ignore charges, frais et fiscalité."],
[1, "Le taux d'effort maximal recommandé par le HCSF est de :", ["35 %, assurance comprise", "33 % hors assurance", "40 %", "50 %"], 0, "Règle devenue juridiquement contraignante pour les banques en 2022."],
[1, "La durée maximale d'un crédit immobilier selon le HCSF est de :", ["25 ans (27 ans avec différé dans certains cas)", "30 ans", "20 ans", "35 ans"], 0, "Le différé concerne le neuf et les travaux importants."],
[2, "Pourquoi un cash-flow négatif n'est-il pas toujours une mauvaise opération ?", ["C'est un effort d'épargne qui finance un patrimoine, si le TRI global reste bon", "Parce qu'il est déductible du revenu global", "Parce que la banque le rembourse", "Ce n'est jamais acceptable"], 0, "Il doit être soutenable et choisi."],
[2, "L'effet de levier est favorable quand :", ["Le rendement net du bien dépasse le coût total du crédit", "Le taux de crédit est supérieur au rendement", "L'apport est nul", "Le crédit est in fine"], 0, "Sinon, le levier détruit de la rentabilité."],
[2, "Les banques retiennent généralement les loyers futurs à hauteur de :", ["70 %", "100 %", "50 %", "30 %"], 0, "Pour tenir compte de la vacance et des charges."],
[3, "Depuis la loi Lemoine, l'assurance emprunteur peut être changée :", ["À tout moment, sans frais, à garanties équivalentes", "Uniquement à la date anniversaire", "Jamais après la signature", "Seulement la première année"], 0, "Un levier de baisse du coût du crédit."],
[3, "Quel indicateur intègre les flux annuels et le prix de revente pour juger une opération ?", ["Le TRI", "Le rendement brut", "Le taux d'effort", "Le loyer au m²"], 0, "Taux qui annule la valeur actuelle nette des flux."],
[3, "Bien de 200 000 € à 5 % net, financé à 160 000 € à 3,5 % d'intérêts : rentabilité des 40 000 € de fonds propres la première année (avant impôt, hors capital remboursé) ?", ["11 %", "5 %", "3,5 %", "25 %"], 0, "10 000 − 5 600 = 4 400 € / 40 000 €."]
] },

{ id: "regimes", title: "Choisir le bon régime fiscal", time: "1 h 15",
lesson: `
<h3>Le tableau de décision</h3>
<div class="tw"><table><thead><tr><th>Régime</th><th>Fiscalité des loyers</th><th>Points forts</th><th>Points faibles</th></tr></thead><tbody>
<tr><td>Nu micro-foncier</td><td>Abattement 30 %, barème + 17,2 %</td><td>Simplicité</td><td>Lourd pour une TMI élevée, plafond 15 000 €</td></tr>
<tr><td>Nu réel</td><td>Charges réelles, déficit foncier</td><td>Travaux déductibles, déficit sur revenu global (10 700 / 21 400 €)</td><td>Pas d'amortissement</td></tr>
<tr><td>Nu + statut Jeanbrun</td><td>Réel + amortissement 3 à 5,5 % sur 80 % du prix</td><td>Location nue enfin amortissable, hors plafond des niches</td><td>Plafonds de loyers et ressources, 9 ans, plafond 8 000 à 12 000 €</td></tr>
<tr><td>LMNP micro-BIC</td><td>Abattement 50 %</td><td>Simplicité, pas de réintégration d'amortissements</td><td>Moins bon que le réel si charges élevées</td></tr>
<tr><td>LMNP réel</td><td>Charges + amortissements</td><td>Loyers peu ou pas imposés pendant 10 à 15 ans</td><td>Amortissements réintégrés dans la plus-value à la revente ; comptabilité</td></tr>
<tr><td>LMP</td><td>BIC professionnels, cotisations SSI</td><td>Déficit sur revenu global, plus-values professionnelles, hors IFI sous conditions</td><td>Cotisations sociales élevées</td></tr>
<tr><td>SCI à l'IR</td><td>Revenus fonciers chez les associés</td><td>Transmission, gestion à plusieurs</td><td>Même fiscalité que le nu</td></tr>
<tr><td>SCI à l'IS</td><td>IS 15 % / 25 %, amortissement</td><td>Capitalisation, réinvestissement</td><td>Plus-value sur valeur nette comptable, dividendes au PFU</td></tr>
</tbody></table></div>

<h3>Les questions qui tranchent</h3>
<ol>
<li><strong>Quelle est la TMI du foyer ?</strong> À 0 ou 11 %, le nu au micro peut suffire. À 30 % et plus, il faut neutraliser les loyers : réel, déficit, amortissement.</li>
<li><strong>Combien de temps garder le bien ?</strong> Moins de 10 ans : prudence avec le LMNP réel (réintégration) et la SCI à l'IS (sortie coûteuse). Plus de 22-30 ans ou transmission : LMNP réel et SCI IR deviennent très efficaces.</li>
<li><strong>Faut-il distribuer les revenus ?</strong> Si non, la SCI à l'IS capitalise à 15-25 % au lieu de 47 à 58 %.</li>
<li><strong>Y a-t-il de gros travaux ?</strong> Le déficit foncier est imbattable la première année en nu.</li>
<li><strong>Quel locataire, quelle gestion ?</strong> Le meublé exige plus de gestion et de mobilier, et une rotation plus forte.</li>
</ol>

<h3>Combiner intelligemment</h3>
<ul>
<li><strong>Travaux d'abord en nu, puis passage en meublé</strong> : les travaux créent un déficit foncier la première année ; après le délai de location nue de 3 ans, le bien peut passer en LMNP réel (les travaux déjà déduits ne seront pas amortis une seconde fois).</li>
<li><strong>Micro-BIC pour un petit loyer, réel pour un gros</strong> : au-delà de charges + amortissements supérieurs à 50 % des loyers, le réel gagne.</li>
<li>Un foyer peut avoir des biens nus (revenus fonciers) et des biens meublés (BIC) en même temps ; les régimes micro s'apprécient catégorie par catégorie.</li>
</ul>
<div class="warn"><span class="tag">Prélèvements sociaux</span><p>Les revenus fonciers sont restés à 17,2 % de prélèvements sociaux en 2026. Les revenus du patrimoine non exclus de la hausse de CSG supportent 18,6 % : vérifiez sur l'avis d'imposition le taux appliqué à vos BIC meublés.</p></div>
`,
keys: [
"TMI, durée de détention, besoin de revenus et travaux décident du régime.",
"LMNP réel : imbattable en détention longue ou transmission, moins en revente rapide.",
"SCI IS : capitaliser sans distribuer ; sortie coûteuse.",
"Jeanbrun : amortir du nu, avec contreparties sociales sur 9 ans."
],
ex: [
{ t: "Trois profils, trois régimes",
q: `<p>Proposez un régime à chacun : (1) Mme A., TMI 11 %, achète comptant un studio à 80 000 € loué 450 €/mois, pas de travaux. (2) M. B., TMI 41 %, achète une maison à rénover 180 000 € + 70 000 € de travaux, location nue longue durée. (3) M. et Mme C., TMI 41 %, achètent un immeuble de 4 lots à 600 000 € qu'ils veulent garder 25 ans et léguer, sans besoin de revenus.</p>`,
a: `<ol><li>Micro-foncier en nu (5 400 € × 70 % × 28,2 %) ou micro-BIC en meublé : simplicité, faible TMI.</li><li>Nu au réel avec déficit foncier (jusqu'à 21 400 € par an si la rénovation sort le bien de E/F/G vers A-D, jusqu'à fin 2027), puis éventuellement meublé. Le statut Jeanbrun est possible dans l'ancien avec au moins 30 % de travaux, mais il n'est pas cumulable avec le déficit foncier classique sur le même bien.</li><li>Soit LMNP réel en direct (loyers neutralisés, plus-value purgée au décès), soit SCI à l'IR pour transmettre progressivement les parts. La SCI à l'IS est envisageable s'ils capitalisent, mais la sortie en cas de vente est lourde et la transmission ne purge pas les plus-values latentes de la société.</li></ol>` }
],
qcm: [
[1, "Quel régime permet d'amortir le bien en location meublée ?", ["LMNP au réel", "Micro-BIC", "Micro-foncier", "SCI à l'IR"], 0, "Le micro-BIC applique un abattement forfaitaire."],
[1, "Un investisseur à 41 % de TMI garde ses loyers nus au micro-foncier. Problème ?", ["Ses loyers sont taxés à 58,2 % sur 70 % de leur montant", "Aucun", "Le micro est interdit à 41 %", "Il ne paie pas de PS"], 0, "Le réel ou un autre régime réduirait fortement la note."],
[2, "Quand le LMNP réel est-il le moins intéressant depuis la réforme de 2025 ?", ["En cas de revente rapide avec beaucoup d'amortissements déduits", "En cas de transmission au décès", "En détention de 30 ans", "Pour un loyer élevé"], 0, "Les amortissements gonflent la plus-value imposable."],
[2, "Une SCI à l'IS convient le mieux à un investisseur qui :", ["Capitalise sans distribuer et réinvestit", "Veut vendre dans 25 ans et percevoir le prix", "A une TMI de 0 %", "Veut louer en meublé de tourisme"], 0, "Le taux d'IS de 15 % sur les premiers 42 500 € est attractif."],
[2, "Peut-on cumuler, sur un même bien, le statut Jeanbrun et le déficit foncier classique ?", ["Non, le statut n'est pas cumulable avec le déficit foncier « classique » pour ce bien", "Oui, sans limite", "Oui, jusqu'à 21 400 €", "Seulement dans le neuf"], 0, "Le statut prévoit son propre régime de déficit, imputable dans la limite de 10 700 €."],
[3, "Après une première année de gros travaux en nu au réel, un investisseur veut passer en meublé. Quel risque surveiller ?", ["La reprise du déficit foncier imputé si la location nue cesse avant le 31 décembre de la 3e année", "La perte du micro-BIC", "La TVA sur les travaux", "Aucun"], 0, "D'où la stratégie : 3 ans en nu, puis meublé."],
[3, "Un LMP bénéficie notamment :", ["De l'imputation de son déficit sur le revenu global et d'un régime de plus-values professionnelles", "D'une exonération de cotisations sociales", "Des prélèvements sociaux à 17,2 %", "D'une réduction d'impôt de 20 %"], 0, "En contrepartie, cotisations SSI sur le bénéfice."],
[3, "Pour neutraliser fiscalement 15 000 € de loyers meublés annuels pendant 12 ans puis transmettre le bien à ses enfants, le régime le plus efficace est généralement :", ["LMNP au réel, avec purge de la plus-value au décès", "Micro-BIC", "Nu au micro-foncier", "SCI à l'IS"], 0, "La réintégration des amortissements ne joue qu'en cas de vente."]
] },

{ id: "optim", title: "Les optimisations qui fonctionnent", time: "1 h 10",
lesson: `
<h3>1. L'ancien à rénover en nu : le déficit foncier</h3>
<p>Acheter un bien décoté (souvent mal classé au DPE) et réaliser des travaux d'amélioration : les travaux créent un déficit imputable sur le revenu global (10 700 €, ou 21 400 € pour une rénovation énergétique qui fait passer de E, F ou G à A-D, payée jusqu'au 31 décembre 2027), le reste se reporte 10 ans sur les revenus fonciers. Double gain : économie d'impôt et revalorisation du bien.</p>

<h3>2. Acheter la nue-propriété</h3>
<p>L'investisseur achète la nue-propriété d'un logement neuf (souvent 60 à 65 % du prix) pour 15 à 20 ans ; un bailleur social ou institutionnel détient l'usufruit et perçoit les loyers (usufruit locatif social, « ULS »). Avantages : décote immédiate, aucun loyer donc aucun impôt, bien <strong>hors IFI</strong> pour le nu-propriétaire, intérêts d'emprunt déductibles d'autres revenus fonciers. À l'extinction, pleine propriété récupérée sans fiscalité. Idéal pour préparer la retraite d'un contribuable à TMI élevée.</p>

<h3>3. SCPI en démembrement ou à crédit</h3>
<p>Nue-propriété de SCPI sur 5 à 10 ans (décote de 20 à 40 %), ou SCPI à crédit pour déduire les intérêts des revenus fonciers. Diversification sans gestion, mais frais d'entrée de 8 à 12 % et liquidité limitée.</p>

<h3>4. Colocation et location à la chambre</h3>
<p>Un grand appartement loué en colocation meublée rapporte souvent 20 à 40 % de plus qu'une location classique. Points de vigilance : bail unique ou baux individuels, décence chambre par chambre, charges forfaitaires, rotation. Au-delà de quelques chambres, risque de requalification en activité d'hébergement (et règles de sécurité incendie plus strictes).</p>

<h3>5. Division et changement de destination</h3>
<p>Diviser une grande maison en plusieurs logements, transformer un local commercial ou des bureaux en logement : la création de valeur se fait à l'achat et en urbanisme (module 6). Prévoir le permis ou la déclaration préalable, l'accord de la copropriété, les normes (surface, lumière, ventilation) et parfois un « permis de diviser » exigé par la commune.</p>

<h3>6. Les dispositifs de niche (à connaître de nom)</h3>
<ul>
<li><strong>Malraux</strong> : réduction de 22 à 30 % des travaux de restauration dans les sites patrimoniaux, hors plafond des niches.</li>
<li><strong>Monuments historiques</strong> : travaux déductibles du revenu global sans plafond, conservation 15 ans.</li>
<li><strong>Denormandie</strong> : réduction d'impôt pour l'ancien rénové dans les villes du programme « Action cœur de ville » (vérifier sa date de fin).</li>
<li><strong>Statut Jeanbrun</strong> : amortissement en location nue intermédiaire, sociale ou très sociale (acquisitions jusqu'au 31 décembre 2028).</li>
</ul>

<h3>7. Optimiser la sortie</h3>
<ul>
<li>Attendre les seuils de 22 et 30 ans pour les plus-values des particuliers.</li>
<li>Donner avant de vendre : la donation purge la plus-value latente (à condition d'être sincère).</li>
<li>Conserver le LMNP jusqu'au décès : purge de la plus-value, amortissements jamais réintégrés.</li>
<li>Arbitrer d'une SCI IS vers une holding plutôt que distribuer.</li>
</ul>
<div class="warn"><span class="tag">Règle d'or</span><p>La fiscalité améliore une bonne opération, elle ne sauve jamais une mauvaise. Un bien mal situé acheté pour une réduction d'impôt reste un bien mal situé.</p></div>
`,
keys: [
"Ancien à rénover + déficit foncier : 21 400 € sur le revenu global pour la rénovation énergétique jusqu'à fin 2027.",
"Nue-propriété (ULS) : décote 35-40 %, pas d'impôt sur les loyers, hors IFI.",
"Colocation : +20 à 40 % de loyers, plus de gestion et de contraintes.",
"Sortie : 22/30 ans, donation avant cession, LMNP conservé jusqu'au décès."
],
ex: [
{ t: "Préparer sa retraite à 41 % de TMI",
q: `<p>M. D., 50 ans, TMI 41 %, IFI de 4 000 €/an, veut un complément de revenus à 65 ans sans payer plus d'impôt d'ici là. Il dispose de 100 000 € et d'une capacité d'emprunt de 200 000 €. Proposez une stratégie.</p>`,
a: `<p>Acheter en <strong>nue-propriété</strong> (ULS de 15 ans) un ou deux logements neufs bien placés pour ~280 000 € de nue-propriété (pleine propriété ≈ 450 000 €), financés par 80 000 € d'apport et 200 000 € de crédit. Pendant 15 ans : aucun loyer, donc aucun impôt ; les intérêts d'emprunt s'imputent sur ses autres revenus fonciers s'il en a ; les biens sont hors IFI (et la dette n'est pas déductible de l'IFI). À 65 ans, il récupère la pleine propriété et peut louer (idéalement en meublé au réel pour neutraliser les loyers) ou revendre. Garder 20 000 € de réserve de précaution.</p>` }
],
qcm: [
[1, "L'achat en nue-propriété d'un logement avec usufruit locatif social permet :", ["D'acheter avec une décote, sans loyers à déclarer, hors IFI", "De percevoir des loyers défiscalisés", "Une réduction d'impôt de 30 %", "Un amortissement en LMNP"], 0, "L'usufruitier (bailleur social) perçoit les loyers."],
[1, "La colocation meublée rapporte en général :", ["Plus qu'une location classique, avec plus de gestion", "Moins qu'une location classique", "La même chose", "Elle est interdite en zone tendue"], 0, "Souvent 20 à 40 % de loyers en plus."],
[2, "Pourquoi l'achat d'un bien F à rénover peut-il être doublement gagnant ?", ["Décote à l'achat + déficit foncier sur les travaux, puis revalorisation après travaux", "Parce que les F sont exonérés d'impôts", "Parce que le loyer est libre", "Parce que les F sont hors IFI"], 0, "Le déficit peut atteindre 21 400 € sur le revenu global jusqu'à fin 2027 si le bien sort de E/F/G vers A-D."],
[2, "La donation d'un bien avant sa vente permet :", ["De purger la plus-value latente, si la donation est réelle et préalable", "D'éviter les droits de donation", "D'éviter les frais de notaire", "De récupérer le prix de vente"], 0, "Si le donateur récupère le prix, l'abus de droit est caractérisé."],
[2, "Le dispositif Malraux prend la forme :", ["D'une réduction d'impôt sur les travaux de restauration, hors plafond des niches", "D'une déduction illimitée", "D'un amortissement", "D'un crédit d'impôt"], 0, "Taux de 22 % ou 30 % selon la zone."],
[3, "Un nu-propriétaire de logements en ULS a emprunté pour les acheter. Ses intérêts :", ["Sont déductibles de ses autres revenus fonciers", "Sont déductibles de son revenu global sans limite", "Ne sont pas déductibles", "Ouvrent une réduction d'impôt"], 0, "Règle spécifique aux nus-propriétaires de logements en usufruit locatif social."],
[3, "Un investisseur transforme un local commercial en logement. Formalité d'urbanisme ?", ["Changement de destination : déclaration préalable, ou permis de construire si la structure ou la façade sont modifiées", "Aucune", "Simple déclaration au syndic", "Autorisation du préfet"], 0, "Et l'accord de la copropriété si le règlement le prévoit."],
[3, "Quelle phrase résume le mieux la place de la fiscalité dans un investissement immobilier ?", ["Elle améliore une bonne opération mais ne sauve pas une mauvaise", "Elle est le premier critère", "Elle est secondaire et peut être ignorée", "Elle garantit la rentabilité"], 0, "L'emplacement et le prix d'achat restent déterminants."]
] },

{ id: "regles", title: "DPE et réglementation locative en 2026", time: "1 h 15",
lesson: `
<h3>Le calendrier DPE à intégrer dans tout business plan</h3>
<div class="tw"><table><thead><tr><th>Date</th><th>Mesure</th></tr></thead><tbody>
<tr><td>24 août 2022</td><td>Gel des loyers des logements F et G (pas d'indexation, pas de hausse à la relocation)</td></tr>
<tr><td>1er janvier 2025</td><td>Location interdite des logements G (nouveaux baux, renouvellements, reconductions)</td></tr>
<tr><td>1er janvier 2026</td><td>Coefficient de l'électricité ramené à 1,9 : de nombreux logements électriques gagnent une classe</td></tr>
<tr><td>1er janvier 2028</td><td>Location interdite des logements F</td></tr>
<tr><td>1er janvier 2034</td><td>Location interdite des logements E</td></tr>
</tbody></table></div>
<div class="warn"><span class="tag">Projet de loi Relance logement</span><p>Adopté par le Sénat le 8 juillet 2026, adopté en commission à l'Assemblée le 22 septembre, attendu en séance mi-novembre 2026. Il permettrait de relouer les F et G contre un engagement contractuel de travaux (délais de 3 ans pour une maison et 5 ans en copropriété dans le texte initial) et ajusterait le statut du bailleur privé. Rien n'est applicable tant que la loi n'est pas promulguée : un investisseur ne doit pas fonder un achat sur ce texte.</p></div>

<h3>Décence et obligations du bailleur</h3>
<ul>
<li>Surface d'au moins 9 m² et 2,20 m de hauteur, ou 20 m³ ; équipements, sécurité, absence de risques sanitaires ; performance énergétique minimale (plus de G).</li>
<li>Dossier de diagnostic annexé au bail ; assurance propriétaire non occupant obligatoire en copropriété.</li>
<li>Dépôt de garantie : 1 mois (nu), 2 mois (meublé). Honoraires d'agence à la charge du locataire plafonnés.</li>
</ul>

<h3>Zones tendues et encadrement des loyers</h3>
<ul>
<li><strong>Zone tendue</strong> : préavis du locataire réduit à 1 mois ; à la relocation, le loyer ne peut pas dépasser le précédent (hors révision IRL), sauf travaux importants ou sous-évaluation manifeste.</li>
<li><strong>Encadrement des loyers</strong> (loyer de référence majoré à ne pas dépasser, complément de loyer exceptionnel) appliqué à titre expérimental dans plusieurs villes et intercommunalités (Paris, Lille, Lyon et Villeurbanne, Montpellier, Bordeaux, Plaine Commune, Est Ensemble, Pays basque, Grenoble…). L'expérimentation prend fin le <strong>23 novembre 2026</strong> sauf prolongation législative, en discussion à l'automne 2026 : vérifiez son sort avant de fixer un loyer.</li>
<li><strong>Permis de louer</strong> : certaines communes imposent une déclaration ou une autorisation préalable de mise en location dans des quartiers définis ; louer sans autorisation expose à une amende jusqu'à 15 000 €.</li>
</ul>

<h3>Location courte durée : la loi Le Meur</h3>
<ul>
<li>Enregistrement de tous les meublés de tourisme via un téléservice national (au plus tard le 20 mai 2026).</li>
<li>Résidence principale louée 120 jours par an au maximum, plafond que les communes peuvent abaisser à 90 jours.</li>
<li>Changement d'usage et compensation dans les grandes villes (Paris, communes de plus de 200 000 habitants, communes ayant délibéré).</li>
<li>DPE : F minimum pour les nouveaux meublés soumis à changement d'usage, E à partir de 2028, puis A à D pour tous en 2034.</li>
<li>Fiscalité : micro-BIC à 30 % jusqu'à 15 000 € pour les non classés, 50 % jusqu'à 77 700 € pour les classés.</li>
<li>Les règlements de copropriété peuvent interdire la location touristique (vote facilité).</li>
</ul>

<h3>En copropriété</h3>
<ul>
<li><strong>Plan pluriannuel de travaux</strong> obligatoire pour les copropriétés de plus de 15 ans et <strong>fonds de travaux</strong> (au moins 2,5 % du montant des travaux du plan, et au moins 5 % du budget prévisionnel).</li>
<li><strong>DPE collectif</strong> obligatoire pour toutes les copropriétés depuis le 1er janvier 2026.</li>
<li>Lire les trois derniers procès-verbaux d'assemblée générale avant d'acheter : travaux votés, impayés, procédures.</li>
</ul>
`,
keys: [
"G interdit à la location depuis 2025, F en 2028, E en 2034 ; gel des loyers F et G.",
"Projet Relance logement : pas applicable avant promulgation ; ne pas bâtir un achat dessus.",
"Encadrement des loyers : fin de l'expérimentation le 23/11/2026 sauf prolongation.",
"Loi Le Meur : enregistrement national, 90-120 jours, DPE minimal, abattements réduits."
],
ex: [
{ t: "Acheter un F en 2026 ?",
q: `<p>Un investisseur repère un T3 classé F (chauffage gaz individuel, DPE de 2024) à Lyon, 15 % sous le prix du marché, loué 900 € depuis 2021 à un locataire en place. Listez les points à analyser et les risques.</p>`,
a: `<ul><li>Le bien est au gaz : la réforme du coefficient de l'électricité ne l'aide pas.</li><li>Loyer gelé (pas d'indexation) ; location interdite au 1er janvier 2028 pour un nouveau bail ou une reconduction : le bail en cours (renouvelé en 2024) arrive à échéance en 2027 puis devrait être reconduit en 2027… vérifier les dates précises.</li><li>Encadrement des loyers à Lyon : vérifier le loyer de référence et le sort de l'expérimentation après le 23/11/2026.</li><li>Coût des travaux pour atteindre au moins E (idéalement D), faisabilité en copropriété (votes en AG), audit ou simulation DPE.</li><li>Décote de 15 % suffisante ? Comparer au coût des travaux + perte de loyer pendant les travaux.</li><li>Projet de loi Relance logement : éventuel assouplissement, mais à ne pas intégrer comme hypothèse.</li></ul>` }
],
qcm: [
[1, "Depuis quand les logements classés G ne peuvent-ils plus être mis en location (nouveau bail ou reconduction) ?", ["1er janvier 2025", "1er janvier 2023", "1er janvier 2028", "Ils peuvent toujours l'être"], 0, "F en 2028, E en 2034."],
[1, "Pour un logement F ou G loué, depuis août 2022 :", ["Le loyer est gelé", "Le loyer doit baisser", "Le bail est résilié", "Le locataire paie moins de charges"], 0, "Pas d'indexation IRL ni de hausse à la relocation."],
[1, "En zone tendue, le préavis d'un locataire en location nue est de :", ["1 mois", "3 mois", "2 mois", "15 jours"], 0, "Le bailleur doit, lui, respecter 6 mois."],
[2, "L'expérimentation de l'encadrement des loyers prend fin, sauf prolongation :", ["Le 23 novembre 2026", "Le 31 décembre 2028", "Le 1er janvier 2026", "Elle est permanente"], 0, "Une prolongation de deux ans était envisagée à l'automne 2026."],
[2, "Avec la loi Le Meur, le nombre maximal de jours de location touristique d'une résidence principale peut être abaissé par la commune à :", ["90 jours", "60 jours", "30 jours", "120 jours"], 0, "Le plafond légal reste de 120 jours."],
[2, "Le projet de loi Relance logement, en octobre 2026 :", ["N'est pas encore applicable ; l'interdiction de louer les G reste en vigueur", "Est promulgué depuis l'été", "A supprimé le DPE", "A reporté l'interdiction des G à 2030"], 0, "Séance publique à l'Assemblée attendue mi-novembre 2026."],
[2, "Le fonds de travaux en copropriété est alimenté au minimum à hauteur de :", ["2,5 % du montant des travaux du plan pluriannuel, et au moins 5 % du budget prévisionnel", "10 % du budget", "1 % du prix des lots", "Aucun minimum"], 0, "Il est attaché aux lots : il n'est pas remboursé au vendeur."],
[3, "Louer un logement sans l'autorisation exigée par un « permis de louer » communal expose à :", ["Une amende pouvant aller jusqu'à 15 000 €", "Rien", "La nullité automatique du bail", "Une peine de prison"], 0, "L'amende est de 5 000 € en cas de simple défaut de déclaration."],
[3, "Un investisseur achète en 2026 un studio électrique classé G avec un DPE de 2023. Première vérification ?", ["L'attestation de mise à jour ADEME avec le coefficient 1,9, qui peut le faire passer en F", "La taxe foncière", "Le règlement de copropriété uniquement", "L'encadrement des loyers"], 0, "Sans travaux, un F restera interdit à la location en 2028."]
] },

{ id: "incendie", title: "Sécurité incendie et risques du bâtiment", time: "1 h",
lesson: `
<h3>Le détecteur de fumée (DAAF) : obligation de base</h3>
<ul>
<li>Tout logement doit être équipé d'au moins un <strong>détecteur avertisseur autonome de fumée</strong> normalisé (marquage CE, norme NF EN 14604) depuis le 8 mars 2015.</li>
<li>En location : le <strong>propriétaire fournit et installe</strong> le détecteur ; le <strong>locataire l'entretient</strong> (piles, test) pendant le bail. En location saisonnière, meublé de tourisme ou logement de fonction, l'entretien reste au propriétaire.</li>
<li>L'occupant informe son assureur de l'installation. Le défaut de détecteur ne permet pas en principe à l'assureur de refuser l'indemnisation d'un incendie, mais il peut être source de responsabilité.</li>
<li>Le détecteur de monoxyde de carbone n'est pas obligatoire en logement, mais fortement recommandé avec un appareil à combustion.</li>
</ul>

<h3>Les immeubles d'habitation : la classification par familles</h3>
<div class="tw"><table><thead><tr><th>Famille</th><th>Bâtiments</th><th>Exemples d'exigences</th></tr></thead><tbody>
<tr><td>1re</td><td>Maisons individuelles jusqu'à R+1</td><td>Règles minimales</td></tr>
<tr><td>2e</td><td>Maisons R+2 et plus ; petits collectifs jusqu'à R+3</td><td>Escalier protégé, portes de recoupement</td></tr>
<tr><td>3e</td><td>Collectifs dont le plancher du dernier niveau est à 28 m au plus</td><td>Accessibilité pompiers, désenfumage, portes coupe-feu, colonnes sèches selon les cas</td></tr>
<tr><td>4e</td><td>De 28 m à 50 m</td><td>Exigences renforcées, colonnes sèches ou en charge</td></tr>
<tr><td>IGH</td><td>Au-delà de 50 m</td><td>Réglementation des immeubles de grande hauteur</td></tr>
</tbody></table></div>
<p>(Arrêté du 31 janvier 1986.) En pratique, l'investisseur vérifie en copropriété : entretien des équipements de sécurité (désenfumage, éclairage de sécurité, portes coupe-feu), contrats de maintenance, absence d'encombrement des parties communes, consignes affichées. Les parkings couverts et chaufferies ont leurs propres règles.</p>

<h3>Quand un logement devient un établissement recevant du public (ERP)</h3>
<ul>
<li>Les <strong>chambres d'hôtes</strong> (5 chambres et 15 personnes au plus) et les meublés de tourisme de petite taille restent soumis aux règles de l'habitation.</li>
<li>Au-delà de <strong>15 personnes</strong> accueillies (gîte de groupe, grande maison louée à la nuitée, coliving hôtelier), le bâtiment relève en principe des <strong>ERP</strong> : alarme, éclairage de sécurité, extincteurs, registre de sécurité, parfois visite de la commission de sécurité. Le coût de mise en conformité peut ruiner un business plan.</li>
<li>Une colocation de résidence principale, même grande, reste en principe de l'habitation : attention cependant aux transformations qui la font glisser vers l'hébergement collectif.</li>
</ul>

<h3>Gaz, électricité, combustion</h3>
<ul>
<li>Entretien annuel obligatoire des chaudières (gaz, fioul, bois) de 4 à 400 kW, à la charge de l'occupant.</li>
<li>Ramonage des conduits selon le règlement sanitaire départemental (souvent une à deux fois par an).</li>
<li>Diagnostics gaz et électricité à fournir pour les installations de plus de 15 ans ; en cas d'anomalie grave (« danger grave et immédiat »), le distributeur peut couper le gaz.</li>
</ul>

<h3>Autres risques à intégrer</h3>
<ul>
<li><strong>Piscine</strong> privée enterrée : dispositif de sécurité normalisé obligatoire (barrière, abri, alarme ou couverture), amende de 45 000 € à défaut. Indispensable en location saisonnière.</li>
<li><strong>État des risques</strong> (inondation, séismes, radon, argiles, pollution des sols) annexé à la vente et au bail ; information sur les sinistres indemnisés.</li>
<li><strong>Retrait-gonflement des argiles</strong> : étude géotechnique obligatoire à la vente de terrains constructibles en zone d'exposition moyenne ou forte.</li>
<li><strong>Assurance PNO</strong> : obligatoire pour le copropriétaire bailleur ; elle couvre la responsabilité du propriétaire pendant les périodes de vacance et en complément de l'assurance du locataire.</li>
</ul>
`,
keys: [
"DAAF obligatoire : installé par le bailleur, entretenu par le locataire (par le propriétaire en saisonnier).",
"Au-delà de 15 personnes accueillies, risque de basculer en ERP : coûts de mise en conformité.",
"Copropriété : vérifier contrats de maintenance et entretien des équipements de sécurité.",
"Piscine : dispositif de sécurité obligatoire ; ERP : état des risques annexé à la vente et au bail."
],
ex: [
{ t: "Un projet de gîte de groupe",
q: `<p>Un investisseur veut acheter une grande longère de 9 chambres pour la louer à la nuitée à des groupes de 20 personnes, avec piscine. Quels sujets de sécurité doit-il étudier avant de signer ?</p>`,
a: `<ul><li>Au-delà de 15 personnes : classement probable en ERP (5e catégorie) : alarme, éclairage de sécurité, extincteurs, portes, registre, éventuellement visite de la commission de sécurité. Chiffrer la mise en conformité, ou limiter la capacité à 15 personnes.</li><li>Piscine : dispositif de sécurité normalisé obligatoire.</li><li>Détecteurs de fumée entretenus par le propriétaire (location saisonnière).</li><li>Assurance adaptée à l'activité d'hébergement ; urbanisme (changement de destination si l'activité devient de l'hébergement hôtelier) ; loi Le Meur (enregistrement, DPE).</li></ul>` }
],
qcm: [
[1, "Qui doit installer le détecteur de fumée dans un logement loué vide ?", ["Le propriétaire", "Le locataire", "Le syndic", "Les pompiers"], 0, "Le locataire l'entretient pendant le bail."],
[1, "En location saisonnière, l'entretien du détecteur de fumée incombe :", ["Au propriétaire", "Au vacancier", "À la mairie", "À l'assureur"], 0, "Même règle pour les logements de fonction et les foyers."],
[1, "Le détecteur de monoxyde de carbone dans un logement est :", ["Recommandé mais non obligatoire", "Obligatoire depuis 2015", "Interdit", "Obligatoire en location"], 0, "Le DAAF (fumée) est, lui, obligatoire."],
[2, "Au-delà de quel nombre de personnes accueillies un hébergement touristique bascule-t-il en principe en ERP ?", ["15 personnes", "5 personnes", "50 personnes", "100 personnes"], 0, "Les chambres d'hôtes sont limitées à 5 chambres et 15 personnes."],
[2, "Un immeuble collectif dont le dernier niveau est à 25 m relève de la :", ["3e famille", "1re famille", "4e famille", "Réglementation IGH"], 0, "La 4e famille va de 28 à 50 m."],
[2, "L'entretien annuel d'une chaudière gaz individuelle dans un logement loué est à la charge :", ["Du locataire", "Du propriétaire", "Du fournisseur de gaz", "Du syndic"], 0, "C'est une obligation d'entretien courant."],
[3, "Une piscine enterrée sans dispositif de sécurité normalisé dans une location saisonnière expose à :", ["Une amende de 45 000 € et une responsabilité pénale en cas d'accident", "Rien si un panneau prévient", "Une simple mise en demeure", "La fermeture du compte de réservation"], 0, "Barrière, abri, alarme ou couverture normalisés."],
[3, "Quelle assurance est obligatoire pour un copropriétaire bailleur ?", ["L'assurance responsabilité civile propriétaire non occupant", "L'assurance loyers impayés", "La garantie décennale", "L'assurance emprunteur"], 0, "Depuis la loi ALUR de 2014."],
[3, "Avant d'acheter dans un immeuble ancien, quel document de copropriété renseigne sur l'entretien des équipements de sécurité ?", ["Le carnet d'entretien et les procès-verbaux d'assemblée générale", "Le titre de propriété", "L'avis de taxe foncière", "Le DPE individuel"], 0, "Ils mentionnent contrats de maintenance et travaux votés."]
] },

{ id: "urba", title: "Urbanisme pour investisseurs", time: "1 h 15",
lesson: `
<h3>Les documents qui disent ce qu'on peut construire</h3>
<ul>
<li><strong>PLU ou PLUi</strong> (plan local d'urbanisme, souvent intercommunal) : zones (U urbaines, AU à urbaniser, A agricoles, N naturelles), hauteur, emprise au sol, stationnement, aspect. Consultable en mairie ou sur le Géoportail de l'urbanisme.</li>
<li>À défaut, le <strong>règlement national d'urbanisme</strong> (RNU) ou une carte communale.</li>
<li><strong>Servitudes d'utilité publique</strong> : périmètre de 500 m autour d'un monument historique (avis de l'architecte des Bâtiments de France), plans de prévention des risques (inondation), alignement.</li>
<li><strong>Certificat d'urbanisme</strong> : informatif (CUa) ou opérationnel (CUb, qui dit si un projet précis est réalisable). Il fige les règles pendant 18 mois.</li>
</ul>

<h3>Quelle autorisation pour quels travaux ?</h3>
<div class="tw"><table><thead><tr><th>Travaux</th><th>Autorisation</th></tr></thead><tbody>
<tr><td>Création de 5 à 20 m² de surface de plancher ou d'emprise au sol</td><td>Déclaration préalable</td></tr>
<tr><td>Extension jusqu'à 40 m² en zone urbaine d'un PLU</td><td>Déclaration préalable (permis si la surface totale dépasse alors 150 m²)</td></tr>
<tr><td>Création de plus de 20 m² (ou 40 m² en zone U)</td><td>Permis de construire</td></tr>
<tr><td>Modification de façade, changement de fenêtres d'aspect différent, ravalement en secteur protégé</td><td>Déclaration préalable</td></tr>
<tr><td>Changement de destination sans modifier structure ni façade</td><td>Déclaration préalable</td></tr>
<tr><td>Changement de destination avec modification de la structure porteuse ou de la façade</td><td>Permis de construire</td></tr>
<tr><td>Travaux intérieurs sans changement de destination</td><td>Aucune (sauf secteur protégé ou monument)</td></tr>
</tbody></table></div>
<p>Le recours à un <strong>architecte</strong> est obligatoire pour un permis dès que la surface de plancher totale dépasse <strong>150 m²</strong> (pour un particulier).</p>

<h3>Destination et usage : deux notions distinctes</h3>
<ul>
<li>La <strong>destination</strong> (code de l'urbanisme) : habitation, commerce et activités de service, équipements, exploitation agricole, autres activités. Passer de bureaux ou commerce à habitation est un changement de destination.</li>
<li>L'<strong>usage</strong> (code de la construction) : à Paris, dans les communes de plus de 200 000 habitants et celles qui l'ont décidé, transformer un logement en meublé de tourisme (hors résidence principale) ou en bureau exige une autorisation de <strong>changement d'usage</strong>, parfois avec <strong>compensation</strong> (créer ailleurs une surface équivalente de logement).</li>
</ul>

<h3>Diviser</h3>
<ul>
<li>Division d'un terrain en vue de construire : lotissement (déclaration préalable ou permis d'aménager selon les équipements communs).</li>
<li>Division d'un immeuble en plusieurs logements : permis de construire si travaux sur façade ou structure ; « permis de diviser » dans certaines communes ; en copropriété, modification de l'état descriptif de division et vote en assemblée générale.</li>
<li>Créer des logements impose de respecter les règles de stationnement du PLU, souvent le premier obstacle.</li>
</ul>

<h3>Délais, recours, régularisation</h3>
<ul>
<li>Instruction : 1 mois pour une déclaration préalable, 2 mois pour un permis de maison individuelle, 3 mois pour les autres (plus en secteur protégé).</li>
<li>Affichage sur le terrain obligatoire : les tiers ont <strong>2 mois</strong> de recours à partir du premier jour d'affichage continu. Un acheteur prudent attend que le permis soit purgé de tout recours.</li>
<li>Validité du permis : 3 ans, prorogeable deux fois un an.</li>
<li>Fin des travaux : déclaration attestant l'achèvement et la conformité (DAACT).</li>
<li>Travaux réalisés sans autorisation : l'action pénale se prescrit par 6 ans ; après 10 ans, l'administration ne peut en principe plus refuser une nouvelle autorisation au motif de l'irrégularité ancienne (sauf exceptions). Un acheteur doit vérifier que les surfaces vendues correspondent aux autorisations (véranda, garage transformé…).</li>
</ul>

<h3>La fiscalité de l'urbanisme</h3>
<p>La <strong>taxe d'aménagement</strong> est due sur toute création de surface taxable (construction, extension, abri de jardin, piscine) : surface × valeur forfaitaire au m² × taux communal et départemental. Elle se paie en général en une ou deux fois après l'achèvement. Elle peut surprendre l'investisseur qui aménage un garage ou des combles.</p>
`,
keys: [
"DP : 5 à 20 m² (40 m² en zone U) ; PC au-delà ; architecte au-delà de 150 m².",
"Destination (urbanisme) ≠ usage (construction) : le meublé de tourisme peut exiger un changement d'usage.",
"Recours des tiers : 2 mois après affichage ; attendre la purge.",
"Vérifier la conformité des surfaces vendues aux autorisations obtenues."
],
ex: [
{ t: "Transformer un local commercial",
q: `<p>Un investisseur achète un local commercial de 70 m² en rez-de-chaussée d'immeuble à Nantes pour créer deux studios. Les vitrines seront remplacées par des fenêtres. Quelles autorisations et vérifications ?</p>`,
a: `<ul><li>Changement de destination (commerce → habitation) avec modification de façade : <strong>déclaration préalable</strong> en général (permis de construire si la structure porteuse est touchée). Vérifier le PLU : certaines rues protègent les linéaires commerciaux et interdisent ce changement.</li><li>Règlement de copropriété : la destination du lot doit permettre l'habitation ; sinon, vote en assemblée générale et modification de l'état descriptif.</li><li>Règles du PLU sur le stationnement pour les logements créés.</li><li>Décence et habitabilité : lumière naturelle, ventilation, hauteur, surface ≥ 9 m² par logement.</li><li>Taxe d'aménagement si la surface taxable augmente.</li></ul>` }
],
qcm: [
[1, "Construire un abri de jardin de 15 m² nécessite :", ["Une déclaration préalable", "Un permis de construire", "Rien", "L'accord des voisins"], 0, "Entre 5 et 20 m²."],
[1, "Le délai de recours des tiers contre un permis de construire est de :", ["2 mois à compter du premier jour d'affichage continu sur le terrain", "1 an", "6 mois", "15 jours"], 0, "L'affichage doit être visible depuis la voie publique."],
[1, "Le recours à un architecte est obligatoire pour un particulier dès que la surface de plancher totale dépasse :", ["150 m²", "100 m²", "200 m²", "50 m²"], 0, "Seuil abaissé de 170 à 150 m² en 2017."],
[2, "Transformer des bureaux en logement sans toucher à la façade ni à la structure nécessite :", ["Une déclaration préalable de changement de destination", "Un permis de construire", "Rien", "Une autorisation préfectorale"], 0, "Avec modification de façade ou de structure : permis de construire."],
[2, "Transformer un studio (hors résidence principale) en meublé de tourisme à Paris nécessite :", ["Une autorisation de changement d'usage, avec compensation", "Une déclaration préalable", "Rien si c'est meublé", "L'accord des voisins"], 0, "Notion d'usage du code de la construction."],
[2, "Un certificat d'urbanisme opérationnel :", ["Indique si un projet précis est réalisable et fige les règles pendant 18 mois", "Vaut permis de construire", "Est obligatoire avant toute vente", "N'a aucune valeur juridique"], 0, "Le CUa est seulement informatif."],
[3, "Une véranda de 25 m² construite sans autorisation il y a 12 ans. Conséquence pour l'acheteur ?", ["L'action pénale est prescrite, mais la surface n'est pas régulière ; en principe un refus de nouveau permis fondé sur cette irrégularité n'est plus possible après 10 ans (sauf exceptions)", "Aucune, tout est régularisé", "La véranda doit être démolie", "La vente est nulle"], 0, "Article L421-9 du code de l'urbanisme : exceptions notamment en zone de risque ou site protégé."],
[3, "Un bien situé à 300 m d'un monument historique : les travaux de façade nécessitent :", ["L'avis de l'architecte des Bâtiments de France", "Rien de particulier", "L'accord de la DRAC uniquement", "Un permis d'aménager"], 0, "Périmètre de 500 m, ou périmètre délimité des abords."],
[3, "La taxe d'aménagement est due notamment pour :", ["La création d'une piscine ou d'une extension", "Le remplacement d'une fenêtre", "Des travaux intérieurs", "Un ravalement"], 0, "Elle frappe la création de surface taxable et certains aménagements."]
] },

{ id: "structure", title: "Structurer, transmettre, sortir", time: "1 h",
lesson: `
<h3>Détention directe, SCI ou société à l'IS ?</h3>
<p>Au-delà de deux ou trois biens, la question de la structure se pose :</p>
<ul>
<li><strong>Détention directe</strong> : simple, plus-values des particuliers, LMNP possible.</li>
<li><strong>SCI familiale à l'IR</strong> : transmission progressive des parts (abattements tous les 15 ans), gérance conservée par les parents, pas d'indivision au décès, clauses d'agrément. Fiscalité identique à la détention directe.</li>
<li><strong>SCI ou SAS à l'IS</strong> : capitalisation, amortissement, taux d'IS de 15/25 %, mais sortie coûteuse.</li>
<li><strong>Holding</strong> au-dessus de sociétés immobilières à l'IS : remonter des dividendes quasi exonérés (régime mère-fille) pour réinvestir. Attention à la nouvelle taxe de 20 % sur les actifs somptuaires des holdings patrimoniales (LF 2026) si la structure détient des résidences de loisirs à usage privé.</li>
</ul>

<h3>Transmettre l'immobilier</h3>
<ul>
<li><strong>Donation de parts de SCI en nue-propriété</strong> : les parents gardent l'usufruit (revenus et pouvoir de vote selon les statuts), les droits ne portent que sur la nue-propriété, avec en plus la déduction du passif de la SCI (le crédit en cours réduit la valeur des parts).</li>
<li>Décote d'illiquidité des parts (souvent 10 à 15 %, à justifier).</li>
<li>Au décès de l'usufruitier, réunion de l'usufruit sans droits.</li>
<li>Le LMNP conservé jusqu'au décès évite toute imposition de la plus-value.</li>
</ul>

<h3>Financer intelligemment</h3>
<ul>
<li><strong>Crédit amortissable</strong> : réduit la dette chaque année.</li>
<li><strong>Crédit in fine</strong> adossé à une assurance-vie nantie : on ne rembourse que les intérêts (déductibles des revenus fonciers), le capital est remboursé à l'échéance par l'assurance-vie qui a capitalisé. Pour l'IFI, la déductibilité d'un prêt in fine est limitée (amortissement fictif).</li>
<li>Dette et IFI : les emprunts finançant des biens taxables sont déductibles de l'assiette, dans les limites prévues.</li>
</ul>

<h3>Décider de vendre ou de garder</h3>
<div class="tw"><table><thead><tr><th>Garder si…</th><th>Vendre si…</th></tr></thead><tbody>
<tr><td>Le rendement net-net reste supérieur à l'alternative</td><td>Le bien est F/G et les travaux dépassent la décote de valeur</td></tr>
<tr><td>Le seuil de 22 ou 30 ans approche</td><td>Une forte plus-value peut être arbitrée vers un meilleur actif</td></tr>
<tr><td>La transmission est prévue (LMNP, démembrement)</td><td>La copropriété s'annonce coûteuse (gros travaux votés, impayés)</td></tr>
<tr><td>Le marché local se tend</td><td>La ville perd des habitants et des emplois</td></tr>
</tbody></table></div>
`,
keys: [
"SCI à l'IR : outil de transmission et de gouvernance, pas de gain fiscal sur les loyers.",
"Donation de parts en nue-propriété : passif déduit, réunion de l'usufruit sans droits.",
"Crédit in fine + assurance-vie : intérêts déductibles, capital remboursé par le contrat.",
"Arbitrer avec méthode : rendement net-net, seuils de plus-value, DPE, copropriété."
],
ex: [
{ t: "Transmettre un immeuble en SCI",
q: `<p>M. et Mme E. (65 et 63 ans) détiennent via une SCI à l'IR un immeuble de 900 000 €, avec 300 000 € de crédit restant. Ils ont 3 enfants. Ils veulent donner sans perdre les loyers. Estimez la valeur taxable transmise par enfant s'ils donnent la nue-propriété de toutes les parts (décote d'illiquidité de 10 %).</p>`,
a: `<p>Valeur des parts : (900 000 − 300 000) × 90 % = 540 000 €. Nue-propriété (usufruitiers de 61 à 70 ans) : 60 % = 324 000 €, soit 108 000 € par enfant, reçus pour moitié de chaque parent : 54 000 € par parent et par enfant, sous l'abattement de 100 000 € : <strong>aucun droit</strong>. Les parents gardent les loyers (usufruit) et la gérance. À leur décès, les enfants reçoivent la pleine propriété des parts sans droits.</p>` }
],
qcm: [
[1, "Une SCI familiale à l'IR permet surtout :", ["De transmettre progressivement et d'organiser la gestion", "De réduire l'impôt sur les loyers", "D'amortir les biens", "D'échapper à l'IFI"], 0, "Fiscalement, elle est transparente."],
[2, "Pourquoi le crédit en cours d'une SCI est-il favorable lors d'une donation de parts ?", ["Il réduit la valeur des parts, donc l'assiette des droits", "Il est remboursé par l'État", "Il rend la donation exonérée", "Il n'a aucun effet"], 0, "En détention directe, le crédit n'est pas transmis avec le bien donné."],
[2, "Dans un crédit in fine, l'emprunteur rembourse pendant la durée du prêt :", ["Uniquement les intérêts", "Capital et intérêts", "Uniquement le capital", "Rien"], 0, "Le capital est remboursé en une fois à l'échéance."],
[3, "Quelle est la limite du crédit in fine pour l'IFI ?", ["La dette n'est déductible que dans la limite d'un amortissement fictif", "Il n'est pas déductible du tout", "Il est déductible deux fois", "Aucune limite"], 0, "Pour éviter les montages visant à réduire l'IFI."],
[3, "Un bien G nécessite 60 000 € de travaux, la décote de marché pour sa classe est de 30 000 €. Option rationnelle si l'investisseur ne veut pas faire de travaux ?", ["Vendre en acceptant la décote plutôt que financer 60 000 € de travaux", "Le garder vacant", "Le louer quand même", "Attendre la loi Relance logement"], 0, "Sauf si les travaux créent un déficit foncier et une revalorisation supérieurs."],
[3, "Une holding patrimoniale détient une villa utilisée par le dirigeant pour ses vacances. Risque fiscal depuis la LF 2026 ?", ["Une taxe annuelle de 20 % sur la valeur de ces actifs somptuaires, sous conditions", "Aucun", "La perte du régime mère-fille", "La TVA sur la valeur de la villa"], 0, "Taxe sur les holdings patrimoniales créée par la LF 2026."]
] },

{ id: "dd", title: "Due diligence : la check-list avant de signer", time: "45 min",
lesson: `
<h3>Le bien</h3>
<ul>
<li>Visites à des heures différentes ; état de la toiture, des façades, de l'électricité, de la plomberie ; humidité, fissures.</li>
<li>Dossier de diagnostics complet et lu : DPE (classe, date, chauffage), amiante, plomb, électricité, gaz, termites, état des risques.</li>
<li>Surfaces : Carrez, habitable, et conformité avec les autorisations d'urbanisme.</li>
<li>Devis de travaux réalisés avant l'offre, avec un artisan ou un maître d'œuvre.</li>
</ul>
<h3>La copropriété</h3>
<ul>
<li>Trois derniers procès-verbaux d'AG, budget, charges, fonds de travaux, plan pluriannuel, DPE collectif, carnet d'entretien.</li>
<li>Impayés de copropriété et procédures en cours ; travaux votés à la charge du vendeur ou de l'acquéreur (à négocier dans la promesse).</li>
<li>Règlement de copropriété : location meublée de tourisme autorisée ? activité professionnelle ?</li>
</ul>
<h3>Le marché locatif</h3>
<ul>
<li>Loyers réels de biens comparables (annonces et loyers effectivement signés), délai de relocation.</li>
<li>Encadrement des loyers, zone tendue, permis de louer, loi Le Meur.</li>
<li>Bail en cours : loyer, date de fin, dépôt, situation du locataire, régularité des paiements.</li>
</ul>
<h3>Le juridique et le fiscal</h3>
<ul>
<li>Servitudes, droit de préemption, PLU, projets publics alentour.</li>
<li>Choix du régime fiscal et de la structure avant de signer (on n'achète pas en nom propre ce qu'on voulait mettre en SCI).</li>
<li>Conditions suspensives dans la promesse : obtention du prêt, autorisation d'urbanisme, absence de préemption.</li>
</ul>
<h3>Les chiffres</h3>
<ul>
<li>Rendement net-net, cash-flow, TRI à 10 et 20 ans avec un scénario de revente prudent.</li>
<li>Stress tests : vacance de 3 mois, hausse de la taxe foncière de 20 %, travaux imprévus de 10 %, taux de crédit + 1 point.</li>
</ul>
`,
keys: [
"Lire les PV d'AG et le plan pluriannuel avant toute offre en copropriété.",
"Vérifier la conformité des surfaces aux autorisations d'urbanisme.",
"Choisir régime et structure avant de signer.",
"Toujours stresser le business plan (vacance, travaux, taux)."
],
ex: [
{ t: "Repérer les signaux d'alerte",
q: `<p>Dans le dossier d'un T3 à vendre, vous lisez : PV d'AG avec vote d'un ravalement de 180 000 € (appels de fonds dans 6 mois), 12 % d'impayés de charges, DPE E au gaz collectif, combles du dernier étage transformés en chambre sans trace de déclaration préalable, loyer actuel 15 % au-dessus du loyer de référence majoré. Qu'en faites-vous ?</p>`,
a: `<ul><li>Ravalement : négocier qui paie les appels de fonds (en principe, le débiteur est celui qui est copropriétaire à la date d'exigibilité) ; intégrer la quote-part au prix.</li><li>12 % d'impayés : risque de charges accrues, interroger le syndic sur les procédures.</li><li>DPE E au gaz collectif : interdiction de location en 2034 si rien n'est fait ; leviers surtout collectifs.</li><li>Combles transformés : surface potentiellement irrégulière, risque sur la valeur et la location ; exiger une régularisation ou décoter.</li><li>Loyer au-dessus du plafond : le locataire peut demander une baisse et le remboursement du trop-perçu ; le revenu réel futur est plus faible que l'affiché (sous réserve du sort de l'encadrement après novembre 2026).</li></ul>` }
],
qcm: [
[1, "Avant d'acheter un lot de copropriété, on lit en priorité :", ["Les procès-verbaux des trois dernières assemblées générales", "Le dernier avis de taxe d'habitation", "Les factures d'électricité du vendeur", "Le relevé bancaire du syndic"], 0, "Ils révèlent travaux votés, impayés et litiges."],
[1, "Une condition suspensive d'obtention de prêt protège :", ["L'acquéreur, qui récupère son dépôt si le crédit est refusé", "Le vendeur", "La banque", "Le notaire"], 0, "Elle est obligatoire si l'achat est financé par un crédit, sauf renonciation manuscrite."],
[2, "Pourquoi tester un scénario avec un taux de crédit + 1 point ?", ["Pour vérifier la résistance du projet en cas de financement plus cher ou de renégociation impossible", "Parce que la loi l'impose", "Pour obtenir un meilleur taux", "Ce n'est pas utile"], 0, "C'est un stress test classique, comme la vacance et les travaux imprévus."],
[2, "Un bail en cours affiche un loyer supérieur au loyer de référence majoré dans une ville encadrée. Risque ?", ["Le locataire peut obtenir une baisse et le remboursement du trop-perçu", "Aucun", "Le bail est nul", "L'acquéreur paie une amende pénale"], 0, "Sous réserve de la prolongation de l'encadrement après novembre 2026."],
[3, "Des appels de fonds pour des travaux votés avant la vente sont exigibles après la vente. Qui paie, à défaut de clause contraire ?", ["Le copropriétaire à la date d'exigibilité, donc l'acquéreur, d'où la négociation dans la promesse", "Toujours le vendeur", "Le syndic", "Moitié-moitié obligatoirement"], 0, "Article 6-2 du décret de 1967 ; une clause peut répartir autrement entre les parties."]
] }

  ]
});
