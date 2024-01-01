"use client";
import React from "react";
import randomChar from "./randomChar";

export default function textHoverAnimation(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {

    const targetElement = event.target as HTMLElement;

    if (!(targetElement instanceof HTMLElement)) {
        console.log('Não é um elemento html')
        return
    }

    let originalText = targetElement.innerText

    for (let j = 0; j < originalText.length - 1; j++) {
        setTimeout(() => {
            targetElement.innerText = targetElement.innerText.substring(0, j) + randomChar() + targetElement.innerText.substring(j + 1)
        }, j * 30)

    }

    for (let k = 0; k < originalText.length - 1; k++) {
        setTimeout(() => {
            targetElement.innerText = targetElement.innerText.substring(0, k) + originalText.charAt(k) + targetElement.innerText.substring(k + 1)
        }, k * 60)
    }

}


