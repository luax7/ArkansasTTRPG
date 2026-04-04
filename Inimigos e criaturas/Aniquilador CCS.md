
```statblock
name: Aniquilador CCS
source: Rota violeta
image: [[79479ec0fce09de34bbdf611a4f909c2-removebg-preview.png]]
size: medio
type: Humano
subtype: 
description: Um agente de combate fisico medio da CCS, equipado com artefatos e tecnicas, ele se prova uma ameaça para qualquer criminoso desavisado
ac: 9
hp: 80
hit_dice: 18d10 + 36
speed: 15 metros
stats:
  - 3
  - 2
  - 1
  - 1
  - 0
vigor:
  - 1
  - 2
  - 1
  - 0
  - 2
agilidade:
  - 0
  - 0
  - 0
  - 1
  - 1
intelecto:
  - 2
  - 0
  - 1
  - 0
  - 1
presença:
  - 0
  - 0
  - 1
  - 0
  - 1
sintonia:
  - 0
  - 0
  - 1
  - 0
  - 2
senses: visao noturna 120 metros, percepçao passiva 13
bestiary: true
traits:
  - name: Bravado
    desc: Tem vantagem +2 em testes de resistencia de postura e resistencia a intimidaçao.
    attack_bonus: 0
actions:
  - name: Cacetete
    desc: utiliza um artefato de cacetete com uma joia cravejada com um circulo magico de trovao para atacar um alvo. Causa `dice:1d8` de dano contundente +2 de dano trovejante. Se esse ataque tiver sucesso critico, [[Atordoado|Atordoa]] o alvo por um turno.
    attack_bonus: 5
  - name: Pistola
    desc: Utiliza uma pistola para realizar disparos contra um alvo. Causa 1d6 de dano balistico.
legendary:
  - name: Suplex!
    desc: O guarda , agarrando uma criatura, faz um suplex. Causando ``dice:3d8`` de dano contundente e o deixando [[Derrubado]].
    attack_bonus: 0
    
    drops:
  - name:Cacetete de choque
    desc:1 em 1d4 de dropar um cacetete de choque, que tem os efeitos do ataque Cacetete.
    
    attack_bonus:0
  - name:Dinheiro
    desc:`dice:1d20`$
    attack_bonus:0
```
