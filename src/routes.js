import ShowBlogs from './components/ShowBlogs'
import AddBlog from './components/AddBlog'
import SingleBlog from './components/SingleBlog'
import EditBlog from './components/EditBlog'

export const routes =  [
    {path: '/',name:'showBlogsLink',component: ShowBlogs},
    {path: '/add',name:'addLink',component: AddBlog},
    {path: '/blog/:id',component: SingleBlog},
    {path: '/edit/:id',component: EditBlog},
]