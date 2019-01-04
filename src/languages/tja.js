/*
Language: tja
Author: AioiLight
WebSite: https://aioilight.space/
Description: .tja file format
Category: charts
*/
function(hljs) {
  return {
    case_insensitive: true,
    contains: [
      hljs.COMMENT(' *//', '\n'),
      {
        className: 'meta-keyword',
        begin: '.*:',
        end: '\n'
      },
      {
        className: 'meta-keyword',
        begin: '.*#',
        end: '\n'
      },
      {
        className: 'space',
        begin: '0'
      },
      {
        className: 'don',
        begin: '[13]'
      },
      {
        className: 'ka',
        begin: '[24]'
      },
      {
        className: 'roll',
        begin: '[56]',
        end: '8'
      },
      {
        className: 'balloon',
        begin: '[79]',
        end: '8'
      },
    ]
  };
}
