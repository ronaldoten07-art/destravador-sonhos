# 🧠 Destravador de Sonhos - Landing Page

## 📋 Sobre o Projeto

Landing page profissional de pré-venda para o curso **"Destravador de Sonhos"** de **Jair Peres**, desenvolvida com total conformidade às políticas do Google Ads para sites de afiliados.

Este site foi criado para **Ronaldo da Cunha Silva** (CPF: 121.496.937-20) com o objetivo de divulgar o curso através de marketing digital e anúncios no Google Ads.

---

## ✨ Características Principais

### 🎯 Conformidade com Google Ads

✅ **Aviso de afiliação destacado** - Box visível antes do CTA principal  
✅ **Informações de contato completas** - Nome, CPF e email do responsável  
✅ **Política de Privacidade completa** - Com data específica, LGPD e responsável identificado  
✅ **Termos de Uso detalhados** - Natureza de site afiliado, isenções e limitações  
✅ **Transparência total** - Menciona claramente o produtor (Jair Peres) e plataforma (Hotmart)  
✅ **CTA claro** - Indica redirecionamento para site externo  

### 🎨 Design e Experiência

- **Design moderno e profissional** com gradientes e animações suaves
- **Totalmente responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- **Paleta de cores atrativa** - Azul/roxo para confiança + laranja para CTAs
- **Ícones Font Awesome** para melhor comunicação visual
- **Tipografia Google Fonts (Inter)** - Moderna e legível
- **Animações sutis** - Float, fade in, scroll reveals
- **Menu mobile** funcional com ícone hamburger

### 📱 Seções da Landing Page

1. **Hero** - Título impactante sobre bloqueios mentais
2. **Problema** - Identificação com a dor do público (procrastinação, projetos inacabados)
3. **Solução** - Apresentação do método e benefícios
4. **Aviso de Afiliação** - Box destacado com transparência total
5. **CTA Principal** - Botão para acessar curso na Hotmart
6. **Sobre** - Quem é o responsável pelo site
7. **Footer** - Informações legais completas

### 🔧 Funcionalidades Técnicas

- Scroll suave para navegação interna
- Animações on-scroll com Intersection Observer
- Menu mobile responsivo
- Botão "Voltar ao topo"
- Tracking de eventos (preparado para Google Analytics)
- Exit intent detection
- Medição de profundidade de scroll
- Tempo na página

---

## 📁 Estrutura de Arquivos

```
├── index.html              # Página principal
├── privacy.html            # Política de Privacidade
├── terms.html             # Termos de Uso
├── css/
│   └── style.css          # Estilos completos e responsivos
├── js/
│   └── main.js            # JavaScript para interatividade
└── README.md              # Este arquivo
```

---

## 🚀 Funcionalidades Implementadas

### ✅ Páginas Criadas

- [x] **index.html** - Landing page principal
- [x] **privacy.html** - Política de Privacidade (LGPD compliant)
- [x] **terms.html** - Termos de Uso detalhados

### ✅ Seções da Landing Page

- [x] Header com navegação responsiva
- [x] Hero section com título impactante
- [x] Seção "Problema" com cards de identificação
- [x] Seção "Solução" com benefícios do curso
- [x] Box de aviso de afiliação destacado
- [x] CTA principal para Hotmart
- [x] Seção "Sobre" o responsável
- [x] Footer completo com informações legais

### ✅ Design e UX

- [x] Design moderno com gradientes
- [x] Responsivo para mobile/tablet/desktop
- [x] Animações suaves
- [x] Ícones Font Awesome
- [x] Tipografia Google Fonts
- [x] Paleta de cores profissional
- [x] Menu mobile funcional
- [x] Botão voltar ao topo

### ✅ Conformidade Legal

- [x] Aviso de afiliação visível
- [x] Informações de contato completas
- [x] Política de Privacidade com LGPD
- [x] Termos de Uso detalhados
- [x] Identificação do produtor (Jair Peres)
- [x] Menção à Hotmart
- [x] Disclaimers apropriados

### ✅ Tracking e Analytics

- [x] Preparado para Google Analytics
- [x] Tracking de cliques no CTA
- [x] Medição de scroll depth
- [x] Tempo na página
- [x] Exit intent detection
- [x] Eventos personalizados

---

## 🔗 Links Importantes

- **Link de Afiliação**: https://jairperes.com.br/destravadordesonhos/?ref=K103841242Y
- **Produtor**: Jair Peres
- **Plataforma**: Hotmart

---

## 📧 Informações de Contato

**Responsável pelo site:**  
Ronaldo da Cunha Silva  
CPF: 121.496.937-20  
Email: ronaldoten07@gmail.com

**Natureza do site:**  
Site de divulgação como afiliado independente

---

## 🎯 Próximos Passos Recomendados

### 1. Configurar Google Analytics (Obrigatório para Google Ads)

Adicione o código do Google Analytics no `<head>` de todas as páginas HTML:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Substitua `G-XXXXXXXXXX` pelo seu ID real do Google Analytics**

### 2. Configurar Google Ads Conversion Tracking

No arquivo `js/main.js`, linha 52, substitua:

```javascript
'send_to': 'AW-XXXXXXXXX/XXXXXXXXX', // Substituir pelo ID da conversão real
```

Pelo seu ID real de conversão do Google Ads.

### 3. Publicar o Site

**Opções de hospedagem gratuitas:**

- **Vercel** (Recomendado) - https://vercel.com
- **Netlify** - https://netlify.com
- **GitHub Pages** - https://pages.github.com
- **Cloudflare Pages** - https://pages.cloudflare.com

**Como publicar:**

1. Crie uma conta na plataforma escolhida
2. Conecte com GitHub ou faça upload dos arquivos
3. Configure domínio personalizado (opcional)
4. Anote a URL final

### 4. Configurar Domínio Personalizado (Opcional)

Para maior credibilidade no Google Ads, considere:

- Registrar um domínio próprio (ex: `destravadordesonhos.com.br`)
- Conectar ao serviço de hospedagem
- Configurar SSL (HTTPS) - obrigatório para Google Ads

### 5. Solicitar Desbloqueio do Google Ads

Após publicar o site, envie ao Google Ads:

**Documentos necessários:**

1. ✅ RG ou CNH (frente e verso)
2. ✅ Comprovante de residência atualizado
3. ✅ Comprovante de afiliação Hotmart (print da área de afiliado)
4. ✅ URL do site publicado
5. ✅ Carta explicativa (modelo abaixo)

**Modelo de Carta Explicativa:**

```
Prezado time de verificação do Google Ads,

Meu nome é Ronaldo da Cunha Silva, CPF 121.496.937-20, 
e sou um AFILIADO INDIVIDUAL (pessoa física) da plataforma Hotmart.

Criei o site [URL DO SITE] para divulgar o curso 
"Destravador de Sonhos", de autoria de Jair Peres.

NÃO sou o criador do curso, apenas promovo este produto 
como afiliado registrado através do meu link de afiliação.

O site contém:
✓ Aviso de afiliação destacado
✓ Minhas informações de contato completas
✓ Política de Privacidade em conformidade com LGPD
✓ Termos de Uso detalhados
✓ Redirecionamento transparente para Hotmart

Informações sobre relações comerciais:
- Proprietário do produto: Jair Peres
- Plataforma de vendas: Hotmart (hotmart.com)
- Minha função: Afiliado promocional

Segue em anexo toda a documentação solicitada.

Estou à disposição para qualquer esclarecimento adicional.

Atenciosamente,
Ronaldo da Cunha Silva
ronaldoten07@gmail.com
```

### 6. Testar Antes de Publicar

**Checklist de testes:**

- [ ] Todos os links funcionam corretamente
- [ ] Menu mobile abre e fecha
- [ ] Botão CTA redireciona para URL correta
- [ ] Páginas legais carregam corretamente
- [ ] Site é responsivo em mobile
- [ ] Sem erros no console do navegador
- [ ] Scroll suave funciona
- [ ] Animações aparecem corretamente

### 7. Otimizações para SEO (Opcional)

Adicionar no `<head>` do index.html:

```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="[URL DO SITE]">
<meta property="og:title" content="Destravador de Sonhos - Supere Bloqueios Mentais">
<meta property="og:description" content="Descubra como destravar seus planos e superar bloqueios mentais que impedem suas conquistas.">
<meta property="og:image" content="[URL DA IMAGEM]">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="[URL DO SITE]">
<meta property="twitter:title" content="Destravador de Sonhos - Supere Bloqueios Mentais">
<meta property="twitter:description" content="Descubra como destravar seus planos e superar bloqueios mentais que impedem suas conquistas.">
<meta property="twitter:image" content="[URL DA IMAGEM]">
```

### 8. Melhorias Futuras (Não Urgentes)

- [ ] Adicionar depoimentos de alunos do curso
- [ ] Criar seção de FAQ (Perguntas Frequentes)
- [ ] Adicionar vídeo explicativo
- [ ] Implementar chat ou WhatsApp
- [ ] Criar versão em inglês (se aplicável)
- [ ] Adicionar blog com conteúdo relacionado

---

## ⚠️ Avisos Importantes

### Não Altere Sem Cuidado

Os seguintes elementos são **CRÍTICOS** para aprovação no Google Ads:

1. ⚠️ **Box de aviso de afiliação** - Deve permanecer destacado
2. ⚠️ **Informações de contato** - Devem estar visíveis no footer
3. ⚠️ **Política de Privacidade** - Não remover ou simplificar
4. ⚠️ **Termos de Uso** - Não remover ou simplificar
5. ⚠️ **Disclaimers** - Mencionar Hotmart e Jair Peres

### URLs Corretas

Certifique-se que todos os links apontam para:

- **Link de afiliação**: `https://jairperes.com.br/destravadordesonhos/?ref=K103841242Y`
- **Email**: `ronaldoten07@gmail.com`

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna com gradientes e animações
- **JavaScript (Vanilla)** - Interatividade sem frameworks
- **Font Awesome 6** - Ícones
- **Google Fonts (Inter)** - Tipografia
- **Intersection Observer API** - Animações on-scroll

---

## 📊 Métricas para Monitorar

Depois de publicar e configurar o Google Analytics, monitore:

1. **Taxa de conversão** - Cliques no CTA / Visitantes
2. **Tempo médio na página** - Ideal: > 2 minutos
3. **Taxa de rejeição** - Ideal: < 60%
4. **Profundidade de scroll** - Quantos chegam ao CTA
5. **Dispositivos** - Mobile vs Desktop
6. **Origem do tráfego** - Google Ads vs Orgânico

---

## 📞 Suporte

Para dúvidas sobre o site:
- Email: ronaldoten07@gmail.com

Para dúvidas sobre o curso:
- Entre em contato diretamente com Hotmart ou Jair Peres

---

## 📝 Licença e Direitos

**Desenvolvido para**: Ronaldo da Cunha Silva  
**Curso**: Destravador de Sonhos - Jair Peres  
**Plataforma**: Hotmart  

Este é um site de divulgação como afiliado. O curso "Destravador de Sonhos" é de propriedade de Jair Peres.

---

## ✅ Status do Projeto

**Status**: ✅ **COMPLETO E PRONTO PARA PUBLICAÇÃO**

Todos os requisitos para aprovação no Google Ads foram implementados:

- ✅ Landing page principal completa
- ✅ Política de Privacidade LGPD compliant
- ✅ Termos de Uso detalhados
- ✅ Aviso de afiliação destacado
- ✅ Design profissional e responsivo
- ✅ JavaScript funcional
- ✅ Conformidade total com políticas Google Ads

**Próximo passo**: Publicar em plataforma de hospedagem e configurar Google Analytics.

---

**Desenvolvido com ❤️ para Ronaldo da Cunha Silva**

*Boa sorte com suas campanhas no Google Ads! 🚀*
Atualizado em: 25/01/2026 - 01:00
