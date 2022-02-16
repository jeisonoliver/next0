import useSWR from 'swr'

import { useRouter } from 'next/router'


export default function TheMovies({data}){

   
    const router = useRouter()

    if (router.isFallback) {
      return <div>Carregando...</div>
    }


    const title = data.data.title
    const year = data.data.year
    const type = data.data.type
    const image = data.data.poster.jpg.image_url
    
    return (

        <div className="Principal">
            <style jsx>
            {`
                .Principal{
                    display: flex;
                    flex-direction: column;
                    margin: auto;
                    padding: 10px;
                    align-items: center;
                    max-width: 500px;
                }
                ul {
                    list-style: none;
                }
                ul li {
                    margin-bottom: 5px;
                }
            `}
            </style>

            <ul>
                <li> Título: {title}</li>
                <li> Ano: {year} </li>
                <li> Tipo: {score}</li>
            </ul>

            <div>
                <img src={image} />
            </div>


        </div>     

    )

}



export async function getStaticPaths(){

    return {

        paths:[

            {params: {id: "tt0095801"}},

            {params: {id: "tt0033152"}},

            {params: {id: "tt0015400"}},

            {params: {id: "tt0041149"}},

            {params: {id: "tt0044388"}},

            {params: {id: "tt0098746"}},

            {params: {id: "tt0046322"}},

            {params: {id: "tt0046497"}},

            {params: {id: "tt0044389"}}

        ],

        fallback: true 

    }

}



export async function getStaticProps({ params }) {

    const res = await fetch(`https://www.omdbapi.com/?apikey=f1cbc41e&i=${params.id}`)

    const data = await res.json();

    return {

      props: {

        data

      }

    }

}

