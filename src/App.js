import {Link, Routes, Route} from 'react-router-dom';

import './App.css';
import UsersPage from "./pages/usersPage/usersPage";
import PostsPage from "./pages/postsPage/postsPage";
import UserDetails from "./pages/userDetails/userDetails";
import PostsOfUser from "./pages/postsOfUser/postsOfUser";
import PostDetails from "./pages/postDetails/postDetails";
import CommentsOfPost from "./pages/commentsOfPost/commentsOfPost";
import AlbumsOfUser from "./pages/albumsOfUser/albumsOfUser";
import Photos from "./pages/photos/photos";

function App() {
    return (
        <>
            <div className={'menu'}>
                <button><Link to={'/users'}>Users</Link></button>
                <button><Link to={'/posts'}>Posts</Link></button>
            </div>
            <div className={'container'}>
                <Routes>
                    <Route path={'/users'} element={<UsersPage/>}>
                        <Route path={':id/details'} element={<UserDetails/>}>
                            <Route path={'posts'} element={<PostsOfUser/>}/>
                        </Route>
                        <Route path={':id/albums'} element={<AlbumsOfUser/>}>
                            <Route path={'photos'} element={<Photos/>}/>
                        </Route>
                    </Route>
                    <Route path={'/posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostDetails/>}>
                            <Route path={'comments'} element={<CommentsOfPost/>}/>
                        </Route>
                    </Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
