import React, { Component } from 'react'
// const AWS = require('aws-sdk')
// const Fs = require('fs')
// const Polly = new AWS.Polly({
//     signatureVersion: 'v4',
//     region: 'us-east-1'
// })

// let params = {
//     'Text': 'Hi, my name is @anaptfox.',
//     'OutputFormat': 'mp3',
//     'VoiceId': 'Kimberly'
// }
export default class Polly extends Component {

// Create an Polly client

render () {
  // Polly.synthesizeSpeech(params, (err, data) => {
  //     if (err) {
  //         console.log(err.code)
  //     } else if (data) {
  //         if (data.AudioStream instanceof Buffer) {
  //             Fs.writeFile("./speech.mp3", data.AudioStream, function(err) {
  //                 if (err) {
  //                     return console.log(err)
  //                 }
  //                 console.log("The file was saved!")
  //             })
  //         }
  //     }
  // })
    return (
      <div>
          <label>Create note for Polly:</label>
          <input type='submit' onSubmit={this.onSubmit} />
      </div>
    )
  }
}