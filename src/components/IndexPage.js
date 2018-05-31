import React from 'react';
import logo from '../images/arrow.svg'

function IndexPage() {
    return (
        <div className="IndexPage" >
            <div className="welcomeAnimation">
                <h1>TOKYO<br />( 東京 )<br /></h1>
            </div>
            <div className="welcomeMessage">
                <h2>"Tokyo was an origami city folded over and over <br /> until something was made of virtually nothing."</h2>
            </div>

            <div className="scroll">
                <button id="scrollButton"><img src={logo} alt={"logo"} /></button>
            </div>
        </div>


    )

}

export default IndexPage;