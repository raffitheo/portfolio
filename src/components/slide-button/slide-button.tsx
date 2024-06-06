import IconExtension, { IconName } from '@components/icon-extension';

import './slide-button.sass';

export interface SlideButtonProps {
    backgroundColor: string;
    href: string;
    icon: IconName;
    newTab?: boolean;
    text: string;
    textColor: string;
}

const SlideButton = (props: SlideButtonProps) => {
    return (
        <a
            className="slidebutton-wrapper"
            href={props.href}
            style={{
                backgroundColor: props.backgroundColor,
                color: props.textColor,
            }}
            target={props.newTab ? '_blank' : '_self'}
        >
            <span>{props.text}</span>

            <IconExtension name={props.icon} />
        </a>
    );
};

export default SlideButton;
