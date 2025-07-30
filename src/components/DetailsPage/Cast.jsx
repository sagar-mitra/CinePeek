import React, { useState } from "react";
import { DEFAULT_PP, IMAGE_URL } from "../../utils/constants";

const Cast = ({ castInfo, visible }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mt-5 ">
      {castInfo.slice(0, visible).map((cast) => {
        const { id, name, character, profile_path } = cast;
        return (
          <div key={id} className="flex items-center gap-3">
            {/* Cast Image  */}
            <img
              className=" w-12 h-12 lg:w-16 lg:h-16 object-cover object-center rounded-full"
              src={profile_path ? IMAGE_URL + profile_path : DEFAULT_PP}
              alt={name}
            />
            {/* Cast Name  */}
            <div className="text-sm md:text-base">
              <p>{name}</p>
              <span className="text-[var(--text-muted)]">{character}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cast;
