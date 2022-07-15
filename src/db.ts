import { connect } from 'mongoose'

export const connectDB = async () => {
  try {
    await connect(
      'mongodb://uusseerr11:uusseerr11@cluster0-shard-00-00.odw98.mongodb.net:27017,cluster0-shard-00-01.odw98.mongodb.net:27017,cluster0-shard-00-02.odw98.mongodb.net:27017/DBmulticases?ssl=true&replicaSet=atlas-10t3ev-shard-0&authSource=admin&retryWrites=true&w=majority'
    )
    console.log('DB connected')
  } catch (error) {
    console.log('DB connect error', error)
  }
}

connectDB()
