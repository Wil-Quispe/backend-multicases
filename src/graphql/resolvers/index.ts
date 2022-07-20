const resolvers = {
  Query: {
    user: async (_: any, __: any, context: any) => {
      const { Models } = context
      const { User } = Models
      const users = await User.find({})
      return users
    },
  },
  Mutation: {
    signup: async (
      _: any,
      { name, username, latitude, longitude }: any,
      context: any
    ) => {
      const { Models } = context
      const { User } = Models

      const newUser = new User({
        name,
        username,
        currentLocation: { latitude, longitude },
        lastLocation: { latitude: '0', longitude: '0' },
      })

      return await newUser.save()
    },
    updateLocation: async (
      _: any,
      { _id, latitude, longitude, lastLatitude, lastLongitude }: any,
      context: any
    ) => {
      const { Models } = context
      const { User } = Models

      const result = await User.findByIdAndUpdate(
        _id,
        {
          currentLocation: { latitude, longitude },
          lastLocation: { latitude: lastLatitude, longitude: lastLongitude },
        },
        { new: true }
      )
      return result
    },
  },
}

export default resolvers
