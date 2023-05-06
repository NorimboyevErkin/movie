"use client";
function MovieId({ params, searchParams }:any) {
    console.log(params , searchParams , "searchParams");
    return <div style={{height:"200px" , color:"#fff"}}>
        <h1>ID: {params.id}</h1>
        <h1>ID: {params.id}</h1>
        <h1>ID: {params.id}</h1>
        <h1>ID: {params.id}</h1>
        <h1>ID: {params.id}</h1>
        <h1>ID: {params.id}</h1>
        <h1>ID: {params.id}</h1>
        <h1>ID: {params.id}</h1>
    </div>
}
export default MovieId;