import {Fragment, FunctionComponent, useEffect, useState} from 'react';
import { Manga } from '../models/manga.model';


type MangaCardProps={
     manga:Manga;
}



const MangaCard: FunctionComponent<MangaCardProps> = (props:MangaCardProps)=>{




    return(
        <div>

         <Fragment>

                     <div> {props.manga.title} sortie le {props.manga.year}  {props.manga.author&&<span>{props.manga.author.firstName+ props.manga.author.lastName}  </span>} </div>

             </Fragment>

        </div>
       

    );
};
export default MangaCard;