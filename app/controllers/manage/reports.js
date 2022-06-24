import Controller from '@ember/controller';
import moment from 'moment';
import { inject } from '@ember/service';
import ActionMixin from 'fortnight/mixins/action-mixin';
import query from 'fortnight/gql/queries/report/list';
import { computed } from '@ember/object';

export default Controller.extend(ActionMixin, {
  apollo: inject(),
  start: null,
  end: null,

  init() {
    this._super(...arguments);
    this.set('start', moment().startOf('week'));
    this.set('end', moment().endOf('week'));
    this.setProperties({
      publishers: [],
      topics: [],
      placements: [],
      advertisers: [],
      campaigns: [],
    });
  },

  downloadInput: computed('start', 'end', 'publishers', 'topics', 'placements', 'advertisers', 'campaigns', function() {
    return JSON.stringify(this.getInput());
  }),

  getInput() {
    return {
      start: moment(this.get('start')).valueOf(),
      end: moment(this.get('end')).valueOf(),
      publisherIds: this.get('publishers').map(v => v.id),
      topicIds: this.get('topics').map(v => v.id),
      placementIds: this.get('placements').map(v => v.id),
      advertiserIds: this.get('advertisers').map(v => v.id),
      campaignIds: this.get('campaigns').map(v => v.id),
    };
  },

  async execute() {
    this.startAction();
    const variables = { input: this.getInput() };

    try {
      const response = await this.get('apollo').watchQuery({ query, variables, fetchPolicy: 'network-only' }, 'report');
      this.set('model', response);
    } catch (e) {
      this.get('graphErrors').show(e);
    } finally {
      this.endAction();
    }
  },

  actions: {
    setDates({ start, end }) {
      this.setProperties({ start, end });
    },
    reset() {
      this.setProperties({
        start: moment().startOf('week'),
        end: moment().endOf('week'),
        publishers: [],
        topics: [],
        placements: [],
        advertisers: [],
        campaigns: [],
      });
      this.execute();
    },
    update() {
      this.execute();
    },
  }
});
