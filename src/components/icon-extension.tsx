import React, { SVGAttributes } from 'react';
import * as icons from 'react-feather';

export type IconName = keyof typeof icons;

export interface IconExtensionProps extends SVGAttributes<SVGElement> {
    name: IconName;
    color?: string;
    size?: number | string;
}

const IconExtension: React.FC<IconExtensionProps> = (
    componentProps: IconExtensionProps,
) => {
    const IconComponent = icons[componentProps.name];

    return <IconComponent {...componentProps} />;
};

export default IconExtension;
