import React, { useState, useEffect } from "react";


const Fundations = () =>{

    const API_URL = `http://localhost:3000/`; 
   
    const[posts,setPosts] = useState({});
    const[currentPage,setCurrentPage] =useState(1);
    const[postsPerPage, setPostsPerPage] = useState(3);

    useEffect(() => {
        fetch(`${API_URL}/posts`)
            .then(response => response.json())
            .then(fetchedPosts => {
                console.log(fetchedPosts);
                setPosts(fetchedPosts)
            })
            .catch(err => console.error(err));
    }, []);


const handleClick =(e) => {
    setCurrentPage(e.target.id)

}

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

const renderPosts = currentPosts.map((post, index) => {
  return <li key={index}>{post}</li>;
});

// Logic for displaying page numbers
const pageNumbers = [];
for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
  pageNumbers.push(i);
}

const renderPageNumbers = pageNumbers.map(number => {
  return (
    <li
      key={number}
      id={number}
      onClick={handleClick}
    >
      {number}
    </li>
  );
});


    return(
        <div className="listOfObjects-fundations">
            <ul>
              {renderPosts}
            </ul>
            <ul id="page-numbers">
              {renderPageNumbers}
            </ul>
        </div>
    )
}

export default Fundations;