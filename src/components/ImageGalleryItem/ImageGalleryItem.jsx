import { ModalImg } from 'components/Modal/Modal';
import { Component } from 'react'
import { Img } from './ImageGalleryItem.styled';
export  class ImageGalleryItem extends Component {
    state = {
        isModalOpen: false,
    };
    
    openModal = () => {
        this.setState({ isModalOpen: true });
    };
    
    closeModal = () => {
        this.setState({ isModalOpen: false });
    };


  render() {
    return (
    <>
        <Img onClick={this.openModal} src={this.props.photo.webformatURL} alt="" className="ImageGalleryItemImage"/>
        <ModalImg isModalOpen={this.state.isModalOpen} closeModal={this.closeModal}>
            <img src={this.props.photo.largeImageURL} alt=""/>
        </ModalImg>
    </>
    
    )
  }
}
