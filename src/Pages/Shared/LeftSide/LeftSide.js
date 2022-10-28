import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle} from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const LeftSide = () => {
    const [courses, setCourses] = useState([]);
    const {providerLogin, githubLogin} = useContext(AuthContext);

useEffect( () =>{
    fetch('https://best-coding-server.vercel.app/news-courses')
    .then(res => res.json())
    .then(data => setCourses(data))
}, [])

const googleProvider = new GoogleAuthProvider();
const handleGoogleSignIn = () =>{
    providerLogin(googleProvider)
    .then(result => {
        const user = result.user;
        console.log(user);
    })
    .catch(error => console.error(error))
}

const githubProvider = new GithubAuthProvider();
const handleGithubSignIn = ()=>{
    githubLogin(githubProvider)
    .then(result =>{
        const user = result.user;
        console.log(user);
    })
    .catch(error => console.error(error))
}



    return (
        <div>
           <h5>Programming Course: {courses.length}</h5> 
           <div>
                {
                    courses.map(course => <p key={course.id}>
                        <Link to={`/course/${course.id}`}>{course.name}</Link>
                    </p>)
                }
            </div>
            <div>
            <Button onClick={handleGoogleSignIn} className='d-flex align-items-center mb-2' variant="outline-secondary"><FaGoogle></FaGoogle><span className='ms-2'>Google</span></Button>
            <Button onClick={handleGithubSignIn} className='d-flex align-items-center' variant="outline-dark"><FaGithub></FaGithub><span className='ms-2'>Github</span></Button>

            </div>

        </div>
    );
};

export default LeftSide;