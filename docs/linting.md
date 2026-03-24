# Лінтинг коду

## Обраний лінтер

Проєкт використовує **ESLint** - найпопулярніший статичний аналізатор JavaScript/TypeScript коду.

**Причини вибору:**

- Найширше розповсюдження в екосистемі JavaScript (використовується у переважній більшості проєктів)
- Офіційна інтеграція з Next.js через пакет `eslint-config-next`
- Вбудована підтримка TypeScript, React та правил доступності
- Автоматичне виправлення частини помилок (`--fix`)

---

## Конфігурація

Файл: [`eslint.config.mjs`](../eslint.config.mjs)

```js
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
```

---

## Базові правила

### `eslint-config-next/core-web-vitals`

Розширює базову конфігурацію Next.js і додає суворіші правила, що впливають на [Core Web Vitals](https://web.dev/vitals/) - метрики продуктивності Google.

| Правило | Що перевіряє |
|---|---|
| `@next/next/no-html-link-for-pages` | Забороняє `<a href>` для внутрішніх сторінок - потрібен `<Link>` |
| `@next/next/no-img-element` | Забороняє `<img>` - потрібен `<Image>` з оптимізацією |
| `@next/next/no-sync-scripts` | Забороняє синхронні `<script>` - блокують рендер |
| `react-hooks/rules-of-hooks` | Хуки можна викликати лише на верхньому рівні компонента |
| `react-hooks/exhaustive-deps` | Усі залежності `useEffect` / `useCallback` мають бути вказані |
| `jsx-a11y/alt-text` | `<img>`, `<Image>` повинні мати атрибут `alt` |
| `jsx-a11y/aria-props` | ARIA-атрибути мають бути валідними |

### `eslint-config-next/typescript`

Додає правила TypeScript поверх базової конфігурації.

| Правило | Що перевіряє |
|---|---|
| `@typescript-eslint/no-unused-vars` | Забороняє оголошені, але не використані змінні |
| `@typescript-eslint/no-explicit-any` | Забороняє тип `any` - потрібен конкретний тип |
| `@typescript-eslint/no-empty-object-type` | Забороняє порожні інтерфейси `{}` |

### `globalIgnores`

Виключає з перевірки згенеровані файли, які не потрібно аналізувати:

| Шлях | Причина |
|---|---|
| `.next/**` | Згенерований білд Next.js |
| `out/**` | Статичний експорт |
| `build/**` | Папка production-білду |
| `next-env.d.ts` | Автоматично згенеровані TypeScript-типи |

---

## Запуск лінтера

### Перевірка

```bash
npm run lint
```

Перевіряє всі файли проєкту та виводить список помилок і попереджень.

### Автовиправлення

```bash
npm run lint -- --fix
```

Автоматично виправляє помилки, які можна виправити без змін логіки (відступи, лапки, зайві крапки з комою тощо).

---

## Інтеграція з редактором

Для підсвічування помилок ESLint у реальному часі встановіть розширення:

- **VS Code** — [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
