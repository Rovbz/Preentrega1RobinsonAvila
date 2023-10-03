import React from "react";
import nikeuno from "../../images/nikeuno.jpg"

export const ProductosLista = () => {
    return (
        <>
            <h1 className="tittle">PRODUCTOS</h1>
            <div className="productos">
                <div className="producto">
                    <a href="#">
                        <div className="producto__img">
                            <img src={nikeuno} alt="" />
                        </div>
                    </a>
                    <div className="producto__footer">
                        <h1>Tittle</h1>
                        <p>Categoria</p>
                        <p className="price">$350</p>
                    </div>
                    <div className="buttom">
                        <button className="btn">
                            Anadir al carrito
                        </button>
                        <div>
                            <a href="#" className="btn">Vista</a>
                        </div>
                    </div>
                </div>
                <div className="producto">
                    <a href="#">
                        <div className="producto__img">
                            <img src={nikeuno} alt="" />
                        </div>
                    </a>
                    <div className="producto__footer">
                        <h1>Tittle</h1>
                        <p>Categoria</p>
                        <p className="price">$350</p>
                    </div>
                    <div className="buttom">
                        <button className="btn">
                            Anadir al carrito
                        </button>
                        <div>
                            <a href="#" className="btn">Vista</a>
                        </div>
                    </div>
                </div>
                <div className="producto">
                    <a href="#">
                        <div className="producto__img">
                            <img src={nikeuno} alt="" />
                        </div>
                    </a>
                    <div className="producto__footer">
                        <h1>Tittle</h1>
                        <p>Categoria</p>
                        <p className="price">$350</p>
                    </div>
                    <div className="buttom">
                        <button className="btn">
                            Anadir al carrito
                        </button>
                        <div>
                            <a href="#" className="btn">Vista</a>
                        </div>
                    </div>
                </div>
                <div className="producto">
                    <a href="#">
                        <div className="producto__img">
                            <img src={nikeuno} alt="" />
                        </div>
                    </a>
                    <div className="producto__footer">
                        <h1>Tittle</h1>
                        <p>Categoria</p>
                        <p className="price">$350</p>
                    </div>
                    <div className="buttom">
                        <button className="btn">
                            Anadir al carrito
                        </button>
                        <div>
                            <a href="#" className="btn">Vista</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}