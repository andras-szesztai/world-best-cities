import { merge } from 'lodash'
import { City } from './City'

import { Resolvers } from 'types/generated/graphql'

export const resolvers: Resolvers = merge(City)
