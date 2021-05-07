import React, { FunctionComponent, useEffect, useState } from 'react';
// import Select from 'react-select/src/Select';
import { Author } from '../models/authors.model';
import { Manga } from '../models/manga.model';

import { default as Select } from "react-select";
import { Link, Redirect, useHistory } from 'react-router-dom';
type EditMangaProps = {
    manga?:Manga;

}
const EditManga: FunctionComponent<EditMangaProps> = (props:EditMangaProps)=>{
    const [errors, setErrors] = useState<String[]>([]);
    const [authorOptions, setAuthorOptions] = useState<any>();
    const [manga, setManga] = useState<Manga>({});
    const [authors, setAuthors] = useState<Author[]>([]);
    const [redirect, setRedirect] = useState<Boolean>(false);




 function createManga() {

            let data = manga;
                
            
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': getAuthorization(),
                },
                body: JSON.stringify(data)
            }
            fetch(`http://localhost:3000/mangas/createManga`, requestOptions)
   
        
    }
    async function getAuthorFromServer() {

        const callAuthors=   await fetch("http://localhost:3000/authors");
        const authorsFromServer= await callAuthors.json();
        if(callAuthors.ok){
            setAuthors(authorsFromServer);
        }
    }
    


    function sendManga():void{

           let newError:[String] = [""];

            if( !manga.title)
                newError.push("Un manga doit avoir un titre");
        
          if(!manga.year)
             newError.push("Un manga doit avoir une date de cration");
          
          if(!manga.cover)
             newError.push("Un manga doit avoir une couverture ");

            
             console.log("lenth",errors.length)
             if(newError[0].length>0){
                console.log("errors",errors);
             }else{
                console.log("envoie de la requète de création de manga")
                console.log(manga);
                createManga();
             }
             setErrors(newError)

        
    
        
    }

    function   handleAuthorChange(e: any) {
        let newManga=manga;
        newManga.author=e.value;
        setManga(newManga);

      }
      function   handleTitleChange(title: string) {
        setManga({...manga,title});
      }
      function   handleYearChange(year: string) {
        setManga({...manga,year});
      }
      function   handleCoverChange(cover: string) {
        setManga({...manga,cover});
      }
function fillAuthorOptions():void{
    let authorOptions=[{}];
    let tempAuthorOption={};
    authors.forEach(auhtor => {
        tempAuthorOption={value:auhtor, label:auhtor.firstName + auhtor.lastName,}
        authorOptions.push(tempAuthorOption);
    });
    setAuthorOptions(authorOptions);
}
      useEffect(()=>{
        getAuthorFromServer();
        return()=>{
         
        };
      },[])
      useEffect(()=>{
        fillAuthorOptions();
        return()=>{
         
        };
      },[authors])

    return(
    <div>
       {props.manga?<h1>Edition de manga</h1>:<h1>Création de manga</h1>}

         <Link to="/mangas">
                 <button>
                 Close
                 </button>
            </Link>
        {errors.map((error)=>{
            return(
            <div>{error}</div>
            )
            
        })
        }

        <div>
            <label>Titre</label>
            <input type="text" onChange={(e)=> handleTitleChange (e.target.value)}/>

            

        </div>
        <div>
            <label>Date de publication </label>
            <input type="date" onChange={(e)=> handleYearChange (e.target.value)}/>

            

        </div>
        <div>
            <label>Couverture </label>
            <input type="text" onChange={(e)=> handleCoverChange (e.target.value)}/>


        </div>
        <div style={{width:'30%', margin:'auto'}}>
            <label>Author </label>

            <Select
            //   value={manga.author}

             onChange={(e)=>handleAuthorChange(e )}
             options={authorOptions}
               />

        </div>
        <div>
            <button onClick={sendManga}>Create</button>
        </div>
     

    </div>

    );
    };
    export default EditManga;