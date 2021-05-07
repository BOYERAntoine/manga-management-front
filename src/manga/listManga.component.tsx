import {Fragment, FunctionComponent, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Author } from '../models/authors.model';
import { Manga } from '../models/manga.model';
import EditManga from './editManga.component';
import MangaCard from './mangaCard.component'


type ListMangaProps={
    // mangas:Manga[];
}



const ListMangaComponent: FunctionComponent<ListMangaProps> = (props:ListMangaProps)=>{

    async function getMangasFromServer() {

        const callMangas=   await fetch("http://localhost:3000/mangas");
        const mangaFromServer= await callMangas.json();
        if(callMangas.ok){
            setMangas(mangaFromServer);
        }
    }


    const [mangas, setMangas] = useState<Manga[]>([]);



    useEffect(()=>{
     
        getMangasFromServer();
        return()=>{
         
        };
      },[])

    return(
        <Fragment>

            <h1>List Manga</h1>
        {mangas&&mangas.length>0?<Fragment>
            {mangas.map((manga)=>{
                return(
                   <MangaCard manga={manga}></MangaCard>
                )
            })}
            </Fragment>:<div>pas de Manga a afficher </div>}

            <Link to="/mangas/create">
                 <button>
                  Ajout manga
                 </button>
            </Link>
 
            

        </Fragment>
       

    );
};
export default ListMangaComponent;