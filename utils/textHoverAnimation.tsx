"use client";
import React from "react";
import randomChar from "./randomChar";

export default function textHoverAnimation(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {


    const targetElement = event.target as HTMLElement;
    const ANIMATION_SPEED = 22;

    if(targetElement.classList.contains('hoverAnimating')){
        return
    }

    if(!targetElement.classList.contains('hoverAnimating')){
        targetElement.classList.add('hoverAnimating')
    }

    if (!(targetElement instanceof HTMLElement)) {
        console.log('Não é um elemento html')
        return
    }

    let originalText = targetElement.innerText

    for (let j = 0; j < originalText.length - 1; j++) {
        setTimeout(() => {
            targetElement.innerText = targetElement.innerText.substring(0, j) + randomChar() + targetElement.innerText.substring(j + 1)
        }, j * ANIMATION_SPEED)

    }

    for (let k = 0; k < originalText.length; k++) {
        setTimeout(() => {
            
            targetElement.innerText = targetElement.innerText.substring(0, k) + originalText.charAt(k) + targetElement.innerText.substring(k + 1)

            if(k == originalText.length - 1){
                targetElement.classList.remove('hoverAnimating')
            }

        }, k * (2 * ANIMATION_SPEED))
    }

}


