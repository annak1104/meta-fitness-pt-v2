import { useState, useEffect } from "react";

export function useOfferLink() {
  const [offerLink, setOfferLink] = useState("#");

  useEffect(() => {
    const offerElement = document.getElementById("offer");
    if (offerElement && offerElement.href) {
      setOfferLink(offerElement.href);
    }
  }, []);

  return offerLink;
}
