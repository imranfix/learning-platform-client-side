import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Blog from './Pages/Blog/Blog';
import CourseCatagory from './Pages/CourseCatagory/CourseCatagory';
import CourseInfo from './Pages/CourseInfo/CourseInfo';
import Courses from './Pages/Courses/Courses';
import FAQ from './Pages/FAQ/FAQ';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import TermsAndConditions from './Pages/Login/TermsAndConditions/TermsAndConditions';


function App() {

   const routes = createBrowserRouter([

      {
         path: '/',
         element: <Main></Main>,
         children: [
            {
               path: '/',
               element: <Home></Home>,
               loader: () => fetch('http://localhost:5000/news')

            },

            {
               path: '/courses',
               element: <Courses></Courses>
            },
            {
               path: '/faq',
               element: <FAQ></FAQ>
            },
            {
               path: '/blog',
               element: <Blog></Blog>
            },
            {
               path: '/login',
               element: <Login></Login>
            },
            {
               path: '/register',
               element: <Register></Register>
            },

            {
               path: '/course/:id',
               element: <CourseCatagory></CourseCatagory>,
               loader: ({params}) => fetch(`http://localhost:5000/catagory/${params.id}`)
            },

            {
               path: '/courseInfo/:id',
               element: <CourseInfo>
               </CourseInfo>,
               loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
              
            },
            {
               path: '/terms',
               element: <TermsAndConditions></TermsAndConditions>
            }
         ]
      }
   ])


   return (
      <div>
         <RouterProvider router={routes}></RouterProvider>
      </div>
   )
 
}

export default App;
