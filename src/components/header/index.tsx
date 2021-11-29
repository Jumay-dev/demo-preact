import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';
import {observer} from "mobx-preact";

const Header: FunctionalComponent = () => {
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
};

export default Header;
