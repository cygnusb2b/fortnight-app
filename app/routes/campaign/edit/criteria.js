import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import RouteQueryManager from 'ember-apollo-client/mixins/route-query-manager';
import { inject } from '@ember/service';
import { get, set } from '@ember/object';
import { isPresent } from '@ember/utils';

import mutation from 'fortnight/gql/mutations/set-campaign-criteria';

export default Route.extend(RouteQueryManager, AuthenticatedRouteMixin, {
  errorProcessor: inject(),

  campaignId: null,

  model() {
    const model = this._super(...arguments);
    this.set('campaignId', model.id);
    const criteria = {
      start: moment(),
      end: null,
      placements: [],
      kvs: [],
    };
    if (!get(model, 'criteria')) set(model, 'criteria', criteria);
    return get(model, 'criteria');
  },

  actions: {
    update({ criteria }) {
      const { start, end, kvs, placements } = criteria;
      const campaignId = this.get('campaignId');
      const placementIds = placements.map(p => p.id);
      const startDate = moment(start).format('x');
      const endDate = isPresent(end) ? moment(end).format('x') : null;
      const payload = { start: startDate, end: endDate, placementIds, kvs };
      const variables = { input: { campaignId, payload } };
      const resultKey = 'setCampaignCriteria';
      return this.get('apollo').mutate({ mutation, variables }, resultKey)
        .then(() => this.refresh())
        .catch(e => this.get('errorProcessor').show(e))
      ;
    }
  }
})
