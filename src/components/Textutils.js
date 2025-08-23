import '../Css/budget_tracker.css'

import textutils from '../thumbnails/textutils.png';


const Textutils = () => {
    return (
        <div className='budget-tracker-app'>
            <div className='budget-tracker-app-video-section'>

              <img src={textutils} alt="crud" className='budget_video' />
                <h1 className='budget-tracker-heading'>Textutils</h1>
                <p className='budget-tracker-description'>TextUtils is a text analyzing tool developed to help users manipulate and analyze their text efficiently. This web application provides features such as counting words and characters, as well as various text transformations. The user-friendly interface is built using HTML, CSS, Bootstrap, and React.js.<br></br><br></br>

The software provides real-time insights into your text, displaying word and character counts as you type. This feature is useful for content creators and students needing to meet specific length requirements.<br></br><br></br>
 </p>

                <div className='features-section'>
                <h3 className='features-headin'>Features</h3>
                  <li className='pages-heading'>Word Count:</li>
                <ul className='pages-lis'>

                    <li>Displays the number of words in the input text.</li>
                </ul>
                <li className='pages-heading'>Character Count: </li>
                <ul className='pages-lis'>

                    <li>Shows the total number of characters in the input text</li>
                </ul>
                <li className='pages-heading'>Uppercase:</li>
                <ul className='pages-lis'>

                    <li>Converts all text to uppercase.</li>
                </ul>
                <li className='pages-heading'>Lowercase:</li>
                <ul className='pages-lis'>

                    <li>Converts all text to lowercase.</li>
                </ul>
                <li className='pages-heading'>Remove Spaces:</li>
                <ul className='pages-lis'>

                    <li> Eliminates all blank spaces from the text.</li>
                </ul>
                <li className='pages-heading'>Copy Text:</li>
                <ul className='pages-lis'>

                    <li>Copies the processed text to the clipboard.</li>
                </ul>
                <li className='pages-heading'>Clear Text:</li>
                <ul className='pages-lis'>

                    <li> Clears the input and output areas.</li>
                </ul>
                <li className='pages-heading'>Undo/Redo: </li>
                <ul className='pages-lis'>

                    <li>Reverts and reapplies the last action.</li>
                </ul>
                <li className='pages-heading'>Start Listening</li>
                <ul className='pages-lis'>

                    <li> Activates speech-to-text functionality.</li>
                </ul>
                <li className='pages-heading'>Speak Text:</li>
                <ul className='pages-lis'>

                    <li>Uses text-to-speech to read the text aloud.</li>
                </ul>
                <li className='pages-heading'>Extract Links: </li>
                <ul className='pages-lis'>

                    <li> Scans text to find hyperlinks.</li>
                </ul>
                <li className='pages-heading'>Extract Numbers:</li>
                <ul className='pages-lis'>

                    <li> Isolates numerical values.</li>
                </ul>
                <li className='pages-heading'>Extract Letters:</li>
                <ul className='pages-lis'>

                    <li> Pulls out alphabetical characters.</li>
                </ul>
                <li className='pages-heading'>Extract Special Chars: </li>
                <ul className='pages-lis'>

                    <li>  Identifies and extracts special characters and symbols.</li>
                </ul>
                </div>

                <div className='technologes-section'>

                    <h3 className='tecnologies-heading'>Technologies Used</h3>

                    <li className='front-end-heading '>Fornt End:</li>
                    <li className='frontend-technologies react '>React.js</li>
                    <li className='frontend-technologies '> HTML</li>
                    <li className='frontend-technologies '>CSS</li>
                    <li className='frontend-technologies '>JavaScript</li>
                    <li className='frontend-technologies '>Bootstrap</li>





                        <li className='front-end-heading '>Github Link:</li>
                    <a href='https://github.com/zahoor-khan178/Textutils' className='github-link '>https://github.com/zahoor-khan178/Textutils</a>

                   
                    
                </div>


            </div>

        </div>
    );
}


export default Textutils;
