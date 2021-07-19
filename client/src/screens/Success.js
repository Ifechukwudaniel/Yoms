import React from "react";

export default function Success() {
  return (
    <div class="centercontent">
      <div class="topdiv">
        <img src="images/image.png" loading="lazy" alt="" class="centerimage" />
      </div>
      <div class="bottomdiv">
        <div class="imageactiondiv">
          <h1>Your Login Was success </h1>
        </div>
        <div class="nextdiv">
          <a href="#" class="actionbutton w-button">
            Next
          </a>
        </div>
      </div>
    </div>
  );
}
