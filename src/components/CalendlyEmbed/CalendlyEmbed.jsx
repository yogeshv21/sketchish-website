'use client'
import { InlineWidget } from "react-calendly";
import { useEffect, useState } from "react";

export default function CalendlyEmbed({text}) {
    useEffect(() => {
        const head = document.querySelector("head");
        const script = document.createElement("script");
        script.setAttribute(
          "src",
          "https://assets.calendly.com/assets/external/widget.js"
        );
        head.appendChild(script);
      }, []);
    
      const openCalendlyPopup = () => {
        // Use Calendly's 'openPopupWidget' function to open the popup
        if (window.Calendly) {
            window.Calendly.initPopupWidget({url  :'https://calendly.com/sketchish/15min'});
        }
      };
    
      return (
        <div style={{ textAlign: "center" }}>
          <button onClick={openCalendlyPopup}>{text}</button>
        </div>
      );
}
