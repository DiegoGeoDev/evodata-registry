arrumar registry para salvar todos os arquivos de src\app\shared\core do zard
arrumar registry para salvar em src\app\shared\core no client

arrumar jsrepo.config.mts

arrumar para funcionar com github
npx jsrepo init github:seu-usuario/evodata-registry
npx jsrepo add button

# registry

https://www.jsrepo.dev/docs/create-a-registry

criar jsrepo.config.mts ou executar
npx jsrepo init

editar jsrepo.config.mts informando os componentes que desejar compartilhar

fazer o build
npx jsrepo build

# client

https://www.jsrepo.dev/docs/jsrepo-config

precisa instalar o pacote
npm install -D jsrepo

precisa criar jsrepo.config.mts na raiz do projeto e e adicionar o provider fs => tbm vai precisar adicionar do github depois
ou executar
npx jsrepo init

```typescript
import { defineConfig } from 'jsrepo';
import { fs } from 'jsrepo/providers';

export default defineConfig({
  providers: [fs()],
  registries: [],
  paths: {},
});
```

testar local

npx jsrepo init fs://C:/Users/loqev/Documents/diego/cursos/angular/evodata-registry
npx jsrepo add button

--

Resumo das mudanças:

1. Novo item no registry: zard-setup
   Tipo: lib (biblioteca/setup)
   Modo de instalação: optionally-on-init - O usuário será perguntado se quer instalar durante o jsrepo init

Inclui:
providezard.ts - Provider principal
Plugins de event manager (.prevent, .stop, etc)
styles.css como documentação (não será copiado automaticamente)
ZARD_SETUP.md com instruções completas

2. Como funciona no projeto client:

```bash
# Ao fazer init, o usuário será perguntado se quer o zard-setup
npx jsrepo init fs://C:/Users/loqev/Documents/diego/cursos/angular/evodata-registry

# Ou adicionar manualmente depois
npx jsrepo add zard-setup

# Para incluir os arquivos de documentação (styles.css e README)
npx jsrepo add zard-setup --with-docs
```

3. O que é instalado automaticamente:
   ✅ providezard.ts e event-manager-plugins
   ✅ Dependências npm necessárias

4. O que o usuário precisa fazer manualmente:
   Adicionar provideZard() no app.config.ts
   Copiar as variáveis CSS do styles.css (incluído com --with-docs)

Instalar tailwindcss-animate

Nota: Os arquivos styles.css e ZARD_SETUP.md foram marcados como doc, então só são instalados quando o usuário adiciona a flag --with-docs, evitando sobrescrever o styles.css existente do usuário.
