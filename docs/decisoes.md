# Decisões de projeto

Registro das decisões técnicas e visuais, com justificativa. Útil para a documentação acadêmica.

| ID | Data | Decisão | Justificativa |
|----|------|---------|---------------|
| D-001 | 29/10/2026 | Catálogo digital, não e-commerce | Escopo do MVP; pedido concluído no WhatsApp (RN-004) |
| D-002 | 29/10/2026 | React + Vite, dados locais | Simples de hospedar e validar com a cliente; sem backend no MVP (RNF-006) |
| D-003 | 29/10/2026 | React Router com rotas `/catalogo/:categoria/:ocasiao` | Cada tela tem endereço próprio e pode ser compartilhada por link |
| D-004 | 29/10/2026 | Cores e fontes em variáveis CSS (`tokens.css`) | Ajustar a identidade em um único lugar (RNF-005) |
| D-005 | 29/10/2026 | Catálogo v2 com três faixas de tom (azul profundo / base / profundo) | Protótipo v1 causou fadiga visual por falta de separação tonal (RNF-004) |
| D-006 | 29/10/2026 | Texto separado da foto no celular | Fotografia como protagonista (RNF-002) |
| D-007 | 29/10/2026 | Botão "Pedir pelo WhatsApp" adicionado à galeria | Atende RF-008; não existia nos protótipos v1, a validar com a cliente |
| D-008 | 29/10/2026 | Fotos provisórias recortadas dos protótipos | Permitir demonstração antes das fotos reais; substituir em `public/images/` |
| D-009 | 08/11/2026 | Usar a logo fornecida em PNG transparente no cabeçalho e favicon, preservando o JPG original | Mantém o selo da marca sem o fundo externo da fotografia e conserva a fonte original no projeto |
| D-010 | 08/11/2026 | Manter a foto principal nítida e aplicar desfoque apenas na camada de fundo, com máscara radial nas bordas | Suaviza a transição periférica sem borrar o produto |
| D-011 | 08/11/2026 | Integrar rodapé sem faixa de fundo, com chamada para Instagram e crédito produzido por lukescripts | Mantém a composição contínua; o perfil oficial será vinculado quando informado |
| D-012 | 08/11/2026 | Gerar favicon PNG a partir da logo transparente e referenciá-lo pelo BASE_URL do Vite | Mantém o ícone da aba correto em publicação sob caminho de projeto no GitHub Pages |
| D-013 | 08/11/2026 | Publicar dist/404.html como cópia de dist/index.html | Permite que o React Router carregue rotas acessadas diretamente no GitHub Pages |
| D-014 | 08/11/2026 | Preparar o base do Vite para o slug belle-galette | Repositório renomeado; validar o Pages após o merge e o deploy do PR |
| D-015 | 08/11/2026 | Integrar o rodapé à identidade visual de todas as páginas, sem bloco azul separado | Aproxima o convite do Instagram e o crédito da assinatura gráfica Eiffel no fim de cada página |
| D-016 | 08/11/2026 | Apresentar uma capa geral de Macarons antes das ocasiões | A página começa pelo doce; o botão segue para as criações da categoria e a foto pode ser trocada em `public/images/capa-macarons.jpg` |
