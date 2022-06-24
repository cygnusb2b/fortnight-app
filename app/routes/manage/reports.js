import Route from '@ember/routing/route';
import moment from 'moment';
import RouteQueryManager from 'ember-apollo-client/mixins/route-query-manager';
import query from 'fortnight/gql/queries/report/list';

export default Route.extend(RouteQueryManager, {
  /**
   *
   * @param {object} params
   */
  async model() {
    const start = moment().startOf('week').valueOf();
    const end = moment().endOf('week').valueOf();

    const input = { start, end };
    const variables = { input };

    try {
      const response = await this.get('apollo').watchQuery({ query, variables, fetchPolicy: 'network-only' }, 'report');
      return response;
    } catch (e) {
      this.get('graphErrors').show(e);
    }
  },
});
