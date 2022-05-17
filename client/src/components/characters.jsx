import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchCharacters from "../redux/actions";
import Character from "./character";
import style from "../components/characters.module.css"
export default function Characters() {
  let characters = useSelector((state) => state.characters);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  },
  //eslint-disable-next-line
   []);

  return(
  <div className={style.order}>{characters.map(e=>{
    return(<Character 
    key={e.id}
    id={e.id}
    name={e.name}
    image={e.image}
    origin={e.origin}
    species={e.species}
    />)
  })

  }
  </div>
  );}
