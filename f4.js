/* Formation 4 — Droit du quotidien (format QCM) */
(window.FB = window.FB || {formations: []}).formations.push({
  id: "quotidien", num: 4, short: "Droit du quotidien", title: "Droit du quotidien",
  kicker: "Consommation · voisinage · travail", hours: "≈ 3 h",
  qcmFirst: true, lessonLabel: "Fiche",
  blurb: "Un produit qui ne convient pas, un cycliste qui vous renverse, un voisin garé sur votre trottoir, des congés refusés : des situations réelles en QCM, avec une fiche réflexe par thème.",
  intro: "Six thèmes de la vie courante, présentés en situations concrètes. Chaque module s'ouvre sur le QCM ; la fiche réflexe résume ensuite les règles à retenir. Les réponses expliquent le droit applicable en octobre 2026.",
  modules: [

{ id: "conso", title: "Achats et consommation", time: "30 min",
lesson: `
<h3>Les quatre protections à connaître</h3>
<div class="tw"><table><thead><tr><th>Protection</th><th>Quand</th><th>Délai</th></tr></thead><tbody>
<tr><td>Droit de rétractation</td><td>Achat à distance (internet, téléphone) ou hors établissement (démarchage)</td><td>14 jours, sans motif</td></tr>
<tr><td>Garantie légale de conformité</td><td>Bien acheté à un professionnel, défectueux ou non conforme</td><td>2 ans (défaut présumé antérieur pendant 24 mois pour le neuf, 12 mois pour l'occasion)</td></tr>
<tr><td>Garantie des vices cachés</td><td>Défaut grave caché, même entre particuliers</td><td>2 ans à compter de la découverte</td></tr>
<tr><td>Garantie commerciale</td><td>Facultative, payante ou non</td><td>Selon contrat</td></tr>
</tbody></table></div>
<ul>
<li>En <strong>magasin</strong>, il n'existe pas de droit de rétractation : un échange ou un remboursement est un geste commercial. Idem dans une foire ou un salon (sauf crédit affecté).</li>
<li>Rétractation exclue pour : biens personnalisés, denrées périssables, billets de spectacle ou de transport datés, nuitées d'hôtel datées, logiciels ou disques descellés.</li>
<li>Garantie de conformité : le consommateur choisit réparation ou remplacement ; si rien n'est fait sous 30 jours, il obtient une réduction de prix ou le remboursement. Une réparation prolonge la garantie de 6 mois.</li>
<li>Démarchage téléphonique : depuis le <strong>11 août 2026</strong>, un professionnel ne peut appeler un consommateur qu'avec son consentement préalable (sauf contrat en cours et cas prévus par la loi).</li>
<li>Abonnements souscrits en ligne : résiliation « en trois clics » obligatoire.</li>
<li>Litige : réclamation écrite, puis <strong>médiateur de la consommation</strong> (gratuit), puis justice.</li>
</ul>
`,
qcm: [
[1, "Vous achetez un pull en magasin, il ne vous plaît plus le lendemain. Le vendeur doit-il le reprendre ?", ["Non, il n'y a pas de droit de rétractation en magasin", "Oui, sous 14 jours", "Oui, sous 7 jours", "Oui, s'il a l'étiquette"], 0, "Un échange relève de la politique commerciale du magasin."],
[1, "Vous commandez un aspirateur sur internet. Vous pouvez le renvoyer sans motif dans un délai de :", ["14 jours à compter de la réception", "7 jours", "30 jours", "14 jours à compter de la commande, réception comprise ou non"], 0, "Pour un bien, le délai court à compter de la réception."],
[1, "Votre lave-linge neuf tombe en panne au bout de 18 mois. Quelle garantie invoquer auprès du vendeur ?", ["La garantie légale de conformité (2 ans)", "Aucune, la garantie commerciale d'un an est expirée", "Seulement la garantie du fabricant", "Le droit de rétractation"], 0, "Le défaut est présumé exister à la livraison pendant 24 mois pour un bien neuf."],
[2, "Après une réparation sous garantie légale de conformité, la garantie est :", ["Prolongée de 6 mois", "Remise à zéro pour 2 ans", "Terminée", "Prolongée d'un mois"], 0, "Réforme de 2022."],
[2, "Le vendeur ne répare ni ne remplace votre téléphone défectueux dans les 30 jours. Vous pouvez :", ["Obtenir une réduction de prix ou la résolution de la vente (remboursement)", "Seulement attendre", "Saisir uniquement le fabricant", "Rien, il a 6 mois"], 0, "Article L217-14 du code de la consommation."],
[2, "Vous achetez une voiture d'occasion à un particulier ; le moteur était déjà fissuré, ce que vous ne pouviez pas voir. Recours ?", ["La garantie des vices cachés", "La garantie légale de conformité", "Le droit de rétractation", "Aucun entre particuliers"], 0, "La garantie de conformité ne joue qu'avec un vendeur professionnel."],
[2, "Pouvez-vous vous rétracter d'un billet de concert acheté en ligne pour une date précise ?", ["Non, c'est une exception légale", "Oui, sous 14 jours", "Oui, jusqu'à la veille", "Oui, si le concert a lieu dans plus d'un mois"], 0, "Les prestations de loisirs à date déterminée sont exclues."],
[2, "Un vendeur à domicile vous fait signer un contrat de fenêtres. Peut-il encaisser un paiement le jour même ?", ["Non, aucun paiement avant 7 jours après la conclusion du contrat hors établissement", "Oui, un acompte de 30 %", "Oui, s'il vous remet un reçu", "Oui, si vous signez une renonciation"], 0, "Vous disposez en plus de 14 jours de rétractation."],
[3, "Un site affiche par erreur un téléviseur à 9 € au lieu de 900 €. Vous commandez. Le vendeur doit-il livrer ?", ["Non, un prix dérisoire (vil prix) rend la vente annulable", "Oui, le prix affiché engage", "Oui, mais à moitié prix", "Oui, s'il a envoyé un mail de confirmation"], 0, "Les tribunaux annulent les ventes conclues à un prix manifestement dérisoire."],
[3, "Depuis le 11 août 2026, une entreprise sans lien avec vous vous démarche par téléphone sans votre accord. C'est :", ["Interdit sans consentement préalable", "Autorisé si vous n'êtes pas inscrit sur Bloctel", "Autorisé en semaine de 10 h à 20 h", "Autorisé une fois par mois"], 0, "La loi du 30 juin 2025 a remplacé l'opposition (Bloctel) par le consentement préalable."],
[3, "Le colis acheté en ligne est perdu par le transporteur. Qui supporte le risque ?", ["Le vendeur, jusqu'à la remise du bien au consommateur", "L'acheteur dès l'expédition", "La Poste uniquement", "Personne"], 0, "Sauf si l'acheteur a choisi lui-même un transporteur non proposé par le vendeur."],
[3, "Vous voulez contester un litige avec un opérateur internet après une réclamation restée sans réponse. Étape suivante ?", ["Saisir gratuitement le médiateur de la consommation du secteur", "Porter plainte au commissariat", "Arrêter de payer", "Saisir la CNIL"], 0, "Tout professionnel doit indiquer son médiateur."]
] },

{ id: "accidents", title: "Accidents, dommages et assurances", time: "30 min",
lesson: `
<h3>Qui paie quand on est victime ?</h3>
<ul>
<li><strong>Principe</strong> : celui qui cause un dommage par sa faute le répare (article 1240 du code civil). On est aussi responsable des choses que l'on a sous sa garde, des animaux et des enfants mineurs (pour les parents).</li>
<li><strong>Loi Badinter</strong> (1985) : la victime d'un accident impliquant un <strong>véhicule terrestre à moteur</strong> (voiture, moto, scooter, trottinette électrique) est indemnisée par l'assureur de ce véhicule. Un piéton ou un cycliste victime est indemnisé de ses dommages corporels sauf faute inexcusable, cause exclusive de l'accident.</li>
<li>Un <strong>vélo classique n'est pas un véhicule à moteur</strong> : si un cycliste vous renverse, c'est le droit commun. Son assurance responsabilité civile (souvent incluse dans l'assurance habitation) paie.</li>
<li>Si le responsable n'est pas identifié ou n'est pas assuré, le <strong>Fonds de garantie (FGAO)</strong> peut indemniser certains dommages corporels.</li>
</ul>
<h3>Réflexes</h3>
<ul>
<li>Recueillir l'identité, l'assureur, des témoins, des photos ; faire constater les blessures par un médecin.</li>
<li>Déclarer le sinistre à son assureur : <strong>5 jours ouvrés</strong> (2 jours pour un vol, 30 jours après l'arrêté de catastrophe naturelle).</li>
<li>Vérifier si l'on a une <strong>protection juridique</strong> et une <strong>garantie des accidents de la vie</strong>.</li>
<li>Dégât des eaux entre voisins : la convention entre assureurs (IRSI) permet souvent d'être indemnisé directement par son propre assureur.</li>
</ul>
`,
qcm: [
[1, "Un cycliste vous percute sur un passage piéton. Quelle assurance indemnise vos blessures ?", ["L'assurance responsabilité civile du cycliste (souvent son assurance habitation)", "L'assurance auto du cycliste", "Votre mutuelle uniquement", "La mairie"], 0, "Le vélo n'est pas un véhicule terrestre à moteur."],
[1, "Une trottinette électrique vous renverse. Quelle loi s'applique ?", ["La loi Badinter : c'est un véhicule terrestre à moteur, assurance obligatoire", "Le droit commun comme pour un vélo", "Aucune", "Le code de la consommation"], 0, "Les engins de déplacement personnel motorisés doivent être assurés."],
[1, "Votre chien mord le facteur. Qui est responsable ?", ["Vous, en tant que propriétaire ou gardien de l'animal", "Le facteur, qui est entré", "Personne si le chien n'a jamais mordu", "La SPA"], 0, "Article 1243 du code civil, sans besoin de prouver une faute."],
[2, "Le délai pour déclarer un sinistre (hors vol et catastrophe naturelle) est en général de :", ["5 jours ouvrés", "48 heures", "30 jours", "3 mois"], 0, "2 jours ouvrés pour un vol."],
[2, "Votre fils de 12 ans casse la vitre d'un voisin avec un ballon. Qui répond du dommage ?", ["Vous, ses parents, de plein droit", "L'enfant personnellement", "L'école", "Personne, c'est un accident"], 0, "Responsabilité des parents du fait de leur enfant mineur (article 1242)."],
[2, "Un piéton de 75 ans traverse hors du passage et est renversé par une voiture. Est-il indemnisé de ses blessures ?", ["Oui, sauf s'il a volontairement recherché le dommage", "Non, il a commis une faute", "À moitié", "Seulement par sa mutuelle"], 0, "Les victimes de plus de 70 ans bénéficient d'une protection renforcée sous la loi Badinter."],
[2, "Un dégât des eaux venant de l'appartement du dessus abîme votre plafond. Premier réflexe ?", ["Déclarer le sinistre à votre propre assureur, avec un constat amiable dégât des eaux", "Attendre que le voisin paie", "Faire les travaux et envoyer la facture au syndic", "Porter plainte"], 0, "La convention IRSI organise la prise en charge entre assureurs."],
[3, "Un cycliste vous renverse et s'enfuit sans être identifié. Vous êtes blessé. Recours possible ?", ["Le Fonds de garantie des assurances obligatoires (FGAO) pour les dommages corporels, sous conditions", "Aucun", "La loi Badinter contre la commune", "Votre assurance auto obligatoirement"], 0, "Le FGAO intervient notamment quand le responsable est inconnu ou non assuré."],
[3, "Une branche de l'arbre de votre voisin, mal entretenu, tombe sur votre voiture sans tempête particulière. Qui est responsable ?", ["Le voisin, gardien de l'arbre", "Vous, garé trop près", "La commune", "Personne, c'est un cas de force majeure"], 0, "Responsabilité du fait des choses : le gardien répond du dommage."],
[3, "La garantie des accidents de la vie (GAV) sert à :", ["Être indemnisé de ses propres blessures quand aucun tiers responsable n'est identifié (chute, accident domestique)", "Couvrir les dommages causés aux autres", "Remplacer l'assurance auto", "Couvrir les dégâts des eaux"], 0, "La responsabilité civile, elle, couvre les dommages causés aux autres."]
] },

{ id: "voisins", title: "Voisinage, stationnement et propriété", time: "30 min",
lesson: `
<h3>Les règles qui reviennent le plus</h3>
<ul>
<li><strong>Trottoir</strong> : il appartient à la commune (domaine public), même devant chez vous. Le stationnement sur le trottoir est « très gênant » : amende de 135 €, enlèvement possible. Devant votre entrée de garage (bateau) : stationnement gênant, 35 €. Seule la police (municipale ou nationale) verbalise et fait enlever.</li>
<li><strong>Terrain privé</strong> : une voiture garée chez vous ne peut pas être déplacée par vous-même. Vous pouvez demander à la police de constater et faire procéder à l'enlèvement par la fourrière.</li>
<li><strong>Plantations</strong> : arbres de plus de 2 m à au moins 2 m de la limite ; autres plantations à 0,5 m. Vous pouvez exiger que le voisin coupe les branches qui dépassent chez vous ; vous pouvez couper vous-même racines, ronces et brindilles à la limite. Les fruits tombés naturellement chez vous vous appartiennent.</li>
<li><strong>Bruit</strong> : le tapage nocturne (en principe de 22 h à 7 h) et les bruits diurnes répétitifs, intenses ou durables sont sanctionnés (amende de 68 €). Les troubles anormaux de voisinage ouvrent droit à réparation, même sans faute (article 1253 du code civil).</li>
<li><strong>Vues</strong> : une fenêtre donnant directement sur le terrain voisin doit être à 1,90 m au moins de la limite (0,60 m pour une vue oblique).</li>
<li>Démarche : dialogue, courrier, <strong>conciliateur de justice</strong> (gratuit, souvent obligatoire avant le tribunal pour ces litiges), puis tribunal.</li>
</ul>
`,
qcm: [
[1, "Votre voisin se gare régulièrement sur le trottoir devant votre maison. Que pouvez-vous faire ?", ["Appeler la police municipale ou nationale, qui peut verbaliser (135 €) et faire enlever le véhicule", "Faire enlever la voiture par une dépanneuse que vous payez", "Dégonfler ses pneus", "Rien, c'est votre trottoir donc votre choix"], 0, "Le trottoir est un espace public ; vous n'avez pas de pouvoir de police."],
[1, "Une voiture bloque la sortie de votre garage (bateau). C'est :", ["Un stationnement gênant, amende de 35 €, enlèvement possible", "Autorisé moins de 2 heures", "Autorisé la nuit", "Un délit pénal"], 0, "Article R417-10 du code de la route."],
[1, "Les branches du cerisier du voisin dépassent chez vous. Vous pouvez :", ["Exiger qu'il les coupe", "Les couper vous-même", "Couper l'arbre", "Rien si l'arbre a plus de 30 ans"], 0, "Le droit d'exiger l'élagage des branches est imprescriptible. Vous pouvez en revanche couper vous-même les racines."],
[1, "Les cerises tombées naturellement de l'arbre du voisin dans votre jardin :", ["Vous appartiennent", "Restent au voisin", "Doivent être rendues", "Appartiennent à la commune"], 0, "Article 673 du code civil. Les cueillir sur l'arbre, en revanche, est interdit."],
[2, "Un arbre de 6 mètres est planté à 1 mètre de la limite. Le voisin peut-il exiger qu'il soit arraché ou réduit ?", ["Oui, sauf prescription trentenaire ou usage local contraire", "Non, jamais", "Seulement si l'arbre est malade", "Seulement avec l'accord du maire"], 0, "Distance de 2 mètres pour les plantations de plus de 2 mètres."],
[2, "Votre voisin fait des travaux bruyants tous les dimanches à 8 h. Recours ?", ["Le bruit diurne peut constituer une infraction et un trouble anormal ; arrêtés municipaux ou préfectoraux fixent souvent des horaires", "Aucun, le jour tout est permis", "Seulement après 22 h", "Seulement en copropriété"], 0, "Le tapage n'est pas que nocturne."],
[2, "Une voiture inconnue stationne depuis 3 jours dans votre cour privée. Vous pouvez :", ["Demander à un officier de police judiciaire de faire procéder à son enlèvement par la fourrière", "La faire enlever vous-même", "La vendre", "La pousser sur la voie publique"], 0, "Article L325-12 du code de la route."],
[2, "Avant de saisir le tribunal pour un conflit de voisinage portant sur moins de 5 000 €, il faut en principe :", ["Tenter une résolution amiable (conciliation, médiation)", "Porter plainte", "Envoyer un huissier", "Rien"], 0, "À peine d'irrecevabilité, sauf exceptions."],
[3, "Un nouveau voisin, installé à la campagne, se plaint du chant du coq d'un élevage existant. Que prévoit le droit ?", ["Les sons et odeurs du patrimoine sensoriel des campagnes sont protégés ; et une activité antérieure conforme à la réglementation peut être exonérée (antériorité)", "Le coq doit être supprimé", "Le voisin obtient automatiquement des dommages", "Le maire doit interdire le coq"], 0, "Loi de 2021 et article 1253 du code civil (2024)."],
[3, "Votre voisin ouvre une fenêtre à 1 mètre de la limite, avec vue directe sur votre jardin. Est-ce permis ?", ["Non, une vue droite doit être à 1,90 m au moins de la limite", "Oui, c'est son mur", "Oui, avec un permis", "Oui, au rez-de-chaussée"], 0, "Article 678 du code civil ; un jour de souffrance (verre dormant) obéit à d'autres règles."],
[3, "Les feux de déchets verts dans le jardin sont :", ["Interdits en principe, sanctionnés d'une amende", "Autorisés le week-end", "Autorisés à la campagne", "Autorisés s'ils sont surveillés"], 0, "L'interdiction résulte du règlement sanitaire départemental et du code de l'environnement."]
] },

{ id: "logement", title: "Location : bailleur et locataire", time: "30 min",
lesson: `
<h3>Les chiffres du bail d'habitation</h3>
<div class="tw"><table><thead><tr><th></th><th>Location nue</th><th>Location meublée</th></tr></thead><tbody>
<tr><td>Durée du bail</td><td>3 ans (bailleur particulier)</td><td>1 an (9 mois pour un étudiant)</td></tr>
<tr><td>Dépôt de garantie</td><td>1 mois de loyer hors charges</td><td>2 mois</td></tr>
<tr><td>Préavis du locataire</td><td>3 mois ; 1 mois en zone tendue et dans certains cas (mutation, perte d'emploi, santé, RSA)</td><td>1 mois</td></tr>
<tr><td>Congé du bailleur</td><td>6 mois avant l'échéance, pour vendre, reprendre ou motif légitime et sérieux</td><td>3 mois avant l'échéance</td></tr>
</tbody></table></div>
<ul>
<li>Restitution du dépôt : <strong>1 mois</strong> si l'état des lieux de sortie est conforme, <strong>2 mois</strong> sinon ; au-delà, pénalité de 10 % du loyer mensuel par mois de retard.</li>
<li>Petites réparations et entretien courant (dont l'entretien annuel de la chaudière) : à la charge du locataire.</li>
<li><strong>Trêve hivernale</strong> du 1er novembre au 31 mars : pas d'expulsion.</li>
<li>Logement décent : au moins 9 m² et 2,20 m de hauteur (ou 20 m³), et désormais une performance énergétique minimale (G interdit depuis 2025).</li>
<li>Le bailleur ne peut pas entrer sans l'accord du locataire. Visites pour vente ou relocation : 2 heures par jour ouvrable au plus.</li>
</ul>
`,
qcm: [
[1, "Pour un logement vide, le dépôt de garantie est au maximum de :", ["1 mois de loyer hors charges", "2 mois", "3 mois", "1 mois charges comprises"], 0, "2 mois en meublé."],
[1, "État des lieux de sortie identique à l'entrée. Le bailleur doit rendre le dépôt de garantie sous :", ["1 mois", "2 mois", "15 jours", "3 mois"], 0, "2 mois en cas de différences."],
[1, "La trêve hivernale va du :", ["1er novembre au 31 mars", "1er décembre au 28 février", "15 octobre au 15 avril", "1er novembre au 30 avril"], 0, "Aucune expulsion locative pendant cette période (sauf exceptions)."],
[2, "Le bailleur rend le dépôt avec 3 mois de retard (loyer 800 €). Pénalité due ?", ["240 € (10 % du loyer par mois de retard)", "Rien", "800 €", "Intérêts au taux légal seulement"], 0, "10 % × 800 € × 3 mois."],
[2, "Un locataire en zone tendue veut partir. Préavis ?", ["1 mois", "3 mois", "2 mois", "6 mois"], 0, "Le préavis réduit s'applique de plein droit en zone tendue."],
[2, "Le bailleur peut-il visiter le logement quand il veut avec son double des clés ?", ["Non, il lui faut l'accord du locataire", "Oui, une fois par mois", "Oui, s'il prévient 24 h avant", "Oui, c'est son bien"], 0, "Le locataire a la jouissance exclusive du logement ; entrer sans accord est une violation de domicile."],
[2, "Qui paie l'entretien annuel de la chaudière individuelle ?", ["Le locataire", "Le bailleur", "Moitié-moitié", "Le syndic"], 0, "Entretien courant à la charge du locataire ; le remplacement est à la charge du bailleur."],
[3, "Un bailleur donne congé pour vendre un logement nu. Le locataire :", ["Bénéficie d'un droit de préemption pour acheter en priorité aux conditions de l'offre", "Doit partir sous 1 mois", "Peut refuser le congé", "Doit être relogé par le bailleur"], 0, "Le congé pour vente vaut offre de vente au locataire."],
[3, "Un logement de 8,5 m² sous 2,40 m de plafond peut-il être loué comme résidence principale (critère de surface) ?", ["Oui : son volume habitable atteint 20,4 m³, au-dessus du minimum de 20 m³", "Non, il faut au moins 9 m² dans tous les cas", "Oui, mais seulement en meublé", "Non, il faut 2,50 m de hauteur"], 0, "Le critère est : 9 m² et 2,20 m de hauteur, OU un volume habitable d'au moins 20 m³. Ici 8,5 × 2,40 = 20,4 m³ : il passe de justesse."],
[3, "Après un commandement de payer resté infructueux, le délai avant que le bailleur puisse faire constater la résiliation par la clause résolutoire est de :", ["6 semaines", "2 mois", "15 jours", "6 mois"], 0, "Délai réduit de 2 mois à 6 semaines par la loi du 27 juillet 2023."]
] },

{ id: "travail", title: "Travail : congés, arrêts, contrat", time: "35 min",
lesson: `
<h3>Les congés payés</h3>
<ul>
<li>2,5 jours ouvrables par mois de travail, soit <strong>5 semaines</strong> (30 jours ouvrables) par an.</li>
<li>L'<strong>employeur fixe</strong> la période de prise des congés et l'ordre des départs (après avis du CSE, selon l'accord collectif), en tenant compte de la situation de famille. Il peut refuser des dates demandées pour des raisons d'organisation, mais il doit permettre au salarié de prendre ses congés.</li>
<li>Le congé principal comporte au moins <strong>12 jours ouvrables continus</strong> pris entre le 1er mai et le 31 octobre (sauf accord ou dérogation).</li>
<li>Une fois les dates fixées, l'employeur ne peut les modifier moins d'<strong>un mois</strong> avant le départ, sauf circonstances exceptionnelles.</li>
<li>Depuis la loi du 22 avril 2024, un arrêt maladie non professionnel fait acquérir 2 jours ouvrables de congés par mois (dans la limite de 24 jours par an). Depuis un arrêt de la Cour de cassation de septembre 2025, un salarié tombé malade pendant ses congés et qui le signale peut les reporter.</li>
</ul>
<h3>Repères du contrat de travail</h3>
<ul>
<li>Période d'essai d'un CDI : 2 mois (employés), 3 mois (agents de maîtrise), 4 mois (cadres), renouvelable une fois si l'accord de branche et le contrat le prévoient.</li>
<li>Heures supplémentaires : +25 % de la 36e à la 43e heure, +50 % au-delà, sauf accord collectif (minimum +10 %).</li>
<li>Arrêt maladie : 3 jours de carence pour les indemnités de la Sécurité sociale ; complément employeur selon ancienneté et convention.</li>
<li>Rupture conventionnelle : 15 jours calendaires de rétractation, puis homologation par l'administration.</li>
<li>Le 1er mai est le seul jour férié obligatoirement chômé et payé.</li>
<li>Contester un licenciement devant les prud'hommes : 12 mois à compter de sa notification.</li>
</ul>
`,
qcm: [
[1, "Votre entreprise refuse vos congés du 1er au 21 août. En a-t-elle le droit ?", ["Oui, l'employeur fixe l'ordre des départs, mais il doit vous permettre de prendre vos congés", "Non, les congés sont un droit absolu aux dates choisies", "Non, en été tout refus est interdit", "Oui, et il peut supprimer les congés"], 0, "Le refus doit être justifié par l'organisation et respecter les règles d'ordre des départs."],
[1, "Combien de semaines de congés payés pour une année complète de travail ?", ["5 semaines", "4 semaines", "6 semaines", "Selon l'employeur"], 0, "30 jours ouvrables."],
[1, "Le seul jour férié obligatoirement chômé et payé est :", ["Le 1er mai", "Le 14 juillet", "Le 25 décembre", "Le lundi de Pâques"], 0, "Les autres dépendent des accords et usages."],
[2, "L'employeur veut déplacer vos congés validés qui commencent dans 2 semaines. Il peut :", ["Seulement en cas de circonstances exceptionnelles", "Toujours", "Jamais, même en cas de force majeure", "Si vous êtes cadre"], 0, "Délai de prévenance d'un mois, sauf circonstances exceptionnelles."],
[2, "Un salarié en arrêt maladie non professionnel pendant 3 mois acquiert-il des congés payés ?", ["Oui, 2 jours ouvrables par mois d'arrêt (6 jours)", "Non, jamais", "Oui, 2,5 jours par mois", "Seulement après un an d'arrêt"], 0, "Loi du 22 avril 2024, mise en conformité avec le droit européen."],
[2, "Quelle majoration pour la 38e heure de travail d'une semaine (sans accord collectif) ?", ["25 %", "50 %", "10 %", "0 %"], 0, "50 % à partir de la 44e heure."],
[2, "Durée maximale initiale de la période d'essai d'un cadre en CDI ?", ["4 mois", "2 mois", "3 mois", "6 mois"], 0, "Renouvelable une fois si prévu (8 mois au total maximum)."],
[2, "Combien de jours de carence avant les indemnités journalières de la Sécurité sociale en cas d'arrêt maladie (salarié du privé) ?", ["3 jours", "1 jour", "7 jours", "Aucun"], 0, "La convention collective ou l'employeur peut couvrir ces jours."],
[3, "Vous tombez malade le 2e jour de vos congés et envoyez votre arrêt. Que prévoit la jurisprudence depuis 2025 ?", ["Vous pouvez obtenir le report des jours de congés couverts par l'arrêt", "Les congés sont perdus", "L'employeur vous doit une indemnité doublée", "Vous devez reprendre le travail"], 0, "Cour de cassation, chambre sociale, septembre 2025."],
[3, "Après la signature d'une rupture conventionnelle, chaque partie peut se rétracter pendant :", ["15 jours calendaires", "7 jours", "1 mois", "48 heures"], 0, "Puis la demande d'homologation est adressée à l'administration."],
[3, "Vous voulez contester votre licenciement. Délai pour saisir le conseil de prud'hommes ?", ["12 mois à compter de la notification", "2 mois", "5 ans", "3 ans"], 0, "Article L1471-1 du code du travail."],
[3, "Votre contrat prévoit 12 jours de congés consécutifs en été, votre employeur vous les impose en juin. Est-ce permis ?", ["Oui, la période légale va du 1er mai au 31 octobre", "Non, seulement juillet-août", "Non, sans votre accord écrit", "Oui, mais seulement 5 jours"], 0, "L'employeur choisit à l'intérieur de la période fixée."]
] },

{ id: "vie", title: "Banque, amendes, voyages, argent prêté", time: "30 min",
lesson: `
<h3>Réflexes utiles</h3>
<ul>
<li><strong>Paiement frauduleux par carte</strong> : faire opposition, signaler l'opération à la banque (jusqu'à 13 mois). Remboursement immédiat (au plus tard le jour ouvrable suivant) sauf négligence grave prouvée par la banque.</li>
<li><strong>Amende forfaitaire</strong> (contravention) : 45 jours pour payer ou contester ; paiement minoré possible sous 15 jours pour certaines classes ; amende majorée ensuite.</li>
<li><strong>Petits excès de vitesse</strong> : depuis 2024, un excès de moins de 5 km/h n'entraîne plus de retrait de point (l'amende reste due).</li>
<li><strong>Vols aériens</strong> au départ de l'UE ou sur une compagnie européenne : indemnisation forfaitaire de 250, 400 ou 600 € selon la distance pour un retard de plus de 3 h à l'arrivée ou une annulation tardive, sauf circonstances extraordinaires (météo, grève du contrôle aérien…).</li>
<li><strong>Prêt d'argent</strong> à un proche : au-delà de 1 500 €, une preuve écrite est exigée (reconnaissance de dette avec le montant en chiffres et en lettres, signée).</li>
<li>Un <strong>chèque</strong> est encaissable pendant 1 an et 8 jours.</li>
</ul>
`,
qcm: [
[1, "Un paiement inconnu apparaît sur votre compte (carte toujours en votre possession). La banque doit :", ["Vous rembourser immédiatement, sauf négligence grave de votre part", "Attendre l'enquête de police", "Vous rembourser à 50 %", "Rien si le paiement est en ligne"], 0, "Le remboursement intervient au plus tard à la fin du premier jour ouvrable suivant le signalement."],
[1, "Combien de temps avez-vous pour contester une amende forfaitaire ?", ["45 jours", "15 jours", "3 mois", "1 an"], 0, "À compter de l'envoi de l'avis de contravention."],
[1, "Pendant combien de temps un chèque peut-il être encaissé ?", ["1 an et 8 jours", "3 mois", "6 mois", "Sans limite"], 0, "Au-delà, il faut réclamer la somme autrement."],
[2, "Vous prêtez 3 000 € à un ami. Pour pouvoir prouver le prêt, il faut :", ["Un écrit signé de l'emprunteur, avec le montant en chiffres et en lettres", "Un témoin", "Un message vocal", "Rien, un virement suffit toujours"], 0, "Au-delà de 1 500 €, la preuve doit être écrite ; un virement prouve la remise des fonds, pas l'obligation de rembourser."],
[2, "Votre vol Paris-Rome (≈ 1 100 km) arrive avec 4 h de retard pour un problème technique. Indemnisation ?", ["250 €", "400 €", "600 €", "Rien, un problème technique est une circonstance extraordinaire"], 0, "Un problème technique ordinaire n'est pas une circonstance extraordinaire selon la CJUE."],
[2, "Vous êtes flashé à 54 km/h (vitesse retenue) au lieu de 50. Perdez-vous un point ?", ["Non, depuis 2024 les excès de moins de 5 km/h n'entraînent plus de retrait de point", "Oui, un point", "Oui, deux points", "Non, et pas d'amende non plus"], 0, "L'amende de 135 € (68 € hors agglomération) reste due."],
[2, "Combien de temps pour signaler une opération non autorisée sur votre compte ?", ["13 mois à compter du débit", "1 mois", "2 mois", "5 ans"], 0, "Article L133-24 du code monétaire et financier."],
[3, "Votre vol Paris-New York est annulé la veille pour une tempête majeure. Indemnisation forfaitaire de 600 € ?", ["Non (circonstance extraordinaire), mais remboursement ou réacheminement et prise en charge sont dus", "Oui, toujours", "Oui, la moitié", "Non, et aucun remboursement"], 0, "Le droit à l'assistance (repas, hôtel) demeure."],
[3, "Vous avez donné vos codes de carte à un faux conseiller bancaire au téléphone. La banque peut :", ["Refuser le remboursement en invoquant une négligence grave, qu'elle doit prouver", "Toujours refuser", "Jamais refuser", "Rembourser 50 € seulement"], 0, "Les juges apprécient au cas par cas la sophistication de l'arnaque."],
[3, "Un forfait post-stationnement (FPS, stationnement payant non réglé) se conteste :", ["Par un recours administratif préalable obligatoire (RAPO) dans le mois, puis devant la commission du contentieux du stationnement payant", "Comme une amende, dans les 45 jours auprès de l'ANTAI", "Devant le juge de police", "Il ne peut pas être contesté"], 0, "Depuis 2018, le stationnement payant n'est plus une amende pénale."]
] }

  ]
});
