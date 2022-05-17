import React from "react";

export default function Character({
  name,
  id,
  episodes,
  origin,
  image,
  species,
}) {
  return (
    <div>
      <div>
        <h1>{name}</h1>
      </div>
      <div>
        <img src={image} alt="" value={name} />
      </div>
      <div>
        <h3>{origin}</h3>
      </div>
      <div>
        <h5>{species}</h5>
      </div>
    </div>
  );
}
