
```statblock
name: Leopardo de sangue
source: Rota violeta
image: <STATBLOCK-WIKI-LINK>Ghoul.png<STATBLOCK-WIKI-LINK>
size: media
type: Aberraçao
subtype: Humanoide sintetica
description: O Resultado da produção de armas vivas. Essas criaturas abandonadas por Deus foram expostas a transformações provenientes de uma forma de suspensão de morte, e dessa forma, se tornaram violentas e animalescas. Ghouls mais conscientes conseguem expressar dor constante, perturbações visuais, alucinações e outros efeitos
ac: 10
hp: 400
hit_dice: 18d10 + 36
speed: 15 metros
stats:
  - 6
  - 2
  - 1
  - 1
  - 3
vigor:
  - 0
  - 0
  - 0
  - 0
  - 0
agilidade:
  - 0
  - 0
  - 0
  - 0
  - 0
intelecto:
  - 0
  - 0
  - 0
  - 0
  - 0
presença:
  - 0
  - 0
  - 0
  - 0
  - 0
sintonia:
  - 0
  - 0
  - 0
  - 0
  - 0
senses: visao noturna 120 metros, percepçao passiva 13
bestiary: true
traits:
  - name: Oportunidade
    desc: Sempre que o ghoul fica invisível, ele pode utilizar a próxima ação para segurar uma criatura pelo pescoço, Imobilizando-a e recebendo vantagens dinâmicas para todos ataques ate o próximo turno
    attack_bonus: 0
  - name: Regeneraçao
    desc: O corpo dessa criatura usa mana como energia, dessa forma, utiliza mana para se recuperar parcialmente. Essa criatura recupera `dice:2d8` de vida por turno
    attack_bonus: 0
actions:
  - name: Oportunidade
    desc: O Ghoul ataca um alvo, cravando suas garras e causando `dice:1d10+6` de Dano
    attack_bonus: 0
  - name: Estraçalhar
    desc: Custa duas ações, O ghoul tenta <STATBLOCK-WIKI-LINK>Imobilizado|imobilizar<STATBLOCK-WIKI-LINK> um alvo (Disputa de força bruta) com sucesso, ele usa suas duas garras para estraçalhar o alvo, causando `dice:2d10+5` de dano
    attack_bonus: 0
  - name: Partir
    desc: Apos acertar duas Garras, o ghoul pode utilizar as garras cravadas para causar grandes danos internos no inimigo, causando `dice:2d10` de dano, e <STATBLOCK-WIKI-LINK>Sangrando|sangramento<STATBLOCK-WIKI-LINK>
    attack_bonus: 0
legendary:
  - name: Grito estridente
    desc: O ghoul emite um som estridente terrível, fazendo todos as criaturas em um raio de 30 Metros fazerem um teste de Postura, com falha resultando em perder uma ação no próximo turno
  - name: Fuga
    desc: O Ghoul usa as 3 ações para desengajar, ficar invisível, e desaparecer. ele fica indetectável pelos próximos 5 minutos

```