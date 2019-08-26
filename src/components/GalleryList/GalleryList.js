import React, { Component } from 'react';
import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {

    render() {
        const gallaryListArray = this.props.galleryList.map((item,index) => {
            return (
                <GalleryItem key={index} item={item} putGallery={this.props.putGallery}/>
            )
        });

        return (
            <div>
                {gallaryListArray}
            </div>
        )
    }
}

export default GalleryList;