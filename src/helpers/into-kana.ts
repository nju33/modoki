import {HiraganaChar} from '../interfaces';

const map = new Map<HiraganaChar, string>();
map.set('あ', 'ア');
map.set('い', 'イ');
map.set('う', 'ウ');
map.set('え', 'エ');
map.set('お', 'オ');
map.set('か', 'カ');
map.set('き', 'キ');
map.set('く', 'ク');
map.set('け', 'ケ');
map.set('こ', 'コ');
map.set('さ', 'サ');
map.set('し', 'シ');
map.set('す', 'ス');
map.set('せ', 'セ');
map.set('そ', 'ソ');
map.set('た', 'タ');
map.set('ち', 'チ');
map.set('つ', 'ツ');
map.set('て', 'テ');
map.set('と', 'ト');
map.set('な', 'ナ');
map.set('に', 'ニ');
map.set('ぬ', 'ヌ');
map.set('ね', 'ネ');
map.set('の', 'ノ');
map.set('は', 'ハ');
map.set('ひ', 'ヒ');
map.set('ふ', 'フ');
map.set('へ', 'ヘ');
map.set('ほ', 'ホ');
map.set('ま', 'マ');
map.set('み', 'ミ');
map.set('む', 'ム');
map.set('め', 'メ');
map.set('も', 'モ');
map.set('や', 'ヤ');
map.set('ゆ', 'ユ');
map.set('よ', 'ヨ');
map.set('わ', 'ワ');
map.set('ゐ', 'ヰ');
map.set('ゑ', 'ヱ');
map.set('を', 'ヲ');
map.set('ん', 'ン');

export const intoKana = (chars: string) => {
  return (chars.split('') as HiraganaChar[])
    .map(char => map.get(char))
    .join('');
};
