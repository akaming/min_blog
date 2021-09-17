import * as React from 'react';
import Masonry from 'react-masonry-component';
import styles from '../styles/Gallery.module.scss';

const masonryOptions = {
    transitionDuration: 1000
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }

class Gallery extends React.Component {
    render() {
        const childElements = this.props.elements.map(function(element){
           return (
                <li className={styles.gallery_item}>
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
        );
    }
}

export default Gallery;
