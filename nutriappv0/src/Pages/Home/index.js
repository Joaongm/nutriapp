import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import '../Home/Home.css';


export default function Home() {
    const [posts, setPosts] = useState([]); // usar uma lista vazia para a requisição da API 

    useEffect(() => {
        async function loadPosts() {
            const response = await api.get("rn-api/?api=posts");

            setPosts(response.data);
        }

        loadPosts();

    }, []);

    return (

        <div className="container">
            <div className="postagens">
                {posts.map((post) => {
                    return (
                        <div className="card">
                            <article key={post.id}>
                                <strong className="post-title">{post.titulo}</strong>
                                <img src={post.capa} alt={post.titulo} />
                                <Link className="text-link" to={`${post.id}`}>Ler mais</Link>
                            </article>
                        </div>
                    );
                })}
            </div>
        </div>
    )

}