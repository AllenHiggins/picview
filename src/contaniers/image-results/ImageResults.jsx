import React, {Component} from 'react'
import { connect } from 'react-redux'
import { GridList, GridTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import ZoomIn from 'material-ui/svg-icons/action/zoom-in'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import {openDialog, getCurrentImageSelected} from '../../actions/imageResults-actions'

class ImageResults extends Component {

    handleOpen = (img) => {
        this.props.getCurrentImageSelected(img)
        this.props.openDialog(true)
    }

    handleClose = () => {
        this.props.openDialog(false)
    }

    render() {
     
        const {open, currentImage} = this.props.imageResults

        return (
            <div>
                <GridList cols={3}>
                    {this.props.images.map(img => (
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
                    open={open}
                    onRequestClose={this.handleClose}
                >
                    <img src={currentImage} alt="" style={{width: '100%', hieght: '100%'}}/>
                </Dialog>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        imageResults: state.imageResultsReducer,
    };
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        openDialog: (val) => {
            dispatch(openDialog(val))
      },
      getCurrentImageSelected: (image) => {
          dispatch(getCurrentImageSelected(image))
      }
    };
}
  
export default connect(mapStateToProps,mapDispatchToProps)(ImageResults);
