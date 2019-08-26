import React, { Component } from 'react';

class GalleryItem extends Component {
    state = {
        showImage: true
    }

    toggleImage = (event) => {
        alert(event.target.dataset.dog);
        this.setState({
            showImage: !this.state.showImage
        });
    }

    render() {
        let itemElement = <img data-dog="woof" src={this.props.item.path} />;

        if(!this.state.showImage) {
            itemElement = <p data-dog="woof">{this.props.item.description}</p>;
        }

        console.log(this.props);

        return(
            <div>
                <div  onClick={this.toggleImage}>
                    {itemElement}
                </div>
                
                <button data-meow={this.props.item.id} onClick={this.props.putGallery}>Likes: {this.props.item.likes}</button>
            </div>
        )
    }
}

export default GalleryItem;