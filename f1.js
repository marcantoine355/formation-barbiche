/* Formation 1 — Fiscalité du patrimoine (partie 1 : modules 1 à 7) */
(window.FB = window.FB || {formations: []}).formations.push({
  id: "fisc", num: 1, short: "Fiscalité", title: "Fiscalité du patrimoine",
  kicker: "Banque privée · CGP", hours: "≈ 15 h",
  blurb: "IR, placements, assurance-vie, PER, immobilier, IFI, donations, successions et chef d'entreprise : les bases qui reviennent dans 95 % des rendez-vous.",
  intro: "Le programme d'un conseiller en gestion de patrimoine junior : on vise les mécanismes qui reviennent en rendez-vous client, chiffres 2026 à l'appui, sans s'attarder sur les régimes d'exception. Chaque module se termine par un cas pratique et un QCM en trois niveaux.",
  modules: [

/* ---------------- M1 ---------------- */
{ id: "ir", title: "L'impôt sur le revenu : la mécanique complète", time: "1 h",
lesson: `
<h3>Le foyer fiscal, point de départ de tout conseil</h3>
<p>L'impôt sur le revenu (IR) est calculé par <strong>foyer fiscal</strong> : la personne seule, ou le couple marié ou pacsé (imposition commune obligatoire), plus les personnes à charge. Les concubins font deux déclarations séparées. Premier réflexe en rendez-vous : <strong>situation familiale, nombre de parts, revenu net imposable, taux marginal</strong>. Ces quatre informations figurent sur l'avis d'imposition, demandez-le systématiquement.</p>
<p>L'année du mariage ou du PACS, le couple fait une déclaration commune pour toute l'année (option possible pour des déclarations séparées). L'année du décès d'un conjoint, deux déclarations sont faites : une pour le couple jusqu'au décès, une pour le survivant ensuite, qui garde le bénéfice du quotient conjugal.</p>

<h3>Du revenu brut au revenu net imposable</h3>
<p>Les revenus sont classés en <strong>catégories</strong>, chacune avec ses règles de calcul :</p>
<ul>
<li><strong>Traitements, salaires, pensions</strong> : abattement de 10 % pour frais professionnels (plafonné), ou option pour les frais réels. Les pensions de retraite ont leur propre abattement de 10 %, plafonné par foyer.</li>
<li><strong>Revenus fonciers</strong> (location nue) : micro-foncier ou régime réel (module 7).</li>
<li><strong>BIC</strong> (commerçants, loueurs en meublé), <strong>BNC</strong> (professions libérales), <strong>BA</strong> (agriculteurs).</li>
<li><strong>Revenus de capitaux mobiliers</strong> et <strong>plus-values</strong> : en principe au prélèvement forfaitaire unique, hors barème (module 3).</li>
</ul>
<p>On additionne les revenus catégoriels nets pour obtenir le <strong>revenu brut global</strong>, puis on retire les <strong>charges déductibles</strong> (pensions alimentaires, versements PER, déficits fonciers imputables, CSG déductible). On obtient le <strong>revenu net imposable</strong>.</p>

<h3>Le barème 2026 (revenus 2025)</h3>
<p>La loi de finances pour 2026, promulguée le 19 février 2026, a revalorisé les tranches de 0,9 %. Le barème s'applique <strong>par part</strong> de quotient familial :</p>
<div class="tw"><table><thead><tr><th>Fraction du revenu par part</th><th class="n">Taux</th></tr></thead><tbody>
<tr><td>Jusqu'à 11 600 €</td><td class="n">0 %</td></tr>
<tr><td>De 11 601 € à 29 579 €</td><td class="n">11 %</td></tr>
<tr><td>De 29 580 € à 84 577 €</td><td class="n">30 %</td></tr>
<tr><td>De 84 578 € à 181 917 €</td><td class="n">41 %</td></tr>
<tr><td>Au-delà de 181 917 €</td><td class="n">45 %</td></tr>
</tbody></table></div>
<p>Le calcul : revenu net imposable ÷ nombre de parts = <strong>quotient familial</strong>. On applique le barème au quotient, puis on multiplie par le nombre de parts.</p>
<div class="note"><span class="tag">Formule rapide de rendez-vous</span>
<p>Impôt par part = quotient × taux de la tranche − constante. Constantes 2026 : 1 276 € (tranche 11 %), 6 896 € (30 %), 16 199,48 € (41 %), 23 476,16 € (45 %). Exemple : quotient de 40 000 € → 40 000 × 30 % − 6 896 = 5 104 € par part.</p></div>

<h3>Les parts : quotient conjugal et quotient familial</h3>
<ul>
<li>Célibataire, divorcé, veuf sans enfant : 1 part. Couple marié ou pacsé : 2 parts.</li>
<li>1er et 2e enfant à charge : + 0,5 part chacun. À partir du 3e : + 1 part chacun.</li>
<li>Parent isolé (case T) : + 0,5 part supplémentaire. Invalidité : + 0,5 part.</li>
<li>Enfant en résidence alternée : les majorations sont partagées (0,25 part).</li>
</ul>
<p>L'avantage procuré par les demi-parts supplémentaires est <strong>plafonné</strong> : 1 807 € par demi-part en 2026 (4 262 € pour la part du premier enfant d'un parent isolé). Concrètement, on calcule l'impôt avec et sans les demi-parts « enfants », et l'économie ne peut pas dépasser le plafond.</p>
<div class="ex"><span class="tag">Exemple chiffré</span>
<p>Couple marié, 2 enfants, revenu net imposable 90 000 €, soit 3 parts.</p>
<p>Avec 3 parts : quotient 30 000 € → 30 000 × 30 % − 6 896 = 2 104 € par part → 6 312 €.<br>
Avec 2 parts : quotient 45 000 € → 45 000 × 30 % − 6 896 = 6 604 € par part → 13 208 €.<br>
Avantage brut des 2 demi-parts : 6 896 €, supérieur au plafond de 2 × 1 807 = 3 614 €.<br>
<strong>Impôt dû : 13 208 − 3 614 = 9 594 €.</strong> Le couple est « plafonné » : chaque euro de revenu supplémentaire est taxé à 30 %.</p></div>

<h3>Décote, contributions sur les hauts revenus</h3>
<p>La <strong>décote</strong> allège l'impôt des foyers modestes : elle s'applique quand l'impôt brut est inférieur à environ 1 980 € pour une personne seule et 3 280 € pour un couple. En dessous de 61 € d'impôt, rien n'est mis en recouvrement. Une personne seule ne devient réellement imposable qu'autour de 17 600 € de revenu imposable.</p>
<p>Pour les hauts revenus :</p>
<ul>
<li><strong>CEHR</strong> (contribution exceptionnelle) : 3 % puis 4 % sur la fraction du revenu fiscal de référence au-delà de 250 000 € et 500 000 € (personne seule), 500 000 € et 1 000 000 € (couple).</li>
<li><strong>CDHR</strong> (contribution différentielle, créée en 2025 et prorogée par la LF 2026) : impôt minimal de 20 % pour les foyers dont le revenu de référence dépasse 250 000 € (seul) ou 500 000 € (couple).</li>
</ul>

<h3>TMI et taux moyen : la distinction qui fait vendre (ou pas)</h3>
<p>Le <strong>taux marginal d'imposition</strong> (TMI) est le taux de la tranche où tombe le dernier euro du quotient. Il mesure l'impôt sur un euro supplémentaire et donc <strong>l'économie procurée par un euro déduit</strong> (versement PER, déficit foncier). Le <strong>taux moyen</strong> est l'impôt divisé par le revenu imposable ; il est toujours plus bas. Un client qui dit « je suis à 30 % » parle presque toujours de sa TMI.</p>
<div class="warn"><span class="tag">Piège classique</span><p>Un produit défiscalisant « en déduction » vaut 30 % pour un client à 30 % de TMI, mais 11 % pour un client à 11 %. Pour une TMI de 0 % ou 11 %, la déduction est rarement le bon argument.</p></div>

<h3>Prélèvement à la source</h3>
<p>Depuis 2019, l'impôt est prélevé à la source sur les salaires et pensions (taux du foyer, taux individualisé ou taux neutre) et par acomptes mensuels pour les revenus fonciers et BIC/BNC. La déclaration de printemps reste obligatoire : elle régularise l'année précédente et recalcule le taux à partir de septembre. Les réductions et crédits d'impôt récurrents (emploi à domicile, garde d'enfants, dons) donnent lieu à une avance de 60 % versée mi-janvier.</p>
`,
keys: [
"Barème 2026 : 0 / 11 / 30 / 41 / 45 % avec seuils 11 600 – 29 579 – 84 577 – 181 917 € par part.",
"Plafond de l'avantage par demi-part : 1 807 €. Toujours vérifier si le foyer est plafonné.",
"La TMI mesure la valeur d'une déduction ; le taux moyen mesure le poids réel de l'impôt.",
"Demander l'avis d'imposition en rendez-vous : parts, revenu imposable, revenu fiscal de référence."
],
ex: [
{ t: "Cas Durand : calcul complet",
q: `<p>M. Durand, célibataire sans enfant, cadre, perçoit 52 000 € de salaire net imposable avant abattement. Il n'a aucune autre charge. On suppose que l'abattement de 10 % s'applique sans plafonnement.</p><ol><li>Calculez son revenu net imposable.</li><li>Calculez son impôt brut.</li><li>Indiquez sa TMI et son taux moyen.</li><li>Combien économiserait-il en versant 3 000 € déductibles sur un PER ?</li></ol>`,
a: `<ol><li>52 000 − 10 % = <strong>46 800 €</strong>.</li><li>1 part : 46 800 × 30 % − 6 896 = <strong>7 144 €</strong>.</li><li>TMI 30 %. Taux moyen : 7 144 / 46 800 = <strong>15,3 %</strong>.</li><li>Le revenu imposable descend à 43 800 €, toujours dans la tranche à 30 % : économie = 3 000 × 30 % = <strong>900 €</strong>.</li></ol>` },
{ t: "Cas Martin : le plafonnement",
q: `<p>M. et Mme Martin, mariés, 3 enfants à charge, revenu net imposable 120 000 €. Combien de parts ont-ils ? Calculez l'impôt en tenant compte du plafonnement du quotient familial.</p>`,
a: `<p><strong>4 parts</strong> (2 + 0,5 + 0,5 + 1).</p><p>Avec 4 parts : quotient 30 000 € → 2 104 € × 4 = 8 416 €.<br>Avec 2 parts : quotient 60 000 € → 60 000 × 30 % − 6 896 = 11 104 € × 2 = 22 208 €.<br>Avantage brut : 13 792 €. Plafond : 4 demi-parts × 1 807 = 7 228 €.<br>Impôt : 22 208 − 7 228 = <strong>14 980 €</strong>. Le foyer est plafonné.</p>` }
],
qcm: [
[1, "Comment s'applique le barème progressif de l'IR ?", ["Par part de quotient familial, puis le résultat est multiplié par le nombre de parts", "Au revenu total du foyer en une seule fois", "À chaque revenu catégoriel séparément", "Uniquement aux salaires"], 0, "Le revenu imposable est divisé par le nombre de parts ; le barème s'applique à ce quotient, puis on multiplie."],
[1, "Quel est le taux de la tranche qui va de 29 580 € à 84 577 € par part en 2026 ?", ["30 %", "11 %", "41 %", "14 %"], 0, "Le barème 2026 compte cinq tranches : 0, 11, 30, 41 et 45 %."],
[1, "Combien de parts pour un couple marié avec trois enfants à charge ?", ["4 parts", "3,5 parts", "3 parts", "5 parts"], 0, "2 parts pour le couple, 0,5 pour chacun des deux premiers enfants, 1 part à partir du troisième."],
[1, "Deux concubins sans PACS :", ["Font chacun leur propre déclaration", "Doivent faire une déclaration commune", "Peuvent choisir la déclaration commune s'ils vivent ensemble depuis 2 ans", "Sont imposés comme un couple marié dès qu'ils ont un enfant"], 0, "Seuls le mariage et le PACS créent un foyer fiscal commun."],
[2, "Un client à 30 % de TMI verse 4 000 € déductibles. Sans changement de tranche, son économie d'impôt est de :", ["1 200 €", "4 000 €", "600 €", "Elle dépend de son taux moyen"], 0, "Une déduction vaut montant × TMI, tant que le revenu reste dans la même tranche."],
[2, "Que mesure le taux moyen d'imposition ?", ["L'impôt rapporté au revenu imposable", "Le taux appliqué au dernier euro gagné", "La moyenne des cinq tranches", "Le taux du prélèvement à la source par défaut"], 0, "Il est toujours inférieur ou égal à la TMI."],
[2, "Le plafond de l'avantage fiscal par demi-part supplémentaire est en 2026 de :", ["1 807 €", "1 791 €", "4 262 €", "3 614 €"], 0, "1 791 € était le plafond 2025 ; 4 262 € concerne la part du premier enfant d'un parent isolé."],
[2, "L'année du mariage, un couple :", ["Fait une déclaration commune pour toute l'année, sauf option pour des déclarations séparées", "Fait obligatoirement trois déclarations", "Déclare séparément puis commun l'année suivante", "Ne peut pas déduire ses versements PER"], 0, "Le principe est l'imposition commune dès l'année du mariage ou du PACS, avec une option possible pour l'imposition distincte."],
[3, "Un couple est « plafonné » au quotient familial. Quel taux s'applique en pratique à ses revenus supplémentaires ?", ["La TMI calculée sur les seules parts du couple (sans les demi-parts enfants)", "La TMI calculée avec toutes les parts", "Un taux forfaitaire de 30 %", "Le taux moyen"], 0, "Quand le plafonnement joue, l'impôt est celui du couple sans enfants diminué d'un montant fixe : la marge se calcule donc sur 2 parts."],
[3, "Quel est l'impôt d'un célibataire dont le quotient (1 part) est de 100 000 € ?", ["24 800,52 € (100 000 × 41 % − 16 199,48)", "41 000 €", "30 000 €", "18 477 €"], 0, "Formule rapide : quotient × 41 % − 16 199,48 €."],
[3, "La CDHR (contribution différentielle sur les hauts revenus) :", ["Garantit un taux d'imposition minimal de 20 % pour les revenus de référence au-delà de 250 000 € (seul) ou 500 000 € (couple)", "Remplace la CEHR depuis 2026", "Est un prélèvement social sur les dividendes", "Ne concerne que les non-résidents"], 0, "Créée par la LF 2025 et prorogée par la LF 2026, elle s'ajoute à la CEHR."],
[3, "Pour un client à 11 % de TMI, l'argument le plus pertinent pour un PER est généralement :", ["Faible : la déduction rapporte peu et la sortie en capital sera taxée", "Excellent : la déduction vaut 30 %", "Neutre, car le PER est exonéré à la sortie", "Obligatoire au-delà de 50 ans"], 0, "L'avantage du PER tient à l'écart entre TMI à l'entrée et taux à la sortie ; à 11 %, cet écart est faible ou nul."]
] },

/* ---------------- M2 ---------------- */
{ id: "niches", title: "Réduire l'IR courant : déductions, réductions, crédits", time: "45 min",
lesson: `
<h3>Trois mécanismes, trois effets différents</h3>
<div class="tw"><table><thead><tr><th>Mécanisme</th><th>Agit sur</th><th>Valeur pour le client</th><th>Exemples</th></tr></thead><tbody>
<tr><td>Charge déductible</td><td>Le revenu imposable</td><td>Montant × TMI</td><td>PER, pension alimentaire, déficit foncier</td></tr>
<tr><td>Réduction d'impôt</td><td>L'impôt calculé</td><td>Montant fixe, perdu si impôt insuffisant</td><td>Dons, investissement PME, Malraux</td></tr>
<tr><td>Crédit d'impôt</td><td>L'impôt calculé</td><td>Montant fixe, remboursé si impôt insuffisant</td><td>Emploi à domicile, garde d'enfant</td></tr>
</tbody></table></div>
<p>Retenez l'ordre : la déduction vaut d'autant plus que la TMI est haute ; la réduction ne sert qu'à un client qui paie de l'impôt ; le crédit profite à tout le monde, même non imposable.</p>

<h3>Les charges déductibles les plus fréquentes</h3>
<ul>
<li><strong>Versements sur un PER</strong> : déductibles dans la limite d'un plafond (module 6).</li>
<li><strong>Pensions alimentaires</strong> versées à un enfant majeur (plafond d'environ 6 800 € par enfant, ou rattachement de l'enfant au foyer, il faut choisir), à un ascendant dans le besoin (montant justifié), à un ex-conjoint en vertu d'un jugement.</li>
<li><strong>CSG déductible</strong> sur les revenus du patrimoine imposés au barème (6,8 %).</li>
<li><strong>Déficit foncier</strong> imputable sur le revenu global, jusqu'à 10 700 € (module 7).</li>
</ul>

<h3>Les réductions et crédits que vous verrez chaque semaine</h3>
<div class="tw"><table><thead><tr><th>Dispositif</th><th>Avantage</th><th>Limite</th></tr></thead><tbody>
<tr><td>Dons aux associations d'intérêt général</td><td>Réduction de 66 %</td><td>20 % du revenu imposable, excédent reportable 5 ans</td></tr>
<tr><td>Dons aux organismes d'aide aux personnes en difficulté</td><td>Réduction de 75 %</td><td>Jusqu'à 1 000 € de dons, puis 66 %</td></tr>
<tr><td>Emploi d'un salarié à domicile</td><td>Crédit de 50 %</td><td>Dépenses de 12 000 € + 1 500 € par enfant ou personne de plus de 65 ans, maximum 15 000 €</td></tr>
<tr><td>Frais de garde d'un enfant de moins de 6 ans hors domicile</td><td>Crédit de 50 %</td><td>3 500 € de dépenses par enfant</td></tr>
<tr><td>Souscription au capital de PME (IR-PME), FCPI, FIP</td><td>Réduction de 18 % à 25 % selon le millésime et le produit</td><td>Plafonds par foyer, conservation des titres</td></tr>
</tbody></table></div>

<h3>Le plafonnement global des niches : 10 000 €</h3>
<p>La somme de la plupart des réductions et crédits d'impôt est plafonnée à <strong>10 000 € par an et par foyer</strong> (18 000 € pour l'outre-mer et les SOFICA). Ne sont pas concernés : les dons, la réduction pour dépendance, le dispositif Malraux, les monuments historiques et les charges déductibles (PER, déficit foncier). Le nouveau statut du bailleur privé (« Jeanbrun ») fonctionne par amortissement des revenus fonciers et n'entre pas dans ce plafond.</p>
<div class="warn"><span class="tag">À vérifier avant de vendre une réduction</span><p>Un client qui emploie déjà une assistante maternelle et une aide-ménagère peut avoir consommé une large partie de ses 10 000 €. Calculez l'enveloppe disponible avant de proposer un FIP ou un investissement outre-mer.</p></div>

<h3>Méthode en rendez-vous</h3>
<ol>
<li>Lire l'avis : impôt net, réductions déjà utilisées, revenu fiscal de référence.</li>
<li>Identifier la TMI et vérifier un éventuel plafonnement du quotient familial.</li>
<li>Commencer par l'épargne utile au projet du client (retraite, transmission) avant l'optimisation pure.</li>
<li>Ne jamais vendre un produit pour la seule réduction : un FIP qui perd 30 % en valeur a coûté plus que l'impôt économisé.</li>
</ol>
<div class="rdv"><span class="tag">Phrase de rendez-vous</span><p>« Votre avantage fiscal n'est intéressant que si le placement a du sens sans lui. Regardons d'abord ce que vous voulez financer. »</p></div>
`,
keys: [
"Déduction = montant × TMI ; réduction = perdue si l'impôt est insuffisant ; crédit = remboursé.",
"Plafond global des niches : 10 000 € (18 000 € outre-mer/SOFICA) ; dons, PER et déficit foncier hors plafond.",
"Emploi à domicile : crédit de 50 % jusqu'à 12 000 € de dépenses (+1 500 € par personne à charge, max 15 000 €).",
"Dons : 66 % (75 % jusqu'à 1 000 € pour l'aide aux personnes en difficulté)."
],
ex: [
{ t: "Cas Lefèvre : quel levier choisir ?",
q: `<p>Mme Lefèvre, célibataire, TMI 41 %, impôt de 18 000 €. Elle emploie une aide-ménagère (8 000 € par an) et souhaite réduire son impôt de 4 000 € sans bloquer d'argent plus de 10 ans. Elle hésite entre un FIP (réduction de 25 %) et un PER.</p><ol><li>Quel crédit tire-t-elle de son aide-ménagère et quelle place reste-t-il dans le plafond des niches ?</li><li>Combien verser sur le PER pour économiser 4 000 € ?</li><li>Quel argument non fiscal faut-il vérifier pour chaque option ?</li></ol>`,
a: `<ol><li>Crédit de 50 % × 8 000 = 4 000 €. Il reste 6 000 € dans le plafond de 10 000 €.</li><li>4 000 / 41 % ≈ <strong>9 760 €</strong> de versement PER (sous réserve de son plafond de déduction).</li><li>FIP : risque de perte en capital, blocage 6 à 10 ans. PER : épargne bloquée jusqu'à la retraite (sauf cas de déblocage anticipé, dont l'achat de la résidence principale). Le choix dépend de son horizon et de son projet retraite.</li></ol>` }
],
qcm: [
[1, "Un crédit d'impôt supérieur à l'impôt dû :", ["Est remboursé au contribuable", "Est perdu", "Est reporté sur 5 ans", "Est transformé en déduction"], 0, "C'est la différence essentielle avec une réduction d'impôt."],
[1, "Le taux de réduction pour un don à une association d'intérêt général est de :", ["66 %", "50 %", "75 %", "30 %"], 0, "75 % s'applique jusqu'à 1 000 € pour les organismes d'aide aux personnes en difficulté."],
[1, "L'emploi d'une femme de ménage à domicile ouvre droit à :", ["Un crédit d'impôt de 50 % des dépenses dans la limite d'un plafond", "Une réduction de 66 %", "Une déduction du revenu imposable", "Rien si le foyer n'est pas imposable"], 0, "C'est un crédit : il profite aussi aux foyers non imposables."],
[2, "Le plafond global des niches fiscales de droit commun est de :", ["10 000 € par foyer et par an", "10 000 € par personne", "18 000 € pour tous les dispositifs", "Il n'existe plus"], 0, "18 000 € pour certains investissements outre-mer et les SOFICA."],
[2, "Lequel de ces avantages n'entre PAS dans le plafond des 10 000 € ?", ["La réduction pour dons", "Le crédit pour emploi à domicile", "La réduction IR-PME", "Le crédit pour frais de garde"], 0, "Les dons, les charges déductibles, le Malraux et les monuments historiques sont hors plafond."],
[2, "Pour un enfant majeur étudiant, les parents peuvent :", ["Soit le rattacher au foyer, soit lui verser une pension déductible, mais pas les deux", "Le rattacher et déduire une pension", "Déduire sans limite toutes ses dépenses", "Seulement le rattacher jusqu'à 18 ans"], 0, "Le choix se fait chaque année en comparant les deux options."],
[3, "Un client a 2 500 € d'impôt et investit pour obtenir 3 000 € de réduction IR-PME. Que devient l'excédent ?", ["Il est en principe perdu (sauf report spécifique prévu pour certains dispositifs)", "Il est remboursé", "Il est automatiquement converti en crédit", "Il réduit les prélèvements sociaux"], 0, "Une réduction ne crée pas de remboursement. Certains dispositifs permettent un report de l'excédent, à vérifier."],
[3, "Un client à 11 % de TMI hésite entre une déduction de 5 000 € et une réduction de 1 000 €. Laquelle est la plus avantageuse ?", ["La réduction de 1 000 € (la déduction vaut 550 €)", "La déduction, toujours plus favorable", "Elles se valent", "Impossible à dire sans le taux moyen"], 0, "5 000 × 11 % = 550 € contre 1 000 € de réduction, à condition que l'impôt soit suffisant."],
[3, "Pourquoi ne faut-il jamais présenter un FIP uniquement sous l'angle de la réduction d'impôt ?", ["Parce que le risque de perte en capital et la durée de blocage peuvent effacer l'avantage fiscal", "Parce que la réduction est imposable", "Parce que les FIP sont interdits aux particuliers", "Parce que la réduction n'est accordée qu'à la sortie"], 0, "C'est aussi une exigence de devoir de conseil : adéquation au profil et à l'horizon."]
] },

/* ---------------- M3 ---------------- */
{ id: "placements", title: "Revenus financiers : PFU, barème, PEA, livrets", time: "1 h",
lesson: `
<h3>Le prélèvement forfaitaire unique (« flat tax »)</h3>
<p>Depuis 2018, les intérêts, dividendes et plus-values sur valeurs mobilières sont taxés par défaut au <strong>PFU</strong> : 12,8 % d'impôt sur le revenu + prélèvements sociaux. La <strong>LFSS 2026</strong> a porté la CSG sur la plupart des revenus de placement de 9,2 % à 10,6 % : les prélèvements sociaux passent ainsi de 17,2 % à <strong>18,6 %</strong>, et le PFU de 30 % à <strong>31,4 %</strong>.</p>
<div class="tw"><table><thead><tr><th>Revenus</th><th class="n">Prélèvements sociaux 2026</th><th class="n">PFU global</th></tr></thead><tbody>
<tr><td>Dividendes, intérêts de compte-titres, obligations, comptes à terme, livrets bancaires fiscalisés, plus-values de valeurs mobilières, cryptoactifs, PEA</td><td class="n">18,6 %</td><td class="n">31,4 %</td></tr>
<tr><td>Assurance-vie et contrats de capitalisation</td><td class="n">17,2 %</td><td class="n">30 % (12,8 + 17,2)</td></tr>
<tr><td>Revenus fonciers, plus-values immobilières, PEL/CEL ouverts avant 2018</td><td class="n">17,2 %</td><td class="n">Non concernés par le PFU</td></tr>
<tr><td>Livret A, LDDS, LEP, livret jeune</td><td class="n">0 %</td><td class="n">Exonérés</td></tr>
</tbody></table></div>
<div class="warn"><span class="tag">Calendrier de la hausse</span><p>Pour les revenus de placement (intérêts, dividendes), la hausse vaut pour les revenus 2026, déclarés en 2027. Pour certains revenus du patrimoine, comme les plus-values mobilières, elle s'applique dès les revenus 2025. Le traitement du PER à la sortie dépend du type de contrat : faites-le vérifier par l'assureur ou le teneur de compte.</p></div>

<h3>L'option pour le barème : quand la choisir</h3>
<p>Le contribuable peut renoncer au PFU et opter pour le <strong>barème progressif</strong>. L'option est <strong>globale</strong> (tous les revenus mobiliers et plus-values de l'année) et se fait sur la déclaration. Avantages du barème :</p>
<ul>
<li>Abattement de <strong>40 % sur les dividendes</strong> d'actions françaises et européennes.</li>
<li><strong>CSG déductible</strong> à hauteur de 6,8 % l'année suivante.</li>
<li>Abattements pour durée de détention sur les plus-values de titres acquis avant 2018.</li>
</ul>
<p>Règle pratique : l'option est intéressante pour les foyers à <strong>0 % ou 11 %</strong> de TMI. À 30 % et au-delà, le PFU l'emporte presque toujours.</p>
<div class="ex"><span class="tag">Exemple</span><p>10 000 € de dividendes, TMI 11 %.<br>PFU : 10 000 × 31,4 % = 3 140 €.<br>Barème : IR sur 6 000 € (après abattement de 40 %) × 11 % = 660 € + prélèvements sociaux 1 860 € = 2 520 €, sans compter la CSG déductible l'année suivante. <strong>Option barème gagnante.</strong></p></div>

<h3>Le prélèvement à la source des revenus financiers</h3>
<p>La banque prélève à la source un <strong>acompte de 12,8 %</strong> d'IR (et les prélèvements sociaux) au moment du versement. Les foyers dont le revenu fiscal de référence de l'avant-dernière année est inférieur à 50 000 € (personne seule) ou 75 000 € (couple) pour les dividendes, et 25 000 € / 50 000 € pour les intérêts, peuvent demander une <strong>dispense</strong> avant le 30 novembre pour l'année suivante.</p>

<h3>Plus-values et moins-values de valeurs mobilières</h3>
<p>Plus-value = prix de cession − prix d'acquisition (frais compris). Les moins-values s'imputent sur les plus-values de même nature de l'année et des <strong>10 années suivantes</strong>. Jamais sur le revenu global.</p>

<h3>Le PEA : l'enveloppe actions</h3>
<ul>
<li>Plafond de versements : <strong>150 000 €</strong> (PEA classique) ; 225 000 € au total avec le PEA-PME. Un seul PEA par personne, un PEA « jeune » possible pour un enfant majeur rattaché (20 000 €).</li>
<li>Avant 5 ans : retrait = clôture (sauf exceptions), gain taxé au PFU.</li>
<li>Après 5 ans : gains <strong>exonérés d'IR</strong>, seuls les prélèvements sociaux restent dus (18,6 % sur les gains acquis depuis 2026). Les retraits partiels n'entraînent plus la clôture.</li>
<li>Ce qui compte, c'est la date d'ouverture : ouvrir un PEA tôt avec un petit versement « prend date ».</li>
</ul>

<h3>Compte-titres, épargne réglementée, épargne logement</h3>
<p>Le <strong>compte-titres ordinaire</strong> n'a ni plafond ni avantage fiscal ; il sert pour les titres non éligibles au PEA (actions américaines, obligations) et reste neutre à la transmission (purge des plus-values au décès).</p>
<p>Les <strong>livrets réglementés</strong> (Livret A plafonné à 22 950 €, LDDS 12 000 €, LEP sous conditions de revenus) sont totalement exonérés. Le <strong>PEL</strong> ouvert depuis 2018 est fiscalisé au PFU dès la première année ; ceux ouverts avant 2018 gardent un régime plus favorable sur leurs 12 premières années.</p>
<div class="rdv"><span class="tag">En rendez-vous</span><p>Demandez toujours l'IFU (imprimé fiscal unique) de la banque : il récapitule dividendes, intérêts et cessions de l'année et indique ce qui a déjà été prélevé.</p></div>
`,
keys: [
"PFU 2026 : 31,4 % (12,8 + 18,6) en général ; 30 % pour l'assurance-vie ; foncier et plus-values immobilières restent à 17,2 % de PS.",
"Option barème globale, utile à 0 % ou 11 % de TMI : abattement de 40 % sur dividendes + CSG déductible 6,8 %.",
"PEA : 150 000 € de versements, exonération d'IR après 5 ans, prélèvements sociaux dus.",
"Moins-values mobilières : imputables 10 ans sur des plus-values de même nature uniquement."
],
ex: [
{ t: "Cas Bernard : PFU ou barème ?",
q: `<p>M. et Mme Bernard, retraités, revenu imposable 32 000 € pour 2 parts. Ils perçoivent en 2026 4 000 € de dividendes d'actions françaises sur un compte-titres et 1 500 € d'intérêts d'obligations.</p><ol><li>Quelle est leur TMI ?</li><li>Calculez la fiscalité totale au PFU.</li><li>Calculez-la au barème (sans CSG déductible).</li><li>Que conseillez-vous ?</li></ol>`,
a: `<ol><li>Quotient de 16 000 € avant revenus financiers : TMI 11 %. Avec ~3 900 € de revenus imposables en plus, le quotient reste sous 29 579 € : 11 %.</li><li>PFU : 5 500 × 31,4 % = <strong>1 727 €</strong>.</li><li>Barème : dividendes 4 000 × 60 % = 2 400 € + intérêts 1 500 € = 3 900 € × 11 % = 429 € d'IR. PS : 5 500 × 18,6 % = 1 023 €. Total <strong>1 452 €</strong> (et un peu moins après la CSG déductible).</li><li>Opter pour le barème, en rappelant que l'option vaut pour tous leurs revenus mobiliers de l'année.</li></ol>` }
],
qcm: [
[1, "Le PFU applicable en 2026 aux dividendes d'un compte-titres est de :", ["31,4 %", "30 %", "12,8 %", "17,2 %"], 0, "12,8 % d'IR + 18,6 % de prélèvements sociaux depuis la LFSS 2026."],
[1, "Les intérêts du Livret A sont :", ["Exonérés d'impôt et de prélèvements sociaux", "Soumis au PFU", "Soumis aux seuls prélèvements sociaux", "Imposés au barème"], 0, "Comme le LDDS, le LEP et le livret jeune."],
[1, "Après 5 ans, les gains d'un PEA sont :", ["Exonérés d'IR mais soumis aux prélèvements sociaux", "Totalement exonérés", "Soumis au PFU", "Imposés au barème"], 0, "Seuls les prélèvements sociaux restent dus."],
[1, "Le plafond de versement d'un PEA classique est de :", ["150 000 €", "225 000 €", "100 000 €", "Sans plafond"], 0, "225 000 € est le plafond cumulé PEA + PEA-PME."],
[2, "Quels revenus gardent des prélèvements sociaux à 17,2 % en 2026 ?", ["Assurance-vie, revenus fonciers, plus-values immobilières", "Dividendes et intérêts de compte-titres", "Gains de PEA", "Plus-values sur cryptoactifs"], 0, "La LFSS 2026 a exclu ces revenus de la hausse de CSG."],
[2, "L'option pour le barème progressif sur les revenus mobiliers :", ["Est globale : elle vaut pour tous les revenus et plus-values mobiliers de l'année", "Peut être choisie titre par titre", "Est définitive pour 5 ans", "N'est ouverte qu'aux retraités"], 0, "Il faut donc comparer sur l'ensemble des revenus."],
[2, "L'abattement de 40 % sur les dividendes s'applique :", ["Uniquement en cas d'option pour le barème", "Toujours", "Uniquement au PFU", "Uniquement dans un PEA"], 0, "Au PFU, aucun abattement."],
[2, "Une moins-value de cession d'actions réalisée en 2026 peut s'imputer :", ["Sur les plus-values mobilières de 2026 et des 10 années suivantes", "Sur le revenu global", "Sur les plus-values immobilières", "Uniquement l'année même"], 0, "Jamais sur le revenu global."],
[3, "Un client à 30 % de TMI perçoit 10 000 € de dividendes. Barème ou PFU ?", ["PFU : 3 140 € contre environ 3 660 € au barème (1 800 € d'IR + 1 860 € de PS)", "Barème grâce à l'abattement de 40 %", "Indifférent", "Barème grâce à la CSG déductible qui compense tout"], 0, "6 000 × 30 % = 1 800 € + 1 860 € de PS = 3 660 € ; la CSG déductible ne suffit pas à inverser le résultat."],
[3, "Un retrait partiel sur un PEA de 7 ans entraîne :", ["L'imposition aux seuls prélèvements sociaux sur la quote-part de gains, sans clôture", "La clôture du plan", "L'impossibilité de faire de nouveaux versements dans tous les cas", "Le PFU sur les gains"], 0, "Depuis la loi PACTE, après 5 ans, les retraits partiels ne bloquent plus les versements."],
[3, "Pourquoi conseiller d'ouvrir tôt un PEA, même avec 50 € ?", ["Parce que le délai de 5 ans court à compter de la date d'ouverture", "Parce que le plafond augmente avec l'ancienneté", "Parce que les frais diminuent", "Parce que les dividendes deviennent exonérés de PS"], 0, "C'est la date du premier versement qui compte pour l'antériorité fiscale."],
[3, "Un foyer avec un revenu fiscal de référence de 40 000 € (personne seule) peut :", ["Demander à être dispensé de l'acompte de 12,8 % sur ses dividendes, avant le 30 novembre", "Être exonéré de PFU", "Échapper aux prélèvements sociaux", "Récupérer la CSG non déductible"], 0, "Seuil de 50 000 € (seul) / 75 000 € (couple) pour les dividendes ; l'impôt reste dû à la déclaration."]
] },

/* ---------------- M4 ---------------- */
{ id: "av", title: "L'assurance-vie de son vivant", time: "1 h",
lesson: `
<h3>Le placement préféré des Français, et pourquoi</h3>
<p>L'assurance-vie est un contrat d'assurance, pas un compte : les sommes versées (les <strong>primes</strong>) appartiennent à l'assureur, qui doit les verser à l'assuré ou au bénéficiaire désigné. Trois atouts : souplesse (argent disponible à tout moment), fiscalité qui s'adoucit avec le temps, et cadre successoral à part (module 5). Les fonds sont investis en <strong>fonds en euros</strong> (capital garanti brut de frais, rendement annuel) et/ou en <strong>unités de compte</strong> (OPCVM, SCPI, ETF, private equity) sans garantie.</p>

<h3>Un rachat n'est pas un retrait de gains</h3>
<p>En cas de rachat partiel, seule la <strong>quote-part de gains</strong> contenue dans le rachat est imposable :</p>
<div class="note"><span class="tag">Formule</span><p>Gains imposables = Montant racheté × (Valeur du contrat − Primes versées) ÷ Valeur du contrat</p></div>
<p>Un rachat de 20 000 € sur un contrat de 100 000 € dont 80 000 € de primes contient 20 000 × 20 % = <strong>4 000 € de gains</strong>.</p>

<h3>Fiscalité des rachats (primes versées depuis le 27 septembre 2017)</h3>
<div class="tw"><table><thead><tr><th>Ancienneté du contrat</th><th>Impôt sur le revenu</th><th>Prélèvements sociaux</th></tr></thead><tbody>
<tr><td>Moins de 8 ans</td><td>PFU 12,8 % (ou barème sur option)</td><td>17,2 %</td></tr>
<tr><td>8 ans et plus</td><td>Abattement annuel de 4 600 € (seul) ou 9 200 € (couple), puis 7,5 % jusqu'à 150 000 € de primes nettes, 12,8 % au-delà</td><td>17,2 %</td></tr>
</tbody></table></div>
<p>Les primes versées avant le 27 septembre 2017 gardent l'ancien régime (prélèvement libératoire de 35 %, 15 % puis 7,5 % selon l'ancienneté, ou barème). L'abattement de 4 600 / 9 200 € s'applique tous contrats confondus, chaque année : c'est un outil de <strong>rachats programmés</strong> pour se créer un complément de revenu quasi non fiscalisé.</p>
<div class="note"><span class="tag">Point 2026</span><p>L'assurance-vie et les contrats de capitalisation ont été exclus de la hausse de CSG : leurs prélèvements sociaux restent à 17,2 %, quand la plupart des autres placements passent à 18,6 %. Argument commercial direct face au compte-titres.</p></div>

<h3>Quand sont payés les prélèvements sociaux ?</h3>
<ul>
<li>Sur le <strong>fonds en euros</strong> : chaque année, à l'inscription des intérêts (le contrat « paie au fil de l'eau »).</li>
<li>Sur les <strong>unités de compte</strong> : au moment du rachat ou du dénouement.</li>
<li>Si un contrat finit en perte après des années de prélèvements sur le fonds en euros, l'assureur restitue l'excédent.</li>
</ul>

<h3>Les bons réflexes de gestion</h3>
<ul>
<li><strong>Prendre date</strong> : ouvrir un contrat tôt, même avec un petit versement, fait courir le délai de 8 ans.</li>
<li><strong>Multiplier les contrats</strong> plutôt que tout mettre sur un seul : plus de souplesse (bénéficiaires différents, ancienneté, gestion).</li>
<li><strong>Arbitrer</strong> entre supports à l'intérieur du contrat ne déclenche aucune imposition, contrairement au compte-titres.</li>
<li>Préférer l'<strong>avance</strong> (prêt de l'assureur) au rachat pour un besoin temporaire : pas d'imposition, mais des intérêts à payer.</li>
<li>Le transfert d'un contrat vers un autre assureur fait perdre l'antériorité, sauf transfert interne au même assureur (loi PACTE).</li>
</ul>

<h3>Contrat de capitalisation : le cousin transmissible</h3>
<p>Fiscalité identique à l'assurance-vie de son vivant, mais pas de bénéficiaire désigné : au décès, le contrat entre dans la succession <strong>avec son antériorité</strong>. Il peut être donné (souvent en nue-propriété). Il est retenu pour sa seule valeur de rachat... et il est taxable à l'IFI uniquement s'il porte des supports immobiliers.</p>
<div class="rdv"><span class="tag">En rendez-vous</span><p>Demandez la date d'ouverture, le montant des primes versées avant/après 70 ans et la clause bénéficiaire de chaque contrat. Ces trois données décident de presque tout.</p></div>
`,
keys: [
"Gains imposables d'un rachat = rachat × (valeur − primes) / valeur.",
"Après 8 ans : abattement 4 600 € / 9 200 €, puis 7,5 % (jusqu'à 150 000 € de primes) ou 12,8 %, plus 17,2 % de PS.",
"Assurance-vie exclue de la hausse de CSG 2026 : PS maintenus à 17,2 %.",
"Arbitrages internes non imposés ; avance plutôt que rachat pour un besoin temporaire."
],
ex: [
{ t: "Cas Moreau : rachat sur un contrat de 12 ans",
q: `<p>Mme Moreau, veuve, a un contrat de 12 ans : valeur 200 000 €, primes 150 000 € (toutes versées après 2017), 100 % fonds en euros. Elle rachète 40 000 € pour aider son fils. Elle n'a fait aucun autre rachat dans l'année.</p><ol><li>Quel est le montant de gains contenu dans le rachat ?</li><li>Quel IR paiera-t-elle ?</li><li>Doit-elle des prélèvements sociaux sur ce rachat ?</li></ol>`,
a: `<ol><li>Gains = 40 000 × 50 000 / 200 000 = <strong>10 000 €</strong>.</li><li>Abattement de 4 600 € → 5 400 € taxables à 7,5 % (primes ≤ 150 000 €) = <strong>405 €</strong>.</li><li>Non : sur un fonds en euros, les PS ont déjà été prélevés chaque année. Ils seraient dus au rachat sur des unités de compte.</li></ol><p>Remarque : pour un don à son fils, elle pourrait aussi envisager un don familial de somme d'argent (module 11).</p>` }
],
qcm: [
[1, "En cas de rachat partiel, ce qui est imposable, c'est :", ["La quote-part de gains contenue dans le rachat", "La totalité du rachat", "Uniquement les primes", "Rien avant 8 ans"], 0, "Formule : rachat × gains / valeur du contrat."],
[1, "L'abattement annuel après 8 ans pour un couple marié est de :", ["9 200 €", "4 600 €", "152 500 €", "30 500 €"], 0, "4 600 € pour une personne seule ; les deux autres chiffres concernent le décès."],
[1, "Un arbitrage du fonds en euros vers une unité de compte à l'intérieur du contrat :", ["N'est pas imposable", "Est imposé au PFU", "Fait perdre l'antériorité", "Est soumis aux PS de 18,6 %"], 0, "C'est un avantage majeur face au compte-titres."],
[2, "Un contrat de 10 ans, primes de 100 000 € : quel taux d'IR sur les gains après abattement ?", ["7,5 %", "12,8 %", "30 %", "0 %"], 0, "7,5 % tant que les primes nettes ne dépassent pas 150 000 € (tous contrats)."],
[2, "En 2026, les prélèvements sociaux sur l'assurance-vie sont de :", ["17,2 %", "18,6 %", "9,2 %", "12,8 %"], 0, "L'assurance-vie a été exclue de la hausse de CSG prévue par la LFSS 2026."],
[2, "Sur un fonds en euros, les prélèvements sociaux sont prélevés :", ["Chaque année lors de l'inscription des intérêts", "Uniquement au rachat", "Uniquement au décès", "Jamais"], 0, "Sur les unités de compte, ils sont prélevés au rachat."],
[2, "Pourquoi ouvrir un contrat d'assurance-vie avec 100 € pour un client de 35 ans ?", ["Pour faire courir le délai fiscal de 8 ans", "Pour bénéficier d'un taux garanti à vie", "Pour éviter l'IFI", "Pour obtenir une réduction d'impôt"], 0, "On parle de « prendre date »."],
[3, "Valeur 300 000 €, primes 240 000 €, rachat de 30 000 € : montant des gains ?", ["6 000 €", "30 000 €", "60 000 €", "3 000 €"], 0, "30 000 × 60 000 / 300 000 = 6 000 €."],
[3, "Un client de 66 ans a besoin de 20 000 € pendant 18 mois en attendant la vente d'un bien. Meilleure solution sur son contrat ?", ["Une avance de l'assureur", "Un rachat total", "Un transfert vers un autre assureur", "La renonciation au contrat"], 0, "L'avance n'est pas un rachat : pas d'imposition, et le contrat continue de travailler."],
[3, "Au décès du souscripteur, un contrat de capitalisation :", ["Entre dans la succession et peut être conservé par les héritiers avec son antériorité", "Est versé à un bénéficiaire désigné hors succession", "Est automatiquement racheté et taxé au PFU", "Est exonéré de droits"], 0, "C'est sa différence avec l'assurance-vie, et son intérêt pour la donation."]
] },

/* ---------------- M5 ---------------- */
{ id: "avdeces", title: "L'assurance-vie au décès : 990 I, 757 B, clause bénéficiaire", time: "1 h",
lesson: `
<h3>Le principe : hors succession civile</h3>
<p>Le capital décès d'une assurance-vie est versé au bénéficiaire désigné <strong>en dehors de la succession</strong> (article L132-12 du code des assurances). Il n'est soumis ni aux règles de la réserve héréditaire ni au rapport, sauf primes « manifestement exagérées » au regard de l'âge, du patrimoine et des revenus du souscripteur. Fiscalement, il suit un régime propre qui dépend de <strong>l'âge du souscripteur au moment de chaque versement</strong>.</p>

<h3>Primes versées avant 70 ans : article 990 I</h3>
<ul>
<li>Abattement de <strong>152 500 € par bénéficiaire</strong>, tous contrats confondus (pour un même assuré).</li>
<li>Au-delà : prélèvement de <strong>20 %</strong> jusqu'à 700 000 € (soit 852 500 € reçus), puis <strong>31,25 %</strong>.</li>
<li>L'assiette comprend les primes <strong>et les gains</strong>.</li>
</ul>
<h3>Primes versées après 70 ans : article 757 B</h3>
<ul>
<li>Abattement global de <strong>30 500 €</strong>, partagé entre tous les bénéficiaires, tous contrats confondus.</li>
<li>Au-delà, les <strong>primes</strong> sont soumises aux droits de succession classiques, selon le lien de parenté (avec les abattements de succession encore disponibles).</li>
<li>Les <strong>gains sont totalement exonérés</strong>, quel que soit leur montant.</li>
</ul>
<p>Le conjoint et le partenaire de PACS sont <strong>totalement exonérés</strong> dans les deux régimes, tout comme pour la succession.</p>
<div class="ex"><span class="tag">Exemple 990 I</span><p>Mme L. a versé 300 000 € avant 70 ans. À son décès, le contrat vaut 400 000 €, partagé entre ses deux enfants.<br>Chacun reçoit 200 000 € − 152 500 € = 47 500 € taxés à 20 % = <strong>9 500 € par enfant</strong>.</p></div>
<div class="ex"><span class="tag">Exemple 757 B</span><p>M. P. a versé 100 000 € à 75 ans ; au décès le contrat vaut 130 000 €. Deux enfants bénéficiaires.<br>Primes taxables : 100 000 − 30 500 = 69 500 €, soit 34 750 € par enfant, qui s'imputent sur leur abattement de succession de 100 000 € (s'il n'a pas été consommé). Gains de 30 000 € exonérés. <strong>Droits : 0 €</strong> si les abattements sont disponibles.</p></div>
<div class="note"><span class="tag">Le réflexe après 70 ans</span><p>Le 757 B reste intéressant : les gains capitalisés pendant 15 ou 20 ans échappent totalement aux droits. Pour un client de 72 ans en bonne santé, verser sur une assurance-vie reste souvent préférable à un compte-titres.</p></div>

<h3>La clause bénéficiaire : là où se joue tout</h3>
<p>La clause standard (« mon conjoint, à défaut mes enfants nés ou à naître, vivants ou représentés, par parts égales, à défaut mes héritiers ») convient à beaucoup, pas à tous. Points de vigilance :</p>
<ul>
<li><strong>Familles recomposées</strong> : « mes enfants » vise tous les enfants du souscripteur, pas ceux du conjoint. Nommer précisément.</li>
<li><strong>Concubin</strong> : bénéficiaire possible, mais taxé à 60 % pour la part 757 B au-delà de 30 500 €. Pour le 990 I, il bénéficie des 152 500 € comme tout le monde.</li>
<li><strong>Clause démembrée</strong> : usufruit au conjoint, nue-propriété aux enfants. Le conjoint perçoit le capital en quasi-usufruit (il peut le dépenser) et les enfants détiennent une <strong>créance de restitution</strong> déductible de la succession du conjoint. Outil puissant de transmission en deux temps.</li>
<li><strong>Acceptation</strong> du bénéficiaire : elle nécessite l'accord du souscripteur et bloque ensuite les rachats et changements de clause sans son accord. À éviter en général.</li>
<li><strong>Clause par testament</strong> : possible, mais l'assureur doit en être informé.</li>
</ul>

<h3>Répartition 990 I : le démembrement</h3>
<p>En cas de clause démembrée, l'abattement de 152 500 € et la taxation se répartissent entre usufruitier (exonéré s'il est conjoint) et nus-propriétaires selon le barème fiscal de l'usufruit (article 669 du CGI, module 11).</p>

<h3>Ce qu'il faut demander et vérifier</h3>
<ol>
<li>Primes versées avant / après 70 ans, contrat par contrat.</li>
<li>Rédaction exacte des clauses bénéficiaires (les relire tous les 5 ans ou à chaque événement familial).</li>
<li>Proportion de l'assurance-vie dans le patrimoine (risque de primes manifestement exagérées si l'assurance-vie sert à déshériter).</li>
</ol>
<div class="warn"><span class="tag">Piège</span><p>Les abattements 990 I et 757 B ne sont pas les mêmes : 152 500 € <strong>par bénéficiaire</strong> d'un côté, 30 500 € <strong>pour tous les bénéficiaires</strong> de l'autre. Les confondre est l'erreur la plus fréquente en entretien.</p></div>
`,
keys: [
"Avant 70 ans (990 I) : 152 500 € par bénéficiaire, puis 20 % jusqu'à 700 000 € et 31,25 % au-delà, primes + gains.",
"Après 70 ans (757 B) : 30 500 € pour tous les bénéficiaires sur les primes, droits de succession au-delà, gains exonérés.",
"Conjoint et partenaire de PACS : totalement exonérés.",
"Clause démembrée : quasi-usufruit du conjoint + créance de restitution déductible pour les enfants."
],
ex: [
{ t: "Cas Garnier : répartir 600 000 €",
q: `<p>M. Garnier, 63 ans, veuf, 3 enfants, détient 600 000 € de liquidités. Il veut transmettre le plus possible sans droits. Ses enfants n'ont jamais reçu de donation.</p><ol><li>Combien peut-il transmettre sans aucun droit via l'assurance-vie avant 70 ans ?</li><li>Que reste-t-il comme abattement de succession par enfant ?</li><li>Que suggérer en plus pour un petit-enfant ?</li></ol>`,
a: `<ol><li>3 × 152 500 = <strong>457 500 €</strong> (primes + gains au jour du décès).</li><li>Les abattements 990 I et de succession sont indépendants : chaque enfant garde ses <strong>100 000 €</strong> d'abattement de succession, utilisables aussi en donation (renouvelables tous les 15 ans).</li><li>Désigner un petit-enfant comme bénéficiaire d'un contrat lui ouvre un abattement de 152 500 € de plus. Il peut aussi utiliser le don familial de somme d'argent de 31 865 €.</li></ol>` }
],
qcm: [
[1, "L'abattement par bénéficiaire pour les primes versées avant 70 ans est de :", ["152 500 €", "30 500 €", "100 000 €", "159 325 €"], 0, "Article 990 I du CGI."],
[1, "Le conjoint survivant bénéficiaire d'une assurance-vie est :", ["Totalement exonéré", "Taxé à 20 % au-delà de 152 500 €", "Taxé selon le barème en ligne directe", "Taxé à 31,25 %"], 0, "Même chose pour le partenaire de PACS."],
[1, "Ce qui compte pour choisir entre 990 I et 757 B, c'est :", ["L'âge du souscripteur au moment de chaque versement", "L'âge du bénéficiaire", "L'âge du souscripteur au décès", "La date d'ouverture du contrat"], 0, "Un même contrat peut contenir des primes des deux régimes."],
[2, "Après 70 ans, les gains produits par les primes sont :", ["Exonérés de droits", "Taxés à 20 %", "Taxés selon le lien de parenté", "Soumis au PFU"], 0, "Seules les primes au-delà de 30 500 € entrent dans les droits de succession."],
[2, "L'abattement de 30 500 € du 757 B s'apprécie :", ["Globalement pour tous les bénéficiaires et tous les contrats d'un même assuré", "Par bénéficiaire", "Par contrat", "Par an"], 0, "C'est la grande différence avec les 152 500 € par bénéficiaire du 990 I."],
[2, "Quel est le taux appliqué entre 152 500 € et 852 500 € reçus par un bénéficiaire (990 I) ?", ["20 %", "31,25 %", "45 %", "12,8 %"], 0, "31,25 % s'applique au-delà de 700 000 € taxables."],
[2, "L'acceptation de la clause par le bénéficiaire :", ["Bloque rachats et changements de clause sans son accord", "Est obligatoire pour valider la clause", "Réduit la fiscalité", "Rend le contrat insaisissable par le fisc"], 0, "Elle requiert l'accord du souscripteur et le prive d'une partie de sa liberté."],
[3, "Avec une clause démembrée (usufruit conjoint, nue-propriété enfants), le conjoint :", ["Perçoit le capital en quasi-usufruit, les enfants détenant une créance de restitution", "Ne perçoit que les intérêts annuels", "Est imposé à 20 %", "Doit partager le capital immédiatement"], 0, "La créance est déductible de la succession du conjoint survivant : double effet favorable."],
[3, "Une cliente veut désigner son concubin. Sur des primes versées à 75 ans (200 000 €), quelle fiscalité ?", ["Droits de succession à 60 % sur la part des primes au-delà de 30 500 € (après abattement de 1 594 €)", "Exonération totale", "20 % après 152 500 €", "Prélèvements sociaux uniquement"], 0, "Le concubin est un tiers : 60 %. Le PACS ou le mariage changerait tout."],
[3, "Un client de 85 ans verse 90 % de son patrimoine sur une assurance-vie au profit d'un seul de ses enfants. Le risque principal ?", ["Requalification des primes en « manifestement exagérées » et réintégration dans la succession", "Taxation au PFU", "Nullité automatique du contrat", "Aucun risque, l'assurance-vie est hors succession"], 0, "Les tribunaux apprécient l'âge, la situation patrimoniale et l'utilité de l'opération."]
] },

/* ---------------- M6 ---------------- */
{ id: "per", title: "Épargne retraite : le PER sans fausse promesse", time: "45 min",
lesson: `
<h3>Le principe : déduire aujourd'hui, payer demain</h3>
<p>Le Plan d'épargne retraite (PER), créé par la loi PACTE en 2019, réunit les anciens PERP, Madelin, Article 83 et PERCO. Il existe en version <strong>individuelle</strong> (assurantielle ou compte-titres) et <strong>entreprise</strong> (collectif ou obligatoire). Les versements volontaires sont, par défaut, <strong>déductibles du revenu imposable</strong>. En contrepartie, la sortie est imposée. La logique gagnante : <strong>TMI élevée à l'entrée, TMI plus basse à la sortie</strong>.</p>

<h3>Le plafond de déduction</h3>
<ul>
<li><strong>Salariés</strong> : 10 % des revenus professionnels nets de l'année précédente, dans la limite de 8 plafonds annuels de la Sécurité sociale (PASS), avec un minimum de 10 % du PASS. Pour les versements 2026 : environ 4 710 € minimum et 37 680 € maximum.</li>
<li><strong>Indépendants</strong> : plafond spécifique plus élevé (10 % du bénéfice jusqu'à 8 PASS + 15 % de la fraction entre 1 et 8 PASS).</li>
<li>Le plafond disponible figure sur l'<strong>avis d'imposition</strong>. Les époux et partenaires de PACS peuvent mutualiser leurs plafonds.</li>
</ul>
<div class="note"><span class="tag">Nouveautés LF 2026</span><p>Les plafonds non utilisés sont désormais reportables sur <strong>5 ans</strong> (contre 3 auparavant). Les versements effectués <strong>après le 70e anniversaire</strong> ne sont plus déductibles depuis le 1er janvier 2026.</p></div>

<h3>Combien ça rapporte vraiment</h3>
<div class="tw"><table><thead><tr><th>TMI</th><th class="n">Économie pour 10 000 € versés</th><th class="n">Effort réel</th></tr></thead><tbody>
<tr><td>11 %</td><td class="n">1 100 €</td><td class="n">8 900 €</td></tr>
<tr><td>30 %</td><td class="n">3 000 €</td><td class="n">7 000 €</td></tr>
<tr><td>41 %</td><td class="n">4 100 €</td><td class="n">5 900 €</td></tr>
<tr><td>45 %</td><td class="n">4 500 €</td><td class="n">5 500 €</td></tr>
</tbody></table></div>

<h3>Disponibilité : un placement bloqué, avec des portes de sortie</h3>
<p>Les sommes sont bloquées jusqu'au départ à la retraite. Cas de déblocage anticipé : <strong>achat de la résidence principale</strong> (sauf versements obligatoires d'entreprise), décès du conjoint ou du partenaire, invalidité, surendettement, fin de droits au chômage, cessation d'activité après liquidation judiciaire.</p>

<h3>La sortie : capital ou rente</h3>
<div class="tw"><table><thead><tr><th>Sortie (versements déduits)</th><th>Part « versements »</th><th>Part « gains »</th></tr></thead><tbody>
<tr><td>En capital</td><td>Barème de l'IR, sans abattement de 10 %</td><td>PFU 12,8 % + prélèvements sociaux</td></tr>
<tr><td>En rente viagère</td><td colspan="2">Rente imposée comme une pension (barème après abattement de 10 %) + PS sur une fraction selon l'âge</td></tr>
<tr><td>Déblocage anticipé pour la résidence principale</td><td>Barème</td><td>PFU</td></tr>
<tr><td>Accident de la vie (invalidité, décès du conjoint…)</td><td>Exonérée d'IR</td><td>Exonérée d'IR, PS dus</td></tr>
</tbody></table></div>
<p>Si le client a choisi de <strong>ne pas déduire</strong> ses versements, seule la part de gains est imposée à la sortie. Utile pour un client à 0 % ou 11 %.</p>
<div class="warn"><span class="tag">Erreur de conseil fréquente</span><p>Sortir 150 000 € en capital la même année peut faire grimper le client dans les tranches à 30 % ou 41 %. On fractionne la sortie sur plusieurs années, en commençant l'année du départ en retraite, quand les revenus chutent.</p></div>

<h3>Le PER au décès</h3>
<p>Un PER assurantiel suit les règles de l'assurance-vie : <strong>990 I</strong> si l'assuré décède avant 70 ans, <strong>757 B</strong> s'il décède après (les règles s'apprécient ici selon l'âge au décès). Le PER compte-titres tombe dans la succession. Pour un client âgé, le PER assurantiel est donc préférable.</p>

<h3>Pour qui ?</h3>
<ul>
<li>Idéal : cadre ou indépendant à 30 % ou plus, 10 à 20 ans avant la retraite, qui anticipe une baisse de revenus.</li>
<li>Peu adapté : TMI à 11 %, besoin de liquidité, projet immobilier imminent incertain, client de plus de 70 ans (plus de déduction).</li>
</ul>
`,
keys: [
"Plafond salarié : 10 % des revenus pro N-1 (min ≈ 4 710 €, max ≈ 37 680 € pour 2026), reportable 5 ans depuis la LF 2026.",
"Plus aucune déduction pour les versements après 70 ans (depuis le 1er janvier 2026).",
"Sortie en capital : versements au barème, gains au PFU ; fractionner la sortie.",
"Déblocage anticipé possible pour l'achat de la résidence principale."
],
ex: [
{ t: "Cas Petit : faut-il verser ?",
q: `<p>Mme Petit, 52 ans, célibataire, revenu net imposable 78 000 €, plafond PER disponible 24 000 € (dont reports). Elle veut partir à la retraite à 64 ans avec une pension estimée à 2 600 € net par mois.</p><ol><li>Quelle est sa TMI aujourd'hui ?</li><li>Si elle verse 8 000 €, quel est son gain fiscal ?</li><li>Quelle TMI probable à la retraite, et que conclure ?</li><li>Combien peut-elle verser au maximum sans qu'une partie de la déduction ne « tombe » à 11 % ?</li></ol>`,
a: `<ol><li>78 000 € (1 part) : <strong>30 %</strong>.</li><li>8 000 × 30 % = <strong>2 400 €</strong>.</li><li>Pension annuelle ≈ 31 200 €, soit environ 28 000 € imposables après abattement : TMI de <strong>11 %</strong>. L'écart 30 % / 11 % rend le PER pertinent, surtout si la sortie est étalée.</li><li>Revenu − seuil de 29 579 € = 48 421 € : tout le plafond disponible (24 000 €) se déduit à 30 %.</li></ol>` }
],
qcm: [
[1, "Les versements volontaires sur un PER sont par défaut :", ["Déductibles du revenu imposable dans la limite d'un plafond", "Générateurs d'une réduction d'impôt de 25 %", "Exonérés de toute imposition à la sortie", "Plafonnés à 10 000 € par an pour tous"], 0, "C'est une charge déductible, qui vaut donc montant × TMI."],
[1, "Le plafond de déduction disponible d'un salarié figure :", ["Sur son avis d'imposition", "Sur sa fiche de paie", "Sur le relevé annuel de son PER", "Nulle part, il faut le calculer"], 0, "L'avis indique le plafond de l'année et les reports."],
[1, "Peut-on débloquer un PER pour acheter sa résidence principale ?", ["Oui, sauf pour les versements obligatoires d'entreprise", "Non, jamais", "Oui, uniquement après 60 ans", "Uniquement pour une résidence secondaire"], 0, "C'est un cas de déblocage anticipé majeur."],
[2, "Depuis la LF 2026, les plafonds non utilisés sont reportables sur :", ["5 ans", "3 ans", "10 ans", "1 an"], 0, "Le report est passé de 3 à 5 ans."],
[2, "Un client de 72 ans verse 20 000 € sur son PER en 2026. Que se passe-t-il ?", ["Les versements ne sont plus déductibles après 70 ans", "Il déduit 20 000 €", "Il obtient une réduction de 20 %", "Le versement est refusé"], 0, "La LF 2026 a supprimé la déduction des versements effectués après 70 ans."],
[2, "Sortie en capital d'un PER alimenté par des versements déduits : la part « versements » est imposée :", ["Au barème de l'IR, sans abattement de 10 %", "Au PFU", "Elle est exonérée", "À 7,5 %"], 0, "Les gains, eux, sont soumis au PFU et aux PS."],
[2, "Un client à 45 % de TMI verse 10 000 €. Effort d'épargne réel ?", ["5 500 €", "4 500 €", "10 000 €", "7 000 €"], 0, "Économie de 4 500 €, donc 5 500 € d'effort net."],
[3, "Pourquoi déconseiller une sortie en capital unique de 200 000 € l'année suivant le départ en retraite ?", ["Le capital s'ajoute aux revenus et peut faire passer le client dans les tranches à 30 % ou 41 %", "Parce que le capital est taxé à 45 % d'office", "Parce que la sortie en capital est interdite", "Parce qu'elle entraîne la perte de la pension"], 0, "On fractionne pour lisser la progressivité."],
[3, "Au décès d'un assuré de 74 ans, son PER assurantiel est taxé selon :", ["Le régime de l'article 757 B (décès après 70 ans)", "Le régime de l'article 990 I", "Le PFU", "Il est exonéré"], 0, "Pour le PER, c'est l'âge au décès qui compte, et non l'âge au versement."],
[3, "Un client à 11 % de TMI tient à un PER pour sa retraite. Quelle option conseiller ?", ["Renoncer à la déduction des versements, pour ne taxer que les gains à la sortie", "Déduire au maximum", "Ouvrir un PER compte-titres pour éviter l'impôt", "Attendre 70 ans"], 0, "L'option de non-déduction se prend au moment du versement."]
] },

/* ---------------- M7 ---------------- */
{ id: "foncier", title: "Location nue : revenus fonciers, déficit, statut Jeanbrun", time: "1 h",
lesson: `
<h3>Deux régimes : micro-foncier et réel</h3>
<div class="tw"><table><thead><tr><th></th><th>Micro-foncier</th><th>Régime réel</th></tr></thead><tbody>
<tr><td>Accès</td><td>Loyers bruts ≤ 15 000 € par an (tous biens nus)</td><td>De droit au-delà ; sur option sinon (engagement 3 ans)</td></tr>
<tr><td>Calcul</td><td>Abattement forfaitaire de 30 %</td><td>Loyers − charges réelles</td></tr>
<tr><td>Déficit</td><td>Impossible</td><td>Possible et imputable</td></tr>
<tr><td>Intérêt</td><td>Simplicité, bien acheté comptant</td><td>Crédit, travaux, charges supérieures à 30 %</td></tr>
</tbody></table></div>
<p>Les revenus fonciers nets sont soumis au <strong>barème de l'IR</strong> et aux <strong>prélèvements sociaux de 17,2 %</strong> (épargnés par la hausse de CSG 2026). Un client à 30 % de TMI paie donc 47,2 % sur ses revenus fonciers nets : c'est l'un des revenus les plus taxés en France.</p>

<h3>Les charges déductibles au réel</h3>
<ul>
<li>Intérêts d'emprunt, frais de dossier, assurance emprunteur.</li>
<li>Travaux d'entretien, de réparation et d'amélioration (pas les travaux de construction, reconstruction ou agrandissement).</li>
<li>Taxe foncière (hors taxe d'enlèvement des ordures ménagères refacturée), charges de copropriété non récupérables.</li>
<li>Primes d'assurance (PNO, loyers impayés), frais de gestion, forfait de 20 € par local.</li>
</ul>

<h3>Le déficit foncier : l'outil fiscal le plus utilisé</h3>
<p>Si les charges dépassent les loyers, le déficit :</p>
<ol>
<li>S'impute sur le <strong>revenu global</strong> dans la limite de <strong>10 700 € par an</strong> — pour la part provenant des charges <strong>autres que les intérêts</strong> d'emprunt ;</li>
<li>Pour le surplus et la part liée aux intérêts : se reporte sur les revenus fonciers des <strong>10 années suivantes</strong>.</li>
</ol>
<p>Le plafond est porté à <strong>21 400 €</strong> pour les travaux de rénovation énergétique qui font passer un logement d'une classe E, F ou G à une classe A à D, payés jusqu'au 31 décembre 2027. Condition : le bien doit rester loué nu jusqu'au 31 décembre de la troisième année suivant l'imputation, sinon reprise.</p>
<div class="ex"><span class="tag">Exemple</span><p>Loyers 12 000 €, intérêts 4 000 €, travaux 25 000 €, autres charges 2 000 €.<br>Les loyers couvrent d'abord les intérêts : 12 000 − 4 000 = 8 000 €. Il reste 27 000 € de charges hors intérêts : déficit de <strong>19 000 €</strong>, entièrement issu de charges hors intérêts.<br>Imputation sur le revenu global : 10 700 € (économie à 30 % : 3 210 €). Report sur 10 ans : 8 300 €.<br>Si les travaux sont énergétiques et font passer le bien de F à C : imputation de 19 000 € (dans la limite de 21 400 €).</p></div>

<h3>Le statut du bailleur privé (« dispositif Jeanbrun »)</h3>
<p>Créé par l'article 47 de la loi de finances pour 2026, il remplace le Pinel (éteint fin 2024) par une logique d'<strong>amortissement</strong> en location nue :</p>
<ul>
<li>Pour les acquisitions et permis de construire entre le <strong>21 février 2026 et le 31 décembre 2028</strong>.</li>
<li>Logement neuf, ou ancien avec au moins 30 % de travaux.</li>
<li>Engagement de location nue pendant <strong>9 ans</strong>, en résidence principale, avec <strong>plafonds de loyers et de ressources</strong> ; location à un proche interdite.</li>
<li>Amortissement annuel calculé sur <strong>80 % du prix</strong> (part terrain exclue) : 3,5 % en loyer intermédiaire dans le neuf (taux de l'ordre de 3 % dans l'ancien), 4,5 % en social, 5,5 % en très social.</li>
<li>Plafond d'amortissement : <strong>8 000 €</strong> par foyer et par an (10 000 € social, 12 000 € très social).</li>
<li>Le déficit créé s'impute sur le revenu global dans la limite de 10 700 €. Le dispositif est <strong>hors plafond des niches</strong>.</li>
<li>Non cumulable, pour un même bien, avec Pinel, Denormandie, Malraux, monuments historiques ou déficit foncier « classique ».</li>
</ul>
<div class="ex"><span class="tag">Exemple</span><p>Appartement neuf de 250 000 € en loyer intermédiaire : base 200 000 € × 3,5 % = <strong>7 000 €</strong> d'amortissement par an, sous le plafond de 8 000 €. Au-delà d'environ 285 700 € de prix, le plafond limite l'avantage.</p></div>
<div class="warn"><span class="tag">À suivre</span><p>Le projet de loi « Relance et décentralisation du logement », adopté au Sénat en juillet 2026 et attendu en séance à l'Assemblée mi-novembre 2026, prévoit d'assouplir certaines conditions du statut. Plusieurs décrets d'application restaient attendus à l'été 2026. Vérifiez l'état du texte avant de conseiller.</p></div>

<h3>Autres dispositifs à connaître (sans plus)</h3>
<ul>
<li><strong>Malraux</strong> : réduction de 22 % ou 30 % des travaux de restauration en secteur protégé, hors plafond des niches.</li>
<li><strong>Monuments historiques</strong> : charges déductibles sans limite du revenu global, conservation 15 ans.</li>
<li><strong>Loc'Avantages</strong> : réduction d'impôt pour location à loyer réduit conventionnée avec l'Anah.</li>
</ul>
`,
keys: [
"Micro-foncier : loyers ≤ 15 000 €, abattement 30 %. Revenus fonciers : barème + 17,2 % de PS.",
"Déficit foncier : 10 700 € sur le revenu global (hors intérêts), 21 400 € pour une rénovation énergétique sortant de E/F/G vers A-D jusqu'à fin 2027 ; report 10 ans.",
"Statut Jeanbrun : amortissement sur 80 % du prix, 3,5 % à 5,5 %, plafond 8 000 à 12 000 €, engagement 9 ans, acquisitions du 21/02/2026 au 31/12/2028.",
"Garder le bien loué jusqu'au 31/12 de la 3e année après imputation du déficit."
],
ex: [
{ t: "Cas Roux : micro ou réel ?",
q: `<p>M. Roux, TMI 30 %, loue un T2 nu 9 600 € par an. Charges : intérêts 2 800 €, taxe foncière 900 €, copropriété non récupérable 700 €, assurance PNO 150 €, travaux de peinture 1 200 €.</p><ol><li>Revenu imposable au micro-foncier ?</li><li>Revenu imposable au réel ?</li><li>Quelle économie annuelle avec le réel (IR + PS) ?</li></ol>`,
a: `<ol><li>9 600 × 70 % = <strong>6 720 €</strong>.</li><li>Charges : 2 800 + 900 + 700 + 150 + 1 200 + 20 (forfait) = 5 770 € → 9 600 − 5 770 = <strong>3 830 €</strong>.</li><li>Écart de base : 2 890 € × 47,2 % ≈ <strong>1 364 €</strong> par an. Le réel s'impose (engagement de 3 ans).</li></ol>` }
],
qcm: [
[1, "Le micro-foncier est accessible jusqu'à combien de loyers bruts annuels ?", ["15 000 €", "77 700 €", "10 700 €", "23 000 €"], 0, "Au-delà, le régime réel est obligatoire."],
[1, "L'abattement forfaitaire du micro-foncier est de :", ["30 %", "50 %", "40 %", "10 %"], 0, "Le réel est intéressant si les charges réelles dépassent 30 % des loyers."],
[1, "Les revenus fonciers supportent en 2026 des prélèvements sociaux de :", ["17,2 %", "18,6 %", "9,2 %", "Aucun"], 0, "Ils ont été exclus de la hausse de CSG."],
[2, "Le déficit foncier imputable chaque année sur le revenu global est plafonné (cas général) à :", ["10 700 €", "21 400 €", "15 300 €", "Sans plafond"], 0, "21 400 € pour certains travaux de rénovation énergétique jusqu'à fin 2027."],
[2, "La part du déficit foncier provenant des intérêts d'emprunt :", ["Ne s'impute que sur les revenus fonciers des 10 années suivantes", "S'impute sur le revenu global sans limite", "Est perdue", "S'impute sur le revenu global dans la limite de 10 700 €"], 0, "Seules les charges hors intérêts alimentent l'imputation sur le revenu global."],
[2, "Après avoir imputé un déficit foncier sur son revenu global, le bailleur doit :", ["Maintenir le bien en location jusqu'au 31 décembre de la 3e année suivante", "Le louer 9 ans", "Le vendre dans les 5 ans", "Le transformer en meublé"], 0, "À défaut, le déficit imputé est réintégré."],
[2, "Le statut Jeanbrun repose sur :", ["Un amortissement déductible des revenus fonciers", "Une réduction d'impôt comme le Pinel", "Un crédit d'impôt", "Une exonération de plus-value"], 0, "C'est le grand changement par rapport au Pinel."],
[3, "Statut Jeanbrun : appartement neuf de 300 000 €, loyer intermédiaire. Amortissement déductible ?", ["8 000 € (plafond ; le calcul théorique donne 8 400 €)", "10 500 €", "8 400 €", "12 000 €"], 0, "300 000 × 80 % × 3,5 % = 8 400 €, plafonné à 8 000 € en loyer intermédiaire."],
[3, "Un bailleur réalise 30 000 € de travaux énergétiques (F → C), loyers 10 000 €, pas d'emprunt. Imputation possible sur le revenu global ?", ["20 000 € (dans la limite de 21 400 €)", "10 700 €", "30 000 €", "0 €"], 0, "Déficit = 20 000 € ; le plafond doublé de 21 400 € s'applique jusqu'à fin 2027."],
[3, "Un client à 41 % de TMI, revenus fonciers nets de 10 000 €. Coût fiscal total ?", ["5 820 € (41 % + 17,2 %)", "4 100 €", "3 140 €", "1 720 €"], 0, "Les revenus fonciers sont parmi les plus taxés : 58,2 % au total."]
] }

  ]
});
