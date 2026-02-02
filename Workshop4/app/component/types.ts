export type ButtonVariant = "primary" | "secondary" | "danger";
export type ButtonSize = "small" | "medium" | "large";

export type Item = {
  id: string;
  productName: string;
  price: number;
  pcs: number;
  btnColor: ButtonVariant;
  btnSize: ButtonSize;
};