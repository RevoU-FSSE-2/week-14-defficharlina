import AppProvider from './Provider/AppProvider'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, Category, CategoryEdit, CategoryNew, Profile, Login, Register } from './pages'
import { PublicLayout, AnotherLayout } from './layouts'

function App() {

  const router = createBrowserRouter([
    {
      element: <PublicLayout />,
      children: [
        {
          path: '/',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        }
      ]
    },
    {
      element: <AnotherLayout />,
      children: [
        {
          path: '/home',
          element: <Home />
        },
        {
          path: '/category',
          element: <Category />
        },
        /*{
          path: '/product/:id',
          element: <ProductDetail />
        },*/
        {
          path: '/category/new',
          element: <CategoryNew />
        },
        {
          path: '/category/edit/:id',
          element: <CategoryEdit />
        },
        {
          path: '/profile',
          element: <Profile />
        }
      ]
    }
  ])

  return (
    // cara lama tapi masih di pakai
    // <BrowserRouter>
    //   <AppProvider>
    //     <Routes>
    //       <Route element={<PublicLayout />}>
    //         <Route path={'/'} element={<Home />}/>
    //         <Route path={'/product'} element={<Product />} />
    //         <Route path={'/profile'} element={<Profile />} />
    //       </Route>
    //     </Routes>
    //   </AppProvider>
    // </BrowserRouter>
    <AppProvider>
      <RouterProvider router={router}/>
    </AppProvider>
  )
}

export default App
