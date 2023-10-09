import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './textroll.css';

interface Properties {
    greeting: string
}

const TextRoll = ( { greeting }: Properties ) => {

    return (
        <div className={ 'text-roll-container' }>
            <TransitionGroup component={ 'span' }>
                <CSSTransition classNames={ 'ctr' } timeout={ { enter: 300, exit: 300 } } key={ Math.random() } unmountOnExit>
                    <span className='roll-block'>{ greeting }</span>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}

export default TextRoll;