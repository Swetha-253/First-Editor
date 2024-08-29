import { DefaultSchema } from 'wax-prosemirror-core';
import { BaseService, InlineAnnotationsService, FullScreenService } from 'wax-prosemirror-services';

const config = {
  MenuService: [
    {
      templateArea: 'mainMenuToolBar',
      toolGroups: [
        'Base',
        {
          name: 'Annotations',
          more: [
            'Superscript',
            'Subscript',
            'SmallCaps',
            'Underline',
            'StrikeThrough',
          ],
        },
        'FullScreen',
      ],
    },
  ],

  SchemaService: DefaultSchema,

  services: [
    new InlineAnnotationsService(),
    new BaseService(),
    new FullScreenService(),
    // Note: Remove AnnotationToolGroupService, BaseToolGroupService, and FullScreenToolGroupService
  ],
};

export default config;
