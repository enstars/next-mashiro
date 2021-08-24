/**
 * note.js | https://theme-next.js.org/docs/tag-plugins/note
 */

'use strict';

module.exports = ctx => function(args, content) {
  const keywords = ['Tetora', 'Hajime', 'Tomoya', 'Hinata', 'Midori', 'Tori', 'Shinobu', 'Yuta', 'Mitsuru', 'Tsukasa', 'Subaru', 'Hokuto', 'Makoto', 'Souma', 'Adonis', 'Koga', 'Ritsu', 'Mao', 'Yuzuru', 'Arashi', 'Keito', 'Eichi', 'Kaoru', 'Izumi', 'Chiaki', 'Kuro', 'Wataru', 'Kanata', 'Rei', 'Nazuna', 'Jin', 'Akiomi', 'Leo', 'Mika', 'Shu', 'Sora', 'Natsume', 'Tsumugi', 'Madara', 'Hiyori', 'Jun', 'Nagisa', 'Ibara', 'Seiya', 'Hiiro', 'Aira', 'Mayoi', 'Tatsumi', 'Rinne', 'HiMERU', 'Kohaku', 'Niki', 'Gatekeeper'];
  const className = [];
  for (let i = 0; i < 2; i++) {
    if (keywords.includes(args[0])) {
      className.push(args.shift());
    } else {
      break;
    }
  }

  content = ctx.render.renderSync({ text: content, engine: 'markdown' });
  if (args.length === 0) {
    return `<div character="${className.join(' ')}">${content}</div>`;
  }
  return `<details character="${className.join(' ')}"><summary>${ctx.render.renderSync({ text: args.join(' '), engine: 'markdown' })}</summary>
${content}
</details>`;
};
