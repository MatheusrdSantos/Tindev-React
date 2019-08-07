import React from 'react';
import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';
import "./Main.css";
export default function Main({ match }){
    return (
        <div className="main-container">
            <img src={logo} alt="Tindev"/>
            <ul>
                <li>
                    <img src="https://avatars3.githubusercontent.com/u/42742621?s=460&v=4"/>
                    <footer>
                        <strong>Matheus Santos</strong>
                        <p>Eu mesmo!</p>
                    </footer>
                    <div className="buttons-container">
                        <button type="button">
                            <img src={like} alt="Like"/>
                        </button>
                        <button type="button">
                            <img src={dislike} alt="Dislike"/>
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars3.githubusercontent.com/u/42742621?s=460&v=4"/>
                    <footer>
                        <strong>Matheus Santos</strong>
                        <p>Eu mesmo!</p>
                    </footer>
                    <div className="buttons-container">
                        <button type="button">
                            <img src={like} alt="Like"/>
                        </button>
                        <button type="button">
                            <img src={dislike} alt="Dislike"/>
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars3.githubusercontent.com/u/42742621?s=460&v=4"/>
                    <footer>
                        <strong>Matheus Santos</strong>
                        <p>Eu mesmo!</p>
                    </footer>
                    <div className="buttons-container">
                        <button type="button">
                            <img src={like} alt="Like"/>
                        </button>
                        <button type="button">
                            <img src={dislike} alt="Dislike"/>
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars3.githubusercontent.com/u/42742621?s=460&v=4"/>
                    <footer>
                        <strong>Matheus Santos</strong>
                        <p>Eu mesmo!</p>
                    </footer>
                    <div className="buttons-container">
                        <button type="button">
                            <img src={like} alt="Like"/>
                        </button>
                        <button type="button">
                            <img src={dislike} alt="Dislike"/>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    );
}