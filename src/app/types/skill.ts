export enum EnumSkillCategory {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
}

export interface iSkill {
  id: string;
  category: EnumSkillCategory;
  name: string;
  percent: number;
}

export interface iSkillsFormData {
  skills: iSkill[];
}
