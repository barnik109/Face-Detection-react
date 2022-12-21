

import { useEffect, useState } from 'react';
import './app.css'
import Navbar from './components/Navbar';
import NewPost from './components/NewPost';

function App() {
  const [file, setFile] = useState();
  const [image, setImage] = useState();

  useEffect(()=> {
    const getImage = () => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        setImage({
          url: img.src,
          width: img.width,
          height: img.height
        })
      }
      
    }
    file && getImage();
  }, [file])
  
  return (
    <div>
      <Navbar />
      {image ? (<NewPost image={image} />):(
      <div className="newPostCard">
        <div className="addPost">
          <img src="https://media.istockphoto.com/id/1351147752/photo/studio-portrait-of-attractive-20-year-old-bearded-man.jpg?b=1&s=170667a&w=0&k=20&c=N-Uwgbn8qhGypoXFB6keEEC3mW0qhNynAqBqd8oNJw0="
            className='avatar'
            alt="" />
          <div className="postForm">
            <input type="text"
              placeholder="What's on your mind"
              className='postInput'
            />
            <label htmlFor="file">
              <img
                className="addImg"
                  src="https://www.freeiconspng.com/uploads/user-add-icon---shine-set-add-new-user-add-user-30.png"
                alt=""
              />
              <img
                className="addImg"
                src="https://icon-library.com/images/maps-icon-png/maps-icon-png-5.jpg"
                alt=""
              />
              <img
                className="addImg"
                src="https://d29fhpw069ctt2.cloudfront.net/icon/image/84451/preview.svg"
                alt=""
              />
              <button>Send</button>
            </label>
            <input
            onChange={(e)=>setFile(e.target.files[0])}  id='file' style={{ display: "none" }} type="file" />
          </div>
        </div>
        </div>
      )}
    </div>
  );
}

export default App;
