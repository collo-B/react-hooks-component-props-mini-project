import Article from "./Article"
function ArticleList({posts}){
    const arts = posts.map((art)=>
         <Article key={art.id}  title={art.title} data={art.data} preview={art.preview} minutes={art.minutes} />
        )
    return(
        <main>
            {arts}
        </main>
    )
}
export default ArticleList