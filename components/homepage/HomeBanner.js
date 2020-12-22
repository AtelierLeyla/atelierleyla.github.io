import React from "react";
import Link from "next/link";

export default function HomeBanner() {
  return (
    <div className="slogan-container custom-container p-5">
      <p
        className="font-size-display2 my-3 py-5 text-center font-family-secondary
        text-center mx-auto"
        style={{ maxWidth: "53rem" }}
      >
        Our mission is to create timeless garments that are both ethically and sustainably made
        using recycled and organic fabrics.
      </p>
    </div>
  );
}
