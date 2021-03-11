import React, { useEffect, useState, useRef  } from 'react';
import './App.css';
import 'tachyons';

let pageNum = 1;
let limit = 3;
let url = `https://api.github.com/users/kailun-liu/repos?per_page=${limit}&page=${pageNum}`;


const InfiniteScroll = () => {

     const [postList, setPostList] = useState({
        list: []
      }); 

  useEffect(()=>{
    if(pageNum===1) {
    fetch(`https://api.github.com/users/kailun-liu/repos?per_page=${limit}&page=${pageNum}`)
      .then(rep=>rep.json())
      .then(data=>{
        setPostList({list: data})
        pageNum++;
      })
      .catch(console.log)}
  }, [])


    // tracking on which page we currently are
    const [page, setPage] = useState(1);
    const [isNotEnd, setNotIsEnd] = useState(true);
    // add loader refrence 
    const loader = useRef(null);

    useEffect(() => {
         var options = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0
         };
         const observer = new IntersectionObserver(handleObserver, options);
         if (loader.current) {
            observer.observe(loader.current)
         }
    }, []);

    useEffect(() => {
        if(pageNum>=2) {
        setTimeout(()=>{fetch(`https://api.github.com/users/kailun-liu/repos?per_page=${limit}&page=${pageNum}`)
              .then(rep=>rep.json())
              .then(data=>{
                if(data.length!==0) {
                 const newList = postList.list.concat(data);
                 setPostList({list: newList})
                 pageNum++;
               } else {
                 setNotIsEnd(false);
               }
              })
              .catch(console.log)}, 500)}
    }, [page])

      const handleObserver = (entities) => {
      const target = entities[0];
      if (target.isIntersecting) {  
          setPage((page) => page + 1)
        }
      }

      const isEndorNot = (judgement) => {
        if (judgement) {
          return (
                <div className="loading show loader" ref={loader}>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
            )
        }
      }
        return (
              <div className="container" >
                <div className="post-list">
                {
                postList.list.map((post, index) => {
                    return (<div key={index} className="post divStyle grow" >
                        <div className="flex">
                        <p className="w-20 pa2 mr2">ID:</p>
                        <h2 className="w-80 pa2 mr2"> {post.id} </h2>
                        </div>
                        <div className="flex">
                          <p className="w-20 pa2 mr2">Name:</p>
                          <h2 className="w-80 pa2 mr2"> {post.name} </h2>
                        </div>
                        <div className="flex">
                          <p className="w-20 pa2 mr2">Description:</p>
                          <h2 className="w-80 pa2 mr2"> {post.description} </h2>
                        </div>
                        <div className="flex">
                          <p className="w-20 pa2 mr2">Homepage:</p>
                          <a href={post.homepage} className="w-80 pa2 mr2"> {post.homepage} </a>
                        </div>
                        <div className="flex">
                          <p className="w-20 pa2 mr2">GitHub URL:</p>
                          <a href={post.html_url} className="w-80 pa2 mr2"> {post.html_url} </a>
                        </div>
                    </div>)
                })                 
                }
                {isEndorNot(isNotEnd)}
            </div>
          </div>
          )
      }
    
export default InfiniteScroll; 