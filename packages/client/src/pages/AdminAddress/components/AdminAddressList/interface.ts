export interface AdminAddressListProps {
  dataSource: any[];
  handleDelete: (id: number) => void;
}

export interface GetColumnsHelperOptions {
  handleDelete: (id: number) => void;
}
