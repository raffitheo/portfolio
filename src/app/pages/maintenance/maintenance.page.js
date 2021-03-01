import React from 'react';

import { Facebook, GitHub, Instagram, Linkedin, Twitter } from 'react-feather';

import './maintenance.page.scss';

export default class MaintenancePage extends React.Component {
    render() {
        return (
            <>
                <div class="left panel">
                    <span className="dark">0.0</span>

                    <div className="content">
                        <h1>
                            Sito in
                            <br />
                            <span className="outlined">Manutenzione</span>
                        </h1>

                        <div className="horizontal-line"></div>
                    </div>
                </div>
                <div class="panel right">
                    <div className="content">
                        <p>
                            Il sito è attualmente in fase di manutenzione per via di un re-design completo.
                            <br />
                            Al momento non mi è possibile dare una data specifica per quando il tutto verrà completato.
                            <br />
                            Mi scuso per l'eventuale disagio.
                        </p>

                        <div className="contacts">
                            <span>I miei contatti:</span>

                            <ul>
                                <li><a href="https://www.facebook.com/raffaele.valenti.14/" id="facebook" target="_blank" rel="noopener noreferrer"><Facebook /></a></li>
                                <li><a href="https://github.com/raffitheo" id="github" target="_blank" rel="noopener noreferrer"><GitHub /></a></li>
                                <li><a href="https://www.instagram.com/raffitheo/" id="instagram" target="_blank" rel="noopener noreferrer"><Instagram /></a></li>
                                <li><a href="https://www.linkedin.com/in/raffaele-valenti-966010171/" id="linkedin" target="_blank" rel="noopener noreferrer"><Linkedin /></a></li>
                                <li><a href="https://twitter.com/raffitheo" id="twitter" target="_blank" rel="noopener noreferrer"><Twitter /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}