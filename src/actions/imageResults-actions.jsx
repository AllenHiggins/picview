export const openDialog = (val) => {
    return {
        type:'IMAGERESULT_OPEN_DIALOG',
        payload: val
    }
}

export const getCurrentImageSelected = (image) => {
    return {
        type: 'IMAGERESULT_CURRENTIMAGE',
        payload: image
    }
}