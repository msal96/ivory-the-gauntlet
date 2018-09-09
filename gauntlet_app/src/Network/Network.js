import AWS from 'aws-sdk'
import { IDENTITY_POOL_ID, Region } from '../Config/Config'
import Constants from '../Constants/Constants'
import { CognitoIdToken } from 'amazon-cognito-identity-js';

export const receiveNotes = CognitoIdToken =>
  new Promise((resolve, reject) => {
    const { AWS } = window
    AWS.config.region = 'eu-central-1'
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'eu-central-1:4bafe65d-2fef-488c-801e-fe318fe9db5f',
    })

    AWS.config.credentials.get((res, err) => {
      const lambda = new AWS.Lambda()
      const lambdaParams = {
        FunctionName: 'Gauntlet_getNotes'
      }

      lambda.invoke(lambdaParams, (err, data) => {
        err ? reject(err) : resolve(JSON.parse(data.Payload))
      })
    })
  })


export const SendNoteToDB = Note =>
  new Promise((resolve, reject) => {
    AWS.config.region = Constants.Region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: Constants.IDENTITY_POOL_ID,
    })

    const lambda = new AWS.Lambda()
    var params = {
      FunctionName: 'Gauntlet_Send_Note',
      InvokeArgs: JSON.stringify(Note)
    }
    lambda.invokeAsync(params, err => {
      err ? reject(err) : resolve()
    })
  })
