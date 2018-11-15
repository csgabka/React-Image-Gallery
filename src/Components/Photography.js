import React, {Component} from 'react';
import '../css/Photography.css';
import Image1 from "../img/gallery/1.jpg";
import Image2 from "../img/gallery/2.jpg";
import Image3 from "../img/gallery/3.jpg";
import Image4 from "../img/gallery/4.jpg";
import Image5 from "../img/gallery/5.jpg";
import Image6 from "../img/gallery/6.jpg";
import Image7 from "../img/gallery/7.jpg";
import Image8 from "../img/gallery/8.jpg";
import Image9 from "../img/gallery/9.jpg";
import GalleryModal from '../Components/GalleryModal';

class Photography extends Component {

	constructor(props) {
		super(props);
		this.state = {
			galleryContent: 'gallery-content-loading',
			ImageUrl: '',
			imageFadein: [false, false, false],
			currentIndex: null,
			showModal: false,
			modalBody: 'modal-body-hidden',
			ImageUrls: [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9]
		}
		this.imageLoaded = this.imageLoaded.bind(this);
		this.openModal = this.openModal.bind(this);
		this.onClose = this.onClose.bind(this);
		this.loadNext = this.loadNext.bind(this);
		}

	imageLoaded(index){
		this.setState({galleryContent: 'gallery-content-loaded'});

		/*const newImageFadeIn = this.state.imageFadein.slice() //copy the array
		newImageFadeIn[0] = true //execute the manipulations
		this.setState({imageFadeIn: newImageFadeIn}) //set the new state*/

	}

	

	openModal(ImageUrl, index) {
  	this.setState({
   		showModal: true,
   		ImageUrl: ImageUrl,
   		currentIndex: index
  		})
 	};

 	onClose = (event) => {
 		this.setState({
 			showModal: false,
 		})
 	}

 	loadNext = (ImageUrl, currentIndex, ImageUrls) => {
 		if (currentIndex === ((ImageUrls.length)-1)) {
 			this.setState({currentIndex: 0});
 			this.setState({ImageUrl: ImageUrls[0]});
 		}
 		else {
 			 this.setState({ImageUrl: ImageUrls[currentIndex+1]});
 			this.setState({currentIndex: currentIndex+1});
 		}

 
 	}

 	 loadPrevious = (ImageUrl, currentIndex, ImageUrls) => {
 	 	if (currentIndex === 0) {
 	 		this.setState({currentIndex: ImageUrls.length-1});
 	 		this.setState({ImageUrl: ImageUrls[ImageUrls.length-1]});
 	 	}
 	 	else {
 	 		this.setState({ImageUrl: ImageUrls[currentIndex-1]});
 			this.setState({currentIndex: currentIndex-1});
 	 	}
 	}

	render () {
		const {ImageUrls} = this.state;
    	return (
			<div className="gallery-container">
			 {ImageUrls.map((ImageUrl, index, ImageUrls)=> {
				return (<div key={index}>
						<img id="thumbnail" onLoad={this.imageLoaded} src={ImageUrl} alt={ImageUrl[index]}
						className={this.state.galleryContent}
						onClick={() => this.openModal(ImageUrl, index)}/>
						</div>

					)
			})}
			

			<GalleryModal loadNext={this.loadNext} loadPrevious={this.loadPrevious} ImageUrl={this.state.ImageUrl} currentIndex={this.state.currentIndex} 
			onClose={this.onClose} ImageUrls={this.state.ImageUrls}
			openModal={this.openModal} isOpen={this.state.showModal} src={this.state.ImageUrl} />
			</div>
			
			
			);
    	}
}

export default Photography;