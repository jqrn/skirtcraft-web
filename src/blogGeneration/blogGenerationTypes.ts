interface PageInput {
  path: string;
  component: string;
  layout?: string;
  context?: any;
}

interface Actions {
  createPage: (page: PageInput) => void;
  deletePage: (page: PageInput) => void;
  createRedirect: (opts: {
    fromPath: string;
    isPermanent?: boolean;
    redirectInBrowser?: boolean;
    toPath: string;
  }) => void;
}

export type GatsbyCreatePages = (fns: {
  graphql: any;
  actions: Actions;
}) => void;
