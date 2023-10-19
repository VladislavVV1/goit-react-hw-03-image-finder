import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { List, ListItem } from './ImageGallery.styled';
import React from "react";

export const ImageGallery = ({photos}) => (
    // console.log(photos)
    <List>
        {photos.map(photo => (
                <ListItem key={photo.id}>
                    <ImageGalleryItem photo={photo}/>
                </ListItem>
        ))}
    </List>
)
