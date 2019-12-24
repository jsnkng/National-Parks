import request from 'request'
import sharp from 'sharp'
import s3 from '../../../config/s3.config'

const s3Images = async images => {
  const { s3Client } = s3

  await images.forEach(image => {
    console.log('s3Images')

    const { url } = image
    s3.existParams.Key = url.replace(/[/:-\s]/g, '_')
    s3Client.headObject(s3.existParams, (err, metadata) => {
      console.log(err)
      if (err && err.code === 'NotFound') {
        // Handle no object on cloud here
        console.log("we did not find it")
        request({ url, encoding: null }, (err, resp, buffer) => {

          s3.uploadParams.Key = url.replace(/[/:-\s]/g, '_')
          s3.uploadParams.Body = sharp(buffer).resize({ width: 1440 })
          s3.uploadParams.ACL = 'public-read'
          s3Client.upload(s3.uploadParams, (e, d) => {
            if (e) {
              console.log({ error: 'Error -> ' + e })
            }
            console.log({message: 'File uploaded successfully! -> keyname = ' + url.replace(/[/:-\s]/g, '_')})
          })
        })
      } else {
        // s3.getSignedUrl('getObject', params, callback)
        console.log("we found it")
      }
    })
  })
}

export default s3Images