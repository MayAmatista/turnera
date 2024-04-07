import { Service } from "./Service";

export interface CategoryOptionProps {
  service: Service;
  isServiceSelected: (id: number) => boolean;
  handleSelect: (id: number) => void;
}
