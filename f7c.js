/* Formation 7 — module 15 : atelier d'analyse sectorielle */
(function(){
const f = window.FB.formations.find(x => x.id === "finance");
f.modules.push({
id: "atelier", title: "Atelier : quatre sociétés à analyser", time: "1 h 45",
lesson: `
<h3>Mettre la grille à l'épreuve</h3>
<p>Quatre profils que l'on rencontre en bourse comme en private equity, chacun avec ses indicateurs propres : un éditeur de logiciels, une foncière, une banque et un industriel cyclique. Pour chaque cas, calculez avant d'ouvrir la correction, puis formulez une décision : investir, attendre un meilleur prix, ou renoncer.</p>
<div class="note"><span class="tag">Rappels utiles</span><ul>
<li>Règle des 40 (SaaS) : croissance du CA en % + marge de FCF en % ≥ 40.</li>
<li>Foncière : LTV = dette nette ÷ valeur des actifs ; ANR ≈ actifs − dette nette (simplifié).</li>
<li>Banque : P/TBV « justifié » ≈ (ROTE − g) ÷ (coût des fonds propres − g).</li>
<li>Cyclique : raisonner sur un bénéfice normatif de cycle, pas sur le dernier exercice.</li>
</ul></div>
`,
keys: [
"Chaque secteur a sa mesure de la valeur : ARR, ANR, P/TBV, bénéfice de cycle.",
"Le levier (financier ou opérationnel) amplifie tout, dans les deux sens.",
"Une décision d'investissement inclut toujours un prix d'achat cible."
],
ex: [
{ t: "1. Cloudia, éditeur SaaS",
q: `<p>Revenus récurrents annualisés (ARR) 80 M€, croissance 30 %, marge de FCF −5 %, rétention nette (NRR) 105 %, trésorerie 60 M€, pas de dette. Valeur d'entreprise 800 M€.</p><ol><li>Règle des 40 ?</li><li>Multiple VE/ARR ?</li><li>Combien de temps la trésorerie couvre-t-elle la consommation de cash ?</li><li>Que doit-il se passer pour justifier le prix ?</li></ol>`,
a: `<ol><li>30 − 5 = <strong>25</strong> : sous 40.</li><li>800 / 80 = <strong>10x l'ARR</strong>.</li><li>FCF ≈ −4 M€ par an : plus de 10 ans de réserve, aucun risque de liquidité à court terme.</li><li>Le prix suppose une croissance durable et une forte hausse des marges. Une NRR de 105 % (les clients existants dépensent 5 % de plus chaque année) est correcte mais pas exceptionnelle (les meilleurs dépassent 120 %). Décision : attendre une amélioration de la règle des 40 (par exemple 22 % de croissance et 18 % de marge de FCF) ou un prix plus bas.</li></ol>` },
{ t: "2. Pierre & Bureaux, foncière",
q: `<p>Patrimoine de bureaux valorisé 2 000 M€, dette nette 900 M€ (coût 3,5 %), loyers nets 110 M€, frais de structure 10 M€. 50 millions d'actions, cours 15 €. On ignore les impôts différés.</p><ol><li>LTV et ANR par action ?</li><li>Décote sur ANR ?</li><li>Résultat récurrent par action et rendement sur le cours ?</li><li>Que deviennent la LTV et l'ANR si les valeurs d'expertise baissent de 10 % ?</li></ol>`,
a: `<ol><li>LTV = 900 / 2 000 = <strong>45 %</strong>. ANR = 1 100 M€, soit <strong>22 € par action</strong>.</li><li>(22 − 15) / 22 ≈ <strong>32 %</strong>.</li><li>110 − 31,5 (intérêts) − 10 = 68,5 M€, soit <strong>1,37 € par action</strong> : rendement de 9,1 % sur le cours.</li><li>Actifs 1 800 M€ : LTV <strong>50 %</strong> ; ANR 900 M€, soit 18 € (−18 % pour −10 % d'actifs). Le levier amplifie la baisse ; une LTV de 50 % approche les covenants usuels. La décote de 32 % rémunère ce risque : investir seulement si l'on a confiance dans le marché des bureaux et l'échéancier de dette.</li></ol>` },
{ t: "3. Banque Régionale, banque cotée",
q: `<p>Rentabilité des capitaux propres tangibles (ROTE) durable estimée à 8 %, coût des fonds propres 11 %, croissance de long terme 2 %. Ratio CET1 13,5 %. Elle cote 0,6x son actif net tangible.</p><ol><li>Quel P/TBV est « justifié » ?</li><li>L'action est-elle bon marché ?</li><li>Et si la banque relevait durablement son ROTE à 12 % ?</li></ol>`,
a: `<ol><li>(8 − 2) / (11 − 2) = <strong>0,67x</strong>.</li><li>À 0,6x, la décote est faible (≈ 10 %) : l'action n'est pas une affaire, elle est à peu près correctement valorisée pour une banque qui ne couvre pas son coût du capital.</li><li>(12 − 2) / 9 = <strong>1,11x</strong> : le potentiel serait de +85 %. Tout dépend de la crédibilité du plan d'amélioration du ROTE (coûts, coût du risque, capital excédentaire avec un CET1 confortable de 13,5 %, qui permet des rachats d'actions).</li></ol>` },
{ t: "4. Acier Moderne, industriel cyclique",
q: `<p>Bénéfice par action sur les 5 dernières années : 2, 4, 6, 3, 1 €. Le dernier exercice (6 €) était un sommet de cycle ; le cours est de 48 €. Dette nette / EBITDA : 0,8x au sommet.</p><ol><li>PER sur le bénéfice du sommet et sur le bénéfice moyen de cycle ?</li><li>Que devient le levier si l'EBITDA est divisé par 3 au creux ?</li><li>Décision ?</li></ol>`,
a: `<ol><li>PER au sommet : 48 / 6 = <strong>8x</strong> (apparemment bon marché). Bénéfice moyen : 3,2 € → PER normatif <strong>15x</strong>, nettement moins attractif pour un cyclique.</li><li>0,8 × 3 = <strong>2,4x</strong> : tenable, mais la marge de sécurité se réduit.</li><li>Ne pas acheter au sommet sur un PER faible ; viser un prix proche de 10-12x le bénéfice normatif (32 à 38 €), ou entrer au creux du cycle quand le PER publié paraît élevé.</li></ol>` }
],
qcm: [
[2, "Un SaaS croît de 35 % avec une marge de FCF de 10 %. Règle des 40 ?", ["45, respectée", "25, non respectée", "350", "3,5"], 0, "35 + 10 = 45."],
[2, "Une foncière : actifs 1 000, dette nette 400. LTV ?", ["40 %", "60 %", "250 %", "4 %"], 0, "400 / 1 000."],
[2, "Pourquoi un cyclique paraît-il bon marché au sommet du cycle ?", ["Ses bénéfices sont temporairement au plus haut, ce qui écrase le PER", "Parce que sa dette disparaît", "Parce que son CA est stable", "Ce n'est jamais le cas"], 0, "Raisonner sur un bénéfice normatif."],
[3, "Banque : ROTE 14 %, coût des fonds propres 10 %, g 2 %. P/TBV justifié ?", ["1,5x", "1,4x", "0,8x", "2,0x"], 0, "(14 − 2) / (10 − 2) = 1,5."],
[3, "Foncière à LTV 45 % : une baisse de 10 % des valeurs d'expertise fait baisser l'ANR d'environ :", ["18 %", "10 %", "4,5 %", "45 %"], 0, "Le levier amplifie : 200 / 1 100."],
[3, "Un SaaS a une rétention nette (NRR) de 125 %. Cela signifie :", ["Qu'à base de clients constante, le revenu croît de 25 % par an", "Qu'il perd 25 % de ses clients", "Que sa marge est de 25 %", "Qu'il est valorisé 1,25x son CA"], 0, "Ventes additionnelles supérieures aux résiliations."]
]
});
})();
