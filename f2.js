/* Formation 2 — Droit patrimonial de la famille */
(window.FB = window.FB || {formations: []}).formations.push({
  id: "droitpat", num: 2, short: "Droit patrimonial", title: "Droit patrimonial de la famille",
  kicker: "Transmission · protection", hours: "≈ 5 h",
  blurb: "Régimes matrimoniaux, qui hérite de quoi, réserve héréditaire, donations, testament et protection des proches : ce qu'on a le droit de faire, et ce qu'on ne peut pas.",
  intro: "Le volet civil qui accompagne la fiscalité : avant de calculer des droits, il faut savoir qui hérite, ce qui est permis et ce qui est interdit. Cinq modules d'une heure, centrés sur les situations de rendez-vous : couple, enfants d'unions différentes, parent vulnérable.",
  modules: [

{ id: "couple", title: "Mariage, PACS, concubinage : qui possède quoi", time: "1 h",
lesson: `
<h3>Trois statuts de couple, trois mondes juridiques</h3>
<div class="tw"><table><thead><tr><th></th><th>Mariage</th><th>PACS</th><th>Concubinage</th></tr></thead><tbody>
<tr><td>Biens</td><td>Selon le régime matrimonial</td><td>Séparation par défaut (indivision sur option)</td><td>Chacun ses biens ; indivision pour les achats communs</td></tr>
<tr><td>Héritier légal</td><td>Oui</td><td>Non (testament nécessaire)</td><td>Non</td></tr>
<tr><td>Droits de succession</td><td>Exonéré</td><td>Exonéré (si testament)</td><td>60 %</td></tr>
<tr><td>Logement au décès</td><td>Droit temporaire 1 an + droit viager</td><td>Jouissance gratuite 1 an</td><td>Aucun</td></tr>
<tr><td>Pension de réversion</td><td>Oui</td><td>Non</td><td>Non</td></tr>
</tbody></table></div>

<h3>Le régime légal : la communauté réduite aux acquêts</h3>
<p>Les époux mariés sans contrat depuis 1966 relèvent de ce régime :</p>
<ul>
<li><strong>Biens propres</strong> : ceux possédés avant le mariage, ceux reçus par donation ou succession (même pendant le mariage), les biens à caractère personnel (vêtements, indemnités de préjudice corporel…).</li>
<li><strong>Biens communs</strong> : tout ce qui est acquis pendant le mariage, y compris avec les salaires d'un seul époux, et les revenus des biens propres.</li>
<li>Si un bien propre sert à financer un bien commun (ou l'inverse), une <strong>récompense</strong> est due à la dissolution. Pour qu'un bien acheté avec des fonds propres reste propre, il faut une <strong>déclaration d'emploi ou de remploi</strong> dans l'acte d'achat.</li>
</ul>
<p>Le <strong>logement de la famille</strong> est protégé quel que soit le régime : aucun époux ne peut le vendre ou résilier le bail sans l'accord de l'autre, même s'il en est seul propriétaire (article 215 du code civil).</p>
<div class="warn"><span class="tag">Dettes</span><p>Les dettes ménagères (entretien du ménage, éducation des enfants) engagent solidairement les deux époux, sauf dépenses manifestement excessives. Un emprunt ou un cautionnement signé par un seul époux n'engage que ses biens propres et ses revenus, pas les biens communs, sauf accord de l'autre.</p></div>

<h3>Les régimes conventionnels (contrat de mariage)</h3>
<ul>
<li><strong>Séparation de biens</strong> : chacun reste seul propriétaire de ce qu'il acquiert. Protège le conjoint d'un entrepreneur des créanciers professionnels. Inconvénient : le conjoint qui n'a pas de revenus ne se constitue aucun patrimoine.</li>
<li><strong>Participation aux acquêts</strong> : séparation pendant le mariage, partage de l'enrichissement à la dissolution. Compromis apprécié des professions libérales.</li>
<li><strong>Communauté universelle</strong> : tous les biens sont communs. Avec une <strong>clause d'attribution intégrale</strong> au survivant, celui-ci recueille tout sans succession. Les enfants n'héritent qu'au second décès, en perdant l'usage d'un des deux abattements de 100 000 €. Les enfants d'une autre union peuvent agir en <strong>retranchement</strong> pour protéger leur réserve.</li>
</ul>
<p>Le régime peut être changé à tout moment par acte notarié (le délai de deux ans a été supprimé en 2019). Une homologation par le juge n'est nécessaire qu'en cas d'enfant mineur dont les intérêts sont en jeu ou d'opposition d'un enfant majeur ou d'un créancier.</p>

<h3>Les avantages matrimoniaux</h3>
<p>Un contrat peut prévoir une <strong>clause de préciput</strong> (le survivant prélève un bien commun, souvent la résidence principale, avant tout partage), un <strong>partage inégal</strong> de la communauté ou une <strong>attribution intégrale</strong>. Ces avantages ne sont pas des donations : ils ne s'imputent pas sur la quotité disponible, sauf action en retranchement des enfants non communs.</p>

<h3>Le PACS</h3>
<p>Depuis 2007, les partenaires sont en <strong>séparation de biens</strong> par défaut ; ils peuvent opter pour l'indivision. Le partenaire n'est <strong>pas héritier</strong> : sans testament, il ne reçoit rien (en dehors de la jouissance gratuite du logement pendant un an). Avec un testament, il est exonéré de droits mais ne peut recevoir que la quotité disponible s'il y a des enfants.</p>

<h3>Le concubinage</h3>
<p>Aucun droit successoral, aucune exonération : un legs au concubin est taxé à <strong>60 %</strong> après 1 594 € d'abattement. Les biens achetés ensemble sont en <strong>indivision</strong> selon les quotes-parts de l'acte. Les outils de protection : assurance-vie (152 500 € d'abattement avant 70 ans), achat en tontine ou via une SCI, et surtout… le PACS ou le mariage.</p>
`,
keys: [
"Communauté légale : propres (avant mariage, donations, successions) / communs (acquis pendant).",
"Logement familial : vente impossible sans l'accord des deux époux.",
"Partenaire de PACS : pas héritier sans testament ; concubin taxé à 60 %.",
"Attribution intégrale : protège le survivant, mais action en retranchement pour les enfants non communs."
],
ex: [
{ t: "Propre ou commun ?",
q: `<p>Paul et Léa sont mariés sans contrat depuis 2012. Classez chaque bien : (1) l'appartement acheté par Paul en 2009 ; (2) la maison héritée par Léa en 2020 ; (3) le PEA ouvert par Paul en 2015 et alimenté par ses salaires ; (4) les loyers perçus de la maison de Léa ; (5) le studio acheté en 2022 avec les 150 000 € du prix de vente d'un terrain hérité par Léa, avec déclaration de remploi.</p>`,
a: `<ol><li>Propre à Paul (acquis avant le mariage).</li><li>Propre à Léa (succession).</li><li>Commun (acquis pendant le mariage avec des revenus). Seul Paul en est titulaire, mais la valeur est commune.</li><li>Communs (revenus de biens propres).</li><li>Propre à Léa grâce à la déclaration de remploi. Sans elle, le studio aurait été commun, avec une récompense due à Léa.</li></ol>` }
],
qcm: [
[1, "Des époux mariés sans contrat en 2015 sont soumis au régime de :", ["La communauté réduite aux acquêts", "La séparation de biens", "La communauté universelle", "La participation aux acquêts"], 0, "C'est le régime légal depuis 1966."],
[1, "Une maison reçue en donation par un époux pendant le mariage est :", ["Un bien propre", "Un bien commun", "Indivise entre les époux", "Commune pour moitié"], 0, "Les biens reçus à titre gratuit restent propres."],
[1, "Le partenaire de PACS hérite de son partenaire :", ["Seulement s'il y a un testament", "Toujours, comme un conjoint", "Jamais", "Seulement en l'absence d'enfants"], 0, "Le PACS ne fait pas du partenaire un héritier légal."],
[2, "Un époux veut vendre le logement familial qui lui appartient en propre. Il lui faut :", ["L'accord de son conjoint", "L'accord du juge", "Rien, c'est son bien", "L'accord de ses enfants"], 0, "Article 215 du code civil, quel que soit le régime."],
[2, "Pour qu'un bien acheté pendant le mariage avec des fonds hérités reste propre, il faut :", ["Une déclaration d'emploi ou de remploi dans l'acte d'achat", "Que le bien soit au seul nom de l'héritier", "Attendre 5 ans", "Un contrat de mariage"], 0, "Sinon, le bien est commun et l'époux a droit à une récompense."],
[2, "Changer de régime matrimonial en 2026 :", ["Est possible par acte notarié, sans délai minimal depuis 2019", "Exige 2 ans de mariage", "Exige toujours le juge", "Est impossible après la naissance d'un enfant"], 0, "Le juge n'intervient qu'en présence d'enfant mineur concerné ou d'opposition."],
[3, "La clause d'attribution intégrale en communauté universelle présente quel inconvénient fiscal pour les enfants communs ?", ["Ils n'héritent qu'une fois, au second décès, et perdent l'usage d'un abattement de 100 000 €", "Ils paient des droits au premier décès", "Le conjoint est taxé à 20 %", "Elle est interdite avec enfants"], 0, "Au premier décès, il n'y a pas de succession pour eux."],
[3, "Un enfant né d'une première union, face à une communauté universelle avec attribution intégrale au second conjoint, peut :", ["Exercer l'action en retranchement pour préserver sa réserve", "Faire annuler le mariage", "Réclamer la moitié des biens communs", "Rien"], 0, "L'avantage matrimonial est alors réduit à la quotité disponible spéciale entre époux."],
[3, "Un cautionnement signé par un seul époux marié sous le régime légal engage :", ["Ses biens propres et ses revenus, pas les biens communs sans l'accord du conjoint", "Tous les biens communs", "Le conjoint solidairement", "Aucun bien"], 0, "Article 1415 du code civil."]
] },

{ id: "heritiers", title: "Qui hérite ? Ordres, réserve, droits du conjoint", time: "1 h",
lesson: `
<h3>Sans testament : la loi désigne les héritiers</h3>
<p>Les héritiers sont classés en <strong>ordres</strong>. Le premier ordre qui a un représentant exclut les suivants :</p>
<ol>
<li><strong>Descendants</strong> : enfants (quelle que soit leur filiation, y compris adoptés), petits-enfants par représentation d'un enfant prédécédé ou renonçant.</li>
<li><strong>Parents et frères et sœurs</strong> (« ordre privilégié ») : chaque parent reçoit 1/4, le reste va aux frères et sœurs (ou à leurs descendants).</li>
<li><strong>Ascendants ordinaires</strong> (grands-parents…), répartis par moitié entre ligne paternelle et maternelle (la fente).</li>
<li><strong>Collatéraux ordinaires</strong> (oncles, tantes, cousins) jusqu'au 6e degré.</li>
</ol>
<p>À défaut de tout héritier, la succession revient à l'État.</p>

<h3>Les droits du conjoint survivant</h3>
<div class="tw"><table><thead><tr><th>Le défunt laisse…</th><th>Le conjoint reçoit</th></tr></thead><tbody>
<tr><td>Uniquement des enfants communs</td><td>Au choix : 1/4 en pleine propriété ou la totalité en usufruit</td></tr>
<tr><td>Au moins un enfant d'une autre union</td><td>1/4 en pleine propriété (pas de choix)</td></tr>
<tr><td>Pas d'enfant, ses deux parents</td><td>1/2 (chaque parent 1/4)</td></tr>
<tr><td>Pas d'enfant, un seul parent</td><td>3/4</td></tr>
<tr><td>Ni enfant ni parent</td><td>Totalité (sauf droit de retour des frères et sœurs sur la moitié des biens de famille)</td></tr>
</tbody></table></div>
<p>Le conjoint bénéficie aussi d'un <strong>droit temporaire au logement</strong> (un an gratuit, d'ordre public) et d'un <strong>droit viager d'usage et d'habitation</strong> sur la résidence principale et son mobilier, qu'il doit demander dans l'année. Seul un testament authentique peut l'en priver.</p>
<p>Attention : seul le conjoint <strong>marié et non divorcé</strong> est concerné. L'ex-conjoint divorcé n'a aucun droit ; le conjoint séparé de corps garde en principe ses droits.</p>

<h3>La réserve héréditaire : ce qu'on ne peut pas retirer</h3>
<p>En France, on ne peut pas déshériter ses enfants. Une part minimale de la succession leur est réservée :</p>
<div class="tw"><table><thead><tr><th>Nombre d'enfants</th><th class="n">Réserve globale</th><th class="n">Quotité disponible</th></tr></thead><tbody>
<tr><td>1</td><td class="n">1/2</td><td class="n">1/2</td></tr>
<tr><td>2</td><td class="n">2/3</td><td class="n">1/3</td></tr>
<tr><td>3 et plus</td><td class="n">3/4</td><td class="n">1/4</td></tr>
</tbody></table></div>
<p>Sans descendant, le <strong>conjoint</strong> devient héritier réservataire pour 1/4. Les parents ne sont plus réservataires depuis 2006 (ils ont seulement un droit de retour sur les biens qu'ils avaient donnés). Les frères et sœurs ne sont jamais réservataires : on peut les déshériter par testament.</p>
<p>La <strong>quotité disponible</strong> peut être donnée ou léguée librement : à un enfant (pour l'avantager), au conjoint, à un ami, à une association. Les donations qui dépassent la quotité sont <strong>réductibles</strong> à la demande des réservataires, en valeur (indemnité).</p>
<div class="ex"><span class="tag">Calcul de la masse</span><p>La réserve se calcule sur une masse fictive : biens existants au décès − dettes + donations faites de son vivant (à leur valeur au décès, sauf donation-partage). L'assurance-vie n'y entre pas, sauf primes manifestement exagérées.</p></div>

<h3>Successions internationales</h3>
<p>Depuis le règlement européen de 2015, la loi applicable est celle de la <strong>dernière résidence habituelle</strong> du défunt, sauf choix de sa loi nationale par testament. Un retraité français installé au Portugal relève donc du droit portugais. Depuis 2021, si la loi étrangère ignore la réserve, les enfants peuvent exercer un <strong>prélèvement compensatoire</strong> sur les biens situés en France.</p>
`,
keys: [
"Ordres : descendants > parents et frères/sœurs > ascendants > collatéraux jusqu'au 6e degré.",
"Conjoint avec enfants communs : 1/4 en PP ou 100 % en usufruit ; avec un enfant d'une autre union : 1/4 en PP.",
"Réserve : 1/2, 2/3, 3/4 selon 1, 2, 3 enfants et plus. Conjoint réservataire (1/4) sans descendant.",
"Frères et sœurs et parents ne sont pas réservataires."
],
ex: [
{ t: "Trois successions à répartir",
q: `<ol><li>M. A. décède marié, 2 enfants communs, sans testament ni donation. Patrimoine propre 600 000 €. Options de son épouse ?</li><li>Mme B. décède mariée, un enfant d'une première union et un enfant commun. Droits du conjoint ?</li><li>M. C., célibataire sans enfant, laisse sa mère et un frère. Répartition ? Peut-il léguer tout à une association ?</li></ol>`,
a: `<ol><li>Elle choisit entre 150 000 € en pleine propriété (1/4) ou l'usufruit des 600 000 € ; les enfants reçoivent le reste (3/4 en PP ou la nue-propriété).</li><li>1/4 en pleine propriété seulement (présence d'un enfant non commun).</li><li>La mère reçoit 1/4, le frère 3/4. Aucun d'eux n'étant réservataire, il peut tout léguer à l'association par testament (la mère conserve un droit de retour sur les biens qu'elle lui aurait donnés).</li></ol>` }
],
qcm: [
[1, "Peut-on, en France, déshériter totalement ses enfants par testament ?", ["Non, ils sont héritiers réservataires", "Oui, librement", "Oui, s'ils sont majeurs", "Oui, avec l'accord du notaire"], 0, "La réserve héréditaire est d'ordre public."],
[1, "Avec 2 enfants, la quotité disponible est de :", ["1/3", "1/2", "1/4", "2/3"], 0, "La réserve globale est des 2/3."],
[1, "En l'absence de testament, qui hérite en premier ?", ["Les descendants", "Le conjoint seul", "Les parents", "Les frères et sœurs"], 0, "Le conjoint concourt avec les héritiers selon les règles du tableau."],
[2, "Le conjoint survivant avec uniquement des enfants communs peut choisir :", ["1/4 en pleine propriété ou la totalité en usufruit", "1/2 en pleine propriété", "La totalité en pleine propriété", "Seulement l'usufruit de la résidence"], 0, "Une donation au dernier vivant élargit ces options."],
[2, "Si un enfant est issu d'une autre union, le conjoint reçoit :", ["1/4 en pleine propriété", "L'usufruit total", "Le choix entre les deux", "Rien"], 0, "Le législateur évite un long usufruit au profit d'un beau-parent."],
[2, "Les frères et sœurs du défunt sont-ils réservataires ?", ["Non, jamais", "Oui, pour 1/4", "Oui, sans enfant ni conjoint", "Seulement s'ils sont mineurs"], 0, "On peut les écarter par testament."],
[3, "Le conjoint survivant, en l'absence de descendants, est réservataire pour :", ["1/4", "1/2", "Il n'est jamais réservataire", "La totalité"], 0, "Article 914-1 du code civil."],
[3, "Un Français retraité résidant au Portugal décède sans testament. Quelle loi régit sa succession ?", ["La loi portugaise (dernière résidence habituelle)", "La loi française (nationalité)", "Le choix des héritiers", "La loi du lieu de chaque bien"], 0, "Règlement européen n° 650/2012, applicable depuis août 2015."],
[3, "Le droit viager au logement du conjoint peut être écarté :", ["Uniquement par un testament authentique du défunt", "Par un testament olographe", "Par les enfants à la majorité", "Jamais"], 0, "Le droit temporaire d'un an, lui, ne peut jamais être écarté."]
] },

{ id: "donner", title: "Donner de son vivant : ce qui est permis", time: "1 h",
lesson: `
<h3>Les règles de base de la donation</h3>
<ul>
<li>Une donation est <strong>irrévocable</strong> : on ne reprend pas ce qu'on a donné. Exceptions : ingratitude grave, inexécution d'une charge, et donations entre époux de biens à venir.</li>
<li>Elle se fait par <strong>acte notarié</strong>, sauf le <strong>don manuel</strong> (remise de la main à la main ou virement d'argent, de titres, de meubles), qui doit être déclaré à l'administration fiscale.</li>
<li>Le donateur doit être sain d'esprit ; une personne sous tutelle ne donne qu'avec l'autorisation du juge.</li>
</ul>

<h3>Rapport et réduction : les deux mécanismes à expliquer aux familles</h3>
<p><strong>Le rapport</strong> assure l'égalité entre héritiers. Une donation à un enfant est, par défaut, une <strong>avance sur sa part d'héritage</strong> (« en avancement de part successorale ») : au décès, elle est « rapportée » (ajoutée fictivement) à la succession, pour sa <strong>valeur au jour du partage</strong>. Un appartement donné 150 000 € qui vaut 400 000 € au décès compte pour 400 000 €.</p>
<p>Le donateur peut au contraire faire une donation <strong>hors part successorale</strong> (préciputaire) : elle n'est pas rapportée et s'impute sur la quotité disponible. C'est la façon légale d'avantager un enfant.</p>
<p><strong>La réduction</strong> protège la réserve : si les donations dépassent la quotité disponible, les enfants lésés peuvent demander une indemnité de réduction.</p>

<h3>La donation-partage : le meilleur outil familial</h3>
<p>Le parent répartit lui-même ses biens entre ses enfants présomptifs héritiers, dans un acte unique. Avantages :</p>
<ul>
<li>Les biens sont <strong>évalués au jour de la donation-partage</strong> (et non au décès) pour le calcul de la réserve, si tous les enfants y participent et acceptent leurs lots.</li>
<li>Pas de rapport : chacun sait ce qu'il a reçu.</li>
<li>Elle peut être <strong>transgénérationnelle</strong> : un enfant consent à ce que ses propres enfants reçoivent à sa place.</li>
<li>Seuls les héritiers présomptifs (enfants, ou petits-enfants en transgénérationnelle) peuvent être allotis, pas le conjoint. Les couples avec enfants communs utilisent la donation-partage conjonctive, faite par les deux parents.</li>
</ul>

<h3>Les clauses utiles dans un acte de donation</h3>
<ul>
<li><strong>Réserve d'usufruit</strong> : le donateur garde l'usage et les revenus.</li>
<li><strong>Droit de retour conventionnel</strong> : si le donataire décède avant le donateur, le bien revient au donateur (sans droits) au lieu de partir au conjoint du donataire.</li>
<li><strong>Interdiction d'aliéner</strong> : temporaire et justifiée par un intérêt sérieux (protéger l'usufruit, assurer le retour).</li>
<li><strong>Exclusion de communauté</strong> : le bien reste personnel au donataire même s'il adopte plus tard une communauté universelle.</li>
<li><strong>Charge</strong> : obligation imposée au donataire (verser une rente, payer les droits…).</li>
</ul>

<h3>Le présent d'usage</h3>
<p>Cadeau fait à une occasion (anniversaire, mariage, diplôme, Noël) et <strong>proportionné</strong> aux revenus et au patrimoine du donateur. Il n'est ni rapportable ni taxable. Une montre à 2 000 € pour les 18 ans d'un enfant, de la part de parents aisés, en est un. 50 000 € pour un anniversaire, sûrement pas.</p>

<h3>La donation au dernier vivant (entre époux)</h3>
<p>Elle augmente les droits du conjoint survivant en lui ouvrant trois options, à choisir au décès :</p>
<ol>
<li>La quotité disponible ordinaire en pleine propriété ;</li>
<li>1/4 en pleine propriété et 3/4 en usufruit ;</li>
<li>La totalité en usufruit.</li>
</ol>
<p>Elle porte sur les biens à venir, ne coûte que les frais notariés (quelques centaines d'euros), est <strong>révocable</strong> librement (sauf si faite par contrat de mariage) et permet au conjoint de « cantonner » son émolument (ne prendre qu'une partie). C'est l'outil indispensable en présence d'enfants d'une autre union, où la loi ne donne que 1/4 en pleine propriété au conjoint.</p>
`,
keys: [
"Donation irrévocable ; don manuel à déclarer ; immobilier par acte notarié.",
"Donation simple = avance de part, rapportée à sa valeur au décès ; hors part = sur la quotité disponible.",
"Donation-partage : valeurs figées au jour de l'acte, outil de paix familiale.",
"Donation au dernier vivant : 3 options pour le conjoint, révocable, peu coûteuse."
],
ex: [
{ t: "Le piège du rapport",
q: `<p>En 2010, Mme D. a donné (donation simple) un terrain à bâtir de 50 000 € à son fils Marc, qui y a construit sa maison. Sa fille Julie n'a rien reçu. Mme D. décède en 2026 en laissant 300 000 € de liquidités. Le terrain nu vaut alors 120 000 €.</p><ol><li>Comment se fait le partage ?</li><li>Qu'aurait changé une donation-partage en 2010 incluant 50 000 € pour Julie ?</li></ol>`,
a: `<ol><li>Masse de partage : 300 000 + 120 000 (valeur du terrain au partage, dans son état au jour de la donation, sans la maison construite par Marc) = 420 000 €, soit 210 000 € chacun. Marc a déjà 120 000 € : il reçoit 90 000 € ; Julie 210 000 €.</li><li>Les biens auraient été évalués à leur valeur de 2010 : chaque enfant aurait reçu 50 000 €, et les 300 000 € auraient été partagés par moitié. Aucun réajustement en fonction de la hausse du terrain.</li></ol>` }
],
qcm: [
[1, "Une donation peut-elle être annulée par le donateur parce qu'il le regrette ?", ["Non, elle est irrévocable (sauf exceptions légales)", "Oui, dans les 5 ans", "Oui, à tout moment", "Oui, avec l'accord du notaire"], 0, "Les exceptions : ingratitude, inexécution des charges, donation de biens à venir entre époux."],
[1, "Un don de 30 000 € par virement d'un père à sa fille :", ["Est un don manuel à déclarer", "Doit passer devant notaire", "Est un présent d'usage", "Est interdit"], 0, "La déclaration fait courir le délai de 15 ans et fixe la date."],
[1, "La donation au dernier vivant profite :", ["Au conjoint survivant", "Aux enfants", "Au partenaire de PACS", "Au concubin"], 0, "Elle est réservée aux époux mariés."],
[2, "Par défaut, une donation simple à un enfant est :", ["Une avance sur sa part d'héritage, rapportable à la succession", "Hors part successorale", "Exonérée de rapport", "Réductible automatiquement"], 0, "Pour l'avantager, il faut la stipuler hors part successorale."],
[2, "Dans une donation simple, le bien est rapporté pour sa valeur :", ["Au jour du partage, selon son état au jour de la donation", "Au jour de la donation", "Fixée par l'acte", "Moyenne des deux"], 0, "C'est la grande différence avec la donation-partage."],
[2, "Le droit de retour conventionnel permet :", ["Au donateur de récupérer le bien si le donataire décède avant lui", "Au donataire de rendre le bien", "Au conjoint du donataire d'hériter", "D'annuler la donation après 10 ans"], 0, "Le retour se fait sans droits de mutation."],
[3, "Une donation-partage ne fige les valeurs au jour de l'acte que si :", ["Tous les réservataires vivants ou représentés y ont reçu un lot et l'ont accepté, sans réserve d'usufruit portant sur une somme d'argent", "Elle a plus de 10 ans", "Elle porte sur de l'immobilier", "Elle est faite par les deux parents"], 0, "Sinon, l'évaluation au décès peut s'appliquer pour la réserve."],
[3, "Une famille recomposée : quel outil garantit au conjoint plus que le 1/4 légal en pleine propriété ?", ["Une donation au dernier vivant", "Une donation-partage aux enfants", "Un présent d'usage", "Un PACS"], 0, "Elle ouvre l'usufruit total ou 1/4 PP + 3/4 en usufruit."],
[3, "Un présent d'usage requalifié en donation par le juge :", ["Devient rapportable et taxable", "Reste exonéré", "Est annulé", "Est remboursé"], 0, "La proportionnalité s'apprécie au jour du cadeau."]
] },

{ id: "testament", title: "Testament et assurance-vie : ce qu'on peut organiser", time: "1 h",
lesson: `
<h3>Les trois formes de testament</h3>
<div class="tw"><table><thead><tr><th>Forme</th><th>Conditions</th><th>Avantages / risques</th></tr></thead><tbody>
<tr><td>Olographe</td><td>Entièrement écrit à la main, daté, signé par le testateur</td><td>Gratuit, discret ; risque de perte, de contestation ou de rédaction ambiguë. À déposer chez un notaire (inscription au fichier central).</td></tr>
<tr><td>Authentique</td><td>Dicté à un notaire en présence d'un second notaire ou de deux témoins</td><td>Sécurité maximale, seul à pouvoir priver le conjoint du droit viager au logement</td></tr>
<tr><td>Mystique</td><td>Remis clos et scellé au notaire devant deux témoins</td><td>Rare</td></tr>
</tbody></table></div>
<p>Un testament tapé à l'ordinateur et signé, ou une vidéo, n'a <strong>aucune valeur</strong>. Un testament commun à deux époux (« conjonctif ») est nul. Le testament est révocable à tout moment, par un nouveau testament ou par la destruction du précédent.</p>

<h3>Ce qu'on peut faire par testament</h3>
<ul>
<li><strong>Léguer la quotité disponible</strong> à qui l'on veut : un enfant, le partenaire de PACS, un ami, une association.</li>
<li><strong>Legs universel</strong> (vocation à tout recevoir), à titre universel (une fraction), à titre particulier (un bien précis).</li>
<li><strong>Désigner un tuteur</strong> pour ses enfants mineurs, ou un administrateur pour les biens qu'ils recevront.</li>
<li><strong>Testament-partage</strong> : répartir soi-même ses biens entre ses héritiers.</li>
<li>Exprimer ses volontés (obsèques, don d'organes), reconnaître un enfant, désigner ou modifier un bénéficiaire d'assurance-vie.</li>
<li><strong>Legs graduel ou résiduel</strong> : transmettre à une personne, puis à une autre à son décès (utile en famille recomposée).</li>
</ul>
<p>Ce qu'on ne peut pas faire : priver ses enfants de leur réserve, ou le conjoint de son droit temporaire au logement.</p>

<h3>L'assurance-vie, en dehors de la succession</h3>
<p>Le capital décès est versé au bénéficiaire <strong>hors succession</strong> : il n'est soumis ni au rapport ni à la réduction. Cela permet de transmettre à qui l'on veut, au-delà de la quotité disponible. Deux limites :</p>
<ul>
<li>Les <strong>primes manifestement exagérées</strong> (au regard de l'âge, du patrimoine, des revenus et de l'utilité du contrat pour le souscripteur) peuvent être réintégrées dans la succession.</li>
<li>Dans un couple marié en communauté, un contrat alimenté par des fonds communs peut donner lieu à récompense ; au décès du conjoint non souscripteur, la valeur de rachat du contrat non dénoué entre dans l'actif de communauté (civilement).</li>
</ul>

<h3>Rédiger une clause bénéficiaire sans erreur</h3>
<ul>
<li>Identifier précisément : nom, prénoms, date de naissance, lien.</li>
<li>Prévoir des bénéficiaires de rang subsidiaire (« à défaut… »).</li>
<li>Préciser « vivants ou représentés » pour que les petits-enfants viennent à la place d'un enfant prédécédé.</li>
<li>Le conjoint désigné « mon conjoint » : préciser « mon conjoint non divorcé » ou nommer la personne pour éviter un litige après divorce.</li>
<li>La clause démembrée (usufruit / nue-propriété) organise un quasi-usufruit au profit du conjoint.</li>
</ul>

<h3>Les outils plus rares à connaître de nom</h3>
<ul>
<li><strong>Mandat à effet posthume</strong> : désigner une personne qui gérera tout ou partie de la succession (une entreprise, un patrimoine complexe) pour le compte des héritiers.</li>
<li><strong>Renonciation anticipée à l'action en réduction</strong> (RAAR) : un enfant accepte par avance d'être moins bien servi (utile pour avantager un enfant handicapé).</li>
<li><strong>Libéralité graduelle</strong> : le premier gratifié doit conserver le bien et le transmettre à un second désigné.</li>
</ul>
`,
keys: [
"Testament olographe : entièrement manuscrit, daté, signé. Tapé à l'ordinateur = nul.",
"Le testament ne peut pas porter atteinte à la réserve des enfants.",
"Assurance-vie : hors succession, sauf primes manifestement exagérées.",
"Clause bénéficiaire : nommer, prévoir des rangs, « vivants ou représentés »."
],
ex: [
{ t: "Valide ou pas ?",
q: `<ol><li>Testament écrit à la main par M. E., signé, sans date.</li><li>Testament tapé sur ordinateur, imprimé et signé à la main.</li><li>Testament commun rédigé et signé par deux époux sur la même feuille.</li><li>Testament manuscrit léguant toute la succession à la compagne du testateur, qui a deux enfants.</li></ol>`,
a: `<ol><li>Nul en principe (la date est une condition de validité), sauf si les éléments du document permettent de la reconstituer et qu'il n'y a pas d'enjeu sur la date.</li><li>Nul : l'olographe doit être entièrement manuscrit.</li><li>Nul : le testament conjonctif est interdit.</li><li>Valable, mais réductible : la compagne ne peut recevoir que la quotité disponible (1/3), et paiera 60 % de droits (sauf PACS ou mariage).</li></ol>` }
],
qcm: [
[1, "Un testament tapé à l'ordinateur et signé à la main est :", ["Nul en tant que testament olographe", "Valable", "Valable s'il est daté", "Valable s'il est déposé chez un notaire"], 0, "L'olographe doit être entièrement écrit à la main."],
[1, "Un testament peut-il être modifié ?", ["Oui, à tout moment, par un nouveau testament", "Non, il est irrévocable", "Seulement chez le notaire", "Seulement une fois"], 0, "C'est la grande différence avec la donation."],
[1, "Le capital d'une assurance-vie est versé au bénéficiaire :", ["Hors succession", "Après partage de la succession", "Uniquement aux héritiers réservataires", "Après accord du notaire"], 0, "Article L132-12 du code des assurances."],
[2, "Deux époux rédigent un testament commun sur la même feuille. Il est :", ["Nul (testament conjonctif interdit)", "Valable s'ils signent tous les deux", "Valable entre époux", "Valable pour moitié"], 0, "Chacun doit faire son propre testament."],
[2, "Quelle forme de testament peut priver le conjoint de son droit viager au logement ?", ["Le testament authentique", "Le testament olographe", "Le testament mystique", "Aucune"], 0, "Article 764 du code civil."],
[2, "La mention « vivants ou représentés » dans une clause bénéficiaire permet :", ["Aux descendants d'un bénéficiaire prédécédé de recueillir sa part", "D'exclure les enfants mineurs", "D'éviter la fiscalité", "De désigner le conjoint"], 0, "Sinon, la part accroît aux autres bénéficiaires."],
[3, "Des primes d'assurance-vie peuvent être réintégrées dans la succession si elles sont :", ["Manifestement exagérées au regard des facultés du souscripteur", "Supérieures à 152 500 €", "Versées après 70 ans", "Versées sur des unités de compte"], 0, "Appréciation au jour des versements : âge, patrimoine, revenus, utilité."],
[3, "Un parent veut qu'un administrateur choisi par lui gère les biens légués à son fils mineur, à la place de son ex-conjoint. C'est :", ["Possible par testament (désignation d'un tiers administrateur)", "Impossible, l'autre parent est administrateur légal", "Possible seulement par le juge", "Possible uniquement par donation"], 0, "Article 384 du code civil."],
[3, "Le mandat à effet posthume sert à :", ["Confier la gestion de tout ou partie de la succession à un mandataire pour le compte des héritiers", "Révoquer une donation après décès", "Choisir la loi applicable", "Désigner un bénéficiaire d'assurance-vie"], 0, "Utile pour une entreprise ou un héritier inexpérimenté."]
] },

{ id: "proteger", title: "Protéger ses proches et régler une succession", time: "1 h",
lesson: `
<h3>Protéger un adulte vulnérable</h3>
<div class="tw"><table><thead><tr><th>Mesure</th><th>Qui décide</th><th>Effet</th></tr></thead><tbody>
<tr><td>Mandat de protection future</td><td>La personne elle-même, quand elle va bien</td><td>Désigne qui s'occupera d'elle et de ses biens le jour où elle ne pourra plus. Notarié, il permet des actes de disposition (vente) ; sous seing privé, seulement des actes de gestion.</td></tr>
<tr><td>Habilitation familiale</td><td>Le juge des contentieux de la protection, à la demande d'un proche</td><td>Un proche représente ou assiste la personne, avec peu de contrôle ensuite. Rapide et souple.</td></tr>
<tr><td>Sauvegarde de justice</td><td>Le juge ou une déclaration médicale</td><td>Protection temporaire ; la personne garde ses droits, mais ses actes contraires à ses intérêts peuvent être annulés.</td></tr>
<tr><td>Curatelle</td><td>Le juge</td><td>La personne est <strong>assistée</strong> pour les actes importants.</td></tr>
<tr><td>Tutelle</td><td>Le juge</td><td>La personne est <strong>représentée</strong> dans les actes de la vie civile.</td></tr>
</tbody></table></div>
<div class="rdv"><span class="tag">En banque</span><p>Une procuration bancaire cesse dès que le titulaire est placé sous mesure de protection ou décède. Pour un client âgé, parlez du mandat de protection future avant qu'il ne soit trop tard : il doit être signé quand la personne est pleinement lucide.</p></div>

<h3>Protéger un enfant mineur</h3>
<ul>
<li>Les parents sont <strong>administrateurs légaux</strong> des biens de leur enfant. Certains actes graves (vente d'un immeuble, renonciation à une succession) exigent l'autorisation du juge.</li>
<li>Un mineur ne peut pas recevoir directement des capitaux d'assurance-vie librement : ils sont gérés par l'administrateur légal jusqu'à 18 ans. On peut prévoir dans la clause une gestion par un tiers, ou un versement différé.</li>
<li>Les parents peuvent désigner par testament un <strong>tuteur</strong> en cas de double décès.</li>
</ul>

<h3>Familles recomposées : les outils</h3>
<ul>
<li>Le beau-parent n'a aucun lien juridique avec l'enfant de son conjoint : un legs serait taxé à 60 %.</li>
<li>L'<strong>adoption simple</strong> de l'enfant du conjoint en fait un héritier réservataire et lui ouvre le régime fiscal en ligne directe, sans rompre le lien avec sa famille d'origine.</li>
<li>La donation au dernier vivant, l'assurance-vie et la clause de préciput protègent le conjoint ; la donation-partage conjonctive organise les biens pour les enfants communs.</li>
</ul>

<h3>Indivision : vivre avec</h3>
<p>Plusieurs héritiers deviennent propriétaires ensemble d'un même bien : c'est l'<strong>indivision</strong>. Règles clés :</p>
<ul>
<li>Actes d'administration (louer, entretenir) : majorité des <strong>2/3</strong> des droits.</li>
<li>Vente : en principe l'<strong>unanimité</strong> ; les indivisaires à 2/3 peuvent toutefois demander au tribunal d'autoriser la vente.</li>
<li>« Nul n'est tenu de rester dans l'indivision » : chacun peut demander le partage.</li>
<li>Une <strong>convention d'indivision</strong> (jusqu'à 5 ans renouvelables) ou une <strong>SCI</strong> organise la gestion à long terme.</li>
</ul>

<h3>Régler une succession : l'option de l'héritier</h3>
<p>Chaque héritier choisit :</p>
<ol>
<li><strong>Accepter purement et simplement</strong> : il reçoit sa part et répond des dettes, même au-delà de l'actif (il peut demander à être déchargé d'une dette qu'il ignorait légitimement).</li>
<li><strong>Accepter à concurrence de l'actif net</strong> : il ne paie les dettes que dans la limite de ce qu'il reçoit (déclaration au tribunal, inventaire).</li>
<li><strong>Renoncer</strong> : il est censé n'avoir jamais été héritier. Ses enfants viennent à sa place (représentation).</li>
</ol>
<p>L'héritier dispose de <strong>4 mois</strong> de réflexion à compter du décès, puis peut être sommé de choisir ; sans réponse dans les 2 mois, il est réputé accepter. Sans sommation, il dispose de <strong>10 ans</strong>, au-delà desquels il est réputé renonçant. Attention : certains actes (vendre un bien de la succession, encaisser des fonds) valent acceptation tacite ; payer les frais d'obsèques ou les actes conservatoires, non.</p>
<div class="warn"><span class="tag">Erreur fréquente</span><p>Un héritier qui vide le compte du défunt pour « régler ses affaires » avant de découvrir des dettes a accepté tacitement. En cas de doute sur le passif, conseillez de ne toucher à rien et d'interroger le notaire.</p></div>
`,
keys: [
"Mandat de protection future : à signer en pleine lucidité ; notarié pour pouvoir vendre.",
"Curatelle = assistance ; tutelle = représentation ; habilitation familiale = solution souple par un proche.",
"Indivision : 2/3 pour gérer, unanimité pour vendre (sauf autorisation judiciaire) ; chacun peut demander le partage.",
"Option successorale : accepter, accepter à concurrence de l'actif net, renoncer ; 4 mois puis sommation."
],
ex: [
{ t: "Cas Vidal : un père qui décline",
q: `<p>M. Vidal, 82 ans, veuf, commence à présenter des troubles de mémoire. Il a 2 enfants, dont l'un gère déjà ses comptes par procuration. Il possède une maison qu'il faudra sans doute vendre pour financer un EHPAD.</p><ol><li>Que se passe-t-il si sa santé se dégrade sans rien prévoir ?</li><li>Quelle solution s'il est encore lucide ?</li><li>Et s'il ne l'est plus ?</li></ol>`,
a: `<ol><li>La procuration bancaire ne permet pas de vendre la maison ; il faudra saisir le juge pour une mesure de protection, avec des délais.</li><li>Un <strong>mandat de protection future notarié</strong>, désignant un ou ses deux enfants : il permettra la vente le moment venu.</li><li>Une <strong>habilitation familiale</strong> demandée au juge par un enfant : solution plus souple qu'une tutelle, avec autorisation du juge pour la vente du logement.</li></ol>` }
],
qcm: [
[1, "Le mandat de protection future est signé :", ["Par la personne elle-même, tant qu'elle est lucide", "Par le juge", "Par les enfants après le diagnostic", "Par le médecin traitant"], 0, "Il s'active le jour où son état le justifie, sur certificat médical."],
[1, "Sous curatelle, la personne protégée est :", ["Assistée pour les actes importants", "Représentée pour tous les actes", "Totalement libre", "Privée de compte bancaire"], 0, "Sous tutelle, elle est représentée."],
[1, "Un héritier qui renonce à la succession :", ["Est censé n'avoir jamais été héritier", "Garde sa part mais pas les dettes", "Doit payer les dettes", "Ne peut pas être représenté"], 0, "Ses enfants peuvent venir à sa place."],
[2, "Pour louer un bien indivis, il faut :", ["La majorité des 2/3 des droits indivis", "L'unanimité", "La majorité simple", "L'accord du juge"], 0, "Les actes d'administration se décident aux 2/3."],
[2, "Un héritier vend la voiture du défunt avant de choisir son option. Conséquence ?", ["Il est considéré comme ayant accepté la succession", "Rien", "Il est réputé renonçant", "La vente est nulle"], 0, "C'est un acte de disposition : acceptation tacite."],
[2, "L'adoption simple de l'enfant de son conjoint permet notamment :", ["De lui transmettre avec l'abattement et le barème en ligne directe", "De rompre le lien avec son autre parent", "De l'exclure de la réserve", "D'éviter toute donation"], 0, "L'adopté simple de l'enfant du conjoint bénéficie du régime fiscal en ligne directe."],
[3, "L'acceptation à concurrence de l'actif net :", ["Limite l'engagement de l'héritier aux dettes à hauteur des biens reçus", "Exonère de droits de succession", "Équivaut à une renonciation", "Est réservée au conjoint"], 0, "Elle suppose une déclaration au tribunal et un inventaire."],
[3, "Sans sommation, un héritier reste silencieux pendant 10 ans après le décès. Il est :", ["Réputé renonçant", "Réputé acceptant", "Toujours libre de choisir", "Déchu au profit de l'État"], 0, "Article 780 du code civil."],
[3, "Une procuration bancaire donnée par un parent :", ["Prend fin à son décès ou à son placement sous tutelle", "Survit au décès", "Permet de vendre ses biens immobiliers", "Vaut mandat de protection future"], 0, "D'où l'intérêt d'anticiper avec un mandat de protection future."]
] }

  ]
});
