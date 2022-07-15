const resolvers = {
  Query: {
    user: async (_: any, __: any, context: any) => {
      const { Models } = context
      const { User } = Models
      const users = await User.find({})
      return users
    },
  },
}

export default resolvers
