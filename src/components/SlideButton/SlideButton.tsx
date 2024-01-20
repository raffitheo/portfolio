import React from "react"

import SlideButtonProps from "./SlideButtonProps.types"

import "./SlideButton.less"
import IconExtension from "@components/IconExtension/IconExtension"

const SlideButton: React.FC<SlideButtonProps> = (props: SlideButtonProps) => {
    return (
        <a
            className="slidebutton-wrapper"
            href={props.href}
            style={{ backgroundColor: props.backgroundColor, color: props.textColor }}
            target={props.newTab ? "_blank" : "_self"}
        >
            <span>{props.text}</span>

            <IconExtension name={props.icon} />
        </a>
    )
}

export default SlideButton
