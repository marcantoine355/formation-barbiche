/* Formation 1 — Fiscalité du patrimoine (partie 2 : modules 8 à 14) */
(function(){
const f = window.FB.formations.find(x => x.id === "fisc");
f.modules.push(

/* ---------------- M8 ---------------- */
{ id: "meuble", title: "Location meublée (LMNP/LMP) et SCI", time: "1 h",
lesson: `
<h3>Le meublé relève des BIC, pas des revenus fonciers</h3>
<p>Louer un logement meublé (mobilier listé par décret : literie, plaques, réfrigérateur, vaisselle…) est une activité commerciale au sens fiscal. Les loyers sont des <strong>bénéfices industriels et commerciaux (BIC)</strong>. Deux statuts :</p>
<ul>
<li><strong>LMNP</strong> (loueur non professionnel) : cas général.</li>
<li><strong>LMP</strong> (professionnel) : recettes meublées <strong>supérieures à 23 000 €</strong> par an <strong>et</strong> supérieures aux autres revenus d'activité du foyer. Les deux conditions sont cumulatives.</li>
</ul>

<h3>Micro-BIC ou réel</h3>
<div class="tw"><table><thead><tr><th>Type de location</th><th class="n">Plafond micro-BIC</th><th class="n">Abattement</th></tr></thead><tbody>
<tr><td>Location meublée longue durée</td><td class="n">77 700 € (revenus 2025) ; 83 600 € (revenus 2026)</td><td class="n">50 %</td></tr>
<tr><td>Meublé de tourisme classé, chambres d'hôtes</td><td class="n">77 700 €</td><td class="n">50 %</td></tr>
<tr><td>Meublé de tourisme non classé</td><td class="n">15 000 €</td><td class="n">30 %</td></tr>
</tbody></table></div>
<p>Au <strong>régime réel</strong>, on déduit les charges réelles et surtout l'<strong>amortissement</strong> du bien (hors terrain, souvent 2 à 3 % par an selon les composants) et du mobilier. L'amortissement ne peut pas créer de déficit : l'excédent se reporte sans limite de durée. Résultat : des loyers souvent non imposés pendant 10 à 15 ans. C'est l'argument historique du LMNP.</p>
<p>Le déficit LMNP ne s'impute que sur des BIC meublés des 10 années suivantes. En LMP, il s'impute sur le revenu global.</p>

<h3>La réforme 2025 : réintégration des amortissements</h3>
<p>Pour les cessions intervenues depuis le <strong>15 février 2025</strong>, les amortissements déduits en LMNP au réel sont <strong>réintégrés dans la plus-value</strong> imposable : on retire les amortissements du prix d'acquisition. Les abattements pour durée de détention (module 9) s'appliquent ensuite à cette plus-value gonflée. Exceptions : résidences étudiantes, seniors et EHPAD. La loi de finances 2026 n'a pas modifié ce régime.</p>
<div class="ex"><span class="tag">Exemple</span><p>Achat 200 000 €, vente 240 000 € après 10 ans, amortissements déduits 60 000 €.<br>Avant 2025 : plus-value brute 40 000 € (hors forfaits).<br>Depuis : prix d'acquisition retenu 140 000 € → plus-value <strong>100 000 €</strong>, avant abattements.</p></div>
<div class="rdv"><span class="tag">Discours client</span><p>Le LMNP au réel reste efficace pour qui garde le bien longtemps (22 ans pour l'IR, 30 ans pour les PS) ou le transmet : au décès, la plus-value est purgée. Pour un achat-revente à 8-10 ans, le gain fiscal annuel est en partie repris à la sortie.</p></div>

<h3>Le LMP</h3>
<p>Plus-values relevant du régime professionnel (exonération possible après 5 ans d'activité selon le niveau de recettes), cotisations sociales des indépendants (SSI) sur le bénéfice au lieu des prélèvements sociaux, biens exonérés d'IFI sous conditions. Statut puissant mais coûteux en cotisations : à manier avec un expert-comptable.</p>

<h3>Meublés de tourisme : la loi Le Meur</h3>
<p>Depuis 2025 : abattement réduit pour les meublés non classés, quotas possibles de 90 jours pour la résidence principale louée, obligation d'enregistrement auprès d'un téléservice national (au plus tard le 20 mai 2026), et exigences de DPE pour les nouveaux meublés soumis à changement d'usage (classe F minimum, E à partir de 2028, puis A à D pour tous en 2034).</p>

<h3>La SCI : à l'IR ou à l'IS ?</h3>
<div class="tw"><table><thead><tr><th></th><th>SCI à l'IR</th><th>SCI à l'IS</th></tr></thead><tbody>
<tr><td>Imposition des loyers</td><td>Revenus fonciers chez les associés (barème + 17,2 %)</td><td>IS : 15 % jusqu'à 42 500 € de bénéfice, 25 % au-delà</td></tr>
<tr><td>Amortissement</td><td>Non</td><td>Oui</td></tr>
<tr><td>Sortie de trésorerie</td><td>Libre (déjà imposé)</td><td>Dividendes taxés au PFU 31,4 %</td></tr>
<tr><td>Plus-value de cession</td><td>Régime des particuliers (exonération après 22/30 ans)</td><td>Plus-value professionnelle sur valeur nette comptable, sans abattement pour durée</td></tr>
<tr><td>Usage typique</td><td>Transmission familiale, détention longue</td><td>Capitalisation, réinvestissement, revenus élevés</td></tr>
</tbody></table></div>
<p>La SCI n'est pas un régime fiscal en soi, c'est un outil de <strong>détention et de transmission</strong> : donation progressive de parts, décote pour illiquidité, gestion par un gérant, éviter l'indivision. Une SCI ne peut pas louer en meublé de façon habituelle sans risquer de basculer à l'IS.</p>
<div class="warn"><span class="tag">Piège</span><p>L'option pour l'IS est irrévocable au-delà de la 5e année. Et la sortie d'un bien d'une SCI à l'IS coûte cher : IS sur la plus-value calculée sur une valeur amortie, puis PFU sur la distribution.</p></div>
`,
keys: [
"LMNP micro-BIC : 50 % d'abattement jusqu'à 77 700 € (83 600 € pour 2026) ; meublé de tourisme non classé : 30 % jusqu'à 15 000 €.",
"Réel : amortissement qui neutralise les loyers, mais réintégré dans la plus-value depuis le 15/02/2025 (sauf résidences services).",
"LMP : recettes > 23 000 € ET > autres revenus d'activité du foyer.",
"SCI à l'IS : IS 15 %/25 %, amortissement, mais sortie lourde (PV sur valeur nette comptable + PFU)."
],
ex: [
{ t: "Cas Fabre : nu ou meublé ?",
q: `<p>M. Fabre (TMI 30 %) achète comptant un studio de 150 000 € (dont 20 000 € de terrain et 5 000 € de mobilier) loué 7 800 € par an. Charges annuelles : 1 300 €.</p><ol><li>Revenu imposable en location nue au micro-foncier, et coût fiscal ?</li><li>En LMNP micro-BIC ?</li><li>En LMNP réel, avec un amortissement moyen du bâti de 3 % et du mobilier sur 7 ans ?</li></ol>`,
a: `<ol><li>7 800 × 70 % = 5 460 € × 47,2 % = <strong>2 577 €</strong>.</li><li>7 800 × 50 % = 3 900 € × 48,6 % (30 % + 18,6 % de PS sur les BIC non professionnels) = <strong>1 895 €</strong>.</li><li>Amortissements : bâti 125 000 × 3 % = 3 750 € + mobilier 5 000 / 7 ≈ 714 €. Loyers − charges = 6 500 € ; l'amortissement est limité à ce montant : 4 464 € déductibles → résultat 2 036 € imposable, soit ≈ <strong>990 €</strong>. Sur 10 ans, environ 44 600 € d'amortissements seront réintégrés dans la plus-value en cas de vente.</li></ol><p>Note : les revenus LMNP font partie des revenus du patrimoine touchés par la hausse de CSG ; vérifiez le taux de PS applicable sur l'avis.</p>` }
],
qcm: [
[1, "Les loyers d'une location meublée relèvent de la catégorie :", ["BIC", "Revenus fonciers", "BNC", "Revenus de capitaux mobiliers"], 0, "Même pour un particulier non professionnel."],
[1, "L'abattement micro-BIC pour une location meublée longue durée est de :", ["50 %", "30 %", "71 %", "34 %"], 0, "30 % pour les meublés de tourisme non classés depuis 2025."],
[1, "Une SCI à l'IS est imposée à :", ["15 % jusqu'à 42 500 € de bénéfice, 25 % au-delà", "25 % dès le premier euro", "Au barème chez les associés", "33,33 %"], 0, "Taux réduit de 15 % sous conditions (capital libéré, détention par des personnes physiques)."],
[2, "Pour être LMP, il faut :", ["Plus de 23 000 € de recettes meublées et qu'elles dépassent les autres revenus d'activité du foyer", "Seulement plus de 23 000 € de recettes", "Être inscrit au RCS", "Posséder au moins 3 biens"], 0, "L'inscription au RCS n'est plus une condition depuis 2020 (décision du Conseil constitutionnel)."],
[2, "Depuis le 15 février 2025, à la revente d'un bien LMNP au réel :", ["Les amortissements déduits sont réintégrés dans la plus-value", "La plus-value est exonérée", "Le régime des plus-values professionnelles s'applique", "Les amortissements sont remboursés"], 0, "Réforme de la LF 2025, maintenue par la LF 2026."],
[2, "En LMNP au réel, l'amortissement non utilisé une année :", ["Est reportable sans limite de durée", "Est perdu", "S'impute sur le revenu global", "Est reportable 3 ans"], 0, "L'amortissement ne peut pas créer de déficit mais se reporte."],
[3, "Pourquoi une SCI à l'IS est-elle peu adaptée à un client qui veut revendre l'immeuble dans 25 ans pour toucher le prix ?", ["La plus-value est calculée sur la valeur nette comptable, sans abattement pour durée de détention, puis la distribution est taxée", "Parce que l'IS est de 45 %", "Parce que les SCI ne peuvent pas vendre", "Parce que l'amortissement est interdit"], 0, "À l'IR, il aurait été exonéré d'IR après 22 ans et de PS après 30 ans."],
[3, "Un studio LMNP au réel acheté 180 000 €, vendu 200 000 € après 12 ans avec 50 000 € d'amortissements déduits. Plus-value brute avant forfaits et abattements ?", ["70 000 €", "20 000 €", "50 000 €", "0 €"], 0, "200 000 − (180 000 − 50 000) = 70 000 €."],
[3, "Quel est le meilleur argument du LMNP réel malgré la réforme ?", ["Détention longue ou transmission au décès (purge de la plus-value)", "Revente rapide sous 5 ans", "Exonération d'IFI", "Absence de comptabilité"], 0, "Au décès, aucune plus-value n'est taxée chez les héritiers."]
] },

/* ---------------- M9 ---------------- */
{ id: "pvimmo", title: "Plus-values immobilières des particuliers", time: "45 min",
lesson: `
<h3>Le principe</h3>
<p>La vente d'un bien immobilier détenu par un particulier (directement ou via une SCI à l'IR) génère une plus-value taxée à <strong>19 % d'IR</strong> + <strong>17,2 % de prélèvements sociaux</strong>, soit 36,2 % avant abattements. L'impôt est payé par le notaire au moment de la vente : le client n'a rien à déclarer sur sa déclaration de revenus (hors report du montant au revenu fiscal de référence).</p>

<h3>Le calcul étape par étape</h3>
<ol>
<li><strong>Prix de cession</strong> − frais de vente (diagnostics, commission d'agence à la charge du vendeur).</li>
<li><strong>Prix d'acquisition</strong> majoré :
<ul><li>des frais d'acquisition : réels, ou <strong>forfait de 7,5 %</strong> pour un achat à titre onéreux ;</li>
<li>des travaux : réels sur factures, ou <strong>forfait de 15 %</strong> si le bien est détenu depuis plus de 5 ans (pas de justificatif requis).</li></ul></li>
<li>Plus-value brute = 1 − 2.</li>
<li>Application des <strong>abattements pour durée de détention</strong>, différents pour l'IR et les PS.</li>
</ol>
<div class="tw"><table><thead><tr><th>Années de détention</th><th class="n">Abattement IR</th><th class="n">Abattement PS</th></tr></thead><tbody>
<tr><td>0 à 5 ans</td><td class="n">0</td><td class="n">0</td></tr>
<tr><td>6e à 21e année</td><td class="n">6 % par an</td><td class="n">1,65 % par an</td></tr>
<tr><td>22e année</td><td class="n">4 % → exonération totale</td><td class="n">1,60 %</td></tr>
<tr><td>23e à 30e année</td><td class="n">—</td><td class="n">9 % par an → exonération à 30 ans</td></tr>
</tbody></table></div>
<p>Retenez : <strong>exonération d'IR après 22 ans, de prélèvements sociaux après 30 ans.</strong></p>
<p>Une <strong>surtaxe</strong> de 2 % à 6 % s'ajoute lorsque la plus-value imposable à l'IR (après abattements) dépasse 50 000 € (hors terrains à bâtir).</p>

<div class="ex"><span class="tag">Exemple complet</span><p>Appartement locatif acheté 200 000 € en mars 2012, vendu 350 000 € en novembre 2026 (14 ans révolus).<br>
Prix d'acquisition majoré : 200 000 + 15 000 (7,5 %) + 30 000 (15 %) = 245 000 €.<br>
Plus-value brute : 105 000 €.<br>
IR : abattement 9 × 6 % = 54 % → base 48 300 € × 19 % = <strong>9 177 €</strong>.<br>
PS : abattement 9 × 1,65 % = 14,85 % → base 89 407 € × 17,2 % = <strong>15 378 €</strong>.<br>
Total ≈ <strong>24 555 €</strong>. Pas de surtaxe (base IR sous 50 000 €).</p></div>

<h3>Les exonérations à connaître par cœur</h3>
<ul>
<li><strong>Résidence principale</strong> au jour de la vente : exonération totale, sans condition de durée. Tolérance si le bien est vendu dans un délai normal (environ un an) après le déménagement et reste vacant.</li>
<li><strong>Première cession d'un logement autre que la RP</strong> : exonération si le vendeur n'a pas été propriétaire de sa RP dans les 4 années précédentes et remploie le prix dans l'achat de sa RP dans les 24 mois.</li>
<li>Prix de cession <strong>inférieur ou égal à 15 000 €</strong>.</li>
<li>Retraités ou invalides de condition modeste (sous conditions de revenus).</li>
<li>Cession à un organisme de logement social (sous conditions).</li>
<li>Expropriation avec remploi.</li>
</ul>
<div class="warn"><span class="tag">Erreur fréquente</span><p>Une résidence secondaire n'est pas exonérée, même après 20 ans. Et un bien loué jusqu'au jour de la vente n'est pas la résidence principale du vendeur.</p></div>

<h3>Moins-values et cas particuliers</h3>
<p>Une moins-value immobilière n'est ni imputable ni reportable : elle est perdue. La donation d'un bien avant sa vente « purge » la plus-value : le donataire prend comme prix d'acquisition la valeur retenue dans l'acte de donation. C'est légal si la donation est réelle et précède la vente (l'abus de droit guette si le donateur récupère le prix).</p>
<div class="rdv"><span class="tag">En rendez-vous</span><p>Avant tout projet de vente d'un bien locatif, demandez l'acte d'achat (date, prix, frais) et les factures de travaux. Comparez les travaux réels au forfait de 15 % et choisissez le plus favorable.</p></div>
`,
keys: [
"19 % d'IR + 17,2 % de PS ; exonération d'IR à 22 ans, de PS à 30 ans.",
"Forfaits : 7,5 % de frais d'acquisition, 15 % de travaux après 5 ans de détention.",
"Résidence principale : exonération totale. Surtaxe si plus-value imposable > 50 000 €.",
"Donation avant cession = purge de la plus-value, si la donation est sincère."
],
ex: [
{ t: "Cas Girard : une résidence secondaire",
q: `<p>Mme Girard vend sa maison de campagne 420 000 €, achetée 250 000 € il y a 25 ans révolus (frais réels inconnus, aucune facture de travaux).</p><ol><li>Calculez la plus-value brute.</li><li>Quel IR est dû ?</li><li>Calculez les prélèvements sociaux.</li></ol>`,
a: `<ol><li>Prix majoré : 250 000 + 18 750 + 37 500 = 306 250 € → plus-value brute <strong>113 750 €</strong>.</li><li>Plus de 22 ans : <strong>IR nul</strong>.</li><li>Abattement PS : 16 × 1,65 % + 1,60 % + 3 × 9 % = 26,4 + 1,6 + 27 = 55 %. Base 51 187,50 € × 17,2 % = <strong>8 804 €</strong>.</li></ol>` }
],
qcm: [
[1, "La vente de sa résidence principale par un particulier est :", ["Exonérée de plus-value", "Taxée à 36,2 %", "Exonérée après 5 ans", "Exonérée après 22 ans"], 0, "Sans condition de durée de détention."],
[1, "Au bout de combien d'années de détention la plus-value est-elle exonérée d'IR ?", ["22 ans", "30 ans", "15 ans", "5 ans"], 0, "Et 30 ans pour les prélèvements sociaux."],
[1, "Le taux d'IR sur une plus-value immobilière est de :", ["19 %", "12,8 %", "30 %", "Le barème progressif"], 0, "Plus 17,2 % de prélèvements sociaux."],
[2, "Le forfait pour travaux de 15 % est applicable :", ["Si le bien est détenu depuis plus de 5 ans, sans justificatif", "Toujours", "Uniquement sur factures", "Uniquement pour la résidence principale"], 0, "Il est souvent plus favorable que les travaux réels."],
[2, "Une moins-value immobilière de 30 000 € :", ["Est perdue, non imputable", "S'impute sur le revenu global", "Se reporte 10 ans", "S'impute sur les plus-values mobilières"], 0, "Contrairement aux moins-values mobilières."],
[2, "Qui paie l'impôt sur la plus-value immobilière ?", ["Le notaire, prélevé sur le prix de vente", "L'acquéreur", "Le vendeur au printemps suivant", "L'agence immobilière"], 0, "L'impôt est acquitté lors de la publication de la vente."],
[3, "Un bien détenu 10 ans révolus : abattement pour l'IR et pour les PS ?", ["30 % (IR) et 8,25 % (PS)", "60 % et 16,5 %", "50 % et 10 %", "24 % et 6,6 %"], 0, "5 années × 6 % = 30 % ; 5 × 1,65 % = 8,25 % (de la 6e à la 10e année)."],
[3, "Un client locataire depuis 6 ans vend un studio hérité et rachète sa résidence principale 10 mois plus tard. Plus-value ?", ["Exonérée au titre de la première cession d'un logement autre que la RP, à hauteur du prix remployé", "Taxée normalement", "Exonérée car le bien est hérité", "Exonérée à 50 %"], 0, "Conditions : pas propriétaire de sa RP dans les 4 ans, remploi sous 24 mois."],
[3, "La surtaxe sur les plus-values immobilières s'applique quand :", ["La plus-value imposable à l'IR après abattements dépasse 50 000 €", "Le prix de vente dépasse 1 M€", "La plus-value brute dépasse 50 000 €", "Le bien est détenu moins de 5 ans"], 0, "Taux progressif de 2 % à 6 %, hors terrains à bâtir."]
] },

/* ---------------- M10 ---------------- */
{ id: "ifi", title: "L'impôt sur la fortune immobilière (IFI)", time: "45 min",
lesson: `
<h3>Qui est concerné ?</h3>
<p>Depuis 2018, l'ISF a été remplacé par l'<strong>IFI</strong>, qui ne vise que l'<strong>immobilier</strong>. Est redevable le foyer (couple marié, pacsé ou <strong>concubins notoires</strong>, plus enfants mineurs) dont le patrimoine immobilier net au 1er janvier dépasse <strong>1 300 000 €</strong>. Il se déclare avec la déclaration de revenus (annexe 2042-IFI).</p>

<h3>L'assiette : quels biens ?</h3>
<ul>
<li>Immeubles bâtis et non bâtis détenus directement (résidence principale, secondaire, locatif).</li>
<li>Parts de SCI, de SCPI, d'OPCI, d'unités de compte immobilières dans une assurance-vie, à proportion de la part immobilière.</li>
<li>Immobilier détenu indirectement via une société, sauf si la société est opérationnelle et que le client détient moins de 10 %.</li>
</ul>
<p><strong>Exclus ou exonérés</strong> : actions, obligations, liquidités, fonds en euros ; <strong>biens professionnels</strong> (immobilier affecté à l'activité principale du redevable) ; immobilier loué en meublé par un LMP ; bois et forêts à 75 % (avec engagement de gestion) ; biens ruraux loués par bail à long terme à 75 % jusqu'à un seuil.</p>

<h3>Les règles de valorisation et de déduction</h3>
<ul>
<li>Valeur vénale au 1er janvier.</li>
<li><strong>Abattement de 30 % sur la résidence principale</strong> (détenue directement).</li>
<li>Décote possible pour un bien occupé par un locataire (10 à 20 % selon la jurisprudence).</li>
<li><strong>Dettes déductibles</strong> : emprunts d'acquisition, travaux, taxe foncière de l'année ; non déductibles : prêt in fine au-delà d'un amortissement fictif, dettes envers la famille sous conditions.</li>
</ul>

<h3>Le barème</h3>
<div class="tw"><table><thead><tr><th>Patrimoine net taxable</th><th class="n">Taux</th></tr></thead><tbody>
<tr><td>Jusqu'à 800 000 €</td><td class="n">0 %</td></tr>
<tr><td>800 001 € à 1 300 000 €</td><td class="n">0,50 %</td></tr>
<tr><td>1 300 001 € à 2 570 000 €</td><td class="n">0,70 %</td></tr>
<tr><td>2 570 001 € à 5 000 000 €</td><td class="n">1 %</td></tr>
<tr><td>5 000 001 € à 10 000 000 €</td><td class="n">1,25 %</td></tr>
<tr><td>Au-delà</td><td class="n">1,50 %</td></tr>
</tbody></table></div>
<p>Attention : dès que le seuil de 1,3 M€ est franchi, le barème s'applique <strong>dès 800 000 €</strong>. Une <strong>décote</strong> lisse l'entrée entre 1,3 et 1,4 M€ : 17 500 € − 1,25 % × patrimoine net.</p>
<div class="ex"><span class="tag">Exemple</span><p>Résidence principale 1 000 000 € (→ 700 000 € après 30 %), appartement locatif 900 000 € avec 200 000 € d'emprunt restant (→ 700 000 €), SCPI 300 000 € : patrimoine net taxable <strong>1 700 000 €</strong>.<br>IFI : 500 000 × 0,5 % = 2 500 € + 400 000 × 0,7 % = 2 800 € → <strong>5 300 €</strong>.</p></div>

<h3>Plafonnement et réductions</h3>
<ul>
<li><strong>Plafonnement</strong> : IR + prélèvements sociaux + IFI ne peuvent dépasser 75 % des revenus de l'année précédente.</li>
<li><strong>Réduction pour dons</strong> à certaines fondations : 75 % du don, dans la limite de 50 000 € de réduction.</li>
</ul>

<h3>Les leviers d'optimisation classiques</h3>
<ol>
<li>Arbitrer de l'immobilier direct vers des actifs financiers (hors IFI).</li>
<li>Conserver de l'endettement (dans les limites de déductibilité).</li>
<li>Démembrer : l'usufruitier déclare la pleine propriété (en principe), le nu-propriétaire rien. Une donation de nue-propriété ne sort donc pas le bien de l'IFI du donateur.</li>
<li>Faire qualifier un bien de professionnel quand c'est justifié.</li>
<li>Don IFI à une fondation reconnue d'utilité publique avant la date de déclaration.</li>
</ol>
<div class="warn"><span class="tag">Piège</span><p>Les concubins notoires sont imposés ensemble à l'IFI, alors qu'ils déclarent leurs revenus séparément. Deux concubins avec 700 000 € de patrimoine immobilier net chacun sont redevables.</p></div>
`,
keys: [
"Seuil : 1 300 000 € de patrimoine immobilier net au 1er janvier, barème dès 800 000 €.",
"Résidence principale : abattement de 30 %. Dettes immobilières déductibles.",
"Exclus : placements financiers, biens professionnels ; bois et forêts à 75 %.",
"Plafonnement à 75 % des revenus ; réduction de 75 % des dons à certaines fondations (max 50 000 €)."
],
ex: [
{ t: "Cas Lambert : redevable ou non ?",
q: `<p>M. et Mme Lambert possèdent : RP 900 000 €, maison de vacances 450 000 €, appartement loué 300 000 € (emprunt restant 80 000 €), portefeuille d'actions 600 000 €, assurance-vie dont 100 000 € de SCPI en unités de compte.</p><ol><li>Calculez le patrimoine net taxable.</li><li>Sont-ils redevables ? Si oui, combien ?</li><li>Quelle piste simple pour descendre sous le seuil ?</li></ol>`,
a: `<ol><li>RP 630 000 + maison 450 000 + appartement 220 000 + UC SCPI 100 000 = <strong>1 400 000 €</strong> (les actions sont exclues).</li><li>Oui. Barème : 500 000 × 0,5 % = 2 500 € + 100 000 × 0,7 % = 700 € = 3 200 €. Décote : 17 500 − 1,25 % × 1 400 000 = 0 €. IFI = <strong>3 200 €</strong>.</li><li>Arbitrer les 100 000 € d'UC SCPI vers des supports financiers : patrimoine 1 300 000 €, plus d'IFI (le seuil est « supérieur à 1,3 M€ »).</li></ol>` }
],
qcm: [
[1, "Le seuil d'assujettissement à l'IFI est de :", ["1 300 000 € de patrimoine immobilier net", "800 000 €", "1 300 000 € de patrimoine total", "2 570 000 €"], 0, "Le barème démarre ensuite à 800 000 €."],
[1, "Un portefeuille d'actions cotées de 2 M€ est :", ["Hors du champ de l'IFI", "Taxé à 0,7 %", "Taxé pour moitié", "Taxé s'il dépasse 1,3 M€"], 0, "L'IFI ne vise que l'immobilier."],
[1, "L'abattement sur la résidence principale à l'IFI est de :", ["30 %", "20 %", "50 %", "Aucun"], 0, "20 % est l'abattement de succession sur la RP (module 12)."],
[2, "Des parts de SCPI détenues dans une assurance-vie en unités de compte sont :", ["Imposables à l'IFI à proportion de leur valeur immobilière", "Exonérées car dans une assurance-vie", "Exonérées si le contrat a plus de 8 ans", "Imposables à 50 %"], 0, "Le fonds en euros, lui, est exclu."],
[2, "Deux concubins notoires :", ["Sont imposés conjointement à l'IFI", "Sont imposés séparément", "Ne sont jamais imposables", "Choisissent librement"], 0, "Différence notable avec l'IR."],
[2, "L'IFI d'un patrimoine net de 1 350 000 € (avant décote) est de :", ["2 850 € (puis décote de 625 € → 2 225 €)", "9 450 €", "0 €", "6 750 €"], 0, "500 000 × 0,5 % + 50 000 × 0,7 % = 2 850 € ; décote = 17 500 − 16 875 = 625 €."],
[3, "Une donation de la nue-propriété d'un immeuble par un parent qui garde l'usufruit :", ["Ne réduit pas son IFI : l'usufruitier déclare en principe la pleine propriété", "Supprime l'IFI du donateur", "Réduit l'IFI de 50 %", "Transfère l'IFI aux enfants"], 0, "Sauf démembrements légaux (usufruit du conjoint survivant), où la taxation est partagée."],
[3, "Un client paie 45 000 € d'IR, 8 000 € de PS et 30 000 € d'IFI pour 100 000 € de revenus. Que se passe-t-il ?", ["Le plafonnement limite le total à 75 000 €, l'IFI est réduit de 8 000 €", "Rien", "L'IFI est supprimé", "L'IR est plafonné"], 0, "75 % × 100 000 = 75 000 € ; total 83 000 €, donc 8 000 € d'excédent imputé sur l'IFI."],
[3, "Quelle réduction d'IFI pour un don de 20 000 € à une fondation reconnue d'utilité publique ?", ["15 000 €", "13 200 €", "20 000 €", "10 000 €"], 0, "75 % du don, dans la limite de 50 000 € de réduction."]
] },

/* ---------------- M11 ---------------- */
{ id: "donation", title: "Donations : abattements, barème, démembrement", time: "1 h",
lesson: `
<h3>Pourquoi donner de son vivant</h3>
<p>Donner permet de transmettre en <strong>utilisant plusieurs fois les abattements</strong> (renouvelables tous les 15 ans), de figer la valeur des biens transmis, d'aider les enfants au moment où ils en ont besoin et de préparer une succession apaisée (donation-partage). Les droits sont dus par le donataire, mais le donateur peut les prendre en charge sans que cela constitue une donation supplémentaire.</p>

<h3>Les abattements</h3>
<div class="tw"><table><thead><tr><th>Lien</th><th class="n">Abattement donation</th><th class="n">Abattement succession</th></tr></thead><tbody>
<tr><td>Enfant (de chaque parent)</td><td class="n">100 000 €</td><td class="n">100 000 €</td></tr>
<tr><td>Petit-enfant</td><td class="n">31 865 €</td><td class="n">1 594 € (sauf représentation)</td></tr>
<tr><td>Arrière-petit-enfant</td><td class="n">5 310 €</td><td class="n">1 594 €</td></tr>
<tr><td>Époux ou partenaire de PACS</td><td class="n">80 724 €</td><td class="n">Exonération totale</td></tr>
<tr><td>Frère ou sœur</td><td class="n">15 932 €</td><td class="n">15 932 € (exonération sous conditions)</td></tr>
<tr><td>Neveu ou nièce</td><td class="n">7 967 €</td><td class="n">7 967 €</td></tr>
<tr><td>Personne handicapée (cumulable)</td><td class="n">159 325 €</td><td class="n">159 325 €</td></tr>
<tr><td>Autres personnes</td><td class="n">Aucun</td><td class="n">1 594 €</td></tr>
</tbody></table></div>
<p>Les abattements se <strong>rechargent tous les 15 ans</strong> (rappel fiscal) : une donation de plus de 15 ans n'est plus prise en compte, ni pour les abattements ni pour les tranches du barème.</p>

<h3>Le don familial de sommes d'argent (article 790 G)</h3>
<p>Exonération supplémentaire de <strong>31 865 €</strong> pour un don en argent d'un parent, grand-parent ou arrière-grand-parent de <strong>moins de 80 ans</strong> à un descendant <strong>majeur</strong> (ou neveu/nièce à défaut de descendance). Cumulable avec l'abattement classique : un parent peut donner <strong>131 865 €</strong> à chaque enfant sans droits.</p>

<h3>Le don exceptionnel pour le logement (article 790 A bis) : fin au 31 décembre 2026</h3>
<p>Jusqu'au <strong>31 décembre 2026</strong>, les dons de sommes d'argent à un descendant (ou à défaut neveu, nièce) sont exonérés dans la limite de <strong>100 000 € par donateur</strong> et <strong>300 000 € par donataire</strong>, s'ils financent dans les 6 mois l'achat d'un <strong>logement neuf ou en VEFA</strong> ou des <strong>travaux de rénovation énergétique</strong> de la résidence principale du donataire. Le logement doit rester sa résidence principale (ou être loué en résidence principale) pendant 5 ans. Les amendements visant à le prolonger n'ont pas été retenus dans la LF 2026.</p>
<div class="rdv"><span class="tag">Actualité de fin d'année</span><p>Il reste quelques semaines : un client dont l'enfant signe une VEFA ou engage une rénovation énergétique doit faire le don avant le 31 décembre 2026. Cumul possible : 100 000 € (classique) + 31 865 € (790 G) + 100 000 € (790 A bis) = 231 865 € par parent et par enfant.</p></div>

<h3>Le barème en ligne directe (enfants, parents)</h3>
<div class="tw"><table><thead><tr><th>Part taxable après abattement</th><th class="n">Taux</th></tr></thead><tbody>
<tr><td>Jusqu'à 8 072 €</td><td class="n">5 %</td></tr>
<tr><td>8 072 € à 12 109 €</td><td class="n">10 %</td></tr>
<tr><td>12 109 € à 15 932 €</td><td class="n">15 %</td></tr>
<tr><td>15 932 € à 552 324 €</td><td class="n">20 %</td></tr>
<tr><td>552 324 € à 902 838 €</td><td class="n">30 %</td></tr>
<tr><td>902 838 € à 1 805 677 €</td><td class="n">40 %</td></tr>
<tr><td>Au-delà</td><td class="n">45 %</td></tr>
</tbody></table></div>
<p>Formule rapide dans la tranche à 20 % : <strong>droits = part taxable × 20 % − 1 805,65 €</strong>.</p>
<p>Frères et sœurs : 35 % jusqu'à 24 430 €, 45 % au-delà. Parents jusqu'au 4e degré (neveux, cousins germains) : 55 %. Au-delà et non-parents : <strong>60 %</strong>.</p>

<h3>Le démembrement : l'arme de la transmission</h3>
<p>La propriété se divise en <strong>usufruit</strong> (usage et revenus) et <strong>nue-propriété</strong>. Le parent donne la nue-propriété et garde l'usufruit. Fiscalement, la nue-propriété est évaluée selon l'âge de l'usufruitier (article 669 du CGI) :</p>
<div class="tw"><table><thead><tr><th>Âge de l'usufruitier</th><th class="n">Usufruit</th><th class="n">Nue-propriété</th></tr></thead><tbody>
<tr><td>Moins de 21 ans</td><td class="n">90 %</td><td class="n">10 %</td></tr>
<tr><td>21 à 30 ans</td><td class="n">80 %</td><td class="n">20 %</td></tr>
<tr><td>31 à 40 ans</td><td class="n">70 %</td><td class="n">30 %</td></tr>
<tr><td>41 à 50 ans</td><td class="n">60 %</td><td class="n">40 %</td></tr>
<tr><td>51 à 60 ans</td><td class="n">50 %</td><td class="n">50 %</td></tr>
<tr><td>61 à 70 ans</td><td class="n">40 %</td><td class="n">60 %</td></tr>
<tr><td>71 à 80 ans</td><td class="n">30 %</td><td class="n">70 %</td></tr>
<tr><td>81 à 90 ans</td><td class="n">20 %</td><td class="n">80 %</td></tr>
<tr><td>91 ans et plus</td><td class="n">10 %</td><td class="n">90 %</td></tr>
</tbody></table></div>
<p>Au décès de l'usufruitier, l'usufruit rejoint la nue-propriété <strong>sans aucun droit</strong>. On ne paie donc des droits que sur la valeur de la nue-propriété au jour de la donation, et la valorisation future du bien échappe aux droits.</p>
<div class="ex"><span class="tag">Exemple</span><p>Couple de 62 ans, appartement commun de 500 000 €, deux enfants. Ils donnent la nue-propriété : 60 % × 500 000 = 300 000 €, soit 150 000 € par enfant, reçus pour moitié de chaque parent (75 000 €). Chaque parent donne 75 000 € par enfant, sous l'abattement de 100 000 € : <strong>aucun droit</strong>. Au décès des parents, les enfants récupèrent la pleine propriété sans droits.</p></div>

<h3>Les formes de donation</h3>
<ul>
<li><strong>Don manuel</strong> (somme d'argent, titres) : à déclarer (formulaire 2735 ou en ligne) pour faire courir le délai de 15 ans et fixer la valeur.</li>
<li><strong>Donation simple</strong> par acte notarié : obligatoire pour l'immobilier.</li>
<li><strong>Donation-partage</strong> : répartit les biens entre enfants ; les valeurs sont figées au jour de l'acte pour le calcul de la réserve. Évite les conflits. Elle peut être transgénérationnelle (incluant petits-enfants).</li>
<li><strong>Présent d'usage</strong> : cadeau à l'occasion d'un événement (anniversaire, mariage, réussite), proportionné aux revenus et au patrimoine du donateur. Ni droits ni rapport.</li>
</ul>
`,
keys: [
"100 000 € par parent et par enfant tous les 15 ans ; 31 865 € par grand-parent et par petit-enfant.",
"Don familial d'argent (790 G) : +31 865 €, donateur < 80 ans, donataire majeur.",
"Don logement neuf / rénovation énergétique (790 A bis) : 100 000 € par donateur, jusqu'au 31/12/2026.",
"Nue-propriété selon l'âge : 50 % à 51-60 ans, 60 % à 61-70 ans, 70 % à 71-80 ans. Réunion de l'usufruit sans droits."
],
ex: [
{ t: "Cas Simon : donner à 74 ans",
q: `<p>M. Simon, 74 ans, veuf, 2 enfants, veut leur donner un immeuble de rapport valant 800 000 €, en gardant les loyers. Il n'a jamais rien donné.</p><ol><li>Quelle opération proposer ?</li><li>Valeur taxable par enfant ?</li><li>Calculez les droits par enfant.</li><li>Pourrait-il compléter avec un don d'argent exonéré ?</li></ol>`,
a: `<ol><li>Donation-partage de la nue-propriété avec réserve d'usufruit.</li><li>Nue-propriété à 71-80 ans : 70 % × 800 000 = 560 000 €, soit <strong>280 000 € par enfant</strong>.</li><li>280 000 − 100 000 = 180 000 € taxables → 180 000 × 20 % − 1 805,65 = <strong>34 194 € par enfant</strong> (le donateur peut les payer).</li><li>Le don familial 790 G exige un donateur de moins de 80 ans : à 74 ans, il peut donner 31 865 € à chaque enfant en franchise, en plus.</li></ol>` },
{ t: "Calcul éclair",
q: `<p>Une grand-mère donne 50 000 € en argent à sa petite-fille de 25 ans. Elle a 77 ans. Droits ?</p>`,
a: `<p>Abattement petit-enfant 31 865 € + don familial 31 865 € = 63 730 € &gt; 50 000 € : <strong>aucun droit</strong>. Déclaration du don à faire.</p>` }
],
qcm: [
[1, "L'abattement en ligne directe parent → enfant est de :", ["100 000 € tous les 15 ans", "100 000 € par an", "31 865 € tous les 15 ans", "152 500 €"], 0, "Par parent et par enfant."],
[1, "L'abattement grand-parent → petit-enfant en donation est de :", ["31 865 €", "100 000 €", "1 594 €", "15 932 €"], 0, "En succession, sauf représentation, le petit-enfant n'a que 1 594 €."],
[1, "Le taux entre non-parents (ami, concubin) est de :", ["60 %", "45 %", "55 %", "20 %"], 0, "Après un abattement de 1 594 € en succession, aucun en donation."],
[2, "Le don familial de sommes d'argent (790 G) suppose :", ["Un donateur de moins de 80 ans et un donataire majeur", "Un donataire de moins de 30 ans", "Un don en immobilier", "Un acte notarié"], 0, "Exonération de 31 865 €, cumulable avec l'abattement classique."],
[2, "Le don exonéré de 100 000 € pour un logement neuf ou une rénovation énergétique (790 A bis) est ouvert jusqu'au :", ["31 décembre 2026", "31 décembre 2027", "30 juin 2027", "Sans limite"], 0, "Les tentatives de prolongation n'ont pas été retenues par la LF 2026."],
[2, "Une donation faite il y a 16 ans :", ["N'est plus rappelée : les abattements sont rechargés", "Doit être réintégrée fiscalement", "Réduit l'abattement de moitié", "Est taxée à nouveau"], 0, "Rappel fiscal de 15 ans."],
[2, "Valeur fiscale de la nue-propriété donnée par un usufruitier de 65 ans ?", ["60 %", "40 %", "50 %", "70 %"], 0, "Usufruit 40 % entre 61 et 70 ans."],
[3, "Droits sur une donation de 250 000 € d'un parent à son enfant (première donation) ?", ["28 194 €", "50 000 €", "30 000 €", "0 €"], 0, "150 000 × 20 % − 1 805,65 = 28 194 €."],
[3, "Au décès de l'usufruitier après une donation de nue-propriété, les enfants :", ["Récupèrent la pleine propriété sans aucun droit", "Paient des droits sur l'usufruit", "Paient des droits sur la plus-value", "Doivent racheter l'usufruit"], 0, "Article 1133 du CGI : la réunion de l'usufruit n'est pas taxée."],
[3, "Dans une donation-partage, les biens sont évalués pour le calcul de la réserve :", ["Au jour de la donation-partage (si tous les réservataires y participent et acceptent)", "Au jour du décès", "Au jour de la vente", "À la moyenne des deux"], 0, "C'est l'intérêt majeur face à la donation simple, rapportable à sa valeur au décès."],
[3, "Un présent d'usage :", ["N'est ni taxé ni rapportable, s'il est proportionné et lié à un événement", "Est taxé au-delà de 15 000 €", "Doit être déclaré", "Consomme l'abattement de 100 000 €"], 0, "La proportion s'apprécie au regard des revenus et du patrimoine du donateur."]
] },

/* ---------------- M12 ---------------- */
{ id: "succession", title: "Succession : calculer et réduire les droits", time: "1 h",
lesson: `
<h3>De l'actif brut aux droits à payer</h3>
<ol>
<li><strong>Actif brut</strong> au jour du décès : biens propres du défunt + sa moitié des biens communs, en valeur vénale. Le mobilier est retenu forfaitairement à 5 % de l'actif brut (sauf inventaire).</li>
<li><strong>Abattement de 20 %</strong> sur la résidence principale si elle est occupée au décès par le conjoint, le partenaire de PACS ou un enfant mineur ou majeur protégé.</li>
<li><strong>Passif déductible</strong> : dettes existant au jour du décès (emprunts, impôts dus), frais funéraires (forfait de 1 500 € sans justificatif).</li>
<li>Actif net = 1 − 2 − 3, puis partage selon les règles civiles (formation 2) : chaque héritier a sa <strong>part nette</strong>.</li>
<li>Pour chaque héritier : <strong>rappel des donations</strong> de moins de 15 ans, application de l'abattement restant, puis du barème selon le lien de parenté.</li>
</ol>
<p>L'assurance-vie ne fait pas partie de l'actif de succession : elle suit ses propres règles (module 5).</p>

<h3>Qui est exonéré ?</h3>
<ul>
<li>Le <strong>conjoint survivant</strong> et le <strong>partenaire de PACS</strong> (le partenaire n'hérite qu'en vertu d'un testament).</li>
<li>Les frères et sœurs, s'ils sont célibataires, veufs, divorcés ou séparés, ont plus de 50 ans ou sont infirmes, et ont vécu avec le défunt les 5 dernières années.</li>
<li>Certains biens : monuments historiques ouverts au public, une partie des bois et forêts, entreprises sous pacte Dutreil (75 % de la valeur).</li>
</ul>

<h3>Exemple de calcul</h3>
<div class="ex"><span class="tag">Cas</span><p>Mme R., veuve, décède en 2026. Patrimoine : maison (RP non occupée par un héritier) 450 000 €, appartement 250 000 €, comptes 120 000 €, mobilier forfaitaire 5 % ≈ 41 000 €. Dettes : 8 000 € + frais funéraires forfaitaires 1 500 €. Deux enfants, aucune donation antérieure.<br>
Actif net : 861 000 − 9 500 = 851 500 €, soit 425 750 € par enfant.<br>
Taxable : 325 750 € → 325 750 × 20 % − 1 805,65 = <strong>63 344 € par enfant</strong>, 126 688 € au total.</p></div>
<p>Avec 200 000 € de donations faites 16 ans avant, les abattements auraient été rechargés : les droits auraient porté sur une succession réduite d'autant.</p>

<h3>Formalités et paiement</h3>
<ul>
<li>Déclaration de succession dans les <strong>6 mois</strong> du décès (12 mois si décès hors de France). Pas de déclaration en ligne directe si l'actif brut est inférieur à 50 000 € (et sans donation antérieure non déclarée).</li>
<li>Intérêts de retard de 0,20 % par mois ; majoration de 10 % au-delà de 12 mois.</li>
<li><strong>Paiement fractionné</strong> (sur 1 an, ou jusqu'à 10 ans si l'actif comprend au moins 50 % de biens non liquides) et <strong>paiement différé</strong> (en cas de transmission de nue-propriété, jusqu'à 6 mois après la réunion de l'usufruit), moyennant intérêts.</li>
<li>Les banques peuvent débloquer jusqu'à 5 910 € pour les frais d'obsèques sur les comptes du défunt.</li>
</ul>

<h3>Les grands leviers pour réduire les droits</h3>
<div class="tw"><table><thead><tr><th>Levier</th><th>Effet</th></tr></thead><tbody>
<tr><td>Donner tôt et régulièrement</td><td>Recharger les abattements tous les 15 ans</td></tr>
<tr><td>Donner la nue-propriété</td><td>Taxer seulement 50 à 70 % de la valeur, réunion de l'usufruit sans droits</td></tr>
<tr><td>Assurance-vie avant 70 ans</td><td>152 500 € par bénéficiaire hors droits de succession</td></tr>
<tr><td>Assurance-vie après 70 ans</td><td>Gains exonérés</td></tr>
<tr><td>Se marier ou se pacser (avec testament)</td><td>Exonération totale entre époux/partenaires</td></tr>
<tr><td>Transmettre aux petits-enfants</td><td>Abattements supplémentaires, saut de génération</td></tr>
<tr><td>Pacte Dutreil pour l'entreprise</td><td>Exonération de 75 % de la valeur</td></tr>
</tbody></table></div>
<div class="warn"><span class="tag">Renonciation : attention</span><p>Un enfant qui renonce à la succession au profit de ses propres enfants les fait hériter « par représentation » : ils se partagent l'abattement de 100 000 € de leur parent et le barème en ligne directe, mais les donations reçues par le renonçant restent rappelées.</p></div>
`,
keys: [
"Actif net = actif brut (dont 5 % de mobilier) − 20 % sur la RP occupée − dettes − 1 500 € de frais funéraires.",
"Conjoint et partenaire de PACS exonérés ; déclaration dans les 6 mois.",
"Formule tranche 20 % : part taxable × 20 % − 1 805,65 €.",
"Leviers : donations répétées, démembrement, assurance-vie, mariage/PACS, petits-enfants."
],
ex: [
{ t: "Cas Perrin : impact d'une donation",
q: `<p>M. Perrin, veuf, a donné il y a 8 ans 100 000 € à chacun de ses 2 enfants. Il décède en laissant un actif net de 600 000 €.</p><ol><li>Part nette par enfant ?</li><li>Abattement disponible ?</li><li>Droits par enfant ?</li><li>Et si la donation avait eu lieu il y a 16 ans ?</li></ol>`,
a: `<ol><li>300 000 € chacun.</li><li>La donation de moins de 15 ans a consommé les 100 000 € : <strong>0 € d'abattement restant</strong>.</li><li>300 000 € taxables, mais les tranches basses ont déjà été utilisées par la donation (100 000 € avaient été reçus sans droits grâce à l'abattement, sans consommer les tranches). Droits : 300 000 × 20 % − 1 805,65 = <strong>58 194 €</strong>.</li><li>Abattement rechargé : 200 000 € taxables → <strong>38 194 €</strong> par enfant, soit 20 000 € d'économie chacun.</li></ol>` }
],
qcm: [
[1, "Le conjoint survivant paie des droits de succession :", ["Jamais, il est exonéré", "Après 80 724 €", "Au taux de 20 %", "Seulement sur la résidence principale"], 0, "Exonération totale depuis la loi TEPA de 2007."],
[1, "Le délai normal pour déposer la déclaration de succession est de :", ["6 mois après le décès", "1 mois", "1 an", "3 mois"], 0, "12 mois si le décès a eu lieu à l'étranger."],
[1, "L'abattement de chaque enfant sur la succession de son parent est de :", ["100 000 €", "152 500 €", "31 865 €", "80 724 €"], 0, "Diminué des donations reçues depuis moins de 15 ans."],
[2, "L'abattement de 20 % sur la résidence principale suppose :", ["Qu'elle soit occupée au décès par le conjoint, le partenaire ou un enfant mineur/protégé", "Qu'elle soit détenue depuis 5 ans", "Qu'elle soit vendue dans l'année", "Qu'elle vaille moins de 1 M€"], 0, "Ne pas confondre avec les 30 % de l'IFI."],
[2, "Les frais funéraires sont déductibles sans justificatif à hauteur de :", ["1 500 €", "5 910 €", "3 000 €", "Rien"], 0, "5 910 € est le montant que la banque peut débloquer pour les obsèques."],
[2, "Le mobilier est retenu forfaitairement à :", ["5 % de l'actif brut", "10 %", "Sa valeur d'assurance", "Rien"], 0, "Sauf inventaire notarié ou vente aux enchères qui prouvent une valeur différente."],
[3, "Un partenaire de PACS hérite de son partenaire décédé :", ["Uniquement par testament, et il est alors exonéré de droits", "De plein droit, comme un conjoint", "Par testament, mais taxé à 60 %", "Jamais"], 0, "Sans testament, le partenaire n'est pas héritier."],
[3, "Un frère célibataire de 58 ans qui vivait avec la défunte depuis 7 ans hérite. Droits ?", ["Exonération totale", "35 % puis 45 %", "60 %", "Abattement de 15 932 € puis 35 %"], 0, "Toutes les conditions de l'exonération des frères et sœurs sont réunies."],
[3, "Part taxable de 120 000 € pour un enfant : droits ?", ["22 194 €", "24 000 €", "18 000 €", "12 000 €"], 0, "120 000 × 20 % − 1 805,65 = 22 194 €."]
] },

/* ---------------- M13 ---------------- */
{ id: "pro", title: "Fiscalité du dirigeant et de l'entreprise", time: "1 h",
lesson: `
<h3>IR ou IS : la première question</h3>
<div class="tw"><table><thead><tr><th>Structure</th><th>Imposition du bénéfice</th><th>Statut social du dirigeant</th></tr></thead><tbody>
<tr><td>Entreprise individuelle, micro-entreprise</td><td>IR (BIC/BNC) au nom de l'exploitant, option IS possible pour l'EI</td><td>Travailleur non salarié (TNS)</td></tr>
<tr><td>EURL / SARL à l'IR</td><td>IR chez les associés</td><td>Gérant majoritaire : TNS</td></tr>
<tr><td>SARL / EURL à l'IS</td><td>IS</td><td>Gérant majoritaire : TNS</td></tr>
<tr><td>SAS / SASU</td><td>IS</td><td>Président : assimilé salarié</td></tr>
</tbody></table></div>
<p>L'<strong>impôt sur les sociétés</strong> est de 15 % jusqu'à 42 500 € de bénéfice (PME éligibles), 25 % au-delà.</p>

<h3>Rémunération ou dividendes ?</h3>
<p>Le dirigeant d'une société à l'IS a deux façons de se payer :</p>
<ul>
<li><strong>Rémunération</strong> : déductible du résultat de la société, soumise aux cotisations sociales (qui ouvrent des droits retraite, prévoyance), puis à l'IR au barème. Ordre de grandeur du coût : un assimilé salarié coûte environ 1,7 à 1,8 fois le net perçu ; un TNS environ 1,4 à 1,5 fois.</li>
<li><strong>Dividendes</strong> : prélevés sur le bénéfice après IS, puis taxés au PFU de <strong>31,4 %</strong> en 2026. Coût total avec IS à 25 % : 1 − 0,75 × 0,686 ≈ <strong>48,6 %</strong> ; avec IS à 15 % : ≈ 41,7 %.</li>
</ul>
<div class="warn"><span class="tag">Piège TNS</span><p>Pour un gérant majoritaire de SARL (TNS), la part des dividendes qui dépasse <strong>10 %</strong> du capital social, des primes d'émission et des comptes courants est soumise aux cotisations sociales des indépendants. En SAS, ce piège n'existe pas.</p></div>
<p>Le bon mix dépend des besoins de revenus, de la volonté de cotiser pour la retraite, de la TMI du foyer et du projet (réinvestir dans la société ou une holding plutôt que distribuer).</p>

<h3>La holding : outil patrimonial central</h3>
<ul>
<li><strong>Régime mère-fille</strong> : dividendes remontés d'une filiale détenue à 5 % ou plus quasi exonérés d'IS (quote-part de frais de 5 % réintégrée, 1 % en intégration fiscale).</li>
<li><strong>Intégration fiscale</strong> (détention ≥ 95 %) : compensation des résultats du groupe.</li>
<li>La holding permet de réinvestir des dividendes sans passer par l'IR du dirigeant, de racheter des parts d'associés, de préparer une transmission.</li>
<li><strong>Apport-cession</strong> (article 150-0 B ter) : l'apport de titres à une holding avant leur cession place la plus-value en report d'imposition. À savoir que ça existe : la LF 2026 l'a durci (réinvestissement de 70 % du prix dans une activité économique, délais allongés). C'est le terrain des avocats fiscalistes, pas d'un premier rendez-vous.</li>
</ul>
<div class="note"><span class="tag">Nouveau en 2026</span><p>La LF 2026 a créé une taxe annuelle de <strong>20 %</strong> sur la valeur de certains actifs dits somptuaires (logements de loisir, yachts, chevaux de course…) détenus par des holdings patrimoniales, sous conditions de seuils. Une holding qui détient la résidence secondaire du dirigeant doit être auditée.</p></div>

<h3>Céder son entreprise</h3>
<ul>
<li>Plus-value sur titres : PFU (31,4 % pour les cessions de 2026) ou barème sur option.</li>
<li><strong>Départ à la retraite</strong> (article 150-0 D ter) : abattement fixe de <strong>500 000 €</strong> sur la plus-value d'IR, sous conditions (cessation des fonctions, départ en retraite dans les 2 ans, détention depuis 1 an, au moins 25 % du capital…). Prélèvements sociaux dus.</li>
<li>Pour un entrepreneur individuel : exonérations selon le niveau de recettes (article 151 septies) ou la valeur des éléments cédés (article 238 quindecies).</li>
</ul>

<h3>Transmettre son entreprise : le pacte Dutreil en bref</h3>
<p>Exonération de droits de mutation à hauteur de <strong>75 %</strong> de la valeur des titres transmis (donation ou succession), moyennant un engagement collectif de conservation (2 ans) puis individuel, et l'exercice d'une fonction de direction. Pour une donation en pleine propriété par un donateur de moins de 70 ans, les droits restants sont encore réduits de 50 %. La LF 2026 a recentré le dispositif (exclusion des actifs non affectés à l'activité, allongement de l'engagement individuel). Toujours piloté par un notaire ou un avocat.</p>

<h3>Le dirigeant et l'IFI</h3>
<p>Les titres d'une société opérationnelle sont hors IFI (l'IFI ne vise que l'immobilier). L'immobilier d'entreprise détenu via une SCI qui loue à la société d'exploitation peut être qualifié de bien professionnel sous conditions : un levier de taille pour les dirigeants.</p>
<div class="rdv"><span class="tag">Questions à poser au dirigeant</span><ul><li>Forme juridique, régime fiscal, part du capital détenue.</li><li>Rémunération et dividendes des 3 dernières années.</li><li>Trésorerie disponible dans la société et projet de cession ou de transmission (horizon).</li><li>Prévoyance et retraite : que se passe-t-il en cas d'invalidité ou de décès ?</li></ul></div>
`,
keys: [
"IS : 15 % jusqu'à 42 500 €, 25 % au-delà. Dividendes au PFU de 31,4 % en 2026 (≈ 48,6 % au total avec un IS à 25 %).",
"TNS (gérant majoritaire) : dividendes > 10 % du capital soumis à cotisations ; pas en SAS.",
"Holding : régime mère-fille, réinvestissement ; nouvelle taxe de 20 % sur les actifs somptuaires des holdings patrimoniales.",
"Cession retraite : abattement fixe de 500 000 €. Transmission : pacte Dutreil, 75 % d'exonération."
],
ex: [
{ t: "Cas Benoît : rémunération ou dividendes ?",
q: `<p>M. Benoît, président de SASU, dégage 100 000 € de bénéfice avant sa rémunération. Il veut 40 000 € nets dans sa poche cette année. Comparez de façon simplifiée : (a) 100 % dividendes ; (b) rémunération seule. On retient : coût employeur ≈ 1,75 × net de cotisations ; IR non calculé.</p>`,
a: `<p>(a) Dividendes : IS = 15 % × 42 500 + 25 % × 57 500 = 6 375 + 14 375 = 20 750 € ; bénéfice distribuable 79 250 €. Pour 40 000 € nets, il faut 40 000 / 0,686 ≈ 58 309 € de dividendes bruts. Il reste ≈ 20 900 € dans la société. Aucun droit retraite acquis.</p><p>(b) Rémunération : 40 000 € nets de cotisations ≈ 70 000 € de coût total, déductible. Bénéfice restant 30 000 € → IS 4 500 €. Il doit ensuite payer l'IR sur ~40 000 € de salaire imposable, mais il cotise pour sa retraite et sa protection sociale.</p><p>Conclusion : les dividendes laissent plus de trésorerie à court terme ; la rémunération construit des droits sociaux. Un mix (rémunération minimale pour valider des trimestres + dividendes) est souvent retenu.</p>` }
],
qcm: [
[1, "Le taux normal de l'IS est de :", ["25 %", "33,33 %", "15 %", "19 %"], 0, "15 % s'applique jusqu'à 42 500 € pour les PME éligibles."],
[1, "Le président d'une SAS est :", ["Assimilé salarié", "Travailleur non salarié", "Sans protection sociale", "Obligatoirement bénévole"], 0, "Le gérant majoritaire de SARL est TNS."],
[1, "Les dividendes perçus en 2026 par une personne physique sont taxés par défaut à :", ["31,4 %", "30 %", "25 %", "12,8 %"], 0, "PFU = 12,8 % + 18,6 % de PS."],
[2, "Pour un gérant majoritaire de SARL, les dividendes supérieurs à 10 % du capital sont :", ["Soumis aux cotisations sociales des indépendants", "Exonérés", "Imposés à l'IS", "Interdits"], 0, "C'est un frein classique à la distribution en SARL."],
[2, "Le régime mère-fille permet :", ["La quasi-exonération d'IS des dividendes reçus d'une filiale détenue à 5 % au moins", "L'exonération des salaires", "L'exonération d'IFI", "La déduction des dividendes versés aux associés"], 0, "Seule une quote-part de frais de 5 % est taxée."],
[2, "L'abattement fixe pour un dirigeant de PME qui cède ses titres en partant à la retraite est de :", ["500 000 €", "300 000 €", "100 000 €", "1 000 000 €"], 0, "Il ne s'applique qu'à l'IR ; les prélèvements sociaux restent dus."],
[3, "Coût fiscal global d'un euro de bénéfice distribué en dividendes (IS à 25 %, PFU 31,4 %) ?", ["≈ 48,6 %", "56,4 %", "31,4 %", "25 %"], 0, "1 − 0,75 × (1 − 0,314) = 48,55 %."],
[3, "Le pacte Dutreil permet :", ["Une exonération de droits de mutation à hauteur de 75 % de la valeur des titres transmis", "Une exonération totale de plus-value", "Une réduction d'IR de 50 %", "Une exonération d'IS pendant 3 ans"], 0, "Sous engagements de conservation et de direction ; resserré par la LF 2026."],
[3, "La nouvelle taxe de la LF 2026 sur les holdings patrimoniales vise :", ["Certains actifs somptuaires (logements de loisir, yachts…) détenus par la holding, au taux de 20 %", "Tous les dividendes reçus", "Les titres de participation", "Les salaires des dirigeants"], 0, "Taxe annuelle sur la valeur vénale, due par la holding."]
] },

/* ---------------- M14 ---------------- */
{ id: "synthese", title: "Synthèse : le diagnostic patrimonial en rendez-vous", time: "1 h 15",
lesson: `
<h3>La méthode en 5 temps</h3>
<ol>
<li><strong>Découverte</strong> : famille (régime matrimonial, enfants, unions précédentes), activité, revenus, patrimoine (actif et passif), fiscalité (avis IR, IFI), objectifs et horizon.</li>
<li><strong>Profil réglementaire</strong> : connaissance et expérience, capacité à subir des pertes, tolérance au risque, préférences de durabilité (MIF 2 / DDA). C'est une obligation, pas une formalité.</li>
<li><strong>Diagnostic</strong> : forces et faiblesses — liquidité, concentration, fiscalité, protection du conjoint, transmission.</li>
<li><strong>Préconisations</strong> classées par priorité, chiffrées, avec leurs inconvénients.</li>
<li><strong>Suivi</strong> : revue annuelle, à chaque événement familial ou changement de loi.</li>
</ol>

<h3>La grille de lecture rapide</h3>
<div class="tw"><table><thead><tr><th>Question</th><th>Signal d'alerte</th><th>Piste</th></tr></thead><tbody>
<tr><td>Épargne de précaution ?</td><td>Moins de 3 à 6 mois de dépenses disponibles</td><td>Livrets avant tout investissement</td></tr>
<tr><td>Concentration ?</td><td>&gt; 70 % du patrimoine dans un actif (RP, entreprise, un seul immeuble)</td><td>Diversifier progressivement</td></tr>
<tr><td>TMI ?</td><td>30 % ou plus avec peu de charges déductibles</td><td>PER, déficit foncier, Jeanbrun selon projet</td></tr>
<tr><td>Revenus fonciers élevés ?</td><td>Fiscalité à 47 % ou 58 %</td><td>Réel, déficit foncier, arbitrage vers meublé ou capitalisation</td></tr>
<tr><td>IFI ?</td><td>Proche du seuil de 1,3 M€</td><td>Dettes, arbitrage vers financier, démembrement</td></tr>
<tr><td>Protection du conjoint ?</td><td>Concubins, PACS sans testament, famille recomposée</td><td>Mariage, testament, clause bénéficiaire</td></tr>
<tr><td>Transmission ?</td><td>Plus de 60 ans, aucun don, gros patrimoine</td><td>Donations, démembrement, assurance-vie avant 70 ans</td></tr>
</tbody></table></div>

<h3>Les 10 chiffres à connaître par cœur en 2026</h3>
<ul>
<li>Barème IR : 11 600 / 29 579 / 84 577 / 181 917 € ; plafond demi-part 1 807 €.</li>
<li>PFU 31,4 % (assurance-vie 30 %, PS 17,2 %).</li>
<li>Assurance-vie : 4 600 / 9 200 € ; 152 500 € (990 I) ; 30 500 € (757 B).</li>
<li>PER : 10 % des revenus, report 5 ans, plus de déduction après 70 ans.</li>
<li>Micro-foncier 15 000 € / 30 % ; micro-BIC 77 700 € / 50 % ; déficit foncier 10 700 € (21 400 € énergétique).</li>
<li>Plus-values immobilières : 19 % + 17,2 % ; 22 ans / 30 ans.</li>
<li>IFI : 1,3 M€ ; RP −30 %.</li>
<li>Donation : 100 000 € / 15 ans ; 31 865 € petits-enfants et don familial.</li>
<li>Succession : formule 20 % − 1 805,65 € ; conjoint exonéré.</li>
<li>IS 15 % / 25 % ; abattement retraite dirigeant 500 000 €.</li>
</ul>

<h3>Les erreurs qui coûtent cher (et engagent la responsabilité du conseiller)</h3>
<ul>
<li>Recommander un produit défiscalisant à un client à 11 % de TMI.</li>
<li>Oublier la clause bénéficiaire d'un contrat ouvert il y a 20 ans.</li>
<li>Proposer un PER à un client qui a besoin de sa trésorerie dans 3 ans pour autre chose qu'une RP.</li>
<li>Ignorer le régime matrimonial avant une donation de bien commun.</li>
<li>Annoncer un chiffre sans le vérifier : les seuils changent chaque année.</li>
</ul>
<div class="rdv"><span class="tag">Compte rendu</span><p>Chaque rendez-vous donne lieu à une lettre de mission ou un document d'entrée en relation, puis à un rapport écrit d'adéquation : besoins, profil, préconisations, risques. Ce document vous protège autant qu'il protège le client.</p></div>
`,
keys: [
"Découverte → profil MIF 2 → diagnostic → préconisations → suivi.",
"Priorité : épargne de précaution, protection du conjoint, puis fiscalité et transmission.",
"Un avantage fiscal ne justifie jamais à lui seul un placement.",
"Écrire : rapport d'adéquation et justification de chaque recommandation."
],
ex: [
{ t: "Cas de synthèse : M. et Mme Arnaud",
q: `<p>M. (58 ans, cadre dirigeant) et Mme (55 ans, sans activité) Arnaud, mariés sous la communauté réduite aux acquêts, 2 enfants majeurs (27 et 30 ans, l'aîné signe une VEFA en décembre 2026).</p>
<ul><li>Revenu net imposable : 180 000 € ; TMI 41 % ; plafond PER disponible 52 000 € (avec reports).</li>
<li>RP 950 000 € ; appartement loué nu 420 000 € (sans crédit, loyers 18 000 €/an, au micro-foncier par habitude) ; maison de vacances 380 000 €.</li>
<li>Livrets 60 000 € ; compte-titres 350 000 € ; assurance-vie 200 000 € (ouverte en 2010, clause standard).</li></ul>
<p>Proposez 5 préconisations chiffrées, par ordre de priorité.</p>`,
a: `<ol>
<li><strong>Don pour la VEFA avant le 31/12/2026</strong> : chaque parent peut donner 100 000 € exonérés (790 A bis) à l'aîné, en plus des abattements classiques. Soit jusqu'à 200 000 € sans droits, à affecter à l'achat sous 6 mois. Un don équivalent ou une donation-partage peut rétablir l'équilibre avec le cadet.</li>
<li><strong>Revenus fonciers</strong> : 18 000 € > 15 000 €, le micro-foncier n'est plus possible : passage obligatoire au réel. Si des travaux énergétiques sont à faire, déficit foncier jusqu'à 21 400 € imputable avant fin 2027.</li>
<li><strong>IFI</strong> : RP 665 000 + appartement 420 000 + maison 380 000 = 1 465 000 € → IFI ≈ 2 500 + 1 155 = 3 655 €. Pistes : don de la nue-propriété de l'appartement (ne réduit pas l'IFI des usufruitiers), arbitrage, ou acceptation de l'impôt. Le don VEFA de liquidités n'y change rien.</li>
<li><strong>PER</strong> : TMI 41 %, retraite dans ~6 ans. Versement de 30 000 € → économie de 12 300 €. Sortie fractionnée sur plusieurs années.</li>
<li><strong>Assurance-vie</strong> : M. a moins de 70 ans : arbitrer une partie du compte-titres (au PFU) vers l'assurance-vie, revoir la clause (démembrée au profit de Mme si elle doit être protégée). Prévoir une donation au dernier vivant au profit de Mme, sans activité.</li>
</ol>` }
],
qcm: [
[1, "Avant tout placement, le conseiller vérifie en priorité :", ["L'épargne de précaution disponible", "La TMI", "L'IFI", "Le régime matrimonial"], 0, "Sans réserve de liquidités, tout placement risque d'être débloqué au mauvais moment."],
[1, "Le questionnaire de profil investisseur (MIF 2 / DDA) est :", ["Une obligation réglementaire préalable au conseil", "Facultatif pour les clients fortunés", "Réservé aux placements en bourse", "Remplacé par l'avis d'imposition"], 0, "Il conditionne l'adéquation des recommandations."],
[2, "Un client a 85 % de son patrimoine dans sa société. Principal risque ?", ["La concentration : sort de l'entreprise = sort du patrimoine", "L'IFI", "La fiscalité des livrets", "Le plafonnement des niches"], 0, "Diversification progressive (holding, dividendes réinvestis, immobilier, financier)."],
[2, "Un couple de concubins sans testament, propriétaires de leur RP en indivision. Priorité ?", ["Protéger le survivant : PACS ou mariage + testament, ou assurance-vie", "Ouvrir un PER", "Acheter un bien en Jeanbrun", "Faire un don aux enfants"], 0, "Sans cela, le survivant n'hérite de rien et paierait 60 % s'il était légataire."],
[3, "Quel cumul maximal de dons exonérés un parent de 60 ans peut-il faire à son enfant qui achète un logement neuf en 2026 (sans don antérieur) ?", ["231 865 €", "131 865 €", "100 000 €", "300 000 €"], 0, "100 000 € (abattement) + 31 865 € (790 G) + 100 000 € (790 A bis)."],
[3, "Un client de 66 ans à 41 % de TMI, 400 000 € de liquidités, veut préparer sa transmission et réduire son IR. Combinaison la plus cohérente ?", ["Assurance-vie avant 70 ans et PER dans la limite du plafond, avec une sortie progressive", "Tout en SCPI en direct", "FIP pour 400 000 €", "Compte-titres uniquement"], 0, "L'assurance-vie profite des 152 500 € par bénéficiaire ; le PER déduit à 41 % tant qu'il a moins de 70 ans."],
[3, "Que doit contenir le rapport d'adéquation remis au client ?", ["Ses besoins, son profil, les préconisations retenues et leurs risques, et la justification de leur adéquation", "Uniquement les frais", "La copie de son avis d'imposition", "Une simulation de rendement garanti"], 0, "C'est la trace écrite du devoir de conseil."]
] }

);
})();
