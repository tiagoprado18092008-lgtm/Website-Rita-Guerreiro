# Mega-menu dois painéis — Design Spec

**Data:** 2026-05-11  
**Ficheiro afetado:** `project/src/ui.jsx` (componente `Nav`)

---

## Objetivo

Substituir o mega-menu atual (grelha de 4 colunas com fundo branco) por um dropdown de dois painéis com fundo teal, estrutura igual à imagem de referência partilhada pelo utilizador.

## Design aprovado

### Estrutura visual

- **Painel esquerdo (240px):** lista de categorias com fundo `#7ab5ae` (teal do site)
  - Cada categoria: texto + seta `›` à direita, separador horizontal entre itens (`rgba(255,255,255,0.2)`)
  - Categoria ativa (hover): fundo `#5a9e97` (teal mais escuro), texto branco bold
  - Categorias inativas: texto `rgba(255,255,255,0.9)`

- **Painel direito (flex:1):** lista de subserviços com fundo `#5a9e97`
  - Eyebrow com nome da categoria em uppercase teal claro (`rgba(255,255,255,0.6)`)
  - Cada serviço: texto branco, separador fino entre itens (`rgba(255,255,255,0.15)`)
  - Link "Ver todos os serviços de X" no fundo (só para categorias com página própria)

### Interação

- **Hover na categoria** → troca o painel direito (sem clique necessário)
- Estado inicial: primeira categoria ativa por defeito ao abrir o menu
- Fechar: ao mover o rato para fora do dropdown (comportamento atual mantido)

### Categorias e serviços

| Categoria | Serviços | Página própria |
|---|---|---|
| Fisioterapia | Fisioterapia Geral, ATM/Mesoterapia, Vestibular/Acupuntura | `fisioterapia.html` |
| Cuidados de Saúde | Nutrição, Terapia de Bowen, Psicologia | — |
| Massagens | 8 serviços (ver `SERVICES.massagens` em `data.jsx`) | `massagens.html` |
| Holísticas | Reflexologia, Shiatsu, Massagem Indiana, Head Spa | `holisticas.html` |
| Estética & Tratamentos | Faciais, Pacotes de Tratamento, Depilação a Laser, Pilates Clínico | — |

### Mobile (accordion — comportamento atual mantido)

- Toque na categoria expande os subserviços inline
- Sem alterações ao código mobile

---

## Implementação

**Único ficheiro a alterar:** `project/src/ui.jsx`

Substituir o array `megaCols` e o bloco JSX do dropdown (linhas ~87–218) pelo novo design de dois painéis.

Usar `React.useState` para rastrear `activeCol` (índice da categoria em hover).

```
const [activeCol, setActiveCol] = React.useState(0);
```

Novo `megaCols` derivado diretamente de `SERVICES` (importado de `data.jsx` via `window.SERVICES`).

---

## O que NÃO muda

- Nenhum ficheiro HTML
- Comportamento mobile (accordion)
- Links dos serviços individuais
- Fechar o menu ao hover-out
