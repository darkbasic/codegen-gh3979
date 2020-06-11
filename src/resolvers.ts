import {Resolvers} from './types';
import {AMapped, BMapped} from './codegen';

type Edge<T> = {cursor: Date; node: T};
type Paginated<T> = {
  count: number;
  edges: Edge<T>[];
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: Date | null;
    endCursor: Date | null;
  };
};

const resolvers: Resolvers = {
  Query: {
    paginated() {
      return {} as Paginated<AMapped | BMapped>;
    },
    simple() {
      return {} as AMapped | BMapped;
    },
  },
};

export default resolvers;
