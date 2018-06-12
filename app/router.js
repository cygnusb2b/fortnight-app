import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {

  this.route('advertiser', function() {
    this.route('create');
    this.route('edit', { path: ':id' });
  })

  this.route('campaign', function() {
    this.route('create');
    this.route('edit', { path: ':id' }, function() {
      this.route('criteria');
      this.route('creatives', function() {
        this.route('create', function() {
          this.route('image');
        });
        this.route('edit', { path: ':creative_id' }, function() {
          this.route('image');
        });
      });
      this.route('notifications');
    });
  })

  this.route('placement', function() {
    this.route('create');
    this.route('edit', { path: ':id' });
  })

  this.route('contact', function() {
    this.route('create');
    this.route('edit', { path: ':id' });
  })

  this.route('portal', { path: 'portal/:advertiser_id' }, function() {
    this.route('campaigns', { path: 'campaigns/:hash' }, function() {
      this.route('reports', function() {
        this.route('creative-breakdown');
        this.route('summary');
      })
      this.route('material-collect', function() {
        this.route('story')
      })
    })
  })

  this.route('publisher', function() {
    this.route('create');
    this.route('edit', { path: ':id' });
  })

  this.route('story', function() {
    this.route('create');
    this.route('edit', { path: ':id' }, function() {
      this.route('primary-image');
    });
  })

  this.route('template', function() {
    this.route('create');
    this.route('edit', { path: ':id' });
  })

  this.route('login');
  this.route('logout');
});

export default Router;
