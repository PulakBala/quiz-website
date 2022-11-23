
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import JavaScript from './Components/JavaScript/JavaScript';
import ReactQuestion from './Components/ReactQuestion/ReactQuestion';
import Statistics from './Components/Statistics/Statistics';
import Topics from './Components/Topics/Topics';

import Main from './Layout/Main';

function App() {


  const router = createBrowserRouter([
    {
      path: '/',
      element:<Main></Main>,
      children:[
        {
          path: '/',
          loader: async()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element:<Home></Home>
        },
        {
          path: '/topics',
          element:<Topics></Topics>
        },
        {
          path:'/statistics',
          element: <Statistics></Statistics>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path: 'quiz/1',
          loader: async ()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz/1')
          },
          element:<ReactQuestion></ReactQuestion>
        },
        {
          path: 'quiz/2',
          loader: async () =>{
            return fetch('https://openapi.programming-hero.com/api/quiz/2')
          },
          element: <JavaScript></JavaScript>
        }
        
      ]
    }
  ])
  return (
    <div className="App">
       <RouterProvider router={router}>

       </RouterProvider>
    </div>
  );
}

export default App;
