import React from "react";// adjust the path if needed

function GiftHero() {
  return (
    <section className="relative h-[400px] overflow-hidden">
      <div className="relative h-full">
        <img
          src="/images/gift.png"
          alt="Child holding a glowing magical book"
          className="w-full h-full object-cover object-top"
        />
      </div>
    </section>
  );
}

export default GiftHero;
