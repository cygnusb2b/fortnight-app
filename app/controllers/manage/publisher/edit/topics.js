import ListController from 'fortnight/controllers/manage/abstract-list';

export default ListController.extend({
  init() {
    this._super(...arguments);
    this.set('sortOptions', [
      { key: 'createdAt', label: 'Created' },
      { key: 'updatedAt', label: 'Updated' },
      { key: 'name', label: 'Name' },
      { key: 'publisherName', label: 'Publisher' },
    ]);
    this.set('sortBy', 'name');
    this.set('ascending', true);
  },
});
