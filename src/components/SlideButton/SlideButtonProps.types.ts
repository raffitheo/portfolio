import { IconName } from '@components/IconExtension/IconExtensionProps.types';

type SlideButtonProps = {
    backgroundColor: string;
    href: string;
    icon: IconName;
    newTab?: boolean | undefined;
    text: string;
    textColor: string;
};

export default SlideButtonProps;
