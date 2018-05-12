import Controller from '@ember/controller';
import { get } from '@ember/object';
import { inject } from '@ember/service';
import ActionMixin from 'fortnight/mixins/action-mixin';

export default Controller.extend(ActionMixin, {
  apollo: inject(),

  actions: {
    /**
     *
     * @param {object} fields
     */
    async create() {
      console.info('create!!!');
      // this.startAction();
      // const payload = {
      //   name,
      //   description,
      //   advertiserId: get(advertiser || {}, 'id'),
      //   url,
      //   externalLinks,
      // };
      // const variables = { input: { payload } };
      // try {
      //   const response = await this.get('apollo').mutate({ mutation, variables }, 'createCampaign');
      //   this.get('notify').info('Campaign successfully created.');
      //   return this.transitionToRoute('campaign.edit', response.id);
      // } catch (e) {
      //   this.get('graphErrors').show(e);
      // } finally {
      //   this.endAction();
      // }
    },
  },
});