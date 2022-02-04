import useSWR from 'swr'

export default function Movies2(){

    const {data, error} = useSWR(`http://www.omdbapi.com/?apikey=5c658291&s=bagdad`, fetcher)    

    if (error) return <div>falha na requisição...</div>

    if (!data) return <div>carregando...</div>

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
                </tr>
            
            </thead>
            <tbody>

                {data.Search.map((m) =>
                <tr>
                    <td> <a href="#" onclick="orderTitle()"> {m.Title} </a></td>
                    <td>{m.Year}</td>
                </tr>
                )}

            </tbody>
        </table>

        </div>

    )    

}



async function fetcher(url) {

    const res = await fetch(url);

    const json = await res.json();

    return json;

}