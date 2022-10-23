export type Library = {
  address: string;
  category: string;
  city: string;
  // 以下仕様には記載がないが付与されていたもの
  // https://calil.jp/doc/api_ref.html
  faid: null;
  formal: string;
  geocode: string;
  // 仕様には記載がないが付与されていたもの
  isil: null;
  libid: string;
  libkey: string;
  post: string;
  pref: string;
  short: string;
  systemid: string;
  systemname: string;
  tel: string;
  url_pc: string;
};
