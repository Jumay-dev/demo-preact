# demo-project

## Почему не React?

- Хедер это микрофронтенд, который подключается в другие приложения, в том числе на страницы с Реактом. Реакт работает нестабильно в случаях, если на одной странице есть несколько его инстансов.

## Почему Preact?

- Preact это React-подобный фреймворк
- Все практики и реализации можно проектировать в новые приложения, практически не переизобретая

## Основные фичи и различия

https://preactjs.com/guide/v10/differences-to-react/

## Развертывание проекта

- `npx preact-cli`: Установка утилиты для преакта

- `npx preact-cli create typescript demo-project`: Cоздаст проект под темплейт typescript

- `npm install mobx-preact --save`: MobX под преакт

- `npm i --save-dev node-sass sass-loader@10` WebPack обвес для SCSS

## Декларация типов для MobX и Sass обвеса

```typescript
declare module '*.css' {
  const mapping: Record<string, string>
  export default mapping
}
declare module 'mobx-preact' {
  import { ComponentConstructor, FunctionalComponent } from 'preact'
  type FunctionalComponent<P = any> = ComponentConstructor<P>
  export function observer<T extends Component>(target: T): T
}

declare module '*.scss' {
  const content: Record<string, string>
  export default content
}
```

## Модульный подход в стилизации

- Стили

```scss
.menu-item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;

  &.active {
    background: #eeeff0;
    font-weight: 600;
  }

  &:hover {
    background: #eeeff0;
  }
}
```

- Подключение

```typescript
import style from './style.scss'

export const Header: FunctionalComponent = () => {
  return (
    <header class={style.header}>
      <h1>Preact App</h1>
      <nav>
        <div class={style['menu-item']}>Доска</div>
        <div class={`${style['menu-item']} ${style['active']}`}>Задания</div>
        <div class={style['menu-item']}>Сервисы</div>
      </nav>
    </header>
  )
}
```

## CLI Commands

- `npm install`: Installs dependencies

- `npm run dev`: Run a development, HMR server

- `npm run serve`: Run a production-like server

- `npm run build`: Production-ready build

- `npm run lint`: Pass TypeScript files using ESLint

- `npm run test`: Run Jest and Enzyme with
  [`enzyme-adapter-preact-pure`](https://github.com/preactjs/enzyme-adapter-preact-pure) for
  your tests

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).
