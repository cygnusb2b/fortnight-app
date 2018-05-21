import Route from '@ember/routing/route';
import RouteQueryManager from 'ember-apollo-client/mixins/route-query-manager';

import query from 'fortnight/gql/queries/reports/campaign-summary';

export default Route.extend(RouteQueryManager, {

  model() {
    const { hash } = this.modelFor('portal.reports.campaign');
    const variables = { input: { hash } };
    return this.apollo.watchQuery({ query, variables });
  },

})
