import FroalaEditorComponent from 'ember-froala-editor/components/froala-editor';

export default FroalaEditorComponent.extend({
  options: null,
  init() {
    if (!this.get('options')) {
      const options =  {
        theme : 'gray',
        toolbarInline: false,
        placeholderText: 'Start designing content for this landing page.',
        allowHTML: true,
        saveInterval: false,
        pastePlain: true,
        spellcheck: true,
        quickInsertButtons: true,
        imageInsertButtons: ['imageUpload'],
        imageAllowedTypes: ['jpeg', 'jpg', 'png'],
        pluginsEnabled: [
          'lists',
          'link',
          //'image',
          'paragraphFormat',
          'align',
          'embedly',
          'emoticons',
          'link',
          'video',
          'quote',
          'specialCharacters',
        ],
        paragraphFormat: {
          N: 'Normal',
          H2: 'Heading',
          H3: 'Subheading'
        },
        toolbarButtons: [
          'bold',
          'italic',
          'underline',
          'strikeThrough',
          '|',
          'paragraphFormat',
          'align',
          'formatOL',
          'formatUL',
          'quote',
          //'-',
          'insertLink',
          //'insertImage',
          'insertVideo',
          'embedly',
          '|',
          'emoticons',
          'specialCharacters',
          'insertHR',
          '|',
          'help',
        ],
      };
      this.set('options', options);
    }
    this._super(...arguments);
  }
});
