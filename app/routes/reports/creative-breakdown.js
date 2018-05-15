import Route from '@ember/routing/route';
import RouteQueryManager from 'ember-apollo-client/mixins/route-query-manager';

import query from 'fortnight/gql/queries/reports/campaign-creative-breakdown';

export default Route.extend(RouteQueryManager, {

  model(params, transition) {
    const hash = transition.params.reports.hash;
    console.log(hash);
    const variables = { input: { hash } };
    return this.apollo.watchQuery({ query, variables });
  },

})
