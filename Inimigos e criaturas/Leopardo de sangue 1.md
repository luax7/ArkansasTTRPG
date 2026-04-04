
```statblock
name: Leopardo de sangue
source: Rota violeta
image: [[Leopardo de sangue.png]]
size: Grande
type: Animal
subtype: Magico
description: Uma criatura ágil, silenciosa e brutal, que utiliza o próprio sangue — e o de suas vítimas — como arma. Ele não luta de forma direta no início, preferindo enfraquecer, isolar e controlar o campo antes de finalizar.
ac: 11
hp: 200
hit_dice: 18d10 + 36
speed: 15 metros
stats:
  - 4
  - 3
  - 0
  - 1
  - 3
vigor:
  - 2
  - 3
  - 1
  - 1
  - 3
agilidade:
  - 0
  - 2
  - 1
  - 2
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
  - 1
  - 2
  - 0
sintonia:
  - 1
  - 0
  - 2
  - 0
  - 0
senses: visao noturna 120 metros, percepçao passiva 13
bestiary: true

traits:
  - name: Orgulho Predatório
    desc: O Leopardo de Sangue nunca inicia combate furtivamente. No primeiro turno de combate ele recebe +2 metros de deslocamento e vantagem no primeiro ataque corpo a corpo que realizar.
    attack_bonus: 0

  - name: Corpo de Cristal Vivo
    desc: Sempre que sofrer dano corpo a corpo, o atacante sofre `dice:1d4` de dano cortante devido aos fragmentos cristalizados que revestem suas patas e ombros.
    attack_bonus: 0

actions:
  - name: Garras de Guerra
    desc: Ataque corpo a corpo causando `dice:1d8+5` de dano físico.
    attack_bonus: 0

  - name: Investida Dominante
    desc: Se mover pelo menos 6 metros em linha reta antes do ataque, causa `dice:2d8+3` de dano. Após o ataque, pode se mover 3 metros sem provocar ataque de oportunidade.
    attack_bonus: 0

  - name: Golpe de Recuo
    desc: O Leopardo realiza um ataque de garras causando `dice:1d8+4` de dano e pode imediatamente se afastar até metade do deslocamento.
    attack_bonus: 0

legendary:
  - name: Rugido Territorial
    desc: O Leopardo solta um rugido poderoso. Criaturas a até 15 metros devem realizar teste de postura DT 12 ou ficam intimidadas até o final do próximo turno (não podem se aproximar voluntariamente).

  - name: Salto Imponente
    desc: O Leopardo salta até 9 metros para um espaço desocupado que possa ver. Se terminar adjacente a uma criatura, pode realizar um ataque de Garras de Guerra.
```
