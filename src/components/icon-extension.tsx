import { SVGAttributes } from 'react';
import * as icons from 'react-feather';

export type IconName = keyof typeof icons;

export interface IconExtensionProps extends SVGAttributes<SVGElement> {
    name: IconName;
    color?: string;
    size?: number | string;
}

const IconExtension = (props: IconExtensionProps) => {
    const IconComponent = icons[props.name];

    return <IconComponent {...props} />;
};

export default IconExtension;
