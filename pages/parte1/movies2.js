import useSWR from 'swr'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Movies2(){

    const router = useRouter()
    const {movies} = router.query
    const {data, error} = useSWR(`http://www.omdbapi.com/?apikey=5c658291&s==${movies}`, fetcher)    

    if (error) return <div>falha na requisição...</div>

    if (!data) return <div>carregando...</div>

    return (

        <ul>
            

            {data.Search.map( (m) => 
               <div>
                    <Link href={`/parte1/detalhado/${m.imdbID}`}>
                      <a>{m.Title}</a>
                    </Link>
               </div>
            )}

        </ul>

    )    

}



async function fetcher(url) {

    const res = await fetch(url);

    const json = await res.json();

    return json;

}