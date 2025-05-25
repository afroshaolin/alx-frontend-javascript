export type RowID = number;

export interface RowElement {
    firstName: string;
    lastName: string;
    age?: number;  
}

export function insertRow(row: RowElement) {
  console.log('Insert row', row);
  return Math.floor(Math.random() * Math.floor(1000));
}

export function deleteRow(RowID: RowID) {
  console.log('Delete row id', RowID);
  return;
}

export function updateRow(RowID: RowID, Row: RowElement) {
  console.log(`Update row ${RowID}`, Row);

  return RowID;
}
