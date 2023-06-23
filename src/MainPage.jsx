import React from 'react';
import H3 from './H3.jsx';
import Input from './Input.jsx';
import H2 from './H2.jsx';
import H1 from './H1.jsx';
import P from './p.jsx';


function MainPage(props) {
    const fixedMsg = 'Ansu, Please Answer My Question';

    const [petition, updatePetition] = React.useState('');

    const [magicCode, updateMagicCode] = React.useState(false);

    const [answer, updateAnswer] = React.useState('');

    const [popUp, showPopUp] = React.useState(false);

    const [inputChange, updateInputChange] = React.useState('');

    const onPetitionChange = event => {
        const newPetition = event.target.value;

        const newLength = newPetition.length;
        const oldLength = petition.length;

        if (newPetition.includes('*')) {
            updateMagicCode(!magicCode);
            updatePetition(fixedMsg.substring(0, newLength));
        } else if (magicCode) {
            updatePetition(fixedMsg.substring(0, newLength));

            if (newLength < oldLength) {
                updateAnswer(answer.substring(0, answer.length - 1));
            } else {
                updateAnswer(answer + newPetition.substring(newPetition.length - 1));
            }
        } else {
            updatePetition(newPetition);
        }
    };

    const PopUp = event => {
        updateInputChange(event.target.value);

        if (event.target.value.includes('?')) {
            showPopUp(true);
        }
    };

    const removePopUp = props => {
        showPopUp(false);
        updatePetition('');
        updateInputChange('');
        updateAnswer('');
    };

    return (
        <>
            <div className='bg-black  h-full w-full'>
                <div className='w-96 flex flex-col  items-start  mx-auto'>
                    <div className='mt-28 space-y-8'>
                        <H1>ASK ANSU</H1>
                        <P>Do you need to know anything? Are you looking for answers? Ansu offers you a space to ask anything you want. However, before each question you must write a petition. If the answer is not what you expected, at least you make catharsis and ask again.</P>
                        <H2>Type Your Petition</H2>
                        <Input value={petition} onChange={onPetitionChange} placeholder='You Must Enter The Petition'></Input>
                        <H2>Type Your Question</H2>
                        <Input value={inputChange} onChange={PopUp} placeholder='What Can I Answer For You?'></Input>
                    </div>
                    <div className='mt-35 space-y-16 mb-16'>
                        <H2>How to use Ansu</H2>
                        <H2>The world's best virtual tarot</H2>
                        <P>Ask Ansu is a virtual tarot that that can answer all kinds of questions. Questions about the present, the past, and your future. He can be a bit tempermental, requiring that each question be presented with a petition of "Ansu, please answer the following question" or "Ansu, please answer" before each question is asked. Failure to correctly petition will not bring results.</P>
                        <H2>The history of Ansu</H2>
                        <P>Ansu was born in 1 BC. As he began to age, he realized he had an ability to read the fortunes of others, and quickly became a star in his small hometown. To expand his operaion, he knew he had to join the digital age. Through the use of modern technology, he is able to answer thousands of questions every day from people all over the world.</P>

                        <P>In early 2022, the demand for Ansu's services became so high, he brougt on 10 additional team members from around the country to increase answer throughput. With a large team, and his mind in overdrive, he is now able to answer upwards of 13,240 questions per day (Average over the past 30 days), with pinpoint accuracy. Though the team members are new, they are just as tempermental. Requiring a correct petition each and every time.</P>
                    </div>
                    <H2> Any Question? </H2>
                    <h1 className='text-white text-base mt-6 mb-32 font-mono'> Follow @ajaypateliya74 on Instagram. </h1>
                </div>
                {popUp &&
                    <div className="fixed flex justify-center items-center top-0 left-0 h-screen w-screen">
                        <div className="bg-black opacity-90 flex flex-col  p-8 text-white w-2/5 h-40">
                            <button onClick={removePopUp} className="flex justify-end underline underline-offset-4">new Question</button>
                            <h1 className="text-xl font-semibold border-b mx-12 mt-6  decoration-white flex justify-center">Ansu's Answer</h1>
                            <h1 className="flex justify-center mt-3 text-xl font-semibold">'{answer || 'You are not honest so I am not going to answer you.'}'</h1>
                        </div>
                    </div>}
            </div>
        </>
    )
}

export default MainPage;
