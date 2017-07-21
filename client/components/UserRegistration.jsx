import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Link } from 'react-router-dom'
import Dropzone from 'react-dropzone'
import request from 'superagent'

import { addNewUser } from '../actions/index'

const CLOUDINARY_UPLOAD_PRESET = 'm7lw5icy'
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/hpyyiawap/image/upload'


class UserRegistration extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      uploadedFile: null,
      uploadedFileCloudinaryUrl: ''
    }
  }

  onImageDrop (files) {
    this.setState({
      uploadedFile: files[0]
    })

    this.handleImageUpload(files[0])
  }

  handleImageUpload (file) {
    let upload = request
      .post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      .field('file', file)

    upload.end((err, response) => {
      if (err) {
        console.error(err)
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        })
      }
    })
  }


  render() {
    return (
      <div className="WriteContract">
        <form method="post" onSubmit={ (e) => { registerNewUser(e) } } >
        <h3>New User Registration</h3>
          <label>First Name:</label><br /><input className="userRegField" type="text" name="fName" /><br />
          <label>Last Name:</label><br /><input className="userRegField" type="text" name="lName" /><br />
          <label>Organisation:</label><br /><input className="userRegField" type="text" name="organisation"></input><br />
          <label>Phone Number:</label><br /><input className="userRegField" type="text" name="phone"></input><br />
          <label>Email:</label><br /><input className="userRegField" type="text" name="email"></input><br />
          <label>Street Address:</label><br /><input className="userRegField" type="text" name="street"></input><br />
          <label>Suburb:</label><br /><input className="userRegField" type="text" name="suburb"></input><br />
          <label>Profile Picture URL:</label><input type='text' name='user_image_url' readOnly='readonly' value={this.state.uploadedFileCloudinaryUrl} /><br />
          <div className='imageButtonAndDisplay'>
              <Dropzone className='dropzone'
                onDrop={this.onImageDrop.bind(this)}
                multiple={false}
                accept='image/*'>
                <div className='uploadButton'>Drop an image or click to select a file to upload.</div>
              </Dropzone>
              <div className='imageContainer'>
                {
                      this.state.uploadedFileCloudinaryUrl === ''
                        ? null
                        : (
                          <div>
                            <img className='uploadImage' src={this.state.uploadedFileCloudinaryUrl} />
                          </div>
                        )
                      }
              </div>
            </div>
          <button type="submit" className="newUser-submit" value="Sign Me Up!" name="submit">Submit</button>
        </form>
      </div>
    )}
}

function registerNewUser(e){
  e.preventDefault(e)
  var userRegistrationForm = {
    fName: e.target.elements.fName.value,
    lName: e.target.elements.lName.value,
    organisation: e.target.elements.organisation.value,
    phone: e.target.elements.phone.value,
    email: e.target.elements.email.value,
    street_address: e.target.elements.street.value,
    suburb: e.target.elements.suburb.value,
    user_image_url: e.target.user_image_url.value

  }
  addNewUser(userRegistrationForm, testCallback)
}

function testCallback (err, status) {
  if (err) {
    console.log(err)
  } else {
    console.log(status)
  }
}

function mapStateToProps(state){
    return {
      dispatch: state.dispatch
    }
}

export default connect(mapStateToProps)(UserRegistration)
