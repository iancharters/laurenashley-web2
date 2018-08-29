import merge from 'lodash/merge';
import {resolvers as userResolvers} from './user';

export const resolvers = merge(userResolvers);
