import { FunctionalComponent, h } from 'preact';
import style from './style.scss';
import { observer } from "mobx-preact";
import { useEffect, useState } from "preact/hooks";

export const Header: FunctionalComponent = observer(() => {
    return (
        <header class={style.header}>
            <h1>Preact App</h1>
            <nav>
                <div class={style["menu-item"]}>Доска</div>
                <div class={`${style["menu-item"]} ${style["active"]}`}>Задания</div>
                <div class={style["menu-item"]}>Сервисы</div>
                <div class={style["menu-item"]}>Мои классы</div>
                <div class={style["menu-item"]}>Помощь</div>
                <div class={style["menu-item"]}>Маргарита</div>
            </nav>
        </header>
    );
});
