import './Post.css'
import PostFooter from './PostFooter'
import PostHeader from './PostHeader'

export default function Post({ listaDePosts }){
  return (
    <div className="Post">
        {listaDePosts.map((post) =>(
            <>
                  <PostHeader post={post} />

                  <p>{post.descricaoDoPost}</p>
                  <img src={post.fotoDoPost} alt="foto do post" className="FotoDoPost" />
            </>
        ))}


      {/* <PostFooter curtidoPor={curtidoPor} numeroDeCurtidas={numeroDeCurtidas} /> */}
    </div>
  )
}
