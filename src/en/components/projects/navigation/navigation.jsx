import React from 'react';
import ProjectReact from '../projectReact/projectReact';
import ProjectJs from '../projectJs/projectJs';
import ProjectHtmlCss from '../projectHtmlCss/projectHtmlCss';
import ProjectPhpMySql from '../projectPhpMySql/projectPhpMySql';

const Navigation = ({change}) => {
    return (
        <nav>
            <ul>
                <li>
                    <button onClick={e => { change(<ProjectReact />) }}><i className='fa-brands fa-react'></i> React</button>
                </li>
                <li>
                    <button onClick={() => { change(<ProjectJs />) }}><i className='fa-brands fa-js'></i> JavaScript</button>
                </li>
                <li>
                    <button onClick={() => { change(<ProjectHtmlCss />) }}><i className='fa-brands fa-html5'></i> HTML5 / <i className="fa-brands fa-css3-alt"></i> CSS3</button>
                </li>
                <li>
                    <button onClick={() => { change(<ProjectPhpMySql />) }}><i className='fa-brands fa-php'></i> PHP / <i className="fa-solid fa-database"></i> MySQL</button>
                </li>
            </ul>
        </nav>
    )
}

export default React.memo(Navigation);