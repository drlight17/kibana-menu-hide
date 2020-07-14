import { resolve } from 'path';

export default function(kibana) {
  return new kibana.Plugin({
    uiExports: {
      hacks: [
        'plugins/KSC/app'
      ],
//      ]
      styleSheetPaths: require('path').resolve(__dirname, 'public/app.css')
    }
  });
}
