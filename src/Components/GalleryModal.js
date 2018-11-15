import React, {Component} from 'react';
import '../css/GalleryModal.css';

class GalleryModal extends Component {
	constructor(props) {
		super(props);
    this.onKeyNavigation = this.onKeyNavigation.bind(this);
    this.focusRef = React.createRef();
  
}


 onKeyNavigation = (event, ImageUrl, currentIndex, ImageUrls) => {
  if ((event.keyCode) === 39) {
    this.props.loadNext(ImageUrl, currentIndex, ImageUrls)
  }
  else if ((event.keyCode) === 37) {
    this.props.loadPrevious(ImageUrl, currentIndex, ImageUrls)
  }
  else if ((event.keyCode) === 27) {
    this.props.onClose()
  }
 }

componentDidUpdate() {
  if (this.props.isOpen === true)
    this.focusRef.current.focus();
  }



 render() {
  const {ImageUrl, ImageUrls, currentIndex} = this.props;
  if (this.props.isOpen === false) {
   return null;
  }
 
  return(
  <div >
   <div className="modal-overlay" name={this.props.name}>
   <a  id="prev" href="#" className="previous round" 
   onClick={() => this.props.loadPrevious(ImageUrls, currentIndex, ImageUrls)}>‹</a>
   <a id="next" href="#" className="next round" onClick={() => this.props.loadNext(ImageUrl, currentIndex, ImageUrls)}>›</a>
    <button ref={this.focusRef} onKeyDown={(event) => this.onKeyNavigation(event, ImageUrl, currentIndex, ImageUrls)} id="close" onClick={this.props.onClose} type="button" className="close" aria-label="Close">
    <span aria-hidden="true">&times;</span><span>Close</span>
    </button>
    </div>
    <div className="modal-body"> 
     <img className="img-modal" alt={this.props.currentIndex} src={this.props.src} index={this.props.currentIndex}/>
   </div>
   </div>
  )
 }
}

export default GalleryModal;