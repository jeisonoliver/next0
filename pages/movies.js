import Image from 'next/image'
import React , {useState} from 'react';


export default function Movies({data}){
    
  

    const [busca, setBusca] = useState ('');

    return (
        
        <div>
        
        <style jsx>{`
            
                div{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                table, th, td{
                    border: 1px solid black;
                }
                th, td{
                    text-align: center;
                }
            
            
            `}</style>

            <table>
                <thead>
                
                    <tr>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Poster</th>
                    </tr>
                
                </thead>
                <tbody>

                    {data.Search.map((m) =>
                    <tr>
                        <td>{m.Title}</td>
                        <td>{m.Year}</td>
                    </tr>
                    )}

                </tbody>
            </table>

        </div>

    )

}


export async function getServerSideProps(context){

    const res = await fetch(`http://www.omdbapi.com/?apikey=5c658291&s=bagdad`)
  
    const data = await res.json()
  
    return {
  
        props: {
  
            data
  
        }
  
    }
  
  }