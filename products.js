// fichier | club | type de maillot | catégorie | saison
const RAW=`
acm-home-jersey-replica.jpg|AC Milan|Domicile|Adulte|
acm-third-jersey-replica.jpg|AC Milan|Third|Adulte|
maillot-milan-ac-third-2025-26.jpg|AC Milan|Third|Adulte|2025/26
afc-h-jsy.jpg|Arsenal|Domicile|Adulte|
afc-a-jsy.jpg|Arsenal|Extérieur|Adulte|
ajax-h-jsy.jpg|Ajax Amsterdam|Domicile|Adulte|
ajax-a-jsy.jpg|Ajax Amsterdam|Extérieur|Adulte|
ajax-3-jsy.jpg|Ajax Amsterdam|Third|Adulte|
atm-m-nk-df-jsy-ss-stad-aw.jpg|Atlético Madrid|Extérieur|Adulte|
cfc-m-nk-df-jsy-ss-stad-aw.jpg|Chelsea|Extérieur|Adulte|
cfc-mnk-df-jsy-ss-stad-3r.jpg|Chelsea|Third|Adulte|
fcb-a-jsy.jpg|FC Barcelone|Extérieur|Adulte|
dfb-a-jsy.jpg|Allemagne|Extérieur|Adulte|
maillot-italie-exterieur-2026.jpg|Italie|Extérieur|Adulte|2026
maillot-jamaique-domicile-2026.jpg|Jamaïque|Domicile|Adulte|2026
maillot-manches-longues-inter-milan-acg-2025-26.jpg|Inter Milan|Domicile manches longues|Adulte|2025/26
fcb-3-jsy.jpg|FC Barcelone|Third|Adulte|
fcb-mnk-df-jsy-ss-stad-3r.jpg,fcb-mnk-df-jsy-ss-stad-3r-1.jpg|FC Barcelone|Third|Adulte|
tenue-bebe-fc-barcelone-exterieur-2026-27.jpg|FC Barcelone|Extérieur|Bébé|2026/27
tenue-bebe-fc-barcelone-third-2026-27.jpg|FC Barcelone|Third|Bébé|2026/27
inter-m-nk-df-jsy-ss-stad-hm.jpg|Inter Milan|Domicile|Adulte|
inter-mnk-df-jsy-ss-stad-3r.jpg|Inter Milan|Third|Adulte|
juve-h-jsy.jpg|Juventus|Domicile|Adulte|
juve-h-jsy-y.jpg|Juventus|Domicile|Junior|
juve-a-jsy.jpg|Juventus|Extérieur|Adulte|
juve-3-jsy.jpg|Juventus|Third|Adulte|
lfc-h-jsy.jpg|Liverpool|Domicile|Adulte|
lfc-a-jsy.jpg|Liverpool|Extérieur|Adulte|
lfc-3-jsy.jpg|Liverpool|Third|Adulte|
mcfc-home-jersey-replica.jpg|Manchester City|Domicile|Adulte|
mcfc-away-jersey-replica.jpg|Manchester City|Extérieur|Adulte|
mcfc-away-jersey-replica-jr.jpg|Manchester City|Extérieur|Junior|
mcfc-third-jersey-replica.jpg|Manchester City|Third|Adulte|
mcfc-third-jersey-replica-jr.jpg|Manchester City|Third|Junior|
mufc-h-jsy.jpg|Manchester United|Domicile|Adulte|
maillot-entrainement-manchester-united-noir.jpg|Manchester United|Entraînement noir|Adulte|
real-h-jsy-l.jpg|Real Madrid|Domicile manches longues|Adulte|
maillot-real-madrid-domicile-2025-26.jpg|Real Madrid|Domicile|Adulte|2025/26
maillot-junior-real-madrid-domicile-2025-26.jpg|Real Madrid|Domicile|Junior|2025/26
real-h-jsy-y.jpg|Real Madrid|Domicile|Junior|
maillot-real-madrid-exterieur-2025-26.jpg|Real Madrid|Extérieur|Adulte|2025/26
real-a-jsy.jpg|Real Madrid|Extérieur|Adulte|
real-a-jsy-y.jpg|Real Madrid|Extérieur|Junior|
real-3-jsy.jpg|Real Madrid|Third|Adulte|
real-3-jsy-y.jpg|Real Madrid|Third|Junior|
pfc-h-jsy.jpg|Paris FC|Domicile|Adulte|
maillot-junior-psg-domicile-2025-26.jpg,maillot-junior-psg-domicile-2025-26-1.jpg|Paris Saint-Germain|Domicile|Junior|2025/26
maillot-junior-psg-third-2025-26.jpg,maillot-junior-psg-third-2025-26-1.jpg|Paris Saint-Germain|Third|Junior|2025/26
tenue-enfant-psg-exterieur-2026-27.jpg,tenue-enfant-psg-exterieur-2026-27-1.jpg|Paris Saint-Germain|Extérieur|Junior|2026/27
maillot-manches-longues-gardien-psg-noir-2026-27.jpg,maillot-manches-longues-gardien-psg-noir-2026-27-1.jpg|Paris Saint-Germain|Gardien manches longues noir|Adulte|2026/27
maillot-manches-longues-gardien-junior-psg-noir-2026-27.jpg,maillot-manches-longues-gardien-junior-psg-noir-2026-27-1.jpg|Paris Saint-Germain|Gardien manches longues noir|Junior|2026/27
om-home-jersey-replica.jpg|Olympique de Marseille|Domicile|Adulte|
om-home-jersey-authentic.jpg.png|Olympique de Marseille|Domicile Authentic|Adulte|
om-home-jersey-replica-jr.jpg|Olympique de Marseille|Domicile|Junior|
maillot-junior-om-domicile-2025-26.jpg,maillot-junior-om-domicile-2025-26-1.jpg|Olympique de Marseille|Domicile|Junior|2025/26
maillot-junior-om-domicile-2023-24.jpg|Olympique de Marseille|Domicile|Junior|2023/24
om-away-jersey-replica-jr.jpg|Olympique de Marseille|Extérieur|Junior|
maillot-junior-om-exterieur-2025-26.jpg|Olympique de Marseille|Extérieur|Junior|2025/26
maillot-junior-om-exterieur-2024-25.jpg|Olympique de Marseille|Extérieur|Junior|2024/25
om-away-babykit.jpg|Olympique de Marseille|Extérieur|Bébé|
om-third-jersey-replica.jpg|Olympique de Marseille|Third|Adulte|
om-third-jersey-replica-jr.jpg|Olympique de Marseille|Third|Junior|
maillot-junior-om-third-2025-26.jpg|Olympique de Marseille|Third|Junior|2025/26
om-third-babykit.jpg|Olympique de Marseille|Third|Bébé|
maillot-junior-om-edition-speciale-or-2025-26.jpg|Olympique de Marseille|Édition spéciale or|Junior|2025/26
tenue-bebe-om-domicile-2025-26.jpg|Olympique de Marseille|Domicile|Bébé|2025/26
tenue-bebe-om-third-2025-26.jpg|Olympique de Marseille|Third|Bébé|2025/26
ol-h-jsy.jpg|Olympique Lyonnais|Domicile|Adulte|
maillot-ol-third-2025-26.jpg|Olympique Lyonnais|Third|Adulte|2025/26
maillot-junior-ol-domicile-2025-26.jpg|Olympique Lyonnais|Domicile|Junior|2025/26
maillot-junior-ol-exterieur-2025-26.jpg|Olympique Lyonnais|Extérieur|Junior|2025/26
maillot-junior-ol-third-2026-27.jpg|Olympique Lyonnais|Third|Junior|2026/27
maillot-entrainement-olympique-lyonnais-2026-2027-bleu-enfant.jpg|Olympique Lyonnais|Entraînement bleu|Junior|2026/27
maillot-junior-losc-domicile-2025-26.jpg|LOSC Lille|Domicile|Junior|2025/26
maillot-junior-losc-exterieur-2025-26.jpg|LOSC Lille|Extérieur|Junior|2025/26
faf-a-jsy.jpg|Algérie|Extérieur|Adulte|
maillot-bresil-exterieur-2026.jpg|Brésil|Extérieur|Adulte|2026
maillot-jamaique-exterieur-2026.jpg|Jamaïque|Extérieur|Adulte|2026
maillot-mexique-exterieur-2026.jpg|Mexique|Extérieur|Adulte|2026
fmf-3-jsy-d.jpg|Mexique|Third|Adulte|
maillot-junior-portugal-domicile-2026.jpg|Portugal|Domicile|Junior|2026
afc-3-jsy.jpg|Arsenal|Third|Adulte|
maillot-arsenal-exterieur-2025-26.jpg|Arsenal|Extérieur|Adulte|2025/26
atalanta-bc-26-27-home-short-s.jpg|Atalanta|Domicile|Adulte|2026/27
atalanta-bc-26-27-away-short-s.jpg|Atalanta|Extérieur|Adulte|2026/27
bvb-home-jersey-replica.jpg.png|Borussia Dortmund|Domicile|Adulte|
bvb-away-jersey-replica.jpg|Borussia Dortmund|Extérieur|Adulte|
bvb-third-jersey-replica.jpg|Borussia Dortmund|Third|Adulte|
epo-h-jsy.jpg|Grèce|Domicile|Adulte|
epo-a-jsy.jpg|Grèce|Extérieur|Adulte|
fcb-h-jsy.jpg|FC Barcelone|Domicile|Adulte|
maillot-fc-barcelone-domicile-2025-26.jpg|FC Barcelone|Domicile|Adulte|2025/26
maillot-fc-barcelone-domicile-authentique-2025-26.jpg|FC Barcelone|Domicile Authentic|Adulte|2025/26
maillot-fc-barcelone-exterieur-2025-26.jpg|FC Barcelone|Extérieur|Adulte|2025/26
maillot-fc-barcelone-4th-2025-26.jpg|FC Barcelone|4th|Adulte|2025/26
fcb-m-nk-df-jsy-ss-stad-hm.jpg|FC Barcelone|Domicile|Adulte|
fcb-m-nk-df-jsy-ss-stad-aw.jpg|FC Barcelone|Extérieur|Adulte|
fcb-m-nk-df-jsy-ls-stad-aw.jpg|FC Barcelone|Extérieur manches longues|Adulte|
fcb-m-nk-df-energy-jsy-ls-3r.jpg|FC Barcelone|Third manches longues|Adulte|
fcb-m-nk-dfadv-jsy-ss-match-hm.jpg|FC Barcelone|Domicile Authentic|Adulte|
fcb-m-nk-dfadv-jsy-ss-match-aw.jpg|FC Barcelone|Extérieur Authentic|Adulte|
fcb-m-nk-dfadv-jsy-ss-match-3r.jpg|FC Barcelone|Third Authentic|Adulte|
fcb-m-nk-df-strk-ss-top-k.jpg|FC Barcelone|Entraînement Strike|Adulte|
fcb-m-nk-df-strk-ss-top-k-aw.jpg,fcb-m-nk-df-strk-ss-top-k-aw-1.jpg|FC Barcelone|Entraînement Strike extérieur|Adulte|
maillot-entrainement-fc-barcelone-strike-bleu.jpg|FC Barcelone|Entraînement Strike bleu|Adulte|
maillot-avant-match-fc-barcelone-bleu-orange.jpg|FC Barcelone|Avant-match bleu et orange|Adulte|
fcb-y-nk-df-jsy-ss-stad-hm.jpg|FC Barcelone|Domicile|Junior|
fcb-y-nk-df-jsy-ss-stad-3r.jpg|FC Barcelone|Third|Junior|
maillot-junior-fc-barcelone-third-2025-26.jpg|FC Barcelone|Third|Junior|2025/26
tenue-enfant-fc-barcelone-exterieur-2025-26.jpg|FC Barcelone|Extérieur|Junior|2025/26
fcb-y-nk-df-strk-ss-top-k.jpg|FC Barcelone|Entraînement Strike|Junior|
fcb-y-nk-df-strk-ss-top-k-aw.jpg|FC Barcelone|Entraînement Strike extérieur|Junior|
fcb-lk-nk-df-kit-stad-hm.jpg|FC Barcelone|Domicile|Junior|
maillot-femme-fc-barcelone-exterieur-2025-26.jpg|FC Barcelone|Extérieur|Femme|2025/26
maillot-femme-fc-barcelone-exterieur-authentique-2025-26.jpg|FC Barcelone|Extérieur Authentic|Femme|2025/26
mufc-a-jsy.jpg|Manchester United|Extérieur|Adulte|
mufc-3-jsy.jpg|Manchester United|Third|Adulte|
mcfc-home-jersey-replica-ls.jpg|Manchester City|Domicile manches longues|Adulte|
maillot-tottenham-domicile-2025-26.jpg|Tottenham|Domicile|Adulte|2025/26
maillot-tottenham-third-2025-26.jpg|Tottenham|Third|Adulte|2025/26
thfc-mnk-df-jsy-ss-stad-hm.jpg|Tottenham|Domicile|Adulte|
thfc-mnk-df-jsy-ss-stad-aw.jpg|Tottenham|Extérieur|Adulte|
maillot-valence-exterieur-2025-26.jpg|Valence CF|Extérieur|Adulte|2025/26
maillot-girona-fc-exterieur-2025-2026-jaune.jpg|Girona FC|Extérieur jaune|Adulte|2025/26
palermo-home-jersey-replica.jpg|Palermo|Domicile|Adulte|
palermo-away-jersey-replica.jpg|Palermo|Extérieur|Adulte|
palermo-third-jersey-replica.jpg|Palermo|Third|Adulte|
slb-a-jsy.jpg|Benfica|Extérieur|Adulte|
slb-3-jsy.jpg|Benfica|Third|Adulte|
sccp-m-nk-df-ss-jsy-stad-hm.jpg|Sporting CP|Domicile|Adulte|
rcl-h-jsy.jpg|RC Lens|Domicile|Adulte|
losc-lille-26-27-away-short-sl.jpg|LOSC Lille|Extérieur|Adulte|2026/27
losc-lille-26-27-third-short-s.jpg|LOSC Lille|Third|Adulte|2026/27
maillot-junior-paric-fc-domicile-2025-26.jpg|Paris FC|Domicile|Junior|2025/26
maillot-junior-paris-fc-domicile-2026-27.jpg|Paris FC|Domicile|Junior|2026/27
psg-m-nk-df-jsy-ss-stad-hm.jpg|Paris Saint-Germain|Domicile|Adulte|
psg-m-nk-df-jsy-ls-stad-hm.jpg|Paris Saint-Germain|Domicile manches longues|Adulte|
psg-m-nk-df-jsy-ss-stad-aw.jpg|Paris Saint-Germain|Extérieur|Adulte|
maillot-manches-longues-psg-exterieur-2026-27.jpg|Paris Saint-Germain|Extérieur manches longues|Adulte|2026/27
psg-m-nk-dfadv-jsy-ss-match-aw.jpg|Paris Saint-Germain|Extérieur Authentic|Adulte|
maillot-psg-night-edition-2025-26.jpg|Paris Saint-Germain|Night Edition|Adulte|2025/26
maillot-manches-longues-psg-night-edition-2025-26.jpg|Paris Saint-Germain|Night Edition manches longues|Adulte|2025/26
maillot-junior-psg-night-edition-2025-26.jpg|Paris Saint-Germain|Night Edition|Junior|2025/26
maillot-junior-psg-4th-2025-26.jpg|Paris Saint-Germain|4th|Junior|2025/26
maillot-junior-psg-exterieur-2024-25.jpg|Paris Saint-Germain|Extérieur|Junior|2024/25
psg-y-nk-df-jsy-ss-stad-hm.jpg|Paris Saint-Germain|Domicile|Junior|
psg-y-nk-df-jsy-ss-stad-aw.jpg|Paris Saint-Germain|Extérieur|Junior|
tenue-bebe-psg-exterieur-2026-27.jpg|Paris Saint-Germain|Extérieur|Bébé|2026/27
psg-w-nk-df-jsy-ss-stad-hm.jpg|Paris Saint-Germain|Domicile|Femme|
w-j-psg-jersey.jpg|Paris Saint-Germain|Jordan Paris|Femme|
maillot-avant-match-psg-gris.jpg|Paris Saint-Germain|Avant-match gris|Adulte|
psg-m-nk-df-ss-top-pm-k-aw.jpg|Paris Saint-Germain|Avant-match extérieur|Adulte|
psg-y-nk-df-ss-top-pm-k-aw.jpg|Paris Saint-Germain|Avant-match extérieur|Junior|
maillot-entrainement-psg-strike-gris.jpg|Paris Saint-Germain|Entraînement Strike gris|Adulte|
psg-m-nk-df-strk-ss-top-k.jpg|Paris Saint-Germain|Entraînement Strike|Adulte|
psg-y-nk-df-strk-ss-top-k.jpg|Paris Saint-Germain|Entraînement Strike|Junior|
maillot-entrainement-junior-psg-strike-gris.jpg|Paris Saint-Germain|Entraînement Strike gris|Junior|
maillot-entrainement-junior-psg-strike-blanc-bleu.jpg|Paris Saint-Germain|Entraînement Strike blanc et bleu|Junior|
maillot-entrainement-junior-psg-noir-gris.jpg|Paris Saint-Germain|Entraînement noir et gris|Junior|
psg-m-nk-df-energy-top-ss-ta.jpg,psg-m-nk-df-energy-top-ss-ta-1.jpg,psg-m-nk-df-energy-top-ss-ta-2.jpg|Paris Saint-Germain|Entraînement Energy|Adulte|
psg-m-nk-df-energy-top-ls-aw.jpg|Paris Saint-Germain|Entraînement Energy manches longues|Adulte|
psg-y-nk-df-acdpr-ss-top-k-esn.jpg|Paris Saint-Germain|Entraînement Académie|Junior|
maillot-dkali-seine-marne-blanc.jpg,maillot-dkali-seine-marne-blanc-1.jpg|D'Kali|Seine-et-Marne blanc|Adulte|
maillot-dkali-yvelines-blanc.jpg|D'Kali|Yvelines blanc|Adulte|
maillot-algerie-domicile-2026.jpg|Algérie|Domicile|Adulte|2026
maillot-angleterre-domicile-2026.jpg|Angleterre|Domicile|Adulte|2026
maillot-argentine-domicile-2026.jpg,maillot-argentine-domicile-2026-1.jpg,maillot-argentine-domicile-2026-2.jpg|Argentine|Domicile|Adulte|2026
maillot-belgique-domicile-2026.jpg|Belgique|Domicile|Adulte|2026
maillot-bresil-domicile-2026.jpg|Brésil|Domicile|Adulte|2026
maillot-chili-exterieur-2026.jpg|Chili|Extérieur|Adulte|2026
maillot-colombie-domicile-2026.jpg|Colombie|Domicile|Adulte|2026
maillot-croatie-domicile-2026.jpg|Croatie|Domicile|Adulte|2026
maillot-croatie-exterieur-2026.jpg|Croatie|Extérieur|Adulte|2026
hns-h-jsy.jpg|Croatie|Domicile|Adulte|
hns-a-jsy.jpg|Croatie|Extérieur|Adulte|
fsf-home-jersey-replica.jpg|Sénégal|Domicile|Adulte|
fvf-a-jsy.jpg|Venezuela|Extérieur|Adulte|
fpf-a-jsy.jpg|Pérou|Extérieur|Adulte|
maillot-perou-domicile-2026.jpg|Pérou|Domicile|Adulte|2026
maillot-ghana-domicile-2025.jpg|Ghana|Domicile|Adulte|2025
maillot-ghana-exterieur-2025.jpg|Ghana|Extérieur|Adulte|2025
maillot-italie-domicile-2026.jpg|Italie|Domicile|Adulte|2026
maillot-maroc-domicile-2026.jpg|Maroc|Domicile|Adulte|2026
maillot-mexique-domicile-2026.jpg|Mexique|Domicile|Adulte|2026
maillot-pologne-exterieur-2026.jpg|Pologne|Extérieur|Adulte|2026
maillot-portugal-exterieur-2026.jpg.png|Portugal|Extérieur|Adulte|2026
maillot-tunisie-third-2026.jpg|Tunisie|Third|Adulte|2026
kombat-2027-away-tunisia.jpg|Tunisie|Extérieur|Adulte|2027
kombat-2027-third-tunisia.jpg|Tunisie|Third|Adulte|2027
maillot-uruguay-exterieur-2025.jpg|Uruguay|Extérieur|Adulte|2025
usa-m-nk-df-jsy-ss-stad-hm.jpg|États-Unis|Domicile|Adulte|
nor-m-nk-df-jsy-ss-stad-3rd.jpg|Serbie|Third|Adulte|
maillot-equipe-de-france-domicile-2026.jpg|France|Domicile|Adulte|2026
maillot-equipe-de-france-domicile-authentique-2026.jpg|France|Domicile Authentic|Adulte|2026
maillot-equipe-de-france-domicile-2024.jpg,maillot-equipe-de-france-domicile-2024-1.jpg,maillot-equipe-de-france-domicile-2024-2.jpg,maillot-equipe-de-france-domicile-2024-3.jpg,maillot-equipe-de-france-domicile-2024-4.jpg,maillot-equipe-de-france-domicile-2024-5.jpg,maillot-equipe-de-france-domicile-2024-6.jpg,maillot-equipe-de-france-domicile-2024-7.jpg|France|Domicile|Adulte|2024
maillot-junior-equipe-de-france-exterieur-2026.jpg,maillot-junior-equipe-de-france-exterieur-2026-1.jpg,maillot-junior-equipe-de-france-exterieur-2026-2.jpg,maillot-junior-equipe-de-france-exterieur-2026-3.jpg|France|Extérieur|Junior|2026
maillot-femme-equipe-de-france-domicile-2025.jpg,maillot-femme-equipe-de-france-domicile-2025-1.jpg|France|Domicile|Femme|2025
maillot-avant-match-femme-equipe-de-france-academy-bleu.jpg,maillot-avant-match-femme-equipe-de-france-academy-bleu-1.jpg,maillot-avant-match-femme-equipe-de-france-academy-bleu-2.jpg|France|Avant-match Academy bleu|Femme|
fff-m-nk-df-strk-ss-top-k.jpg,fff-m-nk-df-strk-ss-top-k-1.jpg,fff-m-nk-df-strk-ss-top-k-2.jpg|France|Entraînement Strike|Adulte|
fff-m-nk-dfadv-strk-eltsstop-k.jpg,fff-m-nk-dfadv-strk-eltsstop-k-1.jpg,fff-m-nk-dfadv-strk-eltsstop-k-2.jpg|France|Entraînement Strike Elite|Adulte|
maillot-argentine-exterieur-2026.jpg,maillot-argentine-exterieur-2026-1.jpg,maillot-argentine-exterieur-2026-2.jpg,maillot-argentine-exterieur-2026-3.jpg,maillot-argentine-exterieur-2026-4.jpg|Argentine|Extérieur|Adulte|2026
maillot-avant-match-argentine-2026-blanc.jpg,maillot-avant-match-argentine-2026-blanc-1.jpg,maillot-avant-match-argentine-2026-blanc-2.jpg,maillot-avant-match-argentine-2026-blanc-3.jpg,maillot-avant-match-argentine-2026-blanc-4.jpg|Argentine|Avant-match blanc|Adulte|2026
maillot-avant-match-argentine-2026-enfant-blanc.jpg,maillot-avant-match-argentine-2026-enfant-blanc-1.jpg,maillot-avant-match-argentine-2026-enfant-blanc-2.jpg,maillot-avant-match-argentine-2026-enfant-blanc-3.jpg,maillot-avant-match-argentine-2026-enfant-blanc-4.jpg|Argentine|Avant-match blanc|Junior|2026
maillot-entrainement-argentine-blanc.jpg,maillot-entrainement-argentine-blanc-1.jpg,maillot-entrainement-argentine-blanc-2.jpg,maillot-entrainement-argentine-blanc-3.jpg,maillot-entrainement-argentine-blanc-4.jpg,maillot-entrainement-argentine-blanc-5.jpg,maillot-entrainement-argentine-blanc-6.jpg|Argentine|Entraînement blanc|Adulte|
afa-tr-jsy-y.jpg,afa-tr-jsy-y-1.jpg,afa-tr-jsy-y-2.jpg,afa-tr-jsy-y-3.jpg|Argentine|Entraînement|Junior|
cbf-inf-nk-df-kit-stad-hm.jpg,cbf-inf-nk-df-kit-stad-hm-1.jpg,cbf-inf-nk-df-kit-stad-hm-2.jpg|Brésil|Domicile|Bébé|
tenue-junior-bresil-exterieur-2026.jpg,tenue-junior-bresil-exterieur-2026-1.jpg,tenue-junior-bresil-exterieur-2026-2.jpg,tenue-junior-bresil-exterieur-2026-3.jpg|Brésil|Extérieur|Junior|2026
maillot-gardien-bresil-vert-2026.jpg,maillot-gardien-bresil-vert-2026-1.jpg,maillot-gardien-bresil-vert-2026-2.jpg,maillot-gardien-bresil-vert-2026-3.jpg,maillot-gardien-bresil-vert-2026-4.jpg|Brésil|Gardien vert|Adulte|2026
debardeur-lifestyle-bresil-jordan-jaune.jpg,debardeur-lifestyle-bresil-jordan-jaune-1.jpg,debardeur-lifestyle-bresil-jordan-jaune-2.jpg,debardeur-lifestyle-bresil-jordan-jaune-3.jpg,debardeur-lifestyle-bresil-jordan-jaune-4.jpg|Brésil|Débardeur lifestyle Jordan jaune|Adulte|
m-j-ess-mesh-jersey-p6.jpg,m-j-ess-mesh-jersey-p6-1.jpg,m-j-ess-mesh-jersey-p6-2.jpg,m-j-ess-mesh-jersey-p6-3.jpg,m-j-ess-mesh-jersey-p6-4.jpg,m-j-ess-mesh-jersey-p6-5.jpg|Brésil|Débardeur mesh Jordan bleu|Adulte|
`.trim().split("\n");

const BASE=["Domicile","Extérieur","Third"];
function price(kind,cat){
  if(cat==="Bébé")return 54.99;
  if(/Authentic/.test(kind))return cat==="Femme"?129.99:139.99;
  if(cat==="Femme")return 94.99;
  if(/4th|Night|Jordan Paris/.test(kind))return cat==="Junior"?79.99:109.99;
  if(/Avant-match/.test(kind))return cat==="Junior"?49.99:64.99;
  if(/Débardeur/.test(kind))return 69.99;
  if(/Gardien/.test(kind))return cat==="Junior"?69.99:84.99;
  if(/Entraînement/.test(kind))return cat==="Junior"?44.99:59.99;
  if(/Édition/.test(kind))return 84.99;
  if(/longues/.test(kind))return 104.99;
  return cat==="Junior"?74.99:99.99;
}
const SIZES={Adulte:["S","M","L","XL","XXL"],Femme:["XS","S","M","L","XL"],Junior:["8 ans","10 ans","12 ans","14 ans"],"Bébé":["12 mois","18 mois","24 mois","36 mois"]};
// Prix unique pour toute la boutique (mettre null pour revenir aux prix normaux)
const PRIX_UNIQUE=10;
const CAT_LABEL={Adulte:"Adulte",Femme:"Femme",Junior:"Junior (enfant)","Bébé":"Bébé"};
const slugify=s=>s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/\.[a-z]+(\.png)?$/,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
const P=RAW.map((l,i)=>{
  const [f,club,kind,cat,season]=l.split("|");
  const type=BASE.find(b=>kind.startsWith(b))||"Autre";
  const train=/Entraînement|Avant-match/.test(kind);
  const pre=cat==="Bébé"?"Tenue bébé":kind.startsWith("Débardeur")?"":train?"Haut":"Maillot";
  const name=`${pre?pre+" ":""}${kind} ${club}${cat==="Junior"?" Junior":cat==="Femme"?" Femme":""}${season?" "+season:""}`;
  const files=f.split(",").map(x=>"photos/"+x);
  const n=i+1;
  return {id:slugify(f.split(",")[0]),n,files,file:files[0],club,kind,cat,season,type,train,name,
    oldPrice:price(kind,cat),price:PRIX_UNIQUE??price(kind,cat),sizes:SIZES[cat],sku:"FS-"+String(1000+n),
    stock:n%11===0?2:n%7===0?5:n%5===0?12:40};
});
const byId=id=>P.find(p=>p.id===id);
const eur=n=>n.toFixed(2).replace(".",",")+" €";
const FREE_SHIP=0, SHIP=0; // livraison toujours gratuite

// Disponibilité par taille : toutes les tailles sont en stock
function sizeStock(p,s){
  return p.stock;
}
// Même club + même type, autres catégories (Adulte/Femme/Junior/Bébé)
const variantsOf=p=>P.filter(x=>x.club===p.club&&x.kind===p.kind&&x.season===p.season&&x.id!==p.id);
const sameClub=p=>P.filter(x=>x.club===p.club&&x.id!==p.id);

function longDesc(p){
  const who=p.cat==="Bébé"?"les tout-petits":p.cat==="Junior"?"les enfants":p.cat==="Femme"?"les supportrices":"les supporters";
  const what=p.train?"un haut d'échauffement et d'entraînement":p.kind.startsWith("Gardien")?"un maillot de gardien":"un maillot aux couleurs du club";
  const parts=[`${p.name} : ${what}, pensé pour ${who} de ${p.club}.`];
  if(/manches longues/.test(p.kind))parts.push("Sa version à manches longues est idéale pour les soirées fraîches au stade ou devant l'écran.");
  if(/Authentic/.test(p.kind))parts.push("La version Authentic reprend la coupe et les finitions portées sur le terrain : plus ajustée, plus légère.");
  if(/Night/.test(p.kind))parts.push("Une édition à part, avec un design nocturne qui sort de l'ordinaire.");
  if(/4th/.test(p.kind))parts.push("Un quatrième maillot : une pièce de collection pour les vrais fans.");
  if(/Édition/.test(p.kind))parts.push("Édition spéciale, disponible en quantité limitée.");
  if(p.type==="Domicile")parts.push("Le maillot domicile, celui des grands soirs à la maison.");
  if(p.type==="Extérieur")parts.push("Le maillot extérieur, pour suivre l'équipe partout.");
  if(p.type==="Third")parts.push("Le troisième maillot : un look différent pour sortir du lot.");
  parts.push("Écusson du club, tissu léger et respirant, confortable du coup d'envoi au coup de sifflet final.");
  return parts;
}

// Guide des tailles (indicatif)
const GUIDE={
  Adulte:[["S","92–98","Hauteur 1,65–1,72 m"],["M","98–104","1,72–1,78 m"],["L","104–112","1,78–1,84 m"],["XL","112–120","1,84–1,90 m"],["XXL","120–128","1,90 m et +"]],
  Femme:[["XS","78–82","1,55–1,60 m"],["S","82–88","1,60–1,66 m"],["M","88–94","1,66–1,72 m"],["L","94–100","1,72–1,78 m"],["XL","100–108","1,78 m et +"]],
  Junior:[["8 ans","64–68","Hauteur 128 cm"],["10 ans","68–72","140 cm"],["12 ans","72–78","152 cm"],["14 ans","78–84","164 cm"]],
  "Bébé":[["12 mois","46–48","Hauteur 80 cm"],["18 mois","48–50","86 cm"],["24 mois","50–52","92 cm"],["36 mois","52–54","98 cm"]]
};

// ---------- Avis (préremplis, différents selon le maillot : de 0 à 10) ----------
const RV_NAMES=["Lucas","Emma","Léo","Chloé","Nathan","Camille","Hugo","Manon","Louis","Sarah","Enzo","Léa","Rayan","Inès","Tom","Jade","Mohamed","Lina","Noah","Zoé","Gabriel","Mia","Adam","Anaïs","Ethan","Yasmine","Maxime","Clara","Jules","Sofia"];
const RV_TXT={
  5:["Qualité au top, exactement comme sur les photos.","Très content de cet achat, ça taille parfaitement.","Le tissu est agréable et les finitions sont soignées.","Livraison rapide et maillot magnifique, je recommande.","Parfait pour le prochain match, couleurs fidèles.","Le flocage a été ajouté gratuitement, super service."],
  4:["Très bon maillot, juste un peu grand pour moi.","Beau rendu, le flocage s'est très bien passé.","Content de l'achat, léger retard de livraison seulement.","Bonne qualité dans l'ensemble, je recommande.","Jolie coupe, un poil cher mais ça vaut le coup."]
};
function seedReviews(p){
  const n=p.n, count=n%11; // 0 à 10 avis selon le maillot
  const out=[];
  for(let i=0;i<count;i++){
    const seed=n*31+i*7;
    const roll=seed%100;
    const note=roll<60?5:4;
    const nom=RV_NAMES[(seed*3+i)%RV_NAMES.length];
    const txt=RV_TXT[note][(seed+i*5)%RV_TXT[note].length];
    const day=((seed*13+i*17)%340)+1;
    const d=new Date();d.setDate(d.getDate()-day);
    out.push({nom,note,txt,date:d.toLocaleDateString("fr-FR"),ts:d.getTime()});
  }
  return out;
}

// ---------- Flocage gratuit ----------
const FLOCK_NAME_MAX=12, FLOCK_NUM_MAX=2;
function flockValid(name,num){return /^[A-Za-zÀ-ÿ' -]{1,12}$/.test(name.trim())&&/^\d{1,2}$/.test(num.trim())}
function flockLabel(f){return f?`Flocage : ${f.name.toUpperCase()} ${f.number}`:""}
const flockKey=f=>f?(f.name.trim().toUpperCase()+"|"+f.number.trim()):"";

// ---------- Panier ----------
const Cart={
  get(){try{return JSON.parse(localStorage.getItem("fs_cart")||"[]")}catch(e){return[]}},
  set(v){try{localStorage.setItem("fs_cart",JSON.stringify(v))}catch(e){}},
  add(id,size,q,flock=null){const c=this.get();const fk=flockKey(flock);const l=c.find(x=>x.id===id&&x.size===size&&flockKey(x.flock)===fk);l?l.q+=q:c.push({id,size,q,flock});this.set(c)},
  setQAt(i,q){let c=this.get();if(!c[i])return;if(q<=0)c.splice(i,1);else c[i].q=q;this.set(c)},
  removeAt(i){let c=this.get();c.splice(i,1);this.set(c)},
  count(){return this.get().reduce((a,x)=>a+x.q,0)},
  total(){return this.get().reduce((a,x)=>{const p=byId(x.id);return a+(p?p.price*x.q:0)},0)}
};
// ---------- Favoris ----------
const Fav={
  get(){try{return JSON.parse(localStorage.getItem("fs_fav")||"[]")}catch(e){return[]}},
  has(id){return this.get().includes(id)},
  toggle(id){let f=this.get();f=f.includes(id)?f.filter(x=>x!==id):[...f,id];try{localStorage.setItem("fs_fav",JSON.stringify(f))}catch(e){};return f.includes(id)}
};
function updateCartBadge(){const e=document.getElementById("cartCount");if(e)e.textContent=Cart.count()}
