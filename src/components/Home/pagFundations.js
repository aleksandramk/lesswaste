import React, { useState, useEffect } from "react";


const Fundations = ({acvtiveFundation}) =>{

    const API_URL = `http://localhost:3005`; 
   
    const[posts,setPosts] = useState(null);
    const[currentPage,setCurrentPage] =useState(1);
    const[postsPerPage, setPostsPerPage] = useState(3);

    

    useEffect(() => {
        fetch(`${API_URL}/${acvtiveFundation}`)
            .then(response => response.json())
            .then(fetchedPosts => {
                console.log(fetchedPosts);
                setPosts(fetchedPosts);
                setCurrentPage(1);
            })
            .catch(err => console.error(err));

            
    }, [acvtiveFundation]);


const handleClick =(e) => {
    setCurrentPage(e.target.id)

}

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);

const renderPosts = currentPosts?.map((post, index) => {
  return (

    <div className="whoWeHelp-post" key={index}>
      <div>
        <h3>{post.header}</h3>
        <p>{post.subheader}</p>
      </div>
      
      <p>{post.desc}</p>
    </div>

  )
  
});

// Logic for displaying page numbers
const pageNumbers = [];
for (let i = 1; i <= Math.ceil(posts?.length / postsPerPage); i++) {
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