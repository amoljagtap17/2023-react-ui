import { EnumSkillCategory } from "app/types";
import { array, mixed, number, object, string } from "yup";

export const validationSchema = object().shape({
  skills: array().of(
    object().shape({
      category: mixed()
        .oneOf([EnumSkillCategory.PRIMARY, EnumSkillCategory.SECONDARY])
        .required("Category is required"),
      name: string().required("Name is required"),
      percent: number()
        .when("category", {
          is: EnumSkillCategory.PRIMARY,
          then(schema) {
            return schema
              .min(1, "Should be greater than 1")
              .max(100, "Should be less than 100");
          },
        })
        .required("Percent is required"),
    })
  ),
});
