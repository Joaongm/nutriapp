import { useEffect, useState } from 'react';
import {useParams, useHistory} from 'react-router-dom';
import api from '../../services/api';
// a implementar
export default function Post() {
    const {id} = useParams();
    const history = useHistory();
    //navegação interativa

    const [post, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadPosts() {
            const response = await api.get(`rn-api/?api=posts/${id}`);

            if (response.data.lenght === 0){

                history.replace('/')
                return;
            }

            setPosts(response.data);
            setLoading(false);


        }
        loadPosts();
    }, [history, id]);


};


