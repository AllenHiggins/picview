import React, {Component} from 'react'
import { GridList, GridTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import ZoomIn from 'material-ui/svg-icons/action/zoom-in'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'


class ImageResults extends Component {

    state = {
        open: false,
        currentImage: ''
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

    render() {
     
        const {images} = this.props

        return (
            <div>
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
                            <img src={img.largeImageURL} alt="" style={{width: '100%', hieght: '100%'}}/>
                        </GridTile>
                    ))}
                </GridList>
                <Dialog
                    actions={<FlatButton label="Close" primary={true} onClick={this.handleClose} />}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <img src={this.state.currentImage} alt="" style={{width: '100%', hieght: '100%'}}/>
                </Dialog>
            </div>
        )
    }
}

export default ImageResults