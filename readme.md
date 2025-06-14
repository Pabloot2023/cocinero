aaaEste proyecto cuenta con un flujo de CI/CD automatizado utilizando GitHub Actions y Vercel.

🧪 CI: Integración continua (tests automáticos)
Cada vez que se hace un push o pull request al branch master, se ejecuta:

✅ checkout: descarga el código del repo

✅ setup-node: configura Node.js 18 y cachea npm

✅ npm ci: instala dependencias

✅ npm run lint: analiza errores de estilo o sintaxis

✅ npm run build: compila el proyecto

✅ npm test: ejecuta tests unitarios

✅ npx playwright install --with-deps chromium: instala navegador

✅ npm run test:e2e: corre tests E2E con Playwright

Si alguno de estos pasos falla, el pipeline se interrumpe y no se hace deploy.

🚀 CD: Despliegue continuo (automático en Vercel)
Si todos los tests pasan, se ejecuta el job deploy:

Se vuelve a hacer checkout

Se utiliza amondnet/vercel-action@v25 para hacer deploy a producción (--prod)

Requiere los siguientes secretos configurados en GitHub:

VERCEL_TOKEN

VERCEL_ORG_ID

VERCEL_PROJECT_ID

✅ Resultado esperado
Caso	¿Deploya a producción?
✅ Tests pasan	✅ Sí
❌ Cualquier test falla	❌ No

🗂️ Archivo de configuración
La lógica está definida en .github/workflows/ci.yml .