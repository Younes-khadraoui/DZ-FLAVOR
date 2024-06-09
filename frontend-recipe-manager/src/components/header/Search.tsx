import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Search = () => {
  return (
    <div className="flex">
      <Select>
        <SelectTrigger className="w-[180px] p-3 bg-input">
          <SelectValue placeholder="Categories" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="sweets">Sweets</SelectItem>
          <SelectItem value="salads">Salads</SelectItem>
          <SelectItem value="breakfast">Breakfast</SelectItem>
        </SelectContent>
      </Select>
      <Input />
    </div>
  );
};

export default Search;
