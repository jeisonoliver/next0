import useSWR from 'swr'
import { useRouter } from 'next/router'

export default function moviesDetalhado(){

    const router = useRouter()
    const {movieID} = router.query
    const {data, error} = useSWR(`http://www.omdbapi.com/?apikey=8ba47b1d&i=${movieID}`, fetcher)    

    if (error) return <div>falha na requisição...</div>

    if (!data) return <div>carregando...</div>

    return (

        <div>
        
            <ul>
                <h2>{data.Title}</h2>
                <img width={200} src={data.Poster}></img>    
                <li>Ano: {data.Year}</li>        
                <li>Classificado: {data.Rated}</li>        
                <li>Liberado: {data.Released}</li>            
                <li>Tempo de execução: {data.Runtime}</li>        
                <li>Gênero: {data.Genre}</li>        
                <li>Diretor: {data.Director}</li>            
                <li>escritor: {data.Writer}</li>        
                <li>Atores: {data.Actors}</li>        
                <li>Enredo: {data.Plot}</li>        
                <li>Língua: {data.Language}</li>            
                <li>País: {data.Country}</li>        
                <li>Prêmios: {data.Awards}</li>    
            </ul>
        </div>
    )    
}

async function fetcher(url) {

    const res = await fetch(url);

    const json = await res.json();

    return json;

}