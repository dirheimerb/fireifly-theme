export interface Borders {
  none: number;
  '1px': string;
  '2px': string;
  '4px': string;
}
const borders: Borders = {
  none: 0,
  '1px': '1px solid',
  '2px': '2px solid',
  '4px': '4px solid'
};

export default borders;
