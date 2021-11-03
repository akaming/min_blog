import axios from "axios";
import React, { useEffect, useState } from "react";
import Masonry from 'react-masonry-component';
import styles from '../styles/Gallery.module.scss';

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
                        link: res.data[i].link,
                        title: res.data[i].title 
                    });
                }
                setLists(temp);
            })
    }, []);
    if ( !lists) {
        return null;
    }
  
    const childElements = lists.map(function(element, index){
       return (
            <li className={styles.gallery_item} key={index}>
                <a href={element.link} target="_blank">
                    <figure className={styles.gallery_image}>
                        <img src={element.src} style={{width:'100%'}}/>
                        <figcaption className={styles.gallery_title}>
                            <h4 className={styles.gallery_text}>{element.title}</h4>
                        </figcaption>
                    </figure>
                </a>
            </li>
        );
    });

    return (
        <Masonry
            className={styles.portfolio_items} // default ''
            elementType={'ul'} // default 'div'
            options={masonryOptions} // default {}
            disableImagesLoaded={false} // default false
            updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            imagesLoadedOptions={imagesLoadedOptions} // default {}
        >
            {childElements}
        </Masonry>
    )
}

export default Gallery;
