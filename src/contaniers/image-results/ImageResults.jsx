import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { GridList, GridTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import ZoomIn from 'material-ui/svg-icons/action/zoom-in'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

class ImageResults extends Component {
    render() {

        state = {
            open: false,
            currentImage: ''
        }
        
        let imageListContent;
        const {images} = this.props
        const actions = [
            <FlatButton label="Close" primary={true} onClick={this.handleClose} />
        ]

        if(images){
            imageListContent = (
                <GridList cols={3}>
                    {images.map(img => (
                        <GridTile
                            title={img.tags}
                            key={img.id}
                            subtitle={
                                <span>
                                    by <strong>{img.user}</strong>
                                </span>
                            }
                            actionIcon={
                                <IconButton onClick={() => this.handleOpen(img.largeImageURL)}>
                                    <ZoomIn color="white" />
                                </IconButton>
                            }
                        >
                            <img src={img.largeImageURL} alt="image" />
                        </GridTile>
                    ))}
                </GridList>
            )
        }else{
           imageListContent = null
        }

        handleOpen = (img) => {
            this.setState({
                currentImage: img,
                open: true
            })
        }

        handleClose = () => {
            this.setState({
                open: false
            })
        }

        return (
            <div>
                {imageListContent}
                <Dialog
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <img scr={this.state.currentImage} alt="Selected Image" style={{ width:'100%'}}/>
                </Dialog>
            </div>
        )
    }
}

ImageResults.prototype = {
    images: PropTypes.array.isRequired
}

export default ImageResults