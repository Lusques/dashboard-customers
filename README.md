src/
├── app/
│   ├── core/                     // Serviços, guards, interceptors e modelos globais
│   │   ├── services/             // Lógica de negócios reutilizável
│   │   ├── guards/               // Controle de acesso às rotas
│   │   ├── interceptors/         // Manipulação de requisições/respostas HTTP
│   │   ├── models/               // Definições de dados da aplicação
│   │   └── core.module.ts        // Módulo para agrupar serviços core
│   ├── features/                 // Módulos de funcionalidade da aplicação
│   │   ├── dashboard/            // Funcionalidade de painel administrativo
│   │   │   ├── components/       // Componentes específicos do dashboard
│   │   │   ├── services/         // Serviços específicos do dashboard
│   │   │   ├── dashboard-routing.module.ts // Rotas do módulo dashboard
│   │   │   └── dashboard.module.ts   // Módulo Angular do dashboard
│   │   ├── ...                   // Outras funcionalidades
│   ├── layouts/                   // Componentes de layout da aplicação
│   │   ├── admin-layout/         // Layout para a área administrativa
│   │   │   ├── admin-layout.component.html
│   │   │   ├── admin-layout.component.scss
│   │   │   ├── admin-layout.component.ts
│   │   │   └── pages/ // Páginas do layout
│   │   ├── public-layout/        // Layout para a área pública
│   │   │   ├── public-layout.component.html
│   │   │   ├── public-layout.component.scss
│   │   │   ├── public-layout.component.ts
│   │   │   └── pages/ // Páginas do layout
│   │   ├── ...                   // Outros layouts
│   ├── shared/                    // Componentes, diretivas, pipes e utilitários reutilizáveis
│   │   ├── components/            // Componentes genéricos reutilizáveis
│   │   ├── directives/            // Diretivas customizadas
│   │   ├── pipes/                 // Pipes customizados
│   │   ├── utils/                 // Funções utilitárias
│   │   └── shared.module.ts      // Módulo para agrupar itens compartilhados
│   ├── app-routing.module.ts     // Rotas principais da aplicação
│   ├── app.component.html
│   ├── app.component.scss
│   ├── app.component.spec.ts
│   ├── app.component.ts
│   └── app.module.ts             // Módulo raiz da aplicação
├── assets/                    // Arquivos estáticos (imagens, fontes, etc.)
├── environments/              // Configurações para diferentes ambientes
└── styles.scss                // Estilos globais da aplicação
├── ... (outros arquivos)