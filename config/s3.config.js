import AWS from 'aws-sdk'

const s3 = {}

s3.s3Client = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.REGION
})

s3.uploadParams = {
  Bucket: process.env.Bucket,
  Key: '', // pass key
  Body: null, // pass file body
}

export default s3
