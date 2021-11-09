import axios from "axios";
import React, { useEffect, useState } from "react";
import Masonry from 'react-masonry-component';
import styles from '../styles/Gallery.module.scss';
import Link from 'next/link';

const masonryOptions = {
    transitionDuration: 1000
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }


function Gallery() {
    
    // 1. 외부 변수에 담아서
    const [lists, setLists] = useState();
    
    useEffect(() => {
        // 2. axios 로 가져와서 변수에 담기
        axios
            .get("https://mm-blog-api.herokuapp.com/projects", {

            })
            .then((res)=> {
                const temp = [];
                for (let i = 0; i < res.data.length; i++) {
                    temp.push({
                        src: res.data[i].image_src,
                        id: res.data[i].id,
                        title: res.data[i].title 
                    });
                }
                setLists(temp);
            })
            .catch((error) => {
                alert(`알 수 없는 에러가 발생함: ${error}`);
            })
    }, []);
    if ( !lists) {
        return null;
    }
  
    const childElements = lists.map(function(element, index){
       return (
            <li className={styles.gallery_item} key={index}>
                <Link href={`/projects/view?id=${element.id}`}>
                    <a>
                        <figure className={styles.gallery_image}>
                            <img src={element.src} style={{width:'100%'}}/>
                            <figcaption className={styles.gallery_title}>
                                <h4 className={styles.gallery_text}>{element.title}</h4>
                            </figcaption>
                        </figure>
                    </a>
                </Link>
            </li>
        );
    });

    return (
        <Masonry
            className={styles.portfolio_items} 
            elementType={'ul'} 
            options={masonryOptions} 
            disableImagesLoaded={false}
            updateOnEachImageLoad={false} 
            imagesLoadedOptions={imagesLoadedOptions} 
        >
            {childElements}
        </Masonry>
    )
}

export default Gallery;
