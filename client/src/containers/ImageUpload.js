import React, { Component } from 'react'
import Spinner from '../components/Spinner'
import Images from '../components/Images'
import Buttons from '../components/Buttons'
import { getCookie } from '../actions/actions'
// import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
// import { API_URL } from './config'
// import './App.css'

const cloudName = 'derrickbozich'

export default class ImageUpload extends Component {

  state = {
    uploading: false,
    images: []
  }

  onChange = e => {
    const files = Array.from(e.target.files)
    this.setState({ uploading: true })

    const formData = new FormData()

    files.forEach((file, i) => {
      formData.append(i, file)
    })

    fetch(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, {
      method: 'POST',
      body: formData,
      headers: {
        'Authorization': getCookie('my_jwt_token'),
        'X-CSRF-Token': getCookie('my_csrf_token')
      },
      credentials: 'same-origin'
      })
    .then(res => res.json())
    .then(images => {
      this.setState({
        uploading: false,
        images
      })
    })
  }

  removeImage = id => {
    this.setState({
      images: this.state.images.filter(image => image.public_id !== id)
    })
  }

  render() {
    const { uploading, images } = this.state

    const content = () => {
      switch(true) {
        case uploading:
          return <Spinner />
        case images.length > 0:
          return <Images images={images} removeImage={this.removeImage} />
        default:
          return <Buttons onChange={this.onChange} />
      }
    }

    return (
      <div>
        <div className='buttons'>
          {content()}
        </div>
      </div>
    )
  }
}
