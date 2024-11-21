import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ICategory } from "../../../@libs/types";
import { CategoryService } from "../../../services/category.service";
import { CategoryForm } from "./form";

export function CategoryEdit() {
  const params = useParams();

  const [category, setCategory] = useState<ICategory>({} as ICategory);

  useEffect(() => {
    
    if (params?.id) {
      CategoryService.getById(Number(params.id))
        .then(result => {
          setCategory(result.data)
        })
    }
  }, [params]);

  return (
    <>
      <CategoryForm category={category} setCategory={setCategory} showForm={true} />
    </>
    
  )
}