import React from "react"
import niki from "../../images/niki.jpg"
import "bootstrap/dist/css/bootstrap.min.css"
export const Header = () => {
    return (
        <header>
            <div class="dropdown">
                <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    S
                </button>
                <ul class="dropdown-menu">
                    <li><button class="dropdown-item" type="button">Dropdown item</button></li>
                </ul>
            </div>
            <a href="#">
                <div className="logo">
                    <img src={niki} alt="logo" width={150} />
                </div>
            </a>
            <ul>
                <li>
                    <a href=""> Inicio</a>
                </li>
                <li>
                    <a href="">Productos</a>
                </li>
            </ul>
            <div className="cart">
                <box-icon name="cart"></box-icon>
                <span className="item__total">0</span>
            </div>
        </header>

    )
}
